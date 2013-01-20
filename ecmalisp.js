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
                        var x = v95;
                        if (typeof x != 'string')
                            throw 'The value ' + x + ' is not a type string.';
                        return x.length;
                    })() : l65.function(v95));
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
var l127 = {name: "INDENT"};
(function(){
    (l127).function = (function(v263){
        ((v263)["fname"] = "INDENT");
        return v263;
    })((function (){
        var v257= l3.value;
        for (var i = arguments.length-1; i>=0; i--)
            v257 = {car: arguments[i], cdr: 
        v257};
        return (function(){
            try {
                return (function(){
                    return (function(v258){
                        return (function(v259,v260,v261){
                            (l75.function(l66.function(v258)) !== l3.value ? (function(){
                                return v259 = l122.function(v259, (function(){
                                    return "    ";
                                })());
                            })() : l3.value);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((function(){
                                                var x1 = v260;
                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                var x2 = v261;
                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                return (x1<x2?l4.value: l3.value);
                                            })() !== l3.value){
                                                (function(v262){
                                                    return v259 = l122.function(v259, (function(){
                                                        return v262;
                                                    })());
                                                })(((l73.function((function(){
                                                    var string = v258;
                                                    var index = v260;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10) !== l3.value ? ((function(){
                                                    var x1 = v260;
                                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                                    var x2 = l22.function(v261);
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l3.value);
                                                })() !== l3.value ? l26.function(l73.function((function(){
                                                    var string = v258;
                                                    var index = l21.function(v260);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l122.function(l91.function(10), "    ") : l91.function((function(){
                                                    var string = v258;
                                                    var index = v260;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })())));
                                                v260 = (function(){
                                                    var x1 = v260;
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
                                    if (cf.type == 'block' && cf.id == 107)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v259;
                        })("",0,l66.function(v258));
                    })(l124.function(v257));
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
(function(){
    (l16).function = (function(v267){
        ((v267)["fname"] = "INTEGER-TO-STRING");
        return v267;
    })((function (v264){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l23.function(v264) !== l3.value ? (function(){
                        return "0";
                    })() : (l76.function(v264) !== l3.value ? (function(){
                        return l122.function("-", l16.function((function(){
                            var x1 = 0;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v264;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return x1-x2;
                        })()));
                    })() : (function(){
                        return (function(v265){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(l26.function(l23.function(v264)) !== l3.value){
                                                v265 = ({car: (function(){
                                                    var x = v264;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v265});
                                                v264 = l24.function(v264, 10);
                                            }return l3.value;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 109)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return l124.function(l68.function((function (v266){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l91.function((function(){
                                    var string = "0123456789";
                                    var index = v266;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                            
                            }), v265));
                        })(l3.value);
                    })()));
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
    return l16;
})();
var l128 = {name: "JS!BOOL"};
var l129 = {name: "LS-COMPILE"};
(function(){
    (l128).function = (function(v269){
        ((v269)["fname"] = "JS!BOOL");
        return v269;
    })((function (v268){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("(", v268, "?", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l3.value), ")");
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
    return l128;
})();
var l130 = {name: "JS!SELFCALL"};
l130;
var l131 = {name: "PRIN1-TO-STRING"};
var l132 = {name: "ESCAPE-STRING"};
(function(){
    (l131).function = (function(v275){
        ((v275)["fname"] = "PRIN1-TO-STRING");
        return v275;
    })((function (v270){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v270;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return ((function(){
                            var tmp = l117.function((v270).name, (function(){
                                var symbol = l114;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v270).name : (function(v271,v272){
                            return l122.function((((v271 === l104.function("KEYWORD"))?l4.value: l3.value) !== l3.value ? "" : l105.function(v271)), ":", v272);
                        })(l113.function(v270),(v270).name));
                    })() : (l74.function(v270) !== l3.value ? (function(){
                        return l16.function(v270);
                    })() : (((typeof(v270) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", (function(){
                            var symbol = l132;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v270), "\"");
                    })() : (((typeof v270 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v273){
                            return (v273 !== l3.value ? l122.function("#<FUNCTION ", v273, ">") : l122.function("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v270)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l57.function(v270) !== l3.value ? (function(){
                        return l122.function("(", l125.function(l68.function((function(){
                            var symbol = l131;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l80.function(v270)), " "), (function(v274){
                            return (l11.function((function(){
                                var tmp = v274;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l131.function((function(){
                                var tmp = v274;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l122.function(l131.function((function(){
                                var tmp = v274;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l131.function((function(){
                                var tmp = v274;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l79.function(v270)), ")");
                    })() : (l103.function(v270) !== l3.value ? (function(){
                        return l122.function("#<PACKAGE ", l105.function(v270), ">");
                    })() : l3.value))))));
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
    (l95).function = (function(v277){
        ((v277)["fname"] = "WRITE-LINE");
        return v277;
    })((function (v276){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (function(){
                        var x = v276;
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
                    return v276;
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
    return l95;
})();
var l133 = {name: "WARN"};
(function(){
    (l133).function = (function(v279){
        ((v279)["fname"] = "WARN");
        return v279;
    })((function (v278){
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
                    return l95.function(v278);
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
    return l133;
})();
var l134 = {name: "PRINT"};
(function(){
    (l134).function = (function(v281){
        ((v281)["fname"] = "PRINT");
        return v281;
    })((function (v280){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l95.function(l131.function(v280));
                    return v280;
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
    return l134;
})();
var l135 = {name: "MAKE-STRING-STREAM"};
(function(){
    (l135).function = (function(v283){
        ((v283)["fname"] = "MAKE-STRING-STREAM");
        return v283;
    })((function (v282){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ({car: v282, cdr: 0});
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
    return l135;
})();
var l136 = {name: "%PEEK-CHAR"};
(function(){
    (l136).function = (function(v285){
        ((v285)["fname"] = "%PEEK-CHAR");
        return v285;
    })((function (v284){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v284;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l66.function((function(){
                            var tmp = v284;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(){
                        var string = (function(){
                            var tmp = v284;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v284;
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
                if (cf.type == 'block' && cf.id == 116)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l136;
})();
var l137 = {name: "%READ-CHAR"};
(function(){
    (l137).function = (function(v288){
        ((v288)["fname"] = "%READ-CHAR");
        return v288;
    })((function (v286){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(){
                        var x1 = (function(){
                            var tmp = v286;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = l66.function((function(){
                            var tmp = v286;
                            return tmp === l3.value? l3.value: tmp.car;
                        })());
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l3.value);
                    })() !== l3.value ? (function(v287){
                        (function(){
                            var x = v286;
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.cdr = l21.function((function(){
                                var tmp = v286;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()));
                        })();
                        return v287;
                    })((function(){
                        var string = (function(){
                            var tmp = v286;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        var index = (function(){
                            var tmp = v286;
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
                if (cf.type == 'block' && cf.id == 117)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l137;
})();
var l138 = {name: "WHITESPACEP"};
(function(){
    (l138).function = (function(v292){
        ((v292)["fname"] = "WHITESPACEP");
        return v292;
    })((function (v289){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v290){
                        return (v290 !== l3.value ? v290 : (function(v291){
                            return (v291 !== l3.value ? v291 : l73.function(v289, 9));
                        })(l73.function(v289, 10)));
                    })(l73.function(v289, 32));
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
    return l138;
})();
var l139 = {name: "SKIP-WHITESPACES"};
(function(){
    (l139).function = (function(v295){
        ((v295)["fname"] = "SKIP-WHITESPACES");
        return v295;
    })((function (v293){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v294){
                        v294 = l136.function(v293);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v294 !== l3.value ? l138.function(v294) : l3.value) !== l3.value){
                                            l137.function(v293);
                                            v294 = l136.function(v293);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 120)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l3.value);
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
    return l139;
})();
var l140 = {name: "TERMINALP"};
(function(){
    (l140).function = (function(v300){
        ((v300)["fname"] = "TERMINALP");
        return v300;
    })((function (v296){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v297){
                        return (v297 !== l3.value ? v297 : (function(v298){
                            return (v298 !== l3.value ? v298 : (function(v299){
                                return (v299 !== l3.value ? v299 : l73.function(40, v296));
                            })(l73.function(41, v296)));
                        })(l138.function(v296)));
                    })(l11.function(v296));
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
var l141 = {name: "READ-UNTIL"};
(function(){
    (l141).function = (function(v305){
        ((v305)["fname"] = "READ-UNTIL");
        return v305;
    })((function (v301,v302){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v303,v304){
                        v304 = l136.function(v301);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v304 !== l3.value ? l26.function((v302)(v304)) : l3.value) !== l3.value){
                                            v303 = l122.function(v303, l91.function(v304));
                                            l137.function(v301);
                                            v304 = l136.function(v301);
                                        }return l3.value;
                                    })();
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 123)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v303;
                    })("",l3.value);
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
var l142 = {name: "SKIP-WHITESPACES-AND-COMMENTS"};
(function(){
    (l142).function = (function(v309){
        ((v309)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v309;
    })((function (v306){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v307){
                        l139.function(v306);
                        v307 = l136.function(v306);
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v307 !== l3.value ? l73.function(v307, 59) : l3.value) !== l3.value){
                                            l141.function(v306, (function (v308){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l73.function(v308, 10);
                                            
                                            }));
                                            l139.function(v306);
                                            v307 = l136.function(v306);
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
    return l142;
})();
var l143 = {name: "%READ-LIST"};
var l144 = {name: "LS-READ"};
(function(){
    (l143).function = (function(v313){
        ((v313)["fname"] = "%READ-LIST");
        return v313;
    })((function (v310){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l142.function(v310);
                    return (function(v311){
                        return (l11.function(v311) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l73.function(v311, 41) !== l3.value ? (function(){
                            l137.function(v310);
                            return l3.value;
                        })() : (l73.function(v311, 46) !== l3.value ? (function(){
                            l137.function(v310);
                            return (function(v312){
                                l142.function(v310);
                                (l73.function(l137.function(v310), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v312;
                            })((function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v310));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v310), cdr: l143.function(v310)});
                        })())));
                    })(l136.function(v310));
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
var l145 = {name: "READ-STRING"};
(function(){
    (l145).function = (function(v317){
        ((v317)["fname"] = "READ-STRING");
        return v317;
    })((function (v314){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v315,v316){
                        v316 = l137.function(v314);
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.function(l25.function(v316, 34)) !== l3.value){
                                            (l11.function(v316) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l25.function(v316, 92) !== l3.value ? (function(){
                                                return v316 = l137.function(v314);
                                            })() : l3.value);
                                            v315 = l122.function(v315, l91.function(v316));
                                            v316 = l137.function(v314);
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
                        return v315;
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
var l146 = {name: "READ-SHARP"};
(function(){
    (l146).function = (function(v322){
        ((v322)["fname"] = "READ-SHARP");
        return v322;
    })((function (v318){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l137.function(v318);
                    return (function(v319){
                        return (l25.function(v319, 39) !== l3.value ? (function(){
                            return l42.function(l97, (function(){
                                var symbol = l144;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v318));
                        })() : (l25.function(v319, 92) !== l3.value ? (function(){
                            return (function(v320){
                                return (l92.function(v320, "space") !== l3.value ? (function(){
                                    return l72.function(32);
                                })() : (l92.function(v320, "tab") !== l3.value ? (function(){
                                    return l72.function(9);
                                })() : (l92.function(v320, "newline") !== l3.value ? (function(){
                                    return l72.function(10);
                                })() : (function(){
                                    return l72.function((function(){
                                        var string = v320;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l122.function(l91.function(l137.function(v318)), l141.function(v318, (function(){
                                var symbol = l140;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l25.function(v319, 43) !== l3.value ? (function(){
                            return (function(v321){
                                return (l92.function(v321, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l144;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v318);
                                    return (function(){
                                        var symbol = l144;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v318);
                                })() : (l92.function(v321, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l144;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v318);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l141.function(v318, (function(){
                                var symbol = l140;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())));
                    })(l137.function(v318));
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
var l147 = {name: "READ-SYMBOL"};
(function(){
    (l147).function = (function(v330){
        ((v330)["fname"] = "READ-SYMBOL");
        return v330;
    })((function (v323){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v324,v325,v326,v327,v328){
                        v328 = 0;
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(((function(){
                                            var x1 = v328;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v324;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value ? l26.function(l73.function((function(){
                                            var string = v323;
                                            var index = v328;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })(), 58)) : l3.value) !== l3.value){
                                            v328 = (function(){
                                                var x1 = v328;
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
                                if (cf.type == 'block' && cf.id == 131)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        ((function(){
                            var x1 = v328;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            var x2 = v324;
                            if (typeof x2 !== 'number') throw 'Not a number!';
                            return (x1==x2?l4.value: l3.value);
                        })() !== l3.value ? (function(){
                            v326 = v323;
                            v325 = (function(){
                                var symbol = l114;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                            return v327 = l4.value;
                        })() : (function(){
                            (l23.function(v328) !== l3.value ? v325 = "KEYWORD" : v325 = (function(){
                                var x = l86.function(v323, 0, v328);
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.toUpperCase();
                            })());
                            v328 = (function(){
                                var x1 = v328;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = 1;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })();
                            (l73.function((function(){
                                var string = v323;
                                var index = v328;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 58) !== l3.value ? (function(){
                                v327 = l4.value;
                                return v328 = (function(){
                                    var x1 = v328;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = 1;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                            })() : l3.value);
                            return v326 = l86.function(v323, v328);
                        })());
                        v326 = (function(){
                            var x = v326;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })();
                        v325 = l104.function(v325);
                        return ((function(v329){
                            return (v329 !== l3.value ? v329 : ((v325 === l104.function("KEYWORD"))?l4.value: l3.value));
                        })(v327) !== l3.value ? l119.function(v326, v325) : l118.function(v326, v325));
                    })(l66.function(v323),l3.value,l3.value,l3.value,l3.value);
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
    return l147;
})();
var l148 = {name: "*EOF*"};
(function(){
    (((l148.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l148).value = l15.function();
    })());
    return l148;
})();
var l149 = {name: "QUOTE"};
var l150 = {name: "BACKQUOTE"};
var l151 = {name: "UNQUOTE-SPLICING"};
var l152 = {name: "UNQUOTE"};
(function(){
    (l144).function = (function(v335){
        ((v335)["fname"] = "LS-READ");
        return v335;
    })((function (v331){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l142.function(v331);
                    return (function(v332){
                        return ((function(v333){
                            return (v333 !== l3.value ? v333 : l73.function(v332, 41));
                        })(l11.function(v332)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l148;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l73.function(v332, 40) !== l3.value ? (function(){
                            l137.function(v331);
                            return l143.function(v331);
                        })() : (l73.function(v332, 39) !== l3.value ? (function(){
                            l137.function(v331);
                            return l42.function(l149, l144.function(v331));
                        })() : (l73.function(v332, 96) !== l3.value ? (function(){
                            l137.function(v331);
                            return l42.function(l150, l144.function(v331));
                        })() : (l73.function(v332, 34) !== l3.value ? (function(){
                            l137.function(v331);
                            return l145.function(v331);
                        })() : (l73.function(v332, 44) !== l3.value ? (function(){
                            l137.function(v331);
                            return (l25.function(l136.function(v331), 64) !== l3.value ? (function(){
                                l137.function(v331);
                                return l42.function(l151, l144.function(v331));
                            })() : l42.function(l152, l144.function(v331)));
                        })() : (l73.function(v332, 35) !== l3.value ? (function(){
                            return l146.function(v331);
                        })() : (function(){
                            return (function(v334){
                                return (l89.function((function(){
                                    var symbol = l85;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v334) !== l3.value ? l87.function(v334) : l147.function(v334));
                            })(l141.function(v331, (function(){
                                var symbol = l140;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l136.function(v331));
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
    return l144;
})();
var l153 = {name: "LS-READ-FROM-STRING"};
(function(){
    (l153).function = (function(v337){
        ((v337)["fname"] = "LS-READ-FROM-STRING");
        return v337;
    })((function (v336){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l144.function(l135.function(v336));
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
    return l153;
})();
var l154 = {name: "*COMPILATION-UNIT-CHECKS*"};
(function(){
    (((l154.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l154).value = l3;
    })());
    return l154;
})();
var l155 = {name: "MAKE-BINDING"};
(function(){
    (l155).function = (function(v342){
        ((v342)["fname"] = "MAKE-BINDING");
        return v342;
    })((function (v338,v339,v340,v341){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 4) throw 'too many arguments';
        switch(arguments.length){
        case 3:
        v341=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return l42.function(v338, v339, v340, v341);
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
    return l155;
})();
var l156 = {name: "BINDING-NAME"};
(function(){
    (l156).function = (function(v344){
        ((v344)["fname"] = "BINDING-NAME");
        return v344;
    })((function (v343){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l38.function(v343);
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
    return l156;
})();
var l157 = {name: "BINDING-TYPE"};
(function(){
    (l157).function = (function(v346){
        ((v346)["fname"] = "BINDING-TYPE");
        return v346;
    })((function (v345){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l39.function(v345);
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
    return l157;
})();
var l158 = {name: "BINDING-VALUE"};
(function(){
    (l158).function = (function(v348){
        ((v348)["fname"] = "BINDING-VALUE");
        return v348;
    })((function (v347){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.function(v347);
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
    return l158;
})();
var l159 = {name: "BINDING-DECLARATIONS"};
(function(){
    (l159).function = (function(v350){
        ((v350)["fname"] = "BINDING-DECLARATIONS");
        return v350;
    })((function (v349){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.function(v349);
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
    return l159;
})();
var l160 = {name: "SET-BINDING-VALUE"};
(function(){
    (l160).function = (function(v353){
        ((v353)["fname"] = "SET-BINDING-VALUE");
        return v353;
    })((function (v351,v352){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l34.function(v351);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v352);
                    })();
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
    return l160;
})();
var l161 = {name: "SET-BINDING-DECLARATIONS"};
(function(){
    (l161).function = (function(v356){
        ((v356)["fname"] = "SET-BINDING-DECLARATIONS");
        return v356;
    })((function (v354,v355){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.function(v354);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = v355);
                    })();
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
    return l161;
})();
var l162 = {name: "PUSH-BINDING-DECLARATION"};
(function(){
    (l162).function = (function(v359){
        ((v359)["fname"] = "PUSH-BINDING-DECLARATION");
        return v359;
    })((function (v357,v358){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l161.function(v358, ({car: v357, cdr: l159.function(v358)}));
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
    return l162;
})();
var l163 = {name: "MAKE-LEXENV"};
(function(){
    (l163).function = (function(v360){
        ((v360)["fname"] = "MAKE-LEXENV");
        return v360;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.function(l3.value, l3.value, l3.value, l3.value);
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
    return l163;
})();
var l164 = {name: "COPY-LEXENV"};
(function(){
    (l164).function = (function(v362){
        ((v362)["fname"] = "COPY-LEXENV");
        return v362;
    })((function (v361){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l70.function(v361);
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
    return l164;
})();
var l165 = {name: "PUSH-TO-LEXENV"};
var l166 = {name: "BLOCK"};
var l167 = {name: "GOTAG"};
(function(){
    (l165).function = (function(v367){
        ((v367)["fname"] = "PUSH-TO-LEXENV");
        return v367;
    })((function (v363,v364,v365){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v366){
                        return (l25.function(v366, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = v364;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v363, cdr: (function(){
                                    var tmp = v364;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l25.function(v366, l97) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v364;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v363, cdr: l32.function(v364)}));
                            })();
                        })() : (l25.function(v366, l166) !== l3.value ? (function(){
                            return (function(){
                                var x = l34.function(v364);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v363, cdr: l35.function(v364)}));
                            })();
                        })() : (l25.function(v366, l167) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.function(v364);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v363, cdr: l37.function(v364)}));
                            })();
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v365);
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
    return l165;
})();
var l168 = {name: "EXTEND-LEXENV"};
(function(){
    (l168).function = (function(v374){
        ((v374)["fname"] = "EXTEND-LEXENV");
        return v374;
    })((function (v368,v369,v370){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v371){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v372,v373){
                                        (function(){
                                            while(v372 !== l3.value){
                                                v373 = (function(){
                                                    var tmp = v372;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    l165.function(v373, v371, v370);
                                                    return l3.value;
                                                })();
                                                v372 = (function(){
                                                    var tmp = v372;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v371;
                                    })(l64.function(v368),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 146)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l164.function(v369));
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
    return l168;
})();
var l169 = {name: "LOOKUP-IN-LEXENV"};
(function(){
    (l169).function = (function(v379){
        ((v379)["fname"] = "LOOKUP-IN-LEXENV");
        return v379;
    })((function (v375,v376,v377){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l90.function(v375, (function(v378){
                        return (l25.function(v378, l98) !== l3.value ? (function(){
                            return l38.function(v376);
                        })() : (l25.function(v378, l97) !== l3.value ? (function(){
                            return l39.function(v376);
                        })() : (l25.function(v378, l166) !== l3.value ? (function(){
                            return l40.function(v376);
                        })() : (l25.function(v378, l167) !== l3.value ? (function(){
                            return l41.function(v376);
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })()))));
                    })(v377));
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
    return l169;
})();
var l170 = {name: "*ENVIRONMENT*"};
(function(){
    (((l170.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l170).value = l163.function();
    })());
    return l170;
})();
var l171 = {name: "*VARIABLE-COUNTER*"};
(function(){
    (((l171.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l171).value = 0;
    })());
    return l171;
})();
var l172 = {name: "GVARNAME"};
(function(){
    (l172).function = (function(v381){
        ((v381)["fname"] = "GVARNAME");
        return v381;
    })((function (v380){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("v", l16.function((l171).value = (function(){
                        var x1 = (function(){
                            var symbol = l171;
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
                if (cf.type == 'block' && cf.id == 148)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l172;
})();
var l173 = {name: "TRANSLATE-VARIABLE"};
(function(){
    (l173).function = (function(v383){
        ((v383)["fname"] = "TRANSLATE-VARIABLE");
        return v383;
    })((function (v382){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l158.function(l169.function(v382, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l98));
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
    return l173;
})();
var l174 = {name: "EXTEND-LOCAL-ENV"};
var l175 = {name: "LEXICAL-VARIABLE"};
(function(){
    (l174).function = (function(v389){
        ((v389)["fname"] = "EXTEND-LOCAL-ENV");
        return v389;
    })((function (v384){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v385){
                        return (function(){
                            try {
                                return (function(){
                                    return (function(v386,v387){
                                        (function(){
                                            while(v386 !== l3.value){
                                                v387 = (function(){
                                                    var tmp = v386;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v388){
                                                        return l165.function(v388, v385, l98);
                                                    })(l155.function(v387, l175, l172.function(v387)));
                                                    return l3.value;
                                                })();
                                                v386 = (function(){
                                                    var tmp = v386;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return v385;
                                    })(v384,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 151)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l164.function((function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()));
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
    return l174;
})();
var l176 = {name: "*TOPLEVEL-COMPILATIONS*"};
(function(){
    (((l176.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l176).value = l3.value;
    })());
    return l176;
})();
var l177 = {name: "TOPLEVEL-COMPILATION"};
(function(){
    (l177).function = (function(v391){
        ((v391)["fname"] = "TOPLEVEL-COMPILATION");
        return v391;
    })((function (v390){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l176).value = ({car: v390, cdr: (function(){
                        var symbol = l176;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()});
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
    return l177;
})();
var l178 = {name: "NULL-OR-EMPTY-P"};
(function(){
    (l178).function = (function(v393){
        ((v393)["fname"] = "NULL-OR-EMPTY-P");
        return v393;
    })((function (v392){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l23.function(l66.function(v392));
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
    return l178;
})();
var l179 = {name: "GET-TOPLEVEL-COMPILATIONS"};
(function(){
    (l179).function = (function(v394){
        ((v394)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v394;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.function(l83.function((function(){
                        var symbol = l178;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), (function(){
                        var symbol = l176;
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
    return l179;
})();
var l180 = {name: "%COMPILE-DEFMACRO"};
var l181 = {name: "MACRO"};
(function(){
    (l180).function = (function(v397){
        ((v397)["fname"] = "%COMPILE-DEFMACRO");
        return v397;
    })((function (v395,v396){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l177.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l149), l42.function(v395))));
                    return l165.function(l155.function(v395, l181, v396), (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97);
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
    return l180;
})();
var l182 = {name: "GLOBAL-BINDING"};
(function(){
    (l182).function = (function(v403){
        ((v403)["fname"] = "GLOBAL-BINDING");
        return v403;
    })((function (v398,v399,v400){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v401){
                        return (v401 !== l3.value ? v401 : (function(v402){
                            l165.function(v402, (function(){
                                var symbol = l170;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v400);
                            return v402;
                        })(l155.function(v398, v399, l3.value)));
                    })(l169.function(v398, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v400));
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
    return l182;
})();
var l183 = {name: "CLAIMP"};
(function(){
    (l183).function = (function(v408){
        ((v408)["fname"] = "CLAIMP");
        return v408;
    })((function (v404,v405,v406){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v407){
                        return (v407 !== l3.value ? l81.function(v406, l159.function(v407)) : l3.value);
                    })(l169.function(v404, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), v405));
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
    return l183;
})();
var l184 = {name: "!PROCLAIM"};
var l185 = {name: "SPECIAL"};
var l186 = {name: "NOTINLINE"};
var l187 = {name: "CONSTANT"};
var l188 = {name: "NON-OVERRIDABLE"};
(function(){
    (l184).function = (function(v423){
        ((v423)["fname"] = "!PROCLAIM");
        return v423;
    })((function (v409){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v410){
                        return (l25.function(v410, l185) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v411,v412){
                                            (function(){
                                                while(v411 !== l3.value){
                                                    v412 = (function(){
                                                        var tmp = v411;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v413){
                                                            return l162.function(l185, v413);
                                                        })(l182.function(v412, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v411 = (function(){
                                                        var tmp = v411;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v409;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 159)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.function(v410, l186) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v414,v415){
                                            (function(){
                                                while(v414 !== l3.value){
                                                    v415 = (function(){
                                                        var tmp = v414;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v416){
                                                            return l162.function(l186, v416);
                                                        })(l182.function(v415, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v414 = (function(){
                                                        var tmp = v414;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v409;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 160)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.function(v410, l187) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v417,v418){
                                            (function(){
                                                while(v417 !== l3.value){
                                                    v418 = (function(){
                                                        var tmp = v417;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v419){
                                                            return l162.function(l187, v419);
                                                        })(l182.function(v418, l98, l98));
                                                        return l3.value;
                                                    })();
                                                    v417 = (function(){
                                                        var tmp = v417;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v409;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 161)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : (l25.function(v410, l188) !== l3.value ? (function(){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v420,v421){
                                            (function(){
                                                while(v420 !== l3.value){
                                                    v421 = (function(){
                                                        var tmp = v420;
                                                        return tmp === l3.value? l3.value: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v422){
                                                            return l162.function(l188, v422);
                                                        })(l182.function(v421, l97, l97));
                                                        return l3.value;
                                                    })();
                                                    v420 = (function(){
                                                        var tmp = v420;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })();
                                                }return l3.value;
                                            })();
                                            return l3.value;
                                        })((function(){
                                            var tmp = v409;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })(),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 162)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })() : l3.value))));
                    })((function(){
                        var tmp = v409;
                        return tmp === l3.value? l3.value: tmp.car;
                    })());
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
    return l184;
})();
var l189 = {name: "PROCLAIM"};
(l189).function = (function(){
    var symbol = l184;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})();
var l190 = {name: "*COMPILATIONS*"};
(function(){
    (((l190.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l190).value = l3.value;
    })());
    return l190;
})();
var l191 = {name: "DEFINE-COMPILATION"};
l191;
var l192 = {name: "IF"};
(l190).value = ({car: l42.function(l192, (function (v424,v425,v426){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v424), " !== ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v425), " : ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v426), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 163)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l193 = {name: "*LAMBDA-LIST-KEYWORDS*"};
var l194 = {name: "&OPTIONAL"};
var l195 = {name: "&REST"};
var l196 = {car: l194, cdr: {car: l195, cdr: l3}};
(function(){
    (((l193.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l193).value = l196;
    })());
    return l193;
})();
var l197 = {name: "LIST-UNTIL-KEYWORD"};
(function(){
    (l197).function = (function(v429){
        ((v429)["fname"] = "LIST-UNTIL-KEYWORD");
        return v429;
    })((function (v427){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v428){
                        return (v428 !== l3.value ? v428 : l81.function((function(){
                            var tmp = v427;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l193;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.function(v427)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v427;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l197.function((function(){
                        var tmp = v427;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())}));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 164)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l197;
})();
var l198 = {name: "LAMBDA-LIST-REQUIRED-ARGUMENTS"};
(function(){
    (l198).function = (function(v431){
        ((v431)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v431;
    })((function (v430){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l197.function(v430);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 165)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l198;
})();
var l199 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"};
(function(){
    (l199).function = (function(v433){
        ((v433)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v433;
    })((function (v432){
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
                    })(), l197.function((function(){
                        var tmp = l81.function(l194, v432);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 166)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l199;
})();
var l200 = {name: "LAMBDA-LIST-OPTIONAL-ARGUMENTS"};
(function(){
    (l200).function = (function(v435){
        ((v435)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v435;
    })((function (v434){
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
                    })(), l199.function(v434));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 167)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l200;
})();
var l201 = {name: "LAMBDA-LIST-REST-ARGUMENT"};
(function(){
    (l201).function = (function(v438){
        ((v438)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
        return v438;
    })((function (v436){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v437){
                        ((function(){
                            var tmp = v437;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (function(){
                            return (function(){
                                throw "Bad lambda-list";
                            })();
                        })() : l3.value);
                        return (function(){
                            var tmp = v437;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })(l197.function((function(){
                        var tmp = l81.function(l195, v436);
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()));
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
    return l201;
})();
var l202 = {name: "LAMBDA-DOCSTRING-WRAPPER"};
(function(){
    (l202).function = (function(v441){
        ((v441)["fname"] = "LAMBDA-DOCSTRING-WRAPPER");
        return v441;
    })((function (v440){
        if (arguments.length < 1) throw 'too few arguments';
        var v439= l3.value;
        for (var i = arguments.length-1; i>=1; i--)
            v439 = {car: arguments[i], cdr: 
        v439};
        return (function(){
            try {
                return (function(){
                    return (v440 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("var func = ", l124.function(v439), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "func.docstring = '", v440, "';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "return func;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : l124.function(v439));
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
    return l202;
})();
var l203 = {name: "LAMBDA"};
var l204 = {name: "LS-COMPILE-BLOCK"};
(l190).value = ({car: l42.function(l203, (function (v443){
    if (arguments.length < 1) throw 'too few arguments';
    var v442= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v442 = {car: arguments[i], cdr: 
    v442};
    return (function(){
        try {
            return (function(){
                return (function(v444,v445,v446,v447){
                    ((((typeof((function(){
                        var tmp = v442;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l26.function(l11.function((function(){
                        var tmp = v442;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })())) : l3.value) !== l3.value ? (function(){
                        v447 = (function(){
                            var tmp = v442;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                        return v442 = (function(){
                            var tmp = v442;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })();
                    })() : l3.value);
                    return (function(v448,v449,v450){
                        try {
                            var tmp;
                            tmp = l170.value;
                            l170.value = v450;
                            v450 = tmp;
                            return l202.function(v447, "(function (", l124.function(l68.function((function(){
                                var symbol = l173;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.function(v444, v445)), ","), "){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function((v444 !== l3.value ? l122.function("if (arguments.length < ", l16.function(v448), ") throw 'too few arguments';", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l26.function(v446) !== l3.value ? l122.function("if (arguments.length > ", l16.function((function(){
                                var x1 = v448;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v449;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })()), ") throw 'too many arguments';", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v445 !== l3.value ? l122.function("switch(arguments.length){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(v451,v452,v453){
                                return (function(){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while((function(){
                                                        var x1 = v453;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = v449;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return (x1<x2?l4.value: l3.value);
                                                    })() !== l3.value){
                                                        (function(v454){
                                                            v452 = ({car: l122.function("case ", l16.function((function(){
                                                                var x1 = v453;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = v448;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })()), ":", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), l173.function((function(){
                                                                var tmp = v454;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l129;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l32.function(v454)), ";", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })()), cdr: v452});
                                                            return v453 = (function(){
                                                                var x1 = v453;
                                                                if (typeof x1 !== 'number') throw 'Not a number!';
                                                                var x2 = 1;
                                                                if (typeof x2 !== 'number') throw 'Not a number!';
                                                                return x1+x2;
                                                            })();
                                                        })(l78.function(v453, v451));
                                                    }return l3.value;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 171)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    v452 = ({car: l122.function("default: break;", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v452});
                                    return l124.function(l64.function(v452));
                                })();
                            })(l199.function(v443),l3.value,0), "}", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v446 !== l3.value ? (function(v455){
                                return l122.function("var ", v455, "= ", (function(){
                                    var symbol = l129;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.function((function(){
                                    var x1 = v448;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v449;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })()), "; i--)", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l127.function(v455, " = ", "{car: arguments[i], cdr: "), v455, "};", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l173.function(v446)) : ""), (function(){
                                var symbol = l204;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v442, l4.value)), (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "})");
                        }
                        finally {
                            l170.value = v450;
                        }
                    })(l66.function(v444),l66.function(v445),l174.function(l62.function(l56.function(v446), v444, v445)));
                })(l198.function(v443),l200.function(v443),l201.function(v443),l3.value);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 170)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l205 = {name: "SETQ"};
var l206 = {name: "SET"};
(l190).value = ({car: l42.function(l205, (function (v456,v457){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v458){
                    return (((l157.function(v458) === l175)?l4.value: l3.value) !== l3.value ? l122.function(l158.function(v458), " = ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v457)) : (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l206), l42.function(l62.function(l42.function(l149), l42.function(v456))), l42.function(v457))));
                })(l169.function(v456, (function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l98));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 172)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l207 = {name: "JS-VREF"};
(l190).value = ({car: l42.function(l207, (function (v459){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return v459;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 173)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l208 = {name: "JS-VSET"};
(l190).value = ({car: l42.function(l208, (function (v460,v461){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l122.function("(", v460, " = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v461), ")");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(function(){
    (l132).function = (function(v468){
        ((v468)["fname"] = "ESCAPE-STRING");
        return v468;
    })((function (v462){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v463,v464,v465){
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((function(){
                                            var x1 = v464;
                                            if (typeof x1 !== 'number') throw 'Not a number!';
                                            var x2 = v465;
                                            if (typeof x2 !== 'number') throw 'Not a number!';
                                            return (x1<x2?l4.value: l3.value);
                                        })() !== l3.value){
                                            (function(v466){
                                                ((function(v467){
                                                    return (v467 !== l3.value ? v467 : l73.function(v466, 92));
                                                })(l73.function(v466, 34)) !== l3.value ? (function(){
                                                    return v463 = l122.function(v463, "\\");
                                                })() : l3.value);
                                                (l73.function(v466, 10) !== l3.value ? (function(){
                                                    v463 = l122.function(v463, "\\");
                                                    return v466 = 110;
                                                })() : l3.value);
                                                return v463 = l122.function(v463, l91.function(v466));
                                            })((function(){
                                                var string = v462;
                                                var index = v464;
                                                if (typeof string != 'string')
                                                    throw 'The value ' + string + ' is not a type string.';
                                                if (typeof index != 'number')
                                                    throw 'The value ' + index + ' is not a type number.';
                                                return string.charCodeAt(index);
                                            })());
                                            v464 = (function(){
                                                var x1 = v464;
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
                                if (cf.type == 'block' && cf.id == 176)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v463;
                    })("",0,l66.function(v462));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 175)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l132;
})();
var l209 = {name: "*LITERAL-SYMBOLS*"};
(function(){
    (((l209.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l209).value = l3.value;
    })());
    return l209;
})();
var l210 = {name: "*LITERAL-COUNTER*"};
(function(){
    (((l210.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l210).value = 0;
    })());
    return l210;
})();
var l211 = {name: "GENLIT"};
(function(){
    (l211).function = (function(v469){
        ((v469)["fname"] = "GENLIT");
        return v469;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l122.function("l", l16.function((l210).value = (function(){
                        var x1 = (function(){
                            var symbol = l210;
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
                if (cf.type == 'block' && cf.id == 177)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l211;
})();
var l212 = {name: "LITERAL"};
(function(){
    (l212).function = (function(v477){
        ((v477)["fname"] = "LITERAL");
        return v477;
    })((function (v470,v471){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v471=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (l74.function(v470) !== l3.value ? (function(){
                        return l16.function(v470);
                    })() : (((typeof(v470) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", l132.function(v470), "\"");
                    })() : (((function(){
                        var tmp = v470;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v472){
                            return (v472 !== l3.value ? v472 : (function(v473,v474){
                                (l209).value = ({car: ({car: v470, cdr: v473}), cdr: (function(){
                                    var symbol = l209;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()});
                                l177.function(l122.function("var ", v473, " = ", v474));
                                return v473;
                            })(l211.function(),(function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l119), l42.function((v470).name), l42.function(l105.function(l113.function(v470)))))));
                        })((function(){
                            var tmp = l90.function(v470, (function(){
                                var symbol = l209;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (((function(){
                        var tmp = v470;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v475){
                            return (v471 !== l3.value ? v475 : (function(v476){
                                l177.function(l122.function("var ", v476, " = ", v475));
                                return v476;
                            })(l211.function()));
                        })(l122.function("{car: ", l212.function((function(){
                            var tmp = v470;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l212.function((function(){
                            var tmp = v470;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : l3.value))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 178)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l212;
})();
(l190).value = ({car: l42.function(l149, (function (v478){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l212.function(v478);
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l213 = {name: "%WHILE"};
(l190).value = ({car: l42.function(l213, (function (v480){
    if (arguments.length < 1) throw 'too few arguments';
    var v479= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v479 = {car: arguments[i], cdr: 
    v479};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("while(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v480), " !== ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v479)), "}", "return ", (function(){
                    var symbol = l129;
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
            if (cf.type == 'block' && cf.id == 180)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l214 = {name: "SYMBOL-FUNCTION"};
(l190).value = ({car: l42.function(l97, (function (v481){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l57.function(v481) !== l3.value ? (((function(){
                    var tmp = v481;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l203)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v481);
                })() : (((function(){
                    var tmp = v481;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l214), l42.function(l62.function(l42.function(l149), l42.function(v481)))));
                })() : l3.value));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l215 = {name: "EVAL-WHEN-COMPILE"};
var l216 = {name: "EVAL"};
var l217 = {name: "PROGN"};
(l190).value = ({car: l42.function(l215, (function (){
    var v482= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v482 = {car: arguments[i], cdr: 
    v482};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l216;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l217, cdr: v482}));
                return l3.value;
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 182)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l218 = {name: "DEFINE-TRANSFORMATION"};
l218;
(l190).value = ({car: l42.function(l217, (function (){
    var v483= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v483 = {car: arguments[i], cdr: 
    v483};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v483, l4.value)), "})()");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l219 = {name: "SPECIAL-VARIABLE-P"};
(function(){
    (l219).function = (function(v485){
        ((v485)["fname"] = "SPECIAL-VARIABLE-P");
        return v485;
    })((function (v484){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l183.function(v484, l98, l185);
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
    return l219;
})();
var l220 = {name: "LET-BINDING-WRAPPER"};
(function(){
    (l220).function = (function(v492){
        ((v492)["fname"] = "LET-BINDING-WRAPPER");
        return v492;
    })((function (v486,v487){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v486) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 185, value: v487, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l122.function("try {", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("var tmp;", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l126.function((function (v488){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v489){
                            return l122.function("tmp = ", v489, ".value;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v489, ".value = ", (function(){
                                var tmp = v488;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v488;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l149), l42.function((function(){
                            var tmp = v488;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v486), v487, (function(){
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
                    })(), l127.function(l126.function((function (v490){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v491){
                            return l122.function(v491, ".value", " = ", (function(){
                                var tmp = v490;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l149), l42.function((function(){
                            var tmp = v490;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v486)), "}", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
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
    return l220;
})();
var l221 = {name: "LET"};
(l190).value = ({car: l42.function(l221, (function (v494){
    if (arguments.length < 1) throw 'too few arguments';
    var v493= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v493 = {car: arguments[i], cdr: 
    v493};
    return (function(){
        try {
            return (function(){
                return (function(v495){
                    return (function(v496){
                        return (function(v497,v499,v498){
                            try {
                                var tmp;
                                tmp = l170.value;
                                l170.value = v499;
                                v499 = tmp;
                                return l122.function("(function(", l124.function(l68.function((function (v500){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (l219.function(v500) !== l3.value ? (function(v501){
                                        v498 = ({car: ({car: v500, cdr: v501}), cdr: v498});
                                        return v501;
                                    })(l172.function(v500)) : l173.function(v500));
                                
                                }), v496), ","), "){", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(v502){
                                    return l127.function(l220.function(v498, v502));
                                })((function(){
                                    var symbol = l204;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v493, l4.value)), "})(", l124.function(v497, ","), ")");
                            }
                            finally {
                                l170.value = v499;
                            }
                        })(l68.function((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l68.function((function(){
                            var symbol = l39;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v495)),l174.function(l83.function((function(){
                            var symbol = l219;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v496)),l3.value);
                    })(l68.function((function(){
                        var symbol = l38;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v495));
                })(l68.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v494));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l222 = {name: "LET*-INITIALIZE-VALUE"};
(function(){
    (l222).function = (function(v509){
        ((v509)["fname"] = "LET*-INITIALIZE-VALUE");
        return v509;
    })((function (v503){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v504,v505){
                        return (l219.function(v504) !== l3.value ? l122.function((function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l205), l42.function(v504), l42.function(v505))), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(v506){
                            return (function(v507){
                                return (function(v508){
                                    l165.function(v507, (function(){
                                        var symbol = l170;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(), l98);
                                    return v508;
                                })(l122.function("var ", v506, " = ", (function(){
                                    var symbol = l129;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v505), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()));
                            })(l155.function(v504, l98, v506));
                        })(l172.function(v504)));
                    })(l38.function(v503),l39.function(v503));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 187)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l222;
})();
var l223 = {name: "LET*-BINDING-WRAPPER"};
(function(){
    (l223).function = (function(v518){
        ((v518)["fname"] = "LET*-BINDING-WRAPPER");
        return v518;
    })((function (v510,v511){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.function(v510) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 188, value: v511, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v513){
                        return l122.function("try {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l126.function((function (v514){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v515){
                                return l122.function("var ", (function(){
                                    var tmp = v514;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v515, ".value;", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l149), l42.function((function(){
                                var tmp = v514;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v513), v511), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l126.function((function (v516){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v517){
                                return l122.function(v517, ".value", " = ", (function(){
                                    var tmp = v516;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l129;
                                var func = symbol.function;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.function(l42.function(l149), l42.function((function(){
                                var tmp = v516;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v513)), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l68.function((function (v512){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return ({car: v512, cdr: l172.function(v512)});
                    
                    }), l84.function((function(){
                        var symbol = l219;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v510)));
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
    return l223;
})();
var l224 = {name: "LET*"};
(l190).value = ({car: l42.function(l224, (function (v520){
    if (arguments.length < 1) throw 'too few arguments';
    var v519= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v519 = {car: arguments[i], cdr: 
    v519};
    return (function(){
        try {
            return (function(){
                return (function(v521,v522){
                    try {
                        var tmp;
                        tmp = l170.value;
                        l170.value = v522;
                        v522 = tmp;
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function((function(v523,v524){
                            return l223.function(v523, v524);
                        })(l84.function((function(){
                            var symbol = l219;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l68.function((function(){
                            var symbol = l38;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v521)),l122.function(l126.function((function(){
                            var symbol = l222;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v521), (function(){
                            var symbol = l204;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v519, l4.value)))), "})()");
                    }
                    finally {
                        l170.value = v522;
                    }
                })(l68.function((function(){
                    var symbol = l56;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v520),l164.function((function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l225 = {name: "*BLOCK-COUNTER*"};
(function(){
    (((l225.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l225).value = 0;
    })());
    return l225;
})();
(l190).value = ({car: l42.function(l166, (function (v526){
    if (arguments.length < 1) throw 'too few arguments';
    var v525= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v525 = {car: arguments[i], cdr: 
    v525};
    return (function(){
        try {
            return (function(){
                return (function(v527){
                    return (function(v528){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("try {", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v529){
                            try {
                                var tmp;
                                tmp = l170.value;
                                l170.value = v529;
                                v529 = tmp;
                                return l127.function("return ", (function(){
                                    var symbol = l129;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.function(l42.function(l217), v525)), ";", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l170.value = v529;
                            }
                        })(l168.function(l42.function(v528), (function(){
                            var symbol = l170;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l166)), "}", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "catch (cf){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "    if (cf.type == 'block' && cf.id == ", v527, ")", (function(){
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
                    })(l155.function(v526, l166, v527));
                })(l16.function((l225).value = (function(){
                    var x1 = (function(){
                        var symbol = l225;
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
            if (cf.type == 'block' && cf.id == 190)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l226 = {name: "RETURN-FROM"};
(l190).value = ({car: l42.function(l226, (function (v530,v531){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v531=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v532){
                    return (v532 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw ({", "type: 'block', ", "id: ", l158.function(v532), ", ", "value: ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v531), ", ", "message: 'Return from unknown block ", (v530).name, ".'", "})"), "})()") : (function(){
                        throw l122.function("Unknown block `", (v530).name, "'.");
                    })());
                })(l169.function(v530, (function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l166));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 191)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l227 = {name: "CATCH"};
(l190).value = ({car: l42.function(l227, (function (v534){
    if (arguments.length < 1) throw 'too few arguments';
    var v533= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v533 = {car: arguments[i], cdr: 
    v533};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("var id = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v534), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("return ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.function(l42.function(l217), v533)), ";", (function(){
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
            if (cf.type == 'block' && cf.id == 192)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l228 = {name: "THROW"};
(l190).value = ({car: l42.function(l228, (function (v535,v536){
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
                })(), l127.function("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v535), ", ", "value: ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v536), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l229 = {name: "*TAGBODY-COUNTER*"};
(function(){
    (((l229.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l229).value = 0;
    })());
    return l229;
})();
var l230 = {name: "*GO-TAG-COUNTER*"};
(function(){
    (((l230.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l230).value = 0;
    })());
    return l230;
})();
var l231 = {name: "GO-TAG-P"};
(function(){
    (l231).function = (function(v539){
        ((v539)["fname"] = "GO-TAG-P");
        return v539;
    })((function (v537){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v538){
                        return (v538 !== l3.value ? v538 : ((function(){
                            var tmp = v537;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l74.function(v537));
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
    return l231;
})();
var l232 = {name: "DECLARE-TAGBODY-TAGS"};
(function(){
    (l232).function = (function(v545){
        ((v545)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v545;
    })((function (v540,v541){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v544){
                        return l168.function(v544, (function(){
                            var symbol = l170;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l167);
                    })(l68.function((function (v542){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v543){
                            return l155.function(v542, l167, l42.function(v540, v543));
                        })(l16.function((l230).value = (function(){
                            var x1 = (function(){
                                var symbol = l230;
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
                        var symbol = l231;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v541)));
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
    return l232;
})();
var l233 = {name: "TAGBODY"};
(l190).value = ({car: l42.function(l233, (function (){
    var v546= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v546 = {car: arguments[i], cdr: 
    v546};
    return (function(){
        try {
            return (function(){
                (l88.function((function(){
                    var symbol = l231;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v546) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 196, value: (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.function(l42.function(l217), v546, l42.function(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l231.function((function(){
                    var tmp = v546;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return v546 = ({car: l15.function("START"), cdr: v546});
                })());
                return (function(v547){
                    return (function(v549,v548){
                        try {
                            var tmp;
                            tmp = l170.value;
                            l170.value = v549;
                            v549 = tmp;
                            (function(v550){
                                return v548 = l39.function(l158.function(v550));
                            })(l169.function(l38.function(v546), (function(){
                                var symbol = l170;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l167));
                            return l122.function("(function(){", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function("var tagbody_", v547, " = ", v548, ";", (function(){
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
                            })(), l127.function("try {", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l127.function((function(v551){
                                return l122.function("switch(tagbody_", v547, "){", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v548, ":", (function(){
                                    var symbol = l121;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v552,v553){
                                                (function(){
                                                    while(v552 !== l3.value){
                                                        v553 = (function(){
                                                            var tmp = v552;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })();
                                                        (function(){
                                                            v551 = l122.function(v551, (function(){
                                                                return (l26.function(l231.function(v553)) !== l3.value ? l127.function((function(){
                                                                    var symbol = l129;
                                                                    var func = symbol.function;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v553), ";", (function(){
                                                                    var symbol = l121;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v554){
                                                                    return l122.function("case ", l39.function(l158.function(v554)), ":", (function(){
                                                                        var symbol = l121;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l169.function(v553, (function(){
                                                                    var symbol = l170;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l167)));
                                                            })());
                                                            return l3.value;
                                                        })();
                                                        v552 = (function(){
                                                            var tmp = v552;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })();
                                                    }return l3.value;
                                                })();
                                                return v551;
                                            })((function(){
                                                var tmp = v546;
                                                return tmp === l3.value? l3.value: tmp.cdr;
                                            })(),l3.value);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 197)
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
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v547, ")", (function(){
                                var symbol = l121;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v547, " = jump.label;", (function(){
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
                                var symbol = l129;
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
                            l170.value = v549;
                        }
                    })(l232.function(v547, v546),l3.value);
                })(l16.function((function(){
                    var symbol = l229;
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l234 = {name: "GO"};
(l190).value = ({car: l42.function(l234, (function (v555){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v556,v557){
                    return (v556 !== l3.value ? l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw ({", "type: 'tagbody', ", "id: ", l38.function(l158.function(v556)), ", ", "label: ", l39.function(l158.function(v556)), ", ", "message: 'Attempt to GO to non-existing tag ", v557, "'", "})", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l122.function("Unknown tag `", v557, "'.");
                    })());
                })(l169.function(v555, (function(){
                    var symbol = l170;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l167),(((function(){
                    var tmp = v555;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v555).name;
                })() : (l74.function(v555) !== l3.value ? (function(){
                    return l16.function(v555);
                })() : l3.value)));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l235 = {name: "UNWIND-PROTECT"};
(l190).value = ({car: l42.function(l235, (function (v559){
    if (arguments.length < 1) throw 'too few arguments';
    var v558= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v558 = {car: arguments[i], cdr: 
    v558};
    return (function(){
        try {
            return (function(){
                return l122.function("(function(){", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function("var ret = ", (function(){
                    var symbol = l129;
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
                })(), l127.function("ret = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v559), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l127.function((function(){
                    var symbol = l204;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v558)), "}", (function(){
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
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l236 = {name: "BACKQUOTE-EXPAND-1"};
(function(){
    (l236).function = (function(v562){
        ((v562)["fname"] = "BACKQUOTE-EXPAND-1");
        return v562;
    })((function (v560){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v560;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l42.function(l149, v560);
                    })() : (l43.function(v560) !== l3.value ? (function(){
                        return v560;
                    })() : ((((function(){
                        var tmp = v560;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l152)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v560;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v560;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l150)?l4.value: l3.value) !== l3.value ? (function(){
                        return l236.function(l236.function(l32.function(v560)));
                    })() : (function(){
                        return ({car: l62, cdr: l68.function((function (v561){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l57.function(v561) !== l3.value ? (((function(){
                                var tmp = v561;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l152)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l42.function(l42, l32.function(v561));
                            })() : ((l57.function(v561) !== l3.value ? (((function(){
                                var tmp = v561;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l151)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l32.function(v561);
                            })() : (function(){
                                return l42.function(l42, l236.function(v561));
                            })()));
                        
                        }), v560)});
                    })()))));
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
    return l236;
})();
var l237 = {name: "BACKQUOTE-EXPAND"};
(function(){
    (l237).function = (function(v564){
        ((v564)["fname"] = "BACKQUOTE-EXPAND");
        return v564;
    })((function (v563){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l57.function(v563) !== l3.value ? (((function(){
                        var tmp = v563;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l150)?l4.value: l3.value) : l3.value) !== l3.value ? l236.function(l32.function(v563)) : v563);
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
l150;
(l190).value = ({car: l42.function(l150, (function (v565){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l236.function(v565));
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
    var symbol = l190;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l238 = {name: "*BUILTINS*"};
(function(){
    (((l238.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return (l238).value = l3.value;
    })());
    return l238;
})();
var l239 = {name: "DEFINE-RAW-BUILTIN"};
l239;
var l240 = {name: "DEFINE-BUILTIN"};
l240;
var l241 = {name: "TYPE-CHECK"};
l241;
var l242 = {name: "VARIABLE-ARITY-CALL"};
(function(){
    (l242).function = (function(v574){
        ((v574)["fname"] = "VARIABLE-ARITY-CALL");
        return v574;
    })((function (v566,v567){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v566;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "ARGS must be a non-empty list";
                        })();
                    })());
                    return (function(v568,v569,v570){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v571,v572){
                                        (function(){
                                            while(v571 !== l3.value){
                                                v572 = (function(){
                                                    var tmp = v571;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (function(v573){
                                                        v569 = ({car: v573, cdr: v569});
                                                        return v570 = l122.function(v570, (function(){
                                                            return l122.function("var ", v573, " = ", (function(){
                                                                var symbol = l129;
                                                                var func = symbol.function;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v572), ";", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), "if (typeof ", v573, " !== 'number') throw 'Not a number!';", (function(){
                                                                var symbol = l121;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })());
                                                        })());
                                                    })(l122.function("x", l16.function(v568 = (function(){
                                                        var x1 = v568;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })())));
                                                    return l3.value;
                                                })();
                                                v571 = (function(){
                                                    var tmp = v571;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v566,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 204)
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
                        })(), l127.function(v570, (v567)(l64.function(v569))), "})()");
                    })(0,l3,"");
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 203)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l242;
})();
var l243 = {name: "VARIABLE-ARITY"};
l243;
var l244 = {name: "NUM-OP-NUM"};
(function(){
    (l244).function = (function(v578){
        ((v578)["fname"] = "NUM-OP-NUM");
        return v578;
    })((function (v575,v576,v577){
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
                    })(), l127.function(l122.function("var ", "x", " = ", v575, ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l122.function("var ", "y", " = ", v577, ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l122.function("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l122.function("return ", (function(){
                        return l122.function("x", v576, "y");
                    })(), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), "})()");
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
    return l244;
})();
(l238).value = ({car: l42.function(l59, (function (){
    var v579= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v579 = {car: arguments[i], cdr: 
    v579};
    return (function(){
        try {
            return (function(){
                return (l11.function(v579) !== l3.value ? "0" : l242.function(v579, (function (v580){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l122.function("return ", l124.function(v580, "+"), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l238).value = ({car: l42.function(l60, (function (v582){
    if (arguments.length < 1) throw 'too few arguments';
    var v581= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v581 = {car: arguments[i], cdr: 
    v581};
    return (function(){
        try {
            return (function(){
                return (function(v583){
                    return l242.function(v583, (function (v584){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", (l11.function(v581) !== l3.value ? l122.function("-", (function(){
                            var tmp = v584;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l124.function(v584, "-")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v582, cdr: v581}));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 207)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l238).value = ({car: l42.function(l19, (function (){
    var v585= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v585 = {car: arguments[i], cdr: 
    v585};
    return (function(){
        try {
            return (function(){
                return (l11.function(v585) !== l3.value ? "1" : l242.function(v585, (function (v586){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l122.function("return ", l124.function(v586, "*"), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })());
                
                })));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l238).value = ({car: l42.function(l20, (function (v588){
    if (arguments.length < 1) throw 'too few arguments';
    var v587= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v587 = {car: arguments[i], cdr: 
    v587};
    return (function(){
        try {
            return (function(){
                return (function(v589){
                    return l242.function(v589, (function (v590){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", (l11.function(v587) !== l3.value ? l122.function("1 /", (function(){
                            var tmp = v590;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l124.function(v590, "/")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v588, cdr: v587}));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l245 = {name: "MOD"};
(function(){
    return (l238).value = ({car: l42.function(l245, (function (v591,v592){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v593,v594){
                        return l244.function(v593, "%", v594);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v591),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v592));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l246 = {name: "COMPARISON-CONJUNTION"};
(function(){
    (l246).function = (function(v597){
        ((v597)["fname"] = "COMPARISON-CONJUNTION");
        return v597;
    })((function (v595,v596){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.function((function(){
                        var tmp = v595;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return "true";
                    })() : (l11.function(l34.function(v595)) !== l3.value ? (function(){
                        return l122.function((function(){
                            var tmp = v595;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v596, l32.function(v595));
                    })() : (function(){
                        return l122.function((function(){
                            var tmp = v595;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v596, l32.function(v595), " && ", l246.function((function(){
                            var tmp = v595;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v596));
                    })()));
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
    return l246;
})();
var l247 = {name: "DEFINE-BUILTIN-COMPARISON"};
l247;
var l248 = {name: ">"};
(l238).value = ({car: l42.function(l248, (function (v599){
    if (arguments.length < 1) throw 'too few arguments';
    var v598= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v598 = {car: arguments[i], cdr: 
    v598};
    return (function(){
        try {
            return (function(){
                return (function(v600){
                    return l242.function(v600, (function (v601){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l128.function(l246.function(v601, ">")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v599, cdr: v598}));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l249 = {name: "<"};
(l238).value = ({car: l42.function(l249, (function (v603){
    if (arguments.length < 1) throw 'too few arguments';
    var v602= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v602 = {car: arguments[i], cdr: 
    v602};
    return (function(){
        try {
            return (function(){
                return (function(v604){
                    return l242.function(v604, (function (v605){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l128.function(l246.function(v605, "<")), ";", (function(){
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l250 = {name: ">="};
(l238).value = ({car: l42.function(l250, (function (v607){
    if (arguments.length < 1) throw 'too few arguments';
    var v606= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v606 = {car: arguments[i], cdr: 
    v606};
    return (function(){
        try {
            return (function(){
                return (function(v608){
                    return l242.function(v608, (function (v609){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l128.function(l246.function(v609, ">=")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v607, cdr: v606}));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l251 = {name: "<="};
(l238).value = ({car: l42.function(l251, (function (v611){
    if (arguments.length < 1) throw 'too few arguments';
    var v610= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v610 = {car: arguments[i], cdr: 
    v610};
    return (function(){
        try {
            return (function(){
                return (function(v612){
                    return l242.function(v612, (function (v613){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l128.function(l246.function(v613, "<=")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v611, cdr: v610}));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
(l238).value = ({car: l42.function(l18, (function (v615){
    if (arguments.length < 1) throw 'too few arguments';
    var v614= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v614 = {car: arguments[i], cdr: 
    v614};
    return (function(){
        try {
            return (function(){
                return (function(v616){
                    return l242.function(v616, (function (v617){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l122.function("return ", l128.function(l246.function(v617, "==")), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v615, cdr: v614}));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l252 = {name: "NUMBERP"};
(function(){
    return (l238).value = ({car: l42.function(l252, (function (v618){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v619){
                        return l128.function(l122.function("(typeof (", v619, ") == \"number\")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v618));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l253 = {name: "FLOOR"};
(function(){
    return (l238).value = ({car: l42.function(l253, (function (v620){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v621){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v621, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v620));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l27, (function (v622,v623){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v624,v625){
                        return l122.function("({car: ", v624, ", cdr: ", v625, "})");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v622),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v623));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l28, (function (v626){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v627){
                        return l128.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v627, ";", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v626));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l29, (function (v628){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v629){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v629, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l129;
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v628));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l30, (function (v630){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v631){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v631, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l129;
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v630));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l254 = {name: "SETCAR"};
(function(){
    return (l238).value = ({car: l42.function(l254, (function (v632,v633){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v634,v635){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v634, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return l122.function("(x.car = ", v635, ")");
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v632),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v633));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l255 = {name: "SETCDR"};
(function(){
    return (l238).value = ({car: l42.function(l255, (function (v636,v637){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v638,v639){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v638, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("return ", (function(){
                            return l122.function("(x.cdr = ", v639, ")");
                        })(), ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v636),(function(){
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l256 = {name: "SYMBOLP"};
(function(){
    return (l238).value = ({car: l42.function(l256, (function (v640){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v641){
                        return l128.function(l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", v641, ";", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v640));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l257 = {name: "MAKE-SYMBOL"};
(function(){
    return (l238).value = ({car: l42.function(l257, (function (v642){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v643){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "name", " = ", v643, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
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
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l258 = {name: "SYMBOL-NAME"};
(function(){
    return (l238).value = ({car: l42.function(l258, (function (v644){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v645){
                        return l122.function("(", v645, ").name");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v644));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l206, (function (v646,v647){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v648,v649){
                        return l122.function("(", v648, ").value = ", v649);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v646),(function(){
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l259 = {name: "FSET"};
(function(){
    return (l238).value = ({car: l42.function(l259, (function (v650,v651){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v652,v653){
                        return l122.function("(", v652, ").function = ", v653);
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v650),(function(){
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l17, (function (v654){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v655){
                        return l128.function(l122.function("(", v655, ".value !== undefined)"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v654));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l260 = {name: "SYMBOL-VALUE"};
(function(){
    return (l238).value = ({car: l42.function(l260, (function (v656){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v657){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var symbol = ", v657, ";", (function(){
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
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l214, (function (v658){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v659){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var symbol = ", v659, ";", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v658));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l261 = {name: "SYMBOL-PLIST"};
(function(){
    return (l238).value = ({car: l42.function(l261, (function (v660){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v661){
                        return l122.function("((", v661, ").plist || ", (function(){
                            var symbol = l129;
                            var func = symbol.function;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v660));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l262 = {name: "LAMBDA-CODE"};
(function(){
    return (l238).value = ({car: l42.function(l262, (function (v662){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v663){
                        return l122.function("(", v663, ").toString()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v662));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l263 = {name: "EQ"};
(function(){
    return (l238).value = ({car: l42.function(l263, (function (v664,v665){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v666,v667){
                        return l128.function(l122.function("(", v666, " === ", v667, ")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v664),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v665));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l264 = {name: "EQUAL"};
(function(){
    return (l238).value = ({car: l42.function(l264, (function (v668,v669){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v670,v671){
                        return l128.function(l122.function("(", v670, " == ", v671, ")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v668),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v669));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l265 = {name: "CHAR-TO-STRING"};
(function(){
    return (l238).value = ({car: l42.function(l265, (function (v672){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v673){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v673, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v672));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l266 = {name: "STRINGP"};
(function(){
    return (l238).value = ({car: l42.function(l266, (function (v674){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v675){
                        return l128.function(l122.function("(typeof(", v675, ") == \"string\")"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v674));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l267 = {name: "STRING-UPCASE"};
(function(){
    return (l238).value = ({car: l42.function(l267, (function (v676){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v677){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v677, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v676));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l268 = {name: "STRING-LENGTH"};
(function(){
    return (l238).value = ({car: l42.function(l268, (function (v678){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v679){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v679, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v678));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l269 = {name: "SLICE"};
(l238).value = ({car: l42.function(l269, (function (v680,v681,v682){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v682=l3.value;
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
                })(), l127.function("var str = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v680), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v681), ";", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l121;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v682 !== l3.value ? l122.function("b = ", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v682), ";", (function(){
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
            if (cf.type == 'block' && cf.id == 241)
                return cf.value;
            else
                throw cf;
        }
    })();

})), cdr: (function(){
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l270 = {name: "CHAR"};
(function(){
    return (l238).value = ({car: l42.function(l270, (function (v683,v684){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v685,v686){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "string", " = ", v685, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("var ", "index", " = ", v686, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v683),(function(){
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    return (l238).value = ({car: l42.function(l67, (function (v687,v688){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v689,v690){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "string1", " = ", v689, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("var ", "string2", " = ", v690, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l122.function("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v687),(function(){
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l271 = {name: "FUNCALL"};
(l238).value = ({car: l42.function(l271, (function (v692){
    if (arguments.length < 1) throw 'too few arguments';
    var v691= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v691 = {car: arguments[i], cdr: 
    v691};
    return (function(){
        try {
            return (function(){
                return l122.function("(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v692), ")(", l124.function(l68.function((function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v691), ", "), ")");
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l272 = {name: "APPLY"};
(l238).value = ({car: l42.function(l272, (function (v694){
    if (arguments.length < 1) throw 'too few arguments';
    var v693= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v693 = {car: arguments[i], cdr: 
    v693};
    return (function(){
        try {
            return (function(){
                return (l11.function(v693) !== l3.value ? l122.function("(", (function(){
                    var symbol = l129;
                    var func = symbol.function;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v694), ")()") : (function(v695,v696){
                    return l122.function("(function(){", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l127.function("var f = ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v694), ";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l124.function(l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v695), ", "), "];", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v696), ");", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l129;
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
                })(l80.function(v693),(function(){
                    var tmp = l79.function(v693);
                    return tmp === l3.value? l3.value: tmp.car;
                })()));
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
    var symbol = l238;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
    return value;
})()});
var l273 = {name: "JS-EVAL"};
(function(){
    return (l238).value = ({car: l42.function(l273, (function (v697){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v698){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "string", " = ", v698, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v697));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l274 = {name: "ERROR"};
(function(){
    return (l238).value = ({car: l42.function(l274, (function (v699){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v700){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw ", v700, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v699));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l275 = {name: "NEW"};
(function(){
    return (l238).value = ({car: l42.function(l275, (function (){
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
                if (cf.type == 'block' && cf.id == 248)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    })), cdr: (function(){
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l276 = {name: "OBJECTP"};
(function(){
    return (l238).value = ({car: l42.function(l276, (function (v701){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v702){
                        return l128.function(l122.function("(typeof (", v702, ") === 'object')"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v701));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l277 = {name: "OGET"};
(function(){
    return (l238).value = ({car: l42.function(l277, (function (v703,v704){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v705,v706){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("var tmp = ", "(", v705, ")[", v706, "];", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l129;
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
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v703),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v704));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l278 = {name: "OSET"};
(function(){
    return (l238).value = ({car: l42.function(l278, (function (v707,v708,v709){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v710,v711,v712){
                        return l122.function("((", v710, ")[", v711, "] = ", v712, ")");
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v707),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v708),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v709));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l279 = {name: "IN"};
(function(){
    return (l238).value = ({car: l42.function(l279, (function (v713,v714){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v715,v716){
                        return l128.function(l122.function("((", v715, ") in (", v716, "))"));
                    })((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v713),(function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v714));
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l280 = {name: "FUNCTIONP"};
(function(){
    return (l238).value = ({car: l42.function(l280, (function (v717){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v718){
                        return l128.function(l122.function("(typeof ", v718, " == 'function')"));
                    })((function(){
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
var l281 = {name: "WRITE-STRING"};
(function(){
    return (l238).value = ({car: l42.function(l281, (function (v719){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v720){
                        return l122.function("(function(){", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function(l122.function("var ", "x", " = ", v720, ";", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l122.function("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l121;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l127.function("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
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
                        var symbol = l129;
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
        var symbol = l238;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()});
})();
(function(){
    (l181).function = (function(v723){
        ((v723)["fname"] = "MACRO");
        return v723;
    })((function (v721){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v721;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v722){
                        return (((l157.function(v722) === l181)?l4.value: l3.value) !== l3.value ? v722 : l3.value);
                    })(l169.function(v721, (function(){
                        var symbol = l170;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l97)) : l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 255)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l181;
})();
var l282 = {name: "LS-MACROEXPAND-1"};
(function(){
    (l282).function = (function(v728){
        ((v728)["fname"] = "LS-MACROEXPAND-1");
        return v728;
    })((function (v724){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v725){
                        return (v725 !== l3.value ? (function(v726){
                            (l57.function(v726) !== l3.value ? (function(){
                                return (function(v727){
                                    l160.function(v725, v727);
                                    return v726 = v727;
                                })((function(){
                                    var symbol = l216;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v726));
                            })() : l3.value);
                            return (function(){
                                var f = v726;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v724;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l158.function(v725)) : v724);
                    })(l181.function((function(){
                        var tmp = v724;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 256)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l282;
})();
var l283 = {name: "COMPILE-FUNCALL"};
(function(){
    (l283).function = (function(v731){
        ((v731)["fname"] = "COMPILE-FUNCALL");
        return v731;
    })((function (v729,v730){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v729;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l183.function(v729, l97, l188) : l3.value) !== l3.value ? l122.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l149), l42.function(v729))), ".function(", l124.function(l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v730), ", "), ")") : l122.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.function(l42.function(l97), l42.function(v729))), "(", l124.function(l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v730), ", "), ")"));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 257)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l283;
})();
(function(){
    (l204).function = (function(v734){
        ((v734)["fname"] = "LS-COMPILE-BLOCK");
        return v734;
    })((function (v732,v733){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v733=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v733 !== l3.value ? l122.function(l204.function(l80.function(v732)), "return ", (function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l79.function(v732);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l125.function(l83.function((function(){
                        var symbol = l178;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l68.function((function(){
                        var symbol = l129;
                        var func = symbol.function;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v732)), l122.function(";", (function(){
                        var symbol = l121;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 258)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l204;
})();
(function(){
    (l129).function = (function(v742){
        ((v742)["fname"] = "LS-COMPILE");
        return v742;
    })((function (v735){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v735;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v736){
                            return ((v736 !== l3.value ? l26.function(l81.function(l185, l159.function(v736))) : l3.value) !== l3.value ? (function(){
                                return l158.function(v736);
                            })() : ((function(v737){
                                return (v737 !== l3.value ? v737 : l81.function(l187, l159.function(v736)));
                            })(l112.function(v735)) !== l3.value ? (function(){
                                return l122.function(l129.function(l62.function(l42.function(l149), l42.function(v735))), ".value");
                            })() : (function(){
                                return l129.function(l62.function(l42.function(l260), l42.function(l62.function(l42.function(l149), l42.function(v735)))));
                            })()));
                        })(l169.function(v735, (function(){
                            var symbol = l170;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l98));
                    })() : (l74.function(v735) !== l3.value ? (function(){
                        return l16.function(v735);
                    })() : (((typeof(v735) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l122.function("\"", l132.function(v735), "\"");
                    })() : (l57.function(v735) !== l3.value ? (function(){
                        return (function(v738,v739){
                            return (l90.function(v738, (function(){
                                var symbol = l190;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v740){
                                    return (function(){
                                        var f = v740;
                                        var args = [];
                                        var tail = (v739);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l90.function(v738, (function(){
                                    var symbol = l190;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l90.function(v738, (function(){
                                var symbol = l238;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l26.function(l183.function(v738, l97, l186)) : l3.value) !== l3.value ? (function(){
                                return (function(v741){
                                    return (function(){
                                        var f = v741;
                                        var args = [];
                                        var tail = (v739);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.function(l90.function(v738, (function(){
                                    var symbol = l238;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l181.function(v738) !== l3.value ? l129.function(l282.function(v735)) : l283.function(v738, v739));
                            })()));
                        })((function(){
                            var tmp = v735;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v735;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : l3.value))));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 259)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l129;
})();
var l284 = {name: "LS-COMPILE-TOPLEVEL"};
(function(){
    (l284).function = (function(v747){
        ((v747)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v747;
    })((function (v743){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v744){
                        try {
                            var tmp;
                            tmp = l176.value;
                            l176.value = v744;
                            v744 = tmp;
                            return ((((function(){
                                var tmp = v743;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v743;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l217)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v745){
                                    return l124.function(l83.function((function(){
                                        var symbol = l178;
                                        var func = symbol.function;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v745));
                                })(l68.function((function(){
                                    var symbol = l284;
                                    var func = symbol.function;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v743;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v746){
                                    return l122.function(l125.function(l179.function(), l122.function(";", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v746 !== l3.value ? l122.function(v746, ";", (function(){
                                        var symbol = l121;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l129.function(v743));
                            })());
                        }
                        finally {
                            l176.value = v744;
                        }
                    })(l3.value);
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 260)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l284;
})();
var l285 = {name: "WITH-COMPILATION-UNIT"};
l285;
(function(){
    (l216).function = (function(v753){
        ((v753)["fname"] = "EVAL");
        return v753;
    })((function (v748){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v752){
                        return (function(){
                            var string = v752;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v749){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v750,v751){
                                        (function(){
                                            while(v750 !== l3.value){
                                                v751 = (function(){
                                                    var tmp = v750;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })();
                                                (function(){
                                                    (v751)();
                                                    return l3.value;
                                                })();
                                                v750 = (function(){
                                                    var tmp = v750;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })();
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })((function(){
                                        var symbol = l154;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })(),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 262)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return v749;
                    })((function(){
                        (l154).value = l3.value;
                        return l284.function(v748);
                    })()));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 261)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    
    }));
    return l216;
})();
var l286 = {name: "&BODY"};
var l287 = {name: "PRON"};
var l288 = {car: l195, cdr: {car: l194, cdr: {car: l286, cdr: {car: l19, cdr: {car: l14, cdr: {car: l114, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l249, cdr: {car: l251, cdr: {car: l18, cdr: {car: l18, cdr: {car: l248, cdr: {car: l250, cdr: {car: l52, cdr: {car: l62, cdr: {car: l272, cdr: {car: l90, cdr: {car: l43, cdr: {car: l166, cdr: {car: l17, cdr: {car: l17, cdr: {car: l80, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l227, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l270, cdr: {car: l72, cdr: {car: l73, cdr: {car: l71, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l70, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l7, cdr: {car: l85, cdr: {car: l94, cdr: {car: l96, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l263, cdr: {car: l25, cdr: {car: l264, cdr: {car: l274, cdr: {car: l216, cdr: {car: l89, cdr: {car: l120, cdr: {car: l93, cdr: {car: l104, cdr: {car: l118, cdr: {car: l38, cdr: {car: l41, cdr: {car: l259, cdr: {car: l271, cdr: {car: l97, cdr: {car: l280, cdr: {car: l15, cdr: {car: l234, cdr: {car: l69, cdr: {car: l192, cdr: {car: l115, cdr: {car: l44, cdr: {car: l74, cdr: {car: l74, cdr: {car: l119, cdr: {car: l112, cdr: {car: l203, cdr: {car: l79, cdr: {car: l66, cdr: {car: l221, cdr: {car: l224, cdr: {car: l100, cdr: {car: l42, cdr: {car: l57, cdr: {car: l101, cdr: {car: l257, cdr: {car: l68, cdr: {car: l81, cdr: {car: l76, cdr: {car: l245, cdr: {car: l3, cdr: {car: l26, cdr: {car: l78, cdr: {car: l77, cdr: {car: l11, cdr: {car: l252, cdr: {car: l53, cdr: {car: l105, cdr: {car: l107, cdr: {car: l103, cdr: {car: l75, cdr: {car: l131, cdr: {car: l134, cdr: {car: l189, cdr: {car: l54, cdr: {car: l55, cdr: {car: l287, cdr: {car: l46, cdr: {car: l149, cdr: {car: l82, cdr: {car: l83, cdr: {car: l84, cdr: {car: l12, cdr: {car: l226, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l206, cdr: {car: l205, cdr: {car: l88, cdr: {car: l267, cdr: {car: l91, cdr: {car: l92, cdr: {car: l266, cdr: {car: l86, cdr: {car: l214, cdr: {car: l258, cdr: {car: l113, cdr: {car: l261, cdr: {car: l260, cdr: {car: l256, cdr: {car: l4, cdr: {car: l233, cdr: {car: l40, cdr: {car: l228, cdr: {car: l24, cdr: {car: l6, cdr: {car: l235, cdr: {car: l98, cdr: {car: l133, cdr: {car: l5, cdr: {car: l95, cdr: {car: l281, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l120.function(l288);
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
    var symbol = l153;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l131;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l216;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l284;
    var func = symbol.function;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v754){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l216.function(l153.function(v754));

}));
(lisp.compileString = (function (v755){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l284.function(l153.function(v755));

}));
var l289 = {car: {car: l287, cdr: "l287"}, cdr: {car: {car: l286, cdr: "l286"}, cdr: {car: {car: l285, cdr: "l285"}, cdr: {car: {car: l284, cdr: "l284"}, cdr: {car: {car: l283, cdr: "l283"}, cdr: {car: {car: l282, cdr: "l282"}, cdr: {car: {car: l281, cdr: "l281"}, cdr: {car: {car: l280, cdr: "l280"}, cdr: {car: {car: l279, cdr: "l279"}, cdr: {car: {car: l278, cdr: "l278"}, cdr: {car: {car: l277, cdr: "l277"}, cdr: {car: {car: l276, cdr: "l276"}, cdr: {car: {car: l275, cdr: "l275"}, cdr: {car: {car: l274, cdr: "l274"}, cdr: {car: {car: l273, cdr: "l273"}, cdr: {car: {car: l272, cdr: "l272"}, cdr: {car: {car: l271, cdr: "l271"}, cdr: {car: {car: l270, cdr: "l270"}, cdr: {car: {car: l269, cdr: "l269"}, cdr: {car: {car: l268, cdr: "l268"}, cdr: {car: {car: l267, cdr: "l267"}, cdr: {car: {car: l266, cdr: "l266"}, cdr: {car: {car: l265, cdr: "l265"}, cdr: {car: {car: l264, cdr: "l264"}, cdr: {car: {car: l263, cdr: "l263"}, cdr: {car: {car: l262, cdr: "l262"}, cdr: {car: {car: l261, cdr: "l261"}, cdr: {car: {car: l260, cdr: "l260"}, cdr: {car: {car: l259, cdr: "l259"}, cdr: {car: {car: l258, cdr: "l258"}, cdr: {car: {car: l257, cdr: "l257"}, cdr: {car: {car: l256, cdr: "l256"}, cdr: {car: {car: l255, cdr: "l255"}, cdr: {car: {car: l254, cdr: "l254"}, cdr: {car: {car: l253, cdr: "l253"}, cdr: {car: {car: l252, cdr: "l252"}, cdr: {car: {car: l251, cdr: "l251"}, cdr: {car: {car: l250, cdr: "l250"}, cdr: {car: {car: l249, cdr: "l249"}, cdr: {car: {car: l248, cdr: "l248"}, cdr: {car: {car: l247, cdr: "l247"}, cdr: {car: {car: l246, cdr: "l246"}, cdr: {car: {car: l245, cdr: "l245"}, cdr: {car: {car: l244, cdr: "l244"}, cdr: {car: {car: l243, cdr: "l243"}, cdr: {car: {car: l242, cdr: "l242"}, cdr: {car: {car: l241, cdr: "l241"}, cdr: {car: {car: l240, cdr: "l240"}, cdr: {car: {car: l239, cdr: "l239"}, cdr: {car: {car: l238, cdr: "l238"}, cdr: {car: {car: l237, cdr: "l237"}, cdr: {car: {car: l236, cdr: "l236"}, cdr: {car: {car: l235, cdr: "l235"}, cdr: {car: {car: l234, cdr: "l234"}, cdr: {car: {car: l233, cdr: "l233"}, cdr: {car: {car: l232, cdr: "l232"}, cdr: {car: {car: l231, cdr: "l231"}, cdr: {car: {car: l230, cdr: "l230"}, cdr: {car: {car: l229, cdr: "l229"}, cdr: {car: {car: l228, cdr: "l228"}, cdr: {car: {car: l227, cdr: "l227"}, cdr: {car: {car: l226, cdr: "l226"}, cdr: {car: {car: l225, cdr: "l225"}, cdr: {car: {car: l224, cdr: "l224"}, cdr: {car: {car: l223, cdr: "l223"}, cdr: {car: {car: l222, cdr: "l222"}, cdr: {car: {car: l221, cdr: "l221"}, cdr: {car: {car: l220, cdr: "l220"}, cdr: {car: {car: l219, cdr: "l219"}, cdr: {car: {car: l218, cdr: "l218"}, cdr: {car: {car: l217, cdr: "l217"}, cdr: {car: {car: l216, cdr: "l216"}, cdr: {car: {car: l215, cdr: "l215"}, cdr: {car: {car: l214, cdr: "l214"}, cdr: {car: {car: l213, cdr: "l213"}, cdr: {car: {car: l212, cdr: "l212"}, cdr: {car: {car: l211, cdr: "l211"}, cdr: {car: {car: l210, cdr: "l210"}, cdr: {car: {car: l209, cdr: "l209"}, cdr: {car: {car: l208, cdr: "l208"}, cdr: {car: {car: l207, cdr: "l207"}, cdr: {car: {car: l206, cdr: "l206"}, cdr: {car: {car: l205, cdr: "l205"}, cdr: {car: {car: l204, cdr: "l204"}, cdr: {car: {car: l203, cdr: "l203"}, cdr: {car: {car: l202, cdr: "l202"}, cdr: {car: {car: l201, cdr: "l201"}, cdr: {car: {car: l200, cdr: "l200"}, cdr: {car: {car: l199, cdr: "l199"}, cdr: {car: {car: l198, cdr: "l198"}, cdr: {car: {car: l197, cdr: "l197"}, cdr: {car: {car: l195, cdr: "l195"}, cdr: {car: {car: l194, cdr: "l194"}, cdr: {car: {car: l193, cdr: "l193"}, cdr: {car: {car: l192, cdr: "l192"}, cdr: {car: {car: l191, cdr: "l191"}, cdr: {car: {car: l190, cdr: "l190"}, cdr: {car: {car: l189, cdr: "l189"}, cdr: {car: {car: l188, cdr: "l188"}, cdr: {car: {car: l187, cdr: "l187"}, cdr: {car: {car: l186, cdr: "l186"}, cdr: {car: {car: l185, cdr: "l185"}, cdr: {car: {car: l184, cdr: "l184"}, cdr: {car: {car: l183, cdr: "l183"}, cdr: {car: {car: l182, cdr: "l182"}, cdr: {car: {car: l181, cdr: "l181"}, cdr: {car: {car: l180, cdr: "l180"}, cdr: {car: {car: l179, cdr: "l179"}, cdr: {car: {car: l178, cdr: "l178"}, cdr: {car: {car: l177, cdr: "l177"}, cdr: {car: {car: l176, cdr: "l176"}, cdr: {car: {car: l175, cdr: "l175"}, cdr: {car: {car: l174, cdr: "l174"}, cdr: {car: {car: l173, cdr: "l173"}, cdr: {car: {car: l172, cdr: "l172"}, cdr: {car: {car: l171, cdr: "l171"}, cdr: {car: {car: l170, cdr: "l170"}, cdr: {car: {car: l169, cdr: "l169"}, cdr: {car: {car: l168, cdr: "l168"}, cdr: {car: {car: l167, cdr: "l167"}, cdr: {car: {car: l166, cdr: "l166"}, cdr: {car: {car: l165, cdr: "l165"}, cdr: {car: {car: l164, cdr: "l164"}, cdr: {car: {car: l163, cdr: "l163"}, cdr: {car: {car: l162, cdr: "l162"}, cdr: {car: {car: l161, cdr: "l161"}, cdr: {car: {car: l160, cdr: "l160"}, cdr: {car: {car: l159, cdr: "l159"}, cdr: {car: {car: l158, cdr: "l158"}, cdr: {car: {car: l157, cdr: "l157"}, cdr: {car: {car: l156, cdr: "l156"}, cdr: {car: {car: l155, cdr: "l155"}, cdr: {car: {car: l154, cdr: "l154"}, cdr: {car: {car: l153, cdr: "l153"}, cdr: {car: {car: l152, cdr: "l152"}, cdr: {car: {car: l151, cdr: "l151"}, cdr: {car: {car: l150, cdr: "l150"}, cdr: {car: {car: l149, cdr: "l149"}, cdr: {car: {car: l148, cdr: "l148"}, cdr: {car: {car: l147, cdr: "l147"}, cdr: {car: {car: l146, cdr: "l146"}, cdr: {car: {car: l145, cdr: "l145"}, cdr: {car: {car: l144, cdr: "l144"}, cdr: {car: {car: l143, cdr: "l143"}, cdr: {car: {car: l142, cdr: "l142"}, cdr: {car: {car: l141, cdr: "l141"}, cdr: {car: {car: l140, cdr: "l140"}, cdr: {car: {car: l139, cdr: "l139"}, cdr: {car: {car: l138, cdr: "l138"}, cdr: {car: {car: l137, cdr: "l137"}, cdr: {car: {car: l136, cdr: "l136"}, cdr: {car: {car: l135, cdr: "l135"}, cdr: {car: {car: l134, cdr: "l134"}, cdr: {car: {car: l133, cdr: "l133"}, cdr: {car: {car: l132, cdr: "l132"}, cdr: {car: {car: l131, cdr: "l131"}, cdr: {car: {car: l130, cdr: "l130"}, cdr: {car: {car: l129, cdr: "l129"}, cdr: {car: {car: l128, cdr: "l128"}, cdr: {car: {car: l127, cdr: "l127"}, cdr: {car: {car: l126, cdr: "l126"}, cdr: {car: {car: l125, cdr: "l125"}, cdr: {car: {car: l124, cdr: "l124"}, cdr: {car: {car: l123, cdr: "l123"}, cdr: {car: {car: l122, cdr: "l122"}, cdr: {car: {car: l121, cdr: "l121"}, cdr: {car: {car: l120, cdr: "l120"}, cdr: {car: {car: l119, cdr: "l119"}, cdr: {car: {car: l118, cdr: "l118"}, cdr: {car: {car: l117, cdr: "l117"}, cdr: {car: {car: l116, cdr: "l116"}, cdr: {car: {car: l115, cdr: "l115"}, cdr: {car: {car: l114, cdr: "l114"}, cdr: {car: {car: l113, cdr: "l113"}, cdr: {car: {car: l112, cdr: "l112"}, cdr: {car: {car: l111, cdr: "l111"}, cdr: {car: {car: l110, cdr: "l110"}, cdr: {car: {car: l109, cdr: "l109"}, cdr: {car: {car: l108, cdr: "l108"}, cdr: {car: {car: l107, cdr: "l107"}, cdr: {car: {car: l106, cdr: "l106"}, cdr: {car: {car: l105, cdr: "l105"}, cdr: {car: {car: l104, cdr: "l104"}, cdr: {car: {car: l103, cdr: "l103"}, cdr: {car: {car: l102, cdr: "l102"}, cdr: {car: {car: l101, cdr: "l101"}, cdr: {car: {car: l100, cdr: "l100"}, cdr: {car: {car: l99, cdr: "l99"}, cdr: {car: {car: l98, cdr: "l98"}, cdr: {car: {car: l97, cdr: "l97"}, cdr: {car: {car: l96, cdr: "l96"}, cdr: {car: {car: l95, cdr: "l95"}, cdr: {car: {car: l94, cdr: "l94"}, cdr: {car: {car: l93, cdr: "l93"}, cdr: {car: {car: l92, cdr: "l92"}, cdr: {car: {car: l91, cdr: "l91"}, cdr: {car: {car: l90, cdr: "l90"}, cdr: {car: {car: l89, cdr: "l89"}, cdr: {car: {car: l88, cdr: "l88"}, cdr: {car: {car: l87, cdr: "l87"}, cdr: {car: {car: l86, cdr: "l86"}, cdr: {car: {car: l85, cdr: "l85"}, cdr: {car: {car: l84, cdr: "l84"}, cdr: {car: {car: l83, cdr: "l83"}, cdr: {car: {car: l82, cdr: "l82"}, cdr: {car: {car: l81, cdr: "l81"}, cdr: {car: {car: l80, cdr: "l80"}, cdr: {car: {car: l79, cdr: "l79"}, cdr: {car: {car: l78, cdr: "l78"}, cdr: {car: {car: l77, cdr: "l77"}, cdr: {car: {car: l76, cdr: "l76"}, cdr: {car: {car: l75, cdr: "l75"}, cdr: {car: {car: l74, cdr: "l74"}, cdr: {car: {car: l73, cdr: "l73"}, cdr: {car: {car: l72, cdr: "l72"}, cdr: {car: {car: l71, cdr: "l71"}, cdr: {car: {car: l70, cdr: "l70"}, cdr: {car: {car: l69, cdr: "l69"}, cdr: {car: {car: l68, cdr: "l68"}, cdr: {car: {car: l67, cdr: "l67"}, cdr: {car: {car: l66, cdr: "l66"}, cdr: {car: {car: l65, cdr: "l65"}, cdr: {car: {car: l64, cdr: "l64"}, cdr: {car: {car: l63, cdr: "l63"}, cdr: {car: {car: l62, cdr: "l62"}, cdr: {car: {car: l61, cdr: "l61"}, cdr: {car: {car: l60, cdr: "l60"}, cdr: {car: {car: l59, cdr: "l59"}, cdr: {car: {car: l58, cdr: "l58"}, cdr: {car: {car: l57, cdr: "l57"}, cdr: {car: {car: l56, cdr: "l56"}, cdr: {car: {car: l55, cdr: "l55"}, cdr: {car: {car: l54, cdr: "l54"}, cdr: {car: {car: l53, cdr: "l53"}, cdr: {car: {car: l52, cdr: "l52"}, cdr: {car: {car: l51, cdr: "l51"}, cdr: {car: {car: l50, cdr: "l50"}, cdr: {car: {car: l49, cdr: "l49"}, cdr: {car: {car: l48, cdr: "l48"}, cdr: {car: {car: l47, cdr: "l47"}, cdr: {car: {car: l46, cdr: "l46"}, cdr: {car: {car: l45, cdr: "l45"}, cdr: {car: {car: l44, cdr: "l44"}, cdr: {car: {car: l43, cdr: "l43"}, cdr: {car: {car: l42, cdr: "l42"}, cdr: {car: {car: l41, cdr: "l41"}, cdr: {car: {car: l40, cdr: "l40"}, cdr: {car: {car: l39, cdr: "l39"}, cdr: {car: {car: l38, cdr: "l38"}, cdr: {car: {car: l37, cdr: "l37"}, cdr: {car: {car: l36, cdr: "l36"}, cdr: {car: {car: l35, cdr: "l35"}, cdr: {car: {car: l34, cdr: "l34"}, cdr: {car: {car: l33, cdr: "l33"}, cdr: {car: {car: l32, cdr: "l32"}, cdr: {car: {car: l31, cdr: "l31"}, cdr: {car: {car: l30, cdr: "l30"}, cdr: {car: {car: l29, cdr: "l29"}, cdr: {car: {car: l28, cdr: "l28"}, cdr: {car: {car: l27, cdr: "l27"}, cdr: {car: {car: l26, cdr: "l26"}, cdr: {car: {car: l25, cdr: "l25"}, cdr: {car: {car: l24, cdr: "l24"}, cdr: {car: {car: l23, cdr: "l23"}, cdr: {car: {car: l22, cdr: "l22"}, cdr: {car: {car: l21, cdr: "l21"}, cdr: {car: {car: l20, cdr: "l20"}, cdr: {car: {car: l19, cdr: "l19"}, cdr: {car: {car: l18, cdr: "l18"}, cdr: {car: {car: l17, cdr: "l17"}, cdr: {car: {car: l16, cdr: "l16"}, cdr: {car: {car: l15, cdr: "l15"}, cdr: {car: {car: l14, cdr: "l14"}, cdr: {car: {car: l13, cdr: "l13"}, cdr: {car: {car: l12, cdr: "l12"}, cdr: {car: {car: l11, cdr: "l11"}, cdr: {car: {car: l10, cdr: "l10"}, cdr: {car: {car: l9, cdr: "l9"}, cdr: {car: {car: l8, cdr: "l8"}, cdr: {car: {car: l7, cdr: "l7"}, cdr: {car: {car: l6, cdr: "l6"}, cdr: {car: {car: l5, cdr: "l5"}, cdr: {car: {car: l4, cdr: "l4"}, cdr: {car: {car: l3, cdr: "l3"}, cdr: {car: {car: l2, cdr: "l2"}, cdr: {car: {car: l1, cdr: "l1"}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l290 = {name: "BODY"};
var l291 = {name: "CHECK"};
var l292 = {name: "OP"};
var l293 = {name: "SYM"};
var l294 = {name: "X"};
var l295 = {name: "ARGS"};
var l296 = {name: "DECLS"};
var l297 = {name: "DECL"};
var l298 = {name: "NAME"};
var l299 = {name: "ARG"};
var l300 = {name: "FORM"};
var l301 = {name: "PACKAGE-DESIGNATOR"};
var l302 = {name: "FORM1"};
var l303 = {name: "RESULT"};
var l304 = {name: "VALUE"};
var l305 = {name: "FORMS"};
var l306 = {name: "G"};
var l307 = {name: "CLAUSULES"};
var l308 = {name: "!FORM"};
var l309 = {name: "CLAUSULE"};
var l310 = {name: "ITER"};
var l311 = {name: "G!TO"};
var l312 = {name: "VAR"};
var l313 = {name: "TO"};
var l314 = {name: "G!LIST"};
var l315 = {name: "PLACE"};
var l316 = {name: "DELTA"};
var l317 = {name: "CONDITION"};
var l318 = {name: "DOCSTRING"};
var l319 = {car: {car: {car: l238, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l230, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l229, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l225, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l210, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l209, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l193, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l190, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l176, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l171, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l170, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l154, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l148, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l121, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l114, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l111, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l110, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l109, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l99, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l14, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l4, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: {car: l187, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l3, cdr: {car: l98, cdr: {car: l3, cdr: {car: {car: l185, cdr: {car: l187, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: l216, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l285, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l54, cdr: {car: {car: l217, cdr: {car: {car: l205, cdr: {car: l154, cdr: {car: l3, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l47, cdr: {car: {car: l291, cdr: {car: l154, cdr: l3}}, cdr: {car: {car: l271, cdr: {car: l291, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l284, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l129, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l204, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l283, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l282, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l181, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l247, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l292, cdr: {car: l293, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l239, cdr: {car: {car: l152, cdr: {car: l292, cdr: l3}}, cdr: {car: {car: l294, cdr: {car: l195, cdr: {car: l295, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l295, cdr: {car: {car: l27, cdr: {car: l294, cdr: {car: l295, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l243, cdr: {car: l295, cdr: {car: {car: l128, cdr: {car: {car: l246, cdr: {car: l295, cdr: {car: {car: l152, cdr: {car: l293, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l246, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l244, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l243, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l6, cdr: {car: {car: l256, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l274, cdr: {car: "Bad usage of VARIABLE-ARITY, you must pass a symbol", cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l242, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: l3}, cdr: {car: {car: l122, cdr: {car: "return ", cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l242, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l241, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l296, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l130, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l297, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l122, cdr: {car: "var ", cdr: {car: {car: l152, cdr: {car: {car: l38, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: " = ", cdr: {car: {car: l152, cdr: {car: {car: l40, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l296, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l297, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l122, cdr: {car: "if (typeof ", cdr: {car: {car: l152, cdr: {car: {car: l38, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: " != '", cdr: {car: {car: l152, cdr: {car: {car: l39, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: "')", cdr: {car: l121, cdr: {car: {car: l127, cdr: {car: "throw 'The value ' + ", cdr: {car: {car: l152, cdr: {car: {car: l38, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: l152, cdr: {car: {car: l39, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: {car: ".';", cdr: {car: l121, cdr: l3}}}}}}}, cdr: l3}}}}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l296, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l122, cdr: {car: "return ", cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: ";", cdr: {car: l121, cdr: l3}}}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l240, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l239, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l221, cdr: {car: {car: l152, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l299, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: {car: l152, cdr: {car: l299, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l152, cdr: {car: l299, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l295, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l239, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l238, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l300, cdr: l3}, cdr: {car: {car: l236, cdr: {car: l300, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l237, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l236, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l232, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l231, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l223, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l222, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l220, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l219, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l218, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l191, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l129, cdr: {car: {car: l152, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l212, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l211, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l132, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l202, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l201, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l200, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l199, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l198, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l197, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l191, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l46, cdr: {car: {car: l42, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l190, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l184, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l183, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l182, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l180, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l179, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l178, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l177, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l174, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l173, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l172, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l169, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l168, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l165, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l164, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l163, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l162, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l161, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l160, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l159, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l158, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l157, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l156, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l155, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l153, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l144, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l147, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l146, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l145, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l143, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l142, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l141, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l140, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l139, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l138, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l137, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l136, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l135, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l134, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l133, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l95, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l131, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l130, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l122, cdr: {car: "(function(){", cdr: {car: l121, cdr: {car: {car: l127, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: "})()", cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l128, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l16, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l127, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l126, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l125, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l124, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l123, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l98, cdr: {car: l195, cdr: {car: l300, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l122, cdr: {car: {car: l152, cdr: {car: l98, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l122, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l120, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l113, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l119, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l118, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l117, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l116, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l115, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l301, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l215, cdr: {car: {car: l205, cdr: {car: l114, cdr: {car: {car: l102, cdr: {car: {car: l152, cdr: {car: l301, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l112, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l108, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l107, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l106, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l105, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l102, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l104, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l103, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l101, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l100, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l96, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l94, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l93, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l92, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l91, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l90, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l89, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l88, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l87, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l86, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l85, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l84, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l83, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l82, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l81, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l80, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l79, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l78, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l77, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l57, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l76, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l75, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l74, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l73, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l72, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l71, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l70, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l69, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l68, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l67, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l66, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l65, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l64, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l63, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l62, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l61, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l60, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l59, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l58, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l56, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l55, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l302, cdr: {car: l303, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l54, cdr: {car: {car: l217, cdr: {car: {car: l152, cdr: {car: l302, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l303, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l54, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l300, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l304, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l53, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l305, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l221, cdr: {car: {car: {car: l306, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l29, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l306, cdr: l3}}, cdr: {car: {car: l53, cdr: {car: {car: l151, cdr: {car: {car: l30, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l52, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l305, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: {car: l11, cdr: {car: l305, cdr: l3}}, cdr: {car: l4, cdr: l3}}, cdr: {car: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l4, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: {car: l29, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l52, cdr: {car: {car: l151, cdr: {car: {car: l30, cdr: {car: l305, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l51, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l300, cdr: {car: l195, cdr: {car: l307, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l50, cdr: {car: {car: l152, cdr: {car: l300, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l62, cdr: {car: l307, cdr: {car: {car: l150, cdr: {car: {car: {car: l4, cdr: {car: {car: l274, cdr: {car: "ECASE expression failed.", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l50, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l300, cdr: {car: l195, cdr: {car: l307, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l308, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l300, cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l49, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l309, cdr: l3}, cdr: {car: {car: l192, cdr: {car: {car: l263, cdr: {car: {car: l29, cdr: {car: l309, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: l309, cdr: {car: {car: l150, cdr: {car: {car: {car: l25, cdr: {car: {car: l152, cdr: {car: l308, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: {car: l29, cdr: {car: l309, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l30, cdr: {car: l309, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l307, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l49, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l307, cdr: l3}}, cdr: {car: {car: l192, cdr: {car: {car: l11, cdr: {car: l307, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l192, cdr: {car: {car: l263, cdr: {car: {car: l31, cdr: {car: l307, cdr: l3}}, cdr: {car: l4, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: {car: l33, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: {car: l31, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: {car: l33, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l49, cdr: {car: {car: l151, cdr: {car: {car: l30, cdr: {car: l307, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l48, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l310, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l311, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: {car: {car: l312, cdr: {car: {car: l38, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l313, cdr: {car: {car: l39, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l303, cdr: {car: {car: l40, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l166, cdr: {car: l3, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l312, cdr: l3}}, cdr: {car: 0, cdr: l3}}, cdr: {car: {car: {car: l152, cdr: {car: l311, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l313, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l249, cdr: {car: {car: l152, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l311, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l233, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l44, cdr: {car: {car: l152, cdr: {car: l312, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l303, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l47, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l310, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l312, cdr: {car: {car: l38, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l314, cdr: {car: {car: l15, cdr: l3}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l166, cdr: {car: l3, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: {car: l39, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: {car: l152, cdr: {car: l312, cdr: l3}}, cdr: {car: l3, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l213, cdr: {car: {car: l152, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l312, cdr: l3}}, cdr: {car: {car: l29, cdr: {car: {car: l152, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l233, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l314, cdr: l3}}, cdr: {car: {car: l30, cdr: {car: {car: l152, cdr: {car: l314, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}}}, cdr: {car: {car: l152, cdr: {car: {car: l40, cdr: {car: l310, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l46, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l294, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l315, cdr: l3}}, cdr: {car: {car: l27, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l315, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l45, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l294, cdr: {car: l194, cdr: {car: {car: l316, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l60, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l316, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l44, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l294, cdr: {car: l194, cdr: {car: {car: l316, cdr: {car: 1, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l59, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l316, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l43, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l42, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l41, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l40, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l39, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l38, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l37, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l36, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l35, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l34, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l33, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l32, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l31, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l30, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l29, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l28, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l27, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l26, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l25, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l24, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l23, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l22, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l21, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l20, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l19, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l18, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l17, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l15, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l13, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l317, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l166, cdr: {car: l3, cdr: {car: {car: l213, cdr: {car: {car: l152, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l12, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l194, cdr: {car: l304, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l226, cdr: {car: l3, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l11, cdr: {car: l97, cdr: {car: l3, cdr: {car: {car: l188, cdr: l3}, cdr: l3}}}}, cdr: {car: {car: l10, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l2, cdr: {car: {car: l188, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l259, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l9, cdr: {car: {car: l152, cdr: {car: {car: l258, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l192, cdr: {car: {car: l52, cdr: {car: {car: l266, cdr: {car: {car: l29, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l26, cdr: {car: {car: l11, cdr: {car: {car: l30, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l152, cdr: {car: {car: l29, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: {car: l30, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l166, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l9, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l221, cdr: {car: {car: {car: l294, cdr: {car: {car: l15, cdr: {car: "FN", cdr: l3}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l221, cdr: {car: {car: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: l295, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}, cdr: {car: {car: l278, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: {car: "fname", cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}}}, cdr: {car: {car: l152, cdr: {car: l294, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l8, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l304, cdr: {car: l194, cdr: {car: l318, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l5, cdr: {car: {car: l266, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l278, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l152, cdr: {car: l318, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l7, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l304, cdr: {car: l194, cdr: {car: l318, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l217, cdr: {car: {car: l2, cdr: {car: {car: l185, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l6, cdr: {car: {car: l17, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l205, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: {car: {car: l152, cdr: {car: l304, cdr: l3}}, cdr: l3}}}, cdr: l3}}}, cdr: {car: {car: l151, cdr: {car: {car: l5, cdr: {car: {car: l266, cdr: {car: l318, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: {car: l278, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: "vardoc", cdr: {car: {car: l152, cdr: {car: l318, cdr: l3}}, cdr: l3}}}}, cdr: l3}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: l3}}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l6, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l317, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: l317, cdr: l3}}, cdr: {car: l3, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l5, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l317, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}, cdr: {car: {car: l150, cdr: {car: {car: l192, cdr: {car: {car: l152, cdr: {car: l317, cdr: l3}}, cdr: {car: {car: l217, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l2, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l195, cdr: {car: l296, cdr: l3}}, cdr: {car: {car: l150, cdr: {car: {car: l215, cdr: {car: {car: l151, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l297, cdr: l3}, cdr: {car: {car: l150, cdr: {car: {car: l184, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l297, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l296, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: {car: {car: l1, cdr: {car: l181, cdr: {car: {car: l203, cdr: {car: {car: l298, cdr: {car: l295, cdr: {car: l195, cdr: {car: l290, cdr: l3}}}}, cdr: {car: {car: l150, cdr: {car: {car: l215, cdr: {car: {car: l180, cdr: {car: {car: l149, cdr: {car: {car: l152, cdr: {car: l298, cdr: l3}}, cdr: l3}}, cdr: {car: {car: l149, cdr: {car: {car: l203, cdr: {car: {car: l152, cdr: {car: {car: l68, cdr: {car: {car: l203, cdr: {car: {car: l294, cdr: l3}, cdr: {car: {car: l192, cdr: {car: {car: l263, cdr: {car: l294, cdr: {car: {car: l149, cdr: {car: l286, cdr: l3}}, cdr: l3}}}, cdr: {car: {car: l149, cdr: {car: l195, cdr: l3}}, cdr: {car: l294, cdr: l3}}}}, cdr: l3}}}, cdr: {car: l295, cdr: l3}}}, cdr: l3}}, cdr: {car: {car: l151, cdr: {car: l290, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}}, cdr: l3}}, cdr: l3}}, cdr: l3}}}, cdr: {car: l3, cdr: l3}}}}, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: l3, cdr: {car: l3, cdr: l3}}}};
(function(){
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
    l116.function(l198);
    l116.function(l197);
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
    (l209).value = l289;
    (l170).value = l319;
    (l171).value = 755;
    (l14).value = 200;
    return (l225).value = 262;
})();
(l210).value = 319;
