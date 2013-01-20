var l1 = {name: "DEFMACRO"};
l1;
var l2 = {name: "DECLAIM"};
l2;
var l3 = {name: "NIL"};
(l3).value = l3;
var l4 = {name: "T"};
(l4).value = l4;
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
        return (l14).value = 0;
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
                    (l14).value = (function(){
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
                    })();
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
                                                v74 = (function(){
                                                    var tmp = v73;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    v72 = (function(){
                                                        var x1 = v72;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v74;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return l3.value;
                                                })();
                                                v73 = (function(){
                                                    var tmp = v73;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
                                                v80 = (function(){
                                                    var tmp = v79;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    v78 = (function(){
                                                        var x1 = v78;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v80;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1-x2;
                                                    })();
                                                    return l3.value;
                                                })();
                                                v79 = (function(){
                                                    var tmp = v79;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
                                        v88 = ({car: (function(){
                                            var tmp = v87;
                                            return tmp === l3.value? l3.value: tmp.car;
                                        })(), cdr: v88});
                                        v87 = (function(){
                                            var tmp = v87;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
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
var l65 = {name: "LIST-LENGTH"};
(function(){
    (l65).function = (function(v94){
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
                                            v93 = (function(){
                                                var x1 = v93;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                            v92 = (function(){
                                                var tmp = v92;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })();
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
    return l65;
})();
var l66 = {name: "LENGTH"};
(function(){
    (l66).function = (function(v96){
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
                        return l65.function(v95);
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
    return l66;
})();
var l67 = {name: "CONCAT-TWO"};
(function(){
    (l67).function = (function(v99){
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
    return l67;
})();
var l68 = {name: "MAPCAR"};
(function(){
    (l68).function = (function(v102){
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
                    })()), cdr: l68.function(v100, (function(){
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
    return l68;
})();
var l69 = {name: "IDENTITY"};
(function(){
    (l69).function = (function(v104){
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
    return l69;
})();
var l70 = {name: "COPY-LIST"};
(function(){
    (l70).function = (function(v106){
        ((v106)["fname"] = "COPY-LIST");
        return v106;
    })((function (v105){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function((function(){
                        var symbol = l69;
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
    return l70;
})();
var l71 = {name: "CODE-CHAR"};
(function(){
    (l71).function = (function(v108){
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
    return l71;
})();
var l72 = {name: "CHAR-CODE"};
(function(){
    (l72).function = (function(v110){
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
    return l72;
})();
var l73 = {name: "CHAR="};
(function(){
    (l73).function = (function(v113){
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
    return l73;
})();
var l74 = {name: "INTEGERP"};
(function(){
    (l74).function = (function(v115){
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
    return l74;
})();
var l75 = {name: "PLUSP"};
(function(){
    (l75).function = (function(v117){
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
    return l75;
})();
var l76 = {name: "MINUSP"};
(function(){
    (l76).function = (function(v119){
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
    return l76;
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
var l77 = {name: "NTHCDR"};
(function(){
    (l77).function = (function(v125){
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
                                    while((l75.function(v123) !== l3.value ? v124 : l3.value) !== l3.value){
                                        v123 = l22.function(v123);
                                        v124 = (function(){
                                            var tmp = v124;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
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
    return l77;
})();
var l78 = {name: "NTH"};
(function(){
    (l78).function = (function(v128){
        ((v128)["fname"] = "NTH");
        return v128;
    })((function (v126,v127){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l77.function(v126, v127);
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
    return l78;
})();
var l79 = {name: "LAST"};
(function(){
    (l79).function = (function(v130){
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
                                        v129 = (function(){
                                            var tmp = v129;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
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
    return l79;
})();
var l80 = {name: "BUTLAST"};
(function(){
    (l80).function = (function(v132){
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
                    })(), cdr: l80.function((function(){
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
    return l80;
})();
var l81 = {name: "MEMBER"};
(function(){
    (l81).function = (function(v135){
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
                                        v134 = (function(){
                                            var tmp = v134;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })();
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
    return l81;
})();
var l82 = {name: "REMOVE"};
(function(){
    (l82).function = (function(v138){
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
                        return l82.function(v136, (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l82.function(v136, (function(){
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
    return l82;
})();
var l83 = {name: "REMOVE-IF"};
(function(){
    (l83).function = (function(v141){
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
                        return l83.function(v139, (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l83.function(v139, (function(){
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
    return l83;
})();
var l84 = {name: "REMOVE-IF-NOT"};
(function(){
    (l84).function = (function(v144){
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
                        })(), cdr: l84.function(v142, (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })() : (function(){
                        return l84.function(v142, (function(){
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
    return l84;
})();
var l85 = {name: "DIGIT-CHAR-P"};
(function(){
    (l85).function = (function(v146){
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
    return l85;
})();
var l86 = {name: "SUBSEQ"};
(function(){
    (l86).function = (function(v150){
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
    return l86;
})();
var l87 = {name: "PARSE-INTEGER"};
(function(){
    (l87).function = (function(v155){
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
                                            v152 = (function(){
                                                var x1 = (function(){
                                                    var x1 = v152;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 10;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1*x2;
                                                })();
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = l85.function((function(){
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
                                            })();
                                            v153 = (function(){
                                                var x1 = v153;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
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
                    })(0,0,l66.function(v151));
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
    return l87;
})();
var l88 = {name: "SOME"};
(function(){
    (l88).function = (function(v162){
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
                                                v158 = (function(){
                                                    var x1 = v158;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
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
                        })(0,l66.function(v157));
                    })() : (l57.function(v157) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v160,v161){
                                        (function(){
                                            while(v160 !== l3.value){
                                                v161 = (function(){
                                                    var tmp = v160;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v156)(v161) !== l3.value ? (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 72, value: l4.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })() : l3.value);
                                                    return l3.value;
                                                })();
                                                v160 = (function(){
                                                    var tmp = v160;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
    return l88;
})();
var l89 = {name: "EVERY"};
(function(){
    (l89).function = (function(v169){
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
                                                v165 = (function(){
                                                    var x1 = v165;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
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
                        })(0,l66.function(v164));
                    })() : (l57.function(v164) !== l3.value ? (function(){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v167,v168){
                                        (function(){
                                            while(v167 !== l3.value){
                                                v168 = (function(){
                                                    var tmp = v167;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v163)(v168) !== l3.value ? l3.value : (function(){
                                                        return (function(){
                                                            throw ({type: 'block', id: 75, value: l3.value, message: 'Return from unknown block NIL.'})
                                                        })();
                                                    })());
                                                    return l3.value;
                                                })();
                                                v167 = (function(){
                                                    var tmp = v167;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
    return l89;
})();
var l90 = {name: "ASSOC"};
(function(){
    (l90).function = (function(v172){
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
                                        })() : v171 = (function(){
                                            var tmp = v171;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })());
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
    return l90;
})();
var l91 = {name: "STRING"};
(function(){
    (l91).function = (function(v174){
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
    return l91;
})();
var l92 = {name: "STRING="};
(function(){
    (l92).function = (function(v177){
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
    return l92;
})();
var l93 = {name: "FDEFINITION"};
(function(){
    (l93).function = (function(v179){
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
    return l93;
})();
var l94 = {name: "DISASSEMBLE"};
var l95 = {name: "WRITE-LINE"};
(function(){
    (l94).function = (function(v181){
        ((v181)["fname"] = "DISASSEMBLE");
        return v181;
    })((function (v180){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var symbol = l95;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l93.function(v180)).toString());
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
    return l94;
})();
var l96 = {name: "DOCUMENTATION"};
var l97 = {name: "FUNCTION"};
var l98 = {name: "VARIABLE"};
(function(){
    (l96).function = (function(v186){
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
                            return (l25.function(v184, l97) !== l3.value ? (function(){
                                return (function(v185){
                                    return (function(){
                                        var tmp = (v185)["docstring"];
                                        return tmp == undefined? l3.value: tmp ;
                                    })();
                                })(l93.function(v182));
                            })() : (l25.function(v184, l98) !== l3.value ? (function(){
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
    return l96;
})();
var l99 = {name: "*PACKAGE-LIST*"};
(function(){
    (((l99.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l99).value = l3.value;
    })());
    return l99;
})();
var l100 = {name: "LIST-ALL-PACKAGES"};
(function(){
    (l100).function = (function(v187){
        ((v187)["fname"] = "LIST-ALL-PACKAGES");
        return v187;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var symbol = l99;
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
    return l100;
})();
var l101 = {name: "MAKE-PACKAGE"};
var l102 = {name: "FIND-PACKAGE-OR-FAIL"};
(function(){
    (l101).function = (function(v192){
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
                        (l99).value = ({car: v190, cdr: (function(){
                            var symbol = l99;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()});
                        return v190;
                    })({},l68.function((function(){
                        var symbol = l102;
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
    return l101;
})();
var l103 = {name: "PACKAGEP"};
(function(){
    (l103).function = (function(v194){
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
    return l103;
})();
var l104 = {name: "FIND-PACKAGE"};
var l105 = {name: "PACKAGE-NAME"};
(function(){
    (l104).function = (function(v199){
        ((v199)["fname"] = "FIND-PACKAGE");
        return v199;
    })((function (v195){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l103.function(v195) !== l3.value ? (function(){
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
                                                v198 = (function(){
                                                    var tmp = v197;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (l92.function((function(){
                                                        var symbol = l105;
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
                                                v197 = (function(){
                                                    var tmp = v197;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l99;
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
                    })(l91.function(v195));
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
    return l104;
})();
(function(){
    (l102).function = (function(v202){
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
                    })(l104.function(v200));
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
    return l102;
})();
(function(){
    (l105).function = (function(v205){
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
                    })(l102.function(v203));
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
    return l105;
})();
var l106 = {name: "%PACKAGE-SYMBOLS"};
(function(){
    (l106).function = (function(v208){
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
                    })(l102.function(v206));
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
    return l106;
})();
var l107 = {name: "PACKAGE-USE-LIST"};
(function(){
    (l107).function = (function(v211){
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
                    })(l102.function(v209));
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
    return l107;
})();
var l108 = {name: "%PACKAGE-EXTERNAL-SYMBOLS"};
(function(){
    (l108).function = (function(v214){
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
                    })(l102.function(v212));
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
    return l108;
})();
var l109 = {name: "*COMMON-LISP-PACKAGE*"};
(function(){
    (((l109.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l109).value = l101.function("CL");
    })());
    return l109;
})();
var l110 = {name: "*USER-PACKAGE*"};
(function(){
    (((l110.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l110).value = l101.function("CL-USER", l42.function((function(){
            var symbol = l109;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })()));
    })());
    return l110;
})();
var l111 = {name: "*KEYWORD-PACKAGE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l111).value = l101.function("KEYWORD");
    })());
    return l111;
})();
var l112 = {name: "KEYWORDP"};
var l113 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l112).function = (function(v216){
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
                        var symbol = l113;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v215) === (function(){
                        var symbol = l111;
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
    return l112;
})();
var l114 = {name: "*PACKAGE*"};
(function(){
    (((l114.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l114).value = (function(){
            var symbol = l109;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
            return value;
        })();
    })());
    return l114;
})();
var l115 = {name: "IN-PACKAGE"};
l115;
var l116 = {name: "%INTERN-SYMBOL"};
(function(){
    (l116).function = (function(v219){
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
                            var symbol = l109;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                        return ((v218)[(v217).name] = v217);
                    })(l106.function((function(){
                        var symbol = l109;
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
    return l116;
})();
var l117 = {name: "%FIND-SYMBOL"};
(function(){
    (l117).function = (function(v227){
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
                                                    v225 = (function(){
                                                        var tmp = v224;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
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
                                                        })(l108.function(v225));
                                                        return l3.value;
                                                    })();
                                                    v224 = (function(){
                                                        var tmp = v224;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return ({car: l3.value, cdr: l3.value});
                                        })(l107.function(v222),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 96)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })());
                        })(l106.function(v222));
                    })(l102.function(v221));
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
    return l117;
})();
var l118 = {name: "FIND-SYMBOL"};
(function(){
    (l118).function = (function(v230){
        ((v230)["fname"] = "FIND-SYMBOL");
        return v230;
    })((function (v228,v229){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v229=(function(){
            var symbol = l114;
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
                        var tmp = l117.function(v228, v229);
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
    return l118;
})();
var l119 = {name: "INTERN"};
var l120 = {name: "EXPORT"};
(function(){
    (l119).function = (function(v237){
        ((v237)["fname"] = "INTERN");
        return v237;
    })((function (v231,v232){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v232=(function(){
            var symbol = l114;
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
                                        var symbol = l111;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())?l4.value: l3.value) !== l3.value ? (function(){
                                        ((v236)["value"] = v236);
                                        return (function(){
                                            var symbol = l120;
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
                            })(l106.function(v233)));
                        })(l117.function(v231, v233));
                    })(l102.function(v232));
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
    return l119;
})();
(function(){
    (l113).function = (function(v239){
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
    return l113;
})();
(function(){
    (l120).function = (function(v245){
        ((v245)["fname"] = "EXPORT");
        return v245;
    })((function (v240,v241){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v241=(function(){
            var symbol = l114;
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
                                                v244 = (function(){
                                                    var tmp = v243;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    ((v242)[(v244).name] = v244);
                                                    return l3.value;
                                                })();
                                                v243 = (function(){
                                                    var tmp = v243;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
                    })(l108.function(v241));
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
    return l120;
})();
var l121 = {name: "*NEWLINE*"};
(function(){
    (((l121.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l121).value = l91.function(l71.function(10));
    })());
    return l121;
})();
var l122 = {name: "CONCAT"};
(function(){
    (l122).function = (function(v247){
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
                        var symbol = l67;
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
    return l122;
})();
var l123 = {name: "CONCATF"};
l123;
var l124 = {name: "JOIN"};
(function(){
    (l124).function = (function(v250){
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
                        return l122.function((function(){
                            var tmp = v248;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v249, l124.function((function(){
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
    return l124;
})();
var l125 = {name: "JOIN-TRAILING"};
(function(){
    (l125).function = (function(v253){
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
                    return (l11.function(v251) !== l3.value ? "" : l122.function((function(){
                        var tmp = v251;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v252, l125.function((function(){
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
    return l125;
})();
var l126 = {name: "MAPCONCAT"};
(function(){
    (l126).function = (function(v256){
        ((v256)["fname"] = "MAPCONCAT");
        return v256;
    })((function (v254,v255){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.function(l68.function(v254, v255));
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
    return l126;
})();
var l127 = {name: "VECTOR-TO-LIST"};
(function(){
    (l127).function = (function(v262){
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
                                                    v258 = ({car: (function(){
                                                        var x = (v257)[v260];
                                                        if (x === undefined) throw 'Out of range';
                                                        return x;
                                                    })(), cdr: v258});
                                                    return l3.value;
                                                })();
                                                v260 = (function(){
                                                    var x1 = v260;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
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
                    })(l3.value,l66.function(v257));
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
    return l127;
})();
var l128 = {name: "LIST-TO-VECTOR"};
(function(){
    (l128).function = (function(v268){
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
                                                v267 = (function(){
                                                    var tmp = v266;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(){
                                                        var x = v264;
                                                        var i = v265;
                                                        if (i < 0 || i >= x.length) throw 'Out of range';
                                                        return x[i] = v267;
                                                    })();
                                                    v265 = (function(){
                                                        var x1 = v265;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })();
                                                    return l3.value;
                                                })();
                                                v266 = (function(){
                                                    var tmp = v266;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
                        for (var i = 0; i < l66.function(v263); i++)
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
    return l128;
})();
var l129 = {name: "INDENT"};
(function(){
    (l129).function = (function(v275){
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
                            (l75.function(l66.function(v270)) !== l3.value ? (function(){
                                return v271 = l122.function(v271, (function(){
                                    return "    ";
                                })());
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
                                                    return v271 = l122.function(v271, (function(){
                                                        return v274;
                                                    })());
                                                })(((l73.function((function(){
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
                                                })() !== l3.value ? l26.function(l73.function((function(){
                                                    var string = v270;
                                                    var index = l21.function(v272);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l122.function(l91.function(10), "    ") : l91.function((function(){
                                                    var string = v270;
                                                    var index = v272;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                v272 = (function(){
                                                    var x1 = v272;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = 1;
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return x1+x2;
                                                })();
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
                        })("",0,l66.function(v270));
                    })(l124.function(v269));
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
    return l129;
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
                    })() : (l76.function(v276) !== l3.value ? (function(){
                        return l122.function("-", l16.function((function(){
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
                                                v277 = ({car: (function(){
                                                    var x = v276;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v277});
                                                v276 = l24.function(v276, 10);
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
                            return l124.function(l68.function((function (v278){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l91.function((function(){
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
var l130 = {name: "JS!BOOL"};
var l131 = {name: "LS-COMPILE"};
(function(){
    (l130).function = (function(v281){
        ((v281)["fname"] = "JS!BOOL");
        return v281;
    })((function (v280){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("(", v280, "?", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l131;
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
    return l130;
})();
var l132 = {name: "JS!SELFCALL"};
l132;
var l133 = {name: "PRIN1-TO-STRING"};
var l134 = {name: "ESCAPE-STRING"};
(function(){
    (l133).function = (function(v287){
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
                            var tmp = l117.function((v282).name, (function(){
                                var symbol = l114;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v282).name : (function(v283,v284){
                            return l122.function((((v283 === l104.function("KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l105.function(v283)), ":", v284);
                        })(l113.function(v282),(v282).name));
                    })() : (l74.function(v282) !== l3.value ? (function(){
                        return l16.function(v282);
                    })() : (((typeof(v282) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", (function(){
                            var symbol = l134;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v282), "\"");
                    })() : (((typeof v282 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v285){
                            return (v285 !== l3.value ? l122.function("#<FUNCTION ", v285, ">") : l122.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v282)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l57.function(v282) !== l3.value ? (function(){
                        return l122.function("(", l125.function(l68.function((function(){
                            var symbol = l133;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l80.function(v282)), " "), (function(v286){
                            return (l11.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l133.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l122.function(l133.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l133.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l79.function(v282)), ")");
                    })() : (((function(){
                        var x = v282;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("#", l133.function(l127.function(v282)));
                    })() : (l103.function(v282) !== l3.value ? (function(){
                        return l122.function("#<PACKAGE ", l105.function(v282), ">");
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
    return l133;
})();
(function(){
    (l95).function = (function(v289){
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
                            var symbol = l121;
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
    return l95;
})();
var l135 = {name: "WARN"};
(function(){
    (l135).function = (function(v291){
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
                    return l95.function(v290);
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
    return l135;
})();
var l136 = {name: "PRINT"};
(function(){
    (l136).function = (function(v293){
        ((v293)["fname"] = "PRINT");
        return v293;
    })((function (v292){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l95.function(l133.function(v292));
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
    return l136;
})();
var l137 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l137).function = (function(v295){
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
    return l137;
})();
var l138 = {name: "%PEEK-CHAR"};
(function(){
    (l138).function = (function(v297){
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
                        var x2 = l66.function((function(){
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
    return l138;
})();
var l139 = {name: "%READ-CHAR"};
(function(){
    (l139).function = (function(v300){
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
                        var x2 = l66.function((function(){
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
    return l139;
})();
var l140 = {name: "WHITESPACEP"};
(function(){
    (l140).function = (function(v304){
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
                            return (v303 !== l3.value ? v303 : l73.function(v301, 9));
                        })(l73.function(v301, 10)));
                    })(l73.function(v301, 32));
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
    return l140;
})();
var l141 = {name: "SKIP-WHITESPACES"};
(function(){
    (l141).function = (function(v307){
        ((v307)["fname"] = "SKIP-WHITESPACES");
        return v307;
    })((function (v305){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v306){
                        v306 = l138.function(v305);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v306 !== l3.value ? l140.function(v306) : l3.value) !== l3.value){
                                            l139.function(v305);
                                            v306 = l138.function(v305);
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
    return l141;
})();
var l142 = {name: "TERMINALP"};
(function(){
    (l142).function = (function(v312){
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
                                return (v311 !== l3.value ? v311 : l73.function(40, v308));
                            })(l73.function(41, v308)));
                        })(l140.function(v308)));
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
    return l142;
})();
var l143 = {name: "READ-UNTIL"};
(function(){
    (l143).function = (function(v317){
        ((v317)["fname"] = "READ-UNTIL");
        return v317;
    })((function (v313,v314){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v315,v316){
                        v316 = l138.function(v313);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v316 !== l3.value ? l26.function((v314)(v316)) : l3.value) !== l3.value){
                                            v315 = l122.function(v315, l91.function(v316));
                                            l139.function(v313);
                                            v316 = l138.function(v313);
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
    return l143;
})();
var l144 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l144).function = (function(v321){
        ((v321)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v321;
    })((function (v318){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v319){
                        l141.function(v318);
                        v319 = l138.function(v318);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v319 !== l3.value ? l73.function(v319, 59) : l3.value) !== l3.value){
                                            l143.function(v318, (function (v320){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l73.function(v320, 10);
                                            
                                            }));
                                            l141.function(v318);
                                            v319 = l138.function(v318);
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
    return l144;
})();
var l145 = {name: "%READ-LIST"};
var l146 = {name: "LS-READ"};
(function(){
    (l145).function = (function(v325){
        ((v325)["fname"] = "%READ-LIST");
        return v325;
    })((function (v322){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l144.function(v322);
                    return (function(v323){
                        return (l11.function(v323) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l73.function(v323, 41) !== l3.value ? (function(){
                            l139.function(v322);
                            return l3.value;
                        })() : (l73.function(v323, 46) !== l3.value ? (function(){
                            l139.function(v322);
                            return (function(v324){
                                l144.function(v322);
                                (l73.function(l139.function(v322), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v324;
                            })((function(){
                                var symbol = l146;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v322));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l146;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v322), cdr: l145.function(v322)});
                        })())));
                    })(l138.function(v322));
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
    return l145;
})();
var l147 = {name: "READ-STRING"};
(function(){
    (l147).function = (function(v329){
        ((v329)["fname"] = "READ-STRING");
        return v329;
    })((function (v326){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v327,v328){
                        v328 = l139.function(v326);
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
                                                return v328 = l139.function(v326);
                                            })() : l3.value);
                                            v327 = l122.function(v327, l91.function(v328));
                                            v328 = l139.function(v326);
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
    return l147;
})();
var l148 = {name: "READ-SHARP"};
(function(){
    (l148).function = (function(v334){
        ((v334)["fname"] = "READ-SHARP");
        return v334;
    })((function (v330){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l139.function(v330);
                    return (function(v331){
                        return (l25.function(v331, 39) !== l3.value ? (function(){
                            return l42.function(l97, (function(){
                                var symbol = l146;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v330));
                        })() : (l25.function(v331, 40) !== l3.value ? (function(){
                            return l128.function(l145.function(v330));
                        })() : (l25.function(v331, 92) !== l3.value ? (function(){
                            return (function(v332){
                                return (l92.function(v332, "space") !== l3.value ? (function(){
                                    return l72.function(32);
                                })() : (l92.function(v332, "tab") !== l3.value ? (function(){
                                    return l72.function(9);
                                })() : (l92.function(v332, "newline") !== l3.value ? (function(){
                                    return l72.function(10);
                                })() : (function(){
                                    return l72.function((function(){
                                        var string = v332;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l122.function(l91.function(l139.function(v330)), l143.function(v330, (function(){
                                var symbol = l142;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l25.function(v331, 43) !== l3.value ? (function(){
                            return (function(v333){
                                return (l92.function(v333, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l146;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v330);
                                    return (function(){
                                        var symbol = l146;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v330);
                                })() : (l92.function(v333, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l146;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v330);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l143.function(v330, (function(){
                                var symbol = l142;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(l139.function(v330));
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
    return l148;
})();
var l149 = {name: "READ-SYMBOL"};
(function(){
    (l149).function = (function(v342){
        ((v342)["fname"] = "READ-SYMBOL");
        return v342;
    })((function (v335){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v336,v337,v338,v339,v340){
                        v340 = 0;
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
                                        })() !== l3.value ? l26.function(l73.function((function(){
                                            var string = v335;
                                            var index = v340;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            v340 = (function(){
                                                var x1 = v340;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
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
                            v338 = v335;
                            v337 = (function(){
                                var symbol = l114;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            return v339 = l4.value;
                        })() : (function(){
                            (l23.function(v340) !== l3.value ? v337 = "KEYWORD" : v337 = (function(){
                                var x = l86.function(v335, 0, v340);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })());
                            v340 = (function(){
                                var x1 = v340;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })();
                            (l73.function((function(){
                                var string = v335;
                                var index = v340;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                v339 = l4.value;
                                return v340 = (function(){
                                    var x1 = v340;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                            })() : l3.value);
                            return v338 = l86.function(v335, v340);
                        })());
                        v338 = (function(){
                            var x = v338;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })();
                        v337 = l104.function(v337);
                        return ((function(v341){
                            return (v341 !== l3.value ? v341 : ((v337 === l104.function("KEYWORD"))?l4.value: l3.value));
                        })(v339) !== l3.value ? l119.function(v338, v337) : l118.function(v338, v337));
                    })(l66.function(v335),l3.value,l3.value,l3.value,l3.value);
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
    return l149;
})();
var l150 = {name: "*EOF*"};
(function(){
    (((l150.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l150).value = l15.function();
    })());
    return l150;
})();
var l151 = {name: "QUOTE"};
var l152 = {name: "BACKQUOTE"};
var l153 = {name: "UNQUOTE-SPLICING"};
var l154 = {name: "UNQUOTE"};
(function(){
    (l146).function = (function(v347){
        ((v347)["fname"] = "LS-READ");
        return v347;
    })((function (v343){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l144.function(v343);
                    return (function(v344){
                        return ((function(v345){
                            return (v345 !== l3.value ? v345 : l73.function(v344, 41));
                        })(l11.function(v344)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l150;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l73.function(v344, 40) !== l3.value ? (function(){
                            l139.function(v343);
                            return l145.function(v343);
                        })() : (l73.function(v344, 39) !== l3.value ? (function(){
                            l139.function(v343);
                            return l42.function(l151, l146.function(v343));
                        })() : (l73.function(v344, 96) !== l3.value ? (function(){
                            l139.function(v343);
                            return l42.function(l152, l146.function(v343));
                        })() : (l73.function(v344, 34) !== l3.value ? (function(){
                            l139.function(v343);
                            return l147.function(v343);
                        })() : (l73.function(v344, 44) !== l3.value ? (function(){
                            l139.function(v343);
                            return (l25.function(l138.function(v343), 64) !== l3.value ? (function(){
                                l139.function(v343);
                                return l42.function(l153, l146.function(v343));
                            })() : l42.function(l154, l146.function(v343)));
                        })() : (l73.function(v344, 35) !== l3.value ? (function(){
                            return l148.function(v343);
                        })() : (function(){
                            return (function(v346){
                                return (l89.function((function(){
                                    var symbol = l85;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v346) !== l3.value ? l87.function(v346) : l149.function(v346));
                            })(l143.function(v343, (function(){
                                var symbol = l142;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l138.function(v343));
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
    return l146;
})();
var l155 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l155).function = (function(v349){
        ((v349)["fname"] = "LS-READ-FROM-STRING");
        return v349;
    })((function (v348){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l146.function(l137.function(v348));
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
    return l155;
})();
var l156 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l156.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l156).value = l3;
    })());
    return l156;
})();
var l157 = {name: "MAKE-BINDING"};
(function(){
    (l157).function = (function(v354){
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
    return l157;
})();
var l158 = {name: "BINDING-NAME"};
(function(){
    (l158).function = (function(v356){
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
    return l158;
})();
var l159 = {name: "BINDING-TYPE"};
(function(){
    (l159).function = (function(v358){
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
    return l159;
})();
var l160 = {name: "BINDING-VALUE"};
(function(){
    (l160).function = (function(v360){
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
    return l160;
})();
var l161 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l161).function = (function(v362){
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
    return l161;
})();
var l162 = {name: "SET-BINDING-VALUE"};
(function(){
    (l162).function = (function(v365){
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
    return l162;
})();
var l163 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l163).function = (function(v368){
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
    return l163;
})();
var l164 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l164).function = (function(v371){
        ((v371)["fname"] = "PUSH-BINDING-DECLARATION");
        return v371;
    })((function (v369,v370){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l163.function(v370, ({car: v369, cdr: l161.function(v370)}));
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
    return l164;
})();
var l165 = {name: "MAKE-LEXENV"};
(function(){
    (l165).function = (function(v372){
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
    return l165;
})();
var l166 = {name: "COPY-LEXENV"};
(function(){
    (l166).function = (function(v374){
        ((v374)["fname"] = "COPY-LEXENV");
        return v374;
    })((function (v373){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l70.function(v373);
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
    return l166;
})();
var l167 = {name: "PUSH-TO-LEXENV"};
var l168 = {name: "BLOCK"};
var l169 = {name: "GOTAG"};
(function(){
    (l167).function = (function(v379){
        ((v379)["fname"] = "PUSH-TO-LEXENV");
        return v379;
    })((function (v375,v376,v377){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v378){
                        return (l25.function(v378, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = v376;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: (function(){
                                    var tmp = v376;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l25.function(v378, l97) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v376;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: l32.function(v376)}));
                            })();
                        })() : (l25.function(v378, l168) !== l3.value ? (function(){
                            return (function(){
                                var x = l34.function(v376);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v375, cdr: l35.function(v376)}));
                            })();
                        })() : (l25.function(v378, l169) !== l3.value ? (function(){
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
    return l167;
})();
var l170 = {name: "EXTEND-LEXENV"};
(function(){
    (l170).function = (function(v386){
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
                                                v385 = (function(){
                                                    var tmp = v384;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    l167.function(v385, v383, v382);
                                                    return l3.value;
                                                })();
                                                v384 = (function(){
                                                    var tmp = v384;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
                    })(l166.function(v381));
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
    return l170;
})();
var l171 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l171).function = (function(v391){
        ((v391)["fname"] = "LOOKUP-IN-LEXENV");
        return v391;
    })((function (v387,v388,v389){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l90.function(v387, (function(v390){
                        return (l25.function(v390, l98) !== l3.value ? (function(){
                            return l38.function(v388);
                        })() : (l25.function(v390, l97) !== l3.value ? (function(){
                            return l39.function(v388);
                        })() : (l25.function(v390, l168) !== l3.value ? (function(){
                            return l40.function(v388);
                        })() : (l25.function(v390, l169) !== l3.value ? (function(){
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
    return l171;
})();
var l172 = {name: "*ENVIRONMENT*"};
(function(){
    (((l172.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l172).value = l165.function();
    })());
    return l172;
})();
var l173 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l173.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l173).value = 0;
    })());
    return l173;
})();
var l174 = {name: "GVARNAME"};
(function(){
    (l174).function = (function(v393){
        ((v393)["fname"] = "GVARNAME");
        return v393;
    })((function (v392){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("v", l16.function((l173).value = (function(){
                        var x1 = (function(){
                            var symbol = l173;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })()));
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
    return l174;
})();
var l175 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l175).function = (function(v395){
        ((v395)["fname"] = "TRANSLATE-VARIABLE");
        return v395;
    })((function (v394){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l160.function(l171.function(v394, (function(){
                        var symbol = l172;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98));
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
    return l175;
})();
var l176 = {name: "EXTEND-LOCAL-ENV"};
var l177 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l176).function = (function(v401){
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
                                                v399 = (function(){
                                                    var tmp = v398;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v400){
                                                        return l167.function(v400, v397, l98);
                                                    })(l157.function(v399, l177, l174.function(v399)));
                                                    return l3.value;
                                                })();
                                                v398 = (function(){
                                                    var tmp = v398;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
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
                    })(l166.function((function(){
                        var symbol = l172;
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
    return l176;
})();
var l178 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l178.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l178).value = l3.value;
    })());
    return l178;
})();
var l179 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l179).function = (function(v403){
        ((v403)["fname"] = "TOPLEVEL-COMPILATION");
        return v403;
    })((function (v402){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l178).value = ({car: v402, cdr: (function(){
                        var symbol = l178;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l179;
})();
var l180 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l180).function = (function(v405){
        ((v405)["fname"] = "NULL-OR-EMPTY-P");
        return v405;
    })((function (v404){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l23.function(l66.function(v404));
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
    return l180;
})();
var l181 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l181).function = (function(v406){
        ((v406)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v406;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l83.function((function(){
                        var symbol = l180;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l178;
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
    return l181;
})();
var l182 = {name: "%COMPILE-DEFMACRO"};
var l183 = {name: "MACRO"};
(function(){
    (l182).function = (function(v409){
        ((v409)["fname"] = "%COMPILE-DEFMACRO");
        return v409;
    })((function (v407,v408){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l179.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l151), l42.function(v407))));
                    return l167.function(l157.function(v407, l183, v408), (function(){
                        var symbol = l172;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97);
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
    return l182;
})();
var l184 = {name: "GLOBAL-BINDING"};
(function(){
    (l184).function = (function(v415){
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
                            l167.function(v414, (function(){
                                var symbol = l172;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v412);
                            return v414;
                        })(l157.function(v410, v411, l3.value)));
                    })(l171.function(v410, (function(){
                        var symbol = l172;
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
    return l184;
})();
var l185 = {name: "CLAIMP"};
(function(){
    (l185).function = (function(v420){
        ((v420)["fname"] = "CLAIMP");
        return v420;
    })((function (v416,v417,v418){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v419){
                        return (v419 !== l3.value ? l81.function(v418, l161.function(v419)) : l3.value);
                    })(l171.function(v416, (function(){
                        var symbol = l172;
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
    return l185;
})();
var l186 = {name: "!PROCLAIM"};
var l187 = {name: "SPECIAL"};
var l188 = {name: "NOTINLINE"};
var l189 = {name: "CONSTANT"};
var l190 = {name: "NON-OVERRIDABLE"};
(function(){
    (l186).function = (function(v435){
        ((v435)["fname"] = "!PROCLAIM");
        return v435;
    })((function (v421){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v422){
                        return (l25.function(v422, l187) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v423,v424){
                                            (function(){
                                                while(v423 !== l3.value){
                                                    v424 = (function(){
                                                        var tmp = v423;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v425){
                                                            return l164.function(l187, v425);
                                                        })(l184.function(v424, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v423 = (function(){
                                                        var tmp = v423;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
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
                        })() : (l25.function(v422, l188) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v426,v427){
                                            (function(){
                                                while(v426 !== l3.value){
                                                    v427 = (function(){
                                                        var tmp = v426;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v428){
                                                            return l164.function(l188, v428);
                                                        })(l184.function(v427, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v426 = (function(){
                                                        var tmp = v426;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
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
                        })() : (l25.function(v422, l189) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v429,v430){
                                            (function(){
                                                while(v429 !== l3.value){
                                                    v430 = (function(){
                                                        var tmp = v429;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v431){
                                                            return l164.function(l189, v431);
                                                        })(l184.function(v430, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v429 = (function(){
                                                        var tmp = v429;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
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
                        })() : (l25.function(v422, l190) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v432,v433){
                                            (function(){
                                                while(v432 !== l3.value){
                                                    v433 = (function(){
                                                        var tmp = v432;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v434){
                                                            return l164.function(l190, v434);
                                                        })(l184.function(v433, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v432 = (function(){
                                                        var tmp = v432;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
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
    return l186;
})();
var l191 = {name: "PROCLAIM"};
(l191).function = (function(){
    var symbol = l186;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l192 = {name: "*COMPILATIONS*"};
(function(){
    (((l192.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l192).value = l3.value;
    })());
    return l192;
})();
var l193 = {name: "DEFINE-COMPILATION"};
l193;
var l194 = {name: "IF"};
(l192).value = ({car: l42.function(l194, (function (v436,v437,v438){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v436), " !== ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v437), " : ", (function(){
                    var symbol = l131;
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l195 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l196 = {name: "&OPTIONAL"};
var l197 = {name: "&REST"};
var l198 = {car: l196, cdr: {car: l197, cdr: l3}};
(function(){
    (((l195.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l195).value = l198;
    })());
    return l195;
})();
var l199 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l199).function = (function(v441){
        ((v441)["fname"] = "LIST-UNTIL-KEYWORD");
        return v441;
    })((function (v439){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v440){
                        return (v440 !== l3.value ? v440 : l81.function((function(){
                            var tmp = v439;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l195;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v439)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v439;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l199.function((function(){
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
    return l199;
})();
var l200 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l200).function = (function(v443){
        ((v443)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v443;
    })((function (v442){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l199.function(v442);
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
    return l200;
})();
var l201 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l201).function = (function(v445){
        ((v445)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v445;
    })((function (v444){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function((function(){
                        var symbol = l56;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l199.function((function(){
                        var tmp = l81.function(l196, v444);
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
    return l201;
})();
var l202 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l202).function = (function(v447){
        ((v447)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v447;
    })((function (v446){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l68.function((function(){
                        var symbol = l29;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l201.function(v446));
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
    return l202;
})();
var l203 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l203).function = (function(v450){
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
                    })(l199.function((function(){
                        var tmp = l81.function(l197, v448);
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
    return l203;
})();
var l204 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l204).function = (function(v453){
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
                    return (v452 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("var func = ", l124.function(v451), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v452, "';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l124.function(v451));
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
    return l204;
})();
var l205 = {name: "LAMBDA"};
var l206 = {name: "LS-COMPILE-BLOCK"};
(l192).value = ({car: l42.function(l205, (function (v455){
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
                        v459 = (function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return v454 = (function(){
                            var tmp = v454;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                    })() : l3.value);
                    return (function(v460,v461,v462){
                        try {
                            var tmp;
                            tmp = l172.value;
                            l172.value = v462;
                            v462 = tmp;
                            return l204.function(v459, "(function (", l124.function(l68.function((function(){
                                var symbol = l175;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v456, v457)), ","), "){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l129.function((v456 !== l3.value ? l122.function("if (arguments.length < ", l16.function(v460), ") throw 'too few arguments';", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l26.function(v458) !== l3.value ? l122.function("if (arguments.length > ", l16.function((function(){
                                var x1 = v460;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v461;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v457 !== l3.value ? l122.function("switch(arguments.length){", (function(){
                                var symbol = l121;
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
                                                            v464 = ({car: l122.function("case ", l16.function((function(){
                                                                var x1 = v465;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = v460;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })()), ":", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l175.function((function(){
                                                                var tmp = v466;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l131;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l32.function(v466)), ";", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v464});
                                                            return v465 = (function(){
                                                                var x1 = v465;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = 1;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })();
                                                        })(l78.function(v465, v463));
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
                                    v464 = ({car: l122.function("default: break;", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v464});
                                    return l124.function(l64.function(v464));
                                })();
                            })(l201.function(v455),l3.value,0), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v458 !== l3.value ? (function(v467){
                                return l122.function("var ", v467, "= ", (function(){
                                    var symbol = l131;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l121;
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
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l129.function(v467, " = ", "{car: arguments[i], cdr: "), v467, "};", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l175.function(v458)) : ""), (function(){
                                var symbol = l206;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v454, l4.value)), (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l172.value = v462;
                        }
                    })(l66.function(v456),l66.function(v457),l176.function(l62.function(l56.function(v458), v456, v457)));
                })(l200.function(v455),l202.function(v455),l203.function(v455),l3.value);
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l207 = {name: "SETQ"};
var l208 = {name: "SET"};
(l192).value = ({car: l42.function(l207, (function (v468,v469){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v470){
                    return (((l159.function(v470) === l177)?l4.value: l3.value) !== l3.value ? l122.function(l160.function(v470), " = ", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v469)) : (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l208), l42.function(l62.function(l42.function(l151), l42.function(v468))), l42.function(v469))));
                })(l171.function(v468, (function(){
                    var symbol = l172;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 176)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l209 = {name: "JS-VREF"};
(l192).value = ({car: l42.function(l209, (function (v471){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v471;
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l210 = {name: "JS-VSET"};
(l192).value = ({car: l42.function(l210, (function (v472,v473){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(", v472, " = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v473), ")");
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l134).function = (function(v480){
        ((v480)["fname"] = "ESCAPE-STRING");
        return v480;
    })((function (v474){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v475,v476,v477){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v476;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v477;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v478){
                                                ((function(v479){
                                                    return (v479 !== l3.value ? v479 : l73.function(v478, 92));
                                                })(l73.function(v478, 34)) !== l3.value ? (function(){
                                                    return v475 = l122.function(v475, "\\");
                                                })() : l3.value);
                                                (l73.function(v478, 10) !== l3.value ? (function(){
                                                    v475 = l122.function(v475, "\\");
                                                    return v478 = 110;
                                                })() : l3.value);
                                                return v475 = l122.function(v475, l91.function(v478));
                                            })((function(){
                                                var string = v474;
                                                var index = v476;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v476 = (function(){
                                                var x1 = v476;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = 1;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return x1+x2;
                                            })();
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 180)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v475;
                    })("",0,l66.function(v474));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 179)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l134;
})();
var l211 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l211.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l211).value = l3.value;
    })());
    return l211;
})();
var l212 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l212.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l212).value = 0;
    })());
    return l212;
})();
var l213 = {name: "GENLIT"};
(function(){
    (l213).function = (function(v481){
        ((v481)["fname"] = "GENLIT");
        return v481;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("l", l16.function((l212).value = (function(){
                        var x1 = (function(){
                            var symbol = l212;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = 1;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return x1+x2;
                    })()));
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
    return l213;
})();
var l214 = {name: "LITERAL"};
(function(){
    (l214).function = (function(v492){
        ((v492)["fname"] = "LITERAL");
        return v492;
    })((function (v482,v483){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v483=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l74.function(v482) !== l3.value ? (function(){
                        return l16.function(v482);
                    })() : (((typeof(v482) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", l134.function(v482), "\"");
                    })() : (((function(){
                        var tmp = v482;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v484){
                            return (v484 !== l3.value ? v484 : (function(v485,v486){
                                (l211).value = ({car: ({car: v482, cdr: v485}), cdr: (function(){
                                    var symbol = l211;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                l179.function(l122.function("var ", v485, " = ", v486));
                                return v485;
                            })(l213.function(),(function(){
                                var symbol = l131;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l119), l42.function((v482).name), l42.function(l105.function(l113.function(v482)))))));
                        })((function(){
                            var tmp = l90.function(v482, (function(){
                                var symbol = l211;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v482;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v487){
                            return (v483 !== l3.value ? v487 : (function(v488){
                                l179.function(l122.function("var ", v488, " = ", v487));
                                return v488;
                            })(l213.function()));
                        })(l122.function("{car: ", l214.function((function(){
                            var tmp = v482;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l214.function((function(){
                            var tmp = v482;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : (((function(){
                        var x = v482;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v489){
                            return (function(v490){
                                return (v483 !== l3.value ? v490 : (function(v491){
                                    l179.function(l122.function("var ", v491, " = ", v490));
                                    return v491;
                                })(l213.function()));
                            })(l122.function("[", l124.function(l68.function((function(){
                                var symbol = l214;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), v489), ", "), "]"));
                        })(l127.function(v482));
                    })() : l3.value)))));
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
    return l214;
})();
(l192).value = ({car: l42.function(l151, (function (v493){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l214.function(v493);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 183)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l215 = {name: "%WHILE"};
(l192).value = ({car: l42.function(l215, (function (v495){
    if (arguments.length < 1) throw 'too few arguments';
    var v494= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v494 = {car: arguments[i], cdr: 
    v494};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("while(", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v495), " !== ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function((function(){
                    var symbol = l206;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v494)), "}", "return ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 184)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l216 = {name: "SYMBOL-FUNCTION"};
(l192).value = ({car: l42.function(l97, (function (v496){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l57.function(v496) !== l3.value ? (((function(){
                    var tmp = v496;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l205)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v496);
                })() : (((function(){
                    var tmp = v496;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l216), l42.function(l62.function(l42.function(l151), l42.function(v496)))));
                })() : l3.value));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l217 = {name: "EVAL-WHEN-COMPILE"};
var l218 = {name: "EVAL"};
var l219 = {name: "PROGN"};
(l192).value = ({car: l42.function(l217, (function (){
    var v497= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v497 = {car: arguments[i], cdr: 
    v497};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l218;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l219, cdr: v497}));
                return l3.value;
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l220 = {name: "DEFINE-TRANSFORMATION"};
l220;
(l192).value = ({car: l42.function(l219, (function (){
    var v498= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v498 = {car: arguments[i], cdr: 
    v498};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function((function(){
                    var symbol = l206;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v498, l4.value)), "})()");
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l221 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l221).function = (function(v500){
        ((v500)["fname"] = "SPECIAL-VARIABLE-P");
        return v500;
    })((function (v499){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l185.function(v499, l98, l187);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 188)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l221;
})();
var l222 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l222).function = (function(v507){
        ((v507)["fname"] = "LET-BINDING-WRAPPER");
        return v507;
    })((function (v501,v502){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v501) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 189, value: v502, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l122.function("try {", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("var tmp;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l126.function((function (v503){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v504){
                            return l122.function("tmp = ", v504, ".value;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v504, ".value = ", (function(){
                                var tmp = v503;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v503;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l151), l42.function((function(){
                            var tmp = v503;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v501), v502, (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "finally {", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function(l126.function((function (v505){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v506){
                            return l122.function(v506, ".value", " = ", (function(){
                                var tmp = v505;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l151), l42.function((function(){
                            var tmp = v505;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v501)), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 189)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l222;
})();
var l223 = {name: "LET"};
(l192).value = ({car: l42.function(l223, (function (v509){
    if (arguments.length < 1) throw 'too few arguments';
    var v508= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v508 = {car: arguments[i], cdr: 
    v508};
    return (function(){
        try {
            return (function(){
                return (function(v510){
                    return (function(v511){
                        return (function(v512,v514,v513){
                            try {
                                var tmp;
                                tmp = l172.value;
                                l172.value = v514;
                                v514 = tmp;
                                return l122.function("(function(", l124.function(l68.function((function (v515){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (l221.function(v515) !== l3.value ? (function(v516){
                                        v513 = ({car: ({car: v515, cdr: v516}), cdr: v513});
                                        return v516;
                                    })(l174.function(v515)) : l175.function(v515));
                                
                                }), v511), ","), "){", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v517){
                                    return l129.function(l222.function(v513, v517));
                                })((function(){
                                    var symbol = l206;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v508, l4.value)), "})(", l124.function(v512, ","), ")");
                            }
                            finally {
                                l172.value = v514;
                            }
                        })(l68.function((function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l68.function((function(){
                            var symbol = l39;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v510)),l176.function(l83.function((function(){
                            var symbol = l221;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v511)),l3.value);
                    })(l68.function((function(){
                        var symbol = l38;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v510));
                })(l68.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v509));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l224 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l224).function = (function(v524){
        ((v524)["fname"] = "LET*-INITIALIZE-VALUE");
        return v524;
    })((function (v518){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v519,v520){
                        return (l221.function(v519) !== l3.value ? l122.function((function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l207), l42.function(v519), l42.function(v520))), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(v521){
                            return (function(v522){
                                return (function(v523){
                                    l167.function(v522, (function(){
                                        var symbol = l172;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(), l98);
                                    return v523;
                                })(l122.function("var ", v521, " = ", (function(){
                                    var symbol = l131;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v520), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()));
                            })(l157.function(v519, l98, v521));
                        })(l174.function(v519)));
                    })(l38.function(v518),l39.function(v518));
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
var l225 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l225).function = (function(v533){
        ((v533)["fname"] = "LET*-BINDING-WRAPPER");
        return v533;
    })((function (v525,v526){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v525) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 192, value: v526, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v528){
                        return l122.function("try {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l126.function((function (v529){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v530){
                                return l122.function("var ", (function(){
                                    var tmp = v529;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v530, ".value;", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l131;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l151), l42.function((function(){
                                var tmp = v529;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v528), v526), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l126.function((function (v531){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v532){
                                return l122.function(v532, ".value", " = ", (function(){
                                    var tmp = v531;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l131;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l151), l42.function((function(){
                                var tmp = v531;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v528)), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l68.function((function (v527){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return ({car: v527, cdr: l174.function(v527)});
                    
                    }), l84.function((function(){
                        var symbol = l221;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v525)));
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
var l226 = {name: "LET*"};
(l192).value = ({car: l42.function(l226, (function (v535){
    if (arguments.length < 1) throw 'too few arguments';
    var v534= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v534 = {car: arguments[i], cdr: 
    v534};
    return (function(){
        try {
            return (function(){
                return (function(v536,v537){
                    try {
                        var tmp;
                        tmp = l172.value;
                        l172.value = v537;
                        v537 = tmp;
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function((function(v538,v539){
                            return l225.function(v538, v539);
                        })(l84.function((function(){
                            var symbol = l221;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l68.function((function(){
                            var symbol = l38;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v536)),l122.function(l126.function((function(){
                            var symbol = l224;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v536), (function(){
                            var symbol = l206;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v534, l4.value)))), "})()");
                    }
                    finally {
                        l172.value = v537;
                    }
                })(l68.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v535),l166.function((function(){
                    var symbol = l172;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l227 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l227.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l227).value = 0;
    })());
    return l227;
})();
(l192).value = ({car: l42.function(l168, (function (v541){
    if (arguments.length < 1) throw 'too few arguments';
    var v540= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v540 = {car: arguments[i], cdr: 
    v540};
    return (function(){
        try {
            return (function(){
                return (function(v542){
                    return (function(v543){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("try {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v544){
                            try {
                                var tmp;
                                tmp = l172.value;
                                l172.value = v544;
                                v544 = tmp;
                                return l129.function("return ", (function(){
                                    var symbol = l131;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l42.function(l219), v540)), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l172.value = v544;
                            }
                        })(l170.function(l42.function(v543), (function(){
                            var symbol = l172;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l168)), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v542, ")", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        return cf.value;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    else", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "        throw cf;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })(l157.function(v541, l168, v542));
                })(l16.function((l227).value = (function(){
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
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 194)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l228 = {name: "RETURN-FROM"};
(l192).value = ({car: l42.function(l228, (function (v545,v546){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v546=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v547){
                    return (v547 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("throw ({", "type: 'block', ", "id: ", l160.function(v547), ", ", "value: ", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v546), ", ", "message: 'Return from unknown block ", (v545).name, ".'", "})"), "})()") : (function(){
                        throw l122.function("Unknown block `", (v545).name, "'.");
                    })());
                })(l171.function(v545, (function(){
                    var symbol = l172;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l168));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l229 = {name: "CATCH"};
(l192).value = ({car: l42.function(l229, (function (v549){
    if (arguments.length < 1) throw 'too few arguments';
    var v548= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v548 = {car: arguments[i], cdr: 
    v548};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("var id = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v549), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("return ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l42.function(l219), v548)), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "}", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "catch (cf){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    if (cf.type == 'catch' && cf.id == id)", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        return cf.value;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "    else", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "        throw cf;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "}", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l230 = {name: "THROW"};
(l192).value = ({car: l42.function(l230, (function (v550,v551){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v550), ", ", "value: ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v551), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l231 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l231.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l231).value = 0;
    })());
    return l231;
})();
var l232 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l232.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l232).value = 0;
    })());
    return l232;
})();
var l233 = {name: "GO-TAG-P"};
(function(){
    (l233).function = (function(v554){
        ((v554)["fname"] = "GO-TAG-P");
        return v554;
    })((function (v552){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v553){
                        return (v553 !== l3.value ? v553 : ((function(){
                            var tmp = v552;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l74.function(v552));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 198)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l233;
})();
var l234 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l234).function = (function(v560){
        ((v560)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v560;
    })((function (v555,v556){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v559){
                        return l170.function(v559, (function(){
                            var symbol = l172;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l169);
                    })(l68.function((function (v557){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v558){
                            return l157.function(v557, l169, l42.function(v555, v558));
                        })(l16.function((l232).value = (function(){
                            var x1 = (function(){
                                var symbol = l232;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = 1;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1+x2;
                        })()));
                    
                    }), l84.function((function(){
                        var symbol = l233;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v556)));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 199)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l234;
})();
var l235 = {name: "TAGBODY"};
(l192).value = ({car: l42.function(l235, (function (){
    var v561= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v561 = {car: arguments[i], cdr: 
    v561};
    return (function(){
        try {
            return (function(){
                (l88.function((function(){
                    var symbol = l233;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v561) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 200, value: (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l219), v561, l42.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l233.function((function(){
                    var tmp = v561;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return v561 = ({car: l15.function("START"), cdr: v561});
                })());
                return (function(v562){
                    return (function(v564,v563){
                        try {
                            var tmp;
                            tmp = l172.value;
                            l172.value = v564;
                            v564 = tmp;
                            (function(v565){
                                return v563 = l39.function(l160.function(v565));
                            })(l171.function(l38.function(v561), (function(){
                                var symbol = l172;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l169));
                            return l122.function("(function(){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l129.function("var tagbody_", v562, " = ", v563, ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "tbloop:", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "while (true) {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l129.function("try {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l129.function((function(v566){
                                return l122.function("switch(tagbody_", v562, "){", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v563, ":", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v567,v568){
                                                (function(){
                                                    while(v567 !== l3.value){
                                                        v568 = (function(){
                                                            var tmp = v567;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })();
                                                        (function(){
                                                            v566 = l122.function(v566, (function(){
                                                                return (l26.function(l233.function(v568)) !== l3.value ? l129.function((function(){
                                                                    var symbol = l131;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v568), ";", (function(){
                                                                    var symbol = l121;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v569){
                                                                    return l122.function("case ", l39.function(l160.function(v569)), ":", (function(){
                                                                        var symbol = l121;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l171.function(v568, (function(){
                                                                    var symbol = l172;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l169)));
                                                            })());
                                                            return l3.value;
                                                        })();
                                                        v567 = (function(){
                                                            var tmp = v567;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })();
                                                    }return l3.value;
                                                })();
                                                return v566;
                                            })((function(){
                                                var tmp = v561;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 201)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })(), "default:", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "    break tbloop;", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "}", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })("")), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "catch (jump) {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v562, ")", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v562, " = jump.label;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "    else", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        throw(jump);", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "return ", (function(){
                                var symbol = l131;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l3.value), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()), "})()");
                        }
                        finally {
                            l172.value = v564;
                        }
                    })(l234.function(v562, v561),l3.value);
                })(l16.function((function(){
                    var symbol = l231;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l236 = {name: "GO"};
(l192).value = ({car: l42.function(l236, (function (v570){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v571,v572){
                    return (v571 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("throw ({", "type: 'tagbody', ", "id: ", l38.function(l160.function(v571)), ", ", "label: ", l39.function(l160.function(v571)), ", ", "message: 'Attempt to GO to non-existing tag ", v572, "'", "})", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l122.function("Unknown tag `", v572, "'.");
                    })());
                })(l171.function(v570, (function(){
                    var symbol = l172;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l169),(((function(){
                    var tmp = v570;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v570).name;
                })() : (l74.function(v570) !== l3.value ? (function(){
                    return l16.function(v570);
                })() : l3.value)));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l237 = {name: "UNWIND-PROTECT"};
(l192).value = ({car: l42.function(l237, (function (v574){
    if (arguments.length < 1) throw 'too few arguments';
    var v573= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v573 = {car: arguments[i], cdr: 
    v573};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("var ret = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("ret = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v574), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function((function(){
                    var symbol = l206;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v573)), "}", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "return ret;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l238 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l238).function = (function(v577){
        ((v577)["fname"] = "BACKQUOTE-EXPAND-1");
        return v577;
    })((function (v575){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v575;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l42.function(l151, v575);
                    })() : (l43.function(v575) !== l3.value ? (function(){
                        return v575;
                    })() : ((((function(){
                        var tmp = v575;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l154)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v575;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v575;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l152)?l4.value: l3.value) !== l3.value ? (function(){
                        return l238.function(l238.function(l32.function(v575)));
                    })() : (function(){
                        return ({car: l62, cdr: l68.function((function (v576){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l57.function(v576) !== l3.value ? (((function(){
                                var tmp = v576;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l154)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l42.function(l42, l32.function(v576));
                            })() : ((l57.function(v576) !== l3.value ? (((function(){
                                var tmp = v576;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l153)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l32.function(v576);
                            })() : (function(){
                                return l42.function(l42, l238.function(v576));
                            })()));
                        
                        }), v575)});
                    })()))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 204)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l238;
})();
var l239 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l239).function = (function(v579){
        ((v579)["fname"] = "BACKQUOTE-EXPAND");
        return v579;
    })((function (v578){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l57.function(v578) !== l3.value ? (((function(){
                        var tmp = v578;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l152)?l4.value: l3.value) : l3.value) !== l3.value ? l238.function(l32.function(v578)) : v578);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 205)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l239;
})();
l152;
(l192).value = ({car: l42.function(l152, (function (v580){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l238.function(v580));
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
    var symbol = l192;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l240 = {name: "*BUILTINS*"};
(function(){
    (((l240.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l240).value = l3.value;
    })());
    return l240;
})();
var l241 = {name: "DEFINE-RAW-BUILTIN"};
l241;
var l242 = {name: "DEFINE-BUILTIN"};
l242;
var l243 = {name: "TYPE-CHECK"};
l243;
var l244 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l244).function = (function(v589){
        ((v589)["fname"] = "VARIABLE-ARITY-CALL");
        return v589;
    })((function (v581,v582){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v581;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "ARGS must be a non-empty list";
                        })();
                    })());
                    return (function(v583,v584,v585){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v586,v587){
                                        (function(){
                                            while(v586 !== l3.value){
                                                v587 = (function(){
                                                    var tmp = v586;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v588){
                                                        v584 = ({car: v588, cdr: v584});
                                                        return v585 = l122.function(v585, (function(){
                                                            return l122.function("var ", v588, " = ", (function(){
                                                                var symbol = l131;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v587), ";", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), "if (typeof ", v588, " !== 'number') throw 'Not a number!';", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })());
                                                        })());
                                                    })(l122.function("x", l16.function(v583 = (function(){
                                                        var x1 = v583;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })())));
                                                    return l3.value;
                                                })();
                                                v586 = (function(){
                                                    var tmp = v586;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v581,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 208)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(v585, (v582)(l64.function(v584))), "})()");
                    })(0,l3,"");
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
    return l244;
})();
var l245 = {name: "VARIABLE-ARITY"};
l245;
var l246 = {name: "NUM-OP-NUM"};
(function(){
    (l246).function = (function(v593){
        ((v593)["fname"] = "NUM-OP-NUM");
        return v593;
    })((function (v590,v591,v592){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function(l122.function("var ", "x", " = ", v590, ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l122.function("var ", "y", " = ", v592, ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l122.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l122.function("return ", (function(){
                        return l122.function("x", v591, "y");
                    })(), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
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
(l240).value = ({car: l42.function(l59, (function (){
    var v594= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v594 = {car: arguments[i], cdr: 
    v594};
    return (function(){
        try {
            return (function(){
                return (l11.function(v594) !== l3.value ? "0" : l244.function(v594, (function (v595){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l122.function("return ", l124.function(v595, "+"), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 210)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l240).value = ({car: l42.function(l60, (function (v597){
    if (arguments.length < 1) throw 'too few arguments';
    var v596= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v596 = {car: arguments[i], cdr: 
    v596};
    return (function(){
        try {
            return (function(){
                return (function(v598){
                    return l244.function(v598, (function (v599){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", (l11.function(v596) !== l3.value ? l122.function("-", (function(){
                            var tmp = v599;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l124.function(v599, "-")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v597, cdr: v596}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 211)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l240).value = ({car: l42.function(l19, (function (){
    var v600= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v600 = {car: arguments[i], cdr: 
    v600};
    return (function(){
        try {
            return (function(){
                return (l11.function(v600) !== l3.value ? "1" : l244.function(v600, (function (v601){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l122.function("return ", l124.function(v601, "*"), ";", (function(){
                        var symbol = l121;
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l240).value = ({car: l42.function(l20, (function (v603){
    if (arguments.length < 1) throw 'too few arguments';
    var v602= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v602 = {car: arguments[i], cdr: 
    v602};
    return (function(){
        try {
            return (function(){
                return (function(v604){
                    return l244.function(v604, (function (v605){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", (l11.function(v602) !== l3.value ? l122.function("1 /", (function(){
                            var tmp = v605;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l124.function(v605, "/")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v603, cdr: v602}));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l247 = {name: "MOD"};
(function(){
    return (l240).value = ({car: l42.function(l247, (function (v606,v607){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v608,v609){
                        return l246.function(v608, "%", v609);
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v606),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v607));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l248 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l248).function = (function(v612){
        ((v612)["fname"] = "COMPARISON-CONJUNTION");
        return v612;
    })((function (v610,v611){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function((function(){
                        var tmp = v610;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return "true";
                    })() : (l11.function(l34.function(v610)) !== l3.value ? (function(){
                        return l122.function((function(){
                            var tmp = v610;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v611, l32.function(v610));
                    })() : (function(){
                        return l122.function((function(){
                            var tmp = v610;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v611, l32.function(v610), " && ", l248.function((function(){
                            var tmp = v610;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v611));
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 215)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l248;
})();
var l249 = {name: "DEFINE-BUILTIN-COMPARISON"};
l249;
var l250 = {name: ">"};
(l240).value = ({car: l42.function(l250, (function (v614){
    if (arguments.length < 1) throw 'too few arguments';
    var v613= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v613 = {car: arguments[i], cdr: 
    v613};
    return (function(){
        try {
            return (function(){
                return (function(v615){
                    return l244.function(v615, (function (v616){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l130.function(l248.function(v616, ">")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v614, cdr: v613}));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l251 = {name: "<"};
(l240).value = ({car: l42.function(l251, (function (v618){
    if (arguments.length < 1) throw 'too few arguments';
    var v617= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v617 = {car: arguments[i], cdr: 
    v617};
    return (function(){
        try {
            return (function(){
                return (function(v619){
                    return l244.function(v619, (function (v620){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l130.function(l248.function(v620, "<")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v618, cdr: v617}));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l252 = {name: ">="};
(l240).value = ({car: l42.function(l252, (function (v622){
    if (arguments.length < 1) throw 'too few arguments';
    var v621= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v621 = {car: arguments[i], cdr: 
    v621};
    return (function(){
        try {
            return (function(){
                return (function(v623){
                    return l244.function(v623, (function (v624){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l130.function(l248.function(v624, ">=")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v622, cdr: v621}));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l253 = {name: "<="};
(l240).value = ({car: l42.function(l253, (function (v626){
    if (arguments.length < 1) throw 'too few arguments';
    var v625= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v625 = {car: arguments[i], cdr: 
    v625};
    return (function(){
        try {
            return (function(){
                return (function(v627){
                    return l244.function(v627, (function (v628){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l130.function(l248.function(v628, "<=")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v626, cdr: v625}));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l240).value = ({car: l42.function(l18, (function (v630){
    if (arguments.length < 1) throw 'too few arguments';
    var v629= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v629 = {car: arguments[i], cdr: 
    v629};
    return (function(){
        try {
            return (function(){
                return (function(v631){
                    return l244.function(v631, (function (v632){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l130.function(l248.function(v632, "==")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v630, cdr: v629}));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l254 = {name: "NUMBERP"};
(function(){
    return (l240).value = ({car: l42.function(l254, (function (v633){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v634){
                        return l130.function(l122.function("(typeof (", v634, ") == \"number\")"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v633));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l255 = {name: "FLOOR"};
(function(){
    return (l240).value = ({car: l42.function(l255, (function (v635){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v636){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v636, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v635));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l27, (function (v637,v638){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v639,v640){
                        return l122.function("({car: ", v639, ", cdr: ", v640, "})");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v637),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v638));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l28, (function (v641){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v642){
                        return l130.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var tmp = ", v642, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'car' in tmp);", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v641));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l29, (function (v643){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v644){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var tmp = ", v644, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.car;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v643));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l30, (function (v645){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v646){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var tmp = ", v646, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp.cdr;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v645));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l256 = {name: "SETCAR"};
(function(){
    return (l240).value = ({car: l42.function(l256, (function (v647,v648){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v649,v650){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v649, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return l122.function("(x.car = ", v650, ")");
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v647),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v648));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l257 = {name: "SETCDR"};
(function(){
    return (l240).value = ({car: l42.function(l257, (function (v651,v652){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v653,v654){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v653, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return l122.function("(x.cdr = ", v654, ")");
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v651),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v652));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l258 = {name: "SYMBOLP"};
(function(){
    return (l240).value = ({car: l42.function(l258, (function (v655){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v656){
                        return l130.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var tmp = ", v656, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return (typeof tmp == 'object' && 'name' in tmp);", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v655));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l259 = {name: "MAKE-SYMBOL"};
(function(){
    return (l240).value = ({car: l42.function(l259, (function (v657){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v658){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "name", " = ", v658, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v657));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l260 = {name: "SYMBOL-NAME"};
(function(){
    return (l240).value = ({car: l42.function(l260, (function (v659){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v660){
                        return l122.function("(", v660, ").name");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v659));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l208, (function (v661,v662){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v663,v664){
                        return l122.function("(", v663, ").value = ", v664);
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v661),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v662));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l261 = {name: "FSET"};
(function(){
    return (l240).value = ({car: l42.function(l261, (function (v665,v666){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v667,v668){
                        return l122.function("(", v667, ").function = ", v668);
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v665),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v666));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l17, (function (v669){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v670){
                        return l130.function(l122.function("(", v670, ".value !== undefined)"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v669));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l262 = {name: "SYMBOL-VALUE"};
(function(){
    return (l240).value = ({car: l42.function(l262, (function (v671){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v672){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var symbol = ", v672, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var value = symbol.value;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (value === undefined) throw \"Variable `\" + symbol.name + \"' is unbound.\";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return value;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v671));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l216, (function (v673){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v674){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var symbol = ", v674, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var func = symbol.function;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (func === undefined) throw \"Function `\" + symbol.name + \"' is undefined.\";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return func;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v673));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l263 = {name: "SYMBOL-PLIST"};
(function(){
    return (l240).value = ({car: l42.function(l263, (function (v675){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v676){
                        return l122.function("((", v676, ").plist || ", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v675));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l264 = {name: "LAMBDA-CODE"};
(function(){
    return (l240).value = ({car: l42.function(l264, (function (v677){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v678){
                        return l122.function("(", v678, ").toString()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v677));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l265 = {name: "EQ"};
(function(){
    return (l240).value = ({car: l42.function(l265, (function (v679,v680){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v681,v682){
                        return l130.function(l122.function("(", v681, " === ", v682, ")"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v679),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v680));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l266 = {name: "EQUAL"};
(function(){
    return (l240).value = ({car: l42.function(l266, (function (v683,v684){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v685,v686){
                        return l130.function(l122.function("(", v685, " == ", v686, ")"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v683),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v684));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l267 = {name: "CHAR-TO-STRING"};
(function(){
    return (l240).value = ({car: l42.function(l267, (function (v687){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v688){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v688, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v687));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l268 = {name: "STRINGP"};
(function(){
    return (l240).value = ({car: l42.function(l268, (function (v689){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v690){
                        return l130.function(l122.function("(typeof(", v690, ") == \"string\")"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v689));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l269 = {name: "STRING-UPCASE"};
(function(){
    return (l240).value = ({car: l42.function(l269, (function (v691){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v692){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v692, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v691));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l270 = {name: "STRING-LENGTH"};
(function(){
    return (l240).value = ({car: l42.function(l270, (function (v693){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v694){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v694, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v693));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l271 = {name: "SLICE"};
(l240).value = ({car: l42.function(l271, (function (v695,v696,v697){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v697=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l129.function("var str = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v695), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v696), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v697 !== l3.value ? l122.function("b = ", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v697), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()) : ""), "return str.slice(a,b);", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "})()");
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l272 = {name: "CHAR"};
(function(){
    return (l240).value = ({car: l42.function(l272, (function (v698,v699){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v700,v701){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "string", " = ", v700, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("var ", "index", " = ", v701, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v698),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v699));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l240).value = ({car: l42.function(l67, (function (v702,v703){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v704,v705){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "string1", " = ", v704, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("var ", "string2", " = ", v705, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v702),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v703));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l273 = {name: "FUNCALL"};
(l240).value = ({car: l42.function(l273, (function (v707){
    if (arguments.length < 1) throw 'too few arguments';
    var v706= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v706 = {car: arguments[i], cdr: 
    v706};
    return (function(){
        try {
            return (function(){
                return l122.function("(", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v707), ")(", l124.function(l68.function((function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v706), ", "), ")");
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l274 = {name: "APPLY"};
(l240).value = ({car: l42.function(l274, (function (v709){
    if (arguments.length < 1) throw 'too few arguments';
    var v708= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v708 = {car: arguments[i], cdr: 
    v708};
    return (function(){
        try {
            return (function(){
                return (l11.function(v708) !== l3.value ? l122.function("(", (function(){
                    var symbol = l131;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v709), ")()") : (function(v710,v711){
                    return l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l129.function("var f = ", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v709), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l124.function(l68.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v710), ", "), "];", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v711), ");", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), "){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    args.push(tail.car);", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "    tail = tail.cdr;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return f.apply(this, args);", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()");
                })(l80.function(v708),(function(){
                    var tmp = l79.function(v708);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
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
    var symbol = l240;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l275 = {name: "JS-EVAL"};
(function(){
    return (l240).value = ({car: l42.function(l275, (function (v712){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v713){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "string", " = ", v713, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v712));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l276 = {name: "ERROR"};
(function(){
    return (l240).value = ({car: l42.function(l276, (function (v714){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v715){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw ", v715, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v714));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l277 = {name: "NEW"};
(function(){
    return (l240).value = ({car: l42.function(l277, (function (){
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
                if (cf.type == 'block' && cf.id == 252)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l278 = {name: "OBJECTP"};
(function(){
    return (l240).value = ({car: l42.function(l278, (function (v716){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v717){
                        return l130.function(l122.function("(typeof (", v717, ") === 'object')"));
                    })((function(){
                        var symbol = l131;
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l279 = {name: "OGET"};
(function(){
    return (l240).value = ({car: l42.function(l279, (function (v718,v719){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v720,v721){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var tmp = ", "(", v720, ")[", v721, "];", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ": tmp ;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v718),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v719));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l280 = {name: "OSET"};
(function(){
    return (l240).value = ({car: l42.function(l280, (function (v722,v723,v724){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v725,v726,v727){
                        return l122.function("((", v725, ")[", v726, "] = ", v727, ")");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v722),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v723),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v724));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l281 = {name: "IN"};
(function(){
    return (l240).value = ({car: l42.function(l281, (function (v728,v729){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v730,v731){
                        return l130.function(l122.function("((", v730, ") in (", v731, "))"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v728),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v729));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l282 = {name: "FUNCTIONP"};
(function(){
    return (l240).value = ({car: l42.function(l282, (function (v732){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v733){
                        return l130.function(l122.function("(typeof ", v733, " == 'function')"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v732));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l283 = {name: "WRITE-STRING"};
(function(){
    return (l240).value = ({car: l42.function(l283, (function (v734){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v735){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function(l122.function("var ", "x", " = ", v735, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v734));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l284 = {name: "MAKE-ARRAY"};
(function(){
    return (l240).value = ({car: l42.function(l284, (function (v736){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v737){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var r = [];", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "for (var i = 0; i < ", v737, "; i++)", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("r.push(", (function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ");", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "return r;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v736));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l285 = {name: "ARRAYP"};
(function(){
    return (l240).value = ({car: l42.function(l285, (function (v738){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v739){
                        return l130.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var x = ", v739, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v738));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l286 = {name: "AREF"};
(function(){
    return (l240).value = ({car: l42.function(l286, (function (v740,v741){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v742,v743){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var x = ", "(", v742, ")[", v743, "];", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (x === undefined) throw 'Out of range';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x;", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v740),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v741));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l287 = {name: "ASET"};
(function(){
    return (l240).value = ({car: l42.function(l287, (function (v744,v745,v746){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v747,v748,v749){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l129.function("var x = ", v747, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var i = ", v748, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x[i] = ", v749, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v744),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v745),(function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v746));
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
        var symbol = l240;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l183).function = (function(v752){
        ((v752)["fname"] = "MACRO");
        return v752;
    })((function (v750){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v750;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v751){
                        return (((l159.function(v751) === l183)?l4.value: l3.value) !== l3.value ? v751 : l3.value);
                    })(l171.function(v750, (function(){
                        var symbol = l172;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 263)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l183;
})();
var l288 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l288).function = (function(v757){
        ((v757)["fname"] = "LS-MACROEXPAND-1");
        return v757;
    })((function (v753){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v754){
                        return (v754 !== l3.value ? (function(v755){
                            (l57.function(v755) !== l3.value ? (function(){
                                return (function(v756){
                                    l162.function(v754, v756);
                                    return v755 = v756;
                                })((function(){
                                    var symbol = l218;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v755));
                            })() : l3.value);
                            return (function(){
                                var f = v755;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v753;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l160.function(v754)) : v753);
                    })(l183.function((function(){
                        var tmp = v753;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 264)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l288;
})();
var l289 = {name: "COMPILE-FUNCALL"};
(function(){
    (l289).function = (function(v760){
        ((v760)["fname"] = "COMPILE-FUNCALL");
        return v760;
    })((function (v758,v759){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v758;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l185.function(v758, l97, l190) : l3.value) !== l3.value ? l122.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l151), l42.function(v758))), ".function(", l124.function(l68.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v759), ", "), ")") : l122.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l97), l42.function(v758))), "(", l124.function(l68.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v759), ", "), ")"));
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
    return l289;
})();
(function(){
    (l206).function = (function(v763){
        ((v763)["fname"] = "LS-COMPILE-BLOCK");
        return v763;
    })((function (v761,v762){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v762=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v762 !== l3.value ? l122.function(l206.function(l80.function(v761)), "return ", (function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l79.function(v761);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l125.function(l83.function((function(){
                        var symbol = l180;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l68.function((function(){
                        var symbol = l131;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v761)), l122.function(";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
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
    return l206;
})();
(function(){
    (l131).function = (function(v771){
        ((v771)["fname"] = "LS-COMPILE");
        return v771;
    })((function (v764){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v764;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v765){
                            return ((v765 !== l3.value ? l26.function(l81.function(l187, l161.function(v765))) : l3.value) !== l3.value ? (function(){
                                return l160.function(v765);
                            })() : ((function(v766){
                                return (v766 !== l3.value ? v766 : l81.function(l189, l161.function(v765)));
                            })(l112.function(v764)) !== l3.value ? (function(){
                                return l122.function(l131.function(l62.function(l42.function(l151), l42.function(v764))), ".value");
                            })() : (function(){
                                return l131.function(l62.function(l42.function(l262), l42.function(l62.function(l42.function(l151), l42.function(v764)))));
                            })()));
                        })(l171.function(v764, (function(){
                            var symbol = l172;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l98));
                    })() : (l74.function(v764) !== l3.value ? (function(){
                        return l16.function(v764);
                    })() : (((typeof(v764) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", l134.function(v764), "\"");
                    })() : (((function(){
                        var x = v764;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l214.function(v764);
                    })() : (l57.function(v764) !== l3.value ? (function(){
                        return (function(v767,v768){
                            return (l90.function(v767, (function(){
                                var symbol = l192;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v769){
                                    return (function(){
                                        var f = v769;
                                        var args = [];
                                        var tail = (v768);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l90.function(v767, (function(){
                                    var symbol = l192;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l90.function(v767, (function(){
                                var symbol = l240;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l26.function(l185.function(v767, l97, l188)) : l3.value) !== l3.value ? (function(){
                                return (function(v770){
                                    return (function(){
                                        var f = v770;
                                        var args = [];
                                        var tail = (v768);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l90.function(v767, (function(){
                                    var symbol = l240;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l183.function(v767) !== l3.value ? l131.function(l288.function(v764)) : l289.function(v767, v768));
                            })()));
                        })((function(){
                            var tmp = v764;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v764;
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
                if (cf.type == 'block' && cf.id == 267)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l131;
})();
var l290 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l290).function = (function(v776){
        ((v776)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v776;
    })((function (v772){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v773){
                        try {
                            var tmp;
                            tmp = l178.value;
                            l178.value = v773;
                            v773 = tmp;
                            return ((((function(){
                                var tmp = v772;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v772;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l219)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v774){
                                    return l124.function(l83.function((function(){
                                        var symbol = l180;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v774));
                                })(l68.function((function(){
                                    var symbol = l290;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v772;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v775){
                                    return l122.function(l125.function(l181.function(), l122.function(";", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v775 !== l3.value ? l122.function(v775, ";", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l131.function(v772));
                            })());
                        }
                        finally {
                            l178.value = v773;
                        }
                    })(l3.value);
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
    return l290;
})();
var l291 = {name: "WITH-COMPILATION-UNIT"};
l291;
(function(){
    (l218).function = (function(v782){
        ((v782)["fname"] = "EVAL");
        return v782;
    })((function (v777){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v781){
                        return (function(){
                            var string = v781;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v778){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v779,v780){
                                        (function(){
                                            while(v779 !== l3.value){
                                                v780 = (function(){
                                                    var tmp = v779;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (v780)();
                                                    return l3.value;
                                                })();
                                                v779 = (function(){
                                                    var tmp = v779;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l156;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 270)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v778;
                    })((function(){
                        (l156).value = l3.value;
                        return l290.function(v777);
                    })()));
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
    return l218;
})();
var l292 = {name: "&BODY"};
var l293 = {name: "PRON"};
var l294 = {car: l197, cdr: {car: l196, cdr: {car: l292, cdr: {car: l19, cdr: {car: l14, cdr: {car: l114, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l251, cdr: {car: l253, cdr: {car: l18, cdr: {car: l18, cdr: {car: l250, cdr: {car: l252, cdr: {car: l52, cdr: {car: l62, cdr: {car: l274, cdr: {car: l286, cdr: {car: l285, cdr: {car: l287, cdr: {car: l90, cdr: {car: l43, cdr: {car: l168, cdr: {car: l17, cdr: {car: l17, cdr: {car: l80, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l229, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l272, cdr: {car: l72, cdr: {car: l73, cdr: {car: l71, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l70, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l7, cdr: {car: l85, cdr: {car: l94, cdr: {car: l96, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l265, cdr: {car: l25, cdr: {car: l266, cdr: {car: l276, cdr: {car: l218, cdr: {car: l89, cdr: {car: l120, cdr: {car: l93, cdr: {car: l104, cdr: {car: l118, cdr: {car: l38, cdr: {car: l41, cdr: {car: l261, cdr: {car: l273, cdr: {car: l97, cdr: {car: l282, cdr: {car: l15, cdr: {car: l236, cdr: {car: l69, cdr: {car: l194, cdr: {car: l115, cdr: {car: l44, cdr: {car: l74, cdr: {car: l74, cdr: {car: l119, cdr: {car: l112, cdr: {car: l205, cdr: {car: l79, cdr: {car: l66, cdr: {car: l223, cdr: {car: l226, cdr: {car: l100, cdr: {car: l42, cdr: {car: l57, cdr: {car: l284, cdr: {car: l101, cdr: {car: l259, cdr: {car: l68, cdr: {car: l81, cdr: {car: l76, cdr: {car: l247, cdr: {car: l3, cdr: {car: l26, cdr: {car: l78, cdr: {car: l77, cdr: {car: l11, cdr: {car: l254, cdr: {car: l53, cdr: {car: l105, cdr: {car: l107, cdr: {car: l103, cdr: {car: l75, cdr: {car: l133, cdr: {car: l136, cdr: {car: l191, cdr: {car: l54, cdr: {car: l55, cdr: {car: l293, cdr: {car: l46, cdr: {car: l151, cdr: {car: l82, cdr: {car: l83, cdr: {car: l84, cdr: {car: l12, cdr: {car: l228, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l208, cdr: {car: l207, cdr: {car: l88, cdr: {car: l269, cdr: {car: l91, cdr: {car: l92, cdr: {car: l268, cdr: {car: l86, cdr: {car: l216, cdr: {car: l260, cdr: {car: l113, cdr: {car: l263, cdr: {car: l262, cdr: {car: l258, cdr: {car: l4, cdr: {car: l235, cdr: {car: l40, cdr: {car: l230, cdr: {car: l24, cdr: {car: l6, cdr: {car: l237, cdr: {car: l98, cdr: {car: l135, cdr: {car: l5, cdr: {car: l95, cdr: {car: l283, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l120.function(l294);
(l114).value = (function(){
    var symbol = l110;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})();
(function(){
    var string = "var lisp";
    if (typeof string != 'string')
        throw 'The value ' + string + ' is not a type string.';
    return eval.apply(window, [string]);
})();
(lisp = {});
(lisp.read = (function(){
    var symbol = l155;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l133;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l218;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l290;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v783){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l218.function(l155.function(v783));

}));
(lisp.compileString = (function (v784){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l290.function(l155.function(v784));

}));
var l295 = {car: {car: l293, cdr: "l293"}, cdr: {car: {car: l292, cdr: "l292"}, cdr: {car: {car: l291, cdr: "l291"}, cdr: {car: {car: l290, cdr: "l290"}, cdr: {car: {car: l289, cdr: "l289"}, cdr: {car: {car: l288, cdr: "l288"}, cdr: {car: {car: l287, cdr: "l287"}, cdr: {car: {car: l286, cdr: "l286"}, cdr: {car: {car: l285, cdr: "l285"}, cdr: {car: {car: l284, cdr: "l284"}, cdr: {car: {car: l283, cdr: "l283"}, cdr: {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l196, cdr: "l196"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l296 = {name: "BODY"};
var l297 = {name: "CHECK"};
var l298 = {name: "OP"};
var l299 = {name: "SYM"};
var l300 = {name: "X"};
var l301 = {name: "ARGS"};
var l302 = {name: "DECLS"};
var l303 = {name: "DECL"};
var l304 = {name: "NAME"};
var l305 = {name: "ARG"};
var l306 = {name: "FORM"};
var l307 = {name: "PACKAGE-DESIGNATOR"};
var l308 = {name: "FORM1"};
var l309 = {name: "RESULT"};
var l310 = {name: "VALUE"};
var l311 = {name: "FORMS"};
var l312 = {name: "G"};
var l313 = {name: "CLAUSULES"};
var l314 = {name: "!FORM"};
var l315 = {name: "CLAUSULE"};
var l316 = {name: "ITER"};
var l317 = {name: "G!TO"};
var l318 = {name: "VAR"};
var l319 = {name: "TO"};
var l320 = {name: "G!LIST"};
var l321 = {name: "PLACE"};
var l322 = {name: "DELTA"};
var l323 = {name: "CONDITION"};
var l324 = {name: "DOCSTRING"};
var l325 = {car: {car: {car: l240, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l232, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l231, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l227, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l212, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l211, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l195, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l192, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l99, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: {car: l189, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l187, cdr: {car: l189, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l218, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l291, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l197, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l54, cdr: {car: {car: l219, cdr: {car: {car: l207, cdr: {car: l156, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l47, cdr: {car: {car: l297, cdr: {car: l156, cdr: l3}}, cdr: {car: {car: l273, cdr: {car: l297, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l290, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l206, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l289, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l288, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l183, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l249, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l298, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l241, cdr: {car: {car: l154, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l300, cdr: {car: l197, cdr: {car: l301, cdr: l3}}}, cdr: {car: {car: l223, cdr: {car: {car: {car: l301, cdr: {car: {car: l27, cdr: {car: l300, cdr: {car: l301, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l245, cdr: {car: l301, cdr: {car: {car: l130, cdr: {car: {car: l248, cdr: {car: l301, cdr: {car: {car: l154, cdr: {car: l299, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l248, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l246, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l245, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l6, cdr: {car: {car: l258, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l276, cdr: {car: "Bad usage of VARIABLE-ARITY, you must pass a symbol", cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l244, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: l3}, cdr: {car: {car: l122, cdr: {car: "return ", cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l244, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l243, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l302, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l132, cdr: {car: {car: l153, cdr: {car: {car: l68, cdr: {car: {car: l205, cdr: {car: {car: l303, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l122, cdr: {car: "var ", cdr: {car: {car: l154, cdr: {car: {car: l38, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l154, cdr: {car: {car: l40, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l302, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l68, cdr: {car: {car: l205, cdr: {car: {car: l303, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l122, cdr: {car: "if (typeof ", cdr: {car: {car: l154, cdr: {car: {car: l38, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l154, cdr: {car: {car: l39, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l121, cdr: {car: {car: l129, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l154, cdr: {car: {car: l38, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l154, cdr: {car: {car: l39, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l121, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l302, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l122, cdr: {car: "return ", cdr: {car: {car: l219, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l242, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l219, cdr: {car: {car: l241, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l223, cdr: {car: {car: l154, cdr: {car: {car: l68, cdr: {car: {car: l205, cdr: {car: {car: l305, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: {car: l154, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: {car: l154, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l301, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l241, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l168, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l240, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l306, cdr: l3}, cdr: {car: {car: l238, cdr: {car: l306, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l239, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l238, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l234, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l233, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l225, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l224, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l222, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l221, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l220, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l306, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l193, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l131, cdr: {car: {car: l154, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l214, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l213, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l204, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l203, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l202, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l201, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l199, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l193, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l168, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l192, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l186, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l185, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l184, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l175, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l170, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l167, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l166, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l149, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l197, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l122, cdr: {car: "(function(){", cdr: {car: l121, cdr: {car: {car: l129, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l98, cdr: {car: l197, cdr: {car: l306, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l122, cdr: {car: {car: l154, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l219, cdr: {car: {car: l153, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l307, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l217, cdr: {car: {car: l207, cdr: {car: l114, cdr: {car: {car: l102, cdr: {car: {car: l154, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l308, cdr: {car: l309, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l54, cdr: {car: {car: l219, cdr: {car: {car: l154, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l309, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l306, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l223, cdr: {car: {car: {car: l310, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l223, cdr: {car: {car: {car: {car: l154, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l310, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l197, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l311, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l223, cdr: {car: {car: {car: l312, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l223, cdr: {car: {car: {car: {car: l154, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l29, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l194, cdr: {car: {car: l154, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l53, cdr: {car: {car: l153, cdr: {car: {car: l30, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l197, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l311, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l152, cdr: {car: {car: l194, cdr: {car: {car: l154, cdr: {car: {car: l29, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l52, cdr: {car: {car: l153, cdr: {car: {car: l30, cdr: {car: l311, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l306, cdr: {car: l197, cdr: {car: l313, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l50, cdr: {car: {car: l154, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l62, cdr: {car: l313, cdr: {car: {car: l152, cdr: {car: {car: {car: l4, cdr: {car: {car: l276, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l306, cdr: {car: l197, cdr: {car: l313, cdr: l3}}}, cdr: {car: {car: l223, cdr: {car: {car: {car: l314, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l223, cdr: {car: {car: {car: {car: l154, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l306, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l49, cdr: {car: {car: l153, cdr: {car: {car: l68, cdr: {car: {car: l205, cdr: {car: {car: l315, cdr: l3}, cdr: {car: {car: l194, cdr: {car: {car: l265, cdr: {car: {car: l29, cdr: {car: l315, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l315, cdr: {car: {car: l152, cdr: {car: {car: {car: l25, cdr: {car: {car: l154, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: {car: l29, cdr: {car: l315, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l30, cdr: {car: l315, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l313, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l197, cdr: {car: l313, cdr: l3}}, cdr: {car: {car: l194, cdr: {car: {car: l11, cdr: {car: l313, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l194, cdr: {car: {car: l265, cdr: {car: {car: l31, cdr: {car: l313, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l219, cdr: {car: {car: l153, cdr: {car: {car: l33, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l194, cdr: {car: {car: l154, cdr: {car: {car: l31, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l219, cdr: {car: {car: l153, cdr: {car: {car: l33, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: l153, cdr: {car: {car: l30, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l316, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l223, cdr: {car: {car: {car: l317, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l318, cdr: {car: {car: l38, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l319, cdr: {car: {car: l39, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l309, cdr: {car: {car: l40, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l168, cdr: {car: l3, cdr: {car: {car: l223, cdr: {car: {car: {car: {car: l154, cdr: {car: l318, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l154, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l319, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l215, cdr: {car: {car: l251, cdr: {car: {car: l154, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l317, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l235, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l44, cdr: {car: {car: l154, cdr: {car: l318, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l309, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l316, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l223, cdr: {car: {car: {car: l318, cdr: {car: {car: l38, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l320, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l168, cdr: {car: l3, cdr: {car: {car: l223, cdr: {car: {car: {car: {car: l154, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: {car: l39, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l154, cdr: {car: l318, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l215, cdr: {car: {car: l154, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l154, cdr: {car: l320, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l235, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l320, cdr: l3}}, cdr: {car: {car: l30, cdr: {car: {car: l154, cdr: {car: l320, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l154, cdr: {car: {car: l40, cdr: {car: l316, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l300, cdr: {car: l321, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l321, cdr: l3}}, cdr: {car: {car: l27, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l321, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l300, cdr: {car: l196, cdr: {car: {car: l322, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l60, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l322, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l300, cdr: {car: l196, cdr: {car: {car: l322, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l322, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l323, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l168, cdr: {car: l3, cdr: {car: {car: l215, cdr: {car: {car: l154, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l196, cdr: {car: l310, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l228, cdr: {car: l3, cdr: {car: {car: l154, cdr: {car: l310, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l190, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l219, cdr: {car: {car: l2, cdr: {car: {car: l190, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l261, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l154, cdr: {car: {car: l260, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l194, cdr: {car: {car: l52, cdr: {car: {car: l268, cdr: {car: {car: l29, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l26, cdr: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: {car: l154, cdr: {car: {car: l29, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l168, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: {car: l30, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: {car: l168, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: {car: {car: l300, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l223, cdr: {car: {car: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l154, cdr: {car: l301, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l280, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l300, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l310, cdr: {car: l196, cdr: {car: l324, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l219, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l310, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l5, cdr: {car: {car: l268, cdr: {car: l324, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: {car: l280, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l154, cdr: {car: l324, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l310, cdr: {car: l196, cdr: {car: l324, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l219, cdr: {car: {car: l2, cdr: {car: {car: l187, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l207, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l154, cdr: {car: l310, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l153, cdr: {car: {car: l5, cdr: {car: {car: l268, cdr: {car: l324, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: {car: l280, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l154, cdr: {car: l324, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l323, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l194, cdr: {car: {car: l154, cdr: {car: l323, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l219, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l323, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}, cdr: {car: {car: l152, cdr: {car: {car: l194, cdr: {car: {car: l154, cdr: {car: l323, cdr: l3}}, cdr: {car: {car: l219, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l197, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l217, cdr: {car: {car: l153, cdr: {car: {car: l68, cdr: {car: {car: l205, cdr: {car: {car: l303, cdr: l3}, cdr: {car: {car: l152, cdr: {car: {car: l186, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l303, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l302, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l183, cdr: {car: {car: l205, cdr: {car: {car: l304, cdr: {car: l301, cdr: {car: l197, cdr: {car: l296, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: {car: l217, cdr: {car: {car: l182, cdr: {car: {car: l151, cdr: {car: {car: l154, cdr: {car: l304, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l205, cdr: {car: {car: l154, cdr: {car: {car: l68, cdr: {car: {car: l205, cdr: {car: {car: l300, cdr: l3}, cdr: {car: {car: l194, cdr: {car: {car: l265, cdr: {car: l300, cdr: {car: {car: l151, cdr: {car: l292, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: l197, cdr: l3}}, cdr: {car: l300, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l301, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l153, cdr: {car: l296, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
    l116.function(l293);
    l116.function(l292);
    l116.function(l291);
    l116.function(l290);
    l116.function(l289);
    l116.function(l288);
    l116.function(l287);
    l116.function(l286);
    l116.function(l285);
    l116.function(l284);
    l116.function(l283);
    l116.function(l282);
    l116.function(l281);
    l116.function(l280);
    l116.function(l279);
    l116.function(l278);
    l116.function(l277);
    l116.function(l276);
    l116.function(l275);
    l116.function(l274);
    l116.function(l273);
    l116.function(l272);
    l116.function(l271);
    l116.function(l270);
    l116.function(l269);
    l116.function(l268);
    l116.function(l267);
    l116.function(l266);
    l116.function(l265);
    l116.function(l264);
    l116.function(l263);
    l116.function(l262);
    l116.function(l261);
    l116.function(l260);
    l116.function(l259);
    l116.function(l258);
    l116.function(l257);
    l116.function(l256);
    l116.function(l255);
    l116.function(l254);
    l116.function(l253);
    l116.function(l252);
    l116.function(l251);
    l116.function(l250);
    l116.function(l249);
    l116.function(l248);
    l116.function(l247);
    l116.function(l246);
    l116.function(l245);
    l116.function(l244);
    l116.function(l243);
    l116.function(l242);
    l116.function(l241);
    l116.function(l240);
    l116.function(l239);
    l116.function(l238);
    l116.function(l237);
    l116.function(l236);
    l116.function(l235);
    l116.function(l234);
    l116.function(l233);
    l116.function(l232);
    l116.function(l231);
    l116.function(l230);
    l116.function(l229);
    l116.function(l228);
    l116.function(l227);
    l116.function(l226);
    l116.function(l225);
    l116.function(l224);
    l116.function(l223);
    l116.function(l222);
    l116.function(l221);
    l116.function(l220);
    l116.function(l219);
    l116.function(l218);
    l116.function(l217);
    l116.function(l216);
    l116.function(l215);
    l116.function(l214);
    l116.function(l213);
    l116.function(l212);
    l116.function(l211);
    l116.function(l210);
    l116.function(l209);
    l116.function(l208);
    l116.function(l207);
    l116.function(l206);
    l116.function(l205);
    l116.function(l204);
    l116.function(l203);
    l116.function(l202);
    l116.function(l201);
    l116.function(l200);
    l116.function(l199);
    l116.function(l197);
    l116.function(l196);
    l116.function(l195);
    l116.function(l194);
    l116.function(l193);
    l116.function(l192);
    l116.function(l191);
    l116.function(l190);
    l116.function(l189);
    l116.function(l188);
    l116.function(l187);
    l116.function(l186);
    l116.function(l185);
    l116.function(l184);
    l116.function(l183);
    l116.function(l182);
    l116.function(l181);
    l116.function(l180);
    l116.function(l179);
    l116.function(l178);
    l116.function(l177);
    l116.function(l176);
    l116.function(l175);
    l116.function(l174);
    l116.function(l173);
    l116.function(l172);
    l116.function(l171);
    l116.function(l170);
    l116.function(l169);
    l116.function(l168);
    l116.function(l167);
    l116.function(l166);
    l116.function(l165);
    l116.function(l164);
    l116.function(l163);
    l116.function(l162);
    l116.function(l161);
    l116.function(l160);
    l116.function(l159);
    l116.function(l158);
    l116.function(l157);
    l116.function(l156);
    l116.function(l155);
    l116.function(l154);
    l116.function(l153);
    l116.function(l152);
    l116.function(l151);
    l116.function(l150);
    l116.function(l149);
    l116.function(l148);
    l116.function(l147);
    l116.function(l146);
    l116.function(l145);
    l116.function(l144);
    l116.function(l143);
    l116.function(l142);
    l116.function(l141);
    l116.function(l140);
    l116.function(l139);
    l116.function(l138);
    l116.function(l137);
    l116.function(l136);
    l116.function(l135);
    l116.function(l134);
    l116.function(l133);
    l116.function(l132);
    l116.function(l131);
    l116.function(l130);
    l116.function(l129);
    l116.function(l128);
    l116.function(l127);
    l116.function(l126);
    l116.function(l125);
    l116.function(l124);
    l116.function(l123);
    l116.function(l122);
    l116.function(l121);
    l116.function(l120);
    l116.function(l119);
    l116.function(l118);
    l116.function(l117);
    l116.function(l116);
    l116.function(l115);
    l116.function(l114);
    l116.function(l113);
    l116.function(l112);
    l116.function(l111);
    l116.function(l110);
    l116.function(l109);
    l116.function(l108);
    l116.function(l107);
    l116.function(l106);
    l116.function(l105);
    l116.function(l104);
    l116.function(l103);
    l116.function(l102);
    l116.function(l101);
    l116.function(l100);
    l116.function(l99);
    l116.function(l98);
    l116.function(l97);
    l116.function(l96);
    l116.function(l95);
    l116.function(l94);
    l116.function(l93);
    l116.function(l92);
    l116.function(l91);
    l116.function(l90);
    l116.function(l89);
    l116.function(l88);
    l116.function(l87);
    l116.function(l86);
    l116.function(l85);
    l116.function(l84);
    l116.function(l83);
    l116.function(l82);
    l116.function(l81);
    l116.function(l80);
    l116.function(l79);
    l116.function(l78);
    l116.function(l77);
    l116.function(l76);
    l116.function(l75);
    l116.function(l74);
    l116.function(l73);
    l116.function(l72);
    l116.function(l71);
    l116.function(l70);
    l116.function(l69);
    l116.function(l68);
    l116.function(l67);
    l116.function(l66);
    l116.function(l65);
    l116.function(l64);
    l116.function(l63);
    l116.function(l62);
    l116.function(l61);
    l116.function(l60);
    l116.function(l59);
    l116.function(l58);
    l116.function(l57);
    l116.function(l56);
    l116.function(l55);
    l116.function(l54);
    l116.function(l53);
    l116.function(l52);
    l116.function(l51);
    l116.function(l50);
    l116.function(l49);
    l116.function(l48);
    l116.function(l47);
    l116.function(l46);
    l116.function(l45);
    l116.function(l44);
    l116.function(l43);
    l116.function(l42);
    l116.function(l41);
    l116.function(l40);
    l116.function(l39);
    l116.function(l38);
    l116.function(l37);
    l116.function(l36);
    l116.function(l35);
    l116.function(l34);
    l116.function(l33);
    l116.function(l32);
    l116.function(l31);
    l116.function(l30);
    l116.function(l29);
    l116.function(l28);
    l116.function(l27);
    l116.function(l26);
    l116.function(l25);
    l116.function(l24);
    l116.function(l23);
    l116.function(l22);
    l116.function(l21);
    l116.function(l20);
    l116.function(l19);
    l116.function(l18);
    l116.function(l17);
    l116.function(l16);
    l116.function(l15);
    l116.function(l14);
    l116.function(l13);
    l116.function(l12);
    l116.function(l11);
    l116.function(l10);
    l116.function(l9);
    l116.function(l8);
    l116.function(l7);
    l116.function(l6);
    l116.function(l5);
    l116.function(l4);
    l116.function(l3);
    l116.function(l2);
    l116.function(l1);
    (l211).value = l295;
    (l172).value = l325;
    (l173).value = 784;
    (l14).value = 204;
    return (l227).value = 270;
})();
(l212).value = 325;
