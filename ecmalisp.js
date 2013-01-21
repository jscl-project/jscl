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
var l122 = {name: "GET-UNIVERSAL-TIME"};
(function(){
    (l122).function = (function(v246){
        ((v246)["fname"] = "GET-UNIVERSAL-TIME");
        return v246;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x1 = (Math.round(new Date() / 1000));
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 2208988800;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })();
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
    return l122;
})();
var l123 = {name: "*NEWLINE*"};
(function(){
    (((l123.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l123).value = l92.function(l72.function(10)));
    })());
    return l123;
})();
var l124 = {name: "CONCAT"};
(function(){
    (l124).function = (function(v248){
        ((v248)["fname"] = "CONCAT");
        return v248;
    })((function (){
        var v247= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v247 = {car: arguments[i], cdr: 
        v247};
        return (function(){
            try {
                return (function(){
                    return l58.function((function(){
                        var symbol = l68;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v247, "");
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
    return l124;
})();
var l125 = {name: "CONCATF"};
l125;
var l126 = {name: "JOIN"};
(function(){
    (l126).function = (function(v251){
        ((v251)["fname"] = "JOIN");
        return v251;
    })((function (v249,v250){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v250="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v249) !== l3.value ? (function(){
                        return "";
                    })() : (l11.function((function(){
                        var tmp = v249;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l124.function((function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v250, l126.function((function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v250));
                    })()));
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
var l127 = {name: "JOIN-TRAILING"};
(function(){
    (l127).function = (function(v254){
        ((v254)["fname"] = "JOIN-TRAILING");
        return v254;
    })((function (v252,v253){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v253="";
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l11.function(v252) !== l3.value ? "" : l124.function((function(){
                        var tmp = v252;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v253, l127.function((function(){
                        var tmp = v252;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })(), v253)));
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
var l128 = {name: "MAPCONCAT"};
(function(){
    (l128).function = (function(v257){
        ((v257)["fname"] = "MAPCONCAT");
        return v257;
    })((function (v255,v256){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l126.function(l69.function(v255, v256));
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
var l129 = {name: "VECTOR-TO-LIST"};
(function(){
    (l129).function = (function(v263){
        ((v263)["fname"] = "VECTOR-TO-LIST");
        return v263;
    })((function (v258){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v259,v260){
                        return (function(){
                            try {
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
                                        return l64.function(v259);
                                    })(0,v260);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 108)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value,l67.function(v258));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 107)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l129;
})();
var l130 = {name: "LIST-TO-VECTOR"};
(function(){
    (l130).function = (function(v269){
        ((v269)["fname"] = "LIST-TO-VECTOR");
        return v269;
    })((function (v264){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v265,v266){
                        return (function(){
                            try {
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
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 110)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })((function(){
                        var r = [];
                        for (var i = 0; i < l67.function(v264); i++)
                            r.push(l3.value);
                        return r;
                    })(),0);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 109)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l130;
})();
var l131 = {name: "INDENT"};
(function(){
    (l131).function = (function(v276){
        ((v276)["fname"] = "INDENT");
        return v276;
    })((function (){
        var v270= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v270 = {car: arguments[i], cdr: 
        v270};
        return (function(){
            try {
                return (function(){
                    return (function(v271){
                        return (function(v272,v273,v274){
                            (l76.function(l67.function(v271)) !== l3.value ? (function(){
                                return (v272 = l124.function(v272, (function(){
                                    return "    ";
                                })()));
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v273;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v274;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(v275){
                                                    return (v272 = l124.function(v272, (function(){
                                                        return v275;
                                                    })()));
                                                })(((l74.function((function(){
                                                    var string = v271;
                                                    var index = v273;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? ((function(){
                                                    var x1 = v273;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = l22.function(v274);
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l3.value);
                                                })() !== l3.value ? l26.function(l74.function((function(){
                                                    var string = v271;
                                                    var index = l21.function(v273);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l124.function(l92.function(10), "    ") : l92.function((function(){
                                                    var string = v271;
                                                    var index = v273;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                (v273 = (function(){
                                                    var x1 = v273;
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
                                    if (cf.type == 'block' && cf.id == 112)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v272;
                        })("",0,l67.function(v271));
                    })(l126.function(v270));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 111)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l131;
})();
(function(){
    (l16).function = (function(v280){
        ((v280)["fname"] = "INTEGER-TO-STRING");
        return v280;
    })((function (v277){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l23.function(v277) !== l3.value ? (function(){
                        return "0";
                    })() : (l77.function(v277) !== l3.value ? (function(){
                        return l124.function("-", l16.function((function(){
                            var x1 = 0;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v277;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1-x2;
                        })()));
                    })() : (function(){
                        return (function(v278){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l26.function(l23.function(v277)) !== l3.value){
                                                (v278 = ({car: (function(){
                                                    var x = v277;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v278}));
                                                (v277 = l24.function(v277, 10));
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 114)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l126.function(l69.function((function (v279){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l92.function((function(){
                                    var string = "0123456789";
                                    var index = v279;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v278));
                        })(l3.value);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 113)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l16;
})();
var l132 = {name: "JS!BOOL"};
var l133 = {name: "LS-COMPILE"};
(function(){
    (l132).function = (function(v282){
        ((v282)["fname"] = "JS!BOOL");
        return v282;
    })((function (v281){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.function("(", v281, "?", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
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
    return l132;
})();
var l134 = {name: "JS!SELFCALL"};
l134;
var l135 = {name: "PRIN1-TO-STRING"};
var l136 = {name: "ESCAPE-STRING"};
(function(){
    (l135).function = (function(v288){
        ((v288)["fname"] = "PRIN1-TO-STRING");
        return v288;
    })((function (v283){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v283;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return ((function(){
                            var tmp = l118.function((v283).name, (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v283).name : (function(v284,v285){
                            return l124.function((((v284 === l105.function("KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l106.function(v284)), ":", v285);
                        })(l114.function(v283),(v283).name));
                    })() : (l75.function(v283) !== l3.value ? (function(){
                        return l16.function(v283);
                    })() : (((typeof(v283) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.function("\"", (function(){
                            var symbol = l136;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v283), "\"");
                    })() : (((typeof v283 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v286){
                            return (v286 !== l3.value ? l124.function("#<FUNCTION ", v286, ">") : l124.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v283)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l57.function(v283) !== l3.value ? (function(){
                        return l124.function("(", l127.function(l69.function((function(){
                            var symbol = l135;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l81.function(v283)), " "), (function(v287){
                            return (l11.function((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l135.function((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l124.function(l135.function((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l135.function((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l80.function(v283)), ")");
                    })() : (((function(){
                        var x = v283;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.function("#", l135.function(l129.function(v283)));
                    })() : (l104.function(v283) !== l3.value ? (function(){
                        return l124.function("#<PACKAGE ", l106.function(v283), ">");
                    })() : l3.value)))))));
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
    return l135;
})();
(function(){
    (l96).function = (function(v290){
        ((v290)["fname"] = "WRITE-LINE");
        return v290;
    })((function (v289){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v289;
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
                    return v289;
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
    return l96;
})();
var l137 = {name: "WARN"};
(function(){
    (l137).function = (function(v292){
        ((v292)["fname"] = "WARN");
        return v292;
    })((function (v291){
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
                    return l96.function(v291);
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
var l138 = {name: "PRINT"};
(function(){
    (l138).function = (function(v294){
        ((v294)["fname"] = "PRINT");
        return v294;
    })((function (v293){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l96.function(l135.function(v293));
                    return v293;
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
var l139 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l139).function = (function(v296){
        ((v296)["fname"] = "MAKE-STRING-STREAM");
        return v296;
    })((function (v295){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v295, cdr: 0});
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
var l140 = {name: "%PEEK-CHAR"};
(function(){
    (l140).function = (function(v298){
        ((v298)["fname"] = "%PEEK-CHAR");
        return v298;
    })((function (v297){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v297;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l67.function((function(){
                            var tmp = v297;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v297;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v297;
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
                if (cf.type == 'block' && cf.id == 121)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l140;
})();
var l141 = {name: "%READ-CHAR"};
(function(){
    (l141).function = (function(v301){
        ((v301)["fname"] = "%READ-CHAR");
        return v301;
    })((function (v299){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v299;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l67.function((function(){
                            var tmp = v299;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(v300){
                        (function(){
                            var x = v299;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l21.function((function(){
                                var tmp = v299;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v300;
                    })((function(){
                        var string = (function(){
                            var tmp = v299;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v299;
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
                if (cf.type == 'block' && cf.id == 122)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l141;
})();
var l142 = {name: "WHITESPACEP"};
(function(){
    (l142).function = (function(v305){
        ((v305)["fname"] = "WHITESPACEP");
        return v305;
    })((function (v302){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v303){
                        return (v303 !== l3.value ? v303 : (function(v304){
                            return (v304 !== l3.value ? v304 : l74.function(v302, 9));
                        })(l74.function(v302, 10)));
                    })(l74.function(v302, 32));
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
var l143 = {name: "SKIP-WHITESPACES"};
(function(){
    (l143).function = (function(v308){
        ((v308)["fname"] = "SKIP-WHITESPACES");
        return v308;
    })((function (v306){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v307){
                        (v307 = l140.function(v306));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v307 !== l3.value ? l142.function(v307) : l3.value) !== l3.value){
                                            l141.function(v306);
                                            (v307 = l140.function(v306));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 125)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 124)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l143;
})();
var l144 = {name: "TERMINALP"};
(function(){
    (l144).function = (function(v313){
        ((v313)["fname"] = "TERMINALP");
        return v313;
    })((function (v309){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v310){
                        return (v310 !== l3.value ? v310 : (function(v311){
                            return (v311 !== l3.value ? v311 : (function(v312){
                                return (v312 !== l3.value ? v312 : l74.function(40, v309));
                            })(l74.function(41, v309)));
                        })(l142.function(v309)));
                    })(l11.function(v309));
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
var l145 = {name: "READ-UNTIL"};
(function(){
    (l145).function = (function(v318){
        ((v318)["fname"] = "READ-UNTIL");
        return v318;
    })((function (v314,v315){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v316,v317){
                        (v317 = l140.function(v314));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v317 !== l3.value ? l26.function((v315)(v317)) : l3.value) !== l3.value){
                                            (v316 = l124.function(v316, l92.function(v317)));
                                            l141.function(v314);
                                            (v317 = l140.function(v314));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 128)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v316;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 127)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l145;
})();
var l146 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l146).function = (function(v322){
        ((v322)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v322;
    })((function (v319){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v320){
                        l143.function(v319);
                        (v320 = l140.function(v319));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v320 !== l3.value ? l74.function(v320, 59) : l3.value) !== l3.value){
                                            l145.function(v319, (function (v321){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l74.function(v321, 10);
                                            
                                            }));
                                            l143.function(v319);
                                            (v320 = l140.function(v319));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 130)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 129)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l146;
})();
var l147 = {name: "%READ-LIST"};
var l148 = {name: "LS-READ"};
(function(){
    (l147).function = (function(v326){
        ((v326)["fname"] = "%READ-LIST");
        return v326;
    })((function (v323){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l146.function(v323);
                    return (function(v324){
                        return (l11.function(v324) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l74.function(v324, 41) !== l3.value ? (function(){
                            l141.function(v323);
                            return l3.value;
                        })() : (l74.function(v324, 46) !== l3.value ? (function(){
                            l141.function(v323);
                            return (function(v325){
                                l146.function(v323);
                                (l74.function(l141.function(v323), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v325;
                            })((function(){
                                var symbol = l148;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v323));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l148;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v323), cdr: l147.function(v323)});
                        })())));
                    })(l140.function(v323));
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
    return l147;
})();
var l149 = {name: "READ-STRING"};
(function(){
    (l149).function = (function(v330){
        ((v330)["fname"] = "READ-STRING");
        return v330;
    })((function (v327){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v328,v329){
                        (v329 = l141.function(v327));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.function(l25.function(v329, 34)) !== l3.value){
                                            (l11.function(v329) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l25.function(v329, 92) !== l3.value ? (function(){
                                                return (v329 = l141.function(v327));
                                            })() : l3.value);
                                            (v328 = l124.function(v328, l92.function(v329)));
                                            (v329 = l141.function(v327));
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 133)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v328;
                    })("",l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 132)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l149;
})();
var l150 = {name: "READ-SHARP"};
(function(){
    (l150).function = (function(v335){
        ((v335)["fname"] = "READ-SHARP");
        return v335;
    })((function (v331){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l141.function(v331);
                    return (function(v332){
                        return (l25.function(v332, 39) !== l3.value ? (function(){
                            return l42.function(l98, (function(){
                                var symbol = l148;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v331));
                        })() : (l25.function(v332, 40) !== l3.value ? (function(){
                            return l130.function(l147.function(v331));
                        })() : (l25.function(v332, 92) !== l3.value ? (function(){
                            return (function(v333){
                                return (l93.function(v333, "space") !== l3.value ? (function(){
                                    return l73.function(32);
                                })() : (l93.function(v333, "tab") !== l3.value ? (function(){
                                    return l73.function(9);
                                })() : (l93.function(v333, "newline") !== l3.value ? (function(){
                                    return l73.function(10);
                                })() : (function(){
                                    return l73.function((function(){
                                        var string = v333;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l124.function(l92.function(l141.function(v331)), l145.function(v331, (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l25.function(v332, 43) !== l3.value ? (function(){
                            return (function(v334){
                                return (l93.function(v334, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l148;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v331);
                                    return (function(){
                                        var symbol = l148;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v331);
                                })() : (l93.function(v334, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l148;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v331);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l145.function(v331, (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(l141.function(v331));
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
var l151 = {name: "READ-SYMBOL"};
(function(){
    (l151).function = (function(v343){
        ((v343)["fname"] = "READ-SYMBOL");
        return v343;
    })((function (v336){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v337,v338,v339,v340,v341){
                        (v341 = 0);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x1 = v341;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v337;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value ? l26.function(l74.function((function(){
                                            var string = v336;
                                            var index = v341;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            (v341 = (function(){
                                                var x1 = v341;
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
                                if (cf.type == 'block' && cf.id == 136)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        ((function(){
                            var x1 = v341;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v337;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1==x2?l4.value: l3.value);
                        })() !== l3.value ? (function(){
                            (v339 = v336);
                            (v338 = (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return (v340 = l4.value);
                        })() : (function(){
                            (l23.function(v341) !== l3.value ? (v338 = "KEYWORD") : (v338 = (function(){
                                var x = l87.function(v336, 0, v341);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })()));
                            (v341 = (function(){
                                var x1 = v341;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })());
                            (l74.function((function(){
                                var string = v336;
                                var index = v341;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                (v340 = l4.value);
                                return (v341 = (function(){
                                    var x1 = v341;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })());
                            })() : l3.value);
                            return (v339 = l87.function(v336, v341));
                        })());
                        (v339 = (function(){
                            var x = v339;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })());
                        (v338 = l105.function(v338));
                        return ((function(v342){
                            return (v342 !== l3.value ? v342 : ((v338 === l105.function("KEYWORD"))?l4.value: l3.value));
                        })(v340) !== l3.value ? l120.function(v339, v338) : l119.function(v339, v338));
                    })(l67.function(v336),l3.value,l3.value,l3.value,l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 135)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l151;
})();
var l152 = {name: "*EOF*"};
(function(){
    (((l152.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l152).value = l15.function());
    })());
    return l152;
})();
var l153 = {name: "QUOTE"};
var l154 = {name: "BACKQUOTE"};
var l155 = {name: "UNQUOTE-SPLICING"};
var l156 = {name: "UNQUOTE"};
(function(){
    (l148).function = (function(v348){
        ((v348)["fname"] = "LS-READ");
        return v348;
    })((function (v344){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l146.function(v344);
                    return (function(v345){
                        return ((function(v346){
                            return (v346 !== l3.value ? v346 : l74.function(v345, 41));
                        })(l11.function(v345)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l152;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l74.function(v345, 40) !== l3.value ? (function(){
                            l141.function(v344);
                            return l147.function(v344);
                        })() : (l74.function(v345, 39) !== l3.value ? (function(){
                            l141.function(v344);
                            return l42.function(l153, l148.function(v344));
                        })() : (l74.function(v345, 96) !== l3.value ? (function(){
                            l141.function(v344);
                            return l42.function(l154, l148.function(v344));
                        })() : (l74.function(v345, 34) !== l3.value ? (function(){
                            l141.function(v344);
                            return l149.function(v344);
                        })() : (l74.function(v345, 44) !== l3.value ? (function(){
                            l141.function(v344);
                            return (l25.function(l140.function(v344), 64) !== l3.value ? (function(){
                                l141.function(v344);
                                return l42.function(l155, l148.function(v344));
                            })() : l42.function(l156, l148.function(v344)));
                        })() : (l74.function(v345, 35) !== l3.value ? (function(){
                            return l150.function(v344);
                        })() : (function(){
                            return (function(v347){
                                return (l90.function((function(){
                                    var symbol = l86;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v347) !== l3.value ? l88.function(v347) : l151.function(v347));
                            })(l145.function(v344, (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l140.function(v344));
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
    return l148;
})();
var l157 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l157).function = (function(v350){
        ((v350)["fname"] = "LS-READ-FROM-STRING");
        return v350;
    })((function (v349){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l148.function(l139.function(v349));
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
    return l157;
})();
var l158 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l158.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l158).value = l3);
    })());
    return l158;
})();
var l159 = {name: "MAKE-BINDING"};
(function(){
    (l159).function = (function(v355){
        ((v355)["fname"] = "MAKE-BINDING");
        return v355;
    })((function (v351,v352,v353,v354){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v354=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l42.function(v351, v352, v353, v354);
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
var l160 = {name: "BINDING-NAME"};
(function(){
    (l160).function = (function(v357){
        ((v357)["fname"] = "BINDING-NAME");
        return v357;
    })((function (v356){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l38.function(v356);
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
var l161 = {name: "BINDING-TYPE"};
(function(){
    (l161).function = (function(v359){
        ((v359)["fname"] = "BINDING-TYPE");
        return v359;
    })((function (v358){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l39.function(v358);
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
var l162 = {name: "BINDING-VALUE"};
(function(){
    (l162).function = (function(v361){
        ((v361)["fname"] = "BINDING-VALUE");
        return v361;
    })((function (v360){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.function(v360);
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
var l163 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l163).function = (function(v363){
        ((v363)["fname"] = "BINDING-DECLARATIONS");
        return v363;
    })((function (v362){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v362);
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
var l164 = {name: "SET-BINDING-VALUE"};
(function(){
    (l164).function = (function(v366){
        ((v366)["fname"] = "SET-BINDING-VALUE");
        return v366;
    })((function (v364,v365){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l34.function(v364);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v365);
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
var l165 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l165).function = (function(v369){
        ((v369)["fname"] = "SET-BINDING-DECLARATIONS");
        return v369;
    })((function (v367,v368){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.function(v367);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v368);
                    })();
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
var l166 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l166).function = (function(v372){
        ((v372)["fname"] = "PUSH-BINDING-DECLARATION");
        return v372;
    })((function (v370,v371){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l165.function(v371, ({car: v370, cdr: l163.function(v371)}));
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
var l167 = {name: "MAKE-LEXENV"};
(function(){
    (l167).function = (function(v373){
        ((v373)["fname"] = "MAKE-LEXENV");
        return v373;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.function(l3.value, l3.value, l3.value, l3.value);
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
var l168 = {name: "COPY-LEXENV"};
(function(){
    (l168).function = (function(v375){
        ((v375)["fname"] = "COPY-LEXENV");
        return v375;
    })((function (v374){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l71.function(v374);
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
var l169 = {name: "PUSH-TO-LEXENV"};
var l170 = {name: "BLOCK"};
var l171 = {name: "GOTAG"};
(function(){
    (l169).function = (function(v380){
        ((v380)["fname"] = "PUSH-TO-LEXENV");
        return v380;
    })((function (v376,v377,v378){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v379){
                        return (l25.function(v379, l99) !== l3.value ? (function(){
                            return (function(){
                                var x = v377;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: (function(){
                                    var tmp = v377;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l25.function(v379, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v377;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: l32.function(v377)}));
                            })();
                        })() : (l25.function(v379, l170) !== l3.value ? (function(){
                            return (function(){
                                var x = l34.function(v377);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: l35.function(v377)}));
                            })();
                        })() : (l25.function(v379, l171) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.function(v377);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: l37.function(v377)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v378);
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
    return l169;
})();
var l172 = {name: "EXTEND-LEXENV"};
(function(){
    (l172).function = (function(v387){
        ((v387)["fname"] = "EXTEND-LEXENV");
        return v387;
    })((function (v381,v382,v383){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v384){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v385,v386){
                                        (function(){
                                            while(v385 !== l3.value){
                                                (v386 = (function(){
                                                    var tmp = v385;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    l169.function(v386, v384, v383);
                                                    return l3.value;
                                                })();
                                                (v385 = (function(){
                                                    var tmp = v385;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v384;
                                    })(l64.function(v381),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 151)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l168.function(v382));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 150)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l172;
})();
var l173 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l173).function = (function(v392){
        ((v392)["fname"] = "LOOKUP-IN-LEXENV");
        return v392;
    })((function (v388,v389,v390){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l91.function(v388, (function(v391){
                        return (l25.function(v391, l99) !== l3.value ? (function(){
                            return l38.function(v389);
                        })() : (l25.function(v391, l98) !== l3.value ? (function(){
                            return l39.function(v389);
                        })() : (l25.function(v391, l170) !== l3.value ? (function(){
                            return l40.function(v389);
                        })() : (l25.function(v391, l171) !== l3.value ? (function(){
                            return l41.function(v389);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v390));
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
    return l173;
})();
var l174 = {name: "*ENVIRONMENT*"};
(function(){
    (((l174.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l174).value = l167.function());
    })());
    return l174;
})();
var l175 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l175.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l175).value = 0);
    })());
    return l175;
})();
var l176 = {name: "GVARNAME"};
(function(){
    (l176).function = (function(v394){
        ((v394)["fname"] = "GVARNAME");
        return v394;
    })((function (v393){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.function("v", l16.function(((l175).value = (function(){
                        var x1 = (function(){
                            var symbol = l175;
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
                if (cf.type == 'block' && cf.id == 153)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l176;
})();
var l177 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l177).function = (function(v396){
        ((v396)["fname"] = "TRANSLATE-VARIABLE");
        return v396;
    })((function (v395){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l162.function(l173.function(v395, (function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99));
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
var l178 = {name: "EXTEND-LOCAL-ENV"};
var l179 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l178).function = (function(v402){
        ((v402)["fname"] = "EXTEND-LOCAL-ENV");
        return v402;
    })((function (v397){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v398){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v399,v400){
                                        (function(){
                                            while(v399 !== l3.value){
                                                (v400 = (function(){
                                                    var tmp = v399;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v401){
                                                        return l169.function(v401, v398, l99);
                                                    })(l159.function(v400, l179, l176.function(v400)));
                                                    return l3.value;
                                                })();
                                                (v399 = (function(){
                                                    var tmp = v399;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v398;
                                    })(v397,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 156)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l168.function((function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 155)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l178;
})();
var l180 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l180.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l180).value = l3.value);
    })());
    return l180;
})();
var l181 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l181).function = (function(v404){
        ((v404)["fname"] = "TOPLEVEL-COMPILATION");
        return v404;
    })((function (v403){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l180).value = ({car: v403, cdr: (function(){
                        var symbol = l180;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()}));
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
var l182 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l182).function = (function(v406){
        ((v406)["fname"] = "NULL-OR-EMPTY-P");
        return v406;
    })((function (v405){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l23.function(l67.function(v405));
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
var l183 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l183).function = (function(v407){
        ((v407)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v407;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l84.function((function(){
                        var symbol = l182;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l180;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
var l184 = {name: "%COMPILE-DEFMACRO"};
var l185 = {name: "MACRO"};
(function(){
    (l184).function = (function(v410){
        ((v410)["fname"] = "%COMPILE-DEFMACRO");
        return v410;
    })((function (v408,v409){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l181.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l153), l42.function(v408))));
                    return l169.function(l159.function(v408, l185, v409), (function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98);
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
    return l184;
})();
var l186 = {name: "GLOBAL-BINDING"};
(function(){
    (l186).function = (function(v416){
        ((v416)["fname"] = "GLOBAL-BINDING");
        return v416;
    })((function (v411,v412,v413){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v414){
                        return (v414 !== l3.value ? v414 : (function(v415){
                            l169.function(v415, (function(){
                                var symbol = l174;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v413);
                            return v415;
                        })(l159.function(v411, v412, l3.value)));
                    })(l173.function(v411, (function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v413));
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
var l187 = {name: "CLAIMP"};
(function(){
    (l187).function = (function(v421){
        ((v421)["fname"] = "CLAIMP");
        return v421;
    })((function (v417,v418,v419){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v420){
                        return (v420 !== l3.value ? l82.function(v419, l163.function(v420)) : l3.value);
                    })(l173.function(v417, (function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v418));
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
var l188 = {name: "!PROCLAIM"};
var l189 = {name: "SPECIAL"};
var l190 = {name: "NOTINLINE"};
var l191 = {name: "CONSTANT"};
var l192 = {name: "NON-OVERRIDABLE"};
(function(){
    (l188).function = (function(v436){
        ((v436)["fname"] = "!PROCLAIM");
        return v436;
    })((function (v422){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v423){
                        return (l25.function(v423, l189) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v424,v425){
                                            (function(){
                                                while(v424 !== l3.value){
                                                    (v425 = (function(){
                                                        var tmp = v424;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v426){
                                                            return l166.function(l189, v426);
                                                        })(l186.function(v425, l99, l99));
                                                        return l3.value;
                                                    })();
                                                    (v424 = (function(){
                                                        var tmp = v424;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v422;
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
                        })() : (l25.function(v423, l190) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v427,v428){
                                            (function(){
                                                while(v427 !== l3.value){
                                                    (v428 = (function(){
                                                        var tmp = v427;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v429){
                                                            return l166.function(l190, v429);
                                                        })(l186.function(v428, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    (v427 = (function(){
                                                        var tmp = v427;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v422;
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
                        })() : (l25.function(v423, l191) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v430,v431){
                                            (function(){
                                                while(v430 !== l3.value){
                                                    (v431 = (function(){
                                                        var tmp = v430;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v432){
                                                            return l166.function(l191, v432);
                                                        })(l186.function(v431, l99, l99));
                                                        return l3.value;
                                                    })();
                                                    (v430 = (function(){
                                                        var tmp = v430;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v422;
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
                        })() : (l25.function(v423, l192) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v433,v434){
                                            (function(){
                                                while(v433 !== l3.value){
                                                    (v434 = (function(){
                                                        var tmp = v433;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })());
                                                    (function(){
                                                        (function(v435){
                                                            return l166.function(l192, v435);
                                                        })(l186.function(v434, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    (v433 = (function(){
                                                        var tmp = v433;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v422;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 167)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value))));
                    })((function(){
                        var tmp = v422;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 163)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l188;
})();
var l193 = {name: "PROCLAIM"};
(l193).function = (function(){
    var symbol = l188;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l194 = {name: "*COMPILATIONS*"};
(function(){
    (((l194.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l194).value = l3.value);
    })());
    return l194;
})();
var l195 = {name: "DEFINE-COMPILATION"};
l195;
var l196 = {name: "IF"};
((l194).value = ({car: l42.function(l196, (function (v437,v438,v439){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.function("(", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v437), " !== ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v438), " : ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v439), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 168)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l197 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l198 = {name: "&OPTIONAL"};
var l199 = {name: "&REST"};
var l200 = {car: l198, cdr: {car: l199, cdr: l3}};
(function(){
    (((l197.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l197).value = l200);
    })());
    return l197;
})();
var l201 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l201).function = (function(v442){
        ((v442)["fname"] = "LIST-UNTIL-KEYWORD");
        return v442;
    })((function (v440){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v441){
                        return (v441 !== l3.value ? v441 : l82.function((function(){
                            var tmp = v440;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l197;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v440)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v440;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l201.function((function(){
                        var tmp = v440;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
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
var l202 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l202).function = (function(v444){
        ((v444)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v444;
    })((function (v443){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l201.function(v443);
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
var l203 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l203).function = (function(v446){
        ((v446)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v446;
    })((function (v445){
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
                    })(), l201.function((function(){
                        var tmp = l82.function(l198, v445);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
var l204 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l204).function = (function(v448){
        ((v448)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v448;
    })((function (v447){
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
                    })(), l203.function(v447));
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
var l205 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l205).function = (function(v451){
        ((v451)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v451;
    })((function (v449){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v450){
                        ((function(){
                            var tmp = v450;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v450;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l201.function((function(){
                        var tmp = l82.function(l199, v449);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
var l206 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l206).function = (function(v454){
        ((v454)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v454;
    })((function (v453){
        if (arguments.length < 1) throw 'too few arguments';
        var v452= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v452 = {car: arguments[i], cdr: 
        v452};
        return (function(){
            try {
                return (function(){
                    return (v453 !== l3.value ? l124.function("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("var func = ", l126.function(v452), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v453, "';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l126.function(v452));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 174)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l206;
})();
var l207 = {name: "LAMBDA"};
var l208 = {name: "LS-COMPILE-BLOCK"};
((l194).value = ({car: l42.function(l207, (function (v456){
    if (arguments.length < 1) throw 'too few arguments';
    var v455= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v455 = {car: arguments[i], cdr: 
    v455};
    return (function(){
        try {
            return (function(){
                return (function(v457,v458,v459,v460){
                    ((((typeof((function(){
                        var tmp = v455;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l26.function(l11.function((function(){
                        var tmp = v455;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        (v460 = (function(){
                            var tmp = v455;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        return (v455 = (function(){
                            var tmp = v455;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value);
                    return (function(v461,v462,v463){
                        try {
                            var tmp;
                            tmp = l174.value;
                            l174.value = v463;
                            v463 = tmp;
                            return l206.function(v460, "(function (", l126.function(l69.function((function(){
                                var symbol = l177;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v457, v458)), ","), "){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l131.function((v457 !== l3.value ? l124.function("if (arguments.length < ", l16.function(v461), ") throw 'too few arguments';", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l26.function(v459) !== l3.value ? l124.function("if (arguments.length > ", l16.function((function(){
                                var x1 = v461;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v462;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v458 !== l3.value ? l124.function("switch(arguments.length){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v464,v465,v466){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while((function(){
                                                        var x1 = v466;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v462;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return (x1<x2?l4.value: l3.value);
                                                    })() !== l3.value){
                                                        (function(v467){
                                                            (v465 = ({car: l124.function("case ", l16.function((function(){
                                                                var x1 = v466;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = v461;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })()), ":", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l177.function((function(){
                                                                var tmp = v467;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l133;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l32.function(v467)), ";", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v465}));
                                                            return (v466 = (function(){
                                                                var x1 = v466;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = 1;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })());
                                                        })(l79.function(v466, v464));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 176)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    (v465 = ({car: l124.function("default: break;", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v465}));
                                    return l126.function(l64.function(v465));
                                })();
                            })(l203.function(v456),l3.value,0), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v459 !== l3.value ? (function(v468){
                                return l124.function("var ", v468, "= ", (function(){
                                    var symbol = l133;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.function((function(){
                                    var x1 = v461;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v462;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })()), "; i--)", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l131.function(v468, " = ", "{car: arguments[i], cdr: "), v468, "};", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l177.function(v459)) : ""), (function(){
                                var symbol = l208;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v455, l4.value)), (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l174.value = v463;
                        }
                    })(l67.function(v457),l67.function(v458),l178.function(l62.function(l56.function(v459), v457, v458)));
                })(l202.function(v456),l204.function(v456),l205.function(v456),l3.value);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 175)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l209 = {name: "SETQ-PAIR"};
var l210 = {name: "SET"};
(function(){
    (l209).function = (function(v472){
        ((v472)["fname"] = "SETQ-PAIR");
        return v472;
    })((function (v469,v470){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v471){
                        return (((l161.function(v471) === l179)?l4.value: l3.value) !== l3.value ? l124.function(l162.function(v471), " = ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v470)) : (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l210), l42.function(l62.function(l42.function(l153), l42.function(v469))), l42.function(v470))));
                    })(l173.function(v469, (function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l99));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 177)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l209;
})();
var l211 = {name: "SETQ"};
((l194).value = ({car: l42.function(l211, (function (){
    var v473= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v473 = {car: arguments[i], cdr: 
    v473};
    return (function(){
        try {
            return (function(){
                return (function(v474){
                    (function(){
                        try {
                            return (function(){
                                return (function(){
                                    while(l4.value !== l3.value){
                                        (l11.function(v473) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 179, value: l3.value, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : (l11.function((function(){
                                            var tmp = v473;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw "Odd paris in SETQ";
                                            })();
                                        })() : (function(){
                                            (v474 = l124.function(v474, (function(){
                                                return l124.function(l209.function((function(){
                                                    var tmp = v473;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })(), l32.function(v473)), (l11.function(l34.function(v473)) !== l3.value ? "" : ", "));
                                            })()));
                                            return (v473 = l34.function(v473));
                                        })()));
                                    }return l3.value;
                                })();
                            })();
                        }
                        catch (cf){
                            if (cf.type == 'block' && cf.id == 179)
                                return cf.value;
                            else
                                throw cf;
                        }
                    })();
                    return l124.function("(", v474, ")");
                })("");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 178)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l212 = {name: "JS-VREF"};
((l194).value = ({car: l42.function(l212, (function (v475){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v475;
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l213 = {name: "JS-VSET"};
((l194).value = ({car: l42.function(l213, (function (v476,v477){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.function("(", v476, " = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v477), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 181)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
(function(){
    (l136).function = (function(v484){
        ((v484)["fname"] = "ESCAPE-STRING");
        return v484;
    })((function (v478){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v479,v480,v481){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v480;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v481;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v482){
                                                ((function(v483){
                                                    return (v483 !== l3.value ? v483 : l74.function(v482, 92));
                                                })(l74.function(v482, 34)) !== l3.value ? (function(){
                                                    return (v479 = l124.function(v479, "\\"));
                                                })() : l3.value);
                                                (l74.function(v482, 10) !== l3.value ? (function(){
                                                    (v479 = l124.function(v479, "\\"));
                                                    return (v482 = 110);
                                                })() : l3.value);
                                                return (v479 = l124.function(v479, l92.function(v482)));
                                            })((function(){
                                                var string = v478;
                                                var index = v480;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            (v480 = (function(){
                                                var x1 = v480;
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
                                if (cf.type == 'block' && cf.id == 183)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v479;
                    })("",0,l67.function(v478));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 182)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l136;
})();
var l214 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l214.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l214).value = l3.value);
    })());
    return l214;
})();
var l215 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l215.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l215).value = 0);
    })());
    return l215;
})();
var l216 = {name: "GENLIT"};
(function(){
    (l216).function = (function(v485){
        ((v485)["fname"] = "GENLIT");
        return v485;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.function("l", l16.function(((l215).value = (function(){
                        var x1 = (function(){
                            var symbol = l215;
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
                if (cf.type == 'block' && cf.id == 184)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l216;
})();
var l217 = {name: "LITERAL"};
(function(){
    (l217).function = (function(v496){
        ((v496)["fname"] = "LITERAL");
        return v496;
    })((function (v486,v487){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v487=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l75.function(v486) !== l3.value ? (function(){
                        return l16.function(v486);
                    })() : (((typeof(v486) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.function("\"", l136.function(v486), "\"");
                    })() : (((function(){
                        var tmp = v486;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v488){
                            return (v488 !== l3.value ? v488 : (function(v489,v490){
                                ((l214).value = ({car: ({car: v486, cdr: v489}), cdr: (function(){
                                    var symbol = l214;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()}));
                                l181.function(l124.function("var ", v489, " = ", v490));
                                return v489;
                            })(l216.function(),(function(){
                                var symbol = l133;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l120), l42.function((v486).name), l42.function(l106.function(l114.function(v486)))))));
                        })((function(){
                            var tmp = l91.function(v486, (function(){
                                var symbol = l214;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v486;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v491){
                            return (v487 !== l3.value ? v491 : (function(v492){
                                l181.function(l124.function("var ", v492, " = ", v491));
                                return v492;
                            })(l216.function()));
                        })(l124.function("{car: ", l217.function((function(){
                            var tmp = v486;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l217.function((function(){
                            var tmp = v486;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : (((function(){
                        var x = v486;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v493){
                            return (function(v494){
                                return (v487 !== l3.value ? v494 : (function(v495){
                                    l181.function(l124.function("var ", v495, " = ", v494));
                                    return v495;
                                })(l216.function()));
                            })(l124.function("[", l126.function(l69.function((function(){
                                var symbol = l217;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), v493), ", "), "]"));
                        })(l129.function(v486));
                    })() : l3.value)))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 185)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l217;
})();
((l194).value = ({car: l42.function(l153, (function (v497){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l217.function(v497);
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l218 = {name: "%WHILE"};
((l194).value = ({car: l42.function(l218, (function (v499){
    if (arguments.length < 1) throw 'too few arguments';
    var v498= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v498 = {car: arguments[i], cdr: 
    v498};
    return (function(){
        try {
            return (function(){
                return l124.function("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("while(", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v499), " !== ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function((function(){
                    var symbol = l208;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v498)), "}", "return ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l219 = {name: "SYMBOL-FUNCTION"};
((l194).value = ({car: l42.function(l98, (function (v500){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l57.function(v500) !== l3.value ? (((function(){
                    var tmp = v500;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l207)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v500);
                })() : (((function(){
                    var tmp = v500;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l219), l42.function(l62.function(l42.function(l153), l42.function(v500)))));
                })() : l3.value));
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l220 = {name: "EVAL-WHEN-COMPILE"};
var l221 = {name: "EVAL"};
var l222 = {name: "PROGN"};
((l194).value = ({car: l42.function(l220, (function (){
    var v501= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v501 = {car: arguments[i], cdr: 
    v501};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l221;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l222, cdr: v501}));
                return l3.value;
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l223 = {name: "DEFINE-TRANSFORMATION"};
l223;
((l194).value = ({car: l42.function(l222, (function (){
    var v502= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v502 = {car: arguments[i], cdr: 
    v502};
    return (function(){
        try {
            return (function(){
                return l124.function("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function((function(){
                    var symbol = l208;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v502, l4.value)), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 190)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l224 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l224).function = (function(v504){
        ((v504)["fname"] = "SPECIAL-VARIABLE-P");
        return v504;
    })((function (v503){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l187.function(v503, l99, l189);
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
var l225 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l225).function = (function(v511){
        ((v511)["fname"] = "LET-BINDING-WRAPPER");
        return v511;
    })((function (v505,v506){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v505) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 192, value: v506, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l124.function("try {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("var tmp;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l128.function((function (v507){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v508){
                            return l124.function("tmp = ", v508, ".value;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v508, ".value = ", (function(){
                                var tmp = v507;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v507;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l153), l42.function((function(){
                            var tmp = v507;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v505), v506, (function(){
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
                    })(), l131.function(l128.function((function (v509){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v510){
                            return l124.function(v510, ".value", " = ", (function(){
                                var tmp = v509;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l153), l42.function((function(){
                            var tmp = v509;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v505)), "}", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 192)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l225;
})();
var l226 = {name: "LET"};
var l227 = {name: "DYNAMIC-BINDINGS"};
((l194).value = ({car: l42.function(l226, (function (v513){
    if (arguments.length < 1) throw 'too few arguments';
    var v512= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v512 = {car: arguments[i], cdr: 
    v512};
    return (function(){
        try {
            return (function(){
                return (function(){
                    try {
                        var v521 = l174.value;
                        var v514 = l69.function((function(){
                            var symbol = l56;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v513);
                        var v515 = l69.function((function(){
                            var symbol = l38;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v514);
                        var v516 = l69.function((function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.function((function(){
                            var symbol = l39;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v514));
                        ((l174).value = l178.function(l84.function((function(){
                            var symbol = l224;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v515)));
                        var v517 = l3.value;
                        return l124.function("(function(", l126.function(l69.function((function (v518){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (l224.function(v518) !== l3.value ? (function(v519){
                                ((l227).value = ({car: ({car: v518, cdr: v519}), cdr: v517}));
                                return v519;
                            })(l176.function(v518)) : l177.function(v518));
                        
                        }), v515), ","), "){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v520){
                            return l131.function(l225.function(v517, v520));
                        })((function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v512, l4.value)), "})(", l126.function(v516, ","), ")");
                    }
                    finally {
                        l174.value = v521;
                    }
                })();
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 193)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l228 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l228).function = (function(v528){
        ((v528)["fname"] = "LET*-INITIALIZE-VALUE");
        return v528;
    })((function (v522){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v523,v524){
                        return (l224.function(v523) !== l3.value ? l124.function((function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l211), l42.function(v523), l42.function(v524))), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(){
                            var v525 = l176.function(v523);
                            var v526 = l159.function(v523, l99, v525);
                            return (function(v527){
                                l169.function(v526, (function(){
                                    var symbol = l174;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l99);
                                return v527;
                            })(l124.function("var ", v525, " = ", (function(){
                                var symbol = l133;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v524), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()));
                        })());
                    })(l38.function(v522),l39.function(v522));
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
    return l228;
})();
var l229 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l229).function = (function(v537){
        ((v537)["fname"] = "LET*-BINDING-WRAPPER");
        return v537;
    })((function (v529,v530){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v529) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 195, value: v530, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v532){
                        return l124.function("try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l128.function((function (v533){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v534){
                                return l124.function("var ", (function(){
                                    var tmp = v533;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v534, ".value;", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l133;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l153), l42.function((function(){
                                var tmp = v533;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v532), v530), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l128.function((function (v535){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v536){
                                return l124.function(v536, ".value", " = ", (function(){
                                    var tmp = v535;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l133;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l153), l42.function((function(){
                                var tmp = v535;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v532)), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l69.function((function (v531){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return ({car: v531, cdr: l176.function(v531)});
                    
                    }), l85.function((function(){
                        var symbol = l224;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v529)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 195)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l229;
})();
var l230 = {name: "LET*"};
((l194).value = ({car: l42.function(l230, (function (v539){
    if (arguments.length < 1) throw 'too few arguments';
    var v538= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v538 = {car: arguments[i], cdr: 
    v538};
    return (function(){
        try {
            return (function(){
                return (function(v540,v541){
                    try {
                        var tmp;
                        tmp = l174.value;
                        l174.value = v541;
                        v541 = tmp;
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function((function(v542,v543){
                            return l229.function(v542, v543);
                        })(l85.function((function(){
                            var symbol = l224;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.function((function(){
                            var symbol = l38;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v540)),l124.function(l128.function((function(){
                            var symbol = l228;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v540), (function(){
                            var symbol = l208;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v538, l4.value)))), "})()");
                    }
                    finally {
                        l174.value = v541;
                    }
                })(l69.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v539),l168.function((function(){
                    var symbol = l174;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l231 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l231.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l231).value = 0);
    })());
    return l231;
})();
((l194).value = ({car: l42.function(l170, (function (v545){
    if (arguments.length < 1) throw 'too few arguments';
    var v544= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v544 = {car: arguments[i], cdr: 
    v544};
    return (function(){
        try {
            return (function(){
                return (function(v546){
                    return (function(v547){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v548){
                            try {
                                var tmp;
                                tmp = l174.value;
                                l174.value = v548;
                                v548 = tmp;
                                return l131.function("return ", (function(){
                                    var symbol = l133;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l42.function(l222), v544)), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l174.value = v548;
                            }
                        })(l172.function(l42.function(v547), (function(){
                            var symbol = l174;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l170)), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v546, ")", (function(){
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
                    })(l159.function(v545, l170, v546));
                })(l16.function(((l231).value = (function(){
                    var x1 = (function(){
                        var symbol = l231;
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
            if (cf.type == 'block' && cf.id == 197)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l232 = {name: "RETURN-FROM"};
((l194).value = ({car: l42.function(l232, (function (v549,v550){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v550=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v551){
                    return (v551 !== l3.value ? l124.function("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("throw ({", "type: 'block', ", "id: ", l162.function(v551), ", ", "value: ", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v550), ", ", "message: 'Return from unknown block ", (v549).name, ".'", "})"), "})()") : (function(){
                        throw l124.function("Unknown block `", (v549).name, "'.");
                    })());
                })(l173.function(v549, (function(){
                    var symbol = l174;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l170));
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l233 = {name: "CATCH"};
((l194).value = ({car: l42.function(l233, (function (v553){
    if (arguments.length < 1) throw 'too few arguments';
    var v552= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v552 = {car: arguments[i], cdr: 
    v552};
    return (function(){
        try {
            return (function(){
                return l124.function("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("var id = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v553), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("return ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l42.function(l222), v552)), ";", (function(){
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
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l234 = {name: "THROW"};
((l194).value = ({car: l42.function(l234, (function (v554,v555){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.function("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554), ", ", "value: ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v555), ", ", "message: 'Throw uncatched.'", "})"), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 200)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l235 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l235.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l235).value = 0);
    })());
    return l235;
})();
var l236 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l236.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l236).value = 0);
    })());
    return l236;
})();
var l237 = {name: "GO-TAG-P"};
(function(){
    (l237).function = (function(v558){
        ((v558)["fname"] = "GO-TAG-P");
        return v558;
    })((function (v556){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v557){
                        return (v557 !== l3.value ? v557 : ((function(){
                            var tmp = v556;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l75.function(v556));
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
    return l237;
})();
var l238 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l238).function = (function(v564){
        ((v564)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v564;
    })((function (v559,v560){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v563){
                        return l172.function(v563, (function(){
                            var symbol = l174;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l171);
                    })(l69.function((function (v561){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v562){
                            return l159.function(v561, l171, l42.function(v559, v562));
                        })(l16.function(((l236).value = (function(){
                            var x1 = (function(){
                                var symbol = l236;
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
                        var symbol = l237;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v560)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 202)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l238;
})();
var l239 = {name: "TAGBODY"};
((l194).value = ({car: l42.function(l239, (function (){
    var v565= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v565 = {car: arguments[i], cdr: 
    v565};
    return (function(){
        try {
            return (function(){
                (l89.function((function(){
                    var symbol = l237;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v565) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 203, value: (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l222), v565, l42.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l237.function((function(){
                    var tmp = v565;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return (v565 = ({car: l15.function("START"), cdr: v565}));
                })());
                return (function(v566){
                    return (function(v568,v567){
                        try {
                            var tmp;
                            tmp = l174.value;
                            l174.value = v568;
                            v568 = tmp;
                            (function(v569){
                                return (v567 = l39.function(l162.function(v569)));
                            })(l173.function(l38.function(v565), (function(){
                                var symbol = l174;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l171));
                            return l124.function("(function(){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l131.function("var tagbody_", v566, " = ", v567, ";", (function(){
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
                            })(), l131.function("try {", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l131.function((function(v570){
                                return l124.function("switch(tagbody_", v566, "){", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v567, ":", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v571,v572){
                                                (function(){
                                                    while(v571 !== l3.value){
                                                        (v572 = (function(){
                                                            var tmp = v571;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })());
                                                        (function(){
                                                            (v570 = l124.function(v570, (function(){
                                                                return (l26.function(l237.function(v572)) !== l3.value ? l131.function((function(){
                                                                    var symbol = l133;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v572), ";", (function(){
                                                                    var symbol = l123;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v573){
                                                                    return l124.function("case ", l39.function(l162.function(v573)), ":", (function(){
                                                                        var symbol = l123;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l173.function(v572, (function(){
                                                                    var symbol = l174;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l171)));
                                                            })()));
                                                            return l3.value;
                                                        })();
                                                        (v571 = (function(){
                                                            var tmp = v571;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })());
                                                    }return l3.value;
                                                })();
                                                return v570;
                                            })((function(){
                                                var tmp = v565;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 204)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
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
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v566, ")", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v566, " = jump.label;", (function(){
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
                            })(), "return ", (function(){
                                var symbol = l133;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l174.value = v568;
                        }
                    })(l238.function(v566, v565),l3.value);
                })(l16.function((function(){
                    var symbol = l235;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 203)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l240 = {name: "GO"};
((l194).value = ({car: l42.function(l240, (function (v574){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v575,v576){
                    return (v575 !== l3.value ? l124.function("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("throw ({", "type: 'tagbody', ", "id: ", l38.function(l162.function(v575)), ", ", "label: ", l39.function(l162.function(v575)), ", ", "message: 'Attempt to GO to non-existing tag ", v576, "'", "})", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l124.function("Unknown tag `", v576, "'.");
                    })());
                })(l173.function(v574, (function(){
                    var symbol = l174;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l171),(((function(){
                    var tmp = v574;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v574).name;
                })() : (l75.function(v574) !== l3.value ? (function(){
                    return l16.function(v574);
                })() : l3.value)));
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
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l241 = {name: "UNWIND-PROTECT"};
((l194).value = ({car: l42.function(l241, (function (v578){
    if (arguments.length < 1) throw 'too few arguments';
    var v577= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v577 = {car: arguments[i], cdr: 
    v577};
    return (function(){
        try {
            return (function(){
                return l124.function("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("var ret = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("ret = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v578), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function((function(){
                    var symbol = l208;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v577)), "}", (function(){
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
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 206)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l242 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l242).function = (function(v581){
        ((v581)["fname"] = "BACKQUOTE-EXPAND-1");
        return v581;
    })((function (v579){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v579;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l42.function(l153, v579);
                    })() : (l43.function(v579) !== l3.value ? (function(){
                        return v579;
                    })() : ((((function(){
                        var tmp = v579;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l156)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v579;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v579;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l154)?l4.value: l3.value) !== l3.value ? (function(){
                        return l242.function(l242.function(l32.function(v579)));
                    })() : (function(){
                        return ({car: l62, cdr: l69.function((function (v580){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l57.function(v580) !== l3.value ? (((function(){
                                var tmp = v580;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l156)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l42.function(l42, l32.function(v580));
                            })() : ((l57.function(v580) !== l3.value ? (((function(){
                                var tmp = v580;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l155)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l32.function(v580);
                            })() : (function(){
                                return l42.function(l42, l242.function(v580));
                            })()));
                        
                        }), v579)});
                    })()))));
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
    return l242;
})();
var l243 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l243).function = (function(v583){
        ((v583)["fname"] = "BACKQUOTE-EXPAND");
        return v583;
    })((function (v582){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l57.function(v582) !== l3.value ? (((function(){
                        var tmp = v582;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l154)?l4.value: l3.value) : l3.value) !== l3.value ? l242.function(l32.function(v582)) : v582);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 208)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l243;
})();
l154;
((l194).value = ({car: l42.function(l154, (function (v584){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l242.function(v584));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 209)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l194;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l244 = {name: "*BUILTINS*"};
(function(){
    (((l244.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l244).value = l3.value);
    })());
    return l244;
})();
var l245 = {name: "DEFINE-RAW-BUILTIN"};
l245;
var l246 = {name: "DEFINE-BUILTIN"};
l246;
var l247 = {name: "TYPE-CHECK"};
l247;
var l248 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l248).function = (function(v593){
        ((v593)["fname"] = "VARIABLE-ARITY-CALL");
        return v593;
    })((function (v585,v586){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v585;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "ARGS must be a non-empty list";
                        })();
                    })());
                    return (function(v587,v588,v589){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v590,v591){
                                        (function(){
                                            while(v590 !== l3.value){
                                                (v591 = (function(){
                                                    var tmp = v590;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v592){
                                                        (v588 = ({car: v592, cdr: v588}));
                                                        return (v589 = l124.function(v589, (function(){
                                                            return l124.function("var ", v592, " = ", (function(){
                                                                var symbol = l133;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v591), ";", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), "if (typeof ", v592, " !== 'number') throw 'Not a number!';", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })());
                                                        })()));
                                                    })(l124.function("x", l16.function((v587 = (function(){
                                                        var x1 = v587;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })()))));
                                                    return l3.value;
                                                })();
                                                (v590 = (function(){
                                                    var tmp = v590;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v585,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 211)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(v589, (v586)(l64.function(v588))), "})()");
                    })(0,l3,"");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 210)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l248;
})();
var l249 = {name: "VARIABLE-ARITY"};
l249;
var l250 = {name: "NUM-OP-NUM"};
(function(){
    (l250).function = (function(v597){
        ((v597)["fname"] = "NUM-OP-NUM");
        return v597;
    })((function (v594,v595,v596){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.function("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function(l124.function("var ", "x", " = ", v594, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l124.function("var ", "y", " = ", v596, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l124.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l124.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l124.function("return ", (function(){
                        return l124.function("x", v595, "y");
                    })(), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 212)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l250;
})();
((l244).value = ({car: l42.function(l59, (function (){
    var v598= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v598 = {car: arguments[i], cdr: 
    v598};
    return (function(){
        try {
            return (function(){
                return (l11.function(v598) !== l3.value ? "0" : l248.function(v598, (function (v599){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l124.function("return ", l126.function(v599, "+"), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l244).value = ({car: l42.function(l60, (function (v601){
    if (arguments.length < 1) throw 'too few arguments';
    var v600= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v600 = {car: arguments[i], cdr: 
    v600};
    return (function(){
        try {
            return (function(){
                return (function(v602){
                    return l248.function(v602, (function (v603){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", (l11.function(v600) !== l3.value ? l124.function("-", (function(){
                            var tmp = v603;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l126.function(v603, "-")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v601, cdr: v600}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l244).value = ({car: l42.function(l19, (function (){
    var v604= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v604 = {car: arguments[i], cdr: 
    v604};
    return (function(){
        try {
            return (function(){
                return (l11.function(v604) !== l3.value ? "1" : l248.function(v604, (function (v605){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l124.function("return ", l126.function(v605, "*"), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l244).value = ({car: l42.function(l20, (function (v607){
    if (arguments.length < 1) throw 'too few arguments';
    var v606= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v606 = {car: arguments[i], cdr: 
    v606};
    return (function(){
        try {
            return (function(){
                return (function(v608){
                    return l248.function(v608, (function (v609){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", (l11.function(v606) !== l3.value ? l124.function("1 /", (function(){
                            var tmp = v609;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l126.function(v609, "/")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v607, cdr: v606}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l251 = {name: "MOD"};
(function(){
    return ((l244).value = ({car: l42.function(l251, (function (v610,v611){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v612,v613){
                        return l250.function(v612, "%", v613);
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v610),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v611));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 217)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l252 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l252).function = (function(v616){
        ((v616)["fname"] = "COMPARISON-CONJUNTION");
        return v616;
    })((function (v614,v615){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function((function(){
                        var tmp = v614;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return "true";
                    })() : (l11.function(l34.function(v614)) !== l3.value ? (function(){
                        return l124.function((function(){
                            var tmp = v614;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v615, l32.function(v614));
                    })() : (function(){
                        return l124.function((function(){
                            var tmp = v614;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v615, l32.function(v614), " && ", l252.function((function(){
                            var tmp = v614;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v615));
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 218)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l252;
})();
var l253 = {name: "DEFINE-BUILTIN-COMPARISON"};
l253;
var l254 = {name: ">"};
((l244).value = ({car: l42.function(l254, (function (v618){
    if (arguments.length < 1) throw 'too few arguments';
    var v617= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v617 = {car: arguments[i], cdr: 
    v617};
    return (function(){
        try {
            return (function(){
                return (function(v619){
                    return l248.function(v619, (function (v620){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", l132.function(l252.function(v620, ">")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v618, cdr: v617}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l255 = {name: "<"};
((l244).value = ({car: l42.function(l255, (function (v622){
    if (arguments.length < 1) throw 'too few arguments';
    var v621= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v621 = {car: arguments[i], cdr: 
    v621};
    return (function(){
        try {
            return (function(){
                return (function(v623){
                    return l248.function(v623, (function (v624){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", l132.function(l252.function(v624, "<")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v622, cdr: v621}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l256 = {name: ">="};
((l244).value = ({car: l42.function(l256, (function (v626){
    if (arguments.length < 1) throw 'too few arguments';
    var v625= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v625 = {car: arguments[i], cdr: 
    v625};
    return (function(){
        try {
            return (function(){
                return (function(v627){
                    return l248.function(v627, (function (v628){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", l132.function(l252.function(v628, ">=")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v626, cdr: v625}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l257 = {name: "<="};
((l244).value = ({car: l42.function(l257, (function (v630){
    if (arguments.length < 1) throw 'too few arguments';
    var v629= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v629 = {car: arguments[i], cdr: 
    v629};
    return (function(){
        try {
            return (function(){
                return (function(v631){
                    return l248.function(v631, (function (v632){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", l132.function(l252.function(v632, "<=")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v630, cdr: v629}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
((l244).value = ({car: l42.function(l18, (function (v634){
    if (arguments.length < 1) throw 'too few arguments';
    var v633= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v633 = {car: arguments[i], cdr: 
    v633};
    return (function(){
        try {
            return (function(){
                return (function(v635){
                    return l248.function(v635, (function (v636){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.function("return ", l132.function(l252.function(v636, "==")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v634, cdr: v633}));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l258 = {name: "NUMBERP"};
(function(){
    return ((l244).value = ({car: l42.function(l258, (function (v637){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v638){
                        return l132.function(l124.function("(typeof (", v638, ") == \"number\")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v637));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l259 = {name: "FLOOR"};
(function(){
    return ((l244).value = ({car: l42.function(l259, (function (v639){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v640){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v640, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v639));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l27, (function (v641,v642){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v643,v644){
                        return l124.function("({car: ", v643, ", cdr: ", v644, "})");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v641),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v642));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l28, (function (v645){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v646){
                        return l132.function(l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var tmp = ", v646, ";", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v645));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l29, (function (v647){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v648){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var tmp = ", v648, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v647));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l30, (function (v649){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v650){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var tmp = ", v650, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v649));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l260 = {name: "SETCAR"};
(function(){
    return ((l244).value = ({car: l42.function(l260, (function (v651,v652){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v653,v654){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v653, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return l124.function("(x.car = ", v654, ")");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v651),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v652));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l261 = {name: "SETCDR"};
(function(){
    return ((l244).value = ({car: l42.function(l261, (function (v655,v656){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v657,v658){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v657, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return l124.function("(x.cdr = ", v658, ")");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v655),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v656));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l262 = {name: "SYMBOLP"};
(function(){
    return ((l244).value = ({car: l42.function(l262, (function (v659){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v660){
                        return l132.function(l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var tmp = ", v660, ";", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v659));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l263 = {name: "MAKE-SYMBOL"};
(function(){
    return ((l244).value = ({car: l42.function(l263, (function (v661){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v662){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "name", " = ", v662, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v661));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l264 = {name: "SYMBOL-NAME"};
(function(){
    return ((l244).value = ({car: l42.function(l264, (function (v663){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v664){
                        return l124.function("(", v664, ").name");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v663));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l210, (function (v665,v666){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v667,v668){
                        return l124.function("(", v667, ").value = ", v668);
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v665),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v666));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l265 = {name: "FSET"};
(function(){
    return ((l244).value = ({car: l42.function(l265, (function (v669,v670){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v671,v672){
                        return l124.function("(", v671, ").function = ", v672);
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v669),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v670));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l17, (function (v673){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v674){
                        return l132.function(l124.function("(", v674, ".value !== undefined)"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v673));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l266 = {name: "SYMBOL-VALUE"};
(function(){
    return ((l244).value = ({car: l42.function(l266, (function (v675){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v676){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var symbol = ", v676, ";", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v675));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l219, (function (v677){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v678){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var symbol = ", v678, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v677));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l267 = {name: "SYMBOL-PLIST"};
(function(){
    return ((l244).value = ({car: l42.function(l267, (function (v679){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v680){
                        return l124.function("((", v680, ").plist || ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v679));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l268 = {name: "LAMBDA-CODE"};
(function(){
    return ((l244).value = ({car: l42.function(l268, (function (v681){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v682){
                        return l124.function("(", v682, ").toString()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v681));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l269 = {name: "EQ"};
(function(){
    return ((l244).value = ({car: l42.function(l269, (function (v683,v684){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v685,v686){
                        return l132.function(l124.function("(", v685, " === ", v686, ")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v683),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v684));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l270 = {name: "EQUAL"};
(function(){
    return ((l244).value = ({car: l42.function(l270, (function (v687,v688){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v689,v690){
                        return l132.function(l124.function("(", v689, " == ", v690, ")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v687),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v688));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l271 = {name: "CHAR-TO-STRING"};
(function(){
    return ((l244).value = ({car: l42.function(l271, (function (v691){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v692){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v692, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v691));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l272 = {name: "STRINGP"};
(function(){
    return ((l244).value = ({car: l42.function(l272, (function (v693){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v694){
                        return l132.function(l124.function("(typeof(", v694, ") == \"string\")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v693));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l273 = {name: "STRING-UPCASE"};
(function(){
    return ((l244).value = ({car: l42.function(l273, (function (v695){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v696){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v696, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v695));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l274 = {name: "STRING-LENGTH"};
(function(){
    return ((l244).value = ({car: l42.function(l274, (function (v697){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v698){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v698, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v697));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l275 = {name: "SLICE"};
((l244).value = ({car: l42.function(l275, (function (v699,v700,v701){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v701=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l124.function("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.function("var str = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v699), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v700), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v701 !== l3.value ? l124.function("b = ", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v701), ";", (function(){
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
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 248)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l276 = {name: "CHAR"};
(function(){
    return ((l244).value = ({car: l42.function(l276, (function (v702,v703){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v704,v705){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "string", " = ", v704, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("var ", "index", " = ", v705, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v702),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v703));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.function(l68, (function (v706,v707){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v708,v709){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "string1", " = ", v708, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("var ", "string2", " = ", v709, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v706),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v707));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l277 = {name: "FUNCALL"};
((l244).value = ({car: l42.function(l277, (function (v711){
    if (arguments.length < 1) throw 'too few arguments';
    var v710= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v710 = {car: arguments[i], cdr: 
    v710};
    return (function(){
        try {
            return (function(){
                return l124.function("(", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v711), ")(", l126.function(l69.function((function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v710), ", "), ")");
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l278 = {name: "APPLY"};
((l244).value = ({car: l42.function(l278, (function (v713){
    if (arguments.length < 1) throw 'too few arguments';
    var v712= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v712 = {car: arguments[i], cdr: 
    v712};
    return (function(){
        try {
            return (function(){
                return (l11.function(v712) !== l3.value ? l124.function("(", (function(){
                    var symbol = l133;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v713), ")()") : (function(v714,v715){
                    return l124.function("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.function("var f = ", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v713), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l126.function(l69.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v714), ", "), "];", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v715), ");", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
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
                })(l81.function(v712),(function(){
                    var tmp = l80.function(v712);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
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
    var symbol = l244;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()}));
var l279 = {name: "JS-EVAL"};
(function(){
    return ((l244).value = ({car: l42.function(l279, (function (v716){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v717){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "string", " = ", v717, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v716));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l280 = {name: "ERROR"};
(function(){
    return ((l244).value = ({car: l42.function(l280, (function (v718){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v719){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw ", v719, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v718));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l281 = {name: "NEW"};
(function(){
    return ((l244).value = ({car: l42.function(l281, (function (){
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
                if (cf.type == 'block' && cf.id == 255)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l282 = {name: "OBJECTP"};
(function(){
    return ((l244).value = ({car: l42.function(l282, (function (v720){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v721){
                        return l132.function(l124.function("(typeof (", v721, ") === 'object')"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v720));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l283 = {name: "OGET"};
(function(){
    return ((l244).value = ({car: l42.function(l283, (function (v722,v723){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v724,v725){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var tmp = ", "(", v724, ")[", v725, "];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v722),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v723));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l284 = {name: "OSET"};
(function(){
    return ((l244).value = ({car: l42.function(l284, (function (v726,v727,v728){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v729,v730,v731){
                        return l124.function("((", v729, ")[", v730, "] = ", v731, ")");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v726),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v727),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v728));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l285 = {name: "IN"};
(function(){
    return ((l244).value = ({car: l42.function(l285, (function (v732,v733){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v734,v735){
                        return l132.function(l124.function("((", v734, ") in (", v735, "))"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v732),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v733));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l286 = {name: "FUNCTIONP"};
(function(){
    return ((l244).value = ({car: l42.function(l286, (function (v736){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v737){
                        return l132.function(l124.function("(typeof ", v737, " == 'function')"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v736));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l287 = {name: "WRITE-STRING"};
(function(){
    return ((l244).value = ({car: l42.function(l287, (function (v738){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v739){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function(l124.function("var ", "x", " = ", v739, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v738));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l288 = {name: "MAKE-ARRAY"};
(function(){
    return ((l244).value = ({car: l42.function(l288, (function (v740){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v741){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var r = [];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "for (var i = 0; i < ", v741, "; i++)", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("r.push(", (function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ");", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v740));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l289 = {name: "ARRAYP"};
(function(){
    return ((l244).value = ({car: l42.function(l289, (function (v742){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v743){
                        return l132.function(l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var x = ", v743, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v742));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l290 = {name: "AREF"};
(function(){
    return ((l244).value = ({car: l42.function(l290, (function (v744,v745){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v746,v747){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var x = ", "(", v746, ")[", v747, "];", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v744),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v745));
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l291 = {name: "ASET"};
(function(){
    return ((l244).value = ({car: l42.function(l291, (function (v748,v749,v750){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v751,v752,v753){
                        return l124.function("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.function("var x = ", v751, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var i = ", v752, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x[i] = ", v753, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v748),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v749),(function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v750));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 265)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l292 = {name: "GET-UNIX-TIME"};
(function(){
    return ((l244).value = ({car: l42.function(l292, (function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        return l124.function("(Math.round(new Date() / 1000))");
                    })();
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 266)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    (l185).function = (function(v756){
        ((v756)["fname"] = "MACRO");
        return v756;
    })((function (v754){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v754;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v755){
                        return (((l161.function(v755) === l185)?l4.value: l3.value) !== l3.value ? v755 : l3.value);
                    })(l173.function(v754, (function(){
                        var symbol = l174;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98)) : l3.value);
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
    return l185;
})();
var l293 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l293).function = (function(v761){
        ((v761)["fname"] = "LS-MACROEXPAND-1");
        return v761;
    })((function (v757){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v758){
                        return (v758 !== l3.value ? (function(v759){
                            (l57.function(v759) !== l3.value ? (function(){
                                return (function(v760){
                                    l164.function(v758, v760);
                                    return (v759 = v760);
                                })((function(){
                                    var symbol = l221;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v759));
                            })() : l3.value);
                            return (function(){
                                var f = v759;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v757;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l162.function(v758)) : v757);
                    })(l185.function((function(){
                        var tmp = v757;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
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
    return l293;
})();
var l294 = {name: "COMPILE-FUNCALL"};
(function(){
    (l294).function = (function(v764){
        ((v764)["fname"] = "COMPILE-FUNCALL");
        return v764;
    })((function (v762,v763){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v762;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l187.function(v762, l98, l192) : l3.value) !== l3.value ? l124.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l153), l42.function(v762))), ".function(", l126.function(l69.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v763), ", "), ")") : l124.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l98), l42.function(v762))), "(", l126.function(l69.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v763), ", "), ")"));
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
    return l294;
})();
(function(){
    (l208).function = (function(v767){
        ((v767)["fname"] = "LS-COMPILE-BLOCK");
        return v767;
    })((function (v765,v766){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v766=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v766 !== l3.value ? l124.function(l208.function(l81.function(v765)), "return ", (function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l80.function(v765);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l127.function(l84.function((function(){
                        var symbol = l182;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l69.function((function(){
                        var symbol = l133;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v765)), l124.function(";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
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
    return l208;
})();
(function(){
    (l133).function = (function(v775){
        ((v775)["fname"] = "LS-COMPILE");
        return v775;
    })((function (v768){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v768;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v769){
                            return ((v769 !== l3.value ? l26.function(l82.function(l189, l163.function(v769))) : l3.value) !== l3.value ? (function(){
                                return l162.function(v769);
                            })() : ((function(v770){
                                return (v770 !== l3.value ? v770 : l82.function(l191, l163.function(v769)));
                            })(l113.function(v768)) !== l3.value ? (function(){
                                return l124.function(l133.function(l62.function(l42.function(l153), l42.function(v768))), ".value");
                            })() : (function(){
                                return l133.function(l62.function(l42.function(l266), l42.function(l62.function(l42.function(l153), l42.function(v768)))));
                            })()));
                        })(l173.function(v768, (function(){
                            var symbol = l174;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l99));
                    })() : (l75.function(v768) !== l3.value ? (function(){
                        return l16.function(v768);
                    })() : (((typeof(v768) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.function("\"", l136.function(v768), "\"");
                    })() : (((function(){
                        var x = v768;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l217.function(v768);
                    })() : (l57.function(v768) !== l3.value ? (function(){
                        return (function(v771,v772){
                            return (l91.function(v771, (function(){
                                var symbol = l194;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v773){
                                    return (function(){
                                        var f = v773;
                                        var args = [];
                                        var tail = (v772);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l91.function(v771, (function(){
                                    var symbol = l194;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l91.function(v771, (function(){
                                var symbol = l244;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l26.function(l187.function(v771, l98, l190)) : l3.value) !== l3.value ? (function(){
                                return (function(v774){
                                    return (function(){
                                        var f = v774;
                                        var args = [];
                                        var tail = (v772);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l91.function(v771, (function(){
                                    var symbol = l244;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l185.function(v771) !== l3.value ? l133.function(l293.function(v768)) : l294.function(v771, v772));
                            })()));
                        })((function(){
                            var tmp = v768;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v768;
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
                if (cf.type == 'block' && cf.id == 271)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l133;
})();
var l295 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l295).function = (function(v780){
        ((v780)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v780;
    })((function (v776){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v777){
                        try {
                            var tmp;
                            tmp = l180.value;
                            l180.value = v777;
                            v777 = tmp;
                            return ((((function(){
                                var tmp = v776;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v776;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l222)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v778){
                                    return l126.function(l84.function((function(){
                                        var symbol = l182;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v778));
                                })(l69.function((function(){
                                    var symbol = l295;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v776;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v779){
                                    return l124.function(l127.function(l183.function(), l124.function(";", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v779 !== l3.value ? l124.function(v779, ";", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l133.function(v776));
                            })());
                        }
                        finally {
                            l180.value = v777;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 272)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l295;
})();
var l296 = {name: "WITH-COMPILATION-UNIT"};
l296;
(function(){
    (l221).function = (function(v786){
        ((v786)["fname"] = "EVAL");
        return v786;
    })((function (v781){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v785){
                        return (function(){
                            var string = v785;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v782){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v783,v784){
                                        (function(){
                                            while(v783 !== l3.value){
                                                (v784 = (function(){
                                                    var tmp = v783;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v784)();
                                                    return l3.value;
                                                })();
                                                (v783 = (function(){
                                                    var tmp = v783;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l158;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 274)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v782;
                    })((function(){
                        ((l158).value = l3.value);
                        return l295.function(v781);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 273)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l221;
})();
var l297 = {name: "&BODY"};
var l298 = {car: l199, cdr: {car: l198, cdr: {car: l297, cdr: {car: l19, cdr: {car: l14, cdr: {car: l115, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l255, cdr: {car: l257, cdr: {car: l18, cdr: {car: l18, cdr: {car: l254, cdr: {car: l256, cdr: {car: l52, cdr: {car: l62, cdr: {car: l278, cdr: {car: l290, cdr: {car: l289, cdr: {car: l291, cdr: {car: l91, cdr: {car: l43, cdr: {car: l170, cdr: {car: l17, cdr: {car: l17, cdr: {car: l81, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l233, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l276, cdr: {car: l73, cdr: {car: l74, cdr: {car: l72, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l71, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l7, cdr: {car: l86, cdr: {car: l95, cdr: {car: l97, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l269, cdr: {car: l25, cdr: {car: l270, cdr: {car: l280, cdr: {car: l221, cdr: {car: l90, cdr: {car: l121, cdr: {car: l94, cdr: {car: l105, cdr: {car: l119, cdr: {car: l38, cdr: {car: l41, cdr: {car: l265, cdr: {car: l277, cdr: {car: l98, cdr: {car: l286, cdr: {car: l15, cdr: {car: l122, cdr: {car: l240, cdr: {car: l70, cdr: {car: l196, cdr: {car: l116, cdr: {car: l44, cdr: {car: l75, cdr: {car: l75, cdr: {car: l120, cdr: {car: l113, cdr: {car: l207, cdr: {car: l80, cdr: {car: l67, cdr: {car: l226, cdr: {car: l230, cdr: {car: l101, cdr: {car: l42, cdr: {car: l57, cdr: {car: l288, cdr: {car: l102, cdr: {car: l263, cdr: {car: l69, cdr: {car: l82, cdr: {car: l77, cdr: {car: l251, cdr: {car: l3, cdr: {car: l26, cdr: {car: l79, cdr: {car: l78, cdr: {car: l11, cdr: {car: l258, cdr: {car: l53, cdr: {car: l106, cdr: {car: l108, cdr: {car: l104, cdr: {car: l76, cdr: {car: l135, cdr: {car: l138, cdr: {car: l193, cdr: {car: l54, cdr: {car: l55, cdr: {car: l222, cdr: {car: l65, cdr: {car: l46, cdr: {car: l153, cdr: {car: l83, cdr: {car: l84, cdr: {car: l85, cdr: {car: l12, cdr: {car: l232, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l210, cdr: {car: l211, cdr: {car: l89, cdr: {car: l273, cdr: {car: l92, cdr: {car: l93, cdr: {car: l272, cdr: {car: l87, cdr: {car: l219, cdr: {car: l264, cdr: {car: l114, cdr: {car: l267, cdr: {car: l266, cdr: {car: l262, cdr: {car: l4, cdr: {car: l239, cdr: {car: l40, cdr: {car: l234, cdr: {car: l24, cdr: {car: l6, cdr: {car: l241, cdr: {car: l99, cdr: {car: l137, cdr: {car: l5, cdr: {car: l96, cdr: {car: l287, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l121.function(l298);
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
    var symbol = l157;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l135;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l221;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l295;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v787){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l221.function(l157.function(v787));

}));
(lisp.compileString = (function (v788){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l295.function(l157.function(v788));

}));
var l299 = {car: {car: l297, cdr: "l297"}, cdr: {car: {car: l296, cdr: "l296"}, cdr: {car: {car: l295, cdr: "l295"}, cdr: {car: {car: l294, cdr: "l294"}, cdr: {car: {car: l293, cdr: "l293"}, cdr: {car: {car: l292, cdr: "l292"}, cdr: {car: {car: l291, cdr: "l291"}, cdr: {car: {car: l290, cdr: "l290"}, cdr: {car: {car: l289, cdr: "l289"}, cdr: {car: {car: l288, cdr: "l288"}, cdr: {car: {car: l287, cdr: "l287"}, cdr: {car: {car: l286, cdr: "l286"}, cdr: {car: {car: l285, cdr: "l285"}, cdr: {car: {car: l284, cdr: "l284"}, cdr: {car: {car: l283, cdr: "l283"}, cdr: {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l300 = {name: "BODY"};
var l301 = {name: "CHECK"};
var l302 = {name: "OP"};
var l303 = {name: "SYM"};
var l304 = {name: "X"};
var l305 = {name: "ARGS"};
var l306 = {name: "DECLS"};
var l307 = {name: "DECL"};
var l308 = {name: "NAME"};
var l309 = {name: "ARG"};
var l310 = {name: "FORM"};
var l311 = {name: "PACKAGE-DESIGNATOR"};
var l312 = {name: "PAIRS"};
var l313 = {name: "ASSIGNMENTS"};
var l314 = {name: "VALUE"};
var l315 = {name: "FORM1"};
var l316 = {name: "RESULT"};
var l317 = {name: "FORMS"};
var l318 = {name: "G"};
var l319 = {name: "CLAUSULES"};
var l320 = {name: "!FORM"};
var l321 = {name: "CLAUSULE"};
var l322 = {name: "ITER"};
var l323 = {name: "G!TO"};
var l324 = {name: "VAR"};
var l325 = {name: "TO"};
var l326 = {name: "G!LIST"};
var l327 = {name: "PLACE"};
var l328 = {name: "DELTA"};
var l329 = {name: "CONDITION"};
var l330 = {name: "DOCSTRING"};
var l331 = {car: {car: {car: l244, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l236, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l235, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l231, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l215, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l214, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l197, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l194, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l175, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: {car: l191, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l99, cdr: {car: l3, cdr: {car: {car: l189, cdr: {car: l191, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l221, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l296, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l54, cdr: {car: {car: l222, cdr: {car: {car: l211, cdr: {car: l158, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l47, cdr: {car: {car: l301, cdr: {car: l158, cdr: l3}}, cdr: {car: {car: l277, cdr: {car: l301, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l295, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l208, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l294, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l293, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l185, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l253, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l302, cdr: {car: l303, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l245, cdr: {car: {car: l156, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l304, cdr: {car: l199, cdr: {car: l305, cdr: l3}}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l305, cdr: {car: {car: l27, cdr: {car: l304, cdr: {car: l305, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l249, cdr: {car: l305, cdr: {car: {car: l132, cdr: {car: {car: l252, cdr: {car: l305, cdr: {car: {car: l156, cdr: {car: l303, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l252, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l250, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l249, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l6, cdr: {car: {car: l262, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l280, cdr: {car: "Bad usage of VARIABLE-ARITY, you must pass a symbol", cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l248, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: l3}, cdr: {car: {car: l124, cdr: {car: "return ", cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l248, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l247, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l306, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l134, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l207, cdr: {car: {car: l307, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l124, cdr: {car: "var ", cdr: {car: {car: l156, cdr: {car: {car: l38, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l156, cdr: {car: {car: l40, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l306, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l207, cdr: {car: {car: l307, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l124, cdr: {car: "if (typeof ", cdr: {car: {car: l156, cdr: {car: {car: l38, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l156, cdr: {car: {car: l39, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l123, cdr: {car: {car: l131, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l156, cdr: {car: {car: l38, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l156, cdr: {car: {car: l39, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l123, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l306, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l124, cdr: {car: "return ", cdr: {car: {car: l222, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l123, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l246, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l222, cdr: {car: {car: l245, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l226, cdr: {car: {car: l156, cdr: {car: {car: l69, cdr: {car: {car: l207, cdr: {car: {car: l309, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: {car: l156, cdr: {car: l309, cdr: l3}}, cdr: {car: {car: l133, cdr: {car: {car: l156, cdr: {car: l309, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l305, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l245, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l170, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l244, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l310, cdr: l3}, cdr: {car: {car: l242, cdr: {car: l310, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l243, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l242, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l238, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l237, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l228, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l225, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l224, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l310, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l195, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l133, cdr: {car: {car: l156, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l217, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l216, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l209, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l206, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l205, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l204, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l203, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l202, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l201, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l195, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l170, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l194, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l188, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l187, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l186, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l184, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l183, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l168, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l167, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l166, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l151, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l124, cdr: {car: "(function(){", cdr: {car: l123, cdr: {car: {car: l131, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l99, cdr: {car: l199, cdr: {car: l310, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l124, cdr: {car: {car: l156, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l222, cdr: {car: {car: l155, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l311, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l220, cdr: {car: {car: l211, cdr: {car: l115, cdr: {car: {car: l103, cdr: {car: {car: l156, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l97, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l313, cdr: {car: {car: l153, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l13, cdr: {car: l4, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l12, cdr: l3}, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l312, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l280, cdr: {car: "Odd paris in PSETQ", cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l226, cdr: {car: {car: {car: l99, cdr: {car: {car: l29, cdr: {car: l312, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l314, cdr: {car: {car: l32, cdr: {car: l312, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l46, cdr: {car: {car: l154, cdr: {car: {car: {car: l156, cdr: {car: l99, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: l313, cdr: l3}}}, cdr: {car: {car: l211, cdr: {car: l312, cdr: {car: {car: l34, cdr: {car: l312, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l211, cdr: {car: l313, cdr: {car: {car: l64, cdr: {car: l313, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l226, cdr: {car: {car: l156, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l30, cdr: l3}}, cdr: {car: l313, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l211, cdr: {car: {car: l155, cdr: {car: {car: l58, cdr: {car: {car: l98, cdr: {car: l62, cdr: l3}}, cdr: {car: {car: l69, cdr: {car: {car: l98, cdr: {car: l81, cdr: l3}}, cdr: {car: l313, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: l3, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l315, cdr: {car: l316, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l54, cdr: {car: {car: l222, cdr: {car: {car: l156, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l316, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l310, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l314, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l226, cdr: {car: {car: {car: {car: l156, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l314, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l317, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l226, cdr: {car: {car: {car: l318, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l226, cdr: {car: {car: {car: {car: l156, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: {car: l29, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l196, cdr: {car: {car: l156, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l53, cdr: {car: {car: l155, cdr: {car: {car: l30, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l317, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l154, cdr: {car: {car: l196, cdr: {car: {car: l156, cdr: {car: {car: l29, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l52, cdr: {car: {car: l155, cdr: {car: {car: l30, cdr: {car: l317, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l310, cdr: {car: l199, cdr: {car: l319, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l50, cdr: {car: {car: l156, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l62, cdr: {car: l319, cdr: {car: {car: l154, cdr: {car: {car: {car: l4, cdr: {car: {car: l280, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l310, cdr: {car: l199, cdr: {car: l319, cdr: l3}}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l320, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l226, cdr: {car: {car: {car: {car: l156, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l49, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l207, cdr: {car: {car: l321, cdr: l3}, cdr: {car: {car: l196, cdr: {car: {car: l269, cdr: {car: {car: l29, cdr: {car: l321, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l321, cdr: {car: {car: l154, cdr: {car: {car: {car: l25, cdr: {car: {car: l156, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: {car: l29, cdr: {car: l321, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l155, cdr: {car: {car: l30, cdr: {car: l321, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l319, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l319, cdr: l3}}, cdr: {car: {car: l196, cdr: {car: {car: l11, cdr: {car: l319, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l196, cdr: {car: {car: l269, cdr: {car: {car: l31, cdr: {car: l319, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l222, cdr: {car: {car: l155, cdr: {car: {car: l33, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l196, cdr: {car: {car: l156, cdr: {car: {car: l31, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l222, cdr: {car: {car: l155, cdr: {car: {car: l33, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: l155, cdr: {car: {car: l30, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l322, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l323, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l324, cdr: {car: {car: l38, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l325, cdr: {car: {car: l39, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l316, cdr: {car: {car: l40, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l170, cdr: {car: l3, cdr: {car: {car: l226, cdr: {car: {car: {car: {car: l156, cdr: {car: l324, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l156, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l325, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l218, cdr: {car: {car: l255, cdr: {car: {car: l156, cdr: {car: l324, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l323, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l239, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l44, cdr: {car: {car: l156, cdr: {car: l324, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l316, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l322, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l324, cdr: {car: {car: l38, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l326, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l170, cdr: {car: l3, cdr: {car: {car: l226, cdr: {car: {car: {car: {car: l156, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: {car: l39, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l156, cdr: {car: l324, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l218, cdr: {car: {car: l156, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l324, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l156, cdr: {car: l326, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l239, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l326, cdr: l3}}, cdr: {car: {car: l30, cdr: {car: {car: l156, cdr: {car: l326, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l156, cdr: {car: {car: l40, cdr: {car: l322, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l304, cdr: {car: l327, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l327, cdr: l3}}, cdr: {car: {car: l27, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l327, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l304, cdr: {car: l198, cdr: {car: {car: l328, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l60, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l328, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l304, cdr: {car: l198, cdr: {car: {car: l328, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l328, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l329, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l170, cdr: {car: l3, cdr: {car: {car: l218, cdr: {car: {car: l156, cdr: {car: l329, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l198, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l232, cdr: {car: l3, cdr: {car: {car: l156, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l192, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l222, cdr: {car: {car: l2, cdr: {car: {car: l192, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l265, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l156, cdr: {car: {car: l264, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l196, cdr: {car: {car: l52, cdr: {car: {car: l272, cdr: {car: {car: l29, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l26, cdr: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: {car: l156, cdr: {car: {car: l29, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l170, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: {car: l30, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: {car: l170, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l226, cdr: {car: {car: {car: l304, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l226, cdr: {car: {car: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: l156, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l284, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l304, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l314, cdr: {car: l198, cdr: {car: l330, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l222, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l155, cdr: {car: {car: l5, cdr: {car: {car: l272, cdr: {car: l330, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: {car: l284, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l156, cdr: {car: l330, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l314, cdr: {car: l198, cdr: {car: l330, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l222, cdr: {car: {car: l2, cdr: {car: {car: l189, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l211, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l156, cdr: {car: l314, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l155, cdr: {car: {car: l5, cdr: {car: {car: l272, cdr: {car: l330, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: {car: l284, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l156, cdr: {car: l330, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l329, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l196, cdr: {car: {car: l156, cdr: {car: l329, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l222, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l329, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l154, cdr: {car: {car: l196, cdr: {car: {car: l156, cdr: {car: l329, cdr: l3}}, cdr: {car: {car: l222, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l199, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l220, cdr: {car: {car: l155, cdr: {car: {car: l69, cdr: {car: {car: l207, cdr: {car: {car: l307, cdr: l3}, cdr: {car: {car: l154, cdr: {car: {car: l188, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l306, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l185, cdr: {car: {car: l207, cdr: {car: {car: l308, cdr: {car: l305, cdr: {car: l199, cdr: {car: l300, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: {car: l220, cdr: {car: {car: l184, cdr: {car: {car: l153, cdr: {car: {car: l156, cdr: {car: l308, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l207, cdr: {car: {car: l156, cdr: {car: {car: l69, cdr: {car: {car: l207, cdr: {car: {car: l304, cdr: l3}, cdr: {car: {car: l196, cdr: {car: {car: l269, cdr: {car: l304, cdr: {car: {car: l153, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: l199, cdr: l3}}, cdr: {car: l304, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l305, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l155, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l117.function(l297);
    l117.function(l296);
    l117.function(l295);
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
    l117.function(l199);
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
    ((l214).value = l299);
    ((l174).value = l331);
    ((l175).value = 788);
    ((l14).value = 206);
    return ((l231).value = 274);
})();
((l215).value = 331);
