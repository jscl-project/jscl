var l1 = {name: "DEFMACRO"};
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
    (l11).function = (function(v2){
        ((v2)["fname"] = "NULL");
        return v2;
    })((function (v1){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v1 === l3.value)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 1)
                    return cf.value;
                else
                    throw cf;
            }
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
    (((l14.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l14).value = 0);
    })());
    return l14;
})();
var l15 = {name: "GENSYM"};
var l16 = {name: "INTEGER-TO-STRING"};
(function(){
    (l15).function = (function(v4){
        ((v4)["fname"] = "GENSYM");
        return v4;
    })((function (v3){
        if (arguments.length > 1) throw 'too many arguments';
        switch(arguments.length){
        case 0:
        v3="G";
        default: break;
        }
        return (function(){
            try {
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
                            var string2 = (function(){
                                var symbol = l16;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()((function(){
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 2)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l15;
})();
var l17 = {name: "BOUNDP"};
(function(){
    (l17).function = (function(v6){
        ((v6)["fname"] = "BOUNDP");
        return v6;
    })((function (v5){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v5.value !== undefined)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 3)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l17;
})();
var l18 = {name: "="};
(function(){
    (l18).function = (function(v9){
        ((v9)["fname"] = "=");
        return v9;
    })((function (v7,v8){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v7;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v8;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 4)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l18;
})();
var l19 = {name: "*"};
(function(){
    (l19).function = (function(v12){
        ((v12)["fname"] = "*");
        return v12;
    })((function (v10,v11){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v10;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v11;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1*x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 5)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l19;
})();
var l20 = {name: "/"};
(function(){
    (l20).function = (function(v15){
        ((v15)["fname"] = "/");
        return v15;
    })((function (v13,v14){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v13;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v14;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1/x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 6)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l20;
})();
var l21 = {name: "1+"};
(function(){
    (l21).function = (function(v17){
        ((v17)["fname"] = "1+");
        return v17;
    })((function (v16){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v16;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 7)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l21;
})();
var l22 = {name: "1-"};
(function(){
    (l22).function = (function(v19){
        ((v19)["fname"] = "1-");
        return v19;
    })((function (v18){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v18;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1-x2;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 8)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l22;
})();
var l23 = {name: "ZEROP"};
(function(){
    (l23).function = (function(v21){
        ((v21)["fname"] = "ZEROP");
        return v21;
    })((function (v20){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v20;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 0;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 9)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l23;
})();
var l24 = {name: "TRUNCATE"};
(function(){
    (l24).function = (function(v24){
        ((v24)["fname"] = "TRUNCATE");
        return v24;
    })((function (v22,v23){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 10)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l24;
})();
var l25 = {name: "EQL"};
(function(){
    (l25).function = (function(v27){
        ((v27)["fname"] = "EQL");
        return v27;
    })((function (v25,v26){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v25 === v26)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 11)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l25;
})();
var l26 = {name: "NOT"};
(function(){
    (l26).function = (function(v29){
        ((v29)["fname"] = "NOT");
        return v29;
    })((function (v28){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (v28 !== l3.value ? l3.value : l4.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 12)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l26;
})();
var l27 = {name: "CONS"};
(function(){
    (l27).function = (function(v32){
        ((v32)["fname"] = "CONS");
        return v32;
    })((function (v30,v31){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v30, cdr: v31});
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 13)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l27;
})();
var l28 = {name: "CONSP"};
(function(){
    (l28).function = (function(v34){
        ((v34)["fname"] = "CONSP");
        return v34;
    })((function (v33){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var tmp = v33;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 14)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l28;
})();
var l29 = {name: "CAR"};
(function(){
    (l29).function = (function(v36){
        ((v36)["fname"] = "CAR");
        return v36;
    })((function(){
        var func = (function (v35){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v35;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 15)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        });
        func.docstring = 'Return the CAR part of a cons, or NIL if X is null.';
        return func;
    })());
    return l29;
})();
var l30 = {name: "CDR"};
(function(){
    (l30).function = (function(v38){
        ((v38)["fname"] = "CDR");
        return v38;
    })((function (v37){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v37;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 16)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l30;
})();
var l31 = {name: "CAAR"};
(function(){
    (l31).function = (function(v40){
        ((v40)["fname"] = "CAAR");
        return v40;
    })((function (v39){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v39;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 17)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l31;
})();
var l32 = {name: "CADR"};
(function(){
    (l32).function = (function(v42){
        ((v42)["fname"] = "CADR");
        return v42;
    })((function (v41){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v41;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 18)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l32;
})();
var l33 = {name: "CDAR"};
(function(){
    (l33).function = (function(v44){
        ((v44)["fname"] = "CDAR");
        return v44;
    })((function (v43){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v43;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 19)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l33;
})();
var l34 = {name: "CDDR"};
(function(){
    (l34).function = (function(v46){
        ((v46)["fname"] = "CDDR");
        return v46;
    })((function (v45){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = (function(){
                            var tmp = v45;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 20)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l34;
})();
var l35 = {name: "CADDR"};
(function(){
    (l35).function = (function(v48){
        ((v48)["fname"] = "CADDR");
        return v48;
    })((function (v47){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 21)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l35;
})();
var l36 = {name: "CDDDR"};
(function(){
    (l36).function = (function(v50){
        ((v50)["fname"] = "CDDDR");
        return v50;
    })((function (v49){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 22)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l36;
})();
var l37 = {name: "CADDDR"};
(function(){
    (l37).function = (function(v52){
        ((v52)["fname"] = "CADDDR");
        return v52;
    })((function (v51){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 23)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l37;
})();
var l38 = {name: "FIRST"};
(function(){
    (l38).function = (function(v54){
        ((v54)["fname"] = "FIRST");
        return v54;
    })((function (v53){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = v53;
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 24)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l38;
})();
var l39 = {name: "SECOND"};
(function(){
    (l39).function = (function(v56){
        ((v56)["fname"] = "SECOND");
        return v56;
    })((function (v55){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l32.function(v55);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 25)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l39;
})();
var l40 = {name: "THIRD"};
(function(){
    (l40).function = (function(v58){
        ((v58)["fname"] = "THIRD");
        return v58;
    })((function (v57){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l35.function(v57);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 26)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l40;
})();
var l41 = {name: "FOURTH"};
(function(){
    (l41).function = (function(v60){
        ((v60)["fname"] = "FOURTH");
        return v60;
    })((function (v59){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l37.function(v59);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 27)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l41;
})();
var l42 = {name: "LIST"};
(function(){
    (l42).function = (function(v62){
        ((v62)["fname"] = "LIST");
        return v62;
    })((function (){
        var v61= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v61 = {car: arguments[i], cdr: 
        v61};
        return (function(){
            try {
                return (function(){
                    return v61;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 28)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l42;
})();
var l43 = {name: "ATOM"};
(function(){
    (l43).function = (function(v64){
        ((v64)["fname"] = "ATOM");
        return v64;
    })((function (v63){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l26.function(((function(){
                        var tmp = v63;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 29)
                    return cf.value;
                else
                    throw cf;
            }
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
    (l56).function = (function(v66){
        ((v66)["fname"] = "ENSURE-LIST");
        return v66;
    })((function (v65){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var symbol = l57;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v65) !== l3.value ? v65 : l42.function(v65));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 30)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l56;
})();
var l58 = {name: "!REDUCE"};
(function(){
    (l58).function = (function(v70){
        ((v70)["fname"] = "!REDUCE");
        return v70;
    })((function (v67,v68,v69){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v68) !== l3.value ? v69 : l58.function(v67, (function(){
                        var tmp = v68;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), (v67)(v69, (function(){
                        var tmp = v68;
                        return tmp === l3.value? l3.value: tmp.car;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 31)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l58;
})();
var l59 = {name: "+"};
(function(){
    (l59).function = (function(v75){
        ((v75)["fname"] = "+");
        return v75;
    })((function (){
        var v71= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v71 = {car: arguments[i], cdr: 
        v71};
        return (function(){
            try {
                return (function(){
                    return (function(v72){
                        return (function(){
                            try {
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
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 33)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 32)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l59;
})();
var l60 = {name: "-"};
(function(){
    (l60).function = (function(v81){
        ((v81)["fname"] = "-");
        return v81;
    })((function (v77){
        if (arguments.length < 1) throw 'too few arguments';
        var v76= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v76 = {car: arguments[i], cdr: 
        v76};
        return (function(){
            try {
                return (function(){
                    return (l11.function(v76) !== l3.value ? (function(){
                        var x1 = v77;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        return -x1;
                    })() : (function(v78){
                        return (function(){
                            try {
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
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 35)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(v77));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 34)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l60;
})();
var l61 = {name: "APPEND-TWO"};
var l62 = {name: "APPEND"};
(function(){
    (l61).function = (function(v84){
        ((v84)["fname"] = "APPEND-TWO");
        return v84;
    })((function (v82,v83){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v82) !== l3.value ? v83 : ({car: (function(){
                        var tmp = v82;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: (function(){
                        var symbol = l62;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = v82;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v83)}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 36)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l61;
})();
(function(){
    (l62).function = (function(v86){
        ((v86)["fname"] = "APPEND");
        return v86;
    })((function (){
        var v85= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v85 = {car: arguments[i], cdr: 
        v85};
        return (function(){
            try {
                return (function(){
                    return l58.function((function(){
                        var symbol = l61;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v85, l3);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 37)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l62;
})();
var l63 = {name: "REVAPPEND"};
(function(){
    (l63).function = (function(v89){
        ((v89)["fname"] = "REVAPPEND");
        return v89;
    })((function (v87,v88){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
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
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 39)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v88;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 38)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l63;
})();
var l64 = {name: "REVERSE"};
(function(){
    (l64).function = (function(v91){
        ((v91)["fname"] = "REVERSE");
        return v91;
    })((function (v90){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l63.function(v90, l3);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 40)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l64;
})();
var l65 = {name: "PSETQ"};
l65;
var l66 = {name: "LIST-LENGTH"};
(function(){
    (l66).function = (function(v94){
        ((v94)["fname"] = "LIST-LENGTH");
        return v94;
    })((function (v92){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v93){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.function(l11.function(v92)) !== l3.value){
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
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 42)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v93;
                    })(0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 41)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l66;
})();
var l67 = {name: "LENGTH"};
(function(){
    (l67).function = (function(v96){
        ((v96)["fname"] = "LENGTH");
        return v96;
    })((function (v95){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v95) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var x = v95;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.length;
                        })();
                    })() : (((function(){
                        var x = v95;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = (v95)["length"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })() : ((function(){
                        var symbol = l57;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v95) !== l3.value ? (function(){
                        return l66.function(v95);
                    })() : l3.value)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 43)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l67;
})();
var l68 = {name: "CONCAT-TWO"};
(function(){
    (l68).function = (function(v99){
        ((v99)["fname"] = "CONCAT-TWO");
        return v99;
    })((function (v97,v98){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 44)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l68;
})();
var l69 = {name: "MAPCAR"};
(function(){
    (l69).function = (function(v102){
        ((v102)["fname"] = "MAPCAR");
        return v102;
    })((function (v100,v101){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v101) !== l3.value ? l3 : ({car: (v100)((function(){
                        var tmp = v101;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), cdr: l69.function(v100, (function(){
                        var tmp = v101;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 45)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l69;
})();
var l70 = {name: "IDENTITY"};
(function(){
    (l70).function = (function(v104){
        ((v104)["fname"] = "IDENTITY");
        return v104;
    })((function (v103){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v103;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 46)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l70;
})();
var l71 = {name: "COPY-LIST"};
(function(){
    (l71).function = (function(v106){
        ((v106)["fname"] = "COPY-LIST");
        return v106;
    })((function (v105){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.function((function(){
                        var symbol = l70;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v105);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 47)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l71;
})();
var l72 = {name: "CODE-CHAR"};
(function(){
    (l72).function = (function(v108){
        ((v108)["fname"] = "CODE-CHAR");
        return v108;
    })((function (v107){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v107;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 48)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l72;
})();
var l73 = {name: "CHAR-CODE"};
(function(){
    (l73).function = (function(v110){
        ((v110)["fname"] = "CHAR-CODE");
        return v110;
    })((function (v109){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return v109;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 49)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l73;
})();
var l74 = {name: "CHAR="};
(function(){
    (l74).function = (function(v113){
        ((v113)["fname"] = "CHAR=");
        return v113;
    })((function (v111,v112){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v111;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v112;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1==x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 50)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l74;
})();
var l75 = {name: "INTEGERP"};
(function(){
    (l75).function = (function(v115){
        ((v115)["fname"] = "INTEGERP");
        return v115;
    })((function (v114){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 51)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l75;
})();
var l76 = {name: "PLUSP"};
(function(){
    (l76).function = (function(v117){
        ((v117)["fname"] = "PLUSP");
        return v117;
    })((function (v116){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = 0;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v116;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 52)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l76;
})();
var l77 = {name: "MINUSP"};
(function(){
    (l77).function = (function(v119){
        ((v119)["fname"] = "MINUSP");
        return v119;
    })((function (v118){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = v118;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 0;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 53)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l77;
})();
(function(){
    (l57).function = (function(v122){
        ((v122)["fname"] = "LISTP");
        return v122;
    })((function (v120){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v121){
                        return (v121 !== l3.value ? v121 : l11.function(v120));
                    })(((function(){
                        var tmp = v120;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 54)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l57;
})();
var l78 = {name: "NTHCDR"};
(function(){
    (l78).function = (function(v125){
        ((v125)["fname"] = "NTHCDR");
        return v125;
    })((function (v123,v124){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while((l76.function(v123) !== l3.value ? v124 : l3.value) !== l3.value){
                                        (v123 = l22.function(v123));
                                        (v124 = (function(){
                                            var tmp = v124;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 56)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v124;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 55)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l78;
})();
var l79 = {name: "NTH"};
(function(){
    (l79).function = (function(v128){
        ((v128)["fname"] = "NTH");
        return v128;
    })((function (v126,v127){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l78.function(v126, v127);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 57)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l79;
})();
var l80 = {name: "LAST"};
(function(){
    (l80).function = (function(v130){
        ((v130)["fname"] = "LAST");
        return v130;
    })((function (v129){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
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
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 59)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return v129;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 58)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l80;
})();
var l81 = {name: "BUTLAST"};
(function(){
    (l81).function = (function(v132){
        ((v132)["fname"] = "BUTLAST");
        return v132;
    })((function (v131){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
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
                    })(), cdr: l81.function((function(){
                        var tmp = v131;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 60)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l81;
})();
var l82 = {name: "MEMBER"};
(function(){
    (l82).function = (function(v135){
        ((v135)["fname"] = "MEMBER");
        return v135;
    })((function (v133,v134){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v134 !== l3.value){
                                        (l25.function(v133, (function(){
                                            var tmp = v134;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 62, value: v134, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : l3.value);
                                        (v134 = (function(){
                                            var tmp = v134;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
                                    }return l3.value;
                                })();
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 61)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l82;
})();
var l83 = {name: "REMOVE"};
(function(){
    (l83).function = (function(v138){
        ((v138)["fname"] = "REMOVE");
        return v138;
    })((function (v136,v137){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v137) !== l3.value ? (function(){
                        return l3.value;
                    })() : (l25.function(v136, (function(){
                        var tmp = v137;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l83.function(v136, (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l83.function(v136, (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 63)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l83;
})();
var l84 = {name: "REMOVE-IF"};
(function(){
    (l84).function = (function(v141){
        ((v141)["fname"] = "REMOVE-IF");
        return v141;
    })((function (v139,v140){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v140) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v139)((function(){
                        var tmp = v140;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l84.function(v139, (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l84.function(v139, (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 64)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l84;
})();
var l85 = {name: "REMOVE-IF-NOT"};
(function(){
    (l85).function = (function(v144){
        ((v144)["fname"] = "REMOVE-IF-NOT");
        return v144;
    })((function (v142,v143){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function(v143) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v142)((function(){
                        var tmp = v143;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return ({car: (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l85.function(v142, (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })() : (function(){
                        return l85.function(v142, (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 65)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l85;
})();
var l86 = {name: "DIGIT-CHAR-P"};
(function(){
    (l86).function = (function(v146){
        ((v146)["fname"] = "DIGIT-CHAR-P");
        return v146;
    })((function (v145){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 66)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l86;
})();
var l87 = {name: "SUBSEQ"};
(function(){
    (l87).function = (function(v150){
        ((v150)["fname"] = "SUBSEQ");
        return v150;
    })((function (v147,v148,v149){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        switch(arguments.length){
        case 2:
        v149=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (((typeof(v147) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (v149 !== l3.value ? (function(){
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
                        })());
                    })() : (function(){
                        return (function(){
                            throw "Unsupported argument.";
                        })();
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 67)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l87;
})();
var l88 = {name: "PARSE-INTEGER"};
(function(){
    (l88).function = (function(v155){
        ((v155)["fname"] = "PARSE-INTEGER");
        return v155;
    })((function (v151){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v152,v153,v154){
                        (function(){
                            try {
                                return (function(){
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
                                                var x2 = l86.function((function(){
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
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 69)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v152;
                    })(0,0,l67.function(v151));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 68)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l88;
})();
var l89 = {name: "SOME"};
(function(){
    (l89).function = (function(v162){
        ((v162)["fname"] = "SOME");
        return v162;
    })((function (v156,v157){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v157) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v158,v159){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v158;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v159;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                ((v156)((function(){
                                                    var string = v157;
                                                    var index = v158;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 70, value: l4.value, message: 'Return from unknown block SOME.'})
                                                    })();
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
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 71)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l3.value;
                        })(0,l67.function(v157));
                    })() : (l57.function(v157) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v160,v161){
                                        (function(){
                                            while(v160 !== l3.value){
                                                (v161 = (function(){
                                                    var tmp = v160;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((v156)(v161) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 72, value: l4.value, message: 'Return from unknown block NIL.'})
                                                        })();
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
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 72)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })() : (function(){
                        return (function(){
                            throw "Unknown sequence.";
                        })();
                    })()));
                })();
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
    (l90).function = (function(v169){
        ((v169)["fname"] = "EVERY");
        return v169;
    })((function (v163,v164){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v164) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v165,v166){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v165;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v166;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                ((v163)((function(){
                                                    var string = v164;
                                                    var index = v165;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })()) !== l3.value ? l3.value : (function(){
                                                    return (function(){
                                                        throw ({type: 'block', id: 73, value: l3.value, message: 'Return from unknown block EVERY.'})
                                                    })();
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
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 74)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l4.value;
                        })(0,l67.function(v164));
                    })() : (l57.function(v164) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v167,v168){
                                        (function(){
                                            while(v167 !== l3.value){
                                                (v168 = (function(){
                                                    var tmp = v167;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    ((v163)(v168) !== l3.value ? l3.value : (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 75, value: l3.value, message: 'Return from unknown block NIL.'})
                                                        })();
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
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 75)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })() : (function(){
                        return (function(){
                            throw "Unknown sequence.";
                        })();
                    })()));
                })();
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
    (l91).function = (function(v172){
        ((v172)["fname"] = "ASSOC");
        return v172;
    })((function (v170,v171){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(v171 !== l3.value){
                                        (l25.function(v170, l31.function(v171)) !== l3.value ? (function(){
                                            throw ({type: 'block', id: 77, value: l3.value, message: 'Return from unknown block NIL.'})
                                        })() : (v171 = (function(){
                                            var tmp = v171;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })()));
                                    }return l3.value;
                                })();
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 76)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l91;
})();
var l92 = {name: "STRING"};
(function(){
    (l92).function = (function(v174){
        ((v174)["fname"] = "STRING");
        return v174;
    })((function (v173){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof(v173) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return v173;
                    })() : (((function(){
                        var tmp = v173;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (v173).name;
                    })() : (function(){
                        return (function(){
                            var x = v173;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })();
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 78)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l92;
})();
var l93 = {name: "STRING="};
(function(){
    (l93).function = (function(v177){
        ((v177)["fname"] = "STRING=");
        return v177;
    })((function (v175,v176){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((v175 == v176)?l4.value: l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 79)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l93;
})();
var l94 = {name: "FDEFINITION"};
(function(){
    (l94).function = (function(v179){
        ((v179)["fname"] = "FDEFINITION");
        return v179;
    })((function (v178){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof v178 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return v178;
                    })() : (((function(){
                        var tmp = v178;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var symbol = v178;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })();
                    })() : (function(){
                        return (function(){
                            throw "Invalid function";
                        })();
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 80)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l94;
})();
var l95 = {name: "DISASSEMBLE"};
var l96 = {name: "WRITE-LINE"};
(function(){
    (l95).function = (function(v181){
        ((v181)["fname"] = "DISASSEMBLE");
        return v181;
    })((function (v180){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l96;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l94.function(v180)).toString());
                    return l3.value;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 81)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l95;
})();
var l97 = {name: "DOCUMENTATION"};
var l98 = {name: "FUNCTION"};
var l99 = {name: "VARIABLE"};
(function(){
    (l97).function = (function(v186){
        ((v186)["fname"] = "DOCUMENTATION");
        return v186;
    })((function(){
        var func = (function (v182,v183){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v184){
                            return (l25.function(v184, l98) !== l3.value ? (function(){
                                return (function(v185){
                                    return (function(){
                                        var tmp = (v185)["docstring"];
                                        return tmp == undefined? l3.value: tmp ;
                                    })();
                                })(l94.function(v182));
                            })() : (l25.function(v184, l99) !== l3.value ? (function(){
                                (((function(){
                                    var tmp = v182;
                                    return (typeof tmp == 'object' && 'name' in tmp);
                                })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "Wrong argument type! it should be a symbol";
                                    })();
                                })());
                                return (function(){
                                    var tmp = (v182)["vardoc"];
                                    return tmp == undefined? l3.value: tmp ;
                                })();
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()));
                        })(v183);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 82)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        
        });
        func.docstring = 'Return the documentation of X. TYPE must be the symbol VARIABLE or FUNCTION.';
        return func;
    })());
    return l97;
})();
var l100 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l100.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l100).value = l3.value);
    })());
    return l100;
})();
var l101 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l101).function = (function(v187){
        ((v187)["fname"] = "LIST-ALL-PACKAGES");
        return v187;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l100;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 83)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l101;
})();
var l102 = {name: "MAKE-PACKAGE"};
var l103 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l102).function = (function(v192){
        ((v192)["fname"] = "MAKE-PACKAGE");
        return v192;
    })((function (v188,v189){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v189=l3.value;
        default: break;
        }
        return (function(){
            try {
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
                    })({},l69.function((function(){
                        var symbol = l103;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v189));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 84)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l102;
})();
var l104 = {name: "PACKAGEP"};
(function(){
    (l104).function = (function(v194){
        ((v194)["fname"] = "PACKAGEP");
        return v194;
    })((function (v193){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((typeof (v193) === 'object')?l4.value: l3.value) !== l3.value ? ((("symbols") in (v193))?l4.value: l3.value) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 85)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l104;
})();
var l105 = {name: "FIND-PACKAGE"};
var l106 = {name: "PACKAGE-NAME"};
(function(){
    (l105).function = (function(v199){
        ((v199)["fname"] = "FIND-PACKAGE");
        return v199;
    })((function (v195){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l104.function(v195) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 86, value: v195, message: 'Return from unknown block FIND-PACKAGE.'})
                        })();
                    })() : l3.value);
                    return (function(v196){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v197,v198){
                                        (function(){
                                            while(v197 !== l3.value){
                                                (v198 = (function(){
                                                    var tmp = v197;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (l93.function((function(){
                                                        var symbol = l106;
                                                        var func = symbol.function;
                                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                        return func;
                                                    })()(v198), v196) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 87, value: v198, message: 'Return from unknown block NIL.'})
                                                        })();
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
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 87)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l92.function(v195));
                })();
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
    (l103).function = (function(v202){
        ((v202)["fname"] = "FIND-PACKAGE-OR-FAIL");
        return v202;
    })((function (v200){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v201){
                        return (v201 !== l3.value ? v201 : (function(){
                            throw "Package unknown.";
                        })());
                    })(l105.function(v200));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 88)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l103;
})();
(function(){
    (l106).function = (function(v205){
        ((v205)["fname"] = "PACKAGE-NAME");
        return v205;
    })((function (v203){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v204){
                        return (function(){
                            var tmp = (v204)["packageName"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.function(v203));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 89)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l106;
})();
var l107 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l107).function = (function(v208){
        ((v208)["fname"] = "%PACKAGE-SYMBOLS");
        return v208;
    })((function (v206){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v207){
                        return (function(){
                            var tmp = (v207)["symbols"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.function(v206));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 90)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l107;
})();
var l108 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l108).function = (function(v211){
        ((v211)["fname"] = "PACKAGE-USE-LIST");
        return v211;
    })((function (v209){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v210){
                        return (function(){
                            var tmp = (v210)["use"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.function(v209));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 91)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l108;
})();
var l109 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l109).function = (function(v214){
        ((v214)["fname"] = "%PACKAGE-EXTERNAL-SYMBOLS");
        return v214;
    })((function (v212){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v213){
                        return (function(){
                            var tmp = (v213)["exports"];
                            return tmp == undefined? l3.value: tmp ;
                        })();
                    })(l103.function(v212));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 92)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l109;
})();
var l110 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l110.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l110).value = l102.function("CL"));
    })());
    return l110;
})();
var l111 = {name: "*USER-PACKAGE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l111).value = l102.function("CL-USER", l42.function((function(){
            var symbol = l110;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })())));
    })());
    return l111;
})();
var l112 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l112.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l112).value = l102.function("KEYWORD"));
    })());
    return l112;
})();
var l113 = {name: "KEYWORDP"};
var l114 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l113).function = (function(v216){
        ((v216)["fname"] = "KEYWORDP");
        return v216;
    })((function (v215){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v215;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (((function(){
                        var symbol = l114;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v215) === (function(){
                        var symbol = l112;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())?l4.value: l3.value) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 93)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l113;
})();
var l115 = {name: "*PACKAGE*"};
(function(){
    (((l115.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l115).value = (function(){
            var symbol = l110;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })());
    })());
    return l115;
})();
var l116 = {name: "IN-PACKAGE"};
l116;
var l117 = {name: "%INTERN-SYMBOL"};
(function(){
    (l117).function = (function(v219){
        ((v219)["fname"] = "%INTERN-SYMBOL");
        return v219;
    })((function (v217){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v218){
                        ((v217)["package"] = (function(){
                            var symbol = l110;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return ((v218)[(v217).name] = v217);
                    })(l107.function((function(){
                        var symbol = l110;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 94)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l117;
})();
var l118 = {name: "%FIND-SYMBOL"};
(function(){
    (l118).function = (function(v227){
        ((v227)["fname"] = "%FIND-SYMBOL");
        return v227;
    })((function (v220,v221){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v222){
                        return (function(v223){
                            return ((((v220) in (v223))?l4.value: l3.value) !== l3.value ? ({car: (function(){
                                var tmp = (v223)[v220];
                                return tmp == undefined? l3.value: tmp ;
                            })(), cdr: l4.value}) : (function(){
                                try {
                                    return (function(){
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
                                                                return (function(){
                                                                    throw ({type: 'block', id: 95, value: ({car: (function(){
                                                                        var tmp = (v226)[v220];
                                                                        return tmp == undefined? l3.value: tmp ;
                                                                    })(), cdr: l4.value}), message: 'Return from unknown block %FIND-SYMBOL.'})
                                                                })();
                                                            })() : l3.value);
                                                        })(l109.function(v225));
                                                        return l3.value;
                                                    })();
                                                    (v224 = (function(){
                                                        var tmp = v224;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return ({car: l3.value, cdr: l3.value});
                                        })(l108.function(v222),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 96)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })());
                        })(l107.function(v222));
                    })(l103.function(v221));
                })();
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
    (l119).function = (function(v230){
        ((v230)["fname"] = "FIND-SYMBOL");
        return v230;
    })((function (v228,v229){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
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
            try {
                return (function(){
                    return (function(){
                        var tmp = l118.function(v228, v229);
                        return tmp === l3.value? l3.value: tmp.car;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 97)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l119;
})();
var l120 = {name: "INTERN"};
var l121 = {name: "EXPORT"};
(function(){
    (l120).function = (function(v237){
        ((v237)["fname"] = "INTERN");
        return v237;
    })((function (v231,v232){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
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
            try {
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
                                        return (function(){
                                            var symbol = l121;
                                            var func = symbol.function;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(l42.function(v236), v233);
                                    })() : l3.value);
                                    return ((v235)[v231] = v236);
                                })((function(){
                                    var name = v231;
                                    if (typeof name != 'string')
                                        throw 'The value ' + name + ' is not a type string.';
                                    return ({name: name});
                                })());
                            })(l107.function(v233)));
                        })(l118.function(v231, v233));
                    })(l103.function(v232));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 98)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l120;
})();
(function(){
    (l114).function = (function(v239){
        ((v239)["fname"] = "SYMBOL-PACKAGE");
        return v239;
    })((function (v238){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v238;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "it is not a symbol";
                        })();
                    })());
                    return (function(){
                        var tmp = (v238)["package"];
                        return tmp == undefined? l3.value: tmp ;
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 99)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l114;
})();
(function(){
    (l121).function = (function(v245){
        ((v245)["fname"] = "EXPORT");
        return v245;
    })((function (v240,v241){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
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
            try {
                return (function(){
                    return (function(v242){
                        return (function(){
                            try {
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
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 101)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l109.function(v241));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 100)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l121;
})();
var l122 = {name: "*NEWLINE*"};
(function(){
    (((l122.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l122).value = l92.function(l72.function(10)));
    })());
    return l122;
})();
var l123 = {name: "CONCAT"};
(function(){
    (l123).function = (function(v247){
        ((v247)["fname"] = "CONCAT");
        return v247;
    })((function (){
        var v246= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v246 = {car: arguments[i], cdr: 
        v246};
        return (function(){
            try {
                return (function(){
                    return l58.function((function(){
                        var symbol = l68;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v246, "");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 102)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l123;
})();
var l124 = {name: "CONCATF"};
l124;
var l125 = {name: "JOIN"};
(function(){
    (l125).function = (function(v250){
        ((v250)["fname"] = "JOIN");
        return v250;
    })((function (v248,v249){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v249="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v248) !== l3.value ? (function(){
                        return "";
                    })() : (l11.function((function(){
                        var tmp = v248;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v248;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l123.function((function(){
                            var tmp = v248;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v249, l125.function((function(){
                            var tmp = v248;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v249));
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 103)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l125;
})();
var l126 = {name: "JOIN-TRAILING"};
(function(){
    (l126).function = (function(v253){
        ((v253)["fname"] = "JOIN-TRAILING");
        return v253;
    })((function (v251,v252){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v252="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v251) !== l3.value ? "" : l123.function((function(){
                        var tmp = v251;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v252, l126.function((function(){
                        var tmp = v251;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v252)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 104)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l126;
})();
var l127 = {name: "MAPCONCAT"};
(function(){
    (l127).function = (function(v256){
        ((v256)["fname"] = "MAPCONCAT");
        return v256;
    })((function (v254,v255){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l125.function(l69.function(v254, v255));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 105)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l127;
})();
var l128 = {name: "VECTOR-TO-LIST"};
(function(){
    (l128).function = (function(v262){
        ((v262)["fname"] = "VECTOR-TO-LIST");
        return v262;
    })((function (v257){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v258,v259){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v260,v261){
                                        (function(){
                                            while((function(){
                                                var x1 = v260;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v261;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(){
                                                    (v258 = ({car: (function(){
                                                        var x = (v257)[v260];
                                                        if (x === undefined) throw 'Out of range';
                                                        return x;
                                                    })(), cdr: v258}));
                                                    return l3.value;
                                                })();
                                                (v260 = (function(){
                                                    var x1 = v260;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l64.function(v258);
                                    })(0,v259);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 107)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value,l67.function(v257));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 106)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l128;
})();
var l129 = {name: "LIST-TO-VECTOR"};
(function(){
    (l129).function = (function(v268){
        ((v268)["fname"] = "LIST-TO-VECTOR");
        return v268;
    })((function (v263){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v264,v265){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v266,v267){
                                        (function(){
                                            while(v266 !== l3.value){
                                                (v267 = (function(){
                                                    var tmp = v266;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(){
                                                        var x = v264;
                                                        var i = v265;
                                                        if (i < 0 || i >= x.length) throw 'Out of range';
                                                        return x[i] = v267;
                                                    })();
                                                    (v265 = (function(){
                                                        var x1 = v265;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })());
                                                    return l3.value;
                                                })();
                                                (v266 = (function(){
                                                    var tmp = v266;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v264;
                                    })(v263,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 109)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var r = [];
                        for (var i = 0; i < l67.function(v263); i++)
                            r.push(l3.value);
                        return r;
                    })(),0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 108)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l129;
})();
var l130 = {name: "INDENT"};
(function(){
    (l130).function = (function(v275){
        ((v275)["fname"] = "INDENT");
        return v275;
    })((function (){
        var v269= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v269 = {car: arguments[i], cdr: 
        v269};
        return (function(){
            try {
                return (function(){
                    return (function(v270){
                        return (function(v271,v272,v273){
                            (l76.function(l67.function(v270)) !== l3.value ? (function(){
                                return (v271 = l123.function(v271, (function(){
                                    return "    ";
                                })()));
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v272;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v273;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(v274){
                                                    return (v271 = l123.function(v271, (function(){
                                                        return v274;
                                                    })()));
                                                })(((l74.function((function(){
                                                    var string = v270;
                                                    var index = v272;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? ((function(){
                                                    var x1 = v272;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = l22.function(v273);
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l3.value);
                                                })() !== l3.value ? l26.function(l74.function((function(){
                                                    var string = v270;
                                                    var index = l21.function(v272);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l123.function(l92.function(10), "    ") : l92.function((function(){
                                                    var string = v270;
                                                    var index = v272;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                (v272 = (function(){
                                                    var x1 = v272;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })());
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 111)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v271;
                        })("",0,l67.function(v270));
                    })(l125.function(v269));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 110)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l130;
})();
(function(){
    (l16).function = (function(v279){
        ((v279)["fname"] = "INTEGER-TO-STRING");
        return v279;
    })((function (v276){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l23.function(v276) !== l3.value ? (function(){
                        return "0";
                    })() : (l77.function(v276) !== l3.value ? (function(){
                        return l123.function("-", l16.function((function(){
                            var x1 = 0;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v276;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1-x2;
                        })()));
                    })() : (function(){
                        return (function(v277){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l26.function(l23.function(v276)) !== l3.value){
                                                (v277 = ({car: (function(){
                                                    var x = v276;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v277}));
                                                (v276 = l24.function(v276, 10));
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 113)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l125.function(l69.function((function (v278){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l92.function((function(){
                                    var string = "0123456789";
                                    var index = v278;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v277));
                        })(l3.value);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 112)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l16;
})();
var l131 = {name: "JS!BOOL"};
var l132 = {name: "LS-COMPILE"};
(function(){
    (l131).function = (function(v281){
        ((v281)["fname"] = "JS!BOOL");
        return v281;
    })((function (v280){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l123.function("(", v280, "?", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 114)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l131;
})();
var l133 = {name: "JS!SELFCALL"};
l133;
var l134 = {name: "PRIN1-TO-STRING"};
var l135 = {name: "ESCAPE-STRING"};
(function(){
    (l134).function = (function(v287){
        ((v287)["fname"] = "PRIN1-TO-STRING");
        return v287;
    })((function (v282){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v282;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return ((function(){
                            var tmp = l118.function((v282).name, (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v282).name : (function(v283,v284){
                            return l123.function((((v283 === l105.function("KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l106.function(v283)), ":", v284);
                        })(l114.function(v282),(v282).name));
                    })() : (l75.function(v282) !== l3.value ? (function(){
                        return l16.function(v282);
                    })() : (((typeof(v282) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l123.function("\"", (function(){
                            var symbol = l135;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v282), "\"");
                    })() : (((typeof v282 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v285){
                            return (v285 !== l3.value ? l123.function("#<FUNCTION ", v285, ">") : l123.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v282)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l57.function(v282) !== l3.value ? (function(){
                        return l123.function("(", l126.function(l69.function((function(){
                            var symbol = l134;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l81.function(v282)), " "), (function(v286){
                            return (l11.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l134.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l123.function(l134.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l134.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l80.function(v282)), ")");
                    })() : (((function(){
                        var x = v282;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l123.function("#", l134.function(l128.function(v282)));
                    })() : (l104.function(v282) !== l3.value ? (function(){
                        return l123.function("#<PACKAGE ", l106.function(v282), ">");
                    })() : l3.value)))))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 115)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l134;
})();
(function(){
    (l96).function = (function(v289){
        ((v289)["fname"] = "WRITE-LINE");
        return v289;
    })((function (v288){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v288;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    (function(){
                        var x = (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return v288;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 116)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l96;
})();
var l136 = {name: "WARN"};
(function(){
    (l136).function = (function(v291){
        ((v291)["fname"] = "WARN");
        return v291;
    })((function (v290){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = "WARNING: ";
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return lisp.write(x);
                    })();
                    return l96.function(v290);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 117)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l136;
})();
var l137 = {name: "PRINT"};
(function(){
    (l137).function = (function(v293){
        ((v293)["fname"] = "PRINT");
        return v293;
    })((function (v292){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l96.function(l134.function(v292));
                    return v292;
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 118)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l137;
})();
var l138 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l138).function = (function(v295){
        ((v295)["fname"] = "MAKE-STRING-STREAM");
        return v295;
    })((function (v294){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v294, cdr: 0});
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 119)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l138;
})();
var l139 = {name: "%PEEK-CHAR"};
(function(){
    (l139).function = (function(v297){
        ((v297)["fname"] = "%PEEK-CHAR");
        return v297;
    })((function (v296){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v296;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l67.function((function(){
                            var tmp = v296;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v296;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v296;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })() : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 120)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l139;
})();
var l140 = {name: "%READ-CHAR"};
(function(){
    (l140).function = (function(v300){
        ((v300)["fname"] = "%READ-CHAR");
        return v300;
    })((function (v298){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v298;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l67.function((function(){
                            var tmp = v298;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(v299){
                        (function(){
                            var x = v298;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l21.function((function(){
                                var tmp = v298;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v299;
                    })((function(){
                        var string = (function(){
                            var tmp = v298;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v298;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        if (typeof index != 'number')
                            throw 'The value ' + index + ' is not a type number.';
                        return string.charCodeAt(index);
                    })()) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 121)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l140;
})();
var l141 = {name: "WHITESPACEP"};
(function(){
    (l141).function = (function(v304){
        ((v304)["fname"] = "WHITESPACEP");
        return v304;
    })((function (v301){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v302){
                        return (v302 !== l3.value ? v302 : (function(v303){
                            return (v303 !== l3.value ? v303 : l74.function(v301, 9));
                        })(l74.function(v301, 10)));
                    })(l74.function(v301, 32));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 122)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l141;
})();
var l142 = {name: "SKIP-WHITESPACES"};
(function(){
    (l142).function = (function(v307){
        ((v307)["fname"] = "SKIP-WHITESPACES");
        return v307;
    })((function (v305){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v306){
                        (v306 = l139.function(v305));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v306 !== l3.value ? l141.function(v306) : l3.value) !== l3.value){
                                            l140.function(v305);
                                            (v306 = l139.function(v305));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 124)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 123)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l142;
})();
var l143 = {name: "TERMINALP"};
(function(){
    (l143).function = (function(v312){
        ((v312)["fname"] = "TERMINALP");
        return v312;
    })((function (v308){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v309){
                        return (v309 !== l3.value ? v309 : (function(v310){
                            return (v310 !== l3.value ? v310 : (function(v311){
                                return (v311 !== l3.value ? v311 : l74.function(40, v308));
                            })(l74.function(41, v308)));
                        })(l141.function(v308)));
                    })(l11.function(v308));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 125)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l143;
})();
var l144 = {name: "READ-UNTIL"};
(function(){
    (l144).function = (function(v317){
        ((v317)["fname"] = "READ-UNTIL");
        return v317;
    })((function (v313,v314){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v315,v316){
                        (v316 = l139.function(v313));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v316 !== l3.value ? l26.function((v314)(v316)) : l3.value) !== l3.value){
                                            (v315 = l123.function(v315, l92.function(v316)));
                                            l140.function(v313);
                                            (v316 = l139.function(v313));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 127)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v315;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 126)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l144;
})();
var l145 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l145).function = (function(v321){
        ((v321)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v321;
    })((function (v318){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v319){
                        l142.function(v318);
                        (v319 = l139.function(v318));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v319 !== l3.value ? l74.function(v319, 59) : l3.value) !== l3.value){
                                            l144.function(v318, (function (v320){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l74.function(v320, 10);
                                            
                                            }));
                                            l142.function(v318);
                                            (v319 = l139.function(v318));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 129)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 128)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l145;
})();
var l146 = {name: "%READ-LIST"};
var l147 = {name: "LS-READ"};
(function(){
    (l146).function = (function(v325){
        ((v325)["fname"] = "%READ-LIST");
        return v325;
    })((function (v322){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l145.function(v322);
                    return (function(v323){
                        return (l11.function(v323) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l74.function(v323, 41) !== l3.value ? (function(){
                            l140.function(v322);
                            return l3.value;
                        })() : (l74.function(v323, 46) !== l3.value ? (function(){
                            l140.function(v322);
                            return (function(v324){
                                l145.function(v322);
                                (l74.function(l140.function(v322), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v324;
                            })((function(){
                                var symbol = l147;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v322));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l147;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v322), cdr: l146.function(v322)});
                        })())));
                    })(l139.function(v322));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 130)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l146;
})();
var l148 = {name: "READ-STRING"};
(function(){
    (l148).function = (function(v329){
        ((v329)["fname"] = "READ-STRING");
        return v329;
    })((function (v326){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v327,v328){
                        (v328 = l140.function(v326));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.function(l25.function(v328, 34)) !== l3.value){
                                            (l11.function(v328) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l25.function(v328, 92) !== l3.value ? (function(){
                                                return (v328 = l140.function(v326));
                                            })() : l3.value);
                                            (v327 = l123.function(v327, l92.function(v328)));
                                            (v328 = l140.function(v326));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 132)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v327;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 131)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l148;
})();
var l149 = {name: "READ-SHARP"};
(function(){
    (l149).function = (function(v334){
        ((v334)["fname"] = "READ-SHARP");
        return v334;
    })((function (v330){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l140.function(v330);
                    return (function(v331){
                        return (l25.function(v331, 39) !== l3.value ? (function(){
                            return l42.function(l98, (function(){
                                var symbol = l147;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v330));
                        })() : (l25.function(v331, 40) !== l3.value ? (function(){
                            return l129.function(l146.function(v330));
                        })() : (l25.function(v331, 92) !== l3.value ? (function(){
                            return (function(v332){
                                return (l93.function(v332, "space") !== l3.value ? (function(){
                                    return l73.function(32);
                                })() : (l93.function(v332, "tab") !== l3.value ? (function(){
                                    return l73.function(9);
                                })() : (l93.function(v332, "newline") !== l3.value ? (function(){
                                    return l73.function(10);
                                })() : (function(){
                                    return l73.function((function(){
                                        var string = v332;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l123.function(l92.function(l140.function(v330)), l144.function(v330, (function(){
                                var symbol = l143;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l25.function(v331, 43) !== l3.value ? (function(){
                            return (function(v333){
                                return (l93.function(v333, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l147;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v330);
                                    return (function(){
                                        var symbol = l147;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v330);
                                })() : (l93.function(v333, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l147;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v330);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l144.function(v330, (function(){
                                var symbol = l143;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(l140.function(v330));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 133)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l149;
})();
var l150 = {name: "READ-SYMBOL"};
(function(){
    (l150).function = (function(v342){
        ((v342)["fname"] = "READ-SYMBOL");
        return v342;
    })((function (v335){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v336,v337,v338,v339,v340){
                        (v340 = 0);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x1 = v340;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v336;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value ? l26.function(l74.function((function(){
                                            var string = v335;
                                            var index = v340;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            (v340 = (function(){
                                                var x1 = v340;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 135)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        ((function(){
                            var x1 = v340;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v336;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1==x2?l4.value: l3.value);
                        })() !== l3.value ? (function(){
                            (v338 = v335);
                            (v337 = (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return (v339 = l4.value);
                        })() : (function(){
                            (l23.function(v340) !== l3.value ? (v337 = "KEYWORD") : (v337 = (function(){
                                var x = l87.function(v335, 0, v340);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })()));
                            (v340 = (function(){
                                var x1 = v340;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                            (l74.function((function(){
                                var string = v335;
                                var index = v340;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                (v339 = l4.value);
                                return (v340 = (function(){
                                    var x1 = v340;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            })() : l3.value);
                            return (v338 = l87.function(v335, v340));
                        })());
                        (v338 = (function(){
                            var x = v338;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })());
                        (v337 = l105.function(v337));
                        return ((function(v341){
                            return (v341 !== l3.value ? v341 : ((v337 === l105.function("KEYWORD"))?l4.value: l3.value));
                        })(v339) !== l3.value ? l120.function(v338, v337) : l119.function(v338, v337));
                    })(l67.function(v335),l3.value,l3.value,l3.value,l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 134)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l150;
})();
var l151 = {name: "*EOF*"};
(function(){
    (((l151.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l151).value = l15.function());
    })());
    return l151;
})();
var l152 = {name: "QUOTE"};
var l153 = {name: "BACKQUOTE"};
var l154 = {name: "UNQUOTE-SPLICING"};
var l155 = {name: "UNQUOTE"};
(function(){
    (l147).function = (function(v347){
        ((v347)["fname"] = "LS-READ");
        return v347;
    })((function (v343){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l145.function(v343);
                    return (function(v344){
                        return ((function(v345){
                            return (v345 !== l3.value ? v345 : l74.function(v344, 41));
                        })(l11.function(v344)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l151;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l74.function(v344, 40) !== l3.value ? (function(){
                            l140.function(v343);
                            return l146.function(v343);
                        })() : (l74.function(v344, 39) !== l3.value ? (function(){
                            l140.function(v343);
                            return l42.function(l152, l147.function(v343));
                        })() : (l74.function(v344, 96) !== l3.value ? (function(){
                            l140.function(v343);
                            return l42.function(l153, l147.function(v343));
                        })() : (l74.function(v344, 34) !== l3.value ? (function(){
                            l140.function(v343);
                            return l148.function(v343);
                        })() : (l74.function(v344, 44) !== l3.value ? (function(){
                            l140.function(v343);
                            return (l25.function(l139.function(v343), 64) !== l3.value ? (function(){
                                l140.function(v343);
                                return l42.function(l154, l147.function(v343));
                            })() : l42.function(l155, l147.function(v343)));
                        })() : (l74.function(v344, 35) !== l3.value ? (function(){
                            return l149.function(v343);
                        })() : (function(){
                            return (function(v346){
                                return (l90.function((function(){
                                    var symbol = l86;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v346) !== l3.value ? l88.function(v346) : l150.function(v346));
                            })(l144.function(v343, (function(){
                                var symbol = l143;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l139.function(v343));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 136)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l147;
})();
var l156 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l156).function = (function(v349){
        ((v349)["fname"] = "LS-READ-FROM-STRING");
        return v349;
    })((function (v348){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l147.function(l138.function(v348));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 137)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l156;
})();
var l157 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l157.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l157).value = l3);
    })());
    return l157;
})();
var l158 = {name: "MAKE-BINDING"};
(function(){
    (l158).function = (function(v354){
        ((v354)["fname"] = "MAKE-BINDING");
        return v354;
    })((function (v350,v351,v352,v353){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v353=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l42.function(v350, v351, v352, v353);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 138)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l158;
})();
var l159 = {name: "BINDING-NAME"};
(function(){
    (l159).function = (function(v356){
        ((v356)["fname"] = "BINDING-NAME");
        return v356;
    })((function (v355){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l38.function(v355);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 139)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l159;
})();
var l160 = {name: "BINDING-TYPE"};
(function(){
    (l160).function = (function(v358){
        ((v358)["fname"] = "BINDING-TYPE");
        return v358;
    })((function (v357){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l39.function(v357);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 140)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l160;
})();
var l161 = {name: "BINDING-VALUE"};
(function(){
    (l161).function = (function(v360){
        ((v360)["fname"] = "BINDING-VALUE");
        return v360;
    })((function (v359){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.function(v359);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 141)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l161;
})();
var l162 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l162).function = (function(v362){
        ((v362)["fname"] = "BINDING-DECLARATIONS");
        return v362;
    })((function (v361){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v361);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 142)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l162;
})();
var l163 = {name: "SET-BINDING-VALUE"};
(function(){
    (l163).function = (function(v365){
        ((v365)["fname"] = "SET-BINDING-VALUE");
        return v365;
    })((function (v363,v364){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l34.function(v363);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v364);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 143)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l163;
})();
var l164 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l164).function = (function(v368){
        ((v368)["fname"] = "SET-BINDING-DECLARATIONS");
        return v368;
    })((function (v366,v367){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.function(v366);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v367);
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 144)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l164;
})();
var l165 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l165).function = (function(v371){
        ((v371)["fname"] = "PUSH-BINDING-DECLARATION");
        return v371;
    })((function (v369,v370){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l164.function(v370, ({car: v369, cdr: l162.function(v370)}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 145)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l165;
})();
var l166 = {name: "MAKE-LEXENV"};
(function(){
    (l166).function = (function(v372){
        ((v372)["fname"] = "MAKE-LEXENV");
        return v372;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.function(l3.value, l3.value, l3.value, l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 146)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l166;
})();
var l167 = {name: "COPY-LEXENV"};
(function(){
    (l167).function = (function(v374){
        ((v374)["fname"] = "COPY-LEXENV");
        return v374;
    })((function (v373){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l71.function(v373);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 147)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l167;
})();
var l168 = {name: "PUSH-TO-LEXENV"};
var l169 = {name: "BLOCK"};
var l170 = {name: "GOTAG"};
(function(){
    (l168).function = (function(v379){
        ((v379)["fname"] = "PUSH-TO-LEXENV");
        return v379;
    })((function (v375,v376,v377){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v378){
                        return (l25.function(v378, l99) !== l3.value ? (function(){
                            return (function(){
                                var x = v376;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: (function(){
                                    var tmp = v376;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l25.function(v378, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v376;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: l32.function(v376)}));
                            })();
                        })() : (l25.function(v378, l169) !== l3.value ? (function(){
                            return (function(){
                                var x = l34.function(v376);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: l35.function(v376)}));
                            })();
                        })() : (l25.function(v378, l170) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.function(v376);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: l37.function(v376)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v377);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 148)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l168;
})();
var l171 = {name: "EXTEND-LEXENV"};
(function(){
    (l171).function = (function(v386){
        ((v386)["fname"] = "EXTEND-LEXENV");
        return v386;
    })((function (v380,v381,v382){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v383){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v384,v385){
                                        (function(){
                                            while(v384 !== l3.value){
                                                (v385 = (function(){
                                                    var tmp = v384;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    l168.function(v385, v383, v382);
                                                    return l3.value;
                                                })();
                                                (v384 = (function(){
                                                    var tmp = v384;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v383;
                                    })(l64.function(v380),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 150)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l167.function(v381));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 149)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l171;
})();
var l172 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l172).function = (function(v391){
        ((v391)["fname"] = "LOOKUP-IN-LEXENV");
        return v391;
    })((function (v387,v388,v389){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l91.function(v387, (function(v390){
                        return (l25.function(v390, l99) !== l3.value ? (function(){
                            return l38.function(v388);
                        })() : (l25.function(v390, l98) !== l3.value ? (function(){
                            return l39.function(v388);
                        })() : (l25.function(v390, l169) !== l3.value ? (function(){
                            return l40.function(v388);
                        })() : (l25.function(v390, l170) !== l3.value ? (function(){
                            return l41.function(v388);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v389));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 151)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l172;
})();
var l173 = {name: "*ENVIRONMENT*"};
(function(){
    (((l173.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l173).value = l166.function());
    })());
    return l173;
})();
var l174 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l174.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l174).value = 0);
    })());
    return l174;
})();
var l175 = {name: "GVARNAME"};
(function(){
    (l175).function = (function(v393){
        ((v393)["fname"] = "GVARNAME");
        return v393;
    })((function (v392){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l123.function("v", l16.function(((l174).value = (function(){
                        var x1 = (function(){
                            var symbol = l174;
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 152)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l175;
})();
var l176 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l176).function = (function(v395){
        ((v395)["fname"] = "TRANSLATE-VARIABLE");
        return v395;
    })((function (v394){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l161.function(l172.function(v394, (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 153)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l176;
})();
var l177 = {name: "EXTEND-LOCAL-ENV"};
var l178 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l177).function = (function(v401){
        ((v401)["fname"] = "EXTEND-LOCAL-ENV");
        return v401;
    })((function (v396){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v397){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v398,v399){
                                        (function(){
                                            while(v398 !== l3.value){
                                                (v399 = (function(){
                                                    var tmp = v398;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v400){
                                                        return l168.function(v400, v397, l99);
                                                    })(l158.function(v399, l178, l175.function(v399)));
                                                    return l3.value;
                                                })();
                                                (v398 = (function(){
                                                    var tmp = v398;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v397;
                                    })(v396,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 155)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l167.function((function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 154)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l177;
})();
var l179 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l179.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l179).value = l3.value);
    })());
    return l179;
})();
var l180 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l180).function = (function(v403){
        ((v403)["fname"] = "TOPLEVEL-COMPILATION");
        return v403;
    })((function (v402){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l179).value = ({car: v402, cdr: (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 156)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l180;
})();
var l181 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l181).function = (function(v405){
        ((v405)["fname"] = "NULL-OR-EMPTY-P");
        return v405;
    })((function (v404){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l23.function(l67.function(v404));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 157)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l181;
})();
var l182 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l182).function = (function(v406){
        ((v406)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v406;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l84.function((function(){
                        var symbol = l181;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l179;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 158)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l182;
})();
var l183 = {name: "%COMPILE-DEFMACRO"};
var l184 = {name: "MACRO"};
(function(){
    (l183).function = (function(v409){
        ((v409)["fname"] = "%COMPILE-DEFMACRO");
        return v409;
    })((function (v407,v408){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l180.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l152), l42.function(v407))));
                    return l168.function(l158.function(v407, l184, v408), (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 159)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l183;
})();
var l185 = {name: "GLOBAL-BINDING"};
(function(){
    (l185).function = (function(v415){
        ((v415)["fname"] = "GLOBAL-BINDING");
        return v415;
    })((function (v410,v411,v412){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v413){
                        return (v413 !== l3.value ? v413 : (function(v414){
                            l168.function(v414, (function(){
                                var symbol = l173;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v412);
                            return v414;
                        })(l158.function(v410, v411, l3.value)));
                    })(l172.function(v410, (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v412));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 160)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l185;
})();
var l186 = {name: "CLAIMP"};
(function(){
    (l186).function = (function(v420){
        ((v420)["fname"] = "CLAIMP");
        return v420;
    })((function (v416,v417,v418){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v419){
                        return (v419 !== l3.value ? l82.function(v418, l162.function(v419)) : l3.value);
                    })(l172.function(v416, (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v417));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 161)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l186;
})();
var l187 = {name: "!PROCLAIM"};
var l188 = {name: "SPECIAL"};
var l189 = {name: "NOTINLINE"};
var l190 = {name: "CONSTANT"};
var l191 = {name: "NON-OVERRIDABLE"};
(function(){
    (l187).function = (function(v435){
        ((v435)["fname"] = "!PROCLAIM");
        return v435;
    })((function (v421){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v422){
                        return (l25.function(v422, l188) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v423,v424){
                                            (function(){
                                                while(v423 !== l3.value){
                                                    (v424 = (function(){
                                                        var tmp = v423;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v425){
                                                            return l165.function(l188, v425);
                                                        })(l185.function(v424, l99, l99));
                                                        return l3.value;
                                                    })();
                                                    (v423 = (function(){
                                                        var tmp = v423;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v421;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 163)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.function(v422, l189) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v426,v427){
                                            (function(){
                                                while(v426 !== l3.value){
                                                    (v427 = (function(){
                                                        var tmp = v426;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v428){
                                                            return l165.function(l189, v428);
                                                        })(l185.function(v427, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    (v426 = (function(){
                                                        var tmp = v426;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v421;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 164)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.function(v422, l190) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v429,v430){
                                            (function(){
                                                while(v429 !== l3.value){
                                                    (v430 = (function(){
                                                        var tmp = v429;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v431){
                                                            return l165.function(l190, v431);
                                                        })(l185.function(v430, l99, l99));
                                                        return l3.value;
                                                    })();
                                                    (v429 = (function(){
                                                        var tmp = v429;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v421;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 165)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.function(v422, l191) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v432,v433){
                                            (function(){
                                                while(v432 !== l3.value){
                                                    (v433 = (function(){
                                                        var tmp = v432;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v434){
                                                            return l165.function(l191, v434);
                                                        })(l185.function(v433, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    (v432 = (function(){
                                                        var tmp = v432;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v421;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 166)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value))));
                    })((function(){
                        var tmp = v421;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 162)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l187;
})();
var l192 = {name: "PROCLAIM"};
(l192).function = (function(){
    var symbol = l187;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l193 = {name: "*COMPILATIONS*"};
(function(){
    (((l193.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l193).value = l3.value);
    })());
    return l193;
})();
var l194 = {name: "DEFINE-COMPILATION"};
l194;
var l195 = {name: "IF"};
((l193).value = ({car: l42.function(l195, (function (v436,v437,v438){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l123.function("(", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v436), " !== ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v437), " : ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v438), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 167)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l196 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l197 = {name: "&OPTIONAL"};
var l198 = {name: "&REST"};
var l199 = {car: l197, cdr: {car: l198, cdr: l3}};
(function(){
    (((l196.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l196).value = l199);
    })());
    return l196;
})();
var l200 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l200).function = (function(v441){
        ((v441)["fname"] = "LIST-UNTIL-KEYWORD");
        return v441;
    })((function (v439){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v440){
                        return (v440 !== l3.value ? v440 : l82.function((function(){
                            var tmp = v439;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l196;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v439)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v439;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l200.function((function(){
                        var tmp = v439;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 168)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l200;
})();
var l201 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l201).function = (function(v443){
        ((v443)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v443;
    })((function (v442){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l200.function(v442);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 169)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l201;
})();
var l202 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l202).function = (function(v445){
        ((v445)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v445;
    })((function (v444){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.function((function(){
                        var symbol = l56;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l200.function((function(){
                        var tmp = l82.function(l197, v444);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 170)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l202;
})();
var l203 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l203).function = (function(v447){
        ((v447)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v447;
    })((function (v446){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.function((function(){
                        var symbol = l29;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l202.function(v446));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 171)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l203;
})();
var l204 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l204).function = (function(v450){
        ((v450)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v450;
    })((function (v448){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v449){
                        ((function(){
                            var tmp = v449;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v449;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l200.function((function(){
                        var tmp = l82.function(l198, v448);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 172)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l204;
})();
var l205 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l205).function = (function(v453){
        ((v453)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v453;
    })((function (v452){
        if (arguments.length < 1) throw 'too few arguments';
        var v451= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v451 = {car: arguments[i], cdr: 
        v451};
        return (function(){
            try {
                return (function(){
                    return (v452 !== l3.value ? l123.function("(function(){", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("var func = ", l125.function(v451), ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v452, "';", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l125.function(v451));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 173)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l205;
})();
var l206 = {name: "LAMBDA"};
var l207 = {name: "LS-COMPILE-BLOCK"};
((l193).value = ({car: l42.function(l206, (function (v455){
    if (arguments.length < 1) throw 'too few arguments';
    var v454= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v454 = {car: arguments[i], cdr: 
    v454};
    return (function(){
        try {
            return (function(){
                return (function(v456,v457,v458,v459){
                    ((((typeof((function(){
                        var tmp = v454;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l26.function(l11.function((function(){
                        var tmp = v454;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        (v459 = (function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        return (v454 = (function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value);
                    return (function(v460,v461,v462){
                        try {
                            var tmp;
                            tmp = l173.value;
                            l173.value = v462;
                            v462 = tmp;
                            return l205.function(v459, "(function (", l125.function(l69.function((function(){
                                var symbol = l176;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v456, v457)), ","), "){", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l130.function((v456 !== l3.value ? l123.function("if (arguments.length < ", l16.function(v460), ") throw 'too few arguments';", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l26.function(v458) !== l3.value ? l123.function("if (arguments.length > ", l16.function((function(){
                                var x1 = v460;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v461;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v457 !== l3.value ? l123.function("switch(arguments.length){", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v463,v464,v465){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while((function(){
                                                        var x1 = v465;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v461;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return (x1<x2?l4.value: l3.value);
                                                    })() !== l3.value){
                                                        (function(v466){
                                                            (v464 = ({car: l123.function("case ", l16.function((function(){
                                                                var x1 = v465;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = v460;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })()), ":", (function(){
                                                                var symbol = l122;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l176.function((function(){
                                                                var tmp = v466;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l132;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l32.function(v466)), ";", (function(){
                                                                var symbol = l122;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v464}));
                                                            return (v465 = (function(){
                                                                var x1 = v465;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = 1;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })());
                                                        })(l79.function(v465, v463));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 175)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    (v464 = ({car: l123.function("default: break;", (function(){
                                        var symbol = l122;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v464}));
                                    return l125.function(l64.function(v464));
                                })();
                            })(l202.function(v455),l3.value,0), "}", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v458 !== l3.value ? (function(v467){
                                return l123.function("var ", v467, "= ", (function(){
                                    var symbol = l132;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.function((function(){
                                    var x1 = v460;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v461;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })()), "; i--)", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l130.function(v467, " = ", "{car: arguments[i], cdr: "), v467, "};", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l176.function(v458)) : ""), (function(){
                                var symbol = l207;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v454, l4.value)), (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l173.value = v462;
                        }
                    })(l67.function(v456),l67.function(v457),l177.function(l62.function(l56.function(v458), v456, v457)));
                })(l201.function(v455),l203.function(v455),l204.function(v455),l3.value);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 174)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l208 = {name: "SETQ-PAIR"};
var l209 = {name: "SET"};
(function(){
    (l208).function = (function(v471){
        ((v471)["fname"] = "SETQ-PAIR");
        return v471;
    })((function (v468,v469){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v470){
                        return (((l160.function(v470) === l178)?l4.value: l3.value) !== l3.value ? l123.function(l161.function(v470), " = ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v469)) : (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l209), l42.function(l62.function(l42.function(l152), l42.function(v468))), l42.function(v469))));
                    })(l172.function(v468, (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 176)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l208;
})();
var l210 = {name: "SETQ"};
((l193).value = ({car: l42.function(l210, (function (){
    var v472= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v472 = {car: arguments[i], cdr: 
    v472};
    return (function(){
        try {
            return (function(){
                return (function(v473){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(l4.value !== l3.value){
                                        (l11.function(v472) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 178, value: l3.value, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : (l11.function((function(){
                                            var tmp = v472;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw "Odd paris in SETQ";
                                            })();
                                        })() : (function(){
                                            (v473 = l123.function(v473, (function(){
                                                return l123.function(l208.function((function(){
                                                    var tmp = v472;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })(), l32.function(v472)), (l11.function(l34.function(v472)) !== l3.value ? "" : ", "));
                                            })()));
                                            return (v472 = l34.function(v472));
                                        })()));
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 178)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return l123.function("(", v473, ")");
                })("");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 177)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l211 = {name: "JS-VREF"};
((l193).value = ({car: l42.function(l211, (function (v474){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v474;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 179)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l212 = {name: "JS-VSET"};
((l193).value = ({car: l42.function(l212, (function (v475,v476){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l123.function("(", v475, " = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v476), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 180)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l135).function = (function(v483){
        ((v483)["fname"] = "ESCAPE-STRING");
        return v483;
    })((function (v477){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v478,v479,v480){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v479;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v480;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v481){
                                                ((function(v482){
                                                    return (v482 !== l3.value ? v482 : l74.function(v481, 92));
                                                })(l74.function(v481, 34)) !== l3.value ? (function(){
                                                    return (v478 = l123.function(v478, "\\"));
                                                })() : l3.value);
                                                (l74.function(v481, 10) !== l3.value ? (function(){
                                                    (v478 = l123.function(v478, "\\"));
                                                    return (v481 = 110);
                                                })() : l3.value);
                                                return (v478 = l123.function(v478, l92.function(v481)));
                                            })((function(){
                                                var string = v477;
                                                var index = v479;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            (v479 = (function(){
                                                var x1 = v479;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })());
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 182)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v478;
                    })("",0,l67.function(v477));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 181)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l135;
})();
var l213 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l213.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l213).value = l3.value);
    })());
    return l213;
})();
var l214 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l214.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l214).value = 0);
    })());
    return l214;
})();
var l215 = {name: "GENLIT"};
(function(){
    (l215).function = (function(v484){
        ((v484)["fname"] = "GENLIT");
        return v484;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l123.function("l", l16.function(((l214).value = (function(){
                        var x1 = (function(){
                            var symbol = l214;
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
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 183)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l215;
})();
var l216 = {name: "LITERAL"};
(function(){
    (l216).function = (function(v495){
        ((v495)["fname"] = "LITERAL");
        return v495;
    })((function (v485,v486){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v486=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l75.function(v485) !== l3.value ? (function(){
                        return l16.function(v485);
                    })() : (((typeof(v485) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l123.function("\"", l135.function(v485), "\"");
                    })() : (((function(){
                        var tmp = v485;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v487){
                            return (v487 !== l3.value ? v487 : (function(v488,v489){
                                ((l213).value = ({car: ({car: v485, cdr: v488}), cdr: (function(){
                                    var symbol = l213;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()}));
                                l180.function(l123.function("var ", v488, " = ", v489));
                                return v488;
                            })(l215.function(),(function(){
                                var symbol = l132;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l120), l42.function((v485).name), l42.function(l106.function(l114.function(v485)))))));
                        })((function(){
                            var tmp = l91.function(v485, (function(){
                                var symbol = l213;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v485;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v490){
                            return (v486 !== l3.value ? v490 : (function(v491){
                                l180.function(l123.function("var ", v491, " = ", v490));
                                return v491;
                            })(l215.function()));
                        })(l123.function("{car: ", l216.function((function(){
                            var tmp = v485;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l216.function((function(){
                            var tmp = v485;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : (((function(){
                        var x = v485;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v492){
                            return (function(v493){
                                return (v486 !== l3.value ? v493 : (function(v494){
                                    l180.function(l123.function("var ", v494, " = ", v493));
                                    return v494;
                                })(l215.function()));
                            })(l123.function("[", l125.function(l69.function((function(){
                                var symbol = l216;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), v492), ", "), "]"));
                        })(l128.function(v485));
                    })() : l3.value)))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 184)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l216;
})();
((l193).value = ({car: l42.function(l152, (function (v496){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l216.function(v496);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 185)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l217 = {name: "%WHILE"};
((l193).value = ({car: l42.function(l217, (function (v498){
    if (arguments.length < 1) throw 'too few arguments';
    var v497= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v497 = {car: arguments[i], cdr: 
    v497};
    return (function(){
        try {
            return (function(){
                return l123.function("(function(){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("while(", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v498), " !== ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function((function(){
                    var symbol = l207;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v497)), "}", "return ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 186)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l218 = {name: "SYMBOL-FUNCTION"};
((l193).value = ({car: l42.function(l98, (function (v499){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l57.function(v499) !== l3.value ? (((function(){
                    var tmp = v499;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l206)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v499);
                })() : (((function(){
                    var tmp = v499;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l218), l42.function(l62.function(l42.function(l152), l42.function(v499)))));
                })() : l3.value));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 187)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l219 = {name: "EVAL-WHEN-COMPILE"};
var l220 = {name: "EVAL"};
var l221 = {name: "PROGN"};
((l193).value = ({car: l42.function(l219, (function (){
    var v500= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v500 = {car: arguments[i], cdr: 
    v500};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l220;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l221, cdr: v500}));
                return l3.value;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 188)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l222 = {name: "DEFINE-TRANSFORMATION"};
l222;
((l193).value = ({car: l42.function(l221, (function (){
    var v501= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v501 = {car: arguments[i], cdr: 
    v501};
    return (function(){
        try {
            return (function(){
                return l123.function("(function(){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function((function(){
                    var symbol = l207;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v501, l4.value)), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 189)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l223 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l223).function = (function(v503){
        ((v503)["fname"] = "SPECIAL-VARIABLE-P");
        return v503;
    })((function (v502){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l186.function(v502, l99, l188);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 190)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l223;
})();
var l224 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l224).function = (function(v510){
        ((v510)["fname"] = "LET-BINDING-WRAPPER");
        return v510;
    })((function (v504,v505){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v504) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 191, value: v505, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l123.function("try {", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("var tmp;", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function((function (v506){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v507){
                            return l123.function("tmp = ", v507, ".value;", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v507, ".value = ", (function(){
                                var tmp = v506;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v506;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l152), l42.function((function(){
                            var tmp = v506;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v504), v505, (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "}", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function(l127.function((function (v508){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v509){
                            return l123.function(v509, ".value", " = ", (function(){
                                var tmp = v508;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l152), l42.function((function(){
                            var tmp = v508;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v504)), "}", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 191)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l224;
})();
var l225 = {name: "LET"};
((l193).value = ({car: l42.function(l225, (function (v512){
    if (arguments.length < 1) throw 'too few arguments';
    var v511= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v511 = {car: arguments[i], cdr: 
    v511};
    return (function(){
        try {
            return (function(){
                return (function(v513){
                    return (function(v514){
                        return (function(v515,v517,v516){
                            try {
                                var tmp;
                                tmp = l173.value;
                                l173.value = v517;
                                v517 = tmp;
                                return l123.function("(function(", l125.function(l69.function((function (v518){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (l223.function(v518) !== l3.value ? (function(v519){
                                        (v516 = ({car: ({car: v518, cdr: v519}), cdr: v516}));
                                        return v519;
                                    })(l175.function(v518)) : l176.function(v518));
                                
                                }), v514), ","), "){", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v520){
                                    return l130.function(l224.function(v516, v520));
                                })((function(){
                                    var symbol = l207;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v511, l4.value)), "})(", l125.function(v515, ","), ")");
                            }
                            finally {
                                l173.value = v517;
                            }
                        })(l69.function((function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.function((function(){
                            var symbol = l39;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v513)),l177.function(l84.function((function(){
                            var symbol = l223;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v514)),l3.value);
                    })(l69.function((function(){
                        var symbol = l38;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v513));
                })(l69.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v512));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 192)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l226 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l226).function = (function(v527){
        ((v527)["fname"] = "LET*-INITIALIZE-VALUE");
        return v527;
    })((function (v521){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v522,v523){
                        return (l223.function(v522) !== l3.value ? l123.function((function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l210), l42.function(v522), l42.function(v523))), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(v524){
                            return (function(v525){
                                return (function(v526){
                                    l168.function(v525, (function(){
                                        var symbol = l173;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(), l99);
                                    return v526;
                                })(l123.function("var ", v524, " = ", (function(){
                                    var symbol = l132;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v523), ";", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()));
                            })(l158.function(v522, l99, v524));
                        })(l175.function(v522)));
                    })(l38.function(v521),l39.function(v521));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 193)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l226;
})();
var l227 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l227).function = (function(v536){
        ((v536)["fname"] = "LET*-BINDING-WRAPPER");
        return v536;
    })((function (v528,v529){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v528) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 194, value: v529, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v531){
                        return l123.function("try {", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l127.function((function (v532){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v533){
                                return l123.function("var ", (function(){
                                    var tmp = v532;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v533, ".value;", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l132;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l152), l42.function((function(){
                                var tmp = v532;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v531), v529), "}", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l127.function((function (v534){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v535){
                                return l123.function(v535, ".value", " = ", (function(){
                                    var tmp = v534;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l132;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l152), l42.function((function(){
                                var tmp = v534;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v531)), "}", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l69.function((function (v530){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return ({car: v530, cdr: l175.function(v530)});
                    
                    }), l85.function((function(){
                        var symbol = l223;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v528)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 194)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l227;
})();
var l228 = {name: "LET*"};
((l193).value = ({car: l42.function(l228, (function (v538){
    if (arguments.length < 1) throw 'too few arguments';
    var v537= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v537 = {car: arguments[i], cdr: 
    v537};
    return (function(){
        try {
            return (function(){
                return (function(v539,v540){
                    try {
                        var tmp;
                        tmp = l173.value;
                        l173.value = v540;
                        v540 = tmp;
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function((function(v541,v542){
                            return l227.function(v541, v542);
                        })(l85.function((function(){
                            var symbol = l223;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.function((function(){
                            var symbol = l38;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v539)),l123.function(l127.function((function(){
                            var symbol = l226;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v539), (function(){
                            var symbol = l207;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v537, l4.value)))), "})()");
                    }
                    finally {
                        l173.value = v540;
                    }
                })(l69.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v538),l167.function((function(){
                    var symbol = l173;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 195)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l229 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l229.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l229).value = 0);
    })());
    return l229;
})();
((l193).value = ({car: l42.function(l169, (function (v544){
    if (arguments.length < 1) throw 'too few arguments';
    var v543= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v543 = {car: arguments[i], cdr: 
    v543};
    return (function(){
        try {
            return (function(){
                return (function(v545){
                    return (function(v546){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("try {", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v547){
                            try {
                                var tmp;
                                tmp = l173.value;
                                l173.value = v547;
                                v547 = tmp;
                                return l130.function("return ", (function(){
                                    var symbol = l132;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l42.function(l221), v543)), ";", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l173.value = v547;
                            }
                        })(l171.function(l42.function(v546), (function(){
                            var symbol = l173;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l169)), "}", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v545, ")", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l158.function(v544, l169, v545));
                })(l16.function(((l229).value = (function(){
                    var x1 = (function(){
                        var symbol = l229;
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
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 196)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l230 = {name: "RETURN-FROM"};
((l193).value = ({car: l42.function(l230, (function (v548,v549){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v549=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v550){
                    return (v550 !== l3.value ? l123.function("(function(){", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("throw ({", "type: 'block', ", "id: ", l161.function(v550), ", ", "value: ", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v549), ", ", "message: 'Return from unknown block ", (v548).name, ".'", "})"), "})()") : (function(){
                        throw l123.function("Unknown block `", (v548).name, "'.");
                    })());
                })(l172.function(v548, (function(){
                    var symbol = l173;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l169));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 197)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l231 = {name: "CATCH"};
((l193).value = ({car: l42.function(l231, (function (v552){
    if (arguments.length < 1) throw 'too few arguments';
    var v551= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v551 = {car: arguments[i], cdr: 
    v551};
    return (function(){
        try {
            return (function(){
                return l123.function("(function(){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("var id = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v552), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("return ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l42.function(l221), v551)), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 198)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l232 = {name: "THROW"};
((l193).value = ({car: l42.function(l232, (function (v553,v554){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l123.function("(function(){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v553), ", ", "value: ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554), ", ", "message: 'Throw uncatched.'", "})"), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l233 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l233.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l233).value = 0);
    })());
    return l233;
})();
var l234 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l234.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l234).value = 0);
    })());
    return l234;
})();
var l235 = {name: "GO-TAG-P"};
(function(){
    (l235).function = (function(v557){
        ((v557)["fname"] = "GO-TAG-P");
        return v557;
    })((function (v555){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v556){
                        return (v556 !== l3.value ? v556 : ((function(){
                            var tmp = v555;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l75.function(v555));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 200)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l235;
})();
var l236 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l236).function = (function(v563){
        ((v563)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v563;
    })((function (v558,v559){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v562){
                        return l171.function(v562, (function(){
                            var symbol = l173;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l170);
                    })(l69.function((function (v560){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v561){
                            return l158.function(v560, l170, l42.function(v558, v561));
                        })(l16.function(((l234).value = (function(){
                            var x1 = (function(){
                                var symbol = l234;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })())));
                    
                    }), l85.function((function(){
                        var symbol = l235;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v559)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 201)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l236;
})();
var l237 = {name: "TAGBODY"};
((l193).value = ({car: l42.function(l237, (function (){
    var v564= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v564 = {car: arguments[i], cdr: 
    v564};
    return (function(){
        try {
            return (function(){
                (l89.function((function(){
                    var symbol = l235;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v564) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 202, value: (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l221), v564, l42.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l235.function((function(){
                    var tmp = v564;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return (v564 = ({car: l15.function("START"), cdr: v564}));
                })());
                return (function(v565){
                    return (function(v567,v566){
                        try {
                            var tmp;
                            tmp = l173.value;
                            l173.value = v567;
                            v567 = tmp;
                            (function(v568){
                                return (v566 = l39.function(l161.function(v568)));
                            })(l172.function(l38.function(v564), (function(){
                                var symbol = l173;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l170));
                            return l123.function("(function(){", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l130.function("var tagbody_", v565, " = ", v566, ";", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l130.function("try {", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l130.function((function(v569){
                                return l123.function("switch(tagbody_", v565, "){", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v566, ":", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v570,v571){
                                                (function(){
                                                    while(v570 !== l3.value){
                                                        (v571 = (function(){
                                                            var tmp = v570;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })());
                                                        (function(){
                                                            (v569 = l123.function(v569, (function(){
                                                                return (l26.function(l235.function(v571)) !== l3.value ? l130.function((function(){
                                                                    var symbol = l132;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v571), ";", (function(){
                                                                    var symbol = l122;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v572){
                                                                    return l123.function("case ", l39.function(l161.function(v572)), ":", (function(){
                                                                        var symbol = l122;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l172.function(v571, (function(){
                                                                    var symbol = l173;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l170)));
                                                            })()));
                                                            return l3.value;
                                                        })();
                                                        (v570 = (function(){
                                                            var tmp = v570;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })());
                                                    }return l3.value;
                                                })();
                                                return v569;
                                            })((function(){
                                                var tmp = v564;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 203)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l122;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v565, ")", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v565, " = jump.label;", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l132;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l122;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l173.value = v567;
                        }
                    })(l236.function(v565, v564),l3.value);
                })(l16.function((function(){
                    var symbol = l233;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 202)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l238 = {name: "GO"};
((l193).value = ({car: l42.function(l238, (function (v573){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v574,v575){
                    return (v574 !== l3.value ? l123.function("(function(){", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("throw ({", "type: 'tagbody', ", "id: ", l38.function(l161.function(v574)), ", ", "label: ", l39.function(l161.function(v574)), ", ", "message: 'Attempt to GO to non-existing tag ", v575, "'", "})", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l123.function("Unknown tag `", v575, "'.");
                    })());
                })(l172.function(v573, (function(){
                    var symbol = l173;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l170),(((function(){
                    var tmp = v573;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v573).name;
                })() : (l75.function(v573) !== l3.value ? (function(){
                    return l16.function(v573);
                })() : l3.value)));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 204)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l239 = {name: "UNWIND-PROTECT"};
((l193).value = ({car: l42.function(l239, (function (v577){
    if (arguments.length < 1) throw 'too few arguments';
    var v576= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v576 = {car: arguments[i], cdr: 
    v576};
    return (function(){
        try {
            return (function(){
                return l123.function("(function(){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("var ret = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("ret = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v577), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function((function(){
                    var symbol = l207;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v576)), "}", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 205)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l240 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l240).function = (function(v580){
        ((v580)["fname"] = "BACKQUOTE-EXPAND-1");
        return v580;
    })((function (v578){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v578;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l42.function(l152, v578);
                    })() : (l43.function(v578) !== l3.value ? (function(){
                        return v578;
                    })() : ((((function(){
                        var tmp = v578;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l155)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v578;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v578;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l153)?l4.value: l3.value) !== l3.value ? (function(){
                        return l240.function(l240.function(l32.function(v578)));
                    })() : (function(){
                        return ({car: l62, cdr: l69.function((function (v579){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l57.function(v579) !== l3.value ? (((function(){
                                var tmp = v579;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l155)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l42.function(l42, l32.function(v579));
                            })() : ((l57.function(v579) !== l3.value ? (((function(){
                                var tmp = v579;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l154)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l32.function(v579);
                            })() : (function(){
                                return l42.function(l42, l240.function(v579));
                            })()));
                        
                        }), v578)});
                    })()))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 206)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l240;
})();
var l241 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l241).function = (function(v582){
        ((v582)["fname"] = "BACKQUOTE-EXPAND");
        return v582;
    })((function (v581){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l57.function(v581) !== l3.value ? (((function(){
                        var tmp = v581;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l153)?l4.value: l3.value) : l3.value) !== l3.value ? l240.function(l32.function(v581)) : v581);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 207)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l241;
})();
l153;
((l193).value = ({car: l42.function(l153, (function (v583){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l240.function(v583));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 208)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l193;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l242 = {name: "*BUILTINS*"};
(function(){
    (((l242.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l242).value = l3.value);
    })());
    return l242;
})();
var l243 = {name: "DEFINE-RAW-BUILTIN"};
l243;
var l244 = {name: "DEFINE-BUILTIN"};
l244;
var l245 = {name: "TYPE-CHECK"};
l245;
var l246 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l246).function = (function(v592){
        ((v592)["fname"] = "VARIABLE-ARITY-CALL");
        return v592;
    })((function (v584,v585){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v584;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "ARGS must be a non-empty list";
                        })();
                    })());
                    return (function(v586,v587,v588){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v589,v590){
                                        (function(){
                                            while(v589 !== l3.value){
                                                (v590 = (function(){
                                                    var tmp = v589;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v591){
                                                        (v587 = ({car: v591, cdr: v587}));
                                                        return (v588 = l123.function(v588, (function(){
                                                            return l123.function("var ", v591, " = ", (function(){
                                                                var symbol = l132;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v590), ";", (function(){
                                                                var symbol = l122;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), "if (typeof ", v591, " !== 'number') throw 'Not a number!';", (function(){
                                                                var symbol = l122;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })());
                                                        })()));
                                                    })(l123.function("x", l16.function((v586 = (function(){
                                                        var x1 = v586;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })()))));
                                                    return l3.value;
                                                })();
                                                (v589 = (function(){
                                                    var tmp = v589;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v584,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 210)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(v588, (v585)(l64.function(v587))), "})()");
                    })(0,l3,"");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 209)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l246;
})();
var l247 = {name: "VARIABLE-ARITY"};
l247;
var l248 = {name: "NUM-OP-NUM"};
(function(){
    (l248).function = (function(v596){
        ((v596)["fname"] = "NUM-OP-NUM");
        return v596;
    })((function (v593,v594,v595){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l123.function("(function(){", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function(l123.function("var ", "x", " = ", v593, ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l123.function("var ", "y", " = ", v595, ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l123.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l123.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l123.function("return ", (function(){
                        return l123.function("x", v594, "y");
                    })(), ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 211)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l248;
})();
((l242).value = ({car: l42.function(l59, (function (){
    var v597= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v597 = {car: arguments[i], cdr: 
    v597};
    return (function(){
        try {
            return (function(){
                return (l11.function(v597) !== l3.value ? "0" : l246.function(v597, (function (v598){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l123.function("return ", l125.function(v598, "+"), ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 212)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l242).value = ({car: l42.function(l60, (function (v600){
    if (arguments.length < 1) throw 'too few arguments';
    var v599= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v599 = {car: arguments[i], cdr: 
    v599};
    return (function(){
        try {
            return (function(){
                return (function(v601){
                    return l246.function(v601, (function (v602){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", (l11.function(v599) !== l3.value ? l123.function("-", (function(){
                            var tmp = v602;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l125.function(v602, "-")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v600, cdr: v599}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 213)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l242).value = ({car: l42.function(l19, (function (){
    var v603= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v603 = {car: arguments[i], cdr: 
    v603};
    return (function(){
        try {
            return (function(){
                return (l11.function(v603) !== l3.value ? "1" : l246.function(v603, (function (v604){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l123.function("return ", l125.function(v604, "*"), ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 214)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l242).value = ({car: l42.function(l20, (function (v606){
    if (arguments.length < 1) throw 'too few arguments';
    var v605= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v605 = {car: arguments[i], cdr: 
    v605};
    return (function(){
        try {
            return (function(){
                return (function(v607){
                    return l246.function(v607, (function (v608){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", (l11.function(v605) !== l3.value ? l123.function("1 /", (function(){
                            var tmp = v608;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l125.function(v608, "/")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v606, cdr: v605}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 215)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l249 = {name: "MOD"};
(function(){
    return ((l242).value = ({car: l42.function(l249, (function (v609,v610){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v611,v612){
                        return l248.function(v611, "%", v612);
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v609),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v610));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 216)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l250 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l250).function = (function(v615){
        ((v615)["fname"] = "COMPARISON-CONJUNTION");
        return v615;
    })((function (v613,v614){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function((function(){
                        var tmp = v613;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return "true";
                    })() : (l11.function(l34.function(v613)) !== l3.value ? (function(){
                        return l123.function((function(){
                            var tmp = v613;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v614, l32.function(v613));
                    })() : (function(){
                        return l123.function((function(){
                            var tmp = v613;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v614, l32.function(v613), " && ", l250.function((function(){
                            var tmp = v613;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v614));
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 217)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l250;
})();
var l251 = {name: "DEFINE-BUILTIN-COMPARISON"};
l251;
var l252 = {name: ">"};
((l242).value = ({car: l42.function(l252, (function (v617){
    if (arguments.length < 1) throw 'too few arguments';
    var v616= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v616 = {car: arguments[i], cdr: 
    v616};
    return (function(){
        try {
            return (function(){
                return (function(v618){
                    return l246.function(v618, (function (v619){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", l131.function(l250.function(v619, ">")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v617, cdr: v616}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 218)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l253 = {name: "<"};
((l242).value = ({car: l42.function(l253, (function (v621){
    if (arguments.length < 1) throw 'too few arguments';
    var v620= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v620 = {car: arguments[i], cdr: 
    v620};
    return (function(){
        try {
            return (function(){
                return (function(v622){
                    return l246.function(v622, (function (v623){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", l131.function(l250.function(v623, "<")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v621, cdr: v620}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 219)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l254 = {name: ">="};
((l242).value = ({car: l42.function(l254, (function (v625){
    if (arguments.length < 1) throw 'too few arguments';
    var v624= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v624 = {car: arguments[i], cdr: 
    v624};
    return (function(){
        try {
            return (function(){
                return (function(v626){
                    return l246.function(v626, (function (v627){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", l131.function(l250.function(v627, ">=")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v625, cdr: v624}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 220)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l255 = {name: "<="};
((l242).value = ({car: l42.function(l255, (function (v629){
    if (arguments.length < 1) throw 'too few arguments';
    var v628= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v628 = {car: arguments[i], cdr: 
    v628};
    return (function(){
        try {
            return (function(){
                return (function(v630){
                    return l246.function(v630, (function (v631){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", l131.function(l250.function(v631, "<=")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v629, cdr: v628}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 221)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l242).value = ({car: l42.function(l18, (function (v633){
    if (arguments.length < 1) throw 'too few arguments';
    var v632= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v632 = {car: arguments[i], cdr: 
    v632};
    return (function(){
        try {
            return (function(){
                return (function(v634){
                    return l246.function(v634, (function (v635){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l123.function("return ", l131.function(l250.function(v635, "==")), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v633, cdr: v632}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 222)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l256 = {name: "NUMBERP"};
(function(){
    return ((l242).value = ({car: l42.function(l256, (function (v636){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v637){
                        return l131.function(l123.function("(typeof (", v637, ") == \"number\")"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v636));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 223)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l257 = {name: "FLOOR"};
(function(){
    return ((l242).value = ({car: l42.function(l257, (function (v638){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v639){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v639, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v638));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 224)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l27, (function (v640,v641){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v642,v643){
                        return l123.function("({car: ", v642, ", cdr: ", v643, "})");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v640),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v641));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 225)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l28, (function (v644){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v645){
                        return l131.function(l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var tmp = ", v645, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v644));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 226)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l29, (function (v646){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v647){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var tmp = ", v647, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v646));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 227)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l30, (function (v648){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v649){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var tmp = ", v649, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v648));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 228)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l258 = {name: "SETCAR"};
(function(){
    return ((l242).value = ({car: l42.function(l258, (function (v650,v651){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v652,v653){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v652, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return l123.function("(x.car = ", v653, ")");
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v650),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v651));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 229)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l259 = {name: "SETCDR"};
(function(){
    return ((l242).value = ({car: l42.function(l259, (function (v654,v655){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v656,v657){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v656, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return l123.function("(x.cdr = ", v657, ")");
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v654),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v655));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 230)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l260 = {name: "SYMBOLP"};
(function(){
    return ((l242).value = ({car: l42.function(l260, (function (v658){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v659){
                        return l131.function(l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var tmp = ", v659, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v658));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 231)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l261 = {name: "MAKE-SYMBOL"};
(function(){
    return ((l242).value = ({car: l42.function(l261, (function (v660){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v661){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "name", " = ", v661, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v660));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 232)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l262 = {name: "SYMBOL-NAME"};
(function(){
    return ((l242).value = ({car: l42.function(l262, (function (v662){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v663){
                        return l123.function("(", v663, ").name");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v662));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 233)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l209, (function (v664,v665){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v666,v667){
                        return l123.function("(", v666, ").value = ", v667);
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v664),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v665));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 234)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l263 = {name: "FSET"};
(function(){
    return ((l242).value = ({car: l42.function(l263, (function (v668,v669){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v670,v671){
                        return l123.function("(", v670, ").function = ", v671);
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v668),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v669));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 235)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l17, (function (v672){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v673){
                        return l131.function(l123.function("(", v673, ".value !== undefined)"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v672));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 236)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l264 = {name: "SYMBOL-VALUE"};
(function(){
    return ((l242).value = ({car: l42.function(l264, (function (v674){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v675){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var symbol = ", v675, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v674));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 237)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l218, (function (v676){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v677){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var symbol = ", v677, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v676));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 238)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l265 = {name: "SYMBOL-PLIST"};
(function(){
    return ((l242).value = ({car: l42.function(l265, (function (v678){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v679){
                        return l123.function("((", v679, ").plist || ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v678));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 239)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l266 = {name: "LAMBDA-CODE"};
(function(){
    return ((l242).value = ({car: l42.function(l266, (function (v680){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v681){
                        return l123.function("(", v681, ").toString()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v680));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 240)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l267 = {name: "EQ"};
(function(){
    return ((l242).value = ({car: l42.function(l267, (function (v682,v683){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v684,v685){
                        return l131.function(l123.function("(", v684, " === ", v685, ")"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v682),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v683));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 241)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l268 = {name: "EQUAL"};
(function(){
    return ((l242).value = ({car: l42.function(l268, (function (v686,v687){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v688,v689){
                        return l131.function(l123.function("(", v688, " == ", v689, ")"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v686),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v687));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 242)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l269 = {name: "CHAR-TO-STRING"};
(function(){
    return ((l242).value = ({car: l42.function(l269, (function (v690){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v691){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v691, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v690));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 243)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l270 = {name: "STRINGP"};
(function(){
    return ((l242).value = ({car: l42.function(l270, (function (v692){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v693){
                        return l131.function(l123.function("(typeof(", v693, ") == \"string\")"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v692));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 244)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l271 = {name: "STRING-UPCASE"};
(function(){
    return ((l242).value = ({car: l42.function(l271, (function (v694){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v695){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v695, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v694));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 245)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l272 = {name: "STRING-LENGTH"};
(function(){
    return ((l242).value = ({car: l42.function(l272, (function (v696){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v697){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v697, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v696));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 246)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l273 = {name: "SLICE"};
((l242).value = ({car: l42.function(l273, (function (v698,v699,v700){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v700=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l123.function("(function(){", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l130.function("var str = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v698), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v699), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v700 !== l3.value ? l123.function("b = ", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v700), ";", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l122;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 247)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l274 = {name: "CHAR"};
(function(){
    return ((l242).value = ({car: l42.function(l274, (function (v701,v702){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v703,v704){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "string", " = ", v703, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("var ", "index", " = ", v704, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v701),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v702));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 248)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l242).value = ({car: l42.function(l68, (function (v705,v706){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v707,v708){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "string1", " = ", v707, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("var ", "string2", " = ", v708, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v705),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v706));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 249)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l275 = {name: "FUNCALL"};
((l242).value = ({car: l42.function(l275, (function (v710){
    if (arguments.length < 1) throw 'too few arguments';
    var v709= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v709 = {car: arguments[i], cdr: 
    v709};
    return (function(){
        try {
            return (function(){
                return l123.function("(", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v710), ")(", l125.function(l69.function((function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v709), ", "), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 250)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l276 = {name: "APPLY"};
((l242).value = ({car: l42.function(l276, (function (v712){
    if (arguments.length < 1) throw 'too few arguments';
    var v711= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v711 = {car: arguments[i], cdr: 
    v711};
    return (function(){
        try {
            return (function(){
                return (l11.function(v711) !== l3.value ? l123.function("(", (function(){
                    var symbol = l132;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v712), ")()") : (function(v713,v714){
                    return l123.function("(function(){", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l130.function("var f = ", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v712), ";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l125.function(l69.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v713), ", "), "];", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v714), ");", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l81.function(v711),(function(){
                    var tmp = l80.function(v711);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 251)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l242;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l277 = {name: "JS-EVAL"};
(function(){
    return ((l242).value = ({car: l42.function(l277, (function (v715){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v716){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "string", " = ", v716, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v715));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 252)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l278 = {name: "ERROR"};
(function(){
    return ((l242).value = ({car: l42.function(l278, (function (v717){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v718){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw ", v718, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v717));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 253)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l279 = {name: "NEW"};
(function(){
    return ((l242).value = ({car: l42.function(l279, (function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        return "{}";
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 254)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l280 = {name: "OBJECTP"};
(function(){
    return ((l242).value = ({car: l42.function(l280, (function (v719){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v720){
                        return l131.function(l123.function("(typeof (", v720, ") === 'object')"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v719));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 255)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l281 = {name: "OGET"};
(function(){
    return ((l242).value = ({car: l42.function(l281, (function (v721,v722){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v723,v724){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var tmp = ", "(", v723, ")[", v724, "];", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v721),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v722));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 256)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l282 = {name: "OSET"};
(function(){
    return ((l242).value = ({car: l42.function(l282, (function (v725,v726,v727){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v728,v729,v730){
                        return l123.function("((", v728, ")[", v729, "] = ", v730, ")");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v725),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v726),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v727));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 257)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l283 = {name: "IN"};
(function(){
    return ((l242).value = ({car: l42.function(l283, (function (v731,v732){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v733,v734){
                        return l131.function(l123.function("((", v733, ") in (", v734, "))"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v731),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v732));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 258)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l284 = {name: "FUNCTIONP"};
(function(){
    return ((l242).value = ({car: l42.function(l284, (function (v735){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v736){
                        return l131.function(l123.function("(typeof ", v736, " == 'function')"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v735));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 259)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l285 = {name: "WRITE-STRING"};
(function(){
    return ((l242).value = ({car: l42.function(l285, (function (v737){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v738){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function(l123.function("var ", "x", " = ", v738, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l123.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l123.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v737));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 260)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l286 = {name: "MAKE-ARRAY"};
(function(){
    return ((l242).value = ({car: l42.function(l286, (function (v739){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v740){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var r = [];", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "for (var i = 0; i < ", v740, "; i++)", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("r.push(", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ");", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "return r;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v739));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 261)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l287 = {name: "ARRAYP"};
(function(){
    return ((l242).value = ({car: l42.function(l287, (function (v741){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v742){
                        return l131.function(l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var x = ", v742, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v741));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 262)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l288 = {name: "AREF"};
(function(){
    return ((l242).value = ({car: l42.function(l288, (function (v743,v744){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v745,v746){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var x = ", "(", v745, ")[", v746, "];", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (x === undefined) throw 'Out of range';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x;", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v743),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v744));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 263)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l289 = {name: "ASET"};
(function(){
    return ((l242).value = ({car: l42.function(l289, (function (v747,v748,v749){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v750,v751,v752){
                        return l123.function("(function(){", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l130.function("var x = ", v750, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var i = ", v751, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x[i] = ", v752, ";", (function(){
                            var symbol = l122;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v747),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v748),(function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v749));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 264)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l242;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    (l184).function = (function(v755){
        ((v755)["fname"] = "MACRO");
        return v755;
    })((function (v753){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v753;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v754){
                        return (((l160.function(v754) === l184)?l4.value: l3.value) !== l3.value ? v754 : l3.value);
                    })(l172.function(v753, (function(){
                        var symbol = l173;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 265)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l184;
})();
var l290 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l290).function = (function(v760){
        ((v760)["fname"] = "LS-MACROEXPAND-1");
        return v760;
    })((function (v756){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v757){
                        return (v757 !== l3.value ? (function(v758){
                            (l57.function(v758) !== l3.value ? (function(){
                                return (function(v759){
                                    l163.function(v757, v759);
                                    return (v758 = v759);
                                })((function(){
                                    var symbol = l220;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v758));
                            })() : l3.value);
                            return (function(){
                                var f = v758;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v756;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l161.function(v757)) : v756);
                    })(l184.function((function(){
                        var tmp = v756;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 266)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l290;
})();
var l291 = {name: "COMPILE-FUNCALL"};
(function(){
    (l291).function = (function(v763){
        ((v763)["fname"] = "COMPILE-FUNCALL");
        return v763;
    })((function (v761,v762){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v761;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l186.function(v761, l98, l191) : l3.value) !== l3.value ? l123.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l152), l42.function(v761))), ".function(", l125.function(l69.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v762), ", "), ")") : l123.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l98), l42.function(v761))), "(", l125.function(l69.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v762), ", "), ")"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 267)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l291;
})();
(function(){
    (l207).function = (function(v766){
        ((v766)["fname"] = "LS-COMPILE-BLOCK");
        return v766;
    })((function (v764,v765){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v765=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v765 !== l3.value ? l123.function(l207.function(l81.function(v764)), "return ", (function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l80.function(v764);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l126.function(l84.function((function(){
                        var symbol = l181;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l69.function((function(){
                        var symbol = l132;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v764)), l123.function(";", (function(){
                        var symbol = l122;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 268)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l207;
})();
(function(){
    (l132).function = (function(v774){
        ((v774)["fname"] = "LS-COMPILE");
        return v774;
    })((function (v767){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v767;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v768){
                            return ((v768 !== l3.value ? l26.function(l82.function(l188, l162.function(v768))) : l3.value) !== l3.value ? (function(){
                                return l161.function(v768);
                            })() : ((function(v769){
                                return (v769 !== l3.value ? v769 : l82.function(l190, l162.function(v768)));
                            })(l113.function(v767)) !== l3.value ? (function(){
                                return l123.function(l132.function(l62.function(l42.function(l152), l42.function(v767))), ".value");
                            })() : (function(){
                                return l132.function(l62.function(l42.function(l264), l42.function(l62.function(l42.function(l152), l42.function(v767)))));
                            })()));
                        })(l172.function(v767, (function(){
                            var symbol = l173;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l99));
                    })() : (l75.function(v767) !== l3.value ? (function(){
                        return l16.function(v767);
                    })() : (((typeof(v767) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l123.function("\"", l135.function(v767), "\"");
                    })() : (((function(){
                        var x = v767;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l216.function(v767);
                    })() : (l57.function(v767) !== l3.value ? (function(){
                        return (function(v770,v771){
                            return (l91.function(v770, (function(){
                                var symbol = l193;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v772){
                                    return (function(){
                                        var f = v772;
                                        var args = [];
                                        var tail = (v771);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l91.function(v770, (function(){
                                    var symbol = l193;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l91.function(v770, (function(){
                                var symbol = l242;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l26.function(l186.function(v770, l98, l189)) : l3.value) !== l3.value ? (function(){
                                return (function(v773){
                                    return (function(){
                                        var f = v773;
                                        var args = [];
                                        var tail = (v771);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l91.function(v770, (function(){
                                    var symbol = l242;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l184.function(v770) !== l3.value ? l132.function(l290.function(v767)) : l291.function(v770, v771));
                            })()));
                        })((function(){
                            var tmp = v767;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v767;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return (function(){
                            throw "How should I compile this?";
                        })();
                    })())))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 269)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l132;
})();
var l292 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l292).function = (function(v779){
        ((v779)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v779;
    })((function (v775){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v776){
                        try {
                            var tmp;
                            tmp = l179.value;
                            l179.value = v776;
                            v776 = tmp;
                            return ((((function(){
                                var tmp = v775;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v775;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l221)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v777){
                                    return l125.function(l84.function((function(){
                                        var symbol = l181;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v777));
                                })(l69.function((function(){
                                    var symbol = l292;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v775;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v778){
                                    return l123.function(l126.function(l182.function(), l123.function(";", (function(){
                                        var symbol = l122;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v778 !== l3.value ? l123.function(v778, ";", (function(){
                                        var symbol = l122;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l132.function(v775));
                            })());
                        }
                        finally {
                            l179.value = v776;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 270)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l292;
})();
var l293 = {name: "WITH-COMPILATION-UNIT"};
l293;
(function(){
    (l220).function = (function(v785){
        ((v785)["fname"] = "EVAL");
        return v785;
    })((function (v780){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v784){
                        return (function(){
                            var string = v784;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v781){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v782,v783){
                                        (function(){
                                            while(v782 !== l3.value){
                                                (v783 = (function(){
                                                    var tmp = v782;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v783)();
                                                    return l3.value;
                                                })();
                                                (v782 = (function(){
                                                    var tmp = v782;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l157;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 272)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v781;
                    })((function(){
                        ((l157).value = l3.value);
                        return l292.function(v780);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 271)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l220;
})();
var l294 = {name: "&BODY"};
var l295 = {car: l198, cdr: {car: l197, cdr: {car: l294, cdr: {car: l19, cdr: {car: l14, cdr: {car: l115, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l253, cdr: {car: l255, cdr: {car: l18, cdr: {car: l18, cdr: {car: l252, cdr: {car: l254, cdr: {car: l52, cdr: {car: l62, cdr: {car: l276, cdr: {car: l288, cdr: {car: l287, cdr: {car: l289, cdr: {car: l91, cdr: {car: l43, cdr: {car: l169, cdr: {car: l17, cdr: {car: l17, cdr: {car: l81, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l231, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l274, cdr: {car: l73, cdr: {car: l74, cdr: {car: l72, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l71, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l7, cdr: {car: l86, cdr: {car: l95, cdr: {car: l97, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l267, cdr: {car: l25, cdr: {car: l268, cdr: {car: l278, cdr: {car: l220, cdr: {car: l90, cdr: {car: l121, cdr: {car: l94, cdr: {car: l105, cdr: {car: l119, cdr: {car: l38, cdr: {car: l41, cdr: {car: l263, cdr: {car: l275, cdr: {car: l98, cdr: {car: l284, cdr: {car: l15, cdr: {car: l238, cdr: {car: l70, cdr: {car: l195, cdr: {car: l116, cdr: {car: l44, cdr: {car: l75, cdr: {car: l75, cdr: {car: l120, cdr: {car: l113, cdr: {car: l206, cdr: {car: l80, cdr: {car: l67, cdr: {car: l225, cdr: {car: l228, cdr: {car: l101, cdr: {car: l42, cdr: {car: l57, cdr: {car: l286, cdr: {car: l102, cdr: {car: l261, cdr: {car: l69, cdr: {car: l82, cdr: {car: l77, cdr: {car: l249, cdr: {car: l3, cdr: {car: l26, cdr: {car: l79, cdr: {car: l78, cdr: {car: l11, cdr: {car: l256, cdr: {car: l53, cdr: {car: l106, cdr: {car: l108, cdr: {car: l104, cdr: {car: l76, cdr: {car: l134, cdr: {car: l137, cdr: {car: l192, cdr: {car: l54, cdr: {car: l55, cdr: {car: l221, cdr: {car: l65, cdr: {car: l46, cdr: {car: l152, cdr: {car: l83, cdr: {car: l84, cdr: {car: l85, cdr: {car: l12, cdr: {car: l230, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l209, cdr: {car: l210, cdr: {car: l89, cdr: {car: l271, cdr: {car: l92, cdr: {car: l93, cdr: {car: l270, cdr: {car: l87, cdr: {car: l218, cdr: {car: l262, cdr: {car: l114, cdr: {car: l265, cdr: {car: l264, cdr: {car: l260, cdr: {car: l4, cdr: {car: l237, cdr: {car: l40, cdr: {car: l232, cdr: {car: l24, cdr: {car: l6, cdr: {car: l239, cdr: {car: l99, cdr: {car: l136, cdr: {car: l5, cdr: {car: l96, cdr: {car: l285, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l121.function(l295);
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
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l156;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l134;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l220;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l292;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v786){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l220.function(l156.function(v786));

}));
(lisp.compileString = (function (v787){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l292.function(l156.function(v787));

}));
var l296 = {car: {car: l294, cdr: "l294"}, cdr: {car: {car: l293, cdr: "l293"}, cdr: {car: {car: l292, cdr: "l292"}, cdr: {car: {car: l291, cdr: "l291"}, cdr: {car: {car: l290, cdr: "l290"}, cdr: {car: {car: l289, cdr: "l289"}, cdr: {car: {car: l288, cdr: "l288"}, cdr: {car: {car: l287, cdr: "l287"}, cdr: {car: {car: l286, cdr: "l286"}, cdr: {car: {car: l285, cdr: "l285"}, cdr: {car: {car: l284, cdr: "l284"}, cdr: {car: {car: l283, cdr: "l283"}, cdr: {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l297 = {name: "BODY"};
var l298 = {name: "CHECK"};
var l299 = {name: "OP"};
var l300 = {name: "SYM"};
var l301 = {name: "X"};
var l302 = {name: "ARGS"};
var l303 = {name: "DECLS"};
var l304 = {name: "DECL"};
var l305 = {name: "NAME"};
var l306 = {name: "ARG"};
var l307 = {name: "FORM"};
var l308 = {name: "PACKAGE-DESIGNATOR"};
var l309 = {name: "PAIRS"};
var l310 = {name: "ASSIGNMENTS"};
var l311 = {name: "VALUE"};
var l312 = {name: "FORM1"};
var l313 = {name: "RESULT"};
var l314 = {name: "FORMS"};
var l315 = {name: "G"};
var l316 = {name: "CLAUSULES"};
var l317 = {name: "!FORM"};
var l318 = {name: "CLAUSULE"};
var l319 = {name: "ITER"};
var l320 = {name: "G!TO"};
var l321 = {name: "VAR"};
var l322 = {name: "TO"};
var l323 = {name: "G!LIST"};
var l324 = {name: "PLACE"};
var l325 = {name: "DELTA"};
var l326 = {name: "CONDITION"};
var l327 = {name: "DOCSTRING"};
var l328 = {car: {car: {car: l242, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l234, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l233, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l214, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l213, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l196, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l193, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l151, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: {car: l190, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l188, cdr: {car: l190, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l220, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l293, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l297, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l54, cdr: {car: {car: l221, cdr: {car: {car: l210, cdr: {car: l157, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l47, cdr: {car: {car: l298, cdr: {car: l157, cdr: l3}}, cdr: {car: {car: l275, cdr: {car: l298, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l292, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l207, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l291, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l290, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l184, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l251, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l299, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l243, cdr: {car: {car: l155, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l301, cdr: {car: l198, cdr: {car: l302, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l302, cdr: {car: {car: l27, cdr: {car: l301, cdr: {car: l302, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l247, cdr: {car: l302, cdr: {car: {car: l131, cdr: {car: {car: l250, cdr: {car: l302, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l250, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l248, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l247, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l6, cdr: {car: {car: l260, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l278, cdr: {car: "Bad usage of VARIABLE-ARITY, you must pass a symbol", cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l246, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l206, cdr: {car: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: l3}, cdr: {car: {car: l123, cdr: {car: "return ", cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: {car: ";", cdr: {car: l122, cdr: l3}}}}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l246, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l245, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l303, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l133, cdr: {car: {car: l154, cdr: {car: {car: l69, cdr: {car: {car: l206, cdr: {car: {car: l304, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l123, cdr: {car: "var ", cdr: {car: {car: l155, cdr: {car: {car: l38, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l155, cdr: {car: {car: l40, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l122, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l303, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l69, cdr: {car: {car: l206, cdr: {car: {car: l304, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l123, cdr: {car: "if (typeof ", cdr: {car: {car: l155, cdr: {car: {car: l38, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l155, cdr: {car: {car: l39, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l122, cdr: {car: {car: l130, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l155, cdr: {car: {car: l38, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l155, cdr: {car: {car: l39, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l122, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l303, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l123, cdr: {car: "return ", cdr: {car: {car: l221, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l122, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l244, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l221, cdr: {car: {car: l243, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l225, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l206, cdr: {car: {car: l306, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: {car: l155, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: {car: l155, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l302, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l243, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l206, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l169, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l242, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l307, cdr: l3}, cdr: {car: {car: l240, cdr: {car: l307, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l241, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l240, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l236, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l235, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l227, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l226, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l224, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l222, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l307, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l194, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l132, cdr: {car: {car: l155, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l216, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l215, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l208, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l205, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l204, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l203, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l202, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l201, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l194, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l206, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l169, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l193, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l187, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l186, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l185, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l183, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l175, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l168, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l167, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l166, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l297, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l123, cdr: {car: "(function(){", cdr: {car: l122, cdr: {car: {car: l130, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l99, cdr: {car: l198, cdr: {car: l307, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l123, cdr: {car: {car: l155, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l221, cdr: {car: {car: l154, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l308, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l219, cdr: {car: {car: l210, cdr: {car: l115, cdr: {car: {car: l103, cdr: {car: {car: l155, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l97, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l310, cdr: {car: {car: l152, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l13, cdr: {car: l4, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l12, cdr: l3}, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l309, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l278, cdr: {car: "Odd paris in PSETQ", cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l225, cdr: {car: {car: {car: l99, cdr: {car: {car: l29, cdr: {car: l309, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l311, cdr: {car: {car: l32, cdr: {car: l309, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l153, cdr: {car: {car: {car: l155, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: l310, cdr: l3}}}, cdr: {car: {car: l210, cdr: {car: l309, cdr: {car: {car: l34, cdr: {car: l309, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l210, cdr: {car: l310, cdr: {car: {car: l64, cdr: {car: l310, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l225, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l30, cdr: l3}}, cdr: {car: l310, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l210, cdr: {car: {car: l154, cdr: {car: {car: l58, cdr: {car: {car: l98, cdr: {car: l62, cdr: l3}}, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l81, cdr: l3}}, cdr: {car: l310, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: l3, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l312, cdr: {car: l313, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l54, cdr: {car: {car: l221, cdr: {car: {car: l155, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l313, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l307, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l311, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l225, cdr: {car: {car: {car: {car: l155, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l311, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l314, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l225, cdr: {car: {car: {car: l315, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l225, cdr: {car: {car: {car: {car: l155, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l29, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l195, cdr: {car: {car: l155, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l53, cdr: {car: {car: l154, cdr: {car: {car: l30, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l314, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l153, cdr: {car: {car: l195, cdr: {car: {car: l155, cdr: {car: {car: l29, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l52, cdr: {car: {car: l154, cdr: {car: {car: l30, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l307, cdr: {car: l198, cdr: {car: l316, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l50, cdr: {car: {car: l155, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l62, cdr: {car: l316, cdr: {car: {car: l153, cdr: {car: {car: {car: l4, cdr: {car: {car: l278, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l307, cdr: {car: l198, cdr: {car: l316, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l317, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l225, cdr: {car: {car: {car: {car: l155, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l49, cdr: {car: {car: l154, cdr: {car: {car: l69, cdr: {car: {car: l206, cdr: {car: {car: l318, cdr: l3}, cdr: {car: {car: l195, cdr: {car: {car: l267, cdr: {car: {car: l29, cdr: {car: l318, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l318, cdr: {car: {car: l153, cdr: {car: {car: {car: l25, cdr: {car: {car: l155, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: {car: l29, cdr: {car: l318, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l30, cdr: {car: l318, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l316, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l316, cdr: l3}}, cdr: {car: {car: l195, cdr: {car: {car: l11, cdr: {car: l316, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l195, cdr: {car: {car: l267, cdr: {car: {car: l31, cdr: {car: l316, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l221, cdr: {car: {car: l154, cdr: {car: {car: l33, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l195, cdr: {car: {car: l155, cdr: {car: {car: l31, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l221, cdr: {car: {car: l154, cdr: {car: {car: l33, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: l154, cdr: {car: {car: l30, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l319, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l320, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l321, cdr: {car: {car: l38, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l322, cdr: {car: {car: l39, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l313, cdr: {car: {car: l40, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l169, cdr: {car: l3, cdr: {car: {car: l225, cdr: {car: {car: {car: {car: l155, cdr: {car: l321, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l155, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l253, cdr: {car: {car: l155, cdr: {car: l321, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l320, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l237, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l44, cdr: {car: {car: l155, cdr: {car: l321, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l313, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l319, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l321, cdr: {car: {car: l38, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l323, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l169, cdr: {car: l3, cdr: {car: {car: l225, cdr: {car: {car: {car: {car: l155, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l39, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l155, cdr: {car: l321, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l155, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l321, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l155, cdr: {car: l323, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l237, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l30, cdr: {car: {car: l155, cdr: {car: l323, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l155, cdr: {car: {car: l40, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l301, cdr: {car: l324, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l324, cdr: l3}}, cdr: {car: {car: l27, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l324, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l301, cdr: {car: l197, cdr: {car: {car: l325, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l60, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l325, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l301, cdr: {car: l197, cdr: {car: {car: l325, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l325, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l326, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l169, cdr: {car: l3, cdr: {car: {car: l217, cdr: {car: {car: l155, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l197, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l230, cdr: {car: l3, cdr: {car: {car: l155, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l191, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l221, cdr: {car: {car: l2, cdr: {car: {car: l191, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l263, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l155, cdr: {car: {car: l262, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l195, cdr: {car: {car: l52, cdr: {car: {car: l270, cdr: {car: {car: l29, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l26, cdr: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: {car: l155, cdr: {car: {car: l29, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l169, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l30, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: {car: l169, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l225, cdr: {car: {car: {car: l301, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l225, cdr: {car: {car: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l206, cdr: {car: {car: l155, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l282, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l301, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l311, cdr: {car: l197, cdr: {car: l327, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l221, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l5, cdr: {car: {car: l270, cdr: {car: l327, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: {car: l282, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l155, cdr: {car: l327, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l311, cdr: {car: l197, cdr: {car: l327, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l221, cdr: {car: {car: l2, cdr: {car: {car: l188, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l210, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l5, cdr: {car: {car: l270, cdr: {car: l327, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: {car: l282, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l155, cdr: {car: l327, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l326, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l195, cdr: {car: {car: l155, cdr: {car: l326, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l221, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l326, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l195, cdr: {car: {car: l155, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l221, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l198, cdr: {car: l303, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l219, cdr: {car: {car: l154, cdr: {car: {car: l69, cdr: {car: {car: l206, cdr: {car: {car: l304, cdr: l3}, cdr: {car: {car: l153, cdr: {car: {car: l187, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l303, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l184, cdr: {car: {car: l206, cdr: {car: {car: l305, cdr: {car: l302, cdr: {car: l198, cdr: {car: l297, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: {car: l219, cdr: {car: {car: l183, cdr: {car: {car: l152, cdr: {car: {car: l155, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l206, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l206, cdr: {car: {car: l301, cdr: l3}, cdr: {car: {car: l195, cdr: {car: {car: l267, cdr: {car: l301, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: l198, cdr: l3}}, cdr: {car: l301, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l302, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l117.function(l294);
    l117.function(l293);
    l117.function(l292);
    l117.function(l291);
    l117.function(l290);
    l117.function(l289);
    l117.function(l288);
    l117.function(l287);
    l117.function(l286);
    l117.function(l285);
    l117.function(l284);
    l117.function(l283);
    l117.function(l282);
    l117.function(l281);
    l117.function(l280);
    l117.function(l279);
    l117.function(l278);
    l117.function(l277);
    l117.function(l276);
    l117.function(l275);
    l117.function(l274);
    l117.function(l273);
    l117.function(l272);
    l117.function(l271);
    l117.function(l270);
    l117.function(l269);
    l117.function(l268);
    l117.function(l267);
    l117.function(l266);
    l117.function(l265);
    l117.function(l264);
    l117.function(l263);
    l117.function(l262);
    l117.function(l261);
    l117.function(l260);
    l117.function(l259);
    l117.function(l258);
    l117.function(l257);
    l117.function(l256);
    l117.function(l255);
    l117.function(l254);
    l117.function(l253);
    l117.function(l252);
    l117.function(l251);
    l117.function(l250);
    l117.function(l249);
    l117.function(l248);
    l117.function(l247);
    l117.function(l246);
    l117.function(l245);
    l117.function(l244);
    l117.function(l243);
    l117.function(l242);
    l117.function(l241);
    l117.function(l240);
    l117.function(l239);
    l117.function(l238);
    l117.function(l237);
    l117.function(l236);
    l117.function(l235);
    l117.function(l234);
    l117.function(l233);
    l117.function(l232);
    l117.function(l231);
    l117.function(l230);
    l117.function(l229);
    l117.function(l228);
    l117.function(l227);
    l117.function(l226);
    l117.function(l225);
    l117.function(l224);
    l117.function(l223);
    l117.function(l222);
    l117.function(l221);
    l117.function(l220);
    l117.function(l219);
    l117.function(l218);
    l117.function(l217);
    l117.function(l216);
    l117.function(l215);
    l117.function(l214);
    l117.function(l213);
    l117.function(l212);
    l117.function(l211);
    l117.function(l210);
    l117.function(l209);
    l117.function(l208);
    l117.function(l207);
    l117.function(l206);
    l117.function(l205);
    l117.function(l204);
    l117.function(l203);
    l117.function(l202);
    l117.function(l201);
    l117.function(l200);
    l117.function(l198);
    l117.function(l197);
    l117.function(l196);
    l117.function(l195);
    l117.function(l194);
    l117.function(l193);
    l117.function(l192);
    l117.function(l191);
    l117.function(l190);
    l117.function(l189);
    l117.function(l188);
    l117.function(l187);
    l117.function(l186);
    l117.function(l185);
    l117.function(l184);
    l117.function(l183);
    l117.function(l182);
    l117.function(l181);
    l117.function(l180);
    l117.function(l179);
    l117.function(l178);
    l117.function(l177);
    l117.function(l176);
    l117.function(l175);
    l117.function(l174);
    l117.function(l173);
    l117.function(l172);
    l117.function(l171);
    l117.function(l170);
    l117.function(l169);
    l117.function(l168);
    l117.function(l167);
    l117.function(l166);
    l117.function(l165);
    l117.function(l164);
    l117.function(l163);
    l117.function(l162);
    l117.function(l161);
    l117.function(l160);
    l117.function(l159);
    l117.function(l158);
    l117.function(l157);
    l117.function(l156);
    l117.function(l155);
    l117.function(l154);
    l117.function(l153);
    l117.function(l152);
    l117.function(l151);
    l117.function(l150);
    l117.function(l149);
    l117.function(l148);
    l117.function(l147);
    l117.function(l146);
    l117.function(l145);
    l117.function(l144);
    l117.function(l143);
    l117.function(l142);
    l117.function(l141);
    l117.function(l140);
    l117.function(l139);
    l117.function(l138);
    l117.function(l137);
    l117.function(l136);
    l117.function(l135);
    l117.function(l134);
    l117.function(l133);
    l117.function(l132);
    l117.function(l131);
    l117.function(l130);
    l117.function(l129);
    l117.function(l128);
    l117.function(l127);
    l117.function(l126);
    l117.function(l125);
    l117.function(l124);
    l117.function(l123);
    l117.function(l122);
    l117.function(l121);
    l117.function(l120);
    l117.function(l119);
    l117.function(l118);
    l117.function(l117);
    l117.function(l116);
    l117.function(l115);
    l117.function(l114);
    l117.function(l113);
    l117.function(l112);
    l117.function(l111);
    l117.function(l110);
    l117.function(l109);
    l117.function(l108);
    l117.function(l107);
    l117.function(l106);
    l117.function(l105);
    l117.function(l104);
    l117.function(l103);
    l117.function(l102);
    l117.function(l101);
    l117.function(l100);
    l117.function(l99);
    l117.function(l98);
    l117.function(l97);
    l117.function(l96);
    l117.function(l95);
    l117.function(l94);
    l117.function(l93);
    l117.function(l92);
    l117.function(l91);
    l117.function(l90);
    l117.function(l89);
    l117.function(l88);
    l117.function(l87);
    l117.function(l86);
    l117.function(l85);
    l117.function(l84);
    l117.function(l83);
    l117.function(l82);
    l117.function(l81);
    l117.function(l80);
    l117.function(l79);
    l117.function(l78);
    l117.function(l77);
    l117.function(l76);
    l117.function(l75);
    l117.function(l74);
    l117.function(l73);
    l117.function(l72);
    l117.function(l71);
    l117.function(l70);
    l117.function(l69);
    l117.function(l68);
    l117.function(l67);
    l117.function(l66);
    l117.function(l65);
    l117.function(l64);
    l117.function(l63);
    l117.function(l62);
    l117.function(l61);
    l117.function(l60);
    l117.function(l59);
    l117.function(l58);
    l117.function(l57);
    l117.function(l56);
    l117.function(l55);
    l117.function(l54);
    l117.function(l53);
    l117.function(l52);
    l117.function(l51);
    l117.function(l50);
    l117.function(l49);
    l117.function(l48);
    l117.function(l47);
    l117.function(l46);
    l117.function(l45);
    l117.function(l44);
    l117.function(l43);
    l117.function(l42);
    l117.function(l41);
    l117.function(l40);
    l117.function(l39);
    l117.function(l38);
    l117.function(l37);
    l117.function(l36);
    l117.function(l35);
    l117.function(l34);
    l117.function(l33);
    l117.function(l32);
    l117.function(l31);
    l117.function(l30);
    l117.function(l29);
    l117.function(l28);
    l117.function(l27);
    l117.function(l26);
    l117.function(l25);
    l117.function(l24);
    l117.function(l23);
    l117.function(l22);
    l117.function(l21);
    l117.function(l20);
    l117.function(l19);
    l117.function(l18);
    l117.function(l17);
    l117.function(l16);
    l117.function(l15);
    l117.function(l14);
    l117.function(l13);
    l117.function(l12);
    l117.function(l11);
    l117.function(l10);
    l117.function(l9);
    l117.function(l8);
    l117.function(l7);
    l117.function(l6);
    l117.function(l5);
    l117.function(l4);
    l117.function(l3);
    l117.function(l2);
    l117.function(l1);
    ((l213).value = l296);
    ((l173).value = l328);
    ((l174).value = 787);
    ((l14).value = 205);
    return ((l229).value = 272);
})();
((l214).value = 328);
