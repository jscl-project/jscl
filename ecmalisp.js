var nil;

function pv (x) { return x==undefined? nil: x; }

function mv(){
    var r = [];
    r['multiple-value'] = true;
    for (var i=0; i<arguments.length; i++)
        r.push(arguments[i]);
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
    if (args.length < n) throw 'too few arguments';
}

function checkArgsAtMost(args, n){
    if (args.length > n) throw 'too many arguments';
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
var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "DECLAIM"};
l2;
var l3 = {name: "NIL"};
((l3).value = l3);
(nil = l3.value);
var l4 = {name: "T"};
((l4).value = l4);
var l5 = {name: "LAMBDA"};
l5;
var l6 = {name: "WHEN"};
l6;
var l7 = {name: "UNLESS"};
l7;
var l8 = {name: "DEFVAR"};
l8;
var l9 = {name: "DEFPARAMETER"};
l9;
var l10 = {name: "NAMED-LAMBDA"};
l10;
var l11 = {name: "DEFUN"};
l11;
var l12 = {name: "NULL"};
(function(){
    (l12).fvalue = (function(v2){
        ((v2)["fname"] = "NULL");
        return v2;
    })((function (values,v1){
        checkArgs(arguments, 2);
        return (function(){
            return ((v1 === l3.value)?l4.value: l3.value);
        })();
    }));
    return l12;
})();
var l13 = {name: "RETURN"};
l13;
var l14 = {name: "WHILE"};
l14;
var l15 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l15.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l15).value = 0));
    return l15;
})();
var l16 = {name: "GENSYM"};
var l17 = {name: "INTEGER-TO-STRING"};
(function(){
    (l16).fvalue = (function(v4){
        ((v4)["fname"] = "GENSYM");
        return v4;
    })((function (values,v3){
        checkArgsAtMost(arguments, 2);
        switch(arguments.length-1){
        case 0:
        v3="G";
        default: break;
        }
        return (function(){
            ((l15).value = (function(){
                var x1 = (function(){
                    var symbol = l15;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })());
            return (function(){
                var name = (function(){
                    var string1 = v3;
                    var string2 = l17.fvalue(pv, (function(){
                        var symbol = l15;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    if (typeof string1 != 'string')
                        throw 'The value ' + string1 + ' is not a type string.';
                    if (typeof string2 != 'string')
                        throw 'The value ' + string2 + ' is not a type string.';
                    return string1.concat(string2);
                })();
                if (typeof name != 'string')
                    throw 'The value ' + name + ' is not a type string.';
                return ({name: name});
            })();
        })();
    }));
    return l16;
})();
var l18 = {name: "BOUNDP"};
(function(){
    (l18).fvalue = (function(v6){
        ((v6)["fname"] = "BOUNDP");
        return v6;
    })((function (values,v5){
        checkArgs(arguments, 2);
        return (function(){
            return ((v5.value !== undefined)?l4.value: l3.value);
        })();
    }));
    return l18;
})();
var l19 = {name: "="};
(function(){
    (l19).fvalue = (function(v9){
        ((v9)["fname"] = "=");
        return v9;
    })((function (values,v7,v8){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v7;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v8;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })();
        })();
    }));
    return l19;
})();
var l20 = {name: "*"};
(function(){
    (l20).fvalue = (function(v12){
        ((v12)["fname"] = "*");
        return v12;
    })((function (values,v10,v11){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v10;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v11;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1*x2;
            })();
        })();
    }));
    return l20;
})();
var l21 = {name: "/"};
(function(){
    (l21).fvalue = (function(v15){
        ((v15)["fname"] = "/");
        return v15;
    })((function (values,v13,v14){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v13;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v14;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1/x2;
            })();
        })();
    }));
    return l21;
})();
var l22 = {name: "1+"};
(function(){
    (l22).fvalue = (function(v17){
        ((v17)["fname"] = "1+");
        return v17;
    })((function (values,v16){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v16;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
        })();
    }));
    return l22;
})();
var l23 = {name: "1-"};
(function(){
    (l23).fvalue = (function(v19){
        ((v19)["fname"] = "1-");
        return v19;
    })((function (values,v18){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v18;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1-x2;
            })();
        })();
    }));
    return l23;
})();
var l24 = {name: "ZEROP"};
(function(){
    (l24).fvalue = (function(v21){
        ((v21)["fname"] = "ZEROP");
        return v21;
    })((function (values,v20){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v20;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 0;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })();
        })();
    }));
    return l24;
})();
var l25 = {name: "TRUNCATE"};
(function(){
    (l25).fvalue = (function(v24){
        ((v24)["fname"] = "TRUNCATE");
        return v24;
    })((function (values,v22,v23){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x = (function(){
                    var x1 = v22;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v23;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1/x2;
                })();
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                return Math.floor(x);
            })();
        })();
    }));
    return l25;
})();
var l26 = {name: "EQL"};
(function(){
    (l26).fvalue = (function(v27){
        ((v27)["fname"] = "EQL");
        return v27;
    })((function (values,v25,v26){
        checkArgs(arguments, 3);
        return (function(){
            return ((v25 === v26)?l4.value: l3.value);
        })();
    }));
    return l26;
})();
var l27 = {name: "NOT"};
(function(){
    (l27).fvalue = (function(v29){
        ((v29)["fname"] = "NOT");
        return v29;
    })((function (values,v28){
        checkArgs(arguments, 2);
        return (function(){
            return (v28 !== l3.value ? l3.value : l4.value);
        })();
    }));
    return l27;
})();
var l28 = {name: "CONS"};
(function(){
    (l28).fvalue = (function(v32){
        ((v32)["fname"] = "CONS");
        return v32;
    })((function (values,v30,v31){
        checkArgs(arguments, 3);
        return (function(){
            return ({car: v30, cdr: v31});
        })();
    }));
    return l28;
})();
var l29 = {name: "CONSP"};
(function(){
    (l29).fvalue = (function(v34){
        ((v34)["fname"] = "CONSP");
        return v34;
    })((function (values,v33){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var tmp = v33;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value);
        })();
    }));
    return l29;
})();
var l30 = {name: "CAR"};
(function(){
    (l30).fvalue = (function(v36){
        ((v36)["fname"] = "CAR");
        return v36;
    })((function(){
        var func = (function (values,v35){
            checkArgs(arguments, 2);
            return (function(){
                return (function(){
                    var tmp = v35;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
            })();
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
    return l30;
})();
var l31 = {name: "CDR"};
(function(){
    (l31).fvalue = (function(v38){
        ((v38)["fname"] = "CDR");
        return v38;
    })((function (values,v37){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = v37;
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l31;
})();
var l32 = {name: "CAAR"};
(function(){
    (l32).fvalue = (function(v40){
        ((v40)["fname"] = "CAAR");
        return v40;
    })((function (values,v39){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v39;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l32;
})();
var l33 = {name: "CADR"};
(function(){
    (l33).fvalue = (function(v42){
        ((v42)["fname"] = "CADR");
        return v42;
    })((function (values,v41){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v41;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l33;
})();
var l34 = {name: "CDAR"};
(function(){
    (l34).fvalue = (function(v44){
        ((v44)["fname"] = "CDAR");
        return v44;
    })((function (values,v43){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v43;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l34;
})();
var l35 = {name: "CDDR"};
(function(){
    (l35).fvalue = (function(v46){
        ((v46)["fname"] = "CDDR");
        return v46;
    })((function (values,v45){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = v45;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l35;
})();
var l36 = {name: "CADDR"};
(function(){
    (l36).fvalue = (function(v48){
        ((v48)["fname"] = "CADDR");
        return v48;
    })((function (values,v47){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v47;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l36;
})();
var l37 = {name: "CDDDR"};
(function(){
    (l37).fvalue = (function(v50){
        ((v50)["fname"] = "CDDDR");
        return v50;
    })((function (values,v49){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v49;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l37;
})();
var l38 = {name: "CADDDR"};
(function(){
    (l38).fvalue = (function(v52){
        ((v52)["fname"] = "CADDDR");
        return v52;
    })((function (values,v51){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v51;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l38;
})();
var l39 = {name: "FIRST"};
(function(){
    (l39).fvalue = (function(v54){
        ((v54)["fname"] = "FIRST");
        return v54;
    })((function (values,v53){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = v53;
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l39;
})();
var l40 = {name: "SECOND"};
(function(){
    (l40).fvalue = (function(v56){
        ((v56)["fname"] = "SECOND");
        return v56;
    })((function (values,v55){
        checkArgs(arguments, 2);
        return (function(){
            return l33.fvalue(values, v55);
        })();
    }));
    return l40;
})();
var l41 = {name: "THIRD"};
(function(){
    (l41).fvalue = (function(v58){
        ((v58)["fname"] = "THIRD");
        return v58;
    })((function (values,v57){
        checkArgs(arguments, 2);
        return (function(){
            return l36.fvalue(values, v57);
        })();
    }));
    return l41;
})();
var l42 = {name: "FOURTH"};
(function(){
    (l42).fvalue = (function(v60){
        ((v60)["fname"] = "FOURTH");
        return v60;
    })((function (values,v59){
        checkArgs(arguments, 2);
        return (function(){
            return l38.fvalue(values, v59);
        })();
    }));
    return l42;
})();
var l43 = {name: "REST"};
(function(){
    (l43).fvalue = (function(v62){
        ((v62)["fname"] = "REST");
        return v62;
    })((function (values,v61){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var tmp = v61;
                return tmp === l3.value? l3.value: tmp.cdr;
            })();
        })();
    }));
    return l43;
})();
var l44 = {name: "LIST"};
(function(){
    (l44).fvalue = (function(v64){
        ((v64)["fname"] = "LIST");
        return v64;
    })((function (values){
        var v63= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v63 = {car: arguments[i], cdr: 
        v63};
        return (function(){
            return v63;
        })();
    }));
    return l44;
})();
var l45 = {name: "ATOM"};
(function(){
    (l45).fvalue = (function(v66){
        ((v66)["fname"] = "ATOM");
        return v66;
    })((function (values,v65){
        checkArgs(arguments, 2);
        return (function(){
            return l27.fvalue(values, ((function(){
                var tmp = v65;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value));
        })();
    }));
    return l45;
})();
var l46 = {name: "INCF"};
l46;
var l47 = {name: "DECF"};
l47;
var l48 = {name: "PUSH"};
l48;
var l49 = {name: "DOLIST"};
l49;
var l50 = {name: "DOTIMES"};
l50;
var l51 = {name: "COND"};
l51;
var l52 = {name: "CASE"};
l52;
var l53 = {name: "ECASE"};
l53;
var l54 = {name: "AND"};
l54;
var l55 = {name: "OR"};
l55;
var l56 = {name: "PROG1"};
l56;
var l57 = {name: "PROG2"};
l57;
var l58 = {name: "ENSURE-LIST"};
var l59 = {name: "LISTP"};
(function(){
    (l58).fvalue = (function(v68){
        ((v68)["fname"] = "ENSURE-LIST");
        return v68;
    })((function (values,v67){
        checkArgs(arguments, 2);
        return (function(){
            return (l59.fvalue(pv, v67) !== l3.value ? v67 : l44.fvalue(values, v67));
        })();
    }));
    return l58;
})();
var l60 = {name: "!REDUCE"};
(function(){
    (l60).fvalue = (function(v72){
        ((v72)["fname"] = "!REDUCE");
        return v72;
    })((function (values,v69,v70,v71){
        checkArgs(arguments, 4);
        return (function(){
            return (l12.fvalue(pv, v70) !== l3.value ? v71 : l60.fvalue(values, v69, (function(){
                var tmp = v70;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), (v69)(pv, v71, (function(){
                var tmp = v70;
                return tmp === l3.value? l3.value: tmp.car;
            })())));
        })();
    }));
    return l60;
})();
var l61 = {name: "+"};
(function(){
    (l61).fvalue = (function(v77){
        ((v77)["fname"] = "+");
        return v77;
    })((function (values){
        var v73= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v73 = {car: arguments[i], cdr: 
        v73};
        return (function(){
            return (function(v74){
                return (function(){
                    return (function(v75,v76){
                        (function(){
                            while(v75 !== l3.value){
                                (v76 = (function(){
                                    var tmp = v75;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (v74 = (function(){
                                        var x1 = v74;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v76;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                    return l3.value;
                                })();
                                (v75 = (function(){
                                    var tmp = v75;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v74;
                    })(v73,l3.value);
                })();
            })(0);
        })();
    }));
    return l61;
})();
var l62 = {name: "-"};
(function(){
    (l62).fvalue = (function(v83){
        ((v83)["fname"] = "-");
        return v83;
    })((function (values,v79){
        checkArgsAtLeast(arguments, 2);
        var v78= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v78 = {car: arguments[i], cdr: 
        v78};
        return (function(){
            return (l12.fvalue(pv, v78) !== l3.value ? (function(){
                var x1 = v79;
                if (typeof x1 !== 'number') throw 'Not a number!';
                return -x1;
            })() : (function(v80){
                return (function(){
                    return (function(v81,v82){
                        (function(){
                            while(v81 !== l3.value){
                                (v82 = (function(){
                                    var tmp = v81;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (v80 = (function(){
                                        var x1 = v80;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v82;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1-x2;
                                    })());
                                    return l3.value;
                                })();
                                (v81 = (function(){
                                    var tmp = v81;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v80;
                    })(v78,l3.value);
                })();
            })(v79));
        })();
    }));
    return l62;
})();
var l63 = {name: "APPEND-TWO"};
var l64 = {name: "APPEND"};
(function(){
    (l63).fvalue = (function(v86){
        ((v86)["fname"] = "APPEND-TWO");
        return v86;
    })((function (values,v84,v85){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v84) !== l3.value ? v85 : ({car: (function(){
                var tmp = v84;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l64.fvalue(pv, (function(){
                var tmp = v84;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v85)}));
        })();
    }));
    return l63;
})();
(function(){
    (l64).fvalue = (function(v88){
        ((v88)["fname"] = "APPEND");
        return v88;
    })((function (values){
        var v87= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v87 = {car: arguments[i], cdr: 
        v87};
        return (function(){
            return l60.fvalue(values, (function(){
                var symbol = l63;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v87, l3);
        })();
    }));
    return l64;
})();
var l65 = {name: "REVAPPEND"};
(function(){
    (l65).fvalue = (function(v91){
        ((v91)["fname"] = "REVAPPEND");
        return v91;
    })((function (values,v89,v90){
        checkArgs(arguments, 3);
        return (function(){
            (function(){
                return (function(){
                    while(v89 !== l3.value){
                        (v90 = ({car: (function(){
                            var tmp = v89;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: v90}));
                        (v89 = (function(){
                            var tmp = v89;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    }return l3.value;
                })();
            })();
            return v90;
        })();
    }));
    return l65;
})();
var l66 = {name: "REVERSE"};
(function(){
    (l66).fvalue = (function(v93){
        ((v93)["fname"] = "REVERSE");
        return v93;
    })((function (values,v92){
        checkArgs(arguments, 2);
        return (function(){
            return l65.fvalue(values, v92, l3);
        })();
    }));
    return l66;
})();
var l67 = {name: "PSETQ"};
l67;
var l68 = {name: "DO"};
l68;
var l69 = {name: "DO*"};
l69;
var l70 = {name: "LIST-LENGTH"};
(function(){
    (l70).fvalue = (function(v96){
        ((v96)["fname"] = "LIST-LENGTH");
        return v96;
    })((function (values,v94){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v95){
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l12.fvalue(pv, v94)) !== l3.value){
                            (v95 = (function(){
                                var x1 = v95;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                            (v94 = (function(){
                                var tmp = v94;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        }return l3.value;
                    })();
                })();
                return v95;
            })(0);
        })();
    }));
    return l70;
})();
var l71 = {name: "LENGTH"};
(function(){
    (l71).fvalue = (function(v98){
        ((v98)["fname"] = "LENGTH");
        return v98;
    })((function (values,v97){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof(v97) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                var x = v97;
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return x.length;
            })() : (((function(){
                var x = v97;
                return typeof x === 'object' && 'length' in x;
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var tmp = (v97)["length"];
                return tmp == undefined? l3.value: tmp ;
            })() : (l59.fvalue(pv, v97) !== l3.value ? l70.fvalue(values, v97) : l3.value)));
        })();
    }));
    return l71;
})();
var l72 = {name: "CONCAT-TWO"};
(function(){
    (l72).fvalue = (function(v101){
        ((v101)["fname"] = "CONCAT-TWO");
        return v101;
    })((function (values,v99,v100){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var string1 = v99;
                var string2 = v100;
                if (typeof string1 != 'string')
                    throw 'The value ' + string1 + ' is not a type string.';
                if (typeof string2 != 'string')
                    throw 'The value ' + string2 + ' is not a type string.';
                return string1.concat(string2);
            })();
        })();
    }));
    return l72;
})();
var l73 = {name: "MAPCAR"};
(function(){
    (l73).fvalue = (function(v104){
        ((v104)["fname"] = "MAPCAR");
        return v104;
    })((function (values,v102,v103){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v103) !== l3.value ? l3 : ({car: (v102)(pv, (function(){
                var tmp = v103;
                return tmp === l3.value? l3.value: tmp.car;
            })()), cdr: l73.fvalue(pv, v102, (function(){
                var tmp = v103;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}));
        })();
    }));
    return l73;
})();
var l74 = {name: "IDENTITY"};
(function(){
    (l74).fvalue = (function(v106){
        ((v106)["fname"] = "IDENTITY");
        return v106;
    })((function (values,v105){
        checkArgs(arguments, 2);
        return (function(){
            return v105;
        })();
    }));
    return l74;
})();
var l75 = {name: "COPY-LIST"};
(function(){
    (l75).fvalue = (function(v108){
        ((v108)["fname"] = "COPY-LIST");
        return v108;
    })((function (values,v107){
        checkArgs(arguments, 2);
        return (function(){
            return l73.fvalue(values, (function(){
                var symbol = l74;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v107);
        })();
    }));
    return l75;
})();
var l76 = {name: "CODE-CHAR"};
(function(){
    (l76).fvalue = (function(v110){
        ((v110)["fname"] = "CODE-CHAR");
        return v110;
    })((function (values,v109){
        checkArgs(arguments, 2);
        return (function(){
            return v109;
        })();
    }));
    return l76;
})();
var l77 = {name: "CHAR-CODE"};
(function(){
    (l77).fvalue = (function(v112){
        ((v112)["fname"] = "CHAR-CODE");
        return v112;
    })((function (values,v111){
        checkArgs(arguments, 2);
        return (function(){
            return v111;
        })();
    }));
    return l77;
})();
var l78 = {name: "CHAR="};
(function(){
    (l78).fvalue = (function(v115){
        ((v115)["fname"] = "CHAR=");
        return v115;
    })((function (values,v113,v114){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x1 = v113;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v114;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })();
        })();
    }));
    return l78;
})();
var l79 = {name: "INTEGERP"};
(function(){
    (l79).fvalue = (function(v117){
        ((v117)["fname"] = "INTEGERP");
        return v117;
    })((function (values,v116){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof (v116) == "number")?l4.value: l3.value) !== l3.value ? (function(){
                var x1 = (function(){
                    var x = v116;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    return Math.floor(x);
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v116;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1==x2?l4.value: l3.value);
            })() : l3.value);
        })();
    }));
    return l79;
})();
var l80 = {name: "PLUSP"};
(function(){
    (l80).fvalue = (function(v119){
        ((v119)["fname"] = "PLUSP");
        return v119;
    })((function (values,v118){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = 0;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v118;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })();
        })();
    }));
    return l80;
})();
var l81 = {name: "MINUSP"};
(function(){
    (l81).fvalue = (function(v121){
        ((v121)["fname"] = "MINUSP");
        return v121;
    })((function (values,v120){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var x1 = v120;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 0;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })();
        })();
    }));
    return l81;
})();
(function(){
    (l59).fvalue = (function(v124){
        ((v124)["fname"] = "LISTP");
        return v124;
    })((function (values,v122){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v123){
                return (v123 !== l3.value ? v123 : l12.fvalue(values, v122));
            })(((function(){
                var tmp = v122;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value));
        })();
    }));
    return l59;
})();
var l82 = {name: "NTHCDR"};
(function(){
    (l82).fvalue = (function(v127){
        ((v127)["fname"] = "NTHCDR");
        return v127;
    })((function (values,v125,v126){
        checkArgs(arguments, 3);
        return (function(){
            (function(){
                return (function(){
                    while((l80.fvalue(pv, v125) !== l3.value ? v126 : l3.value) !== l3.value){
                        (v125 = l23.fvalue(pv, v125));
                        (v126 = (function(){
                            var tmp = v126;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    }return l3.value;
                })();
            })();
            return v126;
        })();
    }));
    return l82;
})();
var l83 = {name: "NTH"};
(function(){
    (l83).fvalue = (function(v130){
        ((v130)["fname"] = "NTH");
        return v130;
    })((function (values,v128,v129){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var tmp = l82.fvalue(pv, v128, v129);
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l83;
})();
var l84 = {name: "LAST"};
(function(){
    (l84).fvalue = (function(v132){
        ((v132)["fname"] = "LAST");
        return v132;
    })((function (values,v131){
        checkArgs(arguments, 2);
        return (function(){
            (function(){
                return (function(){
                    while(((function(){
                        var tmp = (function(){
                            var tmp = v131;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value){
                        (v131 = (function(){
                            var tmp = v131;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    }return l3.value;
                })();
            })();
            return v131;
        })();
    }));
    return l84;
})();
var l85 = {name: "BUTLAST"};
(function(){
    (l85).fvalue = (function(v134){
        ((v134)["fname"] = "BUTLAST");
        return v134;
    })((function (values,v133){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = (function(){
                    var tmp = v133;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value) !== l3.value ? ({car: (function(){
                var tmp = v133;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l85.fvalue(pv, (function(){
                var tmp = v133;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}) : l3.value);
        })();
    }));
    return l85;
})();
var l86 = {name: "MEMBER"};
(function(){
    (l86).fvalue = (function(v137){
        ((v137)["fname"] = "MEMBER");
        return v137;
    })((function (values,v135,v136){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                try {
                    return (function(){
                        while(v136 !== l3.value){
                            (l26.fvalue(pv, v135, (function(){
                                var tmp = v136;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) !== l3.value ? (function(){
                                var values = mv;
                                throw ({type: 'block', id: 63, values: v136, message: 'Return from unknown block NIL.'})
                            })() : l3.value);
                            (v136 = (function(){
                                var tmp = v136;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                        }return l3.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 63)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        })();
    }));
    return l86;
})();
var l87 = {name: "REMOVE"};
(function(){
    (l87).fvalue = (function(v140){
        ((v140)["fname"] = "REMOVE");
        return v140;
    })((function (values,v138,v139){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v139) !== l3.value ? l3.value : (l26.fvalue(pv, v138, (function(){
                var tmp = v139;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l87.fvalue(values, v138, (function(){
                var tmp = v139;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) : ({car: (function(){
                var tmp = v139;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l87.fvalue(pv, v138, (function(){
                var tmp = v139;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())})));
        })();
    }));
    return l87;
})();
var l88 = {name: "REMOVE-IF"};
(function(){
    (l88).fvalue = (function(v143){
        ((v143)["fname"] = "REMOVE-IF");
        return v143;
    })((function (values,v141,v142){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v142) !== l3.value ? l3.value : ((v141)(pv, (function(){
                var tmp = v142;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l88.fvalue(values, v141, (function(){
                var tmp = v142;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) : ({car: (function(){
                var tmp = v142;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l88.fvalue(pv, v141, (function(){
                var tmp = v142;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())})));
        })();
    }));
    return l88;
})();
var l89 = {name: "REMOVE-IF-NOT"};
(function(){
    (l89).fvalue = (function(v146){
        ((v146)["fname"] = "REMOVE-IF-NOT");
        return v146;
    })((function (values,v144,v145){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, v145) !== l3.value ? l3.value : ((v144)(pv, (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? ({car: (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l89.fvalue(pv, v144, (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}) : l89.fvalue(values, v144, (function(){
                var tmp = v145;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())));
        })();
    }));
    return l89;
})();
var l90 = {name: "DIGIT-CHAR-P"};
(function(){
    (l90).fvalue = (function(v148){
        ((v148)["fname"] = "DIGIT-CHAR-P");
        return v148;
    })((function (values,v147){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var x1 = 48;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v147;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<=x2?l4.value: l3.value);
            })() !== l3.value ? (function(){
                var x1 = v147;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 57;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<=x2?l4.value: l3.value);
            })() : l3.value) !== l3.value ? (function(){
                var x1 = v147;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 48;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1-x2;
            })() : l3.value);
        })();
    }));
    return l90;
})();
var l91 = {name: "DIGIT-CHAR"};
(function(){
    (l91).fvalue = (function(v150){
        ((v150)["fname"] = "DIGIT-CHAR");
        return v150;
    })((function (values,v149){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var x1 = 0;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v149;
                if (typeof x2 !== 'number') throw 'Not a number!';
                var x3 = 9;
                if (typeof x3 !== 'number') throw 'Not a number!';
                return (x1<=x2 && x2<=x3?l4.value: l3.value);
            })() !== l3.value ? (function(){
                var string = "0123456789";
                var index = v149;
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })() : l3.value);
        })();
    }));
    return l91;
})();
var l92 = {name: "SUBSEQ"};
(function(){
    (l92).fvalue = (function(v154){
        ((v154)["fname"] = "SUBSEQ");
        return v154;
    })((function (values,v151,v152,v153){
        checkArgsAtLeast(arguments, 3);
        checkArgsAtMost(arguments, 4);
        switch(arguments.length-1){
        case 2:
        v153=l3.value;
        default: break;
        }
        return (function(){
            return (((typeof(v151) == "string")?l4.value: l3.value) !== l3.value ? (v153 !== l3.value ? (function(){
                var str = v151;
                var a = v152;
                var b;
                b = v153;
                return str.slice(a,b);
            })() : (function(){
                var str = v151;
                var a = v152;
                var b;
                return str.slice(a,b);
            })()) : (function(){
                throw "Unsupported argument.";
            })());
        })();
    }));
    return l92;
})();
var l93 = {name: "SOME"};
(function(){
    (l93).fvalue = (function(v161){
        ((v161)["fname"] = "SOME");
        return v161;
    })((function (values,v155,v156){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (((typeof(v156) == "string")?l4.value: l3.value) !== l3.value ? (function(v157,v158){
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v157;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v158;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                ((v155)(pv, (function(){
                                    var string = v156;
                                    var index = v157;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })()) !== l3.value ? (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: 70, values: l4.value, message: 'Return from unknown block SOME.'})
                                })() : l3.value);
                                (v157 = (function(){
                                    var x1 = v157;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                    })();
                    return l3.value;
                })(0,l71.fvalue(pv, v156)) : (l59.fvalue(pv, v156) !== l3.value ? (function(){
                    try {
                        return (function(v159,v160){
                            (function(){
                                while(v159 !== l3.value){
                                    (v160 = (function(){
                                        var tmp = v159;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v155)(pv, v160) !== l3.value ? (function(){
                                            var values = mv;
                                            throw ({type: 'block', id: 72, values: l4.value, message: 'Return from unknown block NIL.'})
                                        })() : l3.value);
                                        return l3.value;
                                    })();
                                    (v159 = (function(){
                                        var tmp = v159;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return l3.value;
                        })(v156,l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 72)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })() : (function(){
                    throw "Unknown sequence.";
                })()));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 70)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l93;
})();
var l94 = {name: "EVERY"};
(function(){
    (l94).fvalue = (function(v168){
        ((v168)["fname"] = "EVERY");
        return v168;
    })((function (values,v162,v163){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (((typeof(v163) == "string")?l4.value: l3.value) !== l3.value ? (function(v164,v165){
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v164;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v165;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                ((v162)(pv, (function(){
                                    var string = v163;
                                    var index = v164;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })()) !== l3.value ? l3.value : (function(){
                                    var values = mv;
                                    throw ({type: 'block', id: 73, values: l3.value, message: 'Return from unknown block EVERY.'})
                                })());
                                (v164 = (function(){
                                    var x1 = v164;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                    })();
                    return l4.value;
                })(0,l71.fvalue(pv, v163)) : (l59.fvalue(pv, v163) !== l3.value ? (function(){
                    try {
                        return (function(v166,v167){
                            (function(){
                                while(v166 !== l3.value){
                                    (v167 = (function(){
                                        var tmp = v166;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v162)(pv, v167) !== l3.value ? l3.value : (function(){
                                            var values = mv;
                                            throw ({type: 'block', id: 75, values: l3.value, message: 'Return from unknown block NIL.'})
                                        })());
                                        return l3.value;
                                    })();
                                    (v166 = (function(){
                                        var tmp = v166;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return l4.value;
                        })(v163,l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 75)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })() : (function(){
                    throw "Unknown sequence.";
                })()));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 73)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l94;
})();
var l95 = {name: "ASSOC"};
(function(){
    (l95).fvalue = (function(v171){
        ((v171)["fname"] = "ASSOC");
        return v171;
    })((function (values,v169,v170){
        checkArgs(arguments, 3);
        return (function(){
            (function(){
                try {
                    return (function(){
                        while(v170 !== l3.value){
                            (l26.fvalue(pv, v169, l32.fvalue(pv, v170)) !== l3.value ? (function(){
                                throw ({type: 'block', id: 77, values: l3.value, message: 'Return from unknown block NIL.'})
                            })() : (v170 = (function(){
                                var tmp = v170;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        }return l3.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 77)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
            return (function(){
                var tmp = v170;
                return tmp === l3.value? l3.value: tmp.car;
            })();
        })();
    }));
    return l95;
})();
var l96 = {name: "STRING"};
(function(){
    (l96).fvalue = (function(v173){
        ((v173)["fname"] = "STRING");
        return v173;
    })((function (values,v172){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof(v172) == "string")?l4.value: l3.value) !== l3.value ? v172 : (((function(){
                var tmp = v172;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (v172).name : (function(){
                var x = v172;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                return String.fromCharCode(x);
            })()));
        })();
    }));
    return l96;
})();
var l97 = {name: "STRING="};
(function(){
    (l97).fvalue = (function(v176){
        ((v176)["fname"] = "STRING=");
        return v176;
    })((function (values,v174,v175){
        checkArgs(arguments, 3);
        return (function(){
            return ((v174 == v175)?l4.value: l3.value);
        })();
    }));
    return l97;
})();
var l98 = {name: "FDEFINITION"};
(function(){
    (l98).fvalue = (function(v178){
        ((v178)["fname"] = "FDEFINITION");
        return v178;
    })((function (values,v177){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof v177 == 'function')?l4.value: l3.value) !== l3.value ? v177 : (((function(){
                var tmp = v177;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var symbol = v177;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })() : (function(){
                throw "Invalid function";
            })()));
        })();
    }));
    return l98;
})();
var l99 = {name: "DISASSEMBLE"};
var l100 = {name: "WRITE-LINE"};
(function(){
    (l99).fvalue = (function(v180){
        ((v180)["fname"] = "DISASSEMBLE");
        return v180;
    })((function (values,v179){
        checkArgs(arguments, 2);
        return (function(){
            l100.fvalue(pv, (l98.fvalue(pv, v179)).toString());
            return l3.value;
        })();
    }));
    return l99;
})();
var l101 = {name: "DOCUMENTATION"};
var l102 = {name: "FUNCTION"};
var l103 = {name: "VARIABLE"};
(function(){
    (l101).fvalue = (function(v185){
        ((v185)["fname"] = "DOCUMENTATION");
        return v185;
    })((function(){
        var func = (function (values,v181,v182){
            checkArgs(arguments, 3);
            return (function(){
                return (function(v183){
                    return (l26.fvalue(pv, v183, l102) !== l3.value ? (function(v184){
                        return (function(){
                            var tmp = (v184)["docstring"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l98.fvalue(pv, v181)) : (l26.fvalue(pv, v183, l103) !== l3.value ? (function(){
                        (((function(){
                            var tmp = v181;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                            throw "Wrong argument type! it should be a symbol";
                        })());
                        return (function(){
                            var tmp = (v181)["vardoc"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })() : (function(){
                        throw "ECASE expression failed.";
                    })()));
                })(v182);
            })();
        });
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })());
    return l101;
})();
var l104 = {name: "MULTIPLE-VALUE-BIND"};
l104;
var l105 = {name: "MULTIPLE-VALUE-LIST"};
l105;
var l106 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l106.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l106).value = l3.value));
    return l106;
})();
var l107 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l107).fvalue = (function(v186){
        ((v186)["fname"] = "LIST-ALL-PACKAGES");
        return v186;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return (function(){
                var symbol = l106;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })();
        })();
    }));
    return l107;
})();
var l108 = {name: "MAKE-PACKAGE"};
var l109 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l108).fvalue = (function(v191){
        ((v191)["fname"] = "MAKE-PACKAGE");
        return v191;
    })((function (values,v187,v188){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v188=l3.value;
        default: break;
        }
        return (function(){
            return (function(v189,v190){
                ((v189)["packageName"] = v187);
                ((v189)["symbols"] = {});
                ((v189)["exports"] = {});
                ((v189)["use"] = v190);
                ((l106).value = ({car: v189, cdr: (function(){
                    var symbol = l106;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()}));
                return v189;
            })({},l73.fvalue(pv, (function(){
                var symbol = l109;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v188));
        })();
    }));
    return l108;
})();
var l110 = {name: "PACKAGEP"};
(function(){
    (l110).fvalue = (function(v193){
        ((v193)["fname"] = "PACKAGEP");
        return v193;
    })((function (values,v192){
        checkArgs(arguments, 2);
        return (function(){
            return (((typeof (v192) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v192))?l4.value: l3.value) : l3.value);
        })();
    }));
    return l110;
})();
var l111 = {name: "FIND-PACKAGE"};
var l112 = {name: "PACKAGE-NAME"};
(function(){
    (l111).fvalue = (function(v198){
        ((v198)["fname"] = "FIND-PACKAGE");
        return v198;
    })((function (values,v194){
        checkArgs(arguments, 2);
        return (function(){
            try {
                (l110.fvalue(pv, v194) !== l3.value ? (function(){
                    var values = mv;
                    throw ({type: 'block', id: 86, values: v194, message: 'Return from unknown block FIND-PACKAGE.'})
                })() : l3.value);
                return (function(v195){
                    return (function(){
                        try {
                            return (function(v196,v197){
                                (function(){
                                    while(v196 !== l3.value){
                                        (v197 = (function(){
                                            var tmp = v196;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (l97.fvalue(pv, l112.fvalue(pv, v197), v195) !== l3.value ? (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: 87, values: v197, message: 'Return from unknown block NIL.'})
                                            })() : l3.value);
                                            return l3.value;
                                        })();
                                        (v196 = (function(){
                                            var tmp = v196;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })((function(){
                                var symbol = l106;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(),l3.value);
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 87)
                                return values.apply(this, forcemv(cf.values));
                            else
                                throw cf;
                        }
                    })();
                })(l96.fvalue(pv, v194));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 86)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l111;
})();
(function(){
    (l109).fvalue = (function(v201){
        ((v201)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v201;
    })((function (values,v199){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v200){
                return (v200 !== l3.value ? v200 : (function(){
                    throw "Package unknown.";
                })());
            })(l111.fvalue(pv, v199));
        })();
    }));
    return l109;
})();
(function(){
    (l112).fvalue = (function(v204){
        ((v204)["fname"] = "PACKAGE-NAME");
        return v204;
    })((function (values,v202){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v203){
                return (function(){
                    var tmp = (v203)["packageName"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l109.fvalue(pv, v202));
        })();
    }));
    return l112;
})();
var l113 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l113).fvalue = (function(v207){
        ((v207)["fname"] = "%PACKAGE-SYMBOLS");
        return v207;
    })((function (values,v205){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v206){
                return (function(){
                    var tmp = (v206)["symbols"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l109.fvalue(pv, v205));
        })();
    }));
    return l113;
})();
var l114 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l114).fvalue = (function(v210){
        ((v210)["fname"] = "PACKAGE-USE-LIST");
        return v210;
    })((function (values,v208){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v209){
                return (function(){
                    var tmp = (v209)["use"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l109.fvalue(pv, v208));
        })();
    }));
    return l114;
})();
var l115 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l115).fvalue = (function(v213){
        ((v213)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v213;
    })((function (values,v211){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v212){
                return (function(){
                    var tmp = (v212)["exports"];
                    return tmp == undefined? l3.value: tmp ;
                })();
            })(l109.fvalue(pv, v211));
        })();
    }));
    return l115;
})();
var l116 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l116.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l116).value = l108.fvalue(pv, "CL")));
    return l116;
})();
var l117 = {name: "*USER-PACKAGE*"};
(function(){
    (((l117.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l117).value = l108.fvalue(pv, "CL-USER", l44.fvalue(pv, (function(){
        var symbol = l116;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()))));
    return l117;
})();
var l118 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l118.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l118).value = l108.fvalue(pv, "KEYWORD")));
    return l118;
})();
var l119 = {name: "KEYWORDP"};
var l120 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l119).fvalue = (function(v215){
        ((v215)["fname"] = "KEYWORDP");
        return v215;
    })((function (values,v214){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v214;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? ((l120.fvalue(pv, v214) === (function(){
                var symbol = l118;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())?l4.value: l3.value) : l3.value);
        })();
    }));
    return l119;
})();
var l121 = {name: "*PACKAGE*"};
(function(){
    (((l121.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l121).value = (function(){
        var symbol = l116;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()));
    return l121;
})();
var l122 = {name: "IN-PACKAGE"};
l122;
var l123 = {name: "%INTERN-SYMBOL"};
(function(){
    (l123).fvalue = (function(v219){
        ((v219)["fname"] = "%INTERN-SYMBOL");
        return v219;
    })((function (values,v216){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var v217 = (((("package") in (v216))?l4.value: l3.value) !== l3.value ? l109.fvalue(pv, (function(){
                    var tmp = (v216)["package"];
                    return tmp == undefined? l3.value: tmp ;
                })()) : (function(){
                    var symbol = l116;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
                var v218 = l113.fvalue(pv, v217);
                ((v216)["package"] = v217);
                (((v217 === (function(){
                    var symbol = l118;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())?l4.value: l3.value) !== l3.value ? ((v216)["value"] = v216) : l3.value);
                return ((v218)[(v216).name] = v216);
            })();
        })();
    }));
    return l123;
})();
var l124 = {name: "FIND-SYMBOL"};
var l125 = {name: "EXTERNAL", 'package': 'KEYWORD'};
var l126 = {name: "INTERNAL", 'package': 'KEYWORD'};
var l127 = {name: "INHERIT", 'package': 'KEYWORD'};
(function(){
    (l124).fvalue = (function(v228){
        ((v228)["fname"] = "FIND-SYMBOL");
        return v228;
    })((function (values,v220,v221){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v221=(function(){
            var symbol = l121;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            return (function(){
                var v222 = l109.fvalue(pv, v221);
                var v223 = l115.fvalue(pv, v222);
                var v224 = l113.fvalue(pv, v222);
                return ((((v220) in (v223))?l4.value: l3.value) !== l3.value ? values((function(){
                    var tmp = (v223)[v220];
                    return tmp == undefined? l3.value: tmp ;
                })(), l125.value) : ((((v220) in (v224))?l4.value: l3.value) !== l3.value ? values((function(){
                    var tmp = (v224)[v220];
                    return tmp == undefined? l3.value: tmp ;
                })(), l126.value) : (function(){
                    try {
                        return (function(v225,v226){
                            (function(){
                                while(v225 !== l3.value){
                                    (v226 = (function(){
                                        var tmp = v225;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        (function(v227){
                                            return ((((v220) in (v227))?l4.value: l3.value) !== l3.value ? (function(){
                                                var values = mv;
                                                throw ({type: 'block', id: 96, values: values((function(){
                                                    var tmp = (v227)[v220];
                                                    return tmp == undefined? l3.value: tmp ;
                                                })(), l127.value), message: 'Return from unknown block NIL.'})
                                            })() : l3.value);
                                        })(l115.fvalue(pv, v226));
                                        return l3.value;
                                    })();
                                    (v225 = (function(){
                                        var tmp = v225;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return values(l3.value, l3.value);
                        })(l114.fvalue(pv, v222),l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 96)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })()));
            })();
        })();
    }));
    return l124;
})();
var l128 = {name: "INTERN"};
var l129 = {name: "EXPORT"};
(function(){
    (l128).fvalue = (function(v237){
        ((v237)["fname"] = "INTERN");
        return v237;
    })((function (values,v229,v230){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v230=(function(){
            var symbol = l121;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            return (function(v231){
                return (function(){
                    var func = (function (values,v233,v234){
                        switch(arguments.length-1){
                        case 0:
                        v233=l3.value;
                        case 1:
                        v234=l3.value;
                        default: break;
                        }
                        var v232= l3.value;
                        for (var i = arguments.length-1; i>=3; i--)
                            v232 = {car: arguments[i], cdr: 
                        v232};
                        return (v234 !== l3.value ? values(v233, v234) : (function(v235){
                            (function(){
                                var tmp = (v235)[v229];
                                return tmp == undefined? l3.value: tmp ;
                            })();
                            return (function(v236){
                                ((v236)["package"] = v231);
                                (((v231 === (function(){
                                    var symbol = l118;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())?l4.value: l3.value) !== l3.value ? (function(){
                                    ((v236)["value"] = v236);
                                    return l129.fvalue(pv, l44.fvalue(pv, v236), v231);
                                })() : l3.value);
                                ((v235)[v229] = v236);
                                return values(v236, l3.value);
                            })((function(){
                                var name = v229;
                                if (typeof name != 'string')
                                    throw 'The value ' + name + ' is not a type string.';
                                return ({name: name});
                            })());
                        })(l113.fvalue(pv, v231)));
                    });
                    var args = [values];
                    return (function(){
                        var values = mv;
                        var vs;
                        vs = l124.fvalue(values, v229, v231);
                        if (typeof vs === 'object' && 'multiple-value' in vs)
                            args = args.concat(vs);
                        else
                            args.push(vs);
                        return func.apply(window, args);
                    })();
                })();
            })(l109.fvalue(pv, v230));
        })();
    }));
    return l128;
})();
(function(){
    (l120).fvalue = (function(v239){
        ((v239)["fname"] = "SYMBOL-PACKAGE");
        return v239;
    })((function (values,v238){
        checkArgs(arguments, 2);
        return (function(){
            (((function(){
                var tmp = v238;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                throw "it is not a symbol";
            })());
            return (function(){
                var tmp = (v238)["package"];
                return tmp == undefined? l3.value: tmp ;
            })();
        })();
    }));
    return l120;
})();
(function(){
    (l129).fvalue = (function(v245){
        ((v245)["fname"] = "EXPORT");
        return v245;
    })((function (values,v240,v241){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v241=(function(){
            var symbol = l121;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
            return (function(v242){
                return (function(){
                    return (function(v243,v244){
                        (function(){
                            while(v243 !== l3.value){
                                (v244 = (function(){
                                    var tmp = v243;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    ((v242)[(v244).name] = v244);
                                    return l3.value;
                                })();
                                (v243 = (function(){
                                    var tmp = v243;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l4.value;
                    })(v240,l3.value);
                })();
            })(l115.fvalue(pv, v241));
        })();
    }));
    return l129;
})();
var l130 = {name: "GET-UNIVERSAL-TIME"};
(function(){
    (l130).fvalue = (function(v246){
        ((v246)["fname"] = "GET-UNIVERSAL-TIME");
        return v246;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return (function(){
                var x1 = (Math.round(new Date() / 1000));
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 2208988800;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
        })();
    }));
    return l130;
})();
var l131 = {name: "*NEWLINE*"};
(function(){
    (((l131.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l131).value = l96.fvalue(pv, l76.fvalue(pv, 10))));
    return l131;
})();
var l132 = {name: "CONCAT"};
(function(){
    (l132).fvalue = (function(v248){
        ((v248)["fname"] = "CONCAT");
        return v248;
    })((function (values){
        var v247= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v247 = {car: arguments[i], cdr: 
        v247};
        return (function(){
            return l60.fvalue(values, (function(){
                var symbol = l72;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v247, "");
        })();
    }));
    return l132;
})();
var l133 = {name: "CONCATF"};
l133;
var l134 = {name: "JOIN"};
(function(){
    (l134).fvalue = (function(v251){
        ((v251)["fname"] = "JOIN");
        return v251;
    })((function (values,v249,v250){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v250="";
        default: break;
        }
        return (function(){
            return (l12.fvalue(pv, v249) !== l3.value ? "" : (l12.fvalue(pv, (function(){
                var tmp = v249;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) !== l3.value ? (function(){
                var tmp = v249;
                return tmp === l3.value? l3.value: tmp.car;
            })() : l132.fvalue(values, (function(){
                var tmp = v249;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v250, l134.fvalue(pv, (function(){
                var tmp = v249;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v250))));
        })();
    }));
    return l134;
})();
var l135 = {name: "JOIN-TRAILING"};
(function(){
    (l135).fvalue = (function(v254){
        ((v254)["fname"] = "JOIN-TRAILING");
        return v254;
    })((function (values,v252,v253){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v253="";
        default: break;
        }
        return (function(){
            return (l12.fvalue(pv, v252) !== l3.value ? "" : l132.fvalue(values, (function(){
                var tmp = v252;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v253, l135.fvalue(pv, (function(){
                var tmp = v252;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v253)));
        })();
    }));
    return l135;
})();
var l136 = {name: "MAPCONCAT"};
(function(){
    (l136).fvalue = (function(v257){
        ((v257)["fname"] = "MAPCONCAT");
        return v257;
    })((function (values,v255,v256){
        checkArgs(arguments, 3);
        return (function(){
            return l134.fvalue(values, l73.fvalue(pv, v255, v256));
        })();
    }));
    return l136;
})();
var l137 = {name: "VECTOR-TO-LIST"};
(function(){
    (l137).fvalue = (function(v263){
        ((v263)["fname"] = "VECTOR-TO-LIST");
        return v263;
    })((function (values,v258){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v259,v260){
                return (function(){
                    return (function(v261,v262){
                        (function(){
                            while((function(){
                                var x1 = v261;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v262;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                (function(){
                                    (v259 = ({car: (function(){
                                        var x = (v258)[v261];
                                        if (x === undefined) throw 'Out of range';
                                        return x;
                                    })(), cdr: v259}));
                                    return l3.value;
                                })();
                                (v261 = (function(){
                                    var x1 = v261;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                        return l66.fvalue(values, v259);
                    })(0,v260);
                })();
            })(l3.value,l71.fvalue(pv, v258));
        })();
    }));
    return l137;
})();
var l138 = {name: "LIST-TO-VECTOR"};
(function(){
    (l138).fvalue = (function(v269){
        ((v269)["fname"] = "LIST-TO-VECTOR");
        return v269;
    })((function (values,v264){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v265,v266){
                return (function(){
                    return (function(v267,v268){
                        (function(){
                            while(v267 !== l3.value){
                                (v268 = (function(){
                                    var tmp = v267;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(){
                                        var x = v265;
                                        var i = v266;
                                        if (i < 0 || i >= x.length) throw 'Out of range';
                                        return x[i] = v268;
                                    })();
                                    (v266 = (function(){
                                        var x1 = v266;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                    return l3.value;
                                })();
                                (v267 = (function(){
                                    var tmp = v267;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v265;
                    })(v264,l3.value);
                })();
            })((function(){
                var r = [];
                for (var i = 0; i < l71.fvalue(pv, v264); i++)
                    r.push(l3.value);
                return r;
            })(),0);
        })();
    }));
    return l138;
})();
var l139 = {name: "VALUES-LIST"};
(function(){
    (l139).fvalue = (function(v271){
        ((v271)["fname"] = "VALUES-LIST");
        return v271;
    })((function (values,v270){
        checkArgs(arguments, 2);
        return (function(){
            return values.apply(this, l138.fvalue(pv, v270));
        })();
    }));
    return l139;
})();
var l140 = {name: "VALUES"};
(function(){
    (l140).fvalue = (function(v273){
        ((v273)["fname"] = "VALUES");
        return v273;
    })((function (values){
        var v272= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v272 = {car: arguments[i], cdr: 
        v272};
        return (function(){
            return l139.fvalue(values, v272);
        })();
    }));
    return l140;
})();
var l141 = {name: "INDENT"};
(function(){
    (l141).fvalue = (function(v280){
        ((v280)["fname"] = "INDENT");
        return v280;
    })((function (values){
        var v274= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v274 = {car: arguments[i], cdr: 
        v274};
        return (function(){
            return (function(v275){
                return (function(v276,v277,v278){
                    (l80.fvalue(pv, l71.fvalue(pv, v275)) !== l3.value ? (v276 = l132.fvalue(pv, v276, "    ")) : l3.value);
                    (function(){
                        return (function(){
                            while((function(){
                                var x1 = v277;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v278;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value){
                                (function(v279){
                                    return (v276 = l132.fvalue(pv, v276, v279));
                                })(((l78.fvalue(pv, (function(){
                                    var string = v275;
                                    var index = v277;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 10) !== l3.value ? ((function(){
                                    var x1 = v277;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = l23.fvalue(pv, v278);
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value ? l27.fvalue(pv, l78.fvalue(pv, (function(){
                                    var string = v275;
                                    var index = l22.fvalue(pv, v277);
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l132.fvalue(pv, l96.fvalue(pv, 10), "    ") : l96.fvalue(pv, (function(){
                                    var string = v275;
                                    var index = v277;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })())));
                                (v277 = (function(){
                                    var x1 = v277;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            }return l3.value;
                        })();
                    })();
                    return v276;
                })("",0,l71.fvalue(pv, v275));
            })(l134.fvalue(pv, v274));
        })();
    }));
    return l141;
})();
(function(){
    (l17).fvalue = (function(v284){
        ((v284)["fname"] = "INTEGER-TO-STRING");
        return v284;
    })((function (values,v281){
        checkArgs(arguments, 2);
        return (function(){
            return (l24.fvalue(pv, v281) !== l3.value ? "0" : (l81.fvalue(pv, v281) !== l3.value ? l132.fvalue(values, "-", l17.fvalue(pv, (function(){
                var x1 = 0;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v281;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1-x2;
            })())) : (function(v282){
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l24.fvalue(pv, v281)) !== l3.value){
                            (v282 = ({car: (function(){
                                var x = v281;
                                var y = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x%y;
                            })(), cdr: v282}));
                            (v281 = l25.fvalue(pv, v281, 10));
                        }return l3.value;
                    })();
                })();
                return l136.fvalue(values, (function (values,v283){
                    checkArgs(arguments, 2);
                    return l96.fvalue(values, l91.fvalue(pv, v283));
                }), v282);
            })(l3.value)));
        })();
    }));
    return l17;
})();
var l142 = {name: "JS!BOOL"};
var l143 = {name: "LS-COMPILE"};
(function(){
    (l142).fvalue = (function(v286){
        ((v286)["fname"] = "JS!BOOL");
        return v286;
    })((function (values,v285){
        checkArgs(arguments, 2);
        return (function(){
            return l132.fvalue(values, "(", v285, "?", l143.fvalue(pv, l4.value), ": ", l143.fvalue(pv, l3.value), ")");
        })();
    }));
    return l142;
})();
var l144 = {name: "JS!SELFCALL"};
l144;
var l145 = {name: "PRIN1-TO-STRING"};
var l146 = {name: "ESCAPE-STRING"};
(function(){
    (l145).fvalue = (function(v295){
        ((v295)["fname"] = "PRIN1-TO-STRING");
        return v295;
    })((function (values,v287){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v287;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var func = (function (values,v289,v290){
                    switch(arguments.length-1){
                    case 0:
                    v289=l3.value;
                    case 1:
                    v290=l3.value;
                    default: break;
                    }
                    var v288= l3.value;
                    for (var i = arguments.length-1; i>=3; i--)
                        v288 = {car: arguments[i], cdr: 
                    v288};
                    return ((v290 !== l3.value ? ((v289 === v287)?l4.value: l3.value) : l3.value) !== l3.value ? (v287).name : (function(v291,v292){
                        return l132.fvalue(values, (l12.fvalue(pv, v291) !== l3.value ? "#" : (((v291 === l111.fvalue(pv, "KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l112.fvalue(pv, v291))), ":", v292);
                    })(l120.fvalue(pv, v287),(v287).name));
                });
                var args = [values];
                return (function(){
                    var values = mv;
                    var vs;
                    vs = l124.fvalue(values, (v287).name, (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    if (typeof vs === 'object' && 'multiple-value' in vs)
                        args = args.concat(vs);
                    else
                        args.push(vs);
                    return func.apply(window, args);
                })();
            })() : (l79.fvalue(pv, v287) !== l3.value ? l17.fvalue(values, v287) : (((typeof(v287) == "string")?l4.value: l3.value) !== l3.value ? l132.fvalue(values, "\"", l146.fvalue(pv, v287), "\"") : (((typeof v287 == 'function')?l4.value: l3.value) !== l3.value ? (function(v293){
                return (v293 !== l3.value ? l132.fvalue(values, "#<FUNCTION ", v293, ">") : l132.fvalue(values, "#<FUNCTION>"));
            })((function(){
                var tmp = (v287)["fname"];
                return tmp == undefined? l3.value: tmp ;
            })()) : (l59.fvalue(pv, v287) !== l3.value ? l132.fvalue(values, "(", l135.fvalue(pv, l73.fvalue(pv, (function(){
                var symbol = l145;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l85.fvalue(pv, v287)), " "), (function(v294){
                return (l12.fvalue(pv, (function(){
                    var tmp = v294;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) !== l3.value ? l145.fvalue(pv, (function(){
                    var tmp = v294;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) : l132.fvalue(pv, l145.fvalue(pv, (function(){
                    var tmp = v294;
                    return tmp === l3.value? l3.value: tmp.car;
                })()), " . ", l145.fvalue(pv, (function(){
                    var tmp = v294;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())));
            })(l84.fvalue(pv, v287)), ")") : (((function(){
                var x = v287;
                return typeof x === 'object' && 'length' in x;
            })()?l4.value: l3.value) !== l3.value ? l132.fvalue(values, "#", l145.fvalue(pv, l137.fvalue(pv, v287))) : (l110.fvalue(pv, v287) !== l3.value ? l132.fvalue(values, "#<PACKAGE ", l112.fvalue(pv, v287), ">") : l3.value)))))));
        })();
    }));
    return l145;
})();
(function(){
    (l100).fvalue = (function(v297){
        ((v297)["fname"] = "WRITE-LINE");
        return v297;
    })((function (values,v296){
        checkArgs(arguments, 2);
        return (function(){
            (function(){
                var x = v296;
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return lisp.write(x);
            })();
            (function(){
                var x = (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return lisp.write(x);
            })();
            return v296;
        })();
    }));
    return l100;
})();
var l147 = {name: "WARN"};
(function(){
    (l147).fvalue = (function(v299){
        ((v299)["fname"] = "WARN");
        return v299;
    })((function (values,v298){
        checkArgs(arguments, 2);
        return (function(){
            (function(){
                var x = "WARNING: ";
                if (typeof x != 'string')
                    throw 'The value ' + x + ' is not a type string.';
                return lisp.write(x);
            })();
            return l100.fvalue(values, v298);
        })();
    }));
    return l147;
})();
var l148 = {name: "PRINT"};
(function(){
    (l148).fvalue = (function(v301){
        ((v301)["fname"] = "PRINT");
        return v301;
    })((function (values,v300){
        checkArgs(arguments, 2);
        return (function(){
            l100.fvalue(pv, l145.fvalue(pv, v300));
            return v300;
        })();
    }));
    return l148;
})();
var l149 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l149).fvalue = (function(v303){
        ((v303)["fname"] = "MAKE-STRING-STREAM");
        return v303;
    })((function (values,v302){
        checkArgs(arguments, 2);
        return (function(){
            return ({car: v302, cdr: 0});
        })();
    }));
    return l149;
})();
var l150 = {name: "%PEEK-CHAR"};
(function(){
    (l150).fvalue = (function(v305){
        ((v305)["fname"] = "%PEEK-CHAR");
        return v305;
    })((function (values,v304){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var x1 = (function(){
                    var tmp = v304;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = l71.fvalue(pv, (function(){
                    var tmp = v304;
                    return tmp === l3.value? l3.value: tmp.car;
                })());
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })() !== l3.value ? (function(){
                var string = (function(){
                    var tmp = v304;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                var index = (function(){
                    var tmp = v304;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })() : l3.value);
        })();
    }));
    return l150;
})();
var l151 = {name: "%READ-CHAR"};
(function(){
    (l151).fvalue = (function(v308){
        ((v308)["fname"] = "%READ-CHAR");
        return v308;
    })((function (values,v306){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(){
                var x1 = (function(){
                    var tmp = v306;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = l71.fvalue(pv, (function(){
                    var tmp = v306;
                    return tmp === l3.value? l3.value: tmp.car;
                })());
                if (typeof x2 !== 'number') throw 'Not a number!';
                return (x1<x2?l4.value: l3.value);
            })() !== l3.value ? (function(v307){
                (function(){
                    var x = v306;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.cdr = l22.fvalue(pv, (function(){
                        var tmp = v306;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()), x);
                })();
                return v307;
            })((function(){
                var string = (function(){
                    var tmp = v306;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
                var index = (function(){
                    var tmp = v306;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })()) : l3.value);
        })();
    }));
    return l151;
})();
var l152 = {name: "WHITESPACEP"};
(function(){
    (l152).fvalue = (function(v312){
        ((v312)["fname"] = "WHITESPACEP");
        return v312;
    })((function (values,v309){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v310){
                return (v310 !== l3.value ? v310 : (function(v311){
                    return (v311 !== l3.value ? v311 : l78.fvalue(values, v309, 9));
                })(l78.fvalue(pv, v309, 10)));
            })(l78.fvalue(pv, v309, 32));
        })();
    }));
    return l152;
})();
var l153 = {name: "SKIP-WHITESPACES"};
(function(){
    (l153).fvalue = (function(v315){
        ((v315)["fname"] = "SKIP-WHITESPACES");
        return v315;
    })((function (values,v313){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v314){
                (v314 = l150.fvalue(pv, v313));
                return (function(){
                    return (function(){
                        while((v314 !== l3.value ? l152.fvalue(pv, v314) : l3.value) !== l3.value){
                            l151.fvalue(pv, v313);
                            (v314 = l150.fvalue(pv, v313));
                        }return l3.value;
                    })();
                })();
            })(l3.value);
        })();
    }));
    return l153;
})();
var l154 = {name: "TERMINALP"};
(function(){
    (l154).fvalue = (function(v320){
        ((v320)["fname"] = "TERMINALP");
        return v320;
    })((function (values,v316){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v317){
                return (v317 !== l3.value ? v317 : (function(v318){
                    return (v318 !== l3.value ? v318 : (function(v319){
                        return (v319 !== l3.value ? v319 : l78.fvalue(values, 40, v316));
                    })(l78.fvalue(pv, 41, v316)));
                })(l152.fvalue(pv, v316)));
            })(l12.fvalue(pv, v316));
        })();
    }));
    return l154;
})();
var l155 = {name: "READ-UNTIL"};
(function(){
    (l155).fvalue = (function(v325){
        ((v325)["fname"] = "READ-UNTIL");
        return v325;
    })((function (values,v321,v322){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v323,v324){
                (v324 = l150.fvalue(pv, v321));
                (function(){
                    return (function(){
                        while((v324 !== l3.value ? l27.fvalue(pv, (v322)(pv, v324)) : l3.value) !== l3.value){
                            (v323 = l132.fvalue(pv, v323, l96.fvalue(pv, v324)));
                            l151.fvalue(pv, v321);
                            (v324 = l150.fvalue(pv, v321));
                        }return l3.value;
                    })();
                })();
                return v323;
            })("",l3.value);
        })();
    }));
    return l155;
})();
var l156 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l156).fvalue = (function(v329){
        ((v329)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v329;
    })((function (values,v326){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v327){
                l153.fvalue(pv, v326);
                (v327 = l150.fvalue(pv, v326));
                return (function(){
                    return (function(){
                        while((v327 !== l3.value ? l78.fvalue(pv, v327, 59) : l3.value) !== l3.value){
                            l155.fvalue(pv, v326, (function (values,v328){
                                checkArgs(arguments, 2);
                                return l78.fvalue(values, v328, 10);
                            }));
                            l153.fvalue(pv, v326);
                            (v327 = l150.fvalue(pv, v326));
                        }return l3.value;
                    })();
                })();
            })(l3.value);
        })();
    }));
    return l156;
})();
var l157 = {name: "%READ-LIST"};
var l158 = {name: "LS-READ"};
(function(){
    (l157).fvalue = (function(v333){
        ((v333)["fname"] = "%READ-LIST");
        return v333;
    })((function (values,v330){
        checkArgs(arguments, 2);
        return (function(){
            l156.fvalue(pv, v330);
            return (function(v331){
                return (l12.fvalue(pv, v331) !== l3.value ? (function(){
                    throw "Unspected EOF";
                })() : (l78.fvalue(pv, v331, 41) !== l3.value ? (function(){
                    l151.fvalue(pv, v330);
                    return l3.value;
                })() : (l78.fvalue(pv, v331, 46) !== l3.value ? (function(){
                    l151.fvalue(pv, v330);
                    return (function(v332){
                        l156.fvalue(pv, v330);
                        (l78.fvalue(pv, l151.fvalue(pv, v330), 41) !== l3.value ? l3.value : (function(){
                            throw "')' was expected.";
                        })());
                        return v332;
                    })(l158.fvalue(pv, v330));
                })() : ({car: l158.fvalue(pv, v330), cdr: l157.fvalue(pv, v330)}))));
            })(l150.fvalue(pv, v330));
        })();
    }));
    return l157;
})();
var l159 = {name: "READ-STRING"};
(function(){
    (l159).fvalue = (function(v337){
        ((v337)["fname"] = "READ-STRING");
        return v337;
    })((function (values,v334){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v335,v336){
                (v336 = l151.fvalue(pv, v334));
                (function(){
                    return (function(){
                        while(l27.fvalue(pv, l26.fvalue(pv, v336, 34)) !== l3.value){
                            (l12.fvalue(pv, v336) !== l3.value ? (function(){
                                throw "Unexpected EOF";
                            })() : l3.value);
                            (l26.fvalue(pv, v336, 92) !== l3.value ? (v336 = l151.fvalue(pv, v334)) : l3.value);
                            (v335 = l132.fvalue(pv, v335, l96.fvalue(pv, v336)));
                            (v336 = l151.fvalue(pv, v334));
                        }return l3.value;
                    })();
                })();
                return v335;
            })("",l3.value);
        })();
    }));
    return l159;
})();
var l160 = {name: "READ-SHARP"};
(function(){
    (l160).fvalue = (function(v342){
        ((v342)["fname"] = "READ-SHARP");
        return v342;
    })((function (values,v338){
        checkArgs(arguments, 2);
        return (function(){
            l151.fvalue(pv, v338);
            return (function(v339){
                return (l26.fvalue(pv, v339, 39) !== l3.value ? l44.fvalue(values, l102, l158.fvalue(pv, v338)) : (l26.fvalue(pv, v339, 40) !== l3.value ? l138.fvalue(values, l157.fvalue(pv, v338)) : (l26.fvalue(pv, v339, 58) !== l3.value ? (function(){
                    var name = (function(){
                        var x = l155.fvalue(pv, v338, (function(){
                            var symbol = l154;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })());
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.toUpperCase();
                    })();
                    if (typeof name != 'string')
                        throw 'The value ' + name + ' is not a type string.';
                    return ({name: name});
                })() : (l26.fvalue(pv, v339, 92) !== l3.value ? (function(v340){
                    return (l97.fvalue(pv, v340, "space") !== l3.value ? l77.fvalue(values, 32) : (l97.fvalue(pv, v340, "tab") !== l3.value ? l77.fvalue(values, 9) : (l97.fvalue(pv, v340, "newline") !== l3.value ? l77.fvalue(values, 10) : l77.fvalue(values, (function(){
                        var string = v340;
                        var index = 0;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })()))));
                })(l132.fvalue(pv, l96.fvalue(pv, l151.fvalue(pv, v338)), l155.fvalue(pv, v338, (function(){
                    var symbol = l154;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()))) : (l26.fvalue(pv, v339, 43) !== l3.value ? (function(v341){
                    return (l97.fvalue(pv, v341, "common-lisp") !== l3.value ? (function(){
                        l158.fvalue(pv, v338);
                        return l158.fvalue(values, v338);
                    })() : (l97.fvalue(pv, v341, "ecmalisp") !== l3.value ? l158.fvalue(values, v338) : (function(){
                        throw "Unknown reader form.";
                    })()));
                })(l155.fvalue(pv, v338, (function(){
                    var symbol = l154;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })())) : (function(){
                    throw "ECASE expression failed.";
                })())))));
            })(l151.fvalue(pv, v338));
        })();
    }));
    return l160;
})();
var l161 = {name: "READ-SYMBOL"};
(function(){
    (l161).fvalue = (function(v350){
        ((v350)["fname"] = "READ-SYMBOL");
        return v350;
    })((function (values,v343){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v344,v345,v346,v347,v348){
                (v348 = 0);
                (function(){
                    return (function(){
                        while(((function(){
                            var x1 = v348;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v344;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? l27.fvalue(pv, l78.fvalue(pv, (function(){
                            var string = v343;
                            var index = v348;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })(), 58)) : l3.value) !== l3.value){
                            (v348 = (function(){
                                var x1 = v348;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                        }return l3.value;
                    })();
                })();
                ((function(){
                    var x1 = v348;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v344;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1==x2?l4.value: l3.value);
                })() !== l3.value ? (function(){
                    (v346 = v343);
                    (v345 = (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    return (v347 = l4.value);
                })() : (function(){
                    (l24.fvalue(pv, v348) !== l3.value ? (v345 = "KEYWORD") : (v345 = (function(){
                        var x = l92.fvalue(pv, v343, 0, v348);
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.toUpperCase();
                    })()));
                    (v348 = (function(){
                        var x1 = v348;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })());
                    (l78.fvalue(pv, (function(){
                        var string = v343;
                        var index = v348;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })(), 58) !== l3.value ? (function(){
                        (v347 = l4.value);
                        return (v348 = (function(){
                            var x1 = v348;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })());
                    })() : l3.value);
                    return (v346 = l92.fvalue(pv, v343, v348));
                })());
                (v346 = (function(){
                    var x = v346;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return x.toUpperCase();
                })());
                (v345 = l111.fvalue(pv, v345));
                return ((function(v349){
                    return (v349 !== l3.value ? v349 : ((v345 === l111.fvalue(pv, "KEYWORD"))?l4.value: l3.value));
                })(v347) !== l3.value ? l128.fvalue(values, v346, v345) : l124.fvalue(values, v346, v345));
            })(l71.fvalue(pv, v343),l3.value,l3.value,l3.value,l3.value);
        })();
    }));
    return l161;
})();
var l162 = {name: "!PARSE-INTEGER"};
(function(){
    (l162).fvalue = (function(v361){
        ((v361)["fname"] = "!PARSE-INTEGER");
        return v361;
    })((function (values,v351,v352){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                try {
                    return (function(v353,v354,v355,v356){
                        (l24.fvalue(pv, v355) !== l3.value ? (function(){
                            var values = mv;
                            throw ({type: 'block', id: 139, values: values(l3.value, 0), message: 'Return from unknown block NIL.'})
                        })() : l3.value);
                        (function(v357){
                            return (l26.fvalue(pv, v357, 43) !== l3.value ? (v354 = (function(){
                                var x1 = v354;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })()) : (l26.fvalue(pv, v357, 45) !== l3.value ? (function(){
                                (v356 = -1);
                                return (v354 = (function(){
                                    var x1 = v354;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            })() : l3.value));
                        })((function(){
                            var string = v351;
                            var index = 0;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                        (((function(){
                            var x1 = v354;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v355;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? (v353 = l90.fvalue(pv, (function(){
                            var string = v351;
                            var index = v354;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })())) : l3.value) !== l3.value ? l3.value : (function(){
                            var values = mv;
                            throw ({type: 'block', id: 139, values: values(l3.value, v354), message: 'Return from unknown block NIL.'})
                        })());
                        (v354 = (function(){
                            var x1 = v354;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })());
                        (function(){
                            try {
                                return (function(){
                                    while((function(){
                                        var x1 = v354;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = v355;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return (x1<x2?l4.value: l3.value);
                                    })() !== l3.value){
                                        (function(v358){
                                            (v358 !== l3.value ? l3.value : (function(){
                                                throw ({type: 'block', id: 140, values: l3.value, message: 'Return from unknown block NIL.'})
                                            })());
                                            (v353 = (function(){
                                                var x1 = (function(){
                                                    var x1 = v353;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 10;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1*x2;
                                                })();
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v358;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                            return (v354 = (function(){
                                                var x1 = v354;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        })(l90.fvalue(pv, (function(){
                                            var string = v351;
                                            var index = v354;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })()));
                                    }return l3.value;
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 140)
                                    return cf.values;
                                else
                                    throw cf;
                            }
                        })();
                        return ((function(v359){
                            return (v359 !== l3.value ? v359 : (function(v360){
                                return (v360 !== l3.value ? v360 : l78.fvalue(pv, (function(){
                                    var string = v351;
                                    var index = v354;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 32));
                            })((function(){
                                var x1 = v354;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v355;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1==x2?l4.value: l3.value);
                            })()));
                        })(v352) !== l3.value ? values((function(){
                            var x1 = v356;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v353;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1*x2;
                        })(), v354) : values(l3.value, v354));
                    })(0,0,l71.fvalue(pv, v351),1);
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 139)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        })();
    }));
    return l162;
})();
var l163 = {name: "PARSE-INTEGER"};
(function(){
    (l163).fvalue = (function(v363){
        ((v363)["fname"] = "PARSE-INTEGER");
        return v363;
    })((function (values,v362){
        checkArgs(arguments, 2);
        return (function(){
            return l162.fvalue(values, v362, l3.value);
        })();
    }));
    return l163;
})();
var l164 = {name: "*EOF*"};
(function(){
    (((l164.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l164).value = l16.fvalue(pv)));
    return l164;
})();
var l165 = {name: "QUOTE"};
var l166 = {name: "BACKQUOTE"};
var l167 = {name: "UNQUOTE-SPLICING"};
var l168 = {name: "UNQUOTE"};
(function(){
    (l158).fvalue = (function(v369){
        ((v369)["fname"] = "LS-READ");
        return v369;
    })((function (values,v364){
        checkArgs(arguments, 2);
        return (function(){
            l156.fvalue(pv, v364);
            return (function(v365){
                return ((function(v366){
                    return (v366 !== l3.value ? v366 : l78.fvalue(pv, v365, 41));
                })(l12.fvalue(pv, v365)) !== l3.value ? (function(){
                    var symbol = l164;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() : (l78.fvalue(pv, v365, 40) !== l3.value ? (function(){
                    l151.fvalue(pv, v364);
                    return l157.fvalue(values, v364);
                })() : (l78.fvalue(pv, v365, 39) !== l3.value ? (function(){
                    l151.fvalue(pv, v364);
                    return l44.fvalue(values, l165, l158.fvalue(pv, v364));
                })() : (l78.fvalue(pv, v365, 96) !== l3.value ? (function(){
                    l151.fvalue(pv, v364);
                    return l44.fvalue(values, l166, l158.fvalue(pv, v364));
                })() : (l78.fvalue(pv, v365, 34) !== l3.value ? (function(){
                    l151.fvalue(pv, v364);
                    return l159.fvalue(values, v364);
                })() : (l78.fvalue(pv, v365, 44) !== l3.value ? (function(){
                    l151.fvalue(pv, v364);
                    return (l26.fvalue(pv, l150.fvalue(pv, v364), 64) !== l3.value ? (function(){
                        l151.fvalue(pv, v364);
                        return l44.fvalue(values, l167, l158.fvalue(pv, v364));
                    })() : l44.fvalue(values, l168, l158.fvalue(pv, v364)));
                })() : (l78.fvalue(pv, v365, 35) !== l3.value ? l160.fvalue(values, v364) : (function(v367){
                    return (function(v368){
                        return (v368 !== l3.value ? v368 : l161.fvalue(values, v367));
                    })(pv(l162.fvalue(pv, v367, l3.value)));
                })(l155.fvalue(pv, v364, (function(){
                    var symbol = l154;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })())))))))));
            })(l150.fvalue(pv, v364));
        })();
    }));
    return l158;
})();
var l169 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l169).fvalue = (function(v371){
        ((v371)["fname"] = "LS-READ-FROM-STRING");
        return v371;
    })((function (values,v370){
        checkArgs(arguments, 2);
        return (function(){
            return l158.fvalue(values, l149.fvalue(pv, v370));
        })();
    }));
    return l169;
})();
var l170 = {name: "*MULTIPLE-VALUE-P*"};
(function(){
    (((l170.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l170).value = l3.value));
    return l170;
})();
var l171 = {name: "MAKE-BINDING"};
(function(){
    (l171).fvalue = (function(v376){
        ((v376)["fname"] = "MAKE-BINDING");
        return v376;
    })((function (values,v372,v373,v374,v375){
        checkArgsAtLeast(arguments, 4);
        checkArgsAtMost(arguments, 5);
        switch(arguments.length-1){
        case 3:
        v375=l3.value;
        default: break;
        }
        return (function(){
            return l44.fvalue(values, v372, v373, v374, v375);
        })();
    }));
    return l171;
})();
var l172 = {name: "BINDING-NAME"};
(function(){
    (l172).fvalue = (function(v378){
        ((v378)["fname"] = "BINDING-NAME");
        return v378;
    })((function (values,v377){
        checkArgs(arguments, 2);
        return (function(){
            return l39.fvalue(values, v377);
        })();
    }));
    return l172;
})();
var l173 = {name: "BINDING-TYPE"};
(function(){
    (l173).fvalue = (function(v380){
        ((v380)["fname"] = "BINDING-TYPE");
        return v380;
    })((function (values,v379){
        checkArgs(arguments, 2);
        return (function(){
            return l40.fvalue(values, v379);
        })();
    }));
    return l173;
})();
var l174 = {name: "BINDING-VALUE"};
(function(){
    (l174).fvalue = (function(v382){
        ((v382)["fname"] = "BINDING-VALUE");
        return v382;
    })((function (values,v381){
        checkArgs(arguments, 2);
        return (function(){
            return l41.fvalue(values, v381);
        })();
    }));
    return l174;
})();
var l175 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l175).fvalue = (function(v384){
        ((v384)["fname"] = "BINDING-DECLARATIONS");
        return v384;
    })((function (values,v383){
        checkArgs(arguments, 2);
        return (function(){
            return l42.fvalue(values, v383);
        })();
    }));
    return l175;
})();
var l176 = {name: "SET-BINDING-VALUE"};
(function(){
    (l176).fvalue = (function(v387){
        ((v387)["fname"] = "SET-BINDING-VALUE");
        return v387;
    })((function (values,v385,v386){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x = l35.fvalue(pv, v385);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v386, x);
            })();
        })();
    }));
    return l176;
})();
var l177 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l177).fvalue = (function(v390){
        ((v390)["fname"] = "SET-BINDING-DECLARATIONS");
        return v390;
    })((function (values,v388,v389){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var x = l37.fvalue(pv, v388);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v389, x);
            })();
        })();
    }));
    return l177;
})();
var l178 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l178).fvalue = (function(v393){
        ((v393)["fname"] = "PUSH-BINDING-DECLARATION");
        return v393;
    })((function (values,v391,v392){
        checkArgs(arguments, 3);
        return (function(){
            return l177.fvalue(values, v392, ({car: v391, cdr: l175.fvalue(pv, v392)}));
        })();
    }));
    return l178;
})();
var l179 = {name: "MAKE-LEXENV"};
(function(){
    (l179).fvalue = (function(v394){
        ((v394)["fname"] = "MAKE-LEXENV");
        return v394;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return l44.fvalue(values, l3.value, l3.value, l3.value, l3.value);
        })();
    }));
    return l179;
})();
var l180 = {name: "COPY-LEXENV"};
(function(){
    (l180).fvalue = (function(v396){
        ((v396)["fname"] = "COPY-LEXENV");
        return v396;
    })((function (values,v395){
        checkArgs(arguments, 2);
        return (function(){
            return l75.fvalue(values, v395);
        })();
    }));
    return l180;
})();
var l181 = {name: "PUSH-TO-LEXENV"};
var l182 = {name: "BLOCK"};
var l183 = {name: "GOTAG"};
(function(){
    (l181).fvalue = (function(v401){
        ((v401)["fname"] = "PUSH-TO-LEXENV");
        return v401;
    })((function (values,v397,v398,v399){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v400){
                return (l26.fvalue(pv, v400, l103) !== l3.value ? (function(){
                    var x = v398;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v397, cdr: (function(){
                        var tmp = v398;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()}), x);
                })() : (l26.fvalue(pv, v400, l102) !== l3.value ? (function(){
                    var x = (function(){
                        var tmp = v398;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v397, cdr: l33.fvalue(pv, v398)}), x);
                })() : (l26.fvalue(pv, v400, l182) !== l3.value ? (function(){
                    var x = l35.fvalue(pv, v398);
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v397, cdr: l36.fvalue(pv, v398)}), x);
                })() : (l26.fvalue(pv, v400, l183) !== l3.value ? (function(){
                    var x = l37.fvalue(pv, v398);
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = ({car: v397, cdr: l38.fvalue(pv, v398)}), x);
                })() : (function(){
                    throw "ECASE expression failed.";
                })()))));
            })(v399);
        })();
    }));
    return l181;
})();
var l184 = {name: "EXTEND-LEXENV"};
(function(){
    (l184).fvalue = (function(v408){
        ((v408)["fname"] = "EXTEND-LEXENV");
        return v408;
    })((function (values,v402,v403,v404){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v405){
                return (function(){
                    return (function(v406,v407){
                        (function(){
                            while(v406 !== l3.value){
                                (v407 = (function(){
                                    var tmp = v406;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    l181.fvalue(pv, v407, v405, v404);
                                    return l3.value;
                                })();
                                (v406 = (function(){
                                    var tmp = v406;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v405;
                    })(l66.fvalue(pv, v402),l3.value);
                })();
            })(l180.fvalue(pv, v403));
        })();
    }));
    return l184;
})();
var l185 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l185).fvalue = (function(v413){
        ((v413)["fname"] = "LOOKUP-IN-LEXENV");
        return v413;
    })((function (values,v409,v410,v411){
        checkArgs(arguments, 4);
        return (function(){
            return l95.fvalue(values, v409, (function(v412){
                return (l26.fvalue(pv, v412, l103) !== l3.value ? l39.fvalue(pv, v410) : (l26.fvalue(pv, v412, l102) !== l3.value ? l40.fvalue(pv, v410) : (l26.fvalue(pv, v412, l182) !== l3.value ? l41.fvalue(pv, v410) : (l26.fvalue(pv, v412, l183) !== l3.value ? l42.fvalue(pv, v410) : (function(){
                    throw "ECASE expression failed.";
                })()))));
            })(v411));
        })();
    }));
    return l185;
})();
var l186 = {name: "*ENVIRONMENT*"};
(function(){
    (((l186.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l186).value = l179.fvalue(pv)));
    return l186;
})();
var l187 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l187.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l187).value = 0));
    return l187;
})();
var l188 = {name: "GVARNAME"};
(function(){
    (l188).fvalue = (function(v415){
        ((v415)["fname"] = "GVARNAME");
        return v415;
    })((function (values,v414){
        checkArgs(arguments, 2);
        return (function(){
            return l132.fvalue(values, "v", l17.fvalue(pv, ((l187).value = (function(){
                var x1 = (function(){
                    var symbol = l187;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })())));
        })();
    }));
    return l188;
})();
var l189 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l189).fvalue = (function(v417){
        ((v417)["fname"] = "TRANSLATE-VARIABLE");
        return v417;
    })((function (values,v416){
        checkArgs(arguments, 2);
        return (function(){
            return l174.fvalue(values, l185.fvalue(pv, v416, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l103));
        })();
    }));
    return l189;
})();
var l190 = {name: "EXTEND-LOCAL-ENV"};
(function(){
    (l190).fvalue = (function(v423){
        ((v423)["fname"] = "EXTEND-LOCAL-ENV");
        return v423;
    })((function (values,v418){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v419){
                return (function(){
                    return (function(v420,v421){
                        (function(){
                            while(v420 !== l3.value){
                                (v421 = (function(){
                                    var tmp = v420;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v422){
                                        return l181.fvalue(pv, v422, v419, l103);
                                    })(l171.fvalue(pv, v421, l103, l188.fvalue(pv, v421)));
                                    return l3.value;
                                })();
                                (v420 = (function(){
                                    var tmp = v420;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return v419;
                    })(v418,l3.value);
                })();
            })(l180.fvalue(pv, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        })();
    }));
    return l190;
})();
var l191 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l191.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l191).value = l3.value));
    return l191;
})();
var l192 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l192).fvalue = (function(v425){
        ((v425)["fname"] = "TOPLEVEL-COMPILATION");
        return v425;
    })((function (values,v424){
        checkArgs(arguments, 2);
        return (function(){
            return ((l191).value = ({car: v424, cdr: (function(){
                var symbol = l191;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()}));
        })();
    }));
    return l192;
})();
var l193 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l193).fvalue = (function(v427){
        ((v427)["fname"] = "NULL-OR-EMPTY-P");
        return v427;
    })((function (values,v426){
        checkArgs(arguments, 2);
        return (function(){
            return l24.fvalue(values, l71.fvalue(pv, v426));
        })();
    }));
    return l193;
})();
var l194 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l194).fvalue = (function(v428){
        ((v428)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v428;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return l66.fvalue(values, l88.fvalue(pv, (function(){
                var symbol = l193;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), (function(){
                var symbol = l191;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        })();
    }));
    return l194;
})();
var l195 = {name: "%COMPILE-DEFMACRO"};
var l196 = {name: "MACRO"};
(function(){
    (l195).fvalue = (function(v431){
        ((v431)["fname"] = "%COMPILE-DEFMACRO");
        return v431;
    })((function (values,v429,v430){
        checkArgs(arguments, 3);
        return (function(){
            l192.fvalue(pv, l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, v429))));
            l181.fvalue(pv, l171.fvalue(pv, v429, l196, v430), (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l102);
            return v429;
        })();
    }));
    return l195;
})();
var l197 = {name: "GLOBAL-BINDING"};
(function(){
    (l197).fvalue = (function(v437){
        ((v437)["fname"] = "GLOBAL-BINDING");
        return v437;
    })((function (values,v432,v433,v434){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v435){
                return (v435 !== l3.value ? v435 : (function(v436){
                    l181.fvalue(pv, v436, (function(){
                        var symbol = l186;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v434);
                    return v436;
                })(l171.fvalue(pv, v432, v433, l3.value)));
            })(l185.fvalue(pv, v432, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), v434));
        })();
    }));
    return l197;
})();
var l198 = {name: "CLAIMP"};
(function(){
    (l198).fvalue = (function(v442){
        ((v442)["fname"] = "CLAIMP");
        return v442;
    })((function (values,v438,v439,v440){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v441){
                return (v441 !== l3.value ? l86.fvalue(values, v440, l175.fvalue(pv, v441)) : l3.value);
            })(l185.fvalue(pv, v438, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), v439));
        })();
    }));
    return l198;
})();
var l199 = {name: "!PROCLAIM"};
var l200 = {name: "SPECIAL"};
var l201 = {name: "NOTINLINE"};
var l202 = {name: "CONSTANT"};
(function(){
    (l199).fvalue = (function(v454){
        ((v454)["fname"] = "!PROCLAIM");
        return v454;
    })((function (values,v443){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v444){
                return (l26.fvalue(pv, v444, l200) !== l3.value ? (function(){
                    return (function(v445,v446){
                        (function(){
                            while(v445 !== l3.value){
                                (v446 = (function(){
                                    var tmp = v445;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v447){
                                        return l178.fvalue(pv, l200, v447);
                                    })(l197.fvalue(pv, v446, l103, l103));
                                    return l3.value;
                                })();
                                (v445 = (function(){
                                    var tmp = v445;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })((function(){
                        var tmp = v443;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(),l3.value);
                })() : (l26.fvalue(pv, v444, l201) !== l3.value ? (function(){
                    return (function(v448,v449){
                        (function(){
                            while(v448 !== l3.value){
                                (v449 = (function(){
                                    var tmp = v448;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v450){
                                        return l178.fvalue(pv, l201, v450);
                                    })(l197.fvalue(pv, v449, l102, l102));
                                    return l3.value;
                                })();
                                (v448 = (function(){
                                    var tmp = v448;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })((function(){
                        var tmp = v443;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(),l3.value);
                })() : (l26.fvalue(pv, v444, l202) !== l3.value ? (function(){
                    return (function(v451,v452){
                        (function(){
                            while(v451 !== l3.value){
                                (v452 = (function(){
                                    var tmp = v451;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v453){
                                        return l178.fvalue(pv, l202, v453);
                                    })(l197.fvalue(pv, v452, l103, l103));
                                    return l3.value;
                                })();
                                (v451 = (function(){
                                    var tmp = v451;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })((function(){
                        var tmp = v443;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(),l3.value);
                })() : l3.value)));
            })((function(){
                var tmp = v443;
                return tmp === l3.value? l3.value: tmp.car;
            })());
        })();
    }));
    return l199;
})();
var l203 = {name: "PROCLAIM"};
(l203).fvalue = (function(){
    var symbol = l199;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l204 = {name: "*COMPILATIONS*"};
(function(){
    (((l204.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l204).value = l3.value));
    return l204;
})();
var l205 = {name: "DEFINE-COMPILATION"};
l205;
var l206 = {name: "IF"};
((l204).value = ({car: l44.fvalue(pv, l206, (function (values,v455,v456,v457){
    checkArgs(arguments, 4);
    return (function(){
        return l132.fvalue(values, "(", l143.fvalue(pv, v455), " !== ", l143.fvalue(pv, l3.value), " ? ", l143.fvalue(pv, v456, (function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), " : ", l143.fvalue(pv, v457, (function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), ")");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l207 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l208 = {name: "&OPTIONAL"};
var l209 = {name: "&REST"};
var l210 = QIList(l208,l209,l3);
(function(){
    (((l207.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l207).value = l210));
    return l207;
})();
var l211 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l211).fvalue = (function(v460){
        ((v460)["fname"] = "LIST-UNTIL-KEYWORD");
        return v460;
    })((function (values,v458){
        checkArgs(arguments, 2);
        return (function(){
            return ((function(v459){
                return (v459 !== l3.value ? v459 : l86.fvalue(pv, (function(){
                    var tmp = v458;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), (function(){
                    var symbol = l207;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })(l12.fvalue(pv, v458)) !== l3.value ? l3.value : ({car: (function(){
                var tmp = v458;
                return tmp === l3.value? l3.value: tmp.car;
            })(), cdr: l211.fvalue(pv, (function(){
                var tmp = v458;
                return tmp === l3.value? l3.value: tmp.cdr;
            })())}));
        })();
    }));
    return l211;
})();
var l212 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l212).fvalue = (function(v462){
        ((v462)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v462;
    })((function (values,v461){
        checkArgs(arguments, 2);
        return (function(){
            return l211.fvalue(values, v461);
        })();
    }));
    return l212;
})();
var l213 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l213).fvalue = (function(v464){
        ((v464)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v464;
    })((function (values,v463){
        checkArgs(arguments, 2);
        return (function(){
            return l73.fvalue(values, (function(){
                var symbol = l58;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l211.fvalue(pv, (function(){
                var tmp = l86.fvalue(pv, l208, v463);
                return tmp === l3.value? l3.value: tmp.cdr;
            })()));
        })();
    }));
    return l213;
})();
var l214 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l214).fvalue = (function(v466){
        ((v466)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v466;
    })((function (values,v465){
        checkArgs(arguments, 2);
        return (function(){
            return l73.fvalue(values, (function(){
                var symbol = l30;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l213.fvalue(pv, v465));
        })();
    }));
    return l214;
})();
var l215 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l215).fvalue = (function(v469){
        ((v469)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v469;
    })((function (values,v467){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v468){
                ((function(){
                    var tmp = v468;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })() !== l3.value ? (function(){
                    throw "Bad lambda-list";
                })() : l3.value);
                return (function(){
                    var tmp = v468;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
            })(l211.fvalue(pv, (function(){
                var tmp = l86.fvalue(pv, l209, v467);
                return tmp === l3.value? l3.value: tmp.cdr;
            })()));
        })();
    }));
    return l215;
})();
var l216 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l216).fvalue = (function(v472){
        ((v472)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v472;
    })((function (values,v471){
        checkArgsAtLeast(arguments, 2);
        var v470= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v470 = {car: arguments[i], cdr: 
        v470};
        return (function(){
            return (v471 !== l3.value ? l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var func = ", l134.fvalue(pv, v470), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "func.docstring = '", v471, "';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return func;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()") : l134.fvalue(values, v470));
        })();
    }));
    return l216;
})();
var l217 = {name: "LAMBDA-CHECK-ARGUMENT-COUNT"};
var l218 = {name: "N/A"};
(function(){
    (l217).fvalue = (function(v478){
        ((v478)["fname"] = "LAMBDA-CHECK-ARGUMENT-COUNT");
        return v478;
    })((function (values,v473,v474,v475){
        checkArgs(arguments, 4);
        return (function(){
            return (function(v476,v477){
                return (function(){
                    try {
                        (((function(){
                            var x1 = 1;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v476;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? l26.fvalue(pv, v476, v477) : l3.value) !== l3.value ? (function(){
                            var values = mv;
                            throw ({type: 'block', id: 180, values: l132.fvalue(values, "checkArgs(arguments, ", l17.fvalue(pv, v476), ");", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), message: 'Return from unknown block NIL.'})
                        })() : l3.value);
                        return l132.fvalue(values, ((function(){
                            var x1 = 1;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v476;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value ? l132.fvalue(pv, "checkArgsAtLeast(arguments, ", l17.fvalue(pv, v476), ");", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""), (((typeof (v477) == "number")?l4.value: l3.value) !== l3.value ? l132.fvalue(pv, "checkArgsAtMost(arguments, ", l17.fvalue(pv, v477), ");", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""));
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 180)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            })(l22.fvalue(pv, v473),(v475 !== l3.value ? l218 : (function(){
                var x1 = 1;
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v473;
                if (typeof x2 !== 'number') throw 'Not a number!';
                var x3 = v474;
                if (typeof x3 !== 'number') throw 'Not a number!';
                return x1+x2+x3;
            })()));
        })();
    }));
    return l217;
})();
var l219 = {name: "COMPILE-LAMBDA"};
var l220 = {name: "LS-COMPILE-BLOCK"};
(function(){
    (l219).fvalue = (function(v494){
        ((v494)["fname"] = "COMPILE-LAMBDA");
        return v494;
    })((function (values,v479,v480){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v481,v482,v483,v484){
                ((((typeof((function(){
                    var tmp = v480;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) == "string")?l4.value: l3.value) !== l3.value ? l27.fvalue(pv, l12.fvalue(pv, (function(){
                    var tmp = v480;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())) : l3.value) !== l3.value ? (function(){
                    (v484 = (function(){
                        var tmp = v480;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                    return (v480 = (function(){
                        var tmp = v480;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })());
                })() : l3.value);
                return (function(v485,v486,v487){
                    try {
                        var tmp;
                        tmp = l186.value;
                        l186.value = v487;
                        v487 = tmp;
                        return l216.fvalue(values, v484, "(function (", l134.fvalue(pv, ({car: "values", cdr: l73.fvalue(pv, (function(){
                            var symbol = l189;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l64.fvalue(pv, v481, v482))}), ","), "){", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l141.fvalue(pv, l217.fvalue(pv, v485, v486, v483), (v482 !== l3.value ? l132.fvalue(pv, "switch(arguments.length-1){", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v488,v489,v490){
                            return (function(){
                                (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v490;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v486;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v491){
                                                (v489 = ({car: l132.fvalue(pv, "case ", l17.fvalue(pv, (function(){
                                                    var x1 = v490;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = v485;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })()), ":", (function(){
                                                    var symbol = l131;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(), l189.fvalue(pv, (function(){
                                                    var tmp = v491;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })()), "=", l143.fvalue(pv, l33.fvalue(pv, v491)), ";", (function(){
                                                    var symbol = l131;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()), cdr: v489}));
                                                return (v490 = (function(){
                                                    var x1 = v490;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            })(l83.fvalue(pv, v490, v488));
                                        }return l3.value;
                                    })();
                                })();
                                (v489 = ({car: l132.fvalue(pv, "default: break;", (function(){
                                    var symbol = l131;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), cdr: v489}));
                                return l134.fvalue(pv, l66.fvalue(pv, v489));
                            })();
                        })(l213.fvalue(pv, v479),l3.value,0), "}", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""), (v483 !== l3.value ? (function(v492){
                            return l132.fvalue(pv, "var ", v492, "= ", l143.fvalue(pv, l3.value), ";", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "for (var i = arguments.length-1; i>=", l17.fvalue(pv, (function(){
                                var x1 = 1;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v485;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                var x3 = v486;
                                if (typeof x3 !== 'number') throw 'Not a number!';
                                return x1+x2+x3;
                            })()), "; i--)", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l141.fvalue(pv, v492, " = ", "{car: arguments[i], cdr: "), v492, "};", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l189.fvalue(pv, v483)) : ""), (function(v493){
                            try {
                                var tmp;
                                tmp = l170.value;
                                l170.value = v493;
                                v493 = tmp;
                                return l220.fvalue(pv, v480, l4.value);
                            }
                            finally {
                                l170.value = v493;
                            }
                        })(l4.value)), "})");
                    }
                    finally {
                        l186.value = v487;
                    }
                })(l71.fvalue(pv, v481),l71.fvalue(pv, v482),l190.fvalue(pv, l64.fvalue(pv, l58.fvalue(pv, v483), v481, v482)));
            })(l212.fvalue(pv, v479),l214.fvalue(pv, v479),l215.fvalue(pv, v479),l3.value);
        })();
    }));
    return l219;
})();
var l221 = {name: "SETQ-PAIR"};
var l222 = {name: "SET"};
(function(){
    (l221).fvalue = (function(v498){
        ((v498)["fname"] = "SETQ-PAIR");
        return v498;
    })((function (values,v495,v496){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v497){
                return ((((l173.fvalue(pv, v497) === l103)?l4.value: l3.value) !== l3.value ? (l27.fvalue(pv, l86.fvalue(pv, l200, l175.fvalue(pv, v497))) !== l3.value ? l27.fvalue(pv, l86.fvalue(pv, l202, l175.fvalue(pv, v497))) : l3.value) : l3.value) !== l3.value ? l132.fvalue(values, l174.fvalue(pv, v497), " = ", l143.fvalue(pv, v496)) : l143.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l222), l44.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, v495))), l44.fvalue(pv, v496))));
            })(l185.fvalue(pv, v495, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l103));
        })();
    }));
    return l221;
})();
var l223 = {name: "SETQ"};
((l204).value = ({car: l44.fvalue(pv, l223, (function (values){
    var v499= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v499 = {car: arguments[i], cdr: 
    v499};
    return (function(){
        return (function(v500){
            (function(){
                try {
                    return (function(){
                        while(l4.value !== l3.value){
                            (l12.fvalue(pv, v499) !== l3.value ? (function(){
                                throw ({type: 'block', id: 185, values: l3.value, message: 'Return from unknown block NIL.'})
                            })() : (l12.fvalue(pv, (function(){
                                var tmp = v499;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? (function(){
                                throw "Odd paris in SETQ";
                            })() : (function(){
                                (v500 = l132.fvalue(pv, v500, l132.fvalue(pv, l221.fvalue(pv, (function(){
                                    var tmp = v499;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })(), l33.fvalue(pv, v499)), (l12.fvalue(pv, l35.fvalue(pv, v499)) !== l3.value ? "" : ", "))));
                                return (v499 = l35.fvalue(pv, v499));
                            })()));
                        }return l3.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 185)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
            return l132.fvalue(values, "(", v500, ")");
        })("");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l224 = {name: "JS-VREF"};
((l204).value = ({car: l44.fvalue(pv, l224, (function (values,v501){
    checkArgs(arguments, 2);
    return (function(){
        return v501;
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l225 = {name: "JS-VSET"};
((l204).value = ({car: l44.fvalue(pv, l225, (function (values,v502,v503){
    checkArgs(arguments, 3);
    return (function(){
        return l132.fvalue(values, "(", v502, " = ", l143.fvalue(pv, v503), ")");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l146).fvalue = (function(v510){
        ((v510)["fname"] = "ESCAPE-STRING");
        return v510;
    })((function (values,v504){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v505,v506,v507){
                (function(){
                    return (function(){
                        while((function(){
                            var x1 = v506;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v507;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1<x2?l4.value: l3.value);
                        })() !== l3.value){
                            (function(v508){
                                ((function(v509){
                                    return (v509 !== l3.value ? v509 : l78.fvalue(pv, v508, 92));
                                })(l78.fvalue(pv, v508, 34)) !== l3.value ? (v505 = l132.fvalue(pv, v505, "\\")) : l3.value);
                                (l78.fvalue(pv, v508, 10) !== l3.value ? (function(){
                                    (v505 = l132.fvalue(pv, v505, "\\"));
                                    return (v508 = 110);
                                })() : l3.value);
                                return (v505 = l132.fvalue(pv, v505, l96.fvalue(pv, v508)));
                            })((function(){
                                var string = v504;
                                var index = v506;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })());
                            (v506 = (function(){
                                var x1 = v506;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                        }return l3.value;
                    })();
                })();
                return v505;
            })("",0,l71.fvalue(pv, v504));
        })();
    }));
    return l146;
})();
var l226 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l226.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l226).value = l3.value));
    return l226;
})();
var l227 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l227.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l227).value = 0));
    return l227;
})();
var l228 = {name: "GENLIT"};
(function(){
    (l228).fvalue = (function(v511){
        ((v511)["fname"] = "GENLIT");
        return v511;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
            return l132.fvalue(values, "l", l17.fvalue(pv, ((l227).value = (function(){
                var x1 = (function(){
                    var symbol = l227;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })())));
        })();
    }));
    return l228;
})();
var l229 = {name: "LITERAL"};
(function(){
    (l229).fvalue = (function(v526){
        ((v526)["fname"] = "LITERAL");
        return v526;
    })((function (values,v512,v513){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v513=l3.value;
        default: break;
        }
        return (function(){
            return (l79.fvalue(pv, v512) !== l3.value ? l17.fvalue(values, v512) : (((typeof(v512) == "string")?l4.value: l3.value) !== l3.value ? l132.fvalue(values, "\"", l146.fvalue(pv, v512), "\"") : (((function(){
                var tmp = v512;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(v514){
                return (v514 !== l3.value ? v514 : (function(v516,v517){
                    ((l226).value = ({car: ({car: v512, cdr: v516}), cdr: (function(){
                        var symbol = l226;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()}));
                    l192.fvalue(pv, l132.fvalue(pv, "var ", v516, " = ", v517));
                    return v516;
                })(l228.fvalue(pv),(function(v515){
                    return (l12.fvalue(pv, v515) !== l3.value ? l132.fvalue(pv, "{name: \"", l146.fvalue(pv, (v512).name), "\"}") : l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l128), l44.fvalue(pv, (v512).name), l44.fvalue(pv, l112.fvalue(pv, v515)))));
                })(l120.fvalue(pv, v512))));
            })((function(){
                var tmp = l95.fvalue(pv, v512, (function(){
                    var symbol = l226;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) : (((function(){
                var tmp = v512;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(){
                var v518 = l85.fvalue(pv, v512);
                var v519 = l84.fvalue(pv, v512);
                var v520 = l132.fvalue(pv, "QIList(", l135.fvalue(pv, l73.fvalue(pv, (function (values,v521){
                    checkArgs(arguments, 2);
                    return l229.fvalue(values, v521, l4.value);
                }), v518), ","), l229.fvalue(pv, (function(){
                    var tmp = v519;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), l4.value), ",", l229.fvalue(pv, (function(){
                    var tmp = v519;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), l4.value), ")");
                return (v513 !== l3.value ? v520 : (function(v522){
                    l192.fvalue(pv, l132.fvalue(pv, "var ", v522, " = ", v520));
                    return v522;
                })(l228.fvalue(pv)));
            })() : (((function(){
                var x = v512;
                return typeof x === 'object' && 'length' in x;
            })()?l4.value: l3.value) !== l3.value ? (function(v523){
                return (function(v524){
                    return (v513 !== l3.value ? v524 : (function(v525){
                        l192.fvalue(pv, l132.fvalue(pv, "var ", v525, " = ", v524));
                        return v525;
                    })(l228.fvalue(pv)));
                })(l132.fvalue(pv, "[", l134.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l229;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v523), ", "), "]"));
            })(l137.fvalue(pv, v512)) : l3.value)))));
        })();
    }));
    return l229;
})();
((l204).value = ({car: l44.fvalue(pv, l165, (function (values,v527){
    checkArgs(arguments, 2);
    return (function(){
        return l229.fvalue(values, v527);
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l230 = {name: "%WHILE"};
((l204).value = ({car: l44.fvalue(pv, l230, (function (values,v529){
    checkArgsAtLeast(arguments, 2);
    var v528= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v528 = {car: arguments[i], cdr: 
    v528};
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "while(", l143.fvalue(pv, v529), " !== ", l143.fvalue(pv, l3.value), "){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, l220.fvalue(pv, v528)), "}", "return ", l143.fvalue(pv, l3.value), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l231 = {name: "SYMBOL-FUNCTION"};
((l204).value = ({car: l44.fvalue(pv, l102, (function (values,v530){
    checkArgs(arguments, 2);
    return (function(){
        return ((l59.fvalue(pv, v530) !== l3.value ? (((function(){
            var tmp = v530;
            return tmp === l3.value? l3.value: tmp.car;
        })() === l5)?l4.value: l3.value) : l3.value) !== l3.value ? l219.fvalue(values, l33.fvalue(pv, v530), l35.fvalue(pv, v530)) : (((function(){
            var tmp = v530;
            return (typeof tmp == 'object' && 'name' in tmp);
        })()?l4.value: l3.value) !== l3.value ? (function(v531){
            return (v531 !== l3.value ? l174.fvalue(values, v531) : l143.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l231), l44.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, v530))))));
        })(l185.fvalue(pv, v530, (function(){
            var symbol = l186;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l102)) : l3.value));
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l232 = {name: "MAKE-FUNCTION-BINDING"};
(function(){
    (l232).fvalue = (function(v533){
        ((v533)["fname"] = "MAKE-FUNCTION-BINDING");
        return v533;
    })((function (values,v532){
        checkArgs(arguments, 2);
        return (function(){
            return l171.fvalue(values, v532, l102, l188.fvalue(pv, v532));
        })();
    }));
    return l232;
})();
var l233 = {name: "COMPILE-FUNCTION-DEFINITION"};
(function(){
    (l233).fvalue = (function(v535){
        ((v535)["fname"] = "COMPILE-FUNCTION-DEFINITION");
        return v535;
    })((function (values,v534){
        checkArgs(arguments, 2);
        return (function(){
            return l219.fvalue(values, (function(){
                var tmp = v534;
                return tmp === l3.value? l3.value: tmp.car;
            })(), (function(){
                var tmp = v534;
                return tmp === l3.value? l3.value: tmp.cdr;
            })());
        })();
    }));
    return l233;
})();
var l234 = {name: "TRANSLATE-FUNCTION"};
(function(){
    (l234).fvalue = (function(v538){
        ((v538)["fname"] = "TRANSLATE-FUNCTION");
        return v538;
    })((function (values,v536){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v537){
                return l174.fvalue(values, v537);
            })(l185.fvalue(pv, v536, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l102));
        })();
    }));
    return l234;
})();
var l235 = {name: "FLET"};
((l204).value = ({car: l44.fvalue(pv, l235, (function (values,v540){
    checkArgsAtLeast(arguments, 2);
    var v539= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v539 = {car: arguments[i], cdr: 
    v539};
    return (function(){
        return (function(){
            try {
                var v545 = l186.value;
                var v541 = l73.fvalue(pv, (function(){
                    var symbol = l30;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v540);
                var v542 = l73.fvalue(pv, (function(){
                    var symbol = l31;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v540);
                var v543 = l73.fvalue(pv, (function(){
                    var symbol = l233;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v542);
                ((l186).value = l184.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l232;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v541), (function(){
                    var symbol = l186;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l102));
                return l132.fvalue(values, "(function(", l134.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l234;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v541), ","), "){", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(v544){
                    return l141.fvalue(pv, v544);
                })(l220.fvalue(pv, v539, l4.value)), "})(", l134.fvalue(pv, v543, ","), ")");
            }
            finally {
                l186.value = v545;
            }
        })();
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l236 = {name: "LABELS"};
((l204).value = ({car: l44.fvalue(pv, l236, (function (values,v547){
    checkArgsAtLeast(arguments, 2);
    var v546= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v546 = {car: arguments[i], cdr: 
    v546};
    return (function(){
        return (function(){
            try {
                var v550 = l186.value;
                var v548 = l73.fvalue(pv, (function(){
                    var symbol = l30;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v547);
                ((l186).value = l184.fvalue(pv, l73.fvalue(pv, (function(){
                    var symbol = l232;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v548), (function(){
                    var symbol = l186;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l102));
                return l132.fvalue(values, "(function(){", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l141.fvalue(pv, l136.fvalue(pv, (function (values,v549){
                    checkArgs(arguments, 2);
                    return l132.fvalue(values, "var ", l234.fvalue(pv, (function(){
                        var tmp = v549;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), " = ", l219.fvalue(pv, l33.fvalue(pv, v549), l35.fvalue(pv, v549)), ";", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }), v547), l220.fvalue(pv, v546, l4.value)), "})()");
            }
            finally {
                l186.value = v550;
            }
        })();
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l237 = {name: "*COMPILING-FILE*"};
(function(){
    (((l237.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l237).value = l3.value));
    return l237;
})();
var l238 = {name: "EVAL-WHEN-COMPILE"};
var l239 = {name: "PROGN"};
var l240 = {name: "EVAL"};
((l204).value = ({car: l44.fvalue(pv, l238, (function (values){
    var v551= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v551 = {car: arguments[i], cdr: 
    v551};
    return (function(){
        return ((function(){
            var symbol = l237;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? (function(){
            l240.fvalue(pv, ({car: l239, cdr: v551}));
            return l3.value;
        })() : l143.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l239), v551)));
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l241 = {name: "DEFINE-TRANSFORMATION"};
l241;
((l204).value = ({car: l44.fvalue(pv, l239, (function (values){
    var v552= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v552 = {car: arguments[i], cdr: 
    v552};
    return (function(){
        return (l12.fvalue(pv, (function(){
            var tmp = v552;
            return tmp === l3.value? l3.value: tmp.cdr;
        })()) !== l3.value ? l143.fvalue(values, (function(){
            var tmp = v552;
            return tmp === l3.value? l3.value: tmp.car;
        })(), (function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()) : l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, l220.fvalue(pv, v552, l4.value)), "})()"));
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l242 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l242).fvalue = (function(v554){
        ((v554)["fname"] = "SPECIAL-VARIABLE-P");
        return v554;
    })((function (values,v553){
        checkArgs(arguments, 2);
        return (function(){
            return (l198.fvalue(pv, v553, l103, l200) !== l3.value ? l4.value : l3.value);
        })();
    }));
    return l242;
})();
var l243 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l243).fvalue = (function(v561){
        ((v561)["fname"] = "LET-BINDING-WRAPPER");
        return v561;
    })((function (values,v555,v556){
        checkArgs(arguments, 3);
        return (function(){
            try {
                (l12.fvalue(pv, v555) !== l3.value ? (function(){
                    var values = mv;
                    throw ({type: 'block', id: 203, values: v556, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                })() : l3.value);
                return l132.fvalue(values, "try {", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l141.fvalue(pv, "var tmp;", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l136.fvalue(pv, (function (values,v557){
                    checkArgs(arguments, 2);
                    return (function(v558){
                        return l132.fvalue(values, "tmp = ", v558, ".value;", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), v558, ".value = ", (function(){
                            var tmp = v557;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), ";", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var tmp = v557;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), " = tmp;", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, (function(){
                        var tmp = v557;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()))));
                }), v555), v556, (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "finally {", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l141.fvalue(pv, l136.fvalue(pv, (function (values,v559){
                    checkArgs(arguments, 2);
                    return (function(v560){
                        return l132.fvalue(values, v560, ".value", " = ", (function(){
                            var tmp = v559;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), ";", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, (function(){
                        var tmp = v559;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()))));
                }), v555)), "}", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 203)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l243;
})();
var l244 = {name: "LET"};
((l204).value = ({car: l44.fvalue(pv, l244, (function (values,v563){
    checkArgsAtLeast(arguments, 2);
    var v562= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v562 = {car: arguments[i], cdr: 
    v562};
    return (function(){
        return (function(){
            try {
                var v571 = l186.value;
                var v564 = l73.fvalue(pv, (function(){
                    var symbol = l58;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v563);
                var v565 = l73.fvalue(pv, (function(){
                    var symbol = l39;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v564);
                var v566 = l73.fvalue(pv, (function(){
                    var symbol = l143;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l73.fvalue(pv, (function(){
                    var symbol = l40;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v564));
                ((l186).value = l190.fvalue(pv, l88.fvalue(pv, (function(){
                    var symbol = l242;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v565)));
                var v567 = l3.value;
                return l132.fvalue(values, "(function(", l134.fvalue(pv, l73.fvalue(pv, (function (values,v568){
                    checkArgs(arguments, 2);
                    return (l242.fvalue(pv, v568) !== l3.value ? (function(v569){
                        (v567 = ({car: ({car: v568, cdr: v569}), cdr: v567}));
                        return v569;
                    })(l188.fvalue(pv, v568)) : l189.fvalue(values, v568));
                }), v565), ","), "){", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (function(v570){
                    return l141.fvalue(pv, l243.fvalue(pv, v567, v570));
                })(l220.fvalue(pv, v562, l4.value)), "})(", l134.fvalue(pv, v566, ","), ")");
            }
            finally {
                l186.value = v571;
            }
        })();
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l245 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l245).fvalue = (function(v578){
        ((v578)["fname"] = "LET*-INITIALIZE-VALUE");
        return v578;
    })((function (values,v572){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v573,v574){
                return (l242.fvalue(pv, v573) !== l3.value ? l132.fvalue(values, l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l223), l44.fvalue(pv, v573), l44.fvalue(pv, v574))), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : (function(){
                    var v575 = l188.fvalue(pv, v573);
                    var v576 = l171.fvalue(pv, v573, l103, v575);
                    return (function(v577){
                        l181.fvalue(pv, v576, (function(){
                            var symbol = l186;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l103);
                        return v577;
                    })(l132.fvalue(pv, "var ", v575, " = ", l143.fvalue(pv, v574), ";", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })());
            })(l39.fvalue(pv, v572),l40.fvalue(pv, v572));
        })();
    }));
    return l245;
})();
var l246 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l246).fvalue = (function(v587){
        ((v587)["fname"] = "LET*-BINDING-WRAPPER");
        return v587;
    })((function (values,v579,v580){
        checkArgs(arguments, 3);
        return (function(){
            try {
                (l12.fvalue(pv, v579) !== l3.value ? (function(){
                    var values = mv;
                    throw ({type: 'block', id: 206, values: v580, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                })() : l3.value);
                return (function(v582){
                    return l132.fvalue(values, "try {", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l141.fvalue(pv, l136.fvalue(pv, (function (values,v583){
                        checkArgs(arguments, 2);
                        return (function(v584){
                            return l132.fvalue(values, "var ", (function(){
                                var tmp = v583;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = ", v584, ".value;", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, (function(){
                            var tmp = v583;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    }), v582), v580), "}", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l141.fvalue(pv, l136.fvalue(pv, (function (values,v585){
                        checkArgs(arguments, 2);
                        return (function(v586){
                            return l132.fvalue(values, v586, ".value", " = ", (function(){
                                var tmp = v585;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, (function(){
                            var tmp = v585;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    }), v582)), "}", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })(l73.fvalue(pv, (function (values,v581){
                    checkArgs(arguments, 2);
                    return ({car: v581, cdr: l188.fvalue(pv, v581)});
                }), l89.fvalue(pv, (function(){
                    var symbol = l242;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v579)));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 206)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    }));
    return l246;
})();
var l247 = {name: "LET*"};
((l204).value = ({car: l44.fvalue(pv, l247, (function (values,v589){
    checkArgsAtLeast(arguments, 2);
    var v588= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v588 = {car: arguments[i], cdr: 
    v588};
    return (function(){
        return (function(v590,v591){
            try {
                var tmp;
                tmp = l186.value;
                l186.value = v591;
                v591 = tmp;
                return l132.fvalue(values, "(function(){", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l141.fvalue(pv, (function(v592,v593){
                    return l246.fvalue(pv, v592, v593);
                })(l89.fvalue(pv, (function(){
                    var symbol = l242;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l73.fvalue(pv, (function(){
                    var symbol = l39;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v590)),l132.fvalue(pv, l136.fvalue(pv, (function(){
                    var symbol = l245;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v590), l220.fvalue(pv, v588, l4.value)))), "})()");
            }
            finally {
                l186.value = v591;
            }
        })(l73.fvalue(pv, (function(){
            var symbol = l58;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v589),l180.fvalue(pv, (function(){
            var symbol = l186;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()));
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l248 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l248.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l248).value = 0));
    return l248;
})();
var l249 = {name: "MULTIPLE-VALUE"};
var l250 = {name: "USED"};
((l204).value = ({car: l44.fvalue(pv, l182, (function (values,v595){
    checkArgsAtLeast(arguments, 2);
    var v594= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v594 = {car: arguments[i], cdr: 
    v594};
    return (function(){
        return (function(){
            var v596 = l17.fvalue(pv, ((l248).value = (function(){
                var x1 = (function(){
                    var symbol = l248;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = 1;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })()));
            var v597 = l171.fvalue(pv, v595, l182, v596);
            ((function(){
                var symbol = l170;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l178.fvalue(pv, l249, v597) : l3.value);
            return (function(){
                try {
                    var v599 = l186.value;
                    ((l186).value = l184.fvalue(pv, l44.fvalue(pv, v597), (function(){
                        var symbol = l186;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l182));
                    var v598 = l220.fvalue(pv, v594, l4.value);
                    return (l86.fvalue(pv, l250, l175.fvalue(pv, v597)) !== l3.value ? l132.fvalue(values, "(function(){", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l141.fvalue(pv, "try {", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l141.fvalue(pv, v598), "}", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "catch (cf){", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    if (cf.type == 'block' && cf.id == ", v596, ")", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), ((function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() !== l3.value ? "        return values.apply(this, forcemv(cf.values));" : "        return cf.values;"), (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    else", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "        throw cf;", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l132.fvalue(values, "(function(){", (function(){
                        var symbol = l131;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l141.fvalue(pv, v598), "})()"));
                }
                finally {
                    l186.value = v599;
                }
            })();
        })();
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l251 = {name: "RETURN-FROM"};
((l204).value = ({car: l44.fvalue(pv, l251, (function (values,v600,v601){
    checkArgsAtLeast(arguments, 2);
    checkArgsAtMost(arguments, 3);
    switch(arguments.length-1){
    case 1:
    v601=l3.value;
    default: break;
    }
    return (function(){
        return (function(){
            var v602 = l185.fvalue(pv, v600, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l182);
            var v603 = l86.fvalue(pv, l249, l175.fvalue(pv, v602));
            (l12.fvalue(pv, v602) !== l3.value ? (function(){
                throw l132.fvalue(pv, "Unknown block `", (v600).name, "'.");
            })() : l3.value);
            l178.fvalue(pv, l250, v602);
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, (v603 !== l3.value ? l132.fvalue(pv, "var values = mv;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()) : ""), "throw ({", "type: 'block', ", "id: ", l174.fvalue(pv, v602), ", ", "values: ", l143.fvalue(pv, v601, v603), ", ", "message: 'Return from unknown block ", (v600).name, ".'", "})"), "})()");
        })();
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l252 = {name: "CATCH"};
((l204).value = ({car: l44.fvalue(pv, l252, (function (values,v605){
    checkArgsAtLeast(arguments, 2);
    var v604= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v604 = {car: arguments[i], cdr: 
    v604};
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var id = ", l143.fvalue(pv, v605), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "try {", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, l220.fvalue(pv, v604, l4.value)), (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "}", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "catch (cf){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), ((function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? "        return values.apply(this, forcemv(cf.values));" : "        return pv.apply(this, forcemv(cf.values));"), (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "    else", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "        throw cf;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "}", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l253 = {name: "THROW"};
((l204).value = ({car: l44.fvalue(pv, l253, (function (values,v606,v607){
    checkArgs(arguments, 3);
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var values = mv;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "throw ({", "type: 'catch', ", "id: ", l143.fvalue(pv, v606), ", ", "values: ", l143.fvalue(pv, v607, l4.value), ", ", "message: 'Throw uncatched.'", "})"), "})()");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l254 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l254.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l254).value = 0));
    return l254;
})();
var l255 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l255.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l255).value = 0));
    return l255;
})();
var l256 = {name: "GO-TAG-P"};
(function(){
    (l256).fvalue = (function(v610){
        ((v610)["fname"] = "GO-TAG-P");
        return v610;
    })((function (values,v608){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v609){
                return (v609 !== l3.value ? v609 : ((function(){
                    var tmp = v608;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value));
            })(l79.fvalue(pv, v608));
        })();
    }));
    return l256;
})();
var l257 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l257).fvalue = (function(v616){
        ((v616)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v616;
    })((function (values,v611,v612){
        checkArgs(arguments, 3);
        return (function(){
            return (function(v615){
                return l184.fvalue(values, v615, (function(){
                    var symbol = l186;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l183);
            })(l73.fvalue(pv, (function (values,v613){
                checkArgs(arguments, 2);
                return (function(v614){
                    return l171.fvalue(values, v613, l183, l44.fvalue(pv, v611, v614));
                })(l17.fvalue(pv, ((l255).value = (function(){
                    var x1 = (function(){
                        var symbol = l255;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = 1;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })())));
            }), l89.fvalue(pv, (function(){
                var symbol = l256;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v612)));
        })();
    }));
    return l257;
})();
var l258 = {name: "TAGBODY"};
((l204).value = ({car: l44.fvalue(pv, l258, (function (values){
    var v617= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v617 = {car: arguments[i], cdr: 
    v617};
    return (function(){
        try {
            (l93.fvalue(pv, (function(){
                var symbol = l256;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v617) !== l3.value ? l3.value : (function(){
                var values = mv;
                throw ({type: 'block', id: 214, values: l143.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l239), v617, l44.fvalue(pv, l3))), message: 'Return from unknown block TAGBODY.'})
            })());
            (l256.fvalue(pv, (function(){
                var tmp = v617;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l3.value : (v617 = ({car: l16.fvalue(pv, "START"), cdr: v617})));
            return (function(v618){
                return (function(v620,v619){
                    try {
                        var tmp;
                        tmp = l186.value;
                        l186.value = v620;
                        v620 = tmp;
                        (function(v621){
                            return (v619 = l40.fvalue(pv, l174.fvalue(pv, v621)));
                        })(l185.fvalue(pv, l39.fvalue(pv, v617), (function(){
                            var symbol = l186;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l183));
                        return l132.fvalue(values, "(function(){", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l141.fvalue(pv, "var tagbody_", v618, " = ", v619, ";", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "tbloop:", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "while (true) {", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l141.fvalue(pv, "try {", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l141.fvalue(pv, (function(v622){
                            return l132.fvalue(pv, "switch(tagbody_", v618, "){", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "case ", v619, ":", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                return (function(v623,v624){
                                    (function(){
                                        while(v623 !== l3.value){
                                            (v624 = (function(){
                                                var tmp = v623;
                                                return tmp === l3.value? l3.value: tmp.car;
                                            })());
                                            (function(){
                                                (v622 = l132.fvalue(pv, v622, (l27.fvalue(pv, l256.fvalue(pv, v624)) !== l3.value ? l141.fvalue(pv, l143.fvalue(pv, v624), ";", (function(){
                                                    var symbol = l131;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })()) : (function(v625){
                                                    return l132.fvalue(pv, "case ", l40.fvalue(pv, l174.fvalue(pv, v625)), ":", (function(){
                                                        var symbol = l131;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })());
                                                })(l185.fvalue(pv, v624, (function(){
                                                    var symbol = l186;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(), l183)))));
                                                return l3.value;
                                            })();
                                            (v623 = (function(){
                                                var tmp = v623;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })());
                                        }return l3.value;
                                    })();
                                    return v622;
                                })((function(){
                                    var tmp = v617;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(),l3.value);
                            })(), "default:", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    break tbloop;", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l131;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })("")), "}", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (jump) {", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (jump.type == 'tagbody' && jump.id == ", v618, ")", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        tagbody_", v618, " = jump.label;", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw(jump);", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "}", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return ", l143.fvalue(pv, l3.value), ";", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    }
                    finally {
                        l186.value = v620;
                    }
                })(l257.fvalue(pv, v618, v617),l3.value);
            })(l17.fvalue(pv, (function(){
                var symbol = l254;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 214)
                return values.apply(this, forcemv(cf.values));
            else
                throw cf;
        }
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l259 = {name: "GO"};
((l204).value = ({car: l44.fvalue(pv, l259, (function (values,v626){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v627,v628){
            return (v627 !== l3.value ? l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw ({", "type: 'tagbody', ", "id: ", l39.fvalue(pv, l174.fvalue(pv, v627)), ", ", "label: ", l40.fvalue(pv, l174.fvalue(pv, v627)), ", ", "message: 'Attempt to GO to non-existing tag ", v628, "'", "})", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()") : (function(){
                throw l132.fvalue(pv, "Unknown tag `", v628, "'.");
            })());
        })(l185.fvalue(pv, v626, (function(){
            var symbol = l186;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l183),(((function(){
            var tmp = v626;
            return (typeof tmp == 'object' && 'name' in tmp);
        })()?l4.value: l3.value) !== l3.value ? (v626).name : (l79.fvalue(pv, v626) !== l3.value ? l17.fvalue(pv, v626) : l3.value)));
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l260 = {name: "UNWIND-PROTECT"};
((l204).value = ({car: l44.fvalue(pv, l260, (function (values,v630){
    checkArgsAtLeast(arguments, 2);
    var v629= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v629 = {car: arguments[i], cdr: 
    v629};
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var ret = ", l143.fvalue(pv, l3.value), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "try {", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "ret = ", l143.fvalue(pv, v630), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "} finally {", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, l220.fvalue(pv, v629)), "}", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "return ret;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l261 = {name: "MULTIPLE-VALUE-CALL"};
((l204).value = ({car: l44.fvalue(pv, l261, (function (values,v632){
    checkArgsAtLeast(arguments, 2);
    var v631= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v631 = {car: arguments[i], cdr: 
    v631};
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var func = ", l143.fvalue(pv, v632), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var args = [", ((function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? "values" : "pv"), "];", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "return ", l132.fvalue(pv, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var values = mv;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var vs;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l136.fvalue(pv, (function (values,v633){
            checkArgs(arguments, 2);
            return l132.fvalue(values, "vs = ", l143.fvalue(pv, v633, l4.value), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (typeof vs === 'object' && 'multiple-value' in vs)", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "args = args.concat(vs);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "else", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "args.push(vs);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        }), v631), "return func.apply(window, args);", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()"), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l262 = {name: "MULTIPLE-VALUE-PROG1"};
((l204).value = ({car: l44.fvalue(pv, l262, (function (values,v635){
    checkArgsAtLeast(arguments, 2);
    var v634= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v634 = {car: arguments[i], cdr: 
    v634};
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var args = ", l143.fvalue(pv, v635, (function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l220.fvalue(pv, v634), "return args;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l263 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l263).fvalue = (function(v638){
        ((v638)["fname"] = "BACKQUOTE-EXPAND-1");
        return v638;
    })((function (values,v636){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v636;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l44.fvalue(values, l165, v636) : (l45.fvalue(pv, v636) !== l3.value ? v636 : ((((function(){
                var tmp = v636;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l168)?l4.value: l3.value) !== l3.value ? (function(){
                var tmp = v636;
                return tmp === l3.value? l3.value: tmp.car;
            })() : ((((function(){
                var tmp = v636;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l166)?l4.value: l3.value) !== l3.value ? l263.fvalue(values, l263.fvalue(pv, l33.fvalue(pv, v636))) : ({car: l64, cdr: l73.fvalue(pv, (function (values,v637){
                checkArgs(arguments, 2);
                return ((l59.fvalue(pv, v637) !== l3.value ? (((function(){
                    var tmp = v637;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l168)?l4.value: l3.value) : l3.value) !== l3.value ? l44.fvalue(values, l44, l33.fvalue(pv, v637)) : ((l59.fvalue(pv, v637) !== l3.value ? (((function(){
                    var tmp = v637;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l167)?l4.value: l3.value) : l3.value) !== l3.value ? l33.fvalue(values, v637) : l44.fvalue(values, l44, l263.fvalue(pv, v637))));
            }), v636)})))));
        })();
    }));
    return l263;
})();
var l264 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l264).fvalue = (function(v640){
        ((v640)["fname"] = "BACKQUOTE-EXPAND");
        return v640;
    })((function (values,v639){
        checkArgs(arguments, 2);
        return (function(){
            return ((l59.fvalue(pv, v639) !== l3.value ? (((function(){
                var tmp = v639;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l166)?l4.value: l3.value) : l3.value) !== l3.value ? l263.fvalue(values, l33.fvalue(pv, v639)) : v639);
        })();
    }));
    return l264;
})();
l166;
((l204).value = ({car: l44.fvalue(pv, l166, (function (values,v641){
    checkArgs(arguments, 2);
    return (function(){
        return l143.fvalue(values, l263.fvalue(pv, v641));
    })();
})), cdr: (function(){
    var symbol = l204;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l265 = {name: "*BUILTINS*"};
(function(){
    (((l265.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l265).value = l3.value));
    return l265;
})();
var l266 = {name: "DEFINE-RAW-BUILTIN"};
l266;
var l267 = {name: "DEFINE-BUILTIN"};
l267;
var l268 = {name: "TYPE-CHECK"};
l268;
var l269 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l269).fvalue = (function(v650){
        ((v650)["fname"] = "VARIABLE-ARITY-CALL");
        return v650;
    })((function (values,v642,v643){
        checkArgs(arguments, 3);
        return (function(){
            (((function(){
                var tmp = v642;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                throw "ARGS must be a non-empty list";
            })());
            return (function(v644,v645,v646){
                (function(){
                    return (function(v647,v648){
                        (function(){
                            while(v647 !== l3.value){
                                (v648 = (function(){
                                    var tmp = v647;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })());
                                (function(){
                                    (function(v649){
                                        (v645 = ({car: v649, cdr: v645}));
                                        return (v646 = l132.fvalue(pv, v646, l132.fvalue(pv, "var ", v649, " = ", l143.fvalue(pv, v648), ";", (function(){
                                            var symbol = l131;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })(), "if (typeof ", v649, " !== 'number') throw 'Not a number!';", (function(){
                                            var symbol = l131;
                                            var value = symbol.value;
                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                            return value;
                                        })())));
                                    })(l132.fvalue(pv, "x", l17.fvalue(pv, (v644 = (function(){
                                        var x1 = v644;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })()))));
                                    return l3.value;
                                })();
                                (v647 = (function(){
                                    var tmp = v647;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                        return l3.value;
                    })(v642,l3.value);
                })();
                return l132.fvalue(values, "(function(){", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l141.fvalue(pv, v646, (v643)(pv, l66.fvalue(pv, v645))), "})()");
            })(0,l3,"");
        })();
    }));
    return l269;
})();
var l270 = {name: "VARIABLE-ARITY"};
l270;
var l271 = {name: "NUM-OP-NUM"};
(function(){
    (l271).fvalue = (function(v654){
        ((v654)["fname"] = "NUM-OP-NUM");
        return v654;
    })((function (values,v651,v652,v653){
        checkArgs(arguments, 4);
        return (function(){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v651, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "var ", "y", " = ", v653, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "if (typeof ", "y", " != '", "number", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", l132.fvalue(pv, "x", v652, "y"), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })();
    }));
    return l271;
})();
((l265).value = ({car: l44.fvalue(pv, l61, (function (values){
    var v655= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v655 = {car: arguments[i], cdr: 
    v655};
    return (function(){
        return (l12.fvalue(pv, v655) !== l3.value ? "0" : l269.fvalue(values, v655, (function (values,v656){
            checkArgs(arguments, 2);
            return l132.fvalue(values, "return ", l134.fvalue(pv, v656, "+"), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })());
        })));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l62, (function (values,v658){
    checkArgsAtLeast(arguments, 2);
    var v657= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v657 = {car: arguments[i], cdr: 
    v657};
    return (function(){
        return (function(v659){
            return l269.fvalue(values, v659, (function (values,v660){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", (l12.fvalue(pv, v657) !== l3.value ? l132.fvalue(pv, "-", (function(){
                    var tmp = v660;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) : l134.fvalue(pv, v660, "-")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v658, cdr: v657}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l20, (function (values){
    var v661= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v661 = {car: arguments[i], cdr: 
    v661};
    return (function(){
        return (l12.fvalue(pv, v661) !== l3.value ? "1" : l269.fvalue(values, v661, (function (values,v662){
            checkArgs(arguments, 2);
            return l132.fvalue(values, "return ", l134.fvalue(pv, v662, "*"), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })());
        })));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l21, (function (values,v664){
    checkArgsAtLeast(arguments, 2);
    var v663= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v663 = {car: arguments[i], cdr: 
    v663};
    return (function(){
        return (function(v665){
            return l269.fvalue(values, v665, (function (values,v666){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", (l12.fvalue(pv, v663) !== l3.value ? l132.fvalue(pv, "1 /", (function(){
                    var tmp = v666;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) : l134.fvalue(pv, v666, "/")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v664, cdr: v663}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l272 = {name: "MOD"};
((l265).value = ({car: l44.fvalue(pv, l272, (function (values,v667,v668){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v669,v670){
            return l271.fvalue(values, v669, "%", v670);
        })(l143.fvalue(pv, v667),l143.fvalue(pv, v668));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l273 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l273).fvalue = (function(v673){
        ((v673)["fname"] = "COMPARISON-CONJUNTION");
        return v673;
    })((function (values,v671,v672){
        checkArgs(arguments, 3);
        return (function(){
            return (l12.fvalue(pv, (function(){
                var tmp = v671;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) !== l3.value ? "true" : (l12.fvalue(pv, l35.fvalue(pv, v671)) !== l3.value ? l132.fvalue(values, (function(){
                var tmp = v671;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v672, l33.fvalue(pv, v671)) : l132.fvalue(values, (function(){
                var tmp = v671;
                return tmp === l3.value? l3.value: tmp.car;
            })(), v672, l33.fvalue(pv, v671), " && ", l273.fvalue(pv, (function(){
                var tmp = v671;
                return tmp === l3.value? l3.value: tmp.cdr;
            })(), v672))));
        })();
    }));
    return l273;
})();
var l274 = {name: "DEFINE-BUILTIN-COMPARISON"};
l274;
var l275 = {name: ">"};
((l265).value = ({car: l44.fvalue(pv, l275, (function (values,v675){
    checkArgsAtLeast(arguments, 2);
    var v674= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v674 = {car: arguments[i], cdr: 
    v674};
    return (function(){
        return (function(v676){
            return l269.fvalue(values, v676, (function (values,v677){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", l142.fvalue(pv, l273.fvalue(pv, v677, ">")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v675, cdr: v674}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l276 = {name: "<"};
((l265).value = ({car: l44.fvalue(pv, l276, (function (values,v679){
    checkArgsAtLeast(arguments, 2);
    var v678= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v678 = {car: arguments[i], cdr: 
    v678};
    return (function(){
        return (function(v680){
            return l269.fvalue(values, v680, (function (values,v681){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", l142.fvalue(pv, l273.fvalue(pv, v681, "<")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v679, cdr: v678}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l277 = {name: ">="};
((l265).value = ({car: l44.fvalue(pv, l277, (function (values,v683){
    checkArgsAtLeast(arguments, 2);
    var v682= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v682 = {car: arguments[i], cdr: 
    v682};
    return (function(){
        return (function(v684){
            return l269.fvalue(values, v684, (function (values,v685){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", l142.fvalue(pv, l273.fvalue(pv, v685, ">=")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v683, cdr: v682}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l278 = {name: "<="};
((l265).value = ({car: l44.fvalue(pv, l278, (function (values,v687){
    checkArgsAtLeast(arguments, 2);
    var v686= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v686 = {car: arguments[i], cdr: 
    v686};
    return (function(){
        return (function(v688){
            return l269.fvalue(values, v688, (function (values,v689){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", l142.fvalue(pv, l273.fvalue(pv, v689, "<=")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v687, cdr: v686}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l19, (function (values,v691){
    checkArgsAtLeast(arguments, 2);
    var v690= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v690 = {car: arguments[i], cdr: 
    v690};
    return (function(){
        return (function(v692){
            return l269.fvalue(values, v692, (function (values,v693){
                checkArgs(arguments, 2);
                return l132.fvalue(values, "return ", l142.fvalue(pv, l273.fvalue(pv, v693, "==")), ";", (function(){
                    var symbol = l131;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }));
        })(({car: v691, cdr: v690}));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l279 = {name: "NUMBERP"};
((l265).value = ({car: l44.fvalue(pv, l279, (function (values,v694){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v695){
            return l142.fvalue(values, l132.fvalue(pv, "(typeof (", v695, ") == \"number\")"));
        })(l143.fvalue(pv, v694));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l280 = {name: "FLOOR"};
((l265).value = ({car: l44.fvalue(pv, l280, (function (values,v696){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v697){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v697, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "Math.floor(x)", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v696));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l28, (function (values,v698,v699){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v700,v701){
            return l132.fvalue(values, "({car: ", v700, ", cdr: ", v701, "})");
        })(l143.fvalue(pv, v698),l143.fvalue(pv, v699));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l29, (function (values,v702){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v703){
            return l142.fvalue(values, l132.fvalue(pv, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var tmp = ", v703, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()"));
        })(l143.fvalue(pv, v702));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l30, (function (values,v704){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v705){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var tmp = ", v705, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return tmp === ", l143.fvalue(pv, l3.value), "? ", l143.fvalue(pv, l3.value), ": tmp.car;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v704));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l31, (function (values,v706){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v707){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var tmp = ", v707, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return tmp === ", l143.fvalue(pv, l3.value), "? ", l143.fvalue(pv, l3.value), ": tmp.cdr;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v706));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l281 = {name: "RPLACA"};
((l265).value = ({car: l44.fvalue(pv, l281, (function (values,v708,v709){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v710,v711){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v710, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", l132.fvalue(pv, "(x.car = ", v711, ", x)"), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v708),l143.fvalue(pv, v709));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l282 = {name: "RPLACD"};
((l265).value = ({car: l44.fvalue(pv, l282, (function (values,v712,v713){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v714,v715){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v714, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", l132.fvalue(pv, "(x.cdr = ", v715, ", x)"), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v712),l143.fvalue(pv, v713));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l283 = {name: "SYMBOLP"};
((l265).value = ({car: l44.fvalue(pv, l283, (function (values,v716){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v717){
            return l142.fvalue(values, l132.fvalue(pv, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var tmp = ", v717, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()"));
        })(l143.fvalue(pv, v716));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l284 = {name: "MAKE-SYMBOL"};
((l265).value = ({car: l44.fvalue(pv, l284, (function (values,v718){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v719){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "name", " = ", v719, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "name", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "({name: name})", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v718));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l285 = {name: "SYMBOL-NAME"};
((l265).value = ({car: l44.fvalue(pv, l285, (function (values,v720){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v721){
            return l132.fvalue(values, "(", v721, ").name");
        })(l143.fvalue(pv, v720));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l222, (function (values,v722,v723){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v724,v725){
            return l132.fvalue(values, "(", v724, ").value = ", v725);
        })(l143.fvalue(pv, v722),l143.fvalue(pv, v723));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l286 = {name: "FSET"};
((l265).value = ({car: l44.fvalue(pv, l286, (function (values,v726,v727){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v728,v729){
            return l132.fvalue(values, "(", v728, ").fvalue = ", v729);
        })(l143.fvalue(pv, v726),l143.fvalue(pv, v727));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l18, (function (values,v730){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v731){
            return l142.fvalue(values, l132.fvalue(pv, "(", v731, ".value !== undefined)"));
        })(l143.fvalue(pv, v730));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l287 = {name: "SYMBOL-VALUE"};
((l265).value = ({car: l44.fvalue(pv, l287, (function (values,v732){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v733){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var symbol = ", v733, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var value = symbol.value;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return value;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v732));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l231, (function (values,v734){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v735){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var symbol = ", v735, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var func = symbol.fvalue;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return func;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v734));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l288 = {name: "SYMBOL-PLIST"};
((l265).value = ({car: l44.fvalue(pv, l288, (function (values,v736){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v737){
            return l132.fvalue(values, "((", v737, ").plist || ", l143.fvalue(pv, l3.value), ")");
        })(l143.fvalue(pv, v736));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l289 = {name: "LAMBDA-CODE"};
((l265).value = ({car: l44.fvalue(pv, l289, (function (values,v738){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v739){
            return l132.fvalue(values, "(", v739, ").toString()");
        })(l143.fvalue(pv, v738));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l290 = {name: "EQ"};
((l265).value = ({car: l44.fvalue(pv, l290, (function (values,v740,v741){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v742,v743){
            return l142.fvalue(values, l132.fvalue(pv, "(", v742, " === ", v743, ")"));
        })(l143.fvalue(pv, v740),l143.fvalue(pv, v741));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l291 = {name: "EQUAL"};
((l265).value = ({car: l44.fvalue(pv, l291, (function (values,v744,v745){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v746,v747){
            return l142.fvalue(values, l132.fvalue(pv, "(", v746, " == ", v747, ")"));
        })(l143.fvalue(pv, v744),l143.fvalue(pv, v745));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l292 = {name: "CHAR-TO-STRING"};
((l265).value = ({car: l44.fvalue(pv, l292, (function (values,v748){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v749){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v749, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "String.fromCharCode(x)", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v748));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l293 = {name: "STRINGP"};
((l265).value = ({car: l44.fvalue(pv, l293, (function (values,v750){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v751){
            return l142.fvalue(values, l132.fvalue(pv, "(typeof(", v751, ") == \"string\")"));
        })(l143.fvalue(pv, v750));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l294 = {name: "STRING-UPCASE"};
((l265).value = ({car: l44.fvalue(pv, l294, (function (values,v752){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v753){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v753, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "x.toUpperCase()", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v752));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l295 = {name: "STRING-LENGTH"};
((l265).value = ({car: l44.fvalue(pv, l295, (function (values,v754){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v755){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v755, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "x.length", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v754));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l296 = {name: "SLICE"};
((l265).value = ({car: l44.fvalue(pv, l296, (function (values,v756,v757,v758){
    checkArgsAtLeast(arguments, 3);
    checkArgsAtMost(arguments, 4);
    switch(arguments.length-1){
    case 2:
    v758=l3.value;
    default: break;
    }
    return (function(){
        return l132.fvalue(values, "(function(){", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), l141.fvalue(pv, "var str = ", l143.fvalue(pv, v756), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var a = ", l143.fvalue(pv, v757), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), "var b;", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })(), (v758 !== l3.value ? l132.fvalue(pv, "b = ", l143.fvalue(pv, v758), ";", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()) : ""), "return str.slice(a,b);", (function(){
            var symbol = l131;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l297 = {name: "CHAR"};
((l265).value = ({car: l44.fvalue(pv, l297, (function (values,v759,v760){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v761,v762){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "string", " = ", v761, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "var ", "index", " = ", v762, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "if (typeof ", "index", " != '", "number", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "string.charCodeAt(index)", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v759),l143.fvalue(pv, v760));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l72, (function (values,v763,v764){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v765,v766){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "string1", " = ", v765, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "var ", "string2", " = ", v766, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "string1", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "if (typeof ", "string2", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "string1.concat(string2)", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v763),l143.fvalue(pv, v764));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l298 = {name: "FUNCALL"};
((l265).value = ({car: l44.fvalue(pv, l298, (function (values,v768){
    checkArgsAtLeast(arguments, 2);
    var v767= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v767 = {car: arguments[i], cdr: 
    v767};
    return (function(){
        return l132.fvalue(values, "(", l143.fvalue(pv, v768), ")(", l134.fvalue(pv, ({car: ((function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? "values" : "pv"), cdr: l73.fvalue(pv, (function(){
            var symbol = l143;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v767)}), ", "), ")");
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l299 = {name: "APPLY"};
((l265).value = ({car: l44.fvalue(pv, l299, (function (values,v770){
    checkArgsAtLeast(arguments, 2);
    var v769= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v769 = {car: arguments[i], cdr: 
    v769};
    return (function(){
        return (l12.fvalue(pv, v769) !== l3.value ? l132.fvalue(values, "(", l143.fvalue(pv, v770), ")()") : (function(v771,v772){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var f = ", l143.fvalue(pv, v770), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var args = [", l134.fvalue(pv, ({car: ((function(){
                var symbol = l170;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? "values" : "pv"), cdr: l73.fvalue(pv, (function(){
                var symbol = l143;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v771)}), ", "), "];", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var tail = (", l143.fvalue(pv, v772), ");", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "while (tail != ", l143.fvalue(pv, l3.value), "){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "    args.push(tail.car);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "    tail = tail.cdr;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "}", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return f.apply(this, args);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l85.fvalue(pv, v769),(function(){
            var tmp = l84.fvalue(pv, v769);
            return tmp === l3.value? l3.value: tmp.car;
        })()));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l300 = {name: "JS-EVAL"};
((l265).value = ({car: l44.fvalue(pv, l300, (function (values,v773){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v774){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "string", " = ", v774, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", ((function(){
                var symbol = l170;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l132.fvalue(pv, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var v = eval.apply(window, [string]);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (typeof v !== 'object' || !('multiple-value' in v)){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "v = [v];", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "v['multiple-value'] = true;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "}", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return values.apply(this, v);", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()") : "eval.apply(window, [string])"), ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v773));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l301 = {name: "ERROR"};
((l265).value = ({car: l44.fvalue(pv, l301, (function (values,v775){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v776){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw ", v776, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v775));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l302 = {name: "NEW"};
((l265).value = ({car: l44.fvalue(pv, l302, (function (values){
    checkArgsAtMost(arguments, 1);
    return (function(){
        return (function(){
            return "{}";
        })();
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l303 = {name: "OBJECTP"};
((l265).value = ({car: l44.fvalue(pv, l303, (function (values,v777){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v778){
            return l142.fvalue(values, l132.fvalue(pv, "(typeof (", v778, ") === 'object')"));
        })(l143.fvalue(pv, v777));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l304 = {name: "OGET"};
((l265).value = ({car: l44.fvalue(pv, l304, (function (values,v779,v780){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v781,v782){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var tmp = ", "(", v781, ")[", v782, "];", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return tmp == undefined? ", l143.fvalue(pv, l3.value), ": tmp ;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v779),l143.fvalue(pv, v780));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l305 = {name: "OSET"};
((l265).value = ({car: l44.fvalue(pv, l305, (function (values,v783,v784,v785){
    checkArgs(arguments, 4);
    return (function(){
        return (function(v786,v787,v788){
            return l132.fvalue(values, "((", v786, ")[", v787, "] = ", v788, ")");
        })(l143.fvalue(pv, v783),l143.fvalue(pv, v784),l143.fvalue(pv, v785));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l306 = {name: "IN"};
((l265).value = ({car: l44.fvalue(pv, l306, (function (values,v789,v790){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v791,v792){
            return l142.fvalue(values, l132.fvalue(pv, "((", v791, ") in (", v792, "))"));
        })(l143.fvalue(pv, v789),l143.fvalue(pv, v790));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l307 = {name: "FUNCTIONP"};
((l265).value = ({car: l44.fvalue(pv, l307, (function (values,v793){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v794){
            return l142.fvalue(values, l132.fvalue(pv, "(typeof ", v794, " == 'function')"));
        })(l143.fvalue(pv, v793));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l308 = {name: "WRITE-STRING"};
((l265).value = ({car: l44.fvalue(pv, l308, (function (values,v795){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v796){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, l132.fvalue(pv, "var ", "x", " = ", v796, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), l132.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), l132.fvalue(pv, "return ", "lisp.write(x)", ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())), "})()");
        })(l143.fvalue(pv, v795));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l309 = {name: "MAKE-ARRAY"};
((l265).value = ({car: l44.fvalue(pv, l309, (function (values,v797){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v798){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var r = [];", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "for (var i = 0; i < ", v798, "; i++)", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "r.push(", l143.fvalue(pv, l3.value), ");", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "return r;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v797));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l310 = {name: "ARRAYP"};
((l265).value = ({car: l44.fvalue(pv, l310, (function (values,v799){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v800){
            return l142.fvalue(values, l132.fvalue(pv, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var x = ", v800, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
        })(l143.fvalue(pv, v799));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l311 = {name: "AREF"};
((l265).value = ({car: l44.fvalue(pv, l311, (function (values,v801,v802){
    checkArgs(arguments, 3);
    return (function(){
        return (function(v803,v804){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var x = ", "(", v803, ")[", v804, "];", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (x === undefined) throw 'Out of range';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return x;", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v801),l143.fvalue(pv, v802));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l312 = {name: "ASET"};
((l265).value = ({car: l44.fvalue(pv, l312, (function (values,v805,v806,v807){
    checkArgs(arguments, 4);
    return (function(){
        return (function(v808,v809,v810){
            return l132.fvalue(values, "(function(){", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l141.fvalue(pv, "var x = ", v808, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var i = ", v809, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return x[i] = ", v810, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
        })(l143.fvalue(pv, v805),l143.fvalue(pv, v806),l143.fvalue(pv, v807));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l313 = {name: "GET-UNIX-TIME"};
((l265).value = ({car: l44.fvalue(pv, l313, (function (values){
    checkArgsAtMost(arguments, 1);
    return (function(){
        return (function(){
            return l132.fvalue(values, "(Math.round(new Date() / 1000))");
        })();
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l314 = {name: "VALUES-ARRAY"};
((l265).value = ({car: l44.fvalue(pv, l314, (function (values,v811){
    checkArgs(arguments, 2);
    return (function(){
        return (function(v812){
            return ((function(){
                var symbol = l170;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l132.fvalue(values, "values.apply(this, ", v812, ")") : l132.fvalue(values, "pv.apply(this, ", v812, ")"));
        })(l143.fvalue(pv, v811));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l265).value = ({car: l44.fvalue(pv, l140, (function (values){
    var v813= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v813 = {car: arguments[i], cdr: 
    v813};
    return (function(){
        return ((function(){
            var symbol = l170;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })() !== l3.value ? l132.fvalue(values, "values(", l134.fvalue(pv, l73.fvalue(pv, (function(){
            var symbol = l143;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v813), ", "), ")") : l132.fvalue(values, "pv(", l134.fvalue(pv, l73.fvalue(pv, (function(){
            var symbol = l143;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
            return func;
        })(), v813), ", "), ")"));
    })();
})), cdr: (function(){
    var symbol = l265;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l196).fvalue = (function(v816){
        ((v816)["fname"] = "MACRO");
        return v816;
    })((function (values,v814){
        checkArgs(arguments, 2);
        return (function(){
            return (((function(){
                var tmp = v814;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (function(v815){
                return (((l173.fvalue(pv, v815) === l196)?l4.value: l3.value) !== l3.value ? v815 : l3.value);
            })(l185.fvalue(pv, v814, (function(){
                var symbol = l186;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l102)) : l3.value);
        })();
    }));
    return l196;
})();
var l315 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l315).fvalue = (function(v821){
        ((v821)["fname"] = "LS-MACROEXPAND-1");
        return v821;
    })((function (values,v817){
        checkArgs(arguments, 2);
        return (function(){
            return (function(v818){
                return (v818 !== l3.value ? (function(v819){
                    (l59.fvalue(pv, v819) !== l3.value ? (function(v820){
                        l176.fvalue(pv, v818, v820);
                        return (v819 = v820);
                    })(l240.fvalue(pv, v819)) : l3.value);
                    return (function(){
                        var f = v819;
                        var args = [values];
                        var tail = ((function(){
                            var tmp = v817;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                        while (tail != l3.value){
                            args.push(tail.car);
                            tail = tail.cdr;
                        }
                        return f.apply(this, args);
                    })();
                })(l174.fvalue(pv, v818)) : v817);
            })(l196.fvalue(pv, (function(){
                var tmp = v817;
                return tmp === l3.value? l3.value: tmp.car;
            })()));
        })();
    }));
    return l315;
})();
var l316 = {name: "COMPILE-FUNCALL"};
var l317 = {name: "G796"};
(function(){
    (l316).fvalue = (function(v826){
        ((v826)["fname"] = "COMPILE-FUNCALL");
        return v826;
    })((function (values,v822,v823){
        checkArgs(arguments, 3);
        return (function(){
            return (function(){
                var v824 = ((function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? "values" : "pv");
                var v825 = l132.fvalue(pv, "(", l134.fvalue(pv, ({car: v824, cdr: l73.fvalue(pv, (function(){
                    var symbol = l143;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v823)}), ", "), ")");
                return (l234.fvalue(pv, v822) !== l3.value ? l132.fvalue(values, l234.fvalue(pv, v822), v825) : ((((function(){
                    var tmp = v822;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (((l120.fvalue(pv, v822) === l111.fvalue(pv, "COMMON-LISP"))?l4.value: l3.value) !== l3.value ? (function(){
                    var symbol = l317;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() : l3.value) : l3.value) !== l3.value ? l132.fvalue(values, l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, v822))), ".fvalue", v825) : l132.fvalue(values, l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l102), l44.fvalue(pv, v822))), v825)));
            })();
        })();
    }));
    return l316;
})();
(function(){
    (l220).fvalue = (function(v829){
        ((v829)["fname"] = "LS-COMPILE-BLOCK");
        return v829;
    })((function (values,v827,v828){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v828=l3.value;
        default: break;
        }
        return (function(){
            return (v828 !== l3.value ? l132.fvalue(values, l220.fvalue(pv, l85.fvalue(pv, v827)), "return ", l143.fvalue(pv, (function(){
                var tmp = l84.fvalue(pv, v827);
                return tmp === l3.value? l3.value: tmp.car;
            })(), (function(){
                var symbol = l170;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), ";") : l135.fvalue(values, l88.fvalue(pv, (function(){
                var symbol = l193;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), l73.fvalue(pv, (function(){
                var symbol = l143;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v827)), l132.fvalue(pv, ";", (function(){
                var symbol = l131;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })())));
        })();
    }));
    return l220;
})();
(function(){
    (l143).fvalue = (function(v839){
        ((v839)["fname"] = "LS-COMPILE");
        return v839;
    })((function (values,v830,v831){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v831=l3.value;
        default: break;
        }
        return (function(){
            return (function(v832){
                try {
                    var tmp;
                    tmp = l170.value;
                    l170.value = v832;
                    v832 = tmp;
                    return (((function(){
                        var tmp = v830;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v833){
                        return ((v833 !== l3.value ? l27.fvalue(pv, l86.fvalue(pv, l200, l175.fvalue(pv, v833))) : l3.value) !== l3.value ? l174.fvalue(values, v833) : ((function(v834){
                            return (v834 !== l3.value ? v834 : l86.fvalue(pv, l202, l175.fvalue(pv, v833)));
                        })(l119.fvalue(pv, v830)) !== l3.value ? l132.fvalue(values, l143.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, v830))), ".value") : l143.fvalue(values, l64.fvalue(pv, l44.fvalue(pv, l287), l44.fvalue(pv, l64.fvalue(pv, l44.fvalue(pv, l165), l44.fvalue(pv, v830)))))));
                    })(l185.fvalue(pv, v830, (function(){
                        var symbol = l186;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l103)) : (l79.fvalue(pv, v830) !== l3.value ? l17.fvalue(values, v830) : (((typeof(v830) == "string")?l4.value: l3.value) !== l3.value ? l132.fvalue(values, "\"", l146.fvalue(pv, v830), "\"") : (((function(){
                        var x = v830;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? l229.fvalue(values, v830) : (l59.fvalue(pv, v830) !== l3.value ? (function(v835,v836){
                        return (l95.fvalue(pv, v835, (function(){
                            var symbol = l204;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== l3.value ? (function(v837){
                            return (function(){
                                var f = v837;
                                var args = [values];
                                var tail = (v836);
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l40.fvalue(pv, l95.fvalue(pv, v835, (function(){
                            var symbol = l204;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()))) : ((l95.fvalue(pv, v835, (function(){
                            var symbol = l265;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) !== l3.value ? l27.fvalue(pv, l198.fvalue(pv, v835, l102, l201)) : l3.value) !== l3.value ? (function(v838){
                            return (function(){
                                var f = v838;
                                var args = [values];
                                var tail = (v836);
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l40.fvalue(pv, l95.fvalue(pv, v835, (function(){
                            var symbol = l265;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()))) : (l196.fvalue(pv, v835) !== l3.value ? l143.fvalue(values, l315.fvalue(pv, v830), v831) : l316.fvalue(values, v835, v836))));
                    })((function(){
                        var tmp = v830;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(),(function(){
                        var tmp = v830;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) : (function(){
                        throw "How should I compile this?";
                    })())))));
                }
                finally {
                    l170.value = v832;
                }
            })(v831);
        })();
    }));
    return l143;
})();
var l318 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l318).fvalue = (function(v846){
        ((v846)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v846;
    })((function (values,v840,v841){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v841=l3.value;
        default: break;
        }
        return (function(){
            return (function(v842){
                try {
                    var tmp;
                    tmp = l191.value;
                    l191.value = v842;
                    v842 = tmp;
                    return ((((function(){
                        var tmp = v840;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (((function(){
                        var tmp = v840;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l239)?l4.value: l3.value) : l3.value) !== l3.value ? (function(v844){
                        return l134.fvalue(values, l88.fvalue(pv, (function(){
                            var symbol = l193;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v844));
                    })(l73.fvalue(pv, (function (values,v843){
                        checkArgs(arguments, 2);
                        return l318.fvalue(values, v843, l4.value);
                    }), (function(){
                        var tmp = v840;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : (function(v845){
                        return l132.fvalue(values, l135.fvalue(pv, l194.fvalue(pv), l132.fvalue(pv, ";", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), (v845 !== l3.value ? l132.fvalue(pv, v845, ";", (function(){
                            var symbol = l131;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""));
                    })(l143.fvalue(pv, v840, v841)));
                }
                finally {
                    l191.value = v842;
                }
            })(l3.value);
        })();
    }));
    return l318;
})();
(function(){
    (l240).fvalue = (function(v848){
        ((v848)["fname"] = "EVAL");
        return v848;
    })((function (values,v847){
        checkArgs(arguments, 2);
        return (function(){
            return (function(){
                var string = l318.fvalue(pv, v847, l4.value);
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                return (function(){
                    var v = eval.apply(window, [string]);
                    if (typeof v !== 'object' || !('multiple-value' in v)){
                        v = [v];
                        v['multiple-value'] = true;
                    }
                    return values.apply(this, v);
                })();
            })();
        })();
    }));
    return l240;
})();
var l319 = {name: "&BODY"};
var l320 = QIList(l209,l208,l319,l20,l15,l121,l61,l62,l21,l22,l23,l276,l278,l19,l19,l275,l277,l54,l64,l299,l311,l310,l312,l95,l45,l182,l18,l18,l85,l32,l38,l36,l33,l30,l30,l52,l252,l34,l37,l35,l31,l31,l297,l77,l78,l76,l51,l28,l29,l75,l47,l2,l9,l11,l1,l8,l91,l90,l99,l68,l69,l101,l49,l50,l53,l290,l26,l291,l301,l240,l94,l129,l98,l111,l124,l39,l235,l42,l286,l298,l102,l307,l16,l130,l259,l74,l206,l122,l46,l79,l79,l128,l119,l236,l5,l84,l71,l244,l247,l107,l44,l59,l309,l108,l284,l73,l86,l81,l272,l104,l261,l105,l262,l3,l27,l83,l82,l12,l279,l55,l112,l114,l110,l163,l80,l145,l148,l203,l56,l57,l239,l67,l48,l165,l87,l88,l89,l13,l251,l65,l66,l281,l282,l40,l222,l223,l93,l294,l96,l97,l293,l92,l231,l285,l120,l288,l287,l283,l4,l258,l41,l253,l25,l7,l260,l140,l139,l103,l147,l6,l100,l308,l24,l3);
l129.fvalue(values, l320);
((l121).value = (function(){
    var symbol = l117;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})());
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return (function(){
        var v = eval.apply(window, [string]);
        if (typeof v !== 'object' || !('multiple-value' in v)){
            v = [v];
            v['multiple-value'] = true;
        }
        return values.apply(this, v);
    })();
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l169;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l145;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l240;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function (values,v849){
    checkArgs(arguments, 2);
    return l318.fvalue(values, v849, l4.value);
}));
(lisp.evalString = (function (values,v850){
    checkArgs(arguments, 2);
    return l240.fvalue(values, l169.fvalue(pv, v850));
}));
(lisp.compileString = (function (values,v851){
    checkArgs(arguments, 2);
    return l318.fvalue(values, l169.fvalue(pv, v851), l4.value);
}));
var l321 = QIList(QIList(l319,"l319"),QIList(l318,"l318"),QIList(l317,"l317"),QIList(l316,"l316"),QIList(l315,"l315"),QIList(l314,"l314"),QIList(l313,"l313"),QIList(l312,"l312"),QIList(l311,"l311"),QIList(l310,"l310"),QIList(l309,"l309"),QIList(l308,"l308"),QIList(l307,"l307"),QIList(l306,"l306"),QIList(l305,"l305"),QIList(l304,"l304"),QIList(l303,"l303"),QIList(l302,"l302"),QIList(l301,"l301"),QIList(l300,"l300"),QIList(l299,"l299"),QIList(l298,"l298"),QIList(l297,"l297"),QIList(l296,"l296"),QIList(l295,"l295"),QIList(l294,"l294"),QIList(l293,"l293"),QIList(l292,"l292"),QIList(l291,"l291"),QIList(l290,"l290"),QIList(l289,"l289"),QIList(l288,"l288"),QIList(l287,"l287"),QIList(l286,"l286"),QIList(l285,"l285"),QIList(l284,"l284"),QIList(l283,"l283"),QIList(l282,"l282"),QIList(l281,"l281"),QIList(l280,"l280"),QIList(l279,"l279"),QIList(l278,"l278"),QIList(l277,"l277"),QIList(l276,"l276"),QIList(l275,"l275"),QIList(l274,"l274"),QIList(l273,"l273"),QIList(l272,"l272"),QIList(l271,"l271"),QIList(l270,"l270"),QIList(l269,"l269"),QIList(l268,"l268"),QIList(l267,"l267"),QIList(l266,"l266"),QIList(l265,"l265"),QIList(l264,"l264"),QIList(l263,"l263"),QIList(l262,"l262"),QIList(l261,"l261"),QIList(l260,"l260"),QIList(l259,"l259"),QIList(l258,"l258"),QIList(l257,"l257"),QIList(l256,"l256"),QIList(l255,"l255"),QIList(l254,"l254"),QIList(l253,"l253"),QIList(l252,"l252"),QIList(l251,"l251"),QIList(l250,"l250"),QIList(l249,"l249"),QIList(l248,"l248"),QIList(l247,"l247"),QIList(l246,"l246"),QIList(l245,"l245"),QIList(l244,"l244"),QIList(l243,"l243"),QIList(l242,"l242"),QIList(l241,"l241"),QIList(l240,"l240"),QIList(l239,"l239"),QIList(l238,"l238"),QIList(l237,"l237"),QIList(l236,"l236"),QIList(l235,"l235"),QIList(l234,"l234"),QIList(l233,"l233"),QIList(l232,"l232"),QIList(l231,"l231"),QIList(l230,"l230"),QIList(l229,"l229"),QIList(l228,"l228"),QIList(l227,"l227"),QIList(l226,"l226"),QIList(l225,"l225"),QIList(l224,"l224"),QIList(l223,"l223"),QIList(l222,"l222"),QIList(l221,"l221"),QIList(l220,"l220"),QIList(l219,"l219"),QIList(l218,"l218"),QIList(l217,"l217"),QIList(l216,"l216"),QIList(l215,"l215"),QIList(l214,"l214"),QIList(l213,"l213"),QIList(l212,"l212"),QIList(l211,"l211"),QIList(l209,"l209"),QIList(l208,"l208"),QIList(l207,"l207"),QIList(l206,"l206"),QIList(l205,"l205"),QIList(l204,"l204"),QIList(l203,"l203"),QIList(l202,"l202"),QIList(l201,"l201"),QIList(l200,"l200"),QIList(l199,"l199"),QIList(l198,"l198"),QIList(l197,"l197"),QIList(l196,"l196"),QIList(l195,"l195"),QIList(l194,"l194"),QIList(l193,"l193"),QIList(l192,"l192"),QIList(l191,"l191"),QIList(l190,"l190"),QIList(l189,"l189"),QIList(l188,"l188"),QIList(l187,"l187"),QIList(l186,"l186"),QIList(l185,"l185"),QIList(l184,"l184"),QIList(l183,"l183"),QIList(l182,"l182"),QIList(l181,"l181"),QIList(l180,"l180"),QIList(l179,"l179"),QIList(l178,"l178"),QIList(l177,"l177"),QIList(l176,"l176"),QIList(l175,"l175"),QIList(l174,"l174"),QIList(l173,"l173"),QIList(l172,"l172"),QIList(l171,"l171"),QIList(l170,"l170"),QIList(l169,"l169"),QIList(l168,"l168"),QIList(l167,"l167"),QIList(l166,"l166"),QIList(l165,"l165"),QIList(l164,"l164"),QIList(l163,"l163"),QIList(l162,"l162"),QIList(l161,"l161"),QIList(l160,"l160"),QIList(l159,"l159"),QIList(l158,"l158"),QIList(l157,"l157"),QIList(l156,"l156"),QIList(l155,"l155"),QIList(l154,"l154"),QIList(l153,"l153"),QIList(l152,"l152"),QIList(l151,"l151"),QIList(l150,"l150"),QIList(l149,"l149"),QIList(l148,"l148"),QIList(l147,"l147"),QIList(l146,"l146"),QIList(l145,"l145"),QIList(l144,"l144"),QIList(l143,"l143"),QIList(l142,"l142"),QIList(l141,"l141"),QIList(l140,"l140"),QIList(l139,"l139"),QIList(l138,"l138"),QIList(l137,"l137"),QIList(l136,"l136"),QIList(l135,"l135"),QIList(l134,"l134"),QIList(l133,"l133"),QIList(l132,"l132"),QIList(l131,"l131"),QIList(l130,"l130"),QIList(l129,"l129"),QIList(l128,"l128"),QIList(l127,"l127"),QIList(l126,"l126"),QIList(l125,"l125"),QIList(l124,"l124"),QIList(l123,"l123"),QIList(l122,"l122"),QIList(l121,"l121"),QIList(l120,"l120"),QIList(l119,"l119"),QIList(l118,"l118"),QIList(l117,"l117"),QIList(l116,"l116"),QIList(l115,"l115"),QIList(l114,"l114"),QIList(l113,"l113"),QIList(l112,"l112"),QIList(l111,"l111"),QIList(l110,"l110"),QIList(l109,"l109"),QIList(l108,"l108"),QIList(l107,"l107"),QIList(l106,"l106"),QIList(l105,"l105"),QIList(l104,"l104"),QIList(l103,"l103"),QIList(l102,"l102"),QIList(l101,"l101"),QIList(l100,"l100"),QIList(l99,"l99"),QIList(l98,"l98"),QIList(l97,"l97"),QIList(l96,"l96"),QIList(l95,"l95"),QIList(l94,"l94"),QIList(l93,"l93"),QIList(l92,"l92"),QIList(l91,"l91"),QIList(l90,"l90"),QIList(l89,"l89"),QIList(l88,"l88"),QIList(l87,"l87"),QIList(l86,"l86"),QIList(l85,"l85"),QIList(l84,"l84"),QIList(l83,"l83"),QIList(l82,"l82"),QIList(l81,"l81"),QIList(l80,"l80"),QIList(l79,"l79"),QIList(l78,"l78"),QIList(l77,"l77"),QIList(l76,"l76"),QIList(l75,"l75"),QIList(l74,"l74"),QIList(l73,"l73"),QIList(l72,"l72"),QIList(l71,"l71"),QIList(l70,"l70"),QIList(l69,"l69"),QIList(l68,"l68"),QIList(l67,"l67"),QIList(l66,"l66"),QIList(l65,"l65"),QIList(l64,"l64"),QIList(l63,"l63"),QIList(l62,"l62"),QIList(l61,"l61"),QIList(l60,"l60"),QIList(l59,"l59"),QIList(l58,"l58"),QIList(l57,"l57"),QIList(l56,"l56"),QIList(l55,"l55"),QIList(l54,"l54"),QIList(l53,"l53"),QIList(l52,"l52"),QIList(l51,"l51"),QIList(l50,"l50"),QIList(l49,"l49"),QIList(l48,"l48"),QIList(l47,"l47"),QIList(l46,"l46"),QIList(l45,"l45"),QIList(l44,"l44"),QIList(l43,"l43"),QIList(l42,"l42"),QIList(l41,"l41"),QIList(l40,"l40"),QIList(l39,"l39"),QIList(l38,"l38"),QIList(l37,"l37"),QIList(l36,"l36"),QIList(l35,"l35"),QIList(l34,"l34"),QIList(l33,"l33"),QIList(l32,"l32"),QIList(l31,"l31"),QIList(l30,"l30"),QIList(l29,"l29"),QIList(l28,"l28"),QIList(l27,"l27"),QIList(l26,"l26"),QIList(l25,"l25"),QIList(l24,"l24"),QIList(l23,"l23"),QIList(l22,"l22"),QIList(l21,"l21"),QIList(l20,"l20"),QIList(l19,"l19"),QIList(l18,"l18"),QIList(l17,"l17"),QIList(l16,"l16"),QIList(l15,"l15"),QIList(l14,"l14"),QIList(l13,"l13"),QIList(l12,"l12"),QIList(l11,"l11"),QIList(l10,"l10"),QIList(l9,"l9"),QIList(l8,"l8"),QIList(l7,"l7"),QIList(l6,"l6"),QIList(l5,"l5"),QIList(l4,"l4"),QIList(l3,"l3"),QIList(l2,"l2"),QIList(l1,"l1"),l3);
var l322 = {name: "OP"};
var l323 = {name: "SYM"};
var l324 = {name: "X"};
var l325 = {name: "ARGS"};
var l326 = {name: "BODY"};
var l327 = {name: "DECLS"};
var l328 = {name: "DECL"};
var l329 = {name: "NAME"};
var l330 = {name: "ARG"};
var l331 = {name: "FORM"};
var l332 = {name: "PACKAGE-DESIGNATOR"};
var l333 = {name: "VALUE-FROM"};
var l334 = {name: "VARIABLES"};
var l335 = {name: "VARLIST"};
var l336 = {name: "ENDLIST"};
var l337 = {name: "V"};
var l338 = {name: "PAIRS"};
var l339 = {name: "ASSIGNMENTS"};
var l340 = {name: "VALUE"};
var l341 = {name: "FORM1"};
var l342 = {name: "RESULT"};
var l343 = {name: "FORMS"};
var l344 = {name: "G"};
var l345 = {name: "CLAUSULES"};
var l346 = {name: "!FORM"};
var l347 = {name: "CLAUSULE"};
var l348 = {name: "ITER"};
var l349 = {name: "G!TO"};
var l350 = {name: "VAR"};
var l351 = {name: "TO"};
var l352 = {name: "G!LIST"};
var l353 = {name: "PLACE"};
var l354 = {name: "DELTA"};
var l355 = {name: "CONDITION"};
var l356 = {name: "DOCSTRING"};
var l357 = QIList(QIList(QIList(l265,l103,l3,QIList(l200,l3),l3),QIList(l255,l103,l3,QIList(l200,l3),l3),QIList(l254,l103,l3,QIList(l200,l3),l3),QIList(l248,l103,l3,QIList(l200,l3),l3),QIList(l237,l103,l3,QIList(l200,l3),l3),QIList(l227,l103,l3,QIList(l200,l3),l3),QIList(l226,l103,l3,QIList(l200,l3),l3),QIList(l207,l103,l3,QIList(l200,l3),l3),QIList(l204,l103,l3,QIList(l200,l3),l3),QIList(l191,l103,l3,QIList(l200,l3),l3),QIList(l187,l103,l3,QIList(l200,l3),l3),QIList(l186,l103,l3,QIList(l200,l3),l3),QIList(l170,l103,l3,QIList(l200,l3),l3),QIList(l164,l103,l3,QIList(l200,l3),l3),QIList(l131,l103,l3,QIList(l200,l3),l3),QIList(l121,l103,l3,QIList(l200,l3),l3),QIList(l118,l103,l3,QIList(l200,l3),l3),QIList(l117,l103,l3,QIList(l200,l3),l3),QIList(l116,l103,l3,QIList(l200,l3),l3),QIList(l106,l103,l3,QIList(l200,l3),l3),QIList(l15,l103,l3,QIList(l200,l3),l3),QIList(l4,l103,l3,QIList(l200,l202,l3),l3),QIList(l3,l103,l3,QIList(l200,l202,l3),l3),l3),QIList(QIList(l274,l196,QIList(l102,QIList(l5,QIList(l322,l323,l3),QIList(l166,QIList(l266,QIList(l168,l322,l3),QIList(l324,l209,l325,l3),QIList(l244,QIList(QIList(l325,QIList(l28,l324,l325,l3),l3),l3),QIList(l270,l325,QIList(l142,QIList(l273,l325,QIList(l168,l323,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l270,l196,QIList(l102,QIList(l5,QIList(l325,l209,l326,l3),QIList(l7,QIList(l283,l325,l3),QIList(l301,"Bad usage of VARIABLE-ARITY, you must pass a symbol",l3),l3),QIList(l166,QIList(l269,QIList(l168,l325,l3),QIList(l5,QIList(QIList(l168,l325,l3),l3),QIList(l132,"return ",QIList(l167,l326,l3),";",l131,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l268,l196,QIList(l102,QIList(l5,QIList(l327,l209,l326,l3),QIList(l166,QIList(l144,QIList(l167,QIList(l73,QIList(l5,QIList(l328,l3),QIList(l166,QIList(l132,"var ",QIList(l168,QIList(l39,l328,l3),l3)," = ",QIList(l168,QIList(l41,l328,l3),l3),";",l131,l3),l3),l3),l327,l3),l3),QIList(l167,QIList(l73,QIList(l5,QIList(l328,l3),QIList(l166,QIList(l132,"if (typeof ",QIList(l168,QIList(l39,l328,l3),l3)," != '",QIList(l168,QIList(l40,l328,l3),l3),"')",l131,QIList(l141,"throw 'The value ' + ",QIList(l168,QIList(l39,l328,l3),l3)," + ' is not a type ",QIList(l168,QIList(l40,l328,l3),l3),".';",l131,l3),l3),l3),l3),l327,l3),l3),QIList(l132,"return ",QIList(l239,QIList(l167,l326,l3),l3),";",l131,l3),l3),l3),l3),l3),l3,l3),QIList(l267,l196,QIList(l102,QIList(l5,QIList(l329,l325,l209,l326,l3),QIList(l166,QIList(l239,QIList(l266,QIList(l168,l329,l3),QIList(l168,l325,l3),QIList(l244,QIList(l168,QIList(l73,QIList(l5,QIList(l330,l3),QIList(l166,QIList(QIList(l168,l330,l3),QIList(l143,QIList(l168,l330,l3),l3),l3),l3),l3),l325,l3),l3),QIList(l167,l326,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l266,l196,QIList(l102,QIList(l5,QIList(l329,l325,l209,l326,l3),QIList(l166,QIList(l48,QIList(l44,QIList(l165,QIList(l168,l329,l3),l3),QIList(l5,QIList(l168,l325,l3),QIList(l182,QIList(l168,l329,l3),QIList(l167,l326,l3),l3),l3),l3),l265,l3),l3),l3),l3),l3,l3),QIList(l166,l196,QIList(l102,QIList(l5,QIList(l331,l3),QIList(l263,l331,l3),l3),l3),l3,l3),QIList(l241,l196,QIList(l102,QIList(l5,QIList(l329,l325,l331,l3),QIList(l166,QIList(l205,QIList(l168,l329,l3),QIList(l168,l325,l3),QIList(l143,QIList(l168,l331,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l205,l196,QIList(l102,QIList(l5,QIList(l329,l325,l209,l326,l3),QIList(l166,QIList(l48,QIList(l44,QIList(l165,QIList(l168,l329,l3),l3),QIList(l5,QIList(l168,l325,l3),QIList(l182,QIList(l168,l329,l3),QIList(l167,l326,l3),l3),l3),l3),l204,l3),l3),l3),l3),l3,l3),QIList(l144,l196,QIList(l102,QIList(l5,QIList(l209,l326,l3),QIList(l166,QIList(l132,"(function(){",l131,QIList(l141,QIList(l167,l326,l3),l3),"})()",l3),l3),l3),l3),l3,l3),QIList(l133,l196,QIList(l102,QIList(l5,QIList(l103,l209,l331,l3),QIList(l166,QIList(l223,QIList(l168,l103,l3),QIList(l132,QIList(l168,l103,l3),QIList(l239,QIList(l167,l331,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l122,l196,QIList(l102,QIList(l5,QIList(l332,l3),QIList(l166,QIList(l238,QIList(l223,l121,QIList(l109,QIList(l168,l332,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l105,l196,QIList(l102,QIList(l5,QIList(l333,l3),QIList(l166,QIList(l261,QIList(l102,l44,l3),QIList(l168,l333,l3),l3),l3),l3),l3),l3,l3),QIList(l104,l196,QIList(l102,QIList(l5,QIList(l334,l333,l209,l326,l3),QIList(l166,QIList(l261,QIList(l5,QIList(l208,QIList(l167,l334,l3),l209,QIList(l168,QIList(l16,l3),l3),l3),QIList(l167,l326,l3),l3),QIList(l168,l333,l3),l3),l3),l3),l3),l3,l3),QIList(l69,l196,QIList(l102,QIList(l5,QIList(l335,l336,l209,l326,l3),QIList(l166,QIList(l182,l3,QIList(l247,QIList(l168,QIList(l73,QIList(l5,QIList(l324,l3),QIList(l44,QIList(l39,l324,l3),QIList(l40,l324,l3),l3),l3),l335,l3),l3),QIList(l14,l4,QIList(l6,QIList(l168,QIList(l30,l336,l3),l3),QIList(l13,QIList(l239,QIList(l168,QIList(l31,l336,l3),l3),l3),l3),l3),QIList(l258,QIList(l167,l326,l3),l3),QIList(l223,QIList(l167,QIList(l299,QIList(l102,l64,l3),QIList(l73,QIList(l5,QIList(l337,l3),QIList(l54,QIList(l29,QIList(l35,l337,l3),l3),QIList(l44,QIList(l39,l337,l3),QIList(l41,l337,l3),l3),l3),l3),l335,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l68,l196,QIList(l102,QIList(l5,QIList(l335,l336,l209,l326,l3),QIList(l166,QIList(l182,l3,QIList(l244,QIList(l168,QIList(l73,QIList(l5,QIList(l324,l3),QIList(l44,QIList(l39,l324,l3),QIList(l40,l324,l3),l3),l3),l335,l3),l3),QIList(l14,l4,QIList(l6,QIList(l168,QIList(l30,l336,l3),l3),QIList(l13,QIList(l239,QIList(l168,QIList(l31,l336,l3),l3),l3),l3),l3),QIList(l258,QIList(l167,l326,l3),l3),QIList(l67,QIList(l167,QIList(l299,QIList(l102,l64,l3),QIList(l73,QIList(l5,QIList(l337,l3),QIList(l54,QIList(l29,QIList(l35,l337,l3),l3),QIList(l44,QIList(l39,l337,l3),QIList(l41,l337,l3),l3),l3),l3),l335,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l67,l196,QIList(l102,QIList(l5,QIList(l209,l338,l3),QIList(l244,QIList(QIList(l339,QIList(l165,l3,l3),l3),l3),QIList(l14,l4,QIList(l51,QIList(QIList(l12,l338,l3),QIList(l13,l3),l3),QIList(QIList(l12,QIList(l31,l338,l3),l3),QIList(l301,"Odd paris in PSETQ",l3),l3),QIList(l4,QIList(l244,QIList(QIList(l103,QIList(l30,l338,l3),l3),QIList(l340,QIList(l33,l338,l3),l3),l3),QIList(l48,QIList(l166,QIList(QIList(l168,l103,l3),QIList(l168,QIList(l16,l3),l3),QIList(l168,l340,l3),l3),l3),l339,l3),QIList(l223,l338,QIList(l35,l338,l3),l3),l3),l3),l3),l3),QIList(l223,l339,QIList(l66,l339,l3),l3),QIList(l166,QIList(l244,QIList(l168,QIList(l73,QIList(l102,l31,l3),l339,l3),l3),QIList(l223,QIList(l167,QIList(l60,QIList(l102,l64,l3),QIList(l73,QIList(l102,l85,l3),l339,l3),QIList(l165,l3,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l57,l196,QIList(l102,QIList(l5,QIList(l341,l342,l209,l326,l3),QIList(l166,QIList(l56,QIList(l239,QIList(l168,l341,l3),QIList(l168,l342,l3),l3),QIList(l167,l326,l3),l3),l3),l3),l3),l3,l3),QIList(l56,l196,QIList(l102,QIList(l5,QIList(l331,l209,l326,l3),QIList(l244,QIList(QIList(l340,QIList(l16,l3),l3),l3),QIList(l166,QIList(l244,QIList(QIList(QIList(l168,l340,l3),QIList(l168,l331,l3),l3),l3),QIList(l167,l326,l3),QIList(l168,l340,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l55,l196,QIList(l102,QIList(l5,QIList(l209,l343,l3),QIList(l51,QIList(QIList(l12,l343,l3),l3,l3),QIList(QIList(l12,QIList(l31,l343,l3),l3),QIList(l30,l343,l3),l3),QIList(l4,QIList(l244,QIList(QIList(l344,QIList(l16,l3),l3),l3),QIList(l166,QIList(l244,QIList(QIList(QIList(l168,l344,l3),QIList(l168,QIList(l30,l343,l3),l3),l3),l3),QIList(l206,QIList(l168,l344,l3),QIList(l168,l344,l3),QIList(l55,QIList(l167,QIList(l31,l343,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l54,l196,QIList(l102,QIList(l5,QIList(l209,l343,l3),QIList(l51,QIList(QIList(l12,l343,l3),l4,l3),QIList(QIList(l12,QIList(l31,l343,l3),l3),QIList(l30,l343,l3),l3),QIList(l4,QIList(l166,QIList(l206,QIList(l168,QIList(l30,l343,l3),l3),QIList(l54,QIList(l167,QIList(l31,l343,l3),l3),l3),l3,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l53,l196,QIList(l102,QIList(l5,QIList(l331,l209,l345,l3),QIList(l166,QIList(l52,QIList(l168,l331,l3),QIList(l167,QIList(l64,l345,QIList(l166,QIList(QIList(l4,QIList(l301,"ECASE expression failed.",l3),l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l52,l196,QIList(l102,QIList(l5,QIList(l331,l209,l345,l3),QIList(l244,QIList(QIList(l346,QIList(l16,l3),l3),l3),QIList(l166,QIList(l244,QIList(QIList(QIList(l168,l346,l3),QIList(l168,l331,l3),l3),l3),QIList(l51,QIList(l167,QIList(l73,QIList(l5,QIList(l347,l3),QIList(l206,QIList(l290,QIList(l30,l347,l3),l4,l3),l347,QIList(l166,QIList(QIList(l26,QIList(l168,l346,l3),QIList(l165,QIList(l168,QIList(l30,l347,l3),l3),l3),l3),QIList(l167,QIList(l31,l347,l3),l3),l3),l3),l3),l3),l345,l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l51,l196,QIList(l102,QIList(l5,QIList(l209,l345,l3),QIList(l206,QIList(l12,l345,l3),l3,QIList(l206,QIList(l290,QIList(l32,l345,l3),l4,l3),QIList(l166,QIList(l239,QIList(l167,QIList(l34,l345,l3),l3),l3),l3),QIList(l166,QIList(l206,QIList(l168,QIList(l32,l345,l3),l3),QIList(l239,QIList(l167,QIList(l34,l345,l3),l3),l3),QIList(l51,QIList(l167,QIList(l31,l345,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l50,l196,QIList(l102,QIList(l5,QIList(l348,l209,l326,l3),QIList(l244,QIList(QIList(l349,QIList(l16,l3),l3),QIList(l350,QIList(l39,l348,l3),l3),QIList(l351,QIList(l40,l348,l3),l3),QIList(l342,QIList(l41,l348,l3),l3),l3),QIList(l166,QIList(l182,l3,QIList(l244,QIList(QIList(QIList(l168,l350,l3),0,l3),QIList(QIList(l168,l349,l3),QIList(l168,l351,l3),l3),l3),QIList(l230,QIList(l276,QIList(l168,l350,l3),QIList(l168,l349,l3),l3),QIList(l258,QIList(l167,l326,l3),l3),QIList(l46,QIList(l168,l350,l3),l3),l3),QIList(l168,l342,l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l49,l196,QIList(l102,QIList(l5,QIList(l348,l209,l326,l3),QIList(l244,QIList(QIList(l350,QIList(l39,l348,l3),l3),QIList(l352,QIList(l16,l3),l3),l3),QIList(l166,QIList(l182,l3,QIList(l244,QIList(QIList(QIList(l168,l352,l3),QIList(l168,QIList(l40,l348,l3),l3),l3),QIList(QIList(l168,l350,l3),l3,l3),l3),QIList(l230,QIList(l168,l352,l3),QIList(l223,QIList(l168,l350,l3),QIList(l30,QIList(l168,l352,l3),l3),l3),QIList(l258,QIList(l167,l326,l3),l3),QIList(l223,QIList(l168,l352,l3),QIList(l31,QIList(l168,l352,l3),l3),l3),l3),QIList(l168,QIList(l41,l348,l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),QIList(l48,l196,QIList(l102,QIList(l5,QIList(l324,l353,l3),QIList(l166,QIList(l223,QIList(l168,l353,l3),QIList(l28,QIList(l168,l324,l3),QIList(l168,l353,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l47,l196,QIList(l102,QIList(l5,QIList(l324,l208,QIList(l354,1,l3),l3),QIList(l166,QIList(l223,QIList(l168,l324,l3),QIList(l62,QIList(l168,l324,l3),QIList(l168,l354,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l46,l196,QIList(l102,QIList(l5,QIList(l324,l208,QIList(l354,1,l3),l3),QIList(l166,QIList(l223,QIList(l168,l324,l3),QIList(l61,QIList(l168,l324,l3),QIList(l168,l354,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l14,l196,QIList(l102,QIList(l5,QIList(l355,l209,l326,l3),QIList(l166,QIList(l182,l3,QIList(l230,QIList(l168,l355,l3),QIList(l167,l326,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l13,l196,QIList(l102,QIList(l5,QIList(l208,l340,l3),QIList(l166,QIList(l251,l3,QIList(l168,l340,l3),l3),l3),l3),l3),l3,l3),QIList(l11,l196,QIList(l102,QIList(l5,QIList(l329,l325,l209,l326,l3),QIList(l166,QIList(l239,QIList(l286,QIList(l165,QIList(l168,l329,l3),l3),QIList(l10,QIList(l168,QIList(l285,l329,l3),l3),QIList(l168,l325,l3),QIList(l167,QIList(l206,QIList(l54,QIList(l293,QIList(l30,l326,l3),l3),QIList(l27,QIList(l12,QIList(l31,l326,l3),l3),l3),l3),QIList(l166,QIList(QIList(l168,QIList(l30,l326,l3),l3),QIList(l182,QIList(l168,l329,l3),QIList(l167,QIList(l31,l326,l3),l3),l3),l3),l3),QIList(l166,QIList(QIList(l182,QIList(l168,l329,l3),QIList(l167,l326,l3),l3),l3),l3),l3),l3),l3),l3),QIList(l165,QIList(l168,l329,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l10,l196,QIList(l102,QIList(l5,QIList(l329,l325,l209,l326,l3),QIList(l244,QIList(QIList(l324,QIList(l16,"FN",l3),l3),l3),QIList(l166,QIList(l244,QIList(QIList(QIList(l168,l324,l3),QIList(l5,QIList(l168,l325,l3),QIList(l167,l326,l3),l3),l3),l3),QIList(l305,QIList(l168,l324,l3),"fname",QIList(l168,l329,l3),l3),QIList(l168,l324,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l9,l196,QIList(l102,QIList(l5,QIList(l329,l340,l208,l356,l3),QIList(l166,QIList(l239,QIList(l223,QIList(l168,l329,l3),QIList(l168,l340,l3),l3),QIList(l167,QIList(l6,QIList(l293,l356,l3),QIList(l166,QIList(QIList(l305,QIList(l165,QIList(l168,l329,l3),l3),"vardoc",QIList(l168,l356,l3),l3),l3),l3),l3),l3),QIList(l165,QIList(l168,l329,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l8,l196,QIList(l102,QIList(l5,QIList(l329,l340,l208,l356,l3),QIList(l166,QIList(l239,QIList(l2,QIList(l200,QIList(l168,l329,l3),l3),l3),QIList(l7,QIList(l18,QIList(l165,QIList(l168,l329,l3),l3),l3),QIList(l223,QIList(l168,l329,l3),QIList(l168,l340,l3),l3),l3),QIList(l167,QIList(l6,QIList(l293,l356,l3),QIList(l166,QIList(QIList(l305,QIList(l165,QIList(l168,l329,l3),l3),"vardoc",QIList(l168,l356,l3),l3),l3),l3),l3),l3),QIList(l165,QIList(l168,l329,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l7,l196,QIList(l102,QIList(l5,QIList(l355,l209,l326,l3),QIList(l166,QIList(l206,QIList(l168,l355,l3),l3,QIList(l239,QIList(l167,l326,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l6,l196,QIList(l102,QIList(l5,QIList(l355,l209,l326,l3),QIList(l166,QIList(l206,QIList(l168,l355,l3),QIList(l239,QIList(l167,l326,l3),l3),l3,l3),l3),l3),l3),l3,l3),QIList(l5,l196,QIList(l102,QIList(l5,QIList(l325,l209,l326,l3),QIList(l166,QIList(l102,QIList(l5,QIList(l168,l325,l3),QIList(l167,l326,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l2,l196,QIList(l102,QIList(l5,QIList(l209,l327,l3),QIList(l166,QIList(l238,QIList(l167,QIList(l73,QIList(l5,QIList(l328,l3),QIList(l166,QIList(l199,QIList(l165,QIList(l168,l328,l3),l3),l3),l3),l3),l327,l3),l3),l3),l3),l3),l3),l3,l3),QIList(l1,l196,QIList(l102,QIList(l5,QIList(l329,l325,l209,l326,l3),QIList(l166,QIList(l238,QIList(l195,QIList(l165,QIList(l168,l329,l3),l3),QIList(l165,QIList(l102,QIList(l5,QIList(l168,QIList(l73,QIList(l102,QIList(l5,QIList(l324,l3),QIList(l206,QIList(l290,l324,QIList(l165,l319,l3),l3),QIList(l165,l209,l3),l324,l3),l3),l3),l325,l3),l3),QIList(l167,l326,l3),l3),l3),l3),l3),l3),l3),l3),l3),l3,l3),l3),l3,l3,l3);
(function(){
    l123.fvalue(pv, l319);
    l123.fvalue(pv, l318);
    l123.fvalue(pv, l317);
    l123.fvalue(pv, l316);
    l123.fvalue(pv, l315);
    l123.fvalue(pv, l314);
    l123.fvalue(pv, l313);
    l123.fvalue(pv, l312);
    l123.fvalue(pv, l311);
    l123.fvalue(pv, l310);
    l123.fvalue(pv, l309);
    l123.fvalue(pv, l308);
    l123.fvalue(pv, l307);
    l123.fvalue(pv, l306);
    l123.fvalue(pv, l305);
    l123.fvalue(pv, l304);
    l123.fvalue(pv, l303);
    l123.fvalue(pv, l302);
    l123.fvalue(pv, l301);
    l123.fvalue(pv, l300);
    l123.fvalue(pv, l299);
    l123.fvalue(pv, l298);
    l123.fvalue(pv, l297);
    l123.fvalue(pv, l296);
    l123.fvalue(pv, l295);
    l123.fvalue(pv, l294);
    l123.fvalue(pv, l293);
    l123.fvalue(pv, l292);
    l123.fvalue(pv, l291);
    l123.fvalue(pv, l290);
    l123.fvalue(pv, l289);
    l123.fvalue(pv, l288);
    l123.fvalue(pv, l287);
    l123.fvalue(pv, l286);
    l123.fvalue(pv, l285);
    l123.fvalue(pv, l284);
    l123.fvalue(pv, l283);
    l123.fvalue(pv, l282);
    l123.fvalue(pv, l281);
    l123.fvalue(pv, l280);
    l123.fvalue(pv, l279);
    l123.fvalue(pv, l278);
    l123.fvalue(pv, l277);
    l123.fvalue(pv, l276);
    l123.fvalue(pv, l275);
    l123.fvalue(pv, l274);
    l123.fvalue(pv, l273);
    l123.fvalue(pv, l272);
    l123.fvalue(pv, l271);
    l123.fvalue(pv, l270);
    l123.fvalue(pv, l269);
    l123.fvalue(pv, l268);
    l123.fvalue(pv, l267);
    l123.fvalue(pv, l266);
    l123.fvalue(pv, l265);
    l123.fvalue(pv, l264);
    l123.fvalue(pv, l263);
    l123.fvalue(pv, l262);
    l123.fvalue(pv, l261);
    l123.fvalue(pv, l260);
    l123.fvalue(pv, l259);
    l123.fvalue(pv, l258);
    l123.fvalue(pv, l257);
    l123.fvalue(pv, l256);
    l123.fvalue(pv, l255);
    l123.fvalue(pv, l254);
    l123.fvalue(pv, l253);
    l123.fvalue(pv, l252);
    l123.fvalue(pv, l251);
    l123.fvalue(pv, l250);
    l123.fvalue(pv, l249);
    l123.fvalue(pv, l248);
    l123.fvalue(pv, l247);
    l123.fvalue(pv, l246);
    l123.fvalue(pv, l245);
    l123.fvalue(pv, l244);
    l123.fvalue(pv, l243);
    l123.fvalue(pv, l242);
    l123.fvalue(pv, l241);
    l123.fvalue(pv, l240);
    l123.fvalue(pv, l239);
    l123.fvalue(pv, l238);
    l123.fvalue(pv, l237);
    l123.fvalue(pv, l236);
    l123.fvalue(pv, l235);
    l123.fvalue(pv, l234);
    l123.fvalue(pv, l233);
    l123.fvalue(pv, l232);
    l123.fvalue(pv, l231);
    l123.fvalue(pv, l230);
    l123.fvalue(pv, l229);
    l123.fvalue(pv, l228);
    l123.fvalue(pv, l227);
    l123.fvalue(pv, l226);
    l123.fvalue(pv, l225);
    l123.fvalue(pv, l224);
    l123.fvalue(pv, l223);
    l123.fvalue(pv, l222);
    l123.fvalue(pv, l221);
    l123.fvalue(pv, l220);
    l123.fvalue(pv, l219);
    l123.fvalue(pv, l218);
    l123.fvalue(pv, l217);
    l123.fvalue(pv, l216);
    l123.fvalue(pv, l215);
    l123.fvalue(pv, l214);
    l123.fvalue(pv, l213);
    l123.fvalue(pv, l212);
    l123.fvalue(pv, l211);
    l123.fvalue(pv, l209);
    l123.fvalue(pv, l208);
    l123.fvalue(pv, l207);
    l123.fvalue(pv, l206);
    l123.fvalue(pv, l205);
    l123.fvalue(pv, l204);
    l123.fvalue(pv, l203);
    l123.fvalue(pv, l202);
    l123.fvalue(pv, l201);
    l123.fvalue(pv, l200);
    l123.fvalue(pv, l199);
    l123.fvalue(pv, l198);
    l123.fvalue(pv, l197);
    l123.fvalue(pv, l196);
    l123.fvalue(pv, l195);
    l123.fvalue(pv, l194);
    l123.fvalue(pv, l193);
    l123.fvalue(pv, l192);
    l123.fvalue(pv, l191);
    l123.fvalue(pv, l190);
    l123.fvalue(pv, l189);
    l123.fvalue(pv, l188);
    l123.fvalue(pv, l187);
    l123.fvalue(pv, l186);
    l123.fvalue(pv, l185);
    l123.fvalue(pv, l184);
    l123.fvalue(pv, l183);
    l123.fvalue(pv, l182);
    l123.fvalue(pv, l181);
    l123.fvalue(pv, l180);
    l123.fvalue(pv, l179);
    l123.fvalue(pv, l178);
    l123.fvalue(pv, l177);
    l123.fvalue(pv, l176);
    l123.fvalue(pv, l175);
    l123.fvalue(pv, l174);
    l123.fvalue(pv, l173);
    l123.fvalue(pv, l172);
    l123.fvalue(pv, l171);
    l123.fvalue(pv, l170);
    l123.fvalue(pv, l169);
    l123.fvalue(pv, l168);
    l123.fvalue(pv, l167);
    l123.fvalue(pv, l166);
    l123.fvalue(pv, l165);
    l123.fvalue(pv, l164);
    l123.fvalue(pv, l163);
    l123.fvalue(pv, l162);
    l123.fvalue(pv, l161);
    l123.fvalue(pv, l160);
    l123.fvalue(pv, l159);
    l123.fvalue(pv, l158);
    l123.fvalue(pv, l157);
    l123.fvalue(pv, l156);
    l123.fvalue(pv, l155);
    l123.fvalue(pv, l154);
    l123.fvalue(pv, l153);
    l123.fvalue(pv, l152);
    l123.fvalue(pv, l151);
    l123.fvalue(pv, l150);
    l123.fvalue(pv, l149);
    l123.fvalue(pv, l148);
    l123.fvalue(pv, l147);
    l123.fvalue(pv, l146);
    l123.fvalue(pv, l145);
    l123.fvalue(pv, l144);
    l123.fvalue(pv, l143);
    l123.fvalue(pv, l142);
    l123.fvalue(pv, l141);
    l123.fvalue(pv, l140);
    l123.fvalue(pv, l139);
    l123.fvalue(pv, l138);
    l123.fvalue(pv, l137);
    l123.fvalue(pv, l136);
    l123.fvalue(pv, l135);
    l123.fvalue(pv, l134);
    l123.fvalue(pv, l133);
    l123.fvalue(pv, l132);
    l123.fvalue(pv, l131);
    l123.fvalue(pv, l130);
    l123.fvalue(pv, l129);
    l123.fvalue(pv, l128);
    l123.fvalue(pv, l127);
    l123.fvalue(pv, l126);
    l123.fvalue(pv, l125);
    l123.fvalue(pv, l124);
    l123.fvalue(pv, l123);
    l123.fvalue(pv, l122);
    l123.fvalue(pv, l121);
    l123.fvalue(pv, l120);
    l123.fvalue(pv, l119);
    l123.fvalue(pv, l118);
    l123.fvalue(pv, l117);
    l123.fvalue(pv, l116);
    l123.fvalue(pv, l115);
    l123.fvalue(pv, l114);
    l123.fvalue(pv, l113);
    l123.fvalue(pv, l112);
    l123.fvalue(pv, l111);
    l123.fvalue(pv, l110);
    l123.fvalue(pv, l109);
    l123.fvalue(pv, l108);
    l123.fvalue(pv, l107);
    l123.fvalue(pv, l106);
    l123.fvalue(pv, l105);
    l123.fvalue(pv, l104);
    l123.fvalue(pv, l103);
    l123.fvalue(pv, l102);
    l123.fvalue(pv, l101);
    l123.fvalue(pv, l100);
    l123.fvalue(pv, l99);
    l123.fvalue(pv, l98);
    l123.fvalue(pv, l97);
    l123.fvalue(pv, l96);
    l123.fvalue(pv, l95);
    l123.fvalue(pv, l94);
    l123.fvalue(pv, l93);
    l123.fvalue(pv, l92);
    l123.fvalue(pv, l91);
    l123.fvalue(pv, l90);
    l123.fvalue(pv, l89);
    l123.fvalue(pv, l88);
    l123.fvalue(pv, l87);
    l123.fvalue(pv, l86);
    l123.fvalue(pv, l85);
    l123.fvalue(pv, l84);
    l123.fvalue(pv, l83);
    l123.fvalue(pv, l82);
    l123.fvalue(pv, l81);
    l123.fvalue(pv, l80);
    l123.fvalue(pv, l79);
    l123.fvalue(pv, l78);
    l123.fvalue(pv, l77);
    l123.fvalue(pv, l76);
    l123.fvalue(pv, l75);
    l123.fvalue(pv, l74);
    l123.fvalue(pv, l73);
    l123.fvalue(pv, l72);
    l123.fvalue(pv, l71);
    l123.fvalue(pv, l70);
    l123.fvalue(pv, l69);
    l123.fvalue(pv, l68);
    l123.fvalue(pv, l67);
    l123.fvalue(pv, l66);
    l123.fvalue(pv, l65);
    l123.fvalue(pv, l64);
    l123.fvalue(pv, l63);
    l123.fvalue(pv, l62);
    l123.fvalue(pv, l61);
    l123.fvalue(pv, l60);
    l123.fvalue(pv, l59);
    l123.fvalue(pv, l58);
    l123.fvalue(pv, l57);
    l123.fvalue(pv, l56);
    l123.fvalue(pv, l55);
    l123.fvalue(pv, l54);
    l123.fvalue(pv, l53);
    l123.fvalue(pv, l52);
    l123.fvalue(pv, l51);
    l123.fvalue(pv, l50);
    l123.fvalue(pv, l49);
    l123.fvalue(pv, l48);
    l123.fvalue(pv, l47);
    l123.fvalue(pv, l46);
    l123.fvalue(pv, l45);
    l123.fvalue(pv, l44);
    l123.fvalue(pv, l43);
    l123.fvalue(pv, l42);
    l123.fvalue(pv, l41);
    l123.fvalue(pv, l40);
    l123.fvalue(pv, l39);
    l123.fvalue(pv, l38);
    l123.fvalue(pv, l37);
    l123.fvalue(pv, l36);
    l123.fvalue(pv, l35);
    l123.fvalue(pv, l34);
    l123.fvalue(pv, l33);
    l123.fvalue(pv, l32);
    l123.fvalue(pv, l31);
    l123.fvalue(pv, l30);
    l123.fvalue(pv, l29);
    l123.fvalue(pv, l28);
    l123.fvalue(pv, l27);
    l123.fvalue(pv, l26);
    l123.fvalue(pv, l25);
    l123.fvalue(pv, l24);
    l123.fvalue(pv, l23);
    l123.fvalue(pv, l22);
    l123.fvalue(pv, l21);
    l123.fvalue(pv, l20);
    l123.fvalue(pv, l19);
    l123.fvalue(pv, l18);
    l123.fvalue(pv, l17);
    l123.fvalue(pv, l16);
    l123.fvalue(pv, l15);
    l123.fvalue(pv, l14);
    l123.fvalue(pv, l13);
    l123.fvalue(pv, l12);
    l123.fvalue(pv, l11);
    l123.fvalue(pv, l10);
    l123.fvalue(pv, l9);
    l123.fvalue(pv, l8);
    l123.fvalue(pv, l7);
    l123.fvalue(pv, l6);
    l123.fvalue(pv, l5);
    l123.fvalue(pv, l4);
    l123.fvalue(pv, l3);
    l123.fvalue(pv, l2);
    l123.fvalue(pv, l1);
    ((l226).value = l321);
    ((l186).value = l357);
    ((l187).value = 851);
    ((l15).value = 218);
    return ((l248).value = 288);
})();
((l227).value = 357);
