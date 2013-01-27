function pv (x) { return x ; }

function mv(){
    var r = [];
    r['multiple-value'] = true;
    for (var i=0; i<arguments.length; i++)
        r.push(arguments[i]);
    return r;
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
}var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "DECLAIM"};
l2;
var l3 = {name: "NIL"};
((l3).value = l3);
var l4 = {name: "T"};
((l4).value = l4);
var l5 = {name: "WHEN"};
l5;
var l6 = {name: "UNLESS"};
l6;
var l7 = {name: "DEFVAR"};
l7;
var l8 = {name: "DEFPARAMETER"};
l8;
var l9 = {name: "NAMED-LAMBDA"};
l9;
var l10 = {name: "DEFUN"};
l10;
var l11 = {name: "NULL"};
(function(){
    (l11).fvalue = (function(v2){
        ((v2)["fname"] = "NULL");
        return v2;
    })((function (values,v1){
        checkArgs(arguments, 2);
        return (function(){
                return ((v1 === l3.value)?l4.value: l3.value);
        })();
    }));
    return l11;
})();
var l12 = {name: "RETURN"};
l12;
var l13 = {name: "WHILE"};
l13;
var l14 = {name: "*GENSYM-COUNTER*"};
(function(){
    (((l14.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l14).value = 0));
    return l14;
})();
var l15 = {name: "GENSYM"};
var l16 = {name: "INTEGER-TO-STRING"};
(function(){
    (l15).fvalue = (function(v4){
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
                ((l14).value = (function(){
                    var x1 = (function(){
                        var symbol = l14;
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
                        var string2 = l16.fvalue(pv, (function(){
                            var symbol = l14;
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
    return l15;
})();
var l17 = {name: "BOUNDP"};
(function(){
    (l17).fvalue = (function(v6){
        ((v6)["fname"] = "BOUNDP");
        return v6;
    })((function (values,v5){
        checkArgs(arguments, 2);
        return (function(){
                return ((v5.value !== undefined)?l4.value: l3.value);
        })();
    }));
    return l17;
})();
var l18 = {name: "="};
(function(){
    (l18).fvalue = (function(v9){
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
    return l18;
})();
var l19 = {name: "*"};
(function(){
    (l19).fvalue = (function(v12){
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
    return l19;
})();
var l20 = {name: "/"};
(function(){
    (l20).fvalue = (function(v15){
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
    return l20;
})();
var l21 = {name: "1+"};
(function(){
    (l21).fvalue = (function(v17){
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
    return l21;
})();
var l22 = {name: "1-"};
(function(){
    (l22).fvalue = (function(v19){
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
    return l22;
})();
var l23 = {name: "ZEROP"};
(function(){
    (l23).fvalue = (function(v21){
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
    return l23;
})();
var l24 = {name: "TRUNCATE"};
(function(){
    (l24).fvalue = (function(v24){
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
    return l24;
})();
var l25 = {name: "EQL"};
(function(){
    (l25).fvalue = (function(v27){
        ((v27)["fname"] = "EQL");
        return v27;
    })((function (values,v25,v26){
        checkArgs(arguments, 3);
        return (function(){
                return ((v25 === v26)?l4.value: l3.value);
        })();
    }));
    return l25;
})();
var l26 = {name: "NOT"};
(function(){
    (l26).fvalue = (function(v29){
        ((v29)["fname"] = "NOT");
        return v29;
    })((function (values,v28){
        checkArgs(arguments, 2);
        return (function(){
                return (v28 !== l3.value ? l3.value : l4.value);
        })();
    }));
    return l26;
})();
var l27 = {name: "CONS"};
(function(){
    (l27).fvalue = (function(v32){
        ((v32)["fname"] = "CONS");
        return v32;
    })((function (values,v30,v31){
        checkArgs(arguments, 3);
        return (function(){
                return ({car: v30, cdr: v31});
        })();
    }));
    return l27;
})();
var l28 = {name: "CONSP"};
(function(){
    (l28).fvalue = (function(v34){
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
    return l28;
})();
var l29 = {name: "CAR"};
(function(){
    (l29).fvalue = (function(v36){
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
    return l29;
})();
var l30 = {name: "CDR"};
(function(){
    (l30).fvalue = (function(v38){
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
    return l30;
})();
var l31 = {name: "CAAR"};
(function(){
    (l31).fvalue = (function(v40){
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
    return l31;
})();
var l32 = {name: "CADR"};
(function(){
    (l32).fvalue = (function(v42){
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
    return l32;
})();
var l33 = {name: "CDAR"};
(function(){
    (l33).fvalue = (function(v44){
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
    return l33;
})();
var l34 = {name: "CDDR"};
(function(){
    (l34).fvalue = (function(v46){
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
    return l34;
})();
var l35 = {name: "CADDR"};
(function(){
    (l35).fvalue = (function(v48){
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
    return l35;
})();
var l36 = {name: "CDDDR"};
(function(){
    (l36).fvalue = (function(v50){
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
    return l36;
})();
var l37 = {name: "CADDDR"};
(function(){
    (l37).fvalue = (function(v52){
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
    return l37;
})();
var l38 = {name: "FIRST"};
(function(){
    (l38).fvalue = (function(v54){
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
    return l38;
})();
var l39 = {name: "SECOND"};
(function(){
    (l39).fvalue = (function(v56){
        ((v56)["fname"] = "SECOND");
        return v56;
    })((function (values,v55){
        checkArgs(arguments, 2);
        return (function(){
                return l32.fvalue(values, v55);
        })();
    }));
    return l39;
})();
var l40 = {name: "THIRD"};
(function(){
    (l40).fvalue = (function(v58){
        ((v58)["fname"] = "THIRD");
        return v58;
    })((function (values,v57){
        checkArgs(arguments, 2);
        return (function(){
                return l35.fvalue(values, v57);
        })();
    }));
    return l40;
})();
var l41 = {name: "FOURTH"};
(function(){
    (l41).fvalue = (function(v60){
        ((v60)["fname"] = "FOURTH");
        return v60;
    })((function (values,v59){
        checkArgs(arguments, 2);
        return (function(){
                return l37.fvalue(values, v59);
        })();
    }));
    return l41;
})();
var l42 = {name: "LIST"};
(function(){
    (l42).fvalue = (function(v62){
        ((v62)["fname"] = "LIST");
        return v62;
    })((function (values){
        var v61= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v61 = {car: arguments[i], cdr: 
        v61};
        return (function(){
                return v61;
        })();
    }));
    return l42;
})();
var l43 = {name: "ATOM"};
(function(){
    (l43).fvalue = (function(v64){
        ((v64)["fname"] = "ATOM");
        return v64;
    })((function (values,v63){
        checkArgs(arguments, 2);
        return (function(){
                return l26.fvalue(values, ((function(){
                    var tmp = v63;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l3.value));
        })();
    }));
    return l43;
})();
var l44 = {name: "INCF"};
l44;
var l45 = {name: "DECF"};
l45;
var l46 = {name: "PUSH"};
l46;
var l47 = {name: "DOLIST"};
l47;
var l48 = {name: "DOTIMES"};
l48;
var l49 = {name: "COND"};
l49;
var l50 = {name: "CASE"};
l50;
var l51 = {name: "ECASE"};
l51;
var l52 = {name: "AND"};
l52;
var l53 = {name: "OR"};
l53;
var l54 = {name: "PROG1"};
l54;
var l55 = {name: "PROG2"};
l55;
var l56 = {name: "ENSURE-LIST"};
var l57 = {name: "LISTP"};
(function(){
    (l56).fvalue = (function(v66){
        ((v66)["fname"] = "ENSURE-LIST");
        return v66;
    })((function (values,v65){
        checkArgs(arguments, 2);
        return (function(){
                return (l57.fvalue(pv, v65) !== l3.value ? v65 : l42.fvalue(values, v65));
        })();
    }));
    return l56;
})();
var l58 = {name: "!REDUCE"};
(function(){
    (l58).fvalue = (function(v70){
        ((v70)["fname"] = "!REDUCE");
        return v70;
    })((function (values,v67,v68,v69){
        checkArgs(arguments, 4);
        return (function(){
                return (l11.fvalue(pv, v68) !== l3.value ? v69 : l58.fvalue(values, v67, (function(){
                    var tmp = v68;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), (v67)(pv, v69, (function(){
                    var tmp = v68;
                    return tmp === l3.value? l3.value: tmp.car;
                })())));
        })();
    }));
    return l58;
})();
var l59 = {name: "+"};
(function(){
    (l59).fvalue = (function(v75){
        ((v75)["fname"] = "+");
        return v75;
    })((function (values){
        var v71= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v71 = {car: arguments[i], cdr: 
        v71};
        return (function(){
                return (function(v72){
                    return (function(){
                            return (function(v73,v74){
                                (function(){
                                    while(v73 !== l3.value){
                                        (v74 = (function(){
                                            var tmp = v73;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (v72 = (function(){
                                                var x1 = v72;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v74;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                            return l3.value;
                                        })();
                                        (v73 = (function(){
                                            var tmp = v73;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return v72;
                            })(v71,l3.value);
                    })();
                })(0);
        })();
    }));
    return l59;
})();
var l60 = {name: "-"};
(function(){
    (l60).fvalue = (function(v81){
        ((v81)["fname"] = "-");
        return v81;
    })((function (values,v77){
        checkArgsAtLeast(arguments, 2);
        var v76= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v76 = {car: arguments[i], cdr: 
        v76};
        return (function(){
                return (l11.fvalue(pv, v76) !== l3.value ? (function(){
                    var x1 = v77;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    return -x1;
                })() : (function(v78){
                    return (function(){
                            return (function(v79,v80){
                                (function(){
                                    while(v79 !== l3.value){
                                        (v80 = (function(){
                                            var tmp = v79;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (v78 = (function(){
                                                var x1 = v78;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v80;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1-x2;
                                            })());
                                            return l3.value;
                                        })();
                                        (v79 = (function(){
                                            var tmp = v79;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return v78;
                            })(v76,l3.value);
                    })();
                })(v77));
        })();
    }));
    return l60;
})();
var l61 = {name: "APPEND-TWO"};
var l62 = {name: "APPEND"};
(function(){
    (l61).fvalue = (function(v84){
        ((v84)["fname"] = "APPEND-TWO");
        return v84;
    })((function (values,v82,v83){
        checkArgs(arguments, 3);
        return (function(){
                return (l11.fvalue(pv, v82) !== l3.value ? v83 : ({car: (function(){
                    var tmp = v82;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), cdr: l62.fvalue(pv, (function(){
                    var tmp = v82;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), v83)}));
        })();
    }));
    return l61;
})();
(function(){
    (l62).fvalue = (function(v86){
        ((v86)["fname"] = "APPEND");
        return v86;
    })((function (values){
        var v85= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v85 = {car: arguments[i], cdr: 
        v85};
        return (function(){
                return l58.fvalue(values, (function(){
                    var symbol = l61;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v85, l3);
        })();
    }));
    return l62;
})();
var l63 = {name: "REVAPPEND"};
(function(){
    (l63).fvalue = (function(v89){
        ((v89)["fname"] = "REVAPPEND");
        return v89;
    })((function (values,v87,v88){
        checkArgs(arguments, 3);
        return (function(){
                (function(){
                        return (function(){
                            while(v87 !== l3.value){
                                (v88 = ({car: (function(){
                                    var tmp = v87;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })(), cdr: v88}));
                                (v87 = (function(){
                                    var tmp = v87;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                })();
                return v88;
        })();
    }));
    return l63;
})();
var l64 = {name: "REVERSE"};
(function(){
    (l64).fvalue = (function(v91){
        ((v91)["fname"] = "REVERSE");
        return v91;
    })((function (values,v90){
        checkArgs(arguments, 2);
        return (function(){
                return l63.fvalue(values, v90, l3);
        })();
    }));
    return l64;
})();
var l65 = {name: "PSETQ"};
l65;
var l66 = {name: "LIST-LENGTH"};
(function(){
    (l66).fvalue = (function(v94){
        ((v94)["fname"] = "LIST-LENGTH");
        return v94;
    })((function (values,v92){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v93){
                    (function(){
                            return (function(){
                                while(l26.fvalue(pv, l11.fvalue(pv, v92)) !== l3.value){
                                    (v93 = (function(){
                                        var x1 = v93;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                    (v92 = (function(){
                                        var tmp = v92;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                    })();
                    return v93;
                })(0);
        })();
    }));
    return l66;
})();
var l67 = {name: "LENGTH"};
(function(){
    (l67).fvalue = (function(v96){
        ((v96)["fname"] = "LENGTH");
        return v96;
    })((function (values,v95){
        checkArgs(arguments, 2);
        return (function(){
                return (((typeof(v95) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                    var x = v95;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return x.length;
                })() : (((function(){
                    var x = v95;
                    return typeof x === 'object' && 'length' in x;
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    var tmp = (v95)["length"];
                    return tmp == undefined? l3.value: tmp ;
                })() : (l57.fvalue(pv, v95) !== l3.value ? l66.fvalue(values, v95) : l3.value)));
        })();
    }));
    return l67;
})();
var l68 = {name: "CONCAT-TWO"};
(function(){
    (l68).fvalue = (function(v99){
        ((v99)["fname"] = "CONCAT-TWO");
        return v99;
    })((function (values,v97,v98){
        checkArgs(arguments, 3);
        return (function(){
                return (function(){
                    var string1 = v97;
                    var string2 = v98;
                    if (typeof string1 != 'string')
                        throw 'The value ' + string1 + ' is not a type string.';
                    if (typeof string2 != 'string')
                        throw 'The value ' + string2 + ' is not a type string.';
                    return string1.concat(string2);
                })();
        })();
    }));
    return l68;
})();
var l69 = {name: "MAPCAR"};
(function(){
    (l69).fvalue = (function(v102){
        ((v102)["fname"] = "MAPCAR");
        return v102;
    })((function (values,v100,v101){
        checkArgs(arguments, 3);
        return (function(){
                return (l11.fvalue(pv, v101) !== l3.value ? l3 : ({car: (v100)(pv, (function(){
                    var tmp = v101;
                    return tmp === l3.value? l3.value: tmp.car;
                })()), cdr: l69.fvalue(pv, v100, (function(){
                    var tmp = v101;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())}));
        })();
    }));
    return l69;
})();
var l70 = {name: "IDENTITY"};
(function(){
    (l70).fvalue = (function(v104){
        ((v104)["fname"] = "IDENTITY");
        return v104;
    })((function (values,v103){
        checkArgs(arguments, 2);
        return (function(){
                return v103;
        })();
    }));
    return l70;
})();
var l71 = {name: "COPY-LIST"};
(function(){
    (l71).fvalue = (function(v106){
        ((v106)["fname"] = "COPY-LIST");
        return v106;
    })((function (values,v105){
        checkArgs(arguments, 2);
        return (function(){
                return l69.fvalue(values, (function(){
                    var symbol = l70;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v105);
        })();
    }));
    return l71;
})();
var l72 = {name: "CODE-CHAR"};
(function(){
    (l72).fvalue = (function(v108){
        ((v108)["fname"] = "CODE-CHAR");
        return v108;
    })((function (values,v107){
        checkArgs(arguments, 2);
        return (function(){
                return v107;
        })();
    }));
    return l72;
})();
var l73 = {name: "CHAR-CODE"};
(function(){
    (l73).fvalue = (function(v110){
        ((v110)["fname"] = "CHAR-CODE");
        return v110;
    })((function (values,v109){
        checkArgs(arguments, 2);
        return (function(){
                return v109;
        })();
    }));
    return l73;
})();
var l74 = {name: "CHAR="};
(function(){
    (l74).fvalue = (function(v113){
        ((v113)["fname"] = "CHAR=");
        return v113;
    })((function (values,v111,v112){
        checkArgs(arguments, 3);
        return (function(){
                return (function(){
                    var x1 = v111;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v112;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1==x2?l4.value: l3.value);
                })();
        })();
    }));
    return l74;
})();
var l75 = {name: "INTEGERP"};
(function(){
    (l75).fvalue = (function(v115){
        ((v115)["fname"] = "INTEGERP");
        return v115;
    })((function (values,v114){
        checkArgs(arguments, 2);
        return (function(){
                return (((typeof (v114) == "number")?l4.value: l3.value) !== l3.value ? (function(){
                    var x1 = (function(){
                        var x = v114;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return Math.floor(x);
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v114;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1==x2?l4.value: l3.value);
                })() : l3.value);
        })();
    }));
    return l75;
})();
var l76 = {name: "PLUSP"};
(function(){
    (l76).fvalue = (function(v117){
        ((v117)["fname"] = "PLUSP");
        return v117;
    })((function (values,v116){
        checkArgs(arguments, 2);
        return (function(){
                return (function(){
                    var x1 = 0;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v116;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<x2?l4.value: l3.value);
                })();
        })();
    }));
    return l76;
})();
var l77 = {name: "MINUSP"};
(function(){
    (l77).fvalue = (function(v119){
        ((v119)["fname"] = "MINUSP");
        return v119;
    })((function (values,v118){
        checkArgs(arguments, 2);
        return (function(){
                return (function(){
                    var x1 = v118;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = 0;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<x2?l4.value: l3.value);
                })();
        })();
    }));
    return l77;
})();
(function(){
    (l57).fvalue = (function(v122){
        ((v122)["fname"] = "LISTP");
        return v122;
    })((function (values,v120){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v121){
                    return (v121 !== l3.value ? v121 : l11.fvalue(values, v120));
                })(((function(){
                    var tmp = v120;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l3.value));
        })();
    }));
    return l57;
})();
var l78 = {name: "NTHCDR"};
(function(){
    (l78).fvalue = (function(v125){
        ((v125)["fname"] = "NTHCDR");
        return v125;
    })((function (values,v123,v124){
        checkArgs(arguments, 3);
        return (function(){
                (function(){
                        return (function(){
                            while((l76.fvalue(pv, v123) !== l3.value ? v124 : l3.value) !== l3.value){
                                (v123 = l22.fvalue(pv, v123));
                                (v124 = (function(){
                                    var tmp = v124;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                })();
                return v124;
        })();
    }));
    return l78;
})();
var l79 = {name: "NTH"};
(function(){
    (l79).fvalue = (function(v128){
        ((v128)["fname"] = "NTH");
        return v128;
    })((function (values,v126,v127){
        checkArgs(arguments, 3);
        return (function(){
                return (function(){
                    var tmp = l78.fvalue(pv, v126, v127);
                    return tmp === l3.value? l3.value: tmp.car;
                })();
        })();
    }));
    return l79;
})();
var l80 = {name: "LAST"};
(function(){
    (l80).fvalue = (function(v130){
        ((v130)["fname"] = "LAST");
        return v130;
    })((function (values,v129){
        checkArgs(arguments, 2);
        return (function(){
                (function(){
                        return (function(){
                            while(((function(){
                                var tmp = (function(){
                                    var tmp = v129;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value){
                                (v129 = (function(){
                                    var tmp = v129;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                })();
                return v129;
        })();
    }));
    return l80;
})();
var l81 = {name: "BUTLAST"};
(function(){
    (l81).fvalue = (function(v132){
        ((v132)["fname"] = "BUTLAST");
        return v132;
    })((function (values,v131){
        checkArgs(arguments, 2);
        return (function(){
                return (((function(){
                    var tmp = (function(){
                        var tmp = v131;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l3.value) !== l3.value ? ({car: (function(){
                    var tmp = v131;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), cdr: l81.fvalue(pv, (function(){
                    var tmp = v131;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())}) : l3.value);
        })();
    }));
    return l81;
})();
var l82 = {name: "MEMBER"};
(function(){
    (l82).fvalue = (function(v135){
        ((v135)["fname"] = "MEMBER");
        return v135;
    })((function (values,v133,v134){
        checkArgs(arguments, 3);
        return (function(){
                return (function(){
                    try {
                        return (function(){
                            while(v134 !== l3.value){
                                (l25.fvalue(pv, v133, (function(){
                                    var tmp = v134;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()) !== l3.value ? (function(){
                                    throw ({type: 'block', id: 62, value: v134, message: 'Return from unknown block NIL.'})
                                })() : l3.value);
                                (v134 = (function(){
                                    var tmp = v134;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                            }return l3.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 62)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
        })();
    }));
    return l82;
})();
var l83 = {name: "REMOVE"};
(function(){
    (l83).fvalue = (function(v138){
        ((v138)["fname"] = "REMOVE");
        return v138;
    })((function (values,v136,v137){
        checkArgs(arguments, 3);
        return (function(){
                return (l11.fvalue(pv, v137) !== l3.value ? l3.value : (l25.fvalue(pv, v136, (function(){
                    var tmp = v137;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l83.fvalue(values, v136, (function(){
                    var tmp = v137;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) : ({car: (function(){
                    var tmp = v137;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), cdr: l83.fvalue(pv, v136, (function(){
                    var tmp = v137;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())})));
        })();
    }));
    return l83;
})();
var l84 = {name: "REMOVE-IF"};
(function(){
    (l84).fvalue = (function(v141){
        ((v141)["fname"] = "REMOVE-IF");
        return v141;
    })((function (values,v139,v140){
        checkArgs(arguments, 3);
        return (function(){
                return (l11.fvalue(pv, v140) !== l3.value ? l3.value : ((v139)(pv, (function(){
                    var tmp = v140;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l84.fvalue(values, v139, (function(){
                    var tmp = v140;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) : ({car: (function(){
                    var tmp = v140;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), cdr: l84.fvalue(pv, v139, (function(){
                    var tmp = v140;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())})));
        })();
    }));
    return l84;
})();
var l85 = {name: "REMOVE-IF-NOT"};
(function(){
    (l85).fvalue = (function(v144){
        ((v144)["fname"] = "REMOVE-IF-NOT");
        return v144;
    })((function (values,v142,v143){
        checkArgs(arguments, 3);
        return (function(){
                return (l11.fvalue(pv, v143) !== l3.value ? l3.value : ((v142)(pv, (function(){
                    var tmp = v143;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? ({car: (function(){
                    var tmp = v143;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), cdr: l85.fvalue(pv, v142, (function(){
                    var tmp = v143;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())}) : l85.fvalue(values, v142, (function(){
                    var tmp = v143;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())));
        })();
    }));
    return l85;
})();
var l86 = {name: "DIGIT-CHAR-P"};
(function(){
    (l86).fvalue = (function(v146){
        ((v146)["fname"] = "DIGIT-CHAR-P");
        return v146;
    })((function (values,v145){
        checkArgs(arguments, 2);
        return (function(){
                return (((function(){
                    var x1 = 48;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v145;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<=x2?l4.value: l3.value);
                })() !== l3.value ? (function(){
                    var x1 = v145;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = 57;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<=x2?l4.value: l3.value);
                })() : l3.value) !== l3.value ? (function(){
                    var x1 = v145;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = 48;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1-x2;
                })() : l3.value);
        })();
    }));
    return l86;
})();
var l87 = {name: "SUBSEQ"};
(function(){
    (l87).fvalue = (function(v150){
        ((v150)["fname"] = "SUBSEQ");
        return v150;
    })((function (values,v147,v148,v149){
        checkArgsAtLeast(arguments, 3);
        checkArgsAtMost(arguments, 4);
        switch(arguments.length-1){
        case 2:
        v149=l3.value;
        default: break;
        }
        return (function(){
                return (((typeof(v147) == "string")?l4.value: l3.value) !== l3.value ? (v149 !== l3.value ? (function(){
                    var str = v147;
                    var a = v148;
                    var b;
                    b = v149;
                    return str.slice(a,b);
                })() : (function(){
                    var str = v147;
                    var a = v148;
                    var b;
                    return str.slice(a,b);
                })()) : (function(){
                    throw "Unsupported argument.";
                })());
        })();
    }));
    return l87;
})();
var l88 = {name: "PARSE-INTEGER"};
(function(){
    (l88).fvalue = (function(v155){
        ((v155)["fname"] = "PARSE-INTEGER");
        return v155;
    })((function (values,v151){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v152,v153,v154){
                    (function(){
                            return (function(){
                                while((function(){
                                    var x1 = v153;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v154;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value){
                                    (v152 = (function(){
                                        var x1 = (function(){
                                            var x1 = v152;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = 10;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return x1*x2;
                                        })();
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = l86.fvalue(pv, (function(){
                                            var string = v151;
                                            var index = v153;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })());
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                    (v153 = (function(){
                                        var x1 = v153;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                }return l3.value;
                            })();
                    })();
                    return v152;
                })(0,0,l67.fvalue(pv, v151));
        })();
    }));
    return l88;
})();
var l89 = {name: "SOME"};
(function(){
    (l89).fvalue = (function(v162){
        ((v162)["fname"] = "SOME");
        return v162;
    })((function (values,v156,v157){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (((typeof(v157) == "string")?l4.value: l3.value) !== l3.value ? (function(v158,v159){
                    (function(){
                            return (function(){
                                while((function(){
                                    var x1 = v158;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v159;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value){
                                    ((v156)(pv, (function(){
                                        var string = v157;
                                        var index = v158;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })()) !== l3.value ? (function(){
                                        throw ({type: 'block', id: 70, value: l4.value, message: 'Return from unknown block SOME.'})
                                    })() : l3.value);
                                    (v158 = (function(){
                                        var x1 = v158;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                }return l3.value;
                            })();
                    })();
                    return l3.value;
                })(0,l67.fvalue(pv, v157)) : (l57.fvalue(pv, v157) !== l3.value ? (function(){
                    try {
                        return (function(v160,v161){
                            (function(){
                                while(v160 !== l3.value){
                                    (v161 = (function(){
                                        var tmp = v160;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v156)(pv, v161) !== l3.value ? (function(){
                                            throw ({type: 'block', id: 72, value: l4.value, message: 'Return from unknown block NIL.'})
                                        })() : l3.value);
                                        return l3.value;
                                    })();
                                    (v160 = (function(){
                                        var tmp = v160;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return l3.value;
                        })(v157,l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 72)
                            return cf.value;
                        else
                            throw cf;
                    }
                })() : (function(){
                    throw "Unknown sequence.";
                })()));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 70)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
    return l89;
})();
var l90 = {name: "EVERY"};
(function(){
    (l90).fvalue = (function(v169){
        ((v169)["fname"] = "EVERY");
        return v169;
    })((function (values,v163,v164){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (((typeof(v164) == "string")?l4.value: l3.value) !== l3.value ? (function(v165,v166){
                    (function(){
                            return (function(){
                                while((function(){
                                    var x1 = v165;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v166;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value){
                                    ((v163)(pv, (function(){
                                        var string = v164;
                                        var index = v165;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })()) !== l3.value ? l3.value : (function(){
                                        throw ({type: 'block', id: 73, value: l3.value, message: 'Return from unknown block EVERY.'})
                                    })());
                                    (v165 = (function(){
                                        var x1 = v165;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                }return l3.value;
                            })();
                    })();
                    return l4.value;
                })(0,l67.fvalue(pv, v164)) : (l57.fvalue(pv, v164) !== l3.value ? (function(){
                    try {
                        return (function(v167,v168){
                            (function(){
                                while(v167 !== l3.value){
                                    (v168 = (function(){
                                        var tmp = v167;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })());
                                    (function(){
                                        ((v163)(pv, v168) !== l3.value ? l3.value : (function(){
                                            throw ({type: 'block', id: 75, value: l3.value, message: 'Return from unknown block NIL.'})
                                        })());
                                        return l3.value;
                                    })();
                                    (v167 = (function(){
                                        var tmp = v167;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })());
                                }return l3.value;
                            })();
                            return l4.value;
                        })(v164,l3.value);
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 75)
                            return cf.value;
                        else
                            throw cf;
                    }
                })() : (function(){
                    throw "Unknown sequence.";
                })()));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 73)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
    return l90;
})();
var l91 = {name: "ASSOC"};
(function(){
    (l91).fvalue = (function(v172){
        ((v172)["fname"] = "ASSOC");
        return v172;
    })((function (values,v170,v171){
        checkArgs(arguments, 3);
        return (function(){
                (function(){
                    try {
                        return (function(){
                            while(v171 !== l3.value){
                                (l25.fvalue(pv, v170, l31.fvalue(pv, v171)) !== l3.value ? (function(){
                                    throw ({type: 'block', id: 77, value: l3.value, message: 'Return from unknown block NIL.'})
                                })() : (v171 = (function(){
                                    var tmp = v171;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            }return l3.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 77)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
                return (function(){
                    var tmp = v171;
                    return tmp === l3.value? l3.value: tmp.car;
                })();
        })();
    }));
    return l91;
})();
var l92 = {name: "STRING"};
(function(){
    (l92).fvalue = (function(v174){
        ((v174)["fname"] = "STRING");
        return v174;
    })((function (values,v173){
        checkArgs(arguments, 2);
        return (function(){
                return (((typeof(v173) == "string")?l4.value: l3.value) !== l3.value ? v173 : (((function(){
                    var tmp = v173;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (v173).name : (function(){
                    var x = v173;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    return String.fromCharCode(x);
                })()));
        })();
    }));
    return l92;
})();
var l93 = {name: "STRING="};
(function(){
    (l93).fvalue = (function(v177){
        ((v177)["fname"] = "STRING=");
        return v177;
    })((function (values,v175,v176){
        checkArgs(arguments, 3);
        return (function(){
                return ((v175 == v176)?l4.value: l3.value);
        })();
    }));
    return l93;
})();
var l94 = {name: "FDEFINITION"};
(function(){
    (l94).fvalue = (function(v179){
        ((v179)["fname"] = "FDEFINITION");
        return v179;
    })((function (values,v178){
        checkArgs(arguments, 2);
        return (function(){
                return (((typeof v178 == 'function')?l4.value: l3.value) !== l3.value ? v178 : (((function(){
                    var tmp = v178;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    var symbol = v178;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })() : (function(){
                    throw "Invalid function";
                })()));
        })();
    }));
    return l94;
})();
var l95 = {name: "DISASSEMBLE"};
var l96 = {name: "WRITE-LINE"};
(function(){
    (l95).fvalue = (function(v181){
        ((v181)["fname"] = "DISASSEMBLE");
        return v181;
    })((function (values,v180){
        checkArgs(arguments, 2);
        return (function(){
                l96.fvalue(pv, (l94.fvalue(pv, v180)).toString());
                return l3.value;
        })();
    }));
    return l95;
})();
var l97 = {name: "DOCUMENTATION"};
var l98 = {name: "FUNCTION"};
var l99 = {name: "VARIABLE"};
(function(){
    (l97).fvalue = (function(v186){
        ((v186)["fname"] = "DOCUMENTATION");
        return v186;
    })((function(){
        var func = (function (values,v182,v183){
            checkArgs(arguments, 3);
            return (function(){
                    return (function(v184){
                        return (l25.fvalue(pv, v184, l98) !== l3.value ? (function(v185){
                            return (function(){
                                var tmp = (v185)["docstring"];
                                return tmp == undefined? l3.value: tmp ;
                            })();
                        })(l94.fvalue(pv, v182)) : (l25.fvalue(pv, v184, l99) !== l3.value ? (function(){
                            (((function(){
                                var tmp = v182;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                                throw "Wrong argument type! it should be a symbol";
                            })());
                            return (function(){
                                var tmp = (v182)["vardoc"];
                                return tmp == undefined? l3.value: tmp ;
                            })();
                        })() : (function(){
                            throw "ECASE expression failed.";
                        })()));
                    })(v183);
            })();
        });
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })());
    return l97;
})();
var l100 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l100.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l100).value = l3.value));
    return l100;
})();
var l101 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l101).fvalue = (function(v187){
        ((v187)["fname"] = "LIST-ALL-PACKAGES");
        return v187;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
                return (function(){
                    var symbol = l100;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })();
        })();
    }));
    return l101;
})();
var l102 = {name: "MAKE-PACKAGE"};
var l103 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l102).fvalue = (function(v192){
        ((v192)["fname"] = "MAKE-PACKAGE");
        return v192;
    })((function (values,v188,v189){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v189=l3.value;
        default: break;
        }
        return (function(){
                return (function(v190,v191){
                    ((v190)["packageName"] = v188);
                    ((v190)["symbols"] = {});
                    ((v190)["exports"] = {});
                    ((v190)["use"] = v191);
                    ((l100).value = ({car: v190, cdr: (function(){
                        var symbol = l100;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()}));
                    return v190;
                })({},l69.fvalue(pv, (function(){
                    var symbol = l103;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v189));
        })();
    }));
    return l102;
})();
var l104 = {name: "PACKAGEP"};
(function(){
    (l104).fvalue = (function(v194){
        ((v194)["fname"] = "PACKAGEP");
        return v194;
    })((function (values,v193){
        checkArgs(arguments, 2);
        return (function(){
                return (((typeof (v193) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v193))?l4.value: l3.value) : l3.value);
        })();
    }));
    return l104;
})();
var l105 = {name: "FIND-PACKAGE"};
var l106 = {name: "PACKAGE-NAME"};
(function(){
    (l105).fvalue = (function(v199){
        ((v199)["fname"] = "FIND-PACKAGE");
        return v199;
    })((function (values,v195){
        checkArgs(arguments, 2);
        return (function(){
            try {
                (l104.fvalue(pv, v195) !== l3.value ? (function(){
                    throw ({type: 'block', id: 86, value: v195, message: 'Return from unknown block FIND-PACKAGE.'})
                })() : l3.value);
                return (function(v196){
                    return (function(){
                        try {
                            return (function(v197,v198){
                                (function(){
                                    while(v197 !== l3.value){
                                        (v198 = (function(){
                                            var tmp = v197;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (l93.fvalue(pv, l106.fvalue(pv, v198), v196) !== l3.value ? (function(){
                                                throw ({type: 'block', id: 87, value: v198, message: 'Return from unknown block NIL.'})
                                            })() : l3.value);
                                            return l3.value;
                                        })();
                                        (v197 = (function(){
                                            var tmp = v197;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })((function(){
                                var symbol = l100;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(),l3.value);
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 87)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                })(l92.fvalue(pv, v195));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 86)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
    return l105;
})();
(function(){
    (l103).fvalue = (function(v202){
        ((v202)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v202;
    })((function (values,v200){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v201){
                    return (v201 !== l3.value ? v201 : (function(){
                        throw "Package unknown.";
                    })());
                })(l105.fvalue(pv, v200));
        })();
    }));
    return l103;
})();
(function(){
    (l106).fvalue = (function(v205){
        ((v205)["fname"] = "PACKAGE-NAME");
        return v205;
    })((function (values,v203){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v204){
                    return (function(){
                        var tmp = (v204)["packageName"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
                })(l103.fvalue(pv, v203));
        })();
    }));
    return l106;
})();
var l107 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l107).fvalue = (function(v208){
        ((v208)["fname"] = "%PACKAGE-SYMBOLS");
        return v208;
    })((function (values,v206){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v207){
                    return (function(){
                        var tmp = (v207)["symbols"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
                })(l103.fvalue(pv, v206));
        })();
    }));
    return l107;
})();
var l108 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l108).fvalue = (function(v211){
        ((v211)["fname"] = "PACKAGE-USE-LIST");
        return v211;
    })((function (values,v209){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v210){
                    return (function(){
                        var tmp = (v210)["use"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
                })(l103.fvalue(pv, v209));
        })();
    }));
    return l108;
})();
var l109 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l109).fvalue = (function(v214){
        ((v214)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v214;
    })((function (values,v212){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v213){
                    return (function(){
                        var tmp = (v213)["exports"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
                })(l103.fvalue(pv, v212));
        })();
    }));
    return l109;
})();
var l110 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l110.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l110).value = l102.fvalue(pv, "CL")));
    return l110;
})();
var l111 = {name: "*USER-PACKAGE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l111).value = l102.fvalue(pv, "CL-USER", l42.fvalue(pv, (function(){
        var symbol = l110;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()))));
    return l111;
})();
var l112 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l112.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l112).value = l102.fvalue(pv, "KEYWORD")));
    return l112;
})();
var l113 = {name: "KEYWORDP"};
var l114 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l113).fvalue = (function(v216){
        ((v216)["fname"] = "KEYWORDP");
        return v216;
    })((function (values,v215){
        checkArgs(arguments, 2);
        return (function(){
                return (((function(){
                    var tmp = v215;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? ((l114.fvalue(pv, v215) === (function(){
                    var symbol = l112;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())?l4.value: l3.value) : l3.value);
        })();
    }));
    return l113;
})();
var l115 = {name: "*PACKAGE*"};
(function(){
    (((l115.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l115).value = (function(){
        var symbol = l110;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()));
    return l115;
})();
var l116 = {name: "IN-PACKAGE"};
l116;
var l117 = {name: "%INTERN-SYMBOL"};
(function(){
    (l117).fvalue = (function(v219){
        ((v219)["fname"] = "%INTERN-SYMBOL");
        return v219;
    })((function (values,v217){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v218){
                    ((v217)["package"] = (function(){
                        var symbol = l110;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    return ((v218)[(v217).name] = v217);
                })(l107.fvalue(pv, (function(){
                    var symbol = l110;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
        })();
    }));
    return l117;
})();
var l118 = {name: "%FIND-SYMBOL"};
(function(){
    (l118).fvalue = (function(v227){
        ((v227)["fname"] = "%FIND-SYMBOL");
        return v227;
    })((function (values,v220,v221){
        checkArgs(arguments, 3);
        return (function(){
            try {
                return (function(v222){
                    return (function(v223){
                        return ((((v220) in (v223))?l4.value: l3.value) !== l3.value ? ({car: (function(){
                            var tmp = (v223)[v220];
                            return tmp == undefined? l3.value: tmp ;
                        })(), cdr: l4.value}) : (function(){
                                return (function(v224,v225){
                                    (function(){
                                        while(v224 !== l3.value){
                                            (v225 = (function(){
                                                var tmp = v224;
                                                return tmp === l3.value? l3.value: tmp.car;
                                            })());
                                            (function(){
                                                (function(v226){
                                                    return ((((v220) in (v226))?l4.value: l3.value) !== l3.value ? (function(){
                                                        throw ({type: 'block', id: 95, value: ({car: (function(){
                                                            var tmp = (v226)[v220];
                                                            return tmp == undefined? l3.value: tmp ;
                                                        })(), cdr: l4.value}), message: 'Return from unknown block %FIND-SYMBOL.'})
                                                    })() : l3.value);
                                                })(l109.fvalue(pv, v225));
                                                return l3.value;
                                            })();
                                            (v224 = (function(){
                                                var tmp = v224;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })());
                                        }return l3.value;
                                    })();
                                    return ({car: l3.value, cdr: l3.value});
                                })(l108.fvalue(pv, v222),l3.value);
                        })());
                    })(l107.fvalue(pv, v222));
                })(l103.fvalue(pv, v221));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 95)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
    return l118;
})();
var l119 = {name: "FIND-SYMBOL"};
(function(){
    (l119).fvalue = (function(v230){
        ((v230)["fname"] = "FIND-SYMBOL");
        return v230;
    })((function (values,v228,v229){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v229=(function(){
            var symbol = l115;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
                return (function(){
                    var tmp = l118.fvalue(pv, v228, v229);
                    return tmp === l3.value? l3.value: tmp.car;
                })();
        })();
    }));
    return l119;
})();
var l120 = {name: "INTERN"};
var l121 = {name: "EXPORT"};
(function(){
    (l120).fvalue = (function(v237){
        ((v237)["fname"] = "INTERN");
        return v237;
    })((function (values,v231,v232){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v232=(function(){
            var symbol = l115;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
        default: break;
        }
        return (function(){
                return (function(v233){
                    return (function(v234){
                        return ((function(){
                            var tmp = v234;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            var tmp = v234;
                            return tmp === l3.value? l3.value: tmp.car;
                        })() : (function(v235){
                            (function(){
                                var tmp = (v235)[v231];
                                return tmp == undefined? l3.value: tmp ;
                            })();
                            return (function(v236){
                                ((v236)["package"] = v233);
                                (((v233 === (function(){
                                    var symbol = l112;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())?l4.value: l3.value) !== l3.value ? (function(){
                                    ((v236)["value"] = v236);
                                    return l121.fvalue(pv, l42.fvalue(pv, v236), v233);
                                })() : l3.value);
                                return ((v235)[v231] = v236);
                            })((function(){
                                var name = v231;
                                if (typeof name != 'string')
                                    throw 'The value ' + name + ' is not a type string.';
                                return ({name: name});
                            })());
                        })(l107.fvalue(pv, v233)));
                    })(l118.fvalue(pv, v231, v233));
                })(l103.fvalue(pv, v232));
        })();
    }));
    return l120;
})();
(function(){
    (l114).fvalue = (function(v239){
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
    return l114;
})();
(function(){
    (l121).fvalue = (function(v245){
        ((v245)["fname"] = "EXPORT");
        return v245;
    })((function (values,v240,v241){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v241=(function(){
            var symbol = l115;
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
                })(l109.fvalue(pv, v241));
        })();
    }));
    return l121;
})();
var l122 = {name: "GET-UNIVERSAL-TIME"};
(function(){
    (l122).fvalue = (function(v246){
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
    return l122;
})();
var l123 = {name: "*NEWLINE*"};
(function(){
    (((l123.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l123).value = l92.fvalue(pv, l72.fvalue(pv, 10))));
    return l123;
})();
var l124 = {name: "CONCAT"};
(function(){
    (l124).fvalue = (function(v248){
        ((v248)["fname"] = "CONCAT");
        return v248;
    })((function (values){
        var v247= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v247 = {car: arguments[i], cdr: 
        v247};
        return (function(){
                return l58.fvalue(values, (function(){
                    var symbol = l68;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v247, "");
        })();
    }));
    return l124;
})();
var l125 = {name: "CONCATF"};
l125;
var l126 = {name: "JOIN"};
(function(){
    (l126).fvalue = (function(v251){
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
                return (l11.fvalue(pv, v249) !== l3.value ? "" : (l11.fvalue(pv, (function(){
                    var tmp = v249;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) !== l3.value ? (function(){
                    var tmp = v249;
                    return tmp === l3.value? l3.value: tmp.car;
                })() : l124.fvalue(values, (function(){
                    var tmp = v249;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), v250, l126.fvalue(pv, (function(){
                    var tmp = v249;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), v250))));
        })();
    }));
    return l126;
})();
var l127 = {name: "JOIN-TRAILING"};
(function(){
    (l127).fvalue = (function(v254){
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
                return (l11.fvalue(pv, v252) !== l3.value ? "" : l124.fvalue(values, (function(){
                    var tmp = v252;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), v253, l127.fvalue(pv, (function(){
                    var tmp = v252;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), v253)));
        })();
    }));
    return l127;
})();
var l128 = {name: "MAPCONCAT"};
(function(){
    (l128).fvalue = (function(v257){
        ((v257)["fname"] = "MAPCONCAT");
        return v257;
    })((function (values,v255,v256){
        checkArgs(arguments, 3);
        return (function(){
                return l126.fvalue(values, l69.fvalue(pv, v255, v256));
        })();
    }));
    return l128;
})();
var l129 = {name: "VECTOR-TO-LIST"};
(function(){
    (l129).fvalue = (function(v263){
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
                                return l64.fvalue(values, v259);
                            })(0,v260);
                    })();
                })(l3.value,l67.fvalue(pv, v258));
        })();
    }));
    return l129;
})();
var l130 = {name: "LIST-TO-VECTOR"};
(function(){
    (l130).fvalue = (function(v269){
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
                    for (var i = 0; i < l67.fvalue(pv, v264); i++)
                        r.push(l3.value);
                    return r;
                })(),0);
        })();
    }));
    return l130;
})();
var l131 = {name: "VALUES-LIST"};
(function(){
    (l131).fvalue = (function(v271){
        ((v271)["fname"] = "VALUES-LIST");
        return v271;
    })((function (values,v270){
        checkArgs(arguments, 2);
        return (function(){
                return values.apply(this, l130.fvalue(pv, v270));
        })();
    }));
    return l131;
})();
var l132 = {name: "VALUES"};
(function(){
    (l132).fvalue = (function(v273){
        ((v273)["fname"] = "VALUES");
        return v273;
    })((function (values){
        var v272= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v272 = {car: arguments[i], cdr: 
        v272};
        return (function(){
                return l131.fvalue(values, v272);
        })();
    }));
    return l132;
})();
var l133 = {name: "MULTIPLE-VALUE-BIND"};
l133;
var l134 = {name: "MULTIPLE-VALUE-LIST"};
l134;
var l135 = {name: "INDENT"};
(function(){
    (l135).fvalue = (function(v280){
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
                        (l76.fvalue(pv, l67.fvalue(pv, v275)) !== l3.value ? (v276 = l124.fvalue(pv, v276, "    ")) : l3.value);
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
                                            return (v276 = l124.fvalue(pv, v276, v279));
                                        })(((l74.fvalue(pv, (function(){
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
                                            var x2 = l22.fvalue(pv, v278);
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value ? l26.fvalue(pv, l74.fvalue(pv, (function(){
                                            var string = v275;
                                            var index = l21.fvalue(pv, v277);
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 10)) : l3.value) : l3.value) !== l3.value ? l124.fvalue(pv, l92.fvalue(pv, 10), "    ") : l92.fvalue(pv, (function(){
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
                    })("",0,l67.fvalue(pv, v275));
                })(l126.fvalue(pv, v274));
        })();
    }));
    return l135;
})();
(function(){
    (l16).fvalue = (function(v284){
        ((v284)["fname"] = "INTEGER-TO-STRING");
        return v284;
    })((function (values,v281){
        checkArgs(arguments, 2);
        return (function(){
                return (l23.fvalue(pv, v281) !== l3.value ? "0" : (l77.fvalue(pv, v281) !== l3.value ? l124.fvalue(values, "-", l16.fvalue(pv, (function(){
                    var x1 = 0;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v281;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1-x2;
                })())) : (function(v282){
                    (function(){
                            return (function(){
                                while(l26.fvalue(pv, l23.fvalue(pv, v281)) !== l3.value){
                                    (v282 = ({car: (function(){
                                        var x = v281;
                                        var y = 10;
                                        if (typeof x != 'number')
                                            throw 'The value ' + x + ' is not a type number.';
                                        if (typeof y != 'number')
                                            throw 'The value ' + y + ' is not a type number.';
                                        return x%y;
                                    })(), cdr: v282}));
                                    (v281 = l24.fvalue(pv, v281, 10));
                                }return l3.value;
                            })();
                    })();
                    return l126.fvalue(values, l69.fvalue(pv, (function (values,v283){
                        checkArgs(arguments, 2);
                        return l92.fvalue(values, (function(){
                            var string = "0123456789";
                            var index = v283;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                    }), v282));
                })(l3.value)));
        })();
    }));
    return l16;
})();
var l136 = {name: "JS!BOOL"};
var l137 = {name: "LS-COMPILE"};
(function(){
    (l136).fvalue = (function(v286){
        ((v286)["fname"] = "JS!BOOL");
        return v286;
    })((function (values,v285){
        checkArgs(arguments, 2);
        return (function(){
                return l124.fvalue(values, "(", v285, "?", l137.fvalue(pv, l4.value), ": ", l137.fvalue(pv, l3.value), ")");
        })();
    }));
    return l136;
})();
var l138 = {name: "JS!SELFCALL"};
l138;
var l139 = {name: "PRIN1-TO-STRING"};
var l140 = {name: "ESCAPE-STRING"};
(function(){
    (l139).fvalue = (function(v292){
        ((v292)["fname"] = "PRIN1-TO-STRING");
        return v292;
    })((function (values,v287){
        checkArgs(arguments, 2);
        return (function(){
                return (((function(){
                    var tmp = v287;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? ((function(){
                    var tmp = l118.fvalue(pv, (v287).name, (function(){
                        var symbol = l115;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    return tmp === l3.value? l3.value: tmp.cdr;
                })() !== l3.value ? (v287).name : (function(v288,v289){
                    return l124.fvalue(values, (l11.fvalue(pv, v288) !== l3.value ? "#" : (((v288 === l105.fvalue(pv, "KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l106.fvalue(pv, v288))), ":", v289);
                })(l114.fvalue(pv, v287),(v287).name)) : (l75.fvalue(pv, v287) !== l3.value ? l16.fvalue(values, v287) : (((typeof(v287) == "string")?l4.value: l3.value) !== l3.value ? l124.fvalue(values, "\"", l140.fvalue(pv, v287), "\"") : (((typeof v287 == 'function')?l4.value: l3.value) !== l3.value ? (function(v290){
                    return (v290 !== l3.value ? l124.fvalue(values, "#<FUNCTION ", v290, ">") : l124.fvalue(values, "#<FUNCTION>"));
                })((function(){
                    var tmp = (v287)["fname"];
                    return tmp == undefined? l3.value: tmp ;
                })()) : (l57.fvalue(pv, v287) !== l3.value ? l124.fvalue(values, "(", l127.fvalue(pv, l69.fvalue(pv, (function(){
                    var symbol = l139;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l81.fvalue(pv, v287)), " "), (function(v291){
                    return (l11.fvalue(pv, (function(){
                        var tmp = v291;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? l139.fvalue(pv, (function(){
                        var tmp = v291;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) : l124.fvalue(pv, l139.fvalue(pv, (function(){
                        var tmp = v291;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), " . ", l139.fvalue(pv, (function(){
                        var tmp = v291;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())));
                })(l80.fvalue(pv, v287)), ")") : (((function(){
                    var x = v287;
                    return typeof x === 'object' && 'length' in x;
                })()?l4.value: l3.value) !== l3.value ? l124.fvalue(values, "#", l139.fvalue(pv, l129.fvalue(pv, v287))) : (l104.fvalue(pv, v287) !== l3.value ? l124.fvalue(values, "#<PACKAGE ", l106.fvalue(pv, v287), ">") : l3.value)))))));
        })();
    }));
    return l139;
})();
(function(){
    (l96).fvalue = (function(v294){
        ((v294)["fname"] = "WRITE-LINE");
        return v294;
    })((function (values,v293){
        checkArgs(arguments, 2);
        return (function(){
                (function(){
                    var x = v293;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                (function(){
                    var x = (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                return v293;
        })();
    }));
    return l96;
})();
var l141 = {name: "WARN"};
(function(){
    (l141).fvalue = (function(v296){
        ((v296)["fname"] = "WARN");
        return v296;
    })((function (values,v295){
        checkArgs(arguments, 2);
        return (function(){
                (function(){
                    var x = "WARNING: ";
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                return l96.fvalue(values, v295);
        })();
    }));
    return l141;
})();
var l142 = {name: "PRINT"};
(function(){
    (l142).fvalue = (function(v298){
        ((v298)["fname"] = "PRINT");
        return v298;
    })((function (values,v297){
        checkArgs(arguments, 2);
        return (function(){
                l96.fvalue(pv, l139.fvalue(pv, v297));
                return v297;
        })();
    }));
    return l142;
})();
var l143 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l143).fvalue = (function(v300){
        ((v300)["fname"] = "MAKE-STRING-STREAM");
        return v300;
    })((function (values,v299){
        checkArgs(arguments, 2);
        return (function(){
                return ({car: v299, cdr: 0});
        })();
    }));
    return l143;
})();
var l144 = {name: "%PEEK-CHAR"};
(function(){
    (l144).fvalue = (function(v302){
        ((v302)["fname"] = "%PEEK-CHAR");
        return v302;
    })((function (values,v301){
        checkArgs(arguments, 2);
        return (function(){
                return ((function(){
                    var x1 = (function(){
                        var tmp = v301;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = l67.fvalue(pv, (function(){
                        var tmp = v301;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<x2?l4.value: l3.value);
                })() !== l3.value ? (function(){
                    var string = (function(){
                        var tmp = v301;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                    var index = (function(){
                        var tmp = v301;
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
    return l144;
})();
var l145 = {name: "%READ-CHAR"};
(function(){
    (l145).fvalue = (function(v305){
        ((v305)["fname"] = "%READ-CHAR");
        return v305;
    })((function (values,v303){
        checkArgs(arguments, 2);
        return (function(){
                return ((function(){
                    var x1 = (function(){
                        var tmp = v303;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = l67.fvalue(pv, (function(){
                        var tmp = v303;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return (x1<x2?l4.value: l3.value);
                })() !== l3.value ? (function(v304){
                    (function(){
                        var x = v303;
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.cdr = l21.fvalue(pv, (function(){
                            var tmp = v303;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })()));
                    })();
                    return v304;
                })((function(){
                    var string = (function(){
                        var tmp = v303;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                    var index = (function(){
                        var tmp = v303;
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
    return l145;
})();
var l146 = {name: "WHITESPACEP"};
(function(){
    (l146).fvalue = (function(v309){
        ((v309)["fname"] = "WHITESPACEP");
        return v309;
    })((function (values,v306){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v307){
                    return (v307 !== l3.value ? v307 : (function(v308){
                        return (v308 !== l3.value ? v308 : l74.fvalue(values, v306, 9));
                    })(l74.fvalue(pv, v306, 10)));
                })(l74.fvalue(pv, v306, 32));
        })();
    }));
    return l146;
})();
var l147 = {name: "SKIP-WHITESPACES"};
(function(){
    (l147).fvalue = (function(v312){
        ((v312)["fname"] = "SKIP-WHITESPACES");
        return v312;
    })((function (values,v310){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v311){
                    (v311 = l144.fvalue(pv, v310));
                    return (function(){
                            return (function(){
                                while((v311 !== l3.value ? l146.fvalue(pv, v311) : l3.value) !== l3.value){
                                    l145.fvalue(pv, v310);
                                    (v311 = l144.fvalue(pv, v310));
                                }return l3.value;
                            })();
                    })();
                })(l3.value);
        })();
    }));
    return l147;
})();
var l148 = {name: "TERMINALP"};
(function(){
    (l148).fvalue = (function(v317){
        ((v317)["fname"] = "TERMINALP");
        return v317;
    })((function (values,v313){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v314){
                    return (v314 !== l3.value ? v314 : (function(v315){
                        return (v315 !== l3.value ? v315 : (function(v316){
                            return (v316 !== l3.value ? v316 : l74.fvalue(values, 40, v313));
                        })(l74.fvalue(pv, 41, v313)));
                    })(l146.fvalue(pv, v313)));
                })(l11.fvalue(pv, v313));
        })();
    }));
    return l148;
})();
var l149 = {name: "READ-UNTIL"};
(function(){
    (l149).fvalue = (function(v322){
        ((v322)["fname"] = "READ-UNTIL");
        return v322;
    })((function (values,v318,v319){
        checkArgs(arguments, 3);
        return (function(){
                return (function(v320,v321){
                    (v321 = l144.fvalue(pv, v318));
                    (function(){
                            return (function(){
                                while((v321 !== l3.value ? l26.fvalue(pv, (v319)(pv, v321)) : l3.value) !== l3.value){
                                    (v320 = l124.fvalue(pv, v320, l92.fvalue(pv, v321)));
                                    l145.fvalue(pv, v318);
                                    (v321 = l144.fvalue(pv, v318));
                                }return l3.value;
                            })();
                    })();
                    return v320;
                })("",l3.value);
        })();
    }));
    return l149;
})();
var l150 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l150).fvalue = (function(v326){
        ((v326)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v326;
    })((function (values,v323){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v324){
                    l147.fvalue(pv, v323);
                    (v324 = l144.fvalue(pv, v323));
                    return (function(){
                            return (function(){
                                while((v324 !== l3.value ? l74.fvalue(pv, v324, 59) : l3.value) !== l3.value){
                                    l149.fvalue(pv, v323, (function (values,v325){
                                        checkArgs(arguments, 2);
                                        return l74.fvalue(values, v325, 10);
                                    }));
                                    l147.fvalue(pv, v323);
                                    (v324 = l144.fvalue(pv, v323));
                                }return l3.value;
                            })();
                    })();
                })(l3.value);
        })();
    }));
    return l150;
})();
var l151 = {name: "%READ-LIST"};
var l152 = {name: "LS-READ"};
(function(){
    (l151).fvalue = (function(v330){
        ((v330)["fname"] = "%READ-LIST");
        return v330;
    })((function (values,v327){
        checkArgs(arguments, 2);
        return (function(){
                l150.fvalue(pv, v327);
                return (function(v328){
                    return (l11.fvalue(pv, v328) !== l3.value ? (function(){
                        throw "Unspected EOF";
                    })() : (l74.fvalue(pv, v328, 41) !== l3.value ? (function(){
                        l145.fvalue(pv, v327);
                        return l3.value;
                    })() : (l74.fvalue(pv, v328, 46) !== l3.value ? (function(){
                        l145.fvalue(pv, v327);
                        return (function(v329){
                            l150.fvalue(pv, v327);
                            (l74.fvalue(pv, l145.fvalue(pv, v327), 41) !== l3.value ? l3.value : (function(){
                                throw "')' was expected.";
                            })());
                            return v329;
                        })(l152.fvalue(pv, v327));
                    })() : ({car: l152.fvalue(pv, v327), cdr: l151.fvalue(pv, v327)}))));
                })(l144.fvalue(pv, v327));
        })();
    }));
    return l151;
})();
var l153 = {name: "READ-STRING"};
(function(){
    (l153).fvalue = (function(v334){
        ((v334)["fname"] = "READ-STRING");
        return v334;
    })((function (values,v331){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v332,v333){
                    (v333 = l145.fvalue(pv, v331));
                    (function(){
                            return (function(){
                                while(l26.fvalue(pv, l25.fvalue(pv, v333, 34)) !== l3.value){
                                    (l11.fvalue(pv, v333) !== l3.value ? (function(){
                                        throw "Unexpected EOF";
                                    })() : l3.value);
                                    (l25.fvalue(pv, v333, 92) !== l3.value ? (v333 = l145.fvalue(pv, v331)) : l3.value);
                                    (v332 = l124.fvalue(pv, v332, l92.fvalue(pv, v333)));
                                    (v333 = l145.fvalue(pv, v331));
                                }return l3.value;
                            })();
                    })();
                    return v332;
                })("",l3.value);
        })();
    }));
    return l153;
})();
var l154 = {name: "READ-SHARP"};
(function(){
    (l154).fvalue = (function(v339){
        ((v339)["fname"] = "READ-SHARP");
        return v339;
    })((function (values,v335){
        checkArgs(arguments, 2);
        return (function(){
                l145.fvalue(pv, v335);
                return (function(v336){
                    return (l25.fvalue(pv, v336, 39) !== l3.value ? l42.fvalue(values, l98, l152.fvalue(pv, v335)) : (l25.fvalue(pv, v336, 40) !== l3.value ? l130.fvalue(values, l151.fvalue(pv, v335)) : (l25.fvalue(pv, v336, 58) !== l3.value ? (function(){
                        var name = (function(){
                            var x = l149.fvalue(pv, v335, (function(){
                                var symbol = l148;
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
                    })() : (l25.fvalue(pv, v336, 92) !== l3.value ? (function(v337){
                        return (l93.fvalue(pv, v337, "space") !== l3.value ? l73.fvalue(values, 32) : (l93.fvalue(pv, v337, "tab") !== l3.value ? l73.fvalue(values, 9) : (l93.fvalue(pv, v337, "newline") !== l3.value ? l73.fvalue(values, 10) : l73.fvalue(values, (function(){
                            var string = v337;
                            var index = 0;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })()))));
                    })(l124.fvalue(pv, l92.fvalue(pv, l145.fvalue(pv, v335)), l149.fvalue(pv, v335, (function(){
                        var symbol = l148;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()))) : (l25.fvalue(pv, v336, 43) !== l3.value ? (function(v338){
                        return (l93.fvalue(pv, v338, "common-lisp") !== l3.value ? (function(){
                            l152.fvalue(pv, v335);
                            return l152.fvalue(values, v335);
                        })() : (l93.fvalue(pv, v338, "ecmalisp") !== l3.value ? l152.fvalue(values, v335) : (function(){
                            throw "Unknown reader form.";
                        })()));
                    })(l149.fvalue(pv, v335, (function(){
                        var symbol = l148;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })())) : (function(){
                        throw "ECASE expression failed.";
                    })())))));
                })(l145.fvalue(pv, v335));
        })();
    }));
    return l154;
})();
var l155 = {name: "READ-SYMBOL"};
(function(){
    (l155).fvalue = (function(v347){
        ((v347)["fname"] = "READ-SYMBOL");
        return v347;
    })((function (values,v340){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v341,v342,v343,v344,v345){
                    (v345 = 0);
                    (function(){
                            return (function(){
                                while(((function(){
                                    var x1 = v345;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v341;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value ? l26.fvalue(pv, l74.fvalue(pv, (function(){
                                    var string = v340;
                                    var index = v345;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })(), 58)) : l3.value) !== l3.value){
                                    (v345 = (function(){
                                        var x1 = v345;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                }return l3.value;
                            })();
                    })();
                    ((function(){
                        var x1 = v345;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v341;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })() !== l3.value ? (function(){
                        (v343 = v340);
                        (v342 = (function(){
                            var symbol = l115;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return (v344 = l4.value);
                    })() : (function(){
                        (l23.fvalue(pv, v345) !== l3.value ? (v342 = "KEYWORD") : (v342 = (function(){
                            var x = l87.fvalue(pv, v340, 0, v345);
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })()));
                        (v345 = (function(){
                            var x1 = v345;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })());
                        (l74.fvalue(pv, (function(){
                            var string = v340;
                            var index = v345;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })(), 58) !== l3.value ? (function(){
                            (v344 = l4.value);
                            return (v345 = (function(){
                                var x1 = v345;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                        })() : l3.value);
                        return (v343 = l87.fvalue(pv, v340, v345));
                    })());
                    (v343 = (function(){
                        var x = v343;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.toUpperCase();
                    })());
                    (v342 = l105.fvalue(pv, v342));
                    return ((function(v346){
                        return (v346 !== l3.value ? v346 : ((v342 === l105.fvalue(pv, "KEYWORD"))?l4.value: l3.value));
                    })(v344) !== l3.value ? l120.fvalue(values, v343, v342) : l119.fvalue(values, v343, v342));
                })(l67.fvalue(pv, v340),l3.value,l3.value,l3.value,l3.value);
        })();
    }));
    return l155;
})();
var l156 = {name: "*EOF*"};
(function(){
    (((l156.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l156).value = l15.fvalue(pv)));
    return l156;
})();
var l157 = {name: "QUOTE"};
var l158 = {name: "BACKQUOTE"};
var l159 = {name: "UNQUOTE-SPLICING"};
var l160 = {name: "UNQUOTE"};
(function(){
    (l152).fvalue = (function(v352){
        ((v352)["fname"] = "LS-READ");
        return v352;
    })((function (values,v348){
        checkArgs(arguments, 2);
        return (function(){
                l150.fvalue(pv, v348);
                return (function(v349){
                    return ((function(v350){
                        return (v350 !== l3.value ? v350 : l74.fvalue(pv, v349, 41));
                    })(l11.fvalue(pv, v349)) !== l3.value ? (function(){
                        var symbol = l156;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() : (l74.fvalue(pv, v349, 40) !== l3.value ? (function(){
                        l145.fvalue(pv, v348);
                        return l151.fvalue(values, v348);
                    })() : (l74.fvalue(pv, v349, 39) !== l3.value ? (function(){
                        l145.fvalue(pv, v348);
                        return l42.fvalue(values, l157, l152.fvalue(pv, v348));
                    })() : (l74.fvalue(pv, v349, 96) !== l3.value ? (function(){
                        l145.fvalue(pv, v348);
                        return l42.fvalue(values, l158, l152.fvalue(pv, v348));
                    })() : (l74.fvalue(pv, v349, 34) !== l3.value ? (function(){
                        l145.fvalue(pv, v348);
                        return l153.fvalue(values, v348);
                    })() : (l74.fvalue(pv, v349, 44) !== l3.value ? (function(){
                        l145.fvalue(pv, v348);
                        return (l25.fvalue(pv, l144.fvalue(pv, v348), 64) !== l3.value ? (function(){
                            l145.fvalue(pv, v348);
                            return l42.fvalue(values, l159, l152.fvalue(pv, v348));
                        })() : l42.fvalue(values, l160, l152.fvalue(pv, v348)));
                    })() : (l74.fvalue(pv, v349, 35) !== l3.value ? l154.fvalue(values, v348) : (function(v351){
                        return (l90.fvalue(pv, (function(){
                            var symbol = l86;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v351) !== l3.value ? l88.fvalue(values, v351) : l155.fvalue(values, v351));
                    })(l149.fvalue(pv, v348, (function(){
                        var symbol = l148;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })())))))))));
                })(l144.fvalue(pv, v348));
        })();
    }));
    return l152;
})();
var l161 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l161).fvalue = (function(v354){
        ((v354)["fname"] = "LS-READ-FROM-STRING");
        return v354;
    })((function (values,v353){
        checkArgs(arguments, 2);
        return (function(){
                return l152.fvalue(values, l143.fvalue(pv, v353));
        })();
    }));
    return l161;
})();
var l162 = {name: "*MULTIPLE-VALUE-P*"};
(function(){
    (((l162.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l162).value = l3.value));
    return l162;
})();
var l163 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l163.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l163).value = l3));
    return l163;
})();
var l164 = {name: "MAKE-BINDING"};
(function(){
    (l164).fvalue = (function(v359){
        ((v359)["fname"] = "MAKE-BINDING");
        return v359;
    })((function (values,v355,v356,v357,v358){
        checkArgsAtLeast(arguments, 4);
        checkArgsAtMost(arguments, 5);
        switch(arguments.length-1){
        case 3:
        v358=l3.value;
        default: break;
        }
        return (function(){
                return l42.fvalue(values, v355, v356, v357, v358);
        })();
    }));
    return l164;
})();
var l165 = {name: "BINDING-NAME"};
(function(){
    (l165).fvalue = (function(v361){
        ((v361)["fname"] = "BINDING-NAME");
        return v361;
    })((function (values,v360){
        checkArgs(arguments, 2);
        return (function(){
                return l38.fvalue(values, v360);
        })();
    }));
    return l165;
})();
var l166 = {name: "BINDING-TYPE"};
(function(){
    (l166).fvalue = (function(v363){
        ((v363)["fname"] = "BINDING-TYPE");
        return v363;
    })((function (values,v362){
        checkArgs(arguments, 2);
        return (function(){
                return l39.fvalue(values, v362);
        })();
    }));
    return l166;
})();
var l167 = {name: "BINDING-VALUE"};
(function(){
    (l167).fvalue = (function(v365){
        ((v365)["fname"] = "BINDING-VALUE");
        return v365;
    })((function (values,v364){
        checkArgs(arguments, 2);
        return (function(){
                return l40.fvalue(values, v364);
        })();
    }));
    return l167;
})();
var l168 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l168).fvalue = (function(v367){
        ((v367)["fname"] = "BINDING-DECLARATIONS");
        return v367;
    })((function (values,v366){
        checkArgs(arguments, 2);
        return (function(){
                return l41.fvalue(values, v366);
        })();
    }));
    return l168;
})();
var l169 = {name: "SET-BINDING-VALUE"};
(function(){
    (l169).fvalue = (function(v370){
        ((v370)["fname"] = "SET-BINDING-VALUE");
        return v370;
    })((function (values,v368,v369){
        checkArgs(arguments, 3);
        return (function(){
                return (function(){
                    var x = l34.fvalue(pv, v368);
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = v369);
                })();
        })();
    }));
    return l169;
})();
var l170 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l170).fvalue = (function(v373){
        ((v373)["fname"] = "SET-BINDING-DECLARATIONS");
        return v373;
    })((function (values,v371,v372){
        checkArgs(arguments, 3);
        return (function(){
                return (function(){
                    var x = l36.fvalue(pv, v371);
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.car = v372);
                })();
        })();
    }));
    return l170;
})();
var l171 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l171).fvalue = (function(v376){
        ((v376)["fname"] = "PUSH-BINDING-DECLARATION");
        return v376;
    })((function (values,v374,v375){
        checkArgs(arguments, 3);
        return (function(){
                return l170.fvalue(values, v375, ({car: v374, cdr: l168.fvalue(pv, v375)}));
        })();
    }));
    return l171;
})();
var l172 = {name: "MAKE-LEXENV"};
(function(){
    (l172).fvalue = (function(v377){
        ((v377)["fname"] = "MAKE-LEXENV");
        return v377;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
                return l42.fvalue(values, l3.value, l3.value, l3.value, l3.value);
        })();
    }));
    return l172;
})();
var l173 = {name: "COPY-LEXENV"};
(function(){
    (l173).fvalue = (function(v379){
        ((v379)["fname"] = "COPY-LEXENV");
        return v379;
    })((function (values,v378){
        checkArgs(arguments, 2);
        return (function(){
                return l71.fvalue(values, v378);
        })();
    }));
    return l173;
})();
var l174 = {name: "PUSH-TO-LEXENV"};
var l175 = {name: "BLOCK"};
var l176 = {name: "GOTAG"};
(function(){
    (l174).fvalue = (function(v384){
        ((v384)["fname"] = "PUSH-TO-LEXENV");
        return v384;
    })((function (values,v380,v381,v382){
        checkArgs(arguments, 4);
        return (function(){
                return (function(v383){
                    return (l25.fvalue(pv, v383, l99) !== l3.value ? (function(){
                        var x = v381;
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v380, cdr: (function(){
                            var tmp = v381;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()}));
                    })() : (l25.fvalue(pv, v383, l98) !== l3.value ? (function(){
                        var x = (function(){
                            var tmp = v381;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v380, cdr: l32.fvalue(pv, v381)}));
                    })() : (l25.fvalue(pv, v383, l175) !== l3.value ? (function(){
                        var x = l34.fvalue(pv, v381);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v380, cdr: l35.fvalue(pv, v381)}));
                    })() : (l25.fvalue(pv, v383, l176) !== l3.value ? (function(){
                        var x = l36.fvalue(pv, v381);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v380, cdr: l37.fvalue(pv, v381)}));
                    })() : (function(){
                        throw "ECASE expression failed.";
                    })()))));
                })(v382);
        })();
    }));
    return l174;
})();
var l177 = {name: "EXTEND-LEXENV"};
(function(){
    (l177).fvalue = (function(v391){
        ((v391)["fname"] = "EXTEND-LEXENV");
        return v391;
    })((function (values,v385,v386,v387){
        checkArgs(arguments, 4);
        return (function(){
                return (function(v388){
                    return (function(){
                            return (function(v389,v390){
                                (function(){
                                    while(v389 !== l3.value){
                                        (v390 = (function(){
                                            var tmp = v389;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            l174.fvalue(pv, v390, v388, v387);
                                            return l3.value;
                                        })();
                                        (v389 = (function(){
                                            var tmp = v389;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return v388;
                            })(l64.fvalue(pv, v385),l3.value);
                    })();
                })(l173.fvalue(pv, v386));
        })();
    }));
    return l177;
})();
var l178 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l178).fvalue = (function(v396){
        ((v396)["fname"] = "LOOKUP-IN-LEXENV");
        return v396;
    })((function (values,v392,v393,v394){
        checkArgs(arguments, 4);
        return (function(){
                return l91.fvalue(values, v392, (function(v395){
                    return (l25.fvalue(pv, v395, l99) !== l3.value ? l38.fvalue(pv, v393) : (l25.fvalue(pv, v395, l98) !== l3.value ? l39.fvalue(pv, v393) : (l25.fvalue(pv, v395, l175) !== l3.value ? l40.fvalue(pv, v393) : (l25.fvalue(pv, v395, l176) !== l3.value ? l41.fvalue(pv, v393) : (function(){
                        throw "ECASE expression failed.";
                    })()))));
                })(v394));
        })();
    }));
    return l178;
})();
var l179 = {name: "*ENVIRONMENT*"};
(function(){
    (((l179.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l179).value = l172.fvalue(pv)));
    return l179;
})();
var l180 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l180.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l180).value = 0));
    return l180;
})();
var l181 = {name: "GVARNAME"};
(function(){
    (l181).fvalue = (function(v398){
        ((v398)["fname"] = "GVARNAME");
        return v398;
    })((function (values,v397){
        checkArgs(arguments, 2);
        return (function(){
                return l124.fvalue(values, "v", l16.fvalue(pv, ((l180).value = (function(){
                    var x1 = (function(){
                        var symbol = l180;
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
    return l181;
})();
var l182 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l182).fvalue = (function(v400){
        ((v400)["fname"] = "TRANSLATE-VARIABLE");
        return v400;
    })((function (values,v399){
        checkArgs(arguments, 2);
        return (function(){
                return l167.fvalue(values, l178.fvalue(pv, v399, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l99));
        })();
    }));
    return l182;
})();
var l183 = {name: "EXTEND-LOCAL-ENV"};
var l184 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l183).fvalue = (function(v406){
        ((v406)["fname"] = "EXTEND-LOCAL-ENV");
        return v406;
    })((function (values,v401){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v402){
                    return (function(){
                            return (function(v403,v404){
                                (function(){
                                    while(v403 !== l3.value){
                                        (v404 = (function(){
                                            var tmp = v403;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (function(v405){
                                                return l174.fvalue(pv, v405, v402, l99);
                                            })(l164.fvalue(pv, v404, l184, l181.fvalue(pv, v404)));
                                            return l3.value;
                                        })();
                                        (v403 = (function(){
                                            var tmp = v403;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return v402;
                            })(v401,l3.value);
                    })();
                })(l173.fvalue(pv, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
        })();
    }));
    return l183;
})();
var l185 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l185.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l185).value = l3.value));
    return l185;
})();
var l186 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l186).fvalue = (function(v408){
        ((v408)["fname"] = "TOPLEVEL-COMPILATION");
        return v408;
    })((function (values,v407){
        checkArgs(arguments, 2);
        return (function(){
                return ((l185).value = ({car: v407, cdr: (function(){
                    var symbol = l185;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()}));
        })();
    }));
    return l186;
})();
var l187 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l187).fvalue = (function(v410){
        ((v410)["fname"] = "NULL-OR-EMPTY-P");
        return v410;
    })((function (values,v409){
        checkArgs(arguments, 2);
        return (function(){
                return l23.fvalue(values, l67.fvalue(pv, v409));
        })();
    }));
    return l187;
})();
var l188 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l188).fvalue = (function(v411){
        ((v411)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v411;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
                return l64.fvalue(values, l84.fvalue(pv, (function(){
                    var symbol = l187;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), (function(){
                    var symbol = l185;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
        })();
    }));
    return l188;
})();
var l189 = {name: "%COMPILE-DEFMACRO"};
var l190 = {name: "MACRO"};
(function(){
    (l189).fvalue = (function(v414){
        ((v414)["fname"] = "%COMPILE-DEFMACRO");
        return v414;
    })((function (values,v412,v413){
        checkArgs(arguments, 3);
        return (function(){
                l186.fvalue(pv, l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v412))));
                return l174.fvalue(values, l164.fvalue(pv, v412, l190, v413), (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98);
        })();
    }));
    return l189;
})();
var l191 = {name: "GLOBAL-BINDING"};
(function(){
    (l191).fvalue = (function(v420){
        ((v420)["fname"] = "GLOBAL-BINDING");
        return v420;
    })((function (values,v415,v416,v417){
        checkArgs(arguments, 4);
        return (function(){
                return (function(v418){
                    return (v418 !== l3.value ? v418 : (function(v419){
                        l174.fvalue(pv, v419, (function(){
                            var symbol = l179;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), v417);
                        return v419;
                    })(l164.fvalue(pv, v415, v416, l3.value)));
                })(l178.fvalue(pv, v415, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), v417));
        })();
    }));
    return l191;
})();
var l192 = {name: "CLAIMP"};
(function(){
    (l192).fvalue = (function(v425){
        ((v425)["fname"] = "CLAIMP");
        return v425;
    })((function (values,v421,v422,v423){
        checkArgs(arguments, 4);
        return (function(){
                return (function(v424){
                    return (v424 !== l3.value ? l82.fvalue(values, v423, l168.fvalue(pv, v424)) : l3.value);
                })(l178.fvalue(pv, v421, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), v422));
        })();
    }));
    return l192;
})();
var l193 = {name: "!PROCLAIM"};
var l194 = {name: "SPECIAL"};
var l195 = {name: "NOTINLINE"};
var l196 = {name: "CONSTANT"};
(function(){
    (l193).fvalue = (function(v437){
        ((v437)["fname"] = "!PROCLAIM");
        return v437;
    })((function (values,v426){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v427){
                    return (l25.fvalue(pv, v427, l194) !== l3.value ? (function(){
                            return (function(v428,v429){
                                (function(){
                                    while(v428 !== l3.value){
                                        (v429 = (function(){
                                            var tmp = v428;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (function(v430){
                                                return l171.fvalue(pv, l194, v430);
                                            })(l191.fvalue(pv, v429, l99, l99));
                                            return l3.value;
                                        })();
                                        (v428 = (function(){
                                            var tmp = v428;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })((function(){
                                var tmp = v426;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(),l3.value);
                    })() : (l25.fvalue(pv, v427, l195) !== l3.value ? (function(){
                            return (function(v431,v432){
                                (function(){
                                    while(v431 !== l3.value){
                                        (v432 = (function(){
                                            var tmp = v431;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (function(v433){
                                                return l171.fvalue(pv, l195, v433);
                                            })(l191.fvalue(pv, v432, l98, l98));
                                            return l3.value;
                                        })();
                                        (v431 = (function(){
                                            var tmp = v431;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })((function(){
                                var tmp = v426;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(),l3.value);
                    })() : (l25.fvalue(pv, v427, l196) !== l3.value ? (function(){
                            return (function(v434,v435){
                                (function(){
                                    while(v434 !== l3.value){
                                        (v435 = (function(){
                                            var tmp = v434;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (function(v436){
                                                return l171.fvalue(pv, l196, v436);
                                            })(l191.fvalue(pv, v435, l99, l99));
                                            return l3.value;
                                        })();
                                        (v434 = (function(){
                                            var tmp = v434;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })((function(){
                                var tmp = v426;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(),l3.value);
                    })() : l3.value)));
                })((function(){
                    var tmp = v426;
                    return tmp === l3.value? l3.value: tmp.car;
                })());
        })();
    }));
    return l193;
})();
var l197 = {name: "PROCLAIM"};
(l197).fvalue = (function(){
    var symbol = l193;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l198 = {name: "*COMPILATIONS*"};
(function(){
    (((l198.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l198).value = l3.value));
    return l198;
})();
var l199 = {name: "DEFINE-COMPILATION"};
l199;
var l200 = {name: "IF"};
((l198).value = ({car: l42.fvalue(pv, l200, (function (values,v438,v439,v440){
    checkArgs(arguments, 4);
    return (function(){
            return l124.fvalue(values, "(", l137.fvalue(pv, v438), " !== ", l137.fvalue(pv, l3.value), " ? ", l137.fvalue(pv, v439, (function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), " : ", l137.fvalue(pv, v440, (function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), ")");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l201 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l202 = {name: "&OPTIONAL"};
var l203 = {name: "&REST"};
var l204 = {car: l202, cdr: {car: l203, cdr: l3}};
(function(){
    (((l201.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l201).value = l204));
    return l201;
})();
var l205 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l205).fvalue = (function(v443){
        ((v443)["fname"] = "LIST-UNTIL-KEYWORD");
        return v443;
    })((function (values,v441){
        checkArgs(arguments, 2);
        return (function(){
                return ((function(v442){
                    return (v442 !== l3.value ? v442 : l82.fvalue(pv, (function(){
                        var tmp = v441;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), (function(){
                        var symbol = l201;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })(l11.fvalue(pv, v441)) !== l3.value ? l3.value : ({car: (function(){
                    var tmp = v441;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), cdr: l205.fvalue(pv, (function(){
                    var tmp = v441;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())}));
        })();
    }));
    return l205;
})();
var l206 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l206).fvalue = (function(v445){
        ((v445)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v445;
    })((function (values,v444){
        checkArgs(arguments, 2);
        return (function(){
                return l205.fvalue(values, v444);
        })();
    }));
    return l206;
})();
var l207 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l207).fvalue = (function(v447){
        ((v447)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v447;
    })((function (values,v446){
        checkArgs(arguments, 2);
        return (function(){
                return l69.fvalue(values, (function(){
                    var symbol = l56;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l205.fvalue(pv, (function(){
                    var tmp = l82.fvalue(pv, l202, v446);
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()));
        })();
    }));
    return l207;
})();
var l208 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l208).fvalue = (function(v449){
        ((v449)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v449;
    })((function (values,v448){
        checkArgs(arguments, 2);
        return (function(){
                return l69.fvalue(values, (function(){
                    var symbol = l29;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l207.fvalue(pv, v448));
        })();
    }));
    return l208;
})();
var l209 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l209).fvalue = (function(v452){
        ((v452)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v452;
    })((function (values,v450){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v451){
                    ((function(){
                        var tmp = v451;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })() !== l3.value ? (function(){
                        throw "Bad lambda-list";
                    })() : l3.value);
                    return (function(){
                        var tmp = v451;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })(l205.fvalue(pv, (function(){
                    var tmp = l82.fvalue(pv, l203, v450);
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()));
        })();
    }));
    return l209;
})();
var l210 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l210).fvalue = (function(v455){
        ((v455)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v455;
    })((function (values,v454){
        checkArgsAtLeast(arguments, 2);
        var v453= l3.value;
        for (var i = arguments.length-1; i>=2; i--)
            v453 = {car: arguments[i], cdr: 
        v453};
        return (function(){
                return (v454 !== l3.value ? l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var func = ", l126.fvalue(pv, v453), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "func.docstring = '", v454, "';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return func;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()") : l126.fvalue(values, v453));
        })();
    }));
    return l210;
})();
var l211 = {name: "LAMBDA-CHECK-ARGUMENT-COUNT"};
var l212 = {name: "N/A"};
(function(){
    (l211).fvalue = (function(v461){
        ((v461)["fname"] = "LAMBDA-CHECK-ARGUMENT-COUNT");
        return v461;
    })((function (values,v456,v457,v458){
        checkArgs(arguments, 4);
        return (function(){
                return (function(v459,v460){
                    return (function(){
                        try {
                            (((function(){
                                var x1 = 1;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v459;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value ? l25.fvalue(pv, v459, v460) : l3.value) !== l3.value ? (function(){
                                throw ({type: 'block', id: 177, value: l124.fvalue(pv, "checkArgs(arguments, ", l16.fvalue(pv, v459), ");", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), message: 'Return from unknown block NIL.'})
                            })() : l3.value);
                            return l124.fvalue(values, ((function(){
                                var x1 = 1;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v459;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return (x1<x2?l4.value: l3.value);
                            })() !== l3.value ? l124.fvalue(pv, "checkArgsAtLeast(arguments, ", l16.fvalue(pv, v459), ");", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (((typeof (v460) == "number")?l4.value: l3.value) !== l3.value ? l124.fvalue(pv, "checkArgsAtMost(arguments, ", l16.fvalue(pv, v460), ");", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""));
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 177)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                })(l21.fvalue(pv, v456),(v458 !== l3.value ? l212 : (function(){
                    var x1 = 1;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v456;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    var x3 = v457;
                    if (typeof x3 !== 'number') throw 'Not a number!';
                    return x1+x2+x3;
                })()));
        })();
    }));
    return l211;
})();
var l213 = {name: "LAMBDA"};
var l214 = {name: "LS-COMPILE-BLOCK"};
((l198).value = ({car: l42.fvalue(pv, l213, (function (values,v463){
    checkArgsAtLeast(arguments, 2);
    var v462= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v462 = {car: arguments[i], cdr: 
    v462};
    return (function(){
            return (function(v464,v465,v466,v467){
                ((((typeof((function(){
                    var tmp = v462;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) == "string")?l4.value: l3.value) !== l3.value ? l26.fvalue(pv, l11.fvalue(pv, (function(){
                    var tmp = v462;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })())) : l3.value) !== l3.value ? (function(){
                    (v467 = (function(){
                        var tmp = v462;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                    return (v462 = (function(){
                        var tmp = v462;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })());
                })() : l3.value);
                return (function(v468,v469,v470){
                    try {
                        var tmp;
                        tmp = l179.value;
                        l179.value = v470;
                        v470 = tmp;
                        return l210.fvalue(values, v467, "(function (", l126.fvalue(pv, ({car: "values", cdr: l69.fvalue(pv, (function(){
                            var symbol = l182;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l62.fvalue(pv, v464, v465))}), ","), "){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, l211.fvalue(pv, v468, v469, v466), (v465 !== l3.value ? l124.fvalue(pv, "switch(arguments.length-1){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v471,v472,v473){
                            return (function(){
                                (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v473;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v469;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(v474){
                                                    (v472 = ({car: l124.fvalue(pv, "case ", l16.fvalue(pv, (function(){
                                                        var x1 = v473;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v468;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })()), ":", (function(){
                                                        var symbol = l123;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(), l182.fvalue(pv, (function(){
                                                        var tmp = v474;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })()), "=", l137.fvalue(pv, l32.fvalue(pv, v474)), ";", (function(){
                                                        var symbol = l123;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()), cdr: v472}));
                                                    return (v473 = (function(){
                                                        var x1 = v473;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })());
                                                })(l79.fvalue(pv, v473, v471));
                                            }return l3.value;
                                        })();
                                })();
                                (v472 = ({car: l124.fvalue(pv, "default: break;", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()), cdr: v472}));
                                return l126.fvalue(pv, l64.fvalue(pv, v472));
                            })();
                        })(l207.fvalue(pv, v463),l3.value,0), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : ""), (v466 !== l3.value ? (function(v475){
                            return l124.fvalue(pv, "var ", v475, "= ", l137.fvalue(pv, l3.value), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "for (var i = arguments.length-1; i>=", l16.fvalue(pv, (function(){
                                var x1 = 1;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v468;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                var x3 = v469;
                                if (typeof x3 !== 'number') throw 'Not a number!';
                                return x1+x2+x3;
                            })()), "; i--)", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l135.fvalue(pv, v475, " = ", "{car: arguments[i], cdr: "), v475, "};", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l182.fvalue(pv, v466)) : ""), (function(v476){
                            try {
                                var tmp;
                                tmp = l162.value;
                                l162.value = v476;
                                v476 = tmp;
                                return l214.fvalue(pv, v462, l4.value);
                            }
                            finally {
                                l162.value = v476;
                            }
                        })(l4.value)), "})");
                    }
                    finally {
                        l179.value = v470;
                    }
                })(l67.fvalue(pv, v464),l67.fvalue(pv, v465),l183.fvalue(pv, l62.fvalue(pv, l56.fvalue(pv, v466), v464, v465)));
            })(l206.fvalue(pv, v463),l208.fvalue(pv, v463),l209.fvalue(pv, v463),l3.value);
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l215 = {name: "SETQ-PAIR"};
var l216 = {name: "SET"};
(function(){
    (l215).fvalue = (function(v480){
        ((v480)["fname"] = "SETQ-PAIR");
        return v480;
    })((function (values,v477,v478){
        checkArgs(arguments, 3);
        return (function(){
                return (function(v479){
                    return (((l166.fvalue(pv, v479) === l184)?l4.value: l3.value) !== l3.value ? l124.fvalue(values, l167.fvalue(pv, v479), " = ", l137.fvalue(pv, v478)) : l137.fvalue(values, l62.fvalue(pv, l42.fvalue(pv, l216), l42.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v477))), l42.fvalue(pv, v478))));
                })(l178.fvalue(pv, v477, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l99));
        })();
    }));
    return l215;
})();
var l217 = {name: "SETQ"};
((l198).value = ({car: l42.fvalue(pv, l217, (function (values){
    var v481= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v481 = {car: arguments[i], cdr: 
    v481};
    return (function(){
            return (function(v482){
                (function(){
                    try {
                        return (function(){
                            while(l4.value !== l3.value){
                                (l11.fvalue(pv, v481) !== l3.value ? (function(){
                                    throw ({type: 'block', id: 182, value: l3.value, message: 'Return from unknown block NIL.'})
                                })() : (l11.fvalue(pv, (function(){
                                    var tmp = v481;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()) !== l3.value ? (function(){
                                    throw "Odd paris in SETQ";
                                })() : (function(){
                                    (v482 = l124.fvalue(pv, v482, l124.fvalue(pv, l215.fvalue(pv, (function(){
                                        var tmp = v481;
                                        return tmp === l3.value? l3.value: tmp.car;
                                    })(), l32.fvalue(pv, v481)), (l11.fvalue(pv, l34.fvalue(pv, v481)) !== l3.value ? "" : ", "))));
                                    return (v481 = l34.fvalue(pv, v481));
                                })()));
                            }return l3.value;
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 182)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
                return l124.fvalue(values, "(", v482, ")");
            })("");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l218 = {name: "JS-VREF"};
((l198).value = ({car: l42.fvalue(pv, l218, (function (values,v483){
    checkArgs(arguments, 2);
    return (function(){
            return v483;
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l219 = {name: "JS-VSET"};
((l198).value = ({car: l42.fvalue(pv, l219, (function (values,v484,v485){
    checkArgs(arguments, 3);
    return (function(){
            return l124.fvalue(values, "(", v484, " = ", l137.fvalue(pv, v485), ")");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l140).fvalue = (function(v492){
        ((v492)["fname"] = "ESCAPE-STRING");
        return v492;
    })((function (values,v486){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v487,v488,v489){
                    (function(){
                            return (function(){
                                while((function(){
                                    var x1 = v488;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v489;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return (x1<x2?l4.value: l3.value);
                                })() !== l3.value){
                                    (function(v490){
                                        ((function(v491){
                                            return (v491 !== l3.value ? v491 : l74.fvalue(pv, v490, 92));
                                        })(l74.fvalue(pv, v490, 34)) !== l3.value ? (v487 = l124.fvalue(pv, v487, "\\")) : l3.value);
                                        (l74.fvalue(pv, v490, 10) !== l3.value ? (function(){
                                            (v487 = l124.fvalue(pv, v487, "\\"));
                                            return (v490 = 110);
                                        })() : l3.value);
                                        return (v487 = l124.fvalue(pv, v487, l92.fvalue(pv, v490)));
                                    })((function(){
                                        var string = v486;
                                        var index = v488;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                    (v488 = (function(){
                                        var x1 = v488;
                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                        var x2 = 1;
                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                        return x1+x2;
                                    })());
                                }return l3.value;
                            })();
                    })();
                    return v487;
                })("",0,l67.fvalue(pv, v486));
        })();
    }));
    return l140;
})();
var l220 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l220.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l220).value = l3.value));
    return l220;
})();
var l221 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l221.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l221).value = 0));
    return l221;
})();
var l222 = {name: "GENLIT"};
(function(){
    (l222).fvalue = (function(v493){
        ((v493)["fname"] = "GENLIT");
        return v493;
    })((function (values){
        checkArgsAtMost(arguments, 1);
        return (function(){
                return l124.fvalue(values, "l", l16.fvalue(pv, ((l221).value = (function(){
                    var x1 = (function(){
                        var symbol = l221;
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
    return l222;
})();
var l223 = {name: "LITERAL"};
(function(){
    (l223).fvalue = (function(v505){
        ((v505)["fname"] = "LITERAL");
        return v505;
    })((function (values,v494,v495){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v495=l3.value;
        default: break;
        }
        return (function(){
                return (l75.fvalue(pv, v494) !== l3.value ? l16.fvalue(values, v494) : (((typeof(v494) == "string")?l4.value: l3.value) !== l3.value ? l124.fvalue(values, "\"", l140.fvalue(pv, v494), "\"") : (((function(){
                    var tmp = v494;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(v496){
                    return (v496 !== l3.value ? v496 : (function(v498,v499){
                        ((l220).value = ({car: ({car: v494, cdr: v498}), cdr: (function(){
                            var symbol = l220;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()}));
                        l186.fvalue(pv, l124.fvalue(pv, "var ", v498, " = ", v499));
                        return v498;
                    })(l222.fvalue(pv),(function(v497){
                        return (l11.fvalue(pv, v497) !== l3.value ? l124.fvalue(pv, "{name: \"", l140.fvalue(pv, (v494).name), "\"}") : l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l120), l42.fvalue(pv, (v494).name), l42.fvalue(pv, l106.fvalue(pv, v497)))));
                    })(l114.fvalue(pv, v494))));
                })((function(){
                    var tmp = l91.fvalue(pv, v494, (function(){
                        var symbol = l220;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) : (((function(){
                    var tmp = v494;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(v500){
                    return (v495 !== l3.value ? v500 : (function(v501){
                        l186.fvalue(pv, l124.fvalue(pv, "var ", v501, " = ", v500));
                        return v501;
                    })(l222.fvalue(pv)));
                })(l124.fvalue(pv, "{car: ", l223.fvalue(pv, (function(){
                    var tmp = v494;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), l4.value), ", ", "cdr: ", l223.fvalue(pv, (function(){
                    var tmp = v494;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), l4.value), "}")) : (((function(){
                    var x = v494;
                    return typeof x === 'object' && 'length' in x;
                })()?l4.value: l3.value) !== l3.value ? (function(v502){
                    return (function(v503){
                        return (v495 !== l3.value ? v503 : (function(v504){
                            l186.fvalue(pv, l124.fvalue(pv, "var ", v504, " = ", v503));
                            return v504;
                        })(l222.fvalue(pv)));
                    })(l124.fvalue(pv, "[", l126.fvalue(pv, l69.fvalue(pv, (function(){
                        var symbol = l223;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v502), ", "), "]"));
                })(l129.fvalue(pv, v494)) : l3.value)))));
        })();
    }));
    return l223;
})();
((l198).value = ({car: l42.fvalue(pv, l157, (function (values,v506){
    checkArgs(arguments, 2);
    return (function(){
            return l223.fvalue(values, v506);
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l224 = {name: "%WHILE"};
((l198).value = ({car: l42.fvalue(pv, l224, (function (values,v508){
    checkArgsAtLeast(arguments, 2);
    var v507= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v507 = {car: arguments[i], cdr: 
    v507};
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "while(", l137.fvalue(pv, v508), " !== ", l137.fvalue(pv, l3.value), "){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, l214.fvalue(pv, v507)), "}", "return ", l137.fvalue(pv, l3.value), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l225 = {name: "SYMBOL-FUNCTION"};
((l198).value = ({car: l42.fvalue(pv, l98, (function (values,v509){
    checkArgs(arguments, 2);
    return (function(){
            return ((l57.fvalue(pv, v509) !== l3.value ? (((function(){
                var tmp = v509;
                return tmp === l3.value? l3.value: tmp.car;
            })() === l213)?l4.value: l3.value) : l3.value) !== l3.value ? l137.fvalue(values, v509) : (((function(){
                var tmp = v509;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? l137.fvalue(values, l62.fvalue(pv, l42.fvalue(pv, l225), l42.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v509))))) : l3.value));
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l226 = {name: "EVAL-WHEN-COMPILE"};
var l227 = {name: "EVAL"};
var l228 = {name: "PROGN"};
((l198).value = ({car: l42.fvalue(pv, l226, (function (values){
    var v510= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v510 = {car: arguments[i], cdr: 
    v510};
    return (function(){
            l227.fvalue(pv, ({car: l228, cdr: v510}));
            return l3.value;
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l229 = {name: "DEFINE-TRANSFORMATION"};
l229;
((l198).value = ({car: l42.fvalue(pv, l228, (function (values){
    var v511= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v511 = {car: arguments[i], cdr: 
    v511};
    return (function(){
            return (l11.fvalue(pv, (function(){
                var tmp = v511;
                return tmp === l3.value? l3.value: tmp.cdr;
            })()) !== l3.value ? l137.fvalue(values, (function(){
                var tmp = v511;
                return tmp === l3.value? l3.value: tmp.car;
            })(), (function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()) : l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, l214.fvalue(pv, v511, l4.value)), "})()"));
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l230 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l230).fvalue = (function(v513){
        ((v513)["fname"] = "SPECIAL-VARIABLE-P");
        return v513;
    })((function (values,v512){
        checkArgs(arguments, 2);
        return (function(){
                return (l192.fvalue(pv, v512, l99, l194) !== l3.value ? l4.value : l3.value);
        })();
    }));
    return l230;
})();
var l231 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l231).fvalue = (function(v520){
        ((v520)["fname"] = "LET-BINDING-WRAPPER");
        return v520;
    })((function (values,v514,v515){
        checkArgs(arguments, 3);
        return (function(){
            try {
                (l11.fvalue(pv, v514) !== l3.value ? (function(){
                    throw ({type: 'block', id: 195, value: v515, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                })() : l3.value);
                return l124.fvalue(values, "try {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var tmp;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l128.fvalue(pv, (function (values,v516){
                    checkArgs(arguments, 2);
                    return (function(v517){
                        return l124.fvalue(values, "tmp = ", v517, ".value;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), v517, ".value = ", (function(){
                            var tmp = v516;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(){
                            var tmp = v516;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), " = tmp;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                        var tmp = v516;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()))));
                }), v514), v515, (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "finally {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l128.fvalue(pv, (function (values,v518){
                    checkArgs(arguments, 2);
                    return (function(v519){
                        return l124.fvalue(values, v519, ".value", " = ", (function(){
                            var tmp = v518;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                        var tmp = v518;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()))));
                }), v514)), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 195)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
    return l231;
})();
var l232 = {name: "LET"};
var l233 = {name: "DYNAMIC-BINDINGS"};
((l198).value = ({car: l42.fvalue(pv, l232, (function (values,v522){
    checkArgsAtLeast(arguments, 2);
    var v521= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v521 = {car: arguments[i], cdr: 
    v521};
    return (function(){
            return (function(){
                try {
                    var v530 = l179.value;
                    var v523 = l69.fvalue(pv, (function(){
                        var symbol = l56;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v522);
                    var v524 = l69.fvalue(pv, (function(){
                        var symbol = l38;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v523);
                    var v525 = l69.fvalue(pv, (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l69.fvalue(pv, (function(){
                        var symbol = l39;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v523));
                    ((l179).value = l183.fvalue(pv, l84.fvalue(pv, (function(){
                        var symbol = l230;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v524)));
                    var v526 = l3.value;
                    return l124.fvalue(values, "(function(", l126.fvalue(pv, l69.fvalue(pv, (function (values,v527){
                        checkArgs(arguments, 2);
                        return (l230.fvalue(pv, v527) !== l3.value ? (function(v528){
                            ((l233).value = ({car: ({car: v527, cdr: v528}), cdr: v526}));
                            return v528;
                        })(l181.fvalue(pv, v527)) : l182.fvalue(values, v527));
                    }), v524), ","), "){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), (function(v529){
                        return l135.fvalue(pv, l231.fvalue(pv, v526, v529));
                    })(l214.fvalue(pv, v521, l4.value)), "})(", l126.fvalue(pv, v525, ","), ")");
                }
                finally {
                    l179.value = v530;
                }
            })();
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l234 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l234).fvalue = (function(v537){
        ((v537)["fname"] = "LET*-INITIALIZE-VALUE");
        return v537;
    })((function (values,v531){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v532,v533){
                    return (l230.fvalue(pv, v532) !== l3.value ? l124.fvalue(values, l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l217), l42.fvalue(pv, v532), l42.fvalue(pv, v533))), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()) : (function(){
                        var v534 = l181.fvalue(pv, v532);
                        var v535 = l164.fvalue(pv, v532, l99, v534);
                        return (function(v536){
                            l174.fvalue(pv, v535, (function(){
                                var symbol = l179;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l99);
                            return v536;
                        })(l124.fvalue(pv, "var ", v534, " = ", l137.fvalue(pv, v533), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })());
                })(l38.fvalue(pv, v531),l39.fvalue(pv, v531));
        })();
    }));
    return l234;
})();
var l235 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l235).fvalue = (function(v546){
        ((v546)["fname"] = "LET*-BINDING-WRAPPER");
        return v546;
    })((function (values,v538,v539){
        checkArgs(arguments, 3);
        return (function(){
            try {
                (l11.fvalue(pv, v538) !== l3.value ? (function(){
                    throw ({type: 'block', id: 198, value: v539, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                })() : l3.value);
                return (function(v541){
                    return l124.fvalue(values, "try {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, l128.fvalue(pv, (function (values,v542){
                        checkArgs(arguments, 2);
                        return (function(v543){
                            return l124.fvalue(values, "var ", (function(){
                                var tmp = v542;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = ", v543, ".value;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                            var tmp = v542;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    }), v541), v539), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, l128.fvalue(pv, (function (values,v544){
                        checkArgs(arguments, 2);
                        return (function(v545){
                            return l124.fvalue(values, v545, ".value", " = ", (function(){
                                var tmp = v544;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })(l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, (function(){
                            var tmp = v544;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    }), v541)), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })(l69.fvalue(pv, (function (values,v540){
                    checkArgs(arguments, 2);
                    return ({car: v540, cdr: l181.fvalue(pv, v540)});
                }), l85.fvalue(pv, (function(){
                    var symbol = l230;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v538)));
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 198)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
    return l235;
})();
var l236 = {name: "LET*"};
((l198).value = ({car: l42.fvalue(pv, l236, (function (values,v548){
    checkArgsAtLeast(arguments, 2);
    var v547= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v547 = {car: arguments[i], cdr: 
    v547};
    return (function(){
            return (function(v549,v550){
                try {
                    var tmp;
                    tmp = l179.value;
                    l179.value = v550;
                    v550 = tmp;
                    return l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, (function(v551,v552){
                        return l235.fvalue(pv, v551, v552);
                    })(l85.fvalue(pv, (function(){
                        var symbol = l230;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l69.fvalue(pv, (function(){
                        var symbol = l38;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v549)),l124.fvalue(pv, l128.fvalue(pv, (function(){
                        var symbol = l234;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v549), l214.fvalue(pv, v547, l4.value)))), "})()");
                }
                finally {
                    l179.value = v550;
                }
            })(l69.fvalue(pv, (function(){
                var symbol = l56;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v548),l173.fvalue(pv, (function(){
                var symbol = l179;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l237 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l237.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l237).value = 0));
    return l237;
})();
var l238 = {name: "USED"};
((l198).value = ({car: l42.fvalue(pv, l175, (function (values,v554){
    checkArgsAtLeast(arguments, 2);
    var v553= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v553 = {car: arguments[i], cdr: 
    v553};
    return (function(){
            return (function(){
                try {
                    var v558 = l179.value;
                    var v555 = l16.fvalue(pv, ((l237).value = (function(){
                        var x1 = (function(){
                            var symbol = l237;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })()));
                    var v556 = l164.fvalue(pv, v554, l175, v555);
                    ((l179).value = l177.fvalue(pv, l42.fvalue(pv, v556), (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l175));
                    var v557 = l214.fvalue(pv, v553, l4.value);
                    return (l82.fvalue(pv, l238, l168.fvalue(pv, v556)) !== l3.value ? l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, "try {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, v557), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "catch (cf){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    if (cf.type == 'block' && cf.id == ", v555, ")", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "        return cf.value;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    else", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "        throw cf;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, l135.fvalue(pv, v557)), "})()"));
                }
                finally {
                    l179.value = v558;
                }
            })();
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l239 = {name: "RETURN-FROM"};
((l198).value = ({car: l42.fvalue(pv, l239, (function (values,v559,v560){
    checkArgsAtLeast(arguments, 2);
    checkArgsAtMost(arguments, 3);
    switch(arguments.length-1){
    case 1:
    v560=l3.value;
    default: break;
    }
    return (function(){
            return (function(v561){
                (l11.fvalue(pv, v561) !== l3.value ? (function(){
                    throw l124.fvalue(pv, "Unknown block `", (v559).name, "'.");
                })() : l3.value);
                l171.fvalue(pv, l238, v561);
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw ({", "type: 'block', ", "id: ", l167.fvalue(pv, v561), ", ", "value: ", l137.fvalue(pv, v560), ", ", "message: 'Return from unknown block ", (v559).name, ".'", "})"), "})()");
            })(l178.fvalue(pv, v559, (function(){
                var symbol = l179;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l175));
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l240 = {name: "CATCH"};
((l198).value = ({car: l42.fvalue(pv, l240, (function (values,v563){
    checkArgsAtLeast(arguments, 2);
    var v562= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v562 = {car: arguments[i], cdr: 
    v562};
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "var id = ", l137.fvalue(pv, v563), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "try {", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "return ", l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l228), v562)), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "}", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "catch (cf){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "        return cf.value;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "    else", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "        throw cf;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "}", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l241 = {name: "THROW"};
((l198).value = ({car: l42.fvalue(pv, l241, (function (values,v564,v565){
    checkArgs(arguments, 3);
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "throw ({", "type: 'catch', ", "id: ", l137.fvalue(pv, v564), ", ", "value: ", l137.fvalue(pv, v565), ", ", "message: 'Throw uncatched.'", "})"), "})()");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l242 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l242.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l242).value = 0));
    return l242;
})();
var l243 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l243.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l243).value = 0));
    return l243;
})();
var l244 = {name: "GO-TAG-P"};
(function(){
    (l244).fvalue = (function(v568){
        ((v568)["fname"] = "GO-TAG-P");
        return v568;
    })((function (values,v566){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v567){
                    return (v567 !== l3.value ? v567 : ((function(){
                        var tmp = v566;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value));
                })(l75.fvalue(pv, v566));
        })();
    }));
    return l244;
})();
var l245 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l245).fvalue = (function(v574){
        ((v574)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v574;
    })((function (values,v569,v570){
        checkArgs(arguments, 3);
        return (function(){
                return (function(v573){
                    return l177.fvalue(values, v573, (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l176);
                })(l69.fvalue(pv, (function (values,v571){
                    checkArgs(arguments, 2);
                    return (function(v572){
                        return l164.fvalue(values, v571, l176, l42.fvalue(pv, v569, v572));
                    })(l16.fvalue(pv, ((l243).value = (function(){
                        var x1 = (function(){
                            var symbol = l243;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })())));
                }), l85.fvalue(pv, (function(){
                    var symbol = l244;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v570)));
        })();
    }));
    return l245;
})();
var l246 = {name: "TAGBODY"};
((l198).value = ({car: l42.fvalue(pv, l246, (function (values){
    var v575= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v575 = {car: arguments[i], cdr: 
    v575};
    return (function(){
        try {
            (l89.fvalue(pv, (function(){
                var symbol = l244;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v575) !== l3.value ? l3.value : (function(){
                throw ({type: 'block', id: 206, value: l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l228), v575, l42.fvalue(pv, l3))), message: 'Return from unknown block TAGBODY.'})
            })());
            (l244.fvalue(pv, (function(){
                var tmp = v575;
                return tmp === l3.value? l3.value: tmp.car;
            })()) !== l3.value ? l3.value : (v575 = ({car: l15.fvalue(pv, "START"), cdr: v575})));
            return (function(v576){
                return (function(v578,v577){
                    try {
                        var tmp;
                        tmp = l179.value;
                        l179.value = v578;
                        v578 = tmp;
                        (function(v579){
                            return (v577 = l39.fvalue(pv, l167.fvalue(pv, v579)));
                        })(l178.fvalue(pv, l38.fvalue(pv, v575), (function(){
                            var symbol = l179;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l176));
                        return l124.fvalue(values, "(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "var tagbody_", v576, " = ", v577, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "tbloop:", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "while (true) {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, "try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l135.fvalue(pv, (function(v580){
                            return l124.fvalue(pv, "switch(tagbody_", v576, "){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "case ", v577, ":", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                    return (function(v581,v582){
                                        (function(){
                                            while(v581 !== l3.value){
                                                (v582 = (function(){
                                                    var tmp = v581;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v580 = l124.fvalue(pv, v580, (l26.fvalue(pv, l244.fvalue(pv, v582)) !== l3.value ? l135.fvalue(pv, l137.fvalue(pv, v582), ";", (function(){
                                                        var symbol = l123;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })()) : (function(v583){
                                                        return l124.fvalue(pv, "case ", l39.fvalue(pv, l167.fvalue(pv, v583)), ":", (function(){
                                                            var symbol = l123;
                                                            var value = symbol.value;
                                                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                            return value;
                                                        })());
                                                    })(l178.fvalue(pv, v582, (function(){
                                                        var symbol = l179;
                                                        var value = symbol.value;
                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                        return value;
                                                    })(), l176)))));
                                                    return l3.value;
                                                })();
                                                (v581 = (function(){
                                                    var tmp = v581;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v580;
                                    })((function(){
                                        var tmp = v575;
                                        return tmp === l3.value? l3.value: tmp.cdr;
                                    })(),l3.value);
                            })(), "default:", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    break tbloop;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })("")), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (jump) {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (jump.type == 'tagbody' && jump.id == ", v576, ")", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        tagbody_", v576, " = jump.label;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw(jump);", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return ", l137.fvalue(pv, l3.value), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    }
                    finally {
                        l179.value = v578;
                    }
                })(l245.fvalue(pv, v576, v575),l3.value);
            })(l16.fvalue(pv, (function(){
                var symbol = l242;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()));
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 206)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l247 = {name: "GO"};
((l198).value = ({car: l42.fvalue(pv, l247, (function (values,v584){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v585,v586){
                return (v585 !== l3.value ? l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw ({", "type: 'tagbody', ", "id: ", l38.fvalue(pv, l167.fvalue(pv, v585)), ", ", "label: ", l39.fvalue(pv, l167.fvalue(pv, v585)), ", ", "message: 'Attempt to GO to non-existing tag ", v586, "'", "})", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()") : (function(){
                    throw l124.fvalue(pv, "Unknown tag `", v586, "'.");
                })());
            })(l178.fvalue(pv, v584, (function(){
                var symbol = l179;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l176),(((function(){
                var tmp = v584;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?l4.value: l3.value) !== l3.value ? (v584).name : (l75.fvalue(pv, v584) !== l3.value ? l16.fvalue(pv, v584) : l3.value)));
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l248 = {name: "UNWIND-PROTECT"};
((l198).value = ({car: l42.fvalue(pv, l248, (function (values,v588){
    checkArgsAtLeast(arguments, 2);
    var v587= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v587 = {car: arguments[i], cdr: 
    v587};
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "var ret = ", l137.fvalue(pv, l3.value), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "try {", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "ret = ", l137.fvalue(pv, v588), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "} finally {", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, l214.fvalue(pv, v587)), "}", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return ret;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l249 = {name: "MULTIPLE-VALUE-CALL"};
((l198).value = ({car: l42.fvalue(pv, l249, (function (values,v590){
    checkArgsAtLeast(arguments, 2);
    var v589= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v589 = {car: arguments[i], cdr: 
    v589};
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "var func = ", l137.fvalue(pv, v590), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var args = [", ((function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? "values" : "pv"), "];", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "return ", l124.fvalue(pv, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "var values = mv;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var vs;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l128.fvalue(pv, (function (values,v591){
                checkArgs(arguments, 2);
                return l124.fvalue(values, "vs = ", l137.fvalue(pv, v591, l4.value), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "if (typeof vs === 'object' && 'multiple-value' in vs)", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "args = args.concat(vs);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "else", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "args.push(vs);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            }), v589), "return func.apply(window, args);", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()"), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l250 = {name: "MULTIPLE-VALUE-PROG1"};
((l198).value = ({car: l42.fvalue(pv, l250, (function (values,v593){
    checkArgsAtLeast(arguments, 2);
    var v592= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v592 = {car: arguments[i], cdr: 
    v592};
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "var args = ", l137.fvalue(pv, v593, (function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l214.fvalue(pv, v592), "return args;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l251 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l251).fvalue = (function(v596){
        ((v596)["fname"] = "BACKQUOTE-EXPAND-1");
        return v596;
    })((function (values,v594){
        checkArgs(arguments, 2);
        return (function(){
                return (((function(){
                    var tmp = v594;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? l42.fvalue(values, l157, v594) : (l43.fvalue(pv, v594) !== l3.value ? v594 : ((((function(){
                    var tmp = v594;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l160)?l4.value: l3.value) !== l3.value ? (function(){
                    var tmp = v594;
                    return tmp === l3.value? l3.value: tmp.car;
                })() : ((((function(){
                    var tmp = v594;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l158)?l4.value: l3.value) !== l3.value ? l251.fvalue(values, l251.fvalue(pv, l32.fvalue(pv, v594))) : ({car: l62, cdr: l69.fvalue(pv, (function (values,v595){
                    checkArgs(arguments, 2);
                    return ((l57.fvalue(pv, v595) !== l3.value ? (((function(){
                        var tmp = v595;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l160)?l4.value: l3.value) : l3.value) !== l3.value ? l42.fvalue(values, l42, l32.fvalue(pv, v595)) : ((l57.fvalue(pv, v595) !== l3.value ? (((function(){
                        var tmp = v595;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l159)?l4.value: l3.value) : l3.value) !== l3.value ? l32.fvalue(values, v595) : l42.fvalue(values, l42, l251.fvalue(pv, v595))));
                }), v594)})))));
        })();
    }));
    return l251;
})();
var l252 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l252).fvalue = (function(v598){
        ((v598)["fname"] = "BACKQUOTE-EXPAND");
        return v598;
    })((function (values,v597){
        checkArgs(arguments, 2);
        return (function(){
                return ((l57.fvalue(pv, v597) !== l3.value ? (((function(){
                    var tmp = v597;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l158)?l4.value: l3.value) : l3.value) !== l3.value ? l251.fvalue(values, l32.fvalue(pv, v597)) : v597);
        })();
    }));
    return l252;
})();
l158;
((l198).value = ({car: l42.fvalue(pv, l158, (function (values,v599){
    checkArgs(arguments, 2);
    return (function(){
            return l137.fvalue(values, l251.fvalue(pv, v599));
    })();
})), cdr: (function(){
    var symbol = l198;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l253 = {name: "*BUILTINS*"};
(function(){
    (((l253.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : ((l253).value = l3.value));
    return l253;
})();
var l254 = {name: "DEFINE-RAW-BUILTIN"};
l254;
var l255 = {name: "DEFINE-BUILTIN"};
l255;
var l256 = {name: "TYPE-CHECK"};
l256;
var l257 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l257).fvalue = (function(v608){
        ((v608)["fname"] = "VARIABLE-ARITY-CALL");
        return v608;
    })((function (values,v600,v601){
        checkArgs(arguments, 3);
        return (function(){
                (((function(){
                    var tmp = v600;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                    throw "ARGS must be a non-empty list";
                })());
                return (function(v602,v603,v604){
                    (function(){
                            return (function(v605,v606){
                                (function(){
                                    while(v605 !== l3.value){
                                        (v606 = (function(){
                                            var tmp = v605;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })());
                                        (function(){
                                            (function(v607){
                                                (v603 = ({car: v607, cdr: v603}));
                                                return (v604 = l124.fvalue(pv, v604, l124.fvalue(pv, "var ", v607, " = ", l137.fvalue(pv, v606), ";", (function(){
                                                    var symbol = l123;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })(), "if (typeof ", v607, " !== 'number') throw 'Not a number!';", (function(){
                                                    var symbol = l123;
                                                    var value = symbol.value;
                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                    return value;
                                                })())));
                                            })(l124.fvalue(pv, "x", l16.fvalue(pv, (v602 = (function(){
                                                var x1 = v602;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })()))));
                                            return l3.value;
                                        })();
                                        (v605 = (function(){
                                            var tmp = v605;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                                return l3.value;
                            })(v600,l3.value);
                    })();
                    return l124.fvalue(values, "(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l135.fvalue(pv, v604, (v601)(pv, l64.fvalue(pv, v603))), "})()");
                })(0,l3,"");
        })();
    }));
    return l257;
})();
var l258 = {name: "VARIABLE-ARITY"};
l258;
var l259 = {name: "NUM-OP-NUM"};
(function(){
    (l259).fvalue = (function(v612){
        ((v612)["fname"] = "NUM-OP-NUM");
        return v612;
    })((function (values,v609,v610,v611){
        checkArgs(arguments, 4);
        return (function(){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v609, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "var ", "y", " = ", v611, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "if (typeof ", "y", " != '", "number", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", l124.fvalue(pv, "x", v610, "y"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
        })();
    }));
    return l259;
})();
((l253).value = ({car: l42.fvalue(pv, l59, (function (values){
    var v613= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v613 = {car: arguments[i], cdr: 
    v613};
    return (function(){
            return (l11.fvalue(pv, v613) !== l3.value ? "0" : l257.fvalue(values, v613, (function (values,v614){
                checkArgs(arguments, 2);
                return l124.fvalue(values, "return ", l126.fvalue(pv, v614, "+"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            })));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l60, (function (values,v616){
    checkArgsAtLeast(arguments, 2);
    var v615= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v615 = {car: arguments[i], cdr: 
    v615};
    return (function(){
            return (function(v617){
                return l257.fvalue(values, v617, (function (values,v618){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", (l11.fvalue(pv, v615) !== l3.value ? l124.fvalue(pv, "-", (function(){
                        var tmp = v618;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) : l126.fvalue(pv, v618, "-")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v616, cdr: v615}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l19, (function (values){
    var v619= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v619 = {car: arguments[i], cdr: 
    v619};
    return (function(){
            return (l11.fvalue(pv, v619) !== l3.value ? "1" : l257.fvalue(values, v619, (function (values,v620){
                checkArgs(arguments, 2);
                return l124.fvalue(values, "return ", l126.fvalue(pv, v620, "*"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })());
            })));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l20, (function (values,v622){
    checkArgsAtLeast(arguments, 2);
    var v621= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v621 = {car: arguments[i], cdr: 
    v621};
    return (function(){
            return (function(v623){
                return l257.fvalue(values, v623, (function (values,v624){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", (l11.fvalue(pv, v621) !== l3.value ? l124.fvalue(pv, "1 /", (function(){
                        var tmp = v624;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) : l126.fvalue(pv, v624, "/")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v622, cdr: v621}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l260 = {name: "MOD"};
((l253).value = ({car: l42.fvalue(pv, l260, (function (values,v625,v626){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v627,v628){
                return l259.fvalue(values, v627, "%", v628);
            })(l137.fvalue(pv, v625),l137.fvalue(pv, v626));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l261 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l261).fvalue = (function(v631){
        ((v631)["fname"] = "COMPARISON-CONJUNTION");
        return v631;
    })((function (values,v629,v630){
        checkArgs(arguments, 3);
        return (function(){
                return (l11.fvalue(pv, (function(){
                    var tmp = v629;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })()) !== l3.value ? "true" : (l11.fvalue(pv, l34.fvalue(pv, v629)) !== l3.value ? l124.fvalue(values, (function(){
                    var tmp = v629;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), v630, l32.fvalue(pv, v629)) : l124.fvalue(values, (function(){
                    var tmp = v629;
                    return tmp === l3.value? l3.value: tmp.car;
                })(), v630, l32.fvalue(pv, v629), " && ", l261.fvalue(pv, (function(){
                    var tmp = v629;
                    return tmp === l3.value? l3.value: tmp.cdr;
                })(), v630))));
        })();
    }));
    return l261;
})();
var l262 = {name: "DEFINE-BUILTIN-COMPARISON"};
l262;
var l263 = {name: ">"};
((l253).value = ({car: l42.fvalue(pv, l263, (function (values,v633){
    checkArgsAtLeast(arguments, 2);
    var v632= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v632 = {car: arguments[i], cdr: 
    v632};
    return (function(){
            return (function(v634){
                return l257.fvalue(values, v634, (function (values,v635){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", l136.fvalue(pv, l261.fvalue(pv, v635, ">")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v633, cdr: v632}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l264 = {name: "<"};
((l253).value = ({car: l42.fvalue(pv, l264, (function (values,v637){
    checkArgsAtLeast(arguments, 2);
    var v636= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v636 = {car: arguments[i], cdr: 
    v636};
    return (function(){
            return (function(v638){
                return l257.fvalue(values, v638, (function (values,v639){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", l136.fvalue(pv, l261.fvalue(pv, v639, "<")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v637, cdr: v636}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l265 = {name: ">="};
((l253).value = ({car: l42.fvalue(pv, l265, (function (values,v641){
    checkArgsAtLeast(arguments, 2);
    var v640= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v640 = {car: arguments[i], cdr: 
    v640};
    return (function(){
            return (function(v642){
                return l257.fvalue(values, v642, (function (values,v643){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", l136.fvalue(pv, l261.fvalue(pv, v643, ">=")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v641, cdr: v640}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l266 = {name: "<="};
((l253).value = ({car: l42.fvalue(pv, l266, (function (values,v645){
    checkArgsAtLeast(arguments, 2);
    var v644= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v644 = {car: arguments[i], cdr: 
    v644};
    return (function(){
            return (function(v646){
                return l257.fvalue(values, v646, (function (values,v647){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", l136.fvalue(pv, l261.fvalue(pv, v647, "<=")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v645, cdr: v644}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l18, (function (values,v649){
    checkArgsAtLeast(arguments, 2);
    var v648= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v648 = {car: arguments[i], cdr: 
    v648};
    return (function(){
            return (function(v650){
                return l257.fvalue(values, v650, (function (values,v651){
                    checkArgs(arguments, 2);
                    return l124.fvalue(values, "return ", l136.fvalue(pv, l261.fvalue(pv, v651, "==")), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                }));
            })(({car: v649, cdr: v648}));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l267 = {name: "NUMBERP"};
((l253).value = ({car: l42.fvalue(pv, l267, (function (values,v652){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v653){
                return l136.fvalue(values, l124.fvalue(pv, "(typeof (", v653, ") == \"number\")"));
            })(l137.fvalue(pv, v652));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l268 = {name: "FLOOR"};
((l253).value = ({car: l42.fvalue(pv, l268, (function (values,v654){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v655){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v655, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "Math.floor(x)", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v654));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l27, (function (values,v656,v657){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v658,v659){
                return l124.fvalue(values, "({car: ", v658, ", cdr: ", v659, "})");
            })(l137.fvalue(pv, v656),l137.fvalue(pv, v657));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l28, (function (values,v660){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v661){
                return l136.fvalue(values, l124.fvalue(pv, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var tmp = ", v661, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()"));
            })(l137.fvalue(pv, v660));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l29, (function (values,v662){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v663){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var tmp = ", v663, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return tmp === ", l137.fvalue(pv, l3.value), "? ", l137.fvalue(pv, l3.value), ": tmp.car;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v662));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l30, (function (values,v664){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v665){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var tmp = ", v665, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return tmp === ", l137.fvalue(pv, l3.value), "? ", l137.fvalue(pv, l3.value), ": tmp.cdr;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v664));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l269 = {name: "SETCAR"};
((l253).value = ({car: l42.fvalue(pv, l269, (function (values,v666,v667){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v668,v669){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v668, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", l124.fvalue(pv, "(x.car = ", v669, ")"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v666),l137.fvalue(pv, v667));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l270 = {name: "SETCDR"};
((l253).value = ({car: l42.fvalue(pv, l270, (function (values,v670,v671){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v672,v673){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v672, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "object", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", l124.fvalue(pv, "(x.cdr = ", v673, ")"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v670),l137.fvalue(pv, v671));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l271 = {name: "SYMBOLP"};
((l253).value = ({car: l42.fvalue(pv, l271, (function (values,v674){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v675){
                return l136.fvalue(values, l124.fvalue(pv, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var tmp = ", v675, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()"));
            })(l137.fvalue(pv, v674));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l272 = {name: "MAKE-SYMBOL"};
((l253).value = ({car: l42.fvalue(pv, l272, (function (values,v676){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v677){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "name", " = ", v677, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "name", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "({name: name})", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v676));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l273 = {name: "SYMBOL-NAME"};
((l253).value = ({car: l42.fvalue(pv, l273, (function (values,v678){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v679){
                return l124.fvalue(values, "(", v679, ").name");
            })(l137.fvalue(pv, v678));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l216, (function (values,v680,v681){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v682,v683){
                return l124.fvalue(values, "(", v682, ").value = ", v683);
            })(l137.fvalue(pv, v680),l137.fvalue(pv, v681));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l274 = {name: "FSET"};
((l253).value = ({car: l42.fvalue(pv, l274, (function (values,v684,v685){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v686,v687){
                return l124.fvalue(values, "(", v686, ").fvalue = ", v687);
            })(l137.fvalue(pv, v684),l137.fvalue(pv, v685));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l17, (function (values,v688){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v689){
                return l136.fvalue(values, l124.fvalue(pv, "(", v689, ".value !== undefined)"));
            })(l137.fvalue(pv, v688));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l275 = {name: "SYMBOL-VALUE"};
((l253).value = ({car: l42.fvalue(pv, l275, (function (values,v690){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v691){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var symbol = ", v691, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var value = symbol.value;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return value;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v690));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l225, (function (values,v692){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v693){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var symbol = ", v693, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var func = symbol.fvalue;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return func;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v692));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l276 = {name: "SYMBOL-PLIST"};
((l253).value = ({car: l42.fvalue(pv, l276, (function (values,v694){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v695){
                return l124.fvalue(values, "((", v695, ").plist || ", l137.fvalue(pv, l3.value), ")");
            })(l137.fvalue(pv, v694));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l277 = {name: "LAMBDA-CODE"};
((l253).value = ({car: l42.fvalue(pv, l277, (function (values,v696){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v697){
                return l124.fvalue(values, "(", v697, ").toString()");
            })(l137.fvalue(pv, v696));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l278 = {name: "EQ"};
((l253).value = ({car: l42.fvalue(pv, l278, (function (values,v698,v699){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v700,v701){
                return l136.fvalue(values, l124.fvalue(pv, "(", v700, " === ", v701, ")"));
            })(l137.fvalue(pv, v698),l137.fvalue(pv, v699));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l279 = {name: "EQUAL"};
((l253).value = ({car: l42.fvalue(pv, l279, (function (values,v702,v703){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v704,v705){
                return l136.fvalue(values, l124.fvalue(pv, "(", v704, " == ", v705, ")"));
            })(l137.fvalue(pv, v702),l137.fvalue(pv, v703));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l280 = {name: "CHAR-TO-STRING"};
((l253).value = ({car: l42.fvalue(pv, l280, (function (values,v706){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v707){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v707, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "number", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "String.fromCharCode(x)", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v706));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l281 = {name: "STRINGP"};
((l253).value = ({car: l42.fvalue(pv, l281, (function (values,v708){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v709){
                return l136.fvalue(values, l124.fvalue(pv, "(typeof(", v709, ") == \"string\")"));
            })(l137.fvalue(pv, v708));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l282 = {name: "STRING-UPCASE"};
((l253).value = ({car: l42.fvalue(pv, l282, (function (values,v710){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v711){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v711, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "x.toUpperCase()", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v710));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l283 = {name: "STRING-LENGTH"};
((l253).value = ({car: l42.fvalue(pv, l283, (function (values,v712){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v713){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v713, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "x.length", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v712));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l284 = {name: "SLICE"};
((l253).value = ({car: l42.fvalue(pv, l284, (function (values,v714,v715,v716){
    checkArgsAtLeast(arguments, 3);
    checkArgsAtMost(arguments, 4);
    switch(arguments.length-1){
    case 2:
    v716=l3.value;
    default: break;
    }
    return (function(){
            return l124.fvalue(values, "(function(){", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), l135.fvalue(pv, "var str = ", l137.fvalue(pv, v714), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var a = ", l137.fvalue(pv, v715), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), "var b;", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })(), (v716 !== l3.value ? l124.fvalue(pv, "b = ", l137.fvalue(pv, v716), ";", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()) : ""), "return str.slice(a,b);", (function(){
                var symbol = l123;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })()), "})()");
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l285 = {name: "CHAR"};
((l253).value = ({car: l42.fvalue(pv, l285, (function (values,v717,v718){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v719,v720){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "string", " = ", v719, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "var ", "index", " = ", v720, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "if (typeof ", "index", " != '", "number", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "string.charCodeAt(index)", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v717),l137.fvalue(pv, v718));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l68, (function (values,v721,v722){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v723,v724){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "string1", " = ", v723, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "var ", "string2", " = ", v724, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "string1", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "if (typeof ", "string2", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "string1.concat(string2)", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v721),l137.fvalue(pv, v722));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l286 = {name: "FUNCALL"};
((l253).value = ({car: l42.fvalue(pv, l286, (function (values,v726){
    checkArgsAtLeast(arguments, 2);
    var v725= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v725 = {car: arguments[i], cdr: 
    v725};
    return (function(){
            return l124.fvalue(values, "(", l137.fvalue(pv, v726), ")(", l126.fvalue(pv, ({car: ((function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? "values" : "pv"), cdr: l69.fvalue(pv, (function(){
                var symbol = l137;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v725)}), ", "), ")");
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l287 = {name: "APPLY"};
((l253).value = ({car: l42.fvalue(pv, l287, (function (values,v728){
    checkArgsAtLeast(arguments, 2);
    var v727= l3.value;
    for (var i = arguments.length-1; i>=2; i--)
        v727 = {car: arguments[i], cdr: 
    v727};
    return (function(){
            return (l11.fvalue(pv, v727) !== l3.value ? l124.fvalue(values, "(", l137.fvalue(pv, v728), ")()") : (function(v729,v730){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var f = ", l137.fvalue(pv, v728), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var args = [", l126.fvalue(pv, ({car: ((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? "values" : "pv"), cdr: l69.fvalue(pv, (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v729)}), ", "), "];", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var tail = (", l137.fvalue(pv, v730), ");", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "while (tail != ", l137.fvalue(pv, l3.value), "){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    args.push(tail.car);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    tail = tail.cdr;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return f.apply(this, args);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l81.fvalue(pv, v727),(function(){
                var tmp = l80.fvalue(pv, v727);
                return tmp === l3.value? l3.value: tmp.car;
            })()));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l288 = {name: "JS-EVAL"};
((l253).value = ({car: l42.fvalue(pv, l288, (function (values,v731){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v732){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "string", " = ", v732, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "string", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", ((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? l124.fvalue(pv, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var v = eval.apply(window, [string]);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "if (typeof v !== 'object' || !('multiple-value' in v)){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "v = [v];", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "v['multiple-value'] = true;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return values.apply(this, v);", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()") : "eval.apply(window, [string])"), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v731));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l289 = {name: "ERROR"};
((l253).value = ({car: l42.fvalue(pv, l289, (function (values,v733){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v734){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw ", v734, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v733));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l290 = {name: "NEW"};
((l253).value = ({car: l42.fvalue(pv, l290, (function (values){
    checkArgsAtMost(arguments, 1);
    return (function(){
            return (function(){
                return "{}";
            })();
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l291 = {name: "OBJECTP"};
((l253).value = ({car: l42.fvalue(pv, l291, (function (values,v735){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v736){
                return l136.fvalue(values, l124.fvalue(pv, "(typeof (", v736, ") === 'object')"));
            })(l137.fvalue(pv, v735));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l292 = {name: "OGET"};
((l253).value = ({car: l42.fvalue(pv, l292, (function (values,v737,v738){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v739,v740){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var tmp = ", "(", v739, ")[", v740, "];", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return tmp == undefined? ", l137.fvalue(pv, l3.value), ": tmp ;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v737),l137.fvalue(pv, v738));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l293 = {name: "OSET"};
((l253).value = ({car: l42.fvalue(pv, l293, (function (values,v741,v742,v743){
    checkArgs(arguments, 4);
    return (function(){
            return (function(v744,v745,v746){
                return l124.fvalue(values, "((", v744, ")[", v745, "] = ", v746, ")");
            })(l137.fvalue(pv, v741),l137.fvalue(pv, v742),l137.fvalue(pv, v743));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l294 = {name: "IN"};
((l253).value = ({car: l42.fvalue(pv, l294, (function (values,v747,v748){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v749,v750){
                return l136.fvalue(values, l124.fvalue(pv, "((", v749, ") in (", v750, "))"));
            })(l137.fvalue(pv, v747),l137.fvalue(pv, v748));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l295 = {name: "FUNCTIONP"};
((l253).value = ({car: l42.fvalue(pv, l295, (function (values,v751){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v752){
                return l136.fvalue(values, l124.fvalue(pv, "(typeof ", v752, " == 'function')"));
            })(l137.fvalue(pv, v751));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l296 = {name: "WRITE-STRING"};
((l253).value = ({car: l42.fvalue(pv, l296, (function (values,v753){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v754){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, l124.fvalue(pv, "var ", "x", " = ", v754, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), l124.fvalue(pv, "if (typeof ", "x", " != '", "string", "')", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), l124.fvalue(pv, "return ", "lisp.write(x)", ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())), "})()");
            })(l137.fvalue(pv, v753));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l297 = {name: "MAKE-ARRAY"};
((l253).value = ({car: l42.fvalue(pv, l297, (function (values,v755){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v756){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var r = [];", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "for (var i = 0; i < ", v756, "; i++)", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "r.push(", l137.fvalue(pv, l3.value), ");", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "return r;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v755));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l298 = {name: "ARRAYP"};
((l253).value = ({car: l42.fvalue(pv, l298, (function (values,v757){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v758){
                return l136.fvalue(values, l124.fvalue(pv, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var x = ", v758, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
            })(l137.fvalue(pv, v757));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l299 = {name: "AREF"};
((l253).value = ({car: l42.fvalue(pv, l299, (function (values,v759,v760){
    checkArgs(arguments, 3);
    return (function(){
            return (function(v761,v762){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var x = ", "(", v761, ")[", v762, "];", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "if (x === undefined) throw 'Out of range';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return x;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v759),l137.fvalue(pv, v760));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l300 = {name: "ASET"};
((l253).value = ({car: l42.fvalue(pv, l300, (function (values,v763,v764,v765){
    checkArgs(arguments, 4);
    return (function(){
            return (function(v766,v767,v768){
                return l124.fvalue(values, "(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l135.fvalue(pv, "var x = ", v766, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var i = ", v767, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return x[i] = ", v768, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })(l137.fvalue(pv, v763),l137.fvalue(pv, v764),l137.fvalue(pv, v765));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l301 = {name: "GET-UNIX-TIME"};
((l253).value = ({car: l42.fvalue(pv, l301, (function (values){
    checkArgsAtMost(arguments, 1);
    return (function(){
            return (function(){
                return l124.fvalue(values, "(Math.round(new Date() / 1000))");
            })();
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l302 = {name: "VALUES-ARRAY"};
((l253).value = ({car: l42.fvalue(pv, l302, (function (values,v769){
    checkArgs(arguments, 2);
    return (function(){
            return (function(v770){
                return ((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? l124.fvalue(values, "values.apply(this, ", v770, ")") : l124.fvalue(values, "pv.apply(this, ", v770, ")"));
            })(l137.fvalue(pv, v769));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l253).value = ({car: l42.fvalue(pv, l132, (function (values){
    var v771= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v771 = {car: arguments[i], cdr: 
    v771};
    return (function(){
            return ((function(){
                var symbol = l162;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                return value;
            })() !== l3.value ? l124.fvalue(values, "values(", l126.fvalue(pv, l69.fvalue(pv, (function(){
                var symbol = l137;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v771), ", "), ")") : l124.fvalue(values, "pv(", l126.fvalue(pv, l69.fvalue(pv, (function(){
                var symbol = l137;
                var func = symbol.fvalue;
                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                return func;
            })(), v771), ", "), ")"));
    })();
})), cdr: (function(){
    var symbol = l253;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l190).fvalue = (function(v774){
        ((v774)["fname"] = "MACRO");
        return v774;
    })((function (values,v772){
        checkArgs(arguments, 2);
        return (function(){
                return (((function(){
                    var tmp = v772;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(v773){
                    return (((l166.fvalue(pv, v773) === l190)?l4.value: l3.value) !== l3.value ? v773 : l3.value);
                })(l178.fvalue(pv, v772, (function(){
                    var symbol = l179;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98)) : l3.value);
        })();
    }));
    return l190;
})();
var l303 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l303).fvalue = (function(v779){
        ((v779)["fname"] = "LS-MACROEXPAND-1");
        return v779;
    })((function (values,v775){
        checkArgs(arguments, 2);
        return (function(){
                return (function(v776){
                    return (v776 !== l3.value ? (function(v777){
                        (l57.fvalue(pv, v777) !== l3.value ? (function(v778){
                            l169.fvalue(pv, v776, v778);
                            return (v777 = v778);
                        })(l227.fvalue(pv, v777)) : l3.value);
                        return (function(){
                            var f = v777;
                            var args = [values];
                            var tail = ((function(){
                                var tmp = v775;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })());
                            while (tail != l3.value){
                                args.push(tail.car);
                                tail = tail.cdr;
                            }
                            return f.apply(this, args);
                        })();
                    })(l167.fvalue(pv, v776)) : v775);
                })(l190.fvalue(pv, (function(){
                    var tmp = v775;
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
        })();
    }));
    return l303;
})();
var l304 = {name: "COMPILE-FUNCALL"};
var l305 = {name: "G764"};
(function(){
    (l304).fvalue = (function(v783){
        ((v783)["fname"] = "COMPILE-FUNCALL");
        return v783;
    })((function (values,v780,v781){
        checkArgs(arguments, 3);
        return (function(){
                return (function(v782){
                    return ((((function(){
                        var tmp = v780;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (((l114.fvalue(pv, v780) === l105.fvalue(pv, "COMMON-LISP"))?l4.value: l3.value) !== l3.value ? (function(){
                        var symbol = l305;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })() : l3.value) : l3.value) !== l3.value ? l124.fvalue(values, l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v780))), ".fvalue(", l126.fvalue(pv, ({car: v782, cdr: l69.fvalue(pv, (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v781)}), ", "), ")") : l124.fvalue(values, l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l98), l42.fvalue(pv, v780))), "(", l126.fvalue(pv, ({car: v782, cdr: l69.fvalue(pv, (function(){
                        var symbol = l137;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v781)}), ", "), ")"));
                })(((function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })() !== l3.value ? "values" : "pv"));
        })();
    }));
    return l304;
})();
(function(){
    (l214).fvalue = (function(v786){
        ((v786)["fname"] = "LS-COMPILE-BLOCK");
        return v786;
    })((function (values,v784,v785){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v785=l3.value;
        default: break;
        }
        return (function(){
                return (v785 !== l3.value ? l124.fvalue(values, l214.fvalue(pv, l81.fvalue(pv, v784)), "return ", l137.fvalue(pv, (function(){
                    var tmp = l80.fvalue(pv, v784);
                    return tmp === l3.value? l3.value: tmp.car;
                })(), (function(){
                    var symbol = l162;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), ";") : l127.fvalue(values, l84.fvalue(pv, (function(){
                    var symbol = l187;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), l69.fvalue(pv, (function(){
                    var symbol = l137;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v784)), l124.fvalue(pv, ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })())));
        })();
    }));
    return l214;
})();
(function(){
    (l137).fvalue = (function(v796){
        ((v796)["fname"] = "LS-COMPILE");
        return v796;
    })((function (values,v787,v788){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v788=l3.value;
        default: break;
        }
        return (function(){
                return (function(v789){
                    try {
                        var tmp;
                        tmp = l162.value;
                        l162.value = v789;
                        v789 = tmp;
                        return (((function(){
                            var tmp = v787;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value) !== l3.value ? (function(v790){
                            return ((v790 !== l3.value ? l26.fvalue(pv, l82.fvalue(pv, l194, l168.fvalue(pv, v790))) : l3.value) !== l3.value ? l167.fvalue(values, v790) : ((function(v791){
                                return (v791 !== l3.value ? v791 : l82.fvalue(pv, l196, l168.fvalue(pv, v790)));
                            })(l113.fvalue(pv, v787)) !== l3.value ? l124.fvalue(values, l137.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v787))), ".value") : l137.fvalue(values, l62.fvalue(pv, l42.fvalue(pv, l275), l42.fvalue(pv, l62.fvalue(pv, l42.fvalue(pv, l157), l42.fvalue(pv, v787)))))));
                        })(l178.fvalue(pv, v787, (function(){
                            var symbol = l179;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l99)) : (l75.fvalue(pv, v787) !== l3.value ? l16.fvalue(values, v787) : (((typeof(v787) == "string")?l4.value: l3.value) !== l3.value ? l124.fvalue(values, "\"", l140.fvalue(pv, v787), "\"") : (((function(){
                            var x = v787;
                            return typeof x === 'object' && 'length' in x;
                        })()?l4.value: l3.value) !== l3.value ? l223.fvalue(values, v787) : (l57.fvalue(pv, v787) !== l3.value ? (function(v792,v793){
                            return (l91.fvalue(pv, v792, (function(){
                                var symbol = l198;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(v794){
                                return (function(){
                                    var f = v794;
                                    var args = [values];
                                    var tail = (v793);
                                    while (tail != l3.value){
                                        args.push(tail.car);
                                        tail = tail.cdr;
                                    }
                                    return f.apply(this, args);
                                })();
                            })(l39.fvalue(pv, l91.fvalue(pv, v792, (function(){
                                var symbol = l198;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()))) : ((l91.fvalue(pv, v792, (function(){
                                var symbol = l253;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l26.fvalue(pv, l192.fvalue(pv, v792, l98, l195)) : l3.value) !== l3.value ? (function(v795){
                                return (function(){
                                    var f = v795;
                                    var args = [values];
                                    var tail = (v793);
                                    while (tail != l3.value){
                                        args.push(tail.car);
                                        tail = tail.cdr;
                                    }
                                    return f.apply(this, args);
                                })();
                            })(l39.fvalue(pv, l91.fvalue(pv, v792, (function(){
                                var symbol = l253;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()))) : (l190.fvalue(pv, v792) !== l3.value ? l137.fvalue(values, l303.fvalue(pv, v787), v788) : l304.fvalue(values, v792, v793))));
                        })((function(){
                            var tmp = v787;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v787;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })()) : (function(){
                            throw "How should I compile this?";
                        })())))));
                    }
                    finally {
                        l162.value = v789;
                    }
                })(v788);
        })();
    }));
    return l137;
})();
var l306 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l306).fvalue = (function(v803){
        ((v803)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v803;
    })((function (values,v797,v798){
        checkArgsAtLeast(arguments, 2);
        checkArgsAtMost(arguments, 3);
        switch(arguments.length-1){
        case 1:
        v798=l3.value;
        default: break;
        }
        return (function(){
                return (function(v799){
                    try {
                        var tmp;
                        tmp = l185.value;
                        l185.value = v799;
                        v799 = tmp;
                        return ((((function(){
                            var tmp = v797;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?l4.value: l3.value) !== l3.value ? (((function(){
                            var tmp = v797;
                            return tmp === l3.value? l3.value: tmp.car;
                        })() === l228)?l4.value: l3.value) : l3.value) !== l3.value ? (function(v801){
                            return l126.fvalue(values, l84.fvalue(pv, (function(){
                                var symbol = l187;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), v801));
                        })(l69.fvalue(pv, (function (values,v800){
                            checkArgs(arguments, 2);
                            return l306.fvalue(values, v800, l4.value);
                        }), (function(){
                            var tmp = v797;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())) : (function(v802){
                            return l124.fvalue(values, l127.fvalue(pv, l188.fvalue(pv), l124.fvalue(pv, ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })())), (v802 !== l3.value ? l124.fvalue(pv, v802, ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""));
                        })(l137.fvalue(pv, v797, v798)));
                    }
                    finally {
                        l185.value = v799;
                    }
                })(l3.value);
        })();
    }));
    return l306;
})();
(function(){
    (l227).fvalue = (function(v805){
        ((v805)["fname"] = "EVAL");
        return v805;
    })((function (values,v804){
        checkArgs(arguments, 2);
        return (function(){
                return (function(){
                    var string = l306.fvalue(pv, v804, l4.value);
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
    return l227;
})();
var l307 = {name: "&BODY"};
var l308 = {car: l203, cdr: {car: l202, cdr: {car: l307, cdr: {car: l19, cdr: {car: l14, cdr: {car: l115, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l264, cdr: {car: l266, cdr: {car: l18, cdr: {car: l18, cdr: {car: l263, cdr: {car: l265, cdr: {car: l52, cdr: {car: l62, cdr: {car: l287, cdr: {car: l299, cdr: {car: l298, cdr: {car: l300, cdr: {car: l91, cdr: {car: l43, cdr: {car: l175, cdr: {car: l17, cdr: {car: l17, cdr: {car: l81, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l240, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l285, cdr: {car: l73, cdr: {car: l74, cdr: {car: l72, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l71, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l1, cdr: {car: l7, cdr: {car: l86, cdr: {car: l95, cdr: {car: l97, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l278, cdr: {car: l25, cdr: {car: l279, cdr: {car: l289, cdr: {car: l227, cdr: {car: l90, cdr: {car: l121, cdr: {car: l94, cdr: {car: l105, cdr: {car: l119, cdr: {car: l38, cdr: {car: l41, cdr: {car: l274, cdr: {car: l286, cdr: {car: l98, cdr: {car: l295, cdr: {car: l15, cdr: {car: l122, cdr: {car: l247, cdr: {car: l70, cdr: {car: l200, cdr: {car: l116, cdr: {car: l44, cdr: {car: l75, cdr: {car: l75, cdr: {car: l120, cdr: {car: l113, cdr: {car: l213, cdr: {car: l80, cdr: {car: l67, cdr: {car: l232, cdr: {car: l236, cdr: {car: l101, cdr: {car: l42, cdr: {car: l57, cdr: {car: l297, cdr: {car: l102, cdr: {car: l272, cdr: {car: l69, cdr: {car: l82, cdr: {car: l77, cdr: {car: l260, cdr: {car: l133, cdr: {car: l249, cdr: {car: l134, cdr: {car: l250, cdr: {car: l3, cdr: {car: l26, cdr: {car: l79, cdr: {car: l78, cdr: {car: l11, cdr: {car: l267, cdr: {car: l53, cdr: {car: l106, cdr: {car: l108, cdr: {car: l104, cdr: {car: l76, cdr: {car: l139, cdr: {car: l142, cdr: {car: l197, cdr: {car: l54, cdr: {car: l55, cdr: {car: l228, cdr: {car: l65, cdr: {car: l46, cdr: {car: l157, cdr: {car: l83, cdr: {car: l84, cdr: {car: l85, cdr: {car: l12, cdr: {car: l239, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l216, cdr: {car: l217, cdr: {car: l89, cdr: {car: l282, cdr: {car: l92, cdr: {car: l93, cdr: {car: l281, cdr: {car: l87, cdr: {car: l225, cdr: {car: l273, cdr: {car: l114, cdr: {car: l276, cdr: {car: l275, cdr: {car: l271, cdr: {car: l4, cdr: {car: l246, cdr: {car: l40, cdr: {car: l241, cdr: {car: l24, cdr: {car: l6, cdr: {car: l248, cdr: {car: l132, cdr: {car: l131, cdr: {car: l99, cdr: {car: l141, cdr: {car: l5, cdr: {car: l96, cdr: {car: l296, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l121.fvalue(values, l308);
((l115).value = (function(){
    var symbol = l111;
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
    var symbol = l161;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l139;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l227;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function (values,v806){
    checkArgs(arguments, 2);
    return l306.fvalue(values, v806, l4.value);
}));
(lisp.evalString = (function (values,v807){
    checkArgs(arguments, 2);
    return l227.fvalue(values, l161.fvalue(pv, v807));
}));
(lisp.compileString = (function (values,v808){
    checkArgs(arguments, 2);
    return l306.fvalue(values, l161.fvalue(pv, v808), l4.value);
}));
var l309 = {car: {car: l307, cdr: "l307"}, cdr: {car: {car: l306, cdr: "l306"}, cdr: {car: {car: l305, cdr: "l305"}, cdr: {car: {car: l304, cdr: "l304"}, cdr: {car: {car: l303, cdr: "l303"}, cdr: {car: {car: l302, cdr: "l302"}, cdr: {car: {car: l301, cdr: "l301"}, cdr: {car: {car: l300, cdr: "l300"}, cdr: {car: {car: l299, cdr: "l299"}, cdr: {car: {car: l298, cdr: "l298"}, cdr: {car: {car: l297, cdr: "l297"}, cdr: {car: {car: l296, cdr: "l296"}, cdr: {car: {car: l295, cdr: "l295"}, cdr: {car: {car: l294, cdr: "l294"}, cdr: {car: {car: l293, cdr: "l293"}, cdr: {car: {car: l292, cdr: "l292"}, cdr: {car: {car: l291, cdr: "l291"}, cdr: {car: {car: l290, cdr: "l290"}, cdr: {car: {car: l289, cdr: "l289"}, cdr: {car: {car: l288, cdr: "l288"}, cdr: {car: {car: l287, cdr: "l287"}, cdr: {car: {car: l286, cdr: "l286"}, cdr: {car: {car: l285, cdr: "l285"}, cdr: {car: {car: l284, cdr: "l284"}, cdr: {car: {car: l283, cdr: "l283"}, cdr: {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l310 = {name: "OP"};
var l311 = {name: "SYM"};
var l312 = {name: "X"};
var l313 = {name: "ARGS"};
var l314 = {name: "BODY"};
var l315 = {name: "DECLS"};
var l316 = {name: "DECL"};
var l317 = {name: "NAME"};
var l318 = {name: "ARG"};
var l319 = {name: "FORM"};
var l320 = {name: "VALUE-FROM"};
var l321 = {name: "VARIABLES"};
var l322 = {name: "PACKAGE-DESIGNATOR"};
var l323 = {name: "PAIRS"};
var l324 = {name: "ASSIGNMENTS"};
var l325 = {name: "VALUE"};
var l326 = {name: "FORM1"};
var l327 = {name: "RESULT"};
var l328 = {name: "FORMS"};
var l329 = {name: "G"};
var l330 = {name: "CLAUSULES"};
var l331 = {name: "!FORM"};
var l332 = {name: "CLAUSULE"};
var l333 = {name: "ITER"};
var l334 = {name: "G!TO"};
var l335 = {name: "VAR"};
var l336 = {name: "TO"};
var l337 = {name: "G!LIST"};
var l338 = {name: "PLACE"};
var l339 = {name: "DELTA"};
var l340 = {name: "CONDITION"};
var l341 = {name: "DOCSTRING"};
var l342 = {car: {car: {car: l253, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l243, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l242, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l237, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l221, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l220, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l201, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l198, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l185, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: {car: l196, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l194, cdr: {car: l196, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l262, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l310, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l254, cdr: {car: {car: l160, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l312, cdr: {car: l203, cdr: {car: l313, cdr: l3}}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l313, cdr: {car: {car: l27, cdr: {car: l312, cdr: {car: l313, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l258, cdr: {car: l313, cdr: {car: {car: l136, cdr: {car: {car: l261, cdr: {car: l313, cdr: {car: {car: l160, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l258, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l6, cdr: {car: {car: l271, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l289, cdr: {car: "Bad usage of VARIABLE-ARITY, you must pass a symbol", cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l257, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: l3}, cdr: {car: {car: l124, cdr: {car: "return ", cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l256, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l315, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l138, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l213, cdr: {car: {car: l316, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l124, cdr: {car: "var ", cdr: {car: {car: l160, cdr: {car: {car: l38, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l160, cdr: {car: {car: l40, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l315, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l213, cdr: {car: {car: l316, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l124, cdr: {car: "if (typeof ", cdr: {car: {car: l160, cdr: {car: {car: l38, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l160, cdr: {car: {car: l39, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l123, cdr: {car: {car: l135, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l160, cdr: {car: {car: l38, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l160, cdr: {car: {car: l39, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l123, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l315, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l124, cdr: {car: "return ", cdr: {car: {car: l228, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l255, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l228, cdr: {car: {car: l254, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l232, cdr: {car: {car: l160, cdr: {car: {car: l69, cdr: {car: {car: l213, cdr: {car: {car: l318, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: {car: l160, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l137, cdr: {car: {car: l160, cdr: {car: l318, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l313, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l254, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l253, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l319, cdr: l3}, cdr: {car: {car: l251, cdr: {car: l319, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l319, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l199, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l137, cdr: {car: {car: l160, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l199, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l198, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l203, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l124, cdr: {car: "(function(){", cdr: {car: l123, cdr: {car: {car: l135, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l320, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l249, cdr: {car: {car: l98, cdr: {car: l42, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l320, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l321, cdr: {car: l320, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l249, cdr: {car: {car: l213, cdr: {car: {car: l202, cdr: {car: {car: l159, cdr: {car: l321, cdr: l3}}, cdr: {car: l203, cdr: {car: {car: l160, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l160, cdr: {car: l320, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l99, cdr: {car: l203, cdr: {car: l319, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l124, cdr: {car: {car: l160, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l228, cdr: {car: {car: l159, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l322, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l226, cdr: {car: {car: l217, cdr: {car: l115, cdr: {car: {car: l103, cdr: {car: {car: l160, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l203, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l324, cdr: {car: {car: l157, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l13, cdr: {car: l4, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l12, cdr: l3}, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l323, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l289, cdr: {car: "Odd paris in PSETQ", cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l232, cdr: {car: {car: {car: l99, cdr: {car: {car: l29, cdr: {car: l323, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l325, cdr: {car: {car: l32, cdr: {car: l323, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l158, cdr: {car: {car: {car: l160, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l325, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: l324, cdr: l3}}}, cdr: {car: {car: l217, cdr: {car: l323, cdr: {car: {car: l34, cdr: {car: l323, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l217, cdr: {car: l324, cdr: {car: {car: l64, cdr: {car: l324, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l232, cdr: {car: {car: l160, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l30, cdr: l3}}, cdr: {car: l324, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l159, cdr: {car: {car: l58, cdr: {car: {car: l98, cdr: {car: l62, cdr: l3}}, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l81, cdr: l3}}, cdr: {car: l324, cdr: l3}}}, cdr: {car: {car: l157, cdr: {car: l3, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l326, cdr: {car: l327, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l54, cdr: {car: {car: l228, cdr: {car: {car: l160, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l327, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l319, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l325, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l232, cdr: {car: {car: {car: {car: l160, cdr: {car: l325, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l325, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l203, cdr: {car: l328, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l328, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l232, cdr: {car: {car: {car: l329, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l232, cdr: {car: {car: {car: {car: l160, cdr: {car: l329, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l200, cdr: {car: {car: l160, cdr: {car: l329, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l329, cdr: l3}}, cdr: {car: {car: l53, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l203, cdr: {car: l328, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l328, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l158, cdr: {car: {car: l200, cdr: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l52, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l328, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l319, cdr: {car: l203, cdr: {car: l330, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l50, cdr: {car: {car: l160, cdr: {car: l319, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l62, cdr: {car: l330, cdr: {car: {car: l158, cdr: {car: {car: {car: l4, cdr: {car: {car: l289, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l319, cdr: {car: l203, cdr: {car: l330, cdr: l3}}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l331, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l232, cdr: {car: {car: {car: {car: l160, cdr: {car: l331, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l49, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l213, cdr: {car: {car: l332, cdr: l3}, cdr: {car: {car: l200, cdr: {car: {car: l278, cdr: {car: {car: l29, cdr: {car: l332, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l332, cdr: {car: {car: l158, cdr: {car: {car: {car: l25, cdr: {car: {car: l160, cdr: {car: l331, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l332, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l332, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l330, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l203, cdr: {car: l330, cdr: l3}}, cdr: {car: {car: l200, cdr: {car: {car: l11, cdr: {car: l330, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l200, cdr: {car: {car: l278, cdr: {car: {car: l31, cdr: {car: l330, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l228, cdr: {car: {car: l159, cdr: {car: {car: l33, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l200, cdr: {car: {car: l160, cdr: {car: {car: l31, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l228, cdr: {car: {car: l159, cdr: {car: {car: l33, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l330, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l333, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l334, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l335, cdr: {car: {car: l38, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l336, cdr: {car: {car: l39, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l327, cdr: {car: {car: l40, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l175, cdr: {car: l3, cdr: {car: {car: l232, cdr: {car: {car: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l336, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l224, cdr: {car: {car: l264, cdr: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l334, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l246, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l44, cdr: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l327, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l333, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l335, cdr: {car: {car: l38, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l337, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l175, cdr: {car: l3, cdr: {car: {car: l232, cdr: {car: {car: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: {car: l39, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l224, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l335, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l246, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: {car: {car: l30, cdr: {car: {car: l160, cdr: {car: l337, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l160, cdr: {car: {car: l40, cdr: {car: l333, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l312, cdr: {car: l338, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l338, cdr: l3}}, cdr: {car: {car: l27, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l338, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l312, cdr: {car: l202, cdr: {car: {car: l339, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l60, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l339, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l312, cdr: {car: l202, cdr: {car: {car: l339, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l339, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l340, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l175, cdr: {car: l3, cdr: {car: {car: l224, cdr: {car: {car: l160, cdr: {car: l340, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l202, cdr: {car: l325, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l239, cdr: {car: l3, cdr: {car: {car: l160, cdr: {car: l325, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l228, cdr: {car: {car: l274, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l160, cdr: {car: {car: l273, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l200, cdr: {car: {car: l52, cdr: {car: {car: l281, cdr: {car: {car: l29, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l26, cdr: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l160, cdr: {car: {car: l29, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: {car: l30, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l175, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l232, cdr: {car: {car: {car: l312, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l232, cdr: {car: {car: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l160, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l293, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l312, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l325, cdr: {car: l202, cdr: {car: l341, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l228, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l325, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: {car: l5, cdr: {car: {car: l281, cdr: {car: l341, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l293, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l160, cdr: {car: l341, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l325, cdr: {car: l202, cdr: {car: l341, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l228, cdr: {car: {car: l2, cdr: {car: {car: l194, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l160, cdr: {car: l325, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l159, cdr: {car: {car: l5, cdr: {car: {car: l281, cdr: {car: l341, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: {car: l293, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l160, cdr: {car: l341, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l340, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l200, cdr: {car: {car: l160, cdr: {car: l340, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l228, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l340, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}, cdr: {car: {car: l158, cdr: {car: {car: l200, cdr: {car: {car: l160, cdr: {car: l340, cdr: l3}}, cdr: {car: {car: l228, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l203, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l158, cdr: {car: {car: l226, cdr: {car: {car: l159, cdr: {car: {car: l69, cdr: {car: {car: l213, cdr: {car: {car: l316, cdr: l3}, cdr: {car: {car: l158, cdr: {car: {car: l193, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l315, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l190, cdr: {car: {car: l213, cdr: {car: {car: l317, cdr: {car: l313, cdr: {car: l203, cdr: {car: l314, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: {car: l226, cdr: {car: {car: l189, cdr: {car: {car: l157, cdr: {car: {car: l160, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l157, cdr: {car: {car: l213, cdr: {car: {car: l160, cdr: {car: {car: l69, cdr: {car: {car: l213, cdr: {car: {car: l312, cdr: l3}, cdr: {car: {car: l200, cdr: {car: {car: l278, cdr: {car: l312, cdr: {car: {car: l157, cdr: {car: l307, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l157, cdr: {car: l203, cdr: l3}}, cdr: {car: l312, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l313, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l159, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l117.fvalue(pv, l307);
    l117.fvalue(pv, l306);
    l117.fvalue(pv, l305);
    l117.fvalue(pv, l304);
    l117.fvalue(pv, l303);
    l117.fvalue(pv, l302);
    l117.fvalue(pv, l301);
    l117.fvalue(pv, l300);
    l117.fvalue(pv, l299);
    l117.fvalue(pv, l298);
    l117.fvalue(pv, l297);
    l117.fvalue(pv, l296);
    l117.fvalue(pv, l295);
    l117.fvalue(pv, l294);
    l117.fvalue(pv, l293);
    l117.fvalue(pv, l292);
    l117.fvalue(pv, l291);
    l117.fvalue(pv, l290);
    l117.fvalue(pv, l289);
    l117.fvalue(pv, l288);
    l117.fvalue(pv, l287);
    l117.fvalue(pv, l286);
    l117.fvalue(pv, l285);
    l117.fvalue(pv, l284);
    l117.fvalue(pv, l283);
    l117.fvalue(pv, l282);
    l117.fvalue(pv, l281);
    l117.fvalue(pv, l280);
    l117.fvalue(pv, l279);
    l117.fvalue(pv, l278);
    l117.fvalue(pv, l277);
    l117.fvalue(pv, l276);
    l117.fvalue(pv, l275);
    l117.fvalue(pv, l274);
    l117.fvalue(pv, l273);
    l117.fvalue(pv, l272);
    l117.fvalue(pv, l271);
    l117.fvalue(pv, l270);
    l117.fvalue(pv, l269);
    l117.fvalue(pv, l268);
    l117.fvalue(pv, l267);
    l117.fvalue(pv, l266);
    l117.fvalue(pv, l265);
    l117.fvalue(pv, l264);
    l117.fvalue(pv, l263);
    l117.fvalue(pv, l262);
    l117.fvalue(pv, l261);
    l117.fvalue(pv, l260);
    l117.fvalue(pv, l259);
    l117.fvalue(pv, l258);
    l117.fvalue(pv, l257);
    l117.fvalue(pv, l256);
    l117.fvalue(pv, l255);
    l117.fvalue(pv, l254);
    l117.fvalue(pv, l253);
    l117.fvalue(pv, l252);
    l117.fvalue(pv, l251);
    l117.fvalue(pv, l250);
    l117.fvalue(pv, l249);
    l117.fvalue(pv, l248);
    l117.fvalue(pv, l247);
    l117.fvalue(pv, l246);
    l117.fvalue(pv, l245);
    l117.fvalue(pv, l244);
    l117.fvalue(pv, l243);
    l117.fvalue(pv, l242);
    l117.fvalue(pv, l241);
    l117.fvalue(pv, l240);
    l117.fvalue(pv, l239);
    l117.fvalue(pv, l238);
    l117.fvalue(pv, l237);
    l117.fvalue(pv, l236);
    l117.fvalue(pv, l235);
    l117.fvalue(pv, l234);
    l117.fvalue(pv, l233);
    l117.fvalue(pv, l232);
    l117.fvalue(pv, l231);
    l117.fvalue(pv, l230);
    l117.fvalue(pv, l229);
    l117.fvalue(pv, l228);
    l117.fvalue(pv, l227);
    l117.fvalue(pv, l226);
    l117.fvalue(pv, l225);
    l117.fvalue(pv, l224);
    l117.fvalue(pv, l223);
    l117.fvalue(pv, l222);
    l117.fvalue(pv, l221);
    l117.fvalue(pv, l220);
    l117.fvalue(pv, l219);
    l117.fvalue(pv, l218);
    l117.fvalue(pv, l217);
    l117.fvalue(pv, l216);
    l117.fvalue(pv, l215);
    l117.fvalue(pv, l214);
    l117.fvalue(pv, l213);
    l117.fvalue(pv, l212);
    l117.fvalue(pv, l211);
    l117.fvalue(pv, l210);
    l117.fvalue(pv, l209);
    l117.fvalue(pv, l208);
    l117.fvalue(pv, l207);
    l117.fvalue(pv, l206);
    l117.fvalue(pv, l205);
    l117.fvalue(pv, l203);
    l117.fvalue(pv, l202);
    l117.fvalue(pv, l201);
    l117.fvalue(pv, l200);
    l117.fvalue(pv, l199);
    l117.fvalue(pv, l198);
    l117.fvalue(pv, l197);
    l117.fvalue(pv, l196);
    l117.fvalue(pv, l195);
    l117.fvalue(pv, l194);
    l117.fvalue(pv, l193);
    l117.fvalue(pv, l192);
    l117.fvalue(pv, l191);
    l117.fvalue(pv, l190);
    l117.fvalue(pv, l189);
    l117.fvalue(pv, l188);
    l117.fvalue(pv, l187);
    l117.fvalue(pv, l186);
    l117.fvalue(pv, l185);
    l117.fvalue(pv, l184);
    l117.fvalue(pv, l183);
    l117.fvalue(pv, l182);
    l117.fvalue(pv, l181);
    l117.fvalue(pv, l180);
    l117.fvalue(pv, l179);
    l117.fvalue(pv, l178);
    l117.fvalue(pv, l177);
    l117.fvalue(pv, l176);
    l117.fvalue(pv, l175);
    l117.fvalue(pv, l174);
    l117.fvalue(pv, l173);
    l117.fvalue(pv, l172);
    l117.fvalue(pv, l171);
    l117.fvalue(pv, l170);
    l117.fvalue(pv, l169);
    l117.fvalue(pv, l168);
    l117.fvalue(pv, l167);
    l117.fvalue(pv, l166);
    l117.fvalue(pv, l165);
    l117.fvalue(pv, l164);
    l117.fvalue(pv, l163);
    l117.fvalue(pv, l162);
    l117.fvalue(pv, l161);
    l117.fvalue(pv, l160);
    l117.fvalue(pv, l159);
    l117.fvalue(pv, l158);
    l117.fvalue(pv, l157);
    l117.fvalue(pv, l156);
    l117.fvalue(pv, l155);
    l117.fvalue(pv, l154);
    l117.fvalue(pv, l153);
    l117.fvalue(pv, l152);
    l117.fvalue(pv, l151);
    l117.fvalue(pv, l150);
    l117.fvalue(pv, l149);
    l117.fvalue(pv, l148);
    l117.fvalue(pv, l147);
    l117.fvalue(pv, l146);
    l117.fvalue(pv, l145);
    l117.fvalue(pv, l144);
    l117.fvalue(pv, l143);
    l117.fvalue(pv, l142);
    l117.fvalue(pv, l141);
    l117.fvalue(pv, l140);
    l117.fvalue(pv, l139);
    l117.fvalue(pv, l138);
    l117.fvalue(pv, l137);
    l117.fvalue(pv, l136);
    l117.fvalue(pv, l135);
    l117.fvalue(pv, l134);
    l117.fvalue(pv, l133);
    l117.fvalue(pv, l132);
    l117.fvalue(pv, l131);
    l117.fvalue(pv, l130);
    l117.fvalue(pv, l129);
    l117.fvalue(pv, l128);
    l117.fvalue(pv, l127);
    l117.fvalue(pv, l126);
    l117.fvalue(pv, l125);
    l117.fvalue(pv, l124);
    l117.fvalue(pv, l123);
    l117.fvalue(pv, l122);
    l117.fvalue(pv, l121);
    l117.fvalue(pv, l120);
    l117.fvalue(pv, l119);
    l117.fvalue(pv, l118);
    l117.fvalue(pv, l117);
    l117.fvalue(pv, l116);
    l117.fvalue(pv, l115);
    l117.fvalue(pv, l114);
    l117.fvalue(pv, l113);
    l117.fvalue(pv, l112);
    l117.fvalue(pv, l111);
    l117.fvalue(pv, l110);
    l117.fvalue(pv, l109);
    l117.fvalue(pv, l108);
    l117.fvalue(pv, l107);
    l117.fvalue(pv, l106);
    l117.fvalue(pv, l105);
    l117.fvalue(pv, l104);
    l117.fvalue(pv, l103);
    l117.fvalue(pv, l102);
    l117.fvalue(pv, l101);
    l117.fvalue(pv, l100);
    l117.fvalue(pv, l99);
    l117.fvalue(pv, l98);
    l117.fvalue(pv, l97);
    l117.fvalue(pv, l96);
    l117.fvalue(pv, l95);
    l117.fvalue(pv, l94);
    l117.fvalue(pv, l93);
    l117.fvalue(pv, l92);
    l117.fvalue(pv, l91);
    l117.fvalue(pv, l90);
    l117.fvalue(pv, l89);
    l117.fvalue(pv, l88);
    l117.fvalue(pv, l87);
    l117.fvalue(pv, l86);
    l117.fvalue(pv, l85);
    l117.fvalue(pv, l84);
    l117.fvalue(pv, l83);
    l117.fvalue(pv, l82);
    l117.fvalue(pv, l81);
    l117.fvalue(pv, l80);
    l117.fvalue(pv, l79);
    l117.fvalue(pv, l78);
    l117.fvalue(pv, l77);
    l117.fvalue(pv, l76);
    l117.fvalue(pv, l75);
    l117.fvalue(pv, l74);
    l117.fvalue(pv, l73);
    l117.fvalue(pv, l72);
    l117.fvalue(pv, l71);
    l117.fvalue(pv, l70);
    l117.fvalue(pv, l69);
    l117.fvalue(pv, l68);
    l117.fvalue(pv, l67);
    l117.fvalue(pv, l66);
    l117.fvalue(pv, l65);
    l117.fvalue(pv, l64);
    l117.fvalue(pv, l63);
    l117.fvalue(pv, l62);
    l117.fvalue(pv, l61);
    l117.fvalue(pv, l60);
    l117.fvalue(pv, l59);
    l117.fvalue(pv, l58);
    l117.fvalue(pv, l57);
    l117.fvalue(pv, l56);
    l117.fvalue(pv, l55);
    l117.fvalue(pv, l54);
    l117.fvalue(pv, l53);
    l117.fvalue(pv, l52);
    l117.fvalue(pv, l51);
    l117.fvalue(pv, l50);
    l117.fvalue(pv, l49);
    l117.fvalue(pv, l48);
    l117.fvalue(pv, l47);
    l117.fvalue(pv, l46);
    l117.fvalue(pv, l45);
    l117.fvalue(pv, l44);
    l117.fvalue(pv, l43);
    l117.fvalue(pv, l42);
    l117.fvalue(pv, l41);
    l117.fvalue(pv, l40);
    l117.fvalue(pv, l39);
    l117.fvalue(pv, l38);
    l117.fvalue(pv, l37);
    l117.fvalue(pv, l36);
    l117.fvalue(pv, l35);
    l117.fvalue(pv, l34);
    l117.fvalue(pv, l33);
    l117.fvalue(pv, l32);
    l117.fvalue(pv, l31);
    l117.fvalue(pv, l30);
    l117.fvalue(pv, l29);
    l117.fvalue(pv, l28);
    l117.fvalue(pv, l27);
    l117.fvalue(pv, l26);
    l117.fvalue(pv, l25);
    l117.fvalue(pv, l24);
    l117.fvalue(pv, l23);
    l117.fvalue(pv, l22);
    l117.fvalue(pv, l21);
    l117.fvalue(pv, l20);
    l117.fvalue(pv, l19);
    l117.fvalue(pv, l18);
    l117.fvalue(pv, l17);
    l117.fvalue(pv, l16);
    l117.fvalue(pv, l15);
    l117.fvalue(pv, l14);
    l117.fvalue(pv, l13);
    l117.fvalue(pv, l12);
    l117.fvalue(pv, l11);
    l117.fvalue(pv, l10);
    l117.fvalue(pv, l9);
    l117.fvalue(pv, l8);
    l117.fvalue(pv, l7);
    l117.fvalue(pv, l6);
    l117.fvalue(pv, l5);
    l117.fvalue(pv, l4);
    l117.fvalue(pv, l3);
    l117.fvalue(pv, l2);
    l117.fvalue(pv, l1);
    ((l220).value = l309);
    ((l179).value = l342);
    ((l180).value = 808);
    ((l14).value = 206);
    return ((l237).value = 280);
})();
((l221).value = 342);
