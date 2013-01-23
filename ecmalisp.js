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
    (l11).fvalue = (function(v2){
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
    (l15).fvalue = (function(v4){
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
                                var func = symbol.fvalue;
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
    (l17).fvalue = (function(v6){
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
    (l18).fvalue = (function(v9){
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
    (l19).fvalue = (function(v12){
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
    (l20).fvalue = (function(v15){
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
    (l21).fvalue = (function(v17){
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
    (l22).fvalue = (function(v19){
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
    (l23).fvalue = (function(v21){
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
    (l24).fvalue = (function(v24){
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
    (l25).fvalue = (function(v27){
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
    (l26).fvalue = (function(v29){
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
    (l27).fvalue = (function(v32){
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
    (l28).fvalue = (function(v34){
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
    (l29).fvalue = (function(v36){
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
    (l30).fvalue = (function(v38){
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
    (l31).fvalue = (function(v40){
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
    (l32).fvalue = (function(v42){
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
    (l33).fvalue = (function(v44){
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
    (l34).fvalue = (function(v46){
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
    (l35).fvalue = (function(v48){
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
    (l36).fvalue = (function(v50){
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
    (l37).fvalue = (function(v52){
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
    (l38).fvalue = (function(v54){
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
    (l39).fvalue = (function(v56){
        ((v56)["fname"] = "SECOND");
        return v56;
    })((function (v55){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l32.fvalue(v55);
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
    (l40).fvalue = (function(v58){
        ((v58)["fname"] = "THIRD");
        return v58;
    })((function (v57){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l35.fvalue(v57);
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
    (l41).fvalue = (function(v60){
        ((v60)["fname"] = "FOURTH");
        return v60;
    })((function (v59){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l37.fvalue(v59);
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
    (l42).fvalue = (function(v62){
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
    (l43).fvalue = (function(v64){
        ((v64)["fname"] = "ATOM");
        return v64;
    })((function (v63){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l26.fvalue(((function(){
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
    (l56).fvalue = (function(v66){
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
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v65) !== l3.value ? v65 : l42.fvalue(v65));
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
    (l58).fvalue = (function(v70){
        ((v70)["fname"] = "!REDUCE");
        return v70;
    })((function (v67,v68,v69){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(v68) !== l3.value ? v69 : l58.fvalue(v67, (function(){
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
    (l59).fvalue = (function(v75){
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
    (l60).fvalue = (function(v81){
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
                    return (l11.fvalue(v76) !== l3.value ? (function(){
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
    (l61).fvalue = (function(v84){
        ((v84)["fname"] = "APPEND-TWO");
        return v84;
    })((function (v82,v83){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(v82) !== l3.value ? v83 : ({car: (function(){
                        var tmp = v82;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: (function(){
                        var symbol = l62;
                        var func = symbol.fvalue;
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
    (l62).fvalue = (function(v86){
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
                    return l58.fvalue((function(){
                        var symbol = l61;
                        var func = symbol.fvalue;
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
    (l63).fvalue = (function(v89){
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
    (l64).fvalue = (function(v91){
        ((v91)["fname"] = "REVERSE");
        return v91;
    })((function (v90){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l63.fvalue(v90, l3);
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
    (l66).fvalue = (function(v94){
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
                                        while(l26.fvalue(l11.fvalue(v92)) !== l3.value){
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
    (l67).fvalue = (function(v96){
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
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v95) !== l3.value ? (function(){
                        return l66.fvalue(v95);
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
    (l68).fvalue = (function(v99){
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
    (l69).fvalue = (function(v102){
        ((v102)["fname"] = "MAPCAR");
        return v102;
    })((function (v100,v101){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(v101) !== l3.value ? l3 : ({car: (v100)((function(){
                        var tmp = v101;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), cdr: l69.fvalue(v100, (function(){
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
    (l70).fvalue = (function(v104){
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
    (l71).fvalue = (function(v106){
        ((v106)["fname"] = "COPY-LIST");
        return v106;
    })((function (v105){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.fvalue((function(){
                        var symbol = l70;
                        var func = symbol.fvalue;
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
    (l72).fvalue = (function(v108){
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
    (l73).fvalue = (function(v110){
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
    (l74).fvalue = (function(v113){
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
    (l75).fvalue = (function(v115){
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
    (l76).fvalue = (function(v117){
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
    (l77).fvalue = (function(v119){
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
    (l57).fvalue = (function(v122){
        ((v122)["fname"] = "LISTP");
        return v122;
    })((function (v120){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v121){
                        return (v121 !== l3.value ? v121 : l11.fvalue(v120));
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
    (l78).fvalue = (function(v125){
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
                                    while((l76.fvalue(v123) !== l3.value ? v124 : l3.value) !== l3.value){
                                        (v123 = l22.fvalue(v123));
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
    (l79).fvalue = (function(v128){
        ((v128)["fname"] = "NTH");
        return v128;
    })((function (v126,v127){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var tmp = l78.fvalue(v126, v127);
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
    (l80).fvalue = (function(v130){
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
    (l81).fvalue = (function(v132){
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
                    })(), cdr: l81.fvalue((function(){
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
    (l82).fvalue = (function(v135){
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
                                        (l25.fvalue(v133, (function(){
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
    (l83).fvalue = (function(v138){
        ((v138)["fname"] = "REMOVE");
        return v138;
    })((function (v136,v137){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(v137) !== l3.value ? (function(){
                        return l3.value;
                    })() : (l25.fvalue(v136, (function(){
                        var tmp = v137;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l83.fvalue(v136, (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v137;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l83.fvalue(v136, (function(){
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
    (l84).fvalue = (function(v141){
        ((v141)["fname"] = "REMOVE-IF");
        return v141;
    })((function (v139,v140){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(v140) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v139)((function(){
                        var tmp = v140;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return l84.fvalue(v139, (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })());
                    })() : (function(){
                        return ({car: (function(){
                            var tmp = v140;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l84.fvalue(v139, (function(){
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
    (l85).fvalue = (function(v144){
        ((v144)["fname"] = "REMOVE-IF-NOT");
        return v144;
    })((function (v142,v143){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue(v143) !== l3.value ? (function(){
                        return l3.value;
                    })() : ((v142)((function(){
                        var tmp = v143;
                        return tmp === l3.value? l3.value: tmp.car;
                    })()) !== l3.value ? (function(){
                        return ({car: (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), cdr: l85.fvalue(v142, (function(){
                            var tmp = v143;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })())});
                    })() : (function(){
                        return l85.fvalue(v142, (function(){
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
    (l86).fvalue = (function(v146){
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
    (l87).fvalue = (function(v150){
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
    (l88).fvalue = (function(v155){
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
                                                var x2 = l86.fvalue((function(){
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
                    })(0,0,l67.fvalue(v151));
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
    (l89).fvalue = (function(v162){
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
                        })(0,l67.fvalue(v157));
                    })() : (l57.fvalue(v157) !== l3.value ? (function(){
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
    (l90).fvalue = (function(v169){
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
                        })(0,l67.fvalue(v164));
                    })() : (l57.fvalue(v164) !== l3.value ? (function(){
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
    (l91).fvalue = (function(v172){
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
                                        (l25.fvalue(v170, l31.fvalue(v171)) !== l3.value ? (function(){
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
    (l92).fvalue = (function(v174){
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
    (l93).fvalue = (function(v177){
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
    (l94).fvalue = (function(v179){
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
                            var func = symbol.fvalue;
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
    (l95).fvalue = (function(v181){
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
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((l94.fvalue(v180)).toString());
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
    (l97).fvalue = (function(v186){
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
                            return (l25.fvalue(v184, l98) !== l3.value ? (function(){
                                return (function(v185){
                                    return (function(){
                                        var tmp = (v185)["docstring"];
                                        return tmp == undefined? l3.value: tmp ;
                                    })();
                                })(l94.fvalue(v182));
                            })() : (l25.fvalue(v184, l99) !== l3.value ? (function(){
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
    (l101).fvalue = (function(v187){
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
    (l102).fvalue = (function(v192){
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
                    })({},l69.fvalue((function(){
                        var symbol = l103;
                        var func = symbol.fvalue;
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
    (l104).fvalue = (function(v194){
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
    (l105).fvalue = (function(v199){
        ((v199)["fname"] = "FIND-PACKAGE");
        return v199;
    })((function (v195){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l104.fvalue(v195) !== l3.value ? (function(){
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
                                                    (l93.fvalue((function(){
                                                        var symbol = l106;
                                                        var func = symbol.fvalue;
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
                    })(l92.fvalue(v195));
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
    (l103).fvalue = (function(v202){
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
                    })(l105.fvalue(v200));
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
    (l106).fvalue = (function(v205){
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
                    })(l103.fvalue(v203));
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
    (l107).fvalue = (function(v208){
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
                    })(l103.fvalue(v206));
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
    (l108).fvalue = (function(v211){
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
                    })(l103.fvalue(v209));
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
    (l109).fvalue = (function(v214){
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
                    })(l103.fvalue(v212));
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
        return ((l110).value = l102.fvalue("CL"));
    })());
    return l110;
})();
var l111 = {name: "*USER-PACKAGE*"};
(function(){
    (((l111.value !== undefined)?l4.value: l3.value) !== l3.value ? l3.value : (function(){
        return ((l111).value = l102.fvalue("CL-USER", l42.fvalue((function(){
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
        return ((l112).value = l102.fvalue("KEYWORD"));
    })());
    return l112;
})();
var l113 = {name: "KEYWORDP"};
var l114 = {name: "SYMBOL-PACKAGE"};
(function(){
    (l113).fvalue = (function(v216){
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
                        var func = symbol.fvalue;
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
    (l117).fvalue = (function(v219){
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
                    })(l107.fvalue((function(){
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
    (l118).fvalue = (function(v227){
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
                                                        })(l109.fvalue(v225));
                                                        return l3.value;
                                                    })();
                                                    (v224 = (function(){
                                                        var tmp = v224;
                                                        return tmp === l3.value? l3.value: tmp.cdr;
                                                    })());
                                                }return l3.value;
                                            })();
                                            return ({car: l3.value, cdr: l3.value});
                                        })(l108.fvalue(v222),l3.value);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 96)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })());
                        })(l107.fvalue(v222));
                    })(l103.fvalue(v221));
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
    (l119).fvalue = (function(v230){
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
                        var tmp = l118.fvalue(v228, v229);
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
    (l120).fvalue = (function(v237){
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
                                            var func = symbol.fvalue;
                                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                            return func;
                                        })()(l42.fvalue(v236), v233);
                                    })() : l3.value);
                                    return ((v235)[v231] = v236);
                                })((function(){
                                    var name = v231;
                                    if (typeof name != 'string')
                                        throw 'The value ' + name + ' is not a type string.';
                                    return ({name: name});
                                })());
                            })(l107.fvalue(v233)));
                        })(l118.fvalue(v231, v233));
                    })(l103.fvalue(v232));
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
    (l114).fvalue = (function(v239){
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
    (l121).fvalue = (function(v245){
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
                    })(l109.fvalue(v241));
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
    (l122).fvalue = (function(v246){
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
        return ((l123).value = l92.fvalue(l72.fvalue(10)));
    })());
    return l123;
})();
var l124 = {name: "CONCAT"};
(function(){
    (l124).fvalue = (function(v248){
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
                    return l58.fvalue((function(){
                        var symbol = l68;
                        var func = symbol.fvalue;
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
    (l126).fvalue = (function(v251){
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
                    return (l11.fvalue(v249) !== l3.value ? (function(){
                        return "";
                    })() : (l11.fvalue((function(){
                        var tmp = v249;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : (function(){
                        return l124.fvalue((function(){
                            var tmp = v249;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v250, l126.fvalue((function(){
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
    (l127).fvalue = (function(v254){
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
                    return (l11.fvalue(v252) !== l3.value ? "" : l124.fvalue((function(){
                        var tmp = v252;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), v253, l127.fvalue((function(){
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
    (l128).fvalue = (function(v257){
        ((v257)["fname"] = "MAPCONCAT");
        return v257;
    })((function (v255,v256){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l126.fvalue(l69.fvalue(v255, v256));
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
    (l129).fvalue = (function(v263){
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
                                        return l64.fvalue(v259);
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
                    })(l3.value,l67.fvalue(v258));
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
    (l130).fvalue = (function(v269){
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
                        for (var i = 0; i < l67.fvalue(v264); i++)
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
    (l131).fvalue = (function(v276){
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
                            (l76.fvalue(l67.fvalue(v271)) !== l3.value ? (function(){
                                return (v272 = l124.fvalue(v272, (function(){
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
                                                    return (v272 = l124.fvalue(v272, (function(){
                                                        return v275;
                                                    })()));
                                                })(((l74.fvalue((function(){
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
                                                    var x2 = l22.fvalue(v274);
                                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                                    return (x1<x2?l4.value: l3.value);
                                                })() !== l3.value ? l26.fvalue(l74.fvalue((function(){
                                                    var string = v271;
                                                    var index = l21.fvalue(v273);
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })(), 10)) : l3.value) : l3.value) !== l3.value ? l124.fvalue(l92.fvalue(10), "    ") : l92.fvalue((function(){
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
                        })("",0,l67.fvalue(v271));
                    })(l126.fvalue(v270));
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
    (l16).fvalue = (function(v280){
        ((v280)["fname"] = "INTEGER-TO-STRING");
        return v280;
    })((function (v277){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l23.fvalue(v277) !== l3.value ? (function(){
                        return "0";
                    })() : (l77.fvalue(v277) !== l3.value ? (function(){
                        return l124.fvalue("-", l16.fvalue((function(){
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
                                            while(l26.fvalue(l23.fvalue(v277)) !== l3.value){
                                                (v278 = ({car: (function(){
                                                    var x = v277;
                                                    var y = 10;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x%y;
                                                })(), cdr: v278}));
                                                (v277 = l24.fvalue(v277, 10));
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
                            return l126.fvalue(l69.fvalue((function (v279){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return l92.fvalue((function(){
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
    (l132).fvalue = (function(v282){
        ((v282)["fname"] = "JS!BOOL");
        return v282;
    })((function (v281){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue("(", v281, "?", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l4.value), ": ", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
    (l135).fvalue = (function(v288){
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
                            var tmp = l118.fvalue((v283).name, (function(){
                                var symbol = l115;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })() !== l3.value ? (v283).name : (function(v284,v285){
                            return l124.fvalue((l11.fvalue(v284) !== l3.value ? (function(){
                                return "#";
                            })() : (((v284 === l105.fvalue("KEYWORD"))?l4.value: l3.value) !== l3.value ? (function(){
                                return "";
                            })() : (function(){
                                return l106.fvalue(v284);
                            })())), ":", v285);
                        })(l114.fvalue(v283),(v283).name));
                    })() : (l75.fvalue(v283) !== l3.value ? (function(){
                        return l16.fvalue(v283);
                    })() : (((typeof(v283) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue("\"", (function(){
                            var symbol = l136;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v283), "\"");
                    })() : (((typeof v283 == 'function')?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v286){
                            return (v286 !== l3.value ? l124.fvalue("#<FUNCTION ", v286, ">") : l124.fvalue("#<FUNCTION>"));
                        })((function(){
                            var tmp = (v283)["fname"];
                            return tmp == undefined? l3.value: tmp ;
                        })());
                    })() : (l57.fvalue(v283) !== l3.value ? (function(){
                        return l124.fvalue("(", l127.fvalue(l69.fvalue((function(){
                            var symbol = l135;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l81.fvalue(v283)), " "), (function(v287){
                            return (l11.fvalue((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })()) !== l3.value ? l135.fvalue((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()) : l124.fvalue(l135.fvalue((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()), " . ", l135.fvalue((function(){
                                var tmp = v287;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })())));
                        })(l80.fvalue(v283)), ")");
                    })() : (((function(){
                        var x = v283;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue("#", l135.fvalue(l129.fvalue(v283)));
                    })() : (l104.fvalue(v283) !== l3.value ? (function(){
                        return l124.fvalue("#<PACKAGE ", l106.fvalue(v283), ">");
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
    (l96).fvalue = (function(v290){
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
    (l137).fvalue = (function(v292){
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
                    return l96.fvalue(v291);
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
    (l138).fvalue = (function(v294){
        ((v294)["fname"] = "PRINT");
        return v294;
    })((function (v293){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l96.fvalue(l135.fvalue(v293));
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
    (l139).fvalue = (function(v296){
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
    (l140).fvalue = (function(v298){
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
                        var x2 = l67.fvalue((function(){
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
    (l141).fvalue = (function(v301){
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
                        var x2 = l67.fvalue((function(){
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
                            return (x.cdr = l21.fvalue((function(){
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
    (l142).fvalue = (function(v305){
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
                            return (v304 !== l3.value ? v304 : l74.fvalue(v302, 9));
                        })(l74.fvalue(v302, 10)));
                    })(l74.fvalue(v302, 32));
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
    (l143).fvalue = (function(v308){
        ((v308)["fname"] = "SKIP-WHITESPACES");
        return v308;
    })((function (v306){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v307){
                        (v307 = l140.fvalue(v306));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v307 !== l3.value ? l142.fvalue(v307) : l3.value) !== l3.value){
                                            l141.fvalue(v306);
                                            (v307 = l140.fvalue(v306));
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
    (l144).fvalue = (function(v313){
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
                                return (v312 !== l3.value ? v312 : l74.fvalue(40, v309));
                            })(l74.fvalue(41, v309)));
                        })(l142.fvalue(v309)));
                    })(l11.fvalue(v309));
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
    (l145).fvalue = (function(v318){
        ((v318)["fname"] = "READ-UNTIL");
        return v318;
    })((function (v314,v315){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v316,v317){
                        (v317 = l140.fvalue(v314));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v317 !== l3.value ? l26.fvalue((v315)(v317)) : l3.value) !== l3.value){
                                            (v316 = l124.fvalue(v316, l92.fvalue(v317)));
                                            l141.fvalue(v314);
                                            (v317 = l140.fvalue(v314));
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
    (l146).fvalue = (function(v322){
        ((v322)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
        return v322;
    })((function (v319){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v320){
                        l143.fvalue(v319);
                        (v320 = l140.fvalue(v319));
                        return (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while((v320 !== l3.value ? l74.fvalue(v320, 59) : l3.value) !== l3.value){
                                            l145.fvalue(v319, (function (v321){
                                                if (arguments.length < 1) throw 'too few arguments';
                                                if (arguments.length > 1) throw 'too many arguments';
                                                return l74.fvalue(v321, 10);
                                            
                                            }));
                                            l143.fvalue(v319);
                                            (v320 = l140.fvalue(v319));
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
    (l147).fvalue = (function(v326){
        ((v326)["fname"] = "%READ-LIST");
        return v326;
    })((function (v323){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l146.fvalue(v323);
                    return (function(v324){
                        return (l11.fvalue(v324) !== l3.value ? (function(){
                            return (function(){
                                throw "Unspected EOF";
                            })();
                        })() : (l74.fvalue(v324, 41) !== l3.value ? (function(){
                            l141.fvalue(v323);
                            return l3.value;
                        })() : (l74.fvalue(v324, 46) !== l3.value ? (function(){
                            l141.fvalue(v323);
                            return (function(v325){
                                l146.fvalue(v323);
                                (l74.fvalue(l141.fvalue(v323), 41) !== l3.value ? l3.value : (function(){
                                    return (function(){
                                        throw "')' was expected.";
                                    })();
                                })());
                                return v325;
                            })((function(){
                                var symbol = l148;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v323));
                        })() : (function(){
                            return ({car: (function(){
                                var symbol = l148;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v323), cdr: l147.fvalue(v323)});
                        })())));
                    })(l140.fvalue(v323));
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
    (l149).fvalue = (function(v330){
        ((v330)["fname"] = "READ-STRING");
        return v330;
    })((function (v327){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v328,v329){
                        (v329 = l141.fvalue(v327));
                        (function(){
                            try {
                                return (function(){
                                    return (function(){
                                        while(l26.fvalue(l25.fvalue(v329, 34)) !== l3.value){
                                            (l11.fvalue(v329) !== l3.value ? (function(){
                                                return (function(){
                                                    throw "Unexpected EOF";
                                                })();
                                            })() : l3.value);
                                            (l25.fvalue(v329, 92) !== l3.value ? (function(){
                                                return (v329 = l141.fvalue(v327));
                                            })() : l3.value);
                                            (v328 = l124.fvalue(v328, l92.fvalue(v329)));
                                            (v329 = l141.fvalue(v327));
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
    (l150).fvalue = (function(v335){
        ((v335)["fname"] = "READ-SHARP");
        return v335;
    })((function (v331){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l141.fvalue(v331);
                    return (function(v332){
                        return (l25.fvalue(v332, 39) !== l3.value ? (function(){
                            return l42.fvalue(l98, (function(){
                                var symbol = l148;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v331));
                        })() : (l25.fvalue(v332, 40) !== l3.value ? (function(){
                            return l130.fvalue(l147.fvalue(v331));
                        })() : (l25.fvalue(v332, 58) !== l3.value ? (function(){
                            return (function(){
                                var name = (function(){
                                    var x = l145.fvalue(v331, (function(){
                                        var symbol = l144;
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
                            })();
                        })() : (l25.fvalue(v332, 92) !== l3.value ? (function(){
                            return (function(v333){
                                return (l93.fvalue(v333, "space") !== l3.value ? (function(){
                                    return l73.fvalue(32);
                                })() : (l93.fvalue(v333, "tab") !== l3.value ? (function(){
                                    return l73.fvalue(9);
                                })() : (l93.fvalue(v333, "newline") !== l3.value ? (function(){
                                    return l73.fvalue(10);
                                })() : (function(){
                                    return l73.fvalue((function(){
                                        var string = v333;
                                        var index = 0;
                                        if (typeof string != 'string')
                                            throw 'The value ' + string + ' is not a type string.';
                                        if (typeof index != 'number')
                                            throw 'The value ' + index + ' is not a type number.';
                                        return string.charCodeAt(index);
                                    })());
                                })())));
                            })(l124.fvalue(l92.fvalue(l141.fvalue(v331)), l145.fvalue(v331, (function(){
                                var symbol = l144;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })())));
                        })() : (l25.fvalue(v332, 43) !== l3.value ? (function(){
                            return (function(v334){
                                return (l93.fvalue(v334, "common-lisp") !== l3.value ? (function(){
                                    (function(){
                                        var symbol = l148;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v331);
                                    return (function(){
                                        var symbol = l148;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v331);
                                })() : (l93.fvalue(v334, "ecmalisp") !== l3.value ? (function(){
                                    return (function(){
                                        var symbol = l148;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })()(v331);
                                })() : (function(){
                                    return (function(){
                                        throw "Unknown reader form.";
                                    })();
                                })()));
                            })(l145.fvalue(v331, (function(){
                                var symbol = l144;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })() : (function(){
                            return (function(){
                                throw "ECASE expression failed.";
                            })();
                        })())))));
                    })(l141.fvalue(v331));
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
    (l151).fvalue = (function(v343){
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
                                        })() !== l3.value ? l26.fvalue(l74.fvalue((function(){
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
                            (l23.fvalue(v341) !== l3.value ? (v338 = "KEYWORD") : (v338 = (function(){
                                var x = l87.fvalue(v336, 0, v341);
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
                            (l74.fvalue((function(){
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
                            return (v339 = l87.fvalue(v336, v341));
                        })());
                        (v339 = (function(){
                            var x = v339;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })());
                        (v338 = l105.fvalue(v338));
                        return ((function(v342){
                            return (v342 !== l3.value ? v342 : ((v338 === l105.fvalue("KEYWORD"))?l4.value: l3.value));
                        })(v340) !== l3.value ? l120.fvalue(v339, v338) : l119.fvalue(v339, v338));
                    })(l67.fvalue(v336),l3.value,l3.value,l3.value,l3.value);
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
        return ((l152).value = l15.fvalue());
    })());
    return l152;
})();
var l153 = {name: "QUOTE"};
var l154 = {name: "BACKQUOTE"};
var l155 = {name: "UNQUOTE-SPLICING"};
var l156 = {name: "UNQUOTE"};
(function(){
    (l148).fvalue = (function(v348){
        ((v348)["fname"] = "LS-READ");
        return v348;
    })((function (v344){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l146.fvalue(v344);
                    return (function(v345){
                        return ((function(v346){
                            return (v346 !== l3.value ? v346 : l74.fvalue(v345, 41));
                        })(l11.fvalue(v345)) !== l3.value ? (function(){
                            return (function(){
                                var symbol = l152;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })();
                        })() : (l74.fvalue(v345, 40) !== l3.value ? (function(){
                            l141.fvalue(v344);
                            return l147.fvalue(v344);
                        })() : (l74.fvalue(v345, 39) !== l3.value ? (function(){
                            l141.fvalue(v344);
                            return l42.fvalue(l153, l148.fvalue(v344));
                        })() : (l74.fvalue(v345, 96) !== l3.value ? (function(){
                            l141.fvalue(v344);
                            return l42.fvalue(l154, l148.fvalue(v344));
                        })() : (l74.fvalue(v345, 34) !== l3.value ? (function(){
                            l141.fvalue(v344);
                            return l149.fvalue(v344);
                        })() : (l74.fvalue(v345, 44) !== l3.value ? (function(){
                            l141.fvalue(v344);
                            return (l25.fvalue(l140.fvalue(v344), 64) !== l3.value ? (function(){
                                l141.fvalue(v344);
                                return l42.fvalue(l155, l148.fvalue(v344));
                            })() : l42.fvalue(l156, l148.fvalue(v344)));
                        })() : (l74.fvalue(v345, 35) !== l3.value ? (function(){
                            return l150.fvalue(v344);
                        })() : (function(){
                            return (function(v347){
                                return (l90.fvalue((function(){
                                    var symbol = l86;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), v347) !== l3.value ? l88.fvalue(v347) : l151.fvalue(v347));
                            })(l145.fvalue(v344, (function(){
                                var symbol = l144;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()));
                        })())))))));
                    })(l140.fvalue(v344));
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
    (l157).fvalue = (function(v350){
        ((v350)["fname"] = "LS-READ-FROM-STRING");
        return v350;
    })((function (v349){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l148.fvalue(l139.fvalue(v349));
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
    (l159).fvalue = (function(v355){
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
                    return l42.fvalue(v351, v352, v353, v354);
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
    (l160).fvalue = (function(v357){
        ((v357)["fname"] = "BINDING-NAME");
        return v357;
    })((function (v356){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l38.fvalue(v356);
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
    (l161).fvalue = (function(v359){
        ((v359)["fname"] = "BINDING-TYPE");
        return v359;
    })((function (v358){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l39.fvalue(v358);
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
    (l162).fvalue = (function(v361){
        ((v361)["fname"] = "BINDING-VALUE");
        return v361;
    })((function (v360){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l40.fvalue(v360);
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
    (l163).fvalue = (function(v363){
        ((v363)["fname"] = "BINDING-DECLARATIONS");
        return v363;
    })((function (v362){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l41.fvalue(v362);
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
    (l164).fvalue = (function(v366){
        ((v366)["fname"] = "SET-BINDING-VALUE");
        return v366;
    })((function (v364,v365){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l34.fvalue(v364);
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
    (l165).fvalue = (function(v369){
        ((v369)["fname"] = "SET-BINDING-DECLARATIONS");
        return v369;
    })((function (v367,v368){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        var x = l36.fvalue(v367);
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
    (l166).fvalue = (function(v372){
        ((v372)["fname"] = "PUSH-BINDING-DECLARATION");
        return v372;
    })((function (v370,v371){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l165.fvalue(v371, ({car: v370, cdr: l163.fvalue(v371)}));
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
    (l167).fvalue = (function(v373){
        ((v373)["fname"] = "MAKE-LEXENV");
        return v373;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l42.fvalue(l3.value, l3.value, l3.value, l3.value);
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
    (l168).fvalue = (function(v375){
        ((v375)["fname"] = "COPY-LEXENV");
        return v375;
    })((function (v374){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l71.fvalue(v374);
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
    (l169).fvalue = (function(v380){
        ((v380)["fname"] = "PUSH-TO-LEXENV");
        return v380;
    })((function (v376,v377,v378){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v379){
                        return (l25.fvalue(v379, l99) !== l3.value ? (function(){
                            return (function(){
                                var x = v377;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: (function(){
                                    var tmp = v377;
                                    return tmp === l3.value? l3.value: tmp.car;
                                })()}));
                            })();
                        })() : (l25.fvalue(v379, l98) !== l3.value ? (function(){
                            return (function(){
                                var x = (function(){
                                    var tmp = v377;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })();
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: l32.fvalue(v377)}));
                            })();
                        })() : (l25.fvalue(v379, l170) !== l3.value ? (function(){
                            return (function(){
                                var x = l34.fvalue(v377);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: l35.fvalue(v377)}));
                            })();
                        })() : (l25.fvalue(v379, l171) !== l3.value ? (function(){
                            return (function(){
                                var x = l36.fvalue(v377);
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.car = ({car: v376, cdr: l37.fvalue(v377)}));
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
    (l172).fvalue = (function(v387){
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
                                                    l169.fvalue(v386, v384, v383);
                                                    return l3.value;
                                                })();
                                                (v385 = (function(){
                                                    var tmp = v385;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return v384;
                                    })(l64.fvalue(v381),l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 151)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                    })(l168.fvalue(v382));
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
    (l173).fvalue = (function(v392){
        ((v392)["fname"] = "LOOKUP-IN-LEXENV");
        return v392;
    })((function (v388,v389,v390){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l91.fvalue(v388, (function(v391){
                        return (l25.fvalue(v391, l99) !== l3.value ? (function(){
                            return l38.fvalue(v389);
                        })() : (l25.fvalue(v391, l98) !== l3.value ? (function(){
                            return l39.fvalue(v389);
                        })() : (l25.fvalue(v391, l170) !== l3.value ? (function(){
                            return l40.fvalue(v389);
                        })() : (l25.fvalue(v391, l171) !== l3.value ? (function(){
                            return l41.fvalue(v389);
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
        return ((l174).value = l167.fvalue());
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
    (l176).fvalue = (function(v394){
        ((v394)["fname"] = "GVARNAME");
        return v394;
    })((function (v393){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue("v", l16.fvalue(((l175).value = (function(){
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
    (l177).fvalue = (function(v396){
        ((v396)["fname"] = "TRANSLATE-VARIABLE");
        return v396;
    })((function (v395){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l162.fvalue(l173.fvalue(v395, (function(){
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
    (l178).fvalue = (function(v402){
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
                                                        return l169.fvalue(v401, v398, l99);
                                                    })(l159.fvalue(v400, l179, l176.fvalue(v400)));
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
                    })(l168.fvalue((function(){
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
    (l181).fvalue = (function(v404){
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
    (l182).fvalue = (function(v406){
        ((v406)["fname"] = "NULL-OR-EMPTY-P");
        return v406;
    })((function (v405){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l23.fvalue(l67.fvalue(v405));
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
    (l183).fvalue = (function(v407){
        ((v407)["fname"] = "GET-TOPLEVEL-COMPILATIONS");
        return v407;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l64.fvalue(l84.fvalue((function(){
                        var symbol = l182;
                        var func = symbol.fvalue;
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
    (l184).fvalue = (function(v410){
        ((v410)["fname"] = "%COMPILE-DEFMACRO");
        return v410;
    })((function (v408,v409){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    l181.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.fvalue(l42.fvalue(l153), l42.fvalue(v408))));
                    return l169.fvalue(l159.fvalue(v408, l185, v409), (function(){
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
    (l186).fvalue = (function(v416){
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
                            l169.fvalue(v415, (function(){
                                var symbol = l174;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v413);
                            return v415;
                        })(l159.fvalue(v411, v412, l3.value)));
                    })(l173.fvalue(v411, (function(){
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
    (l187).fvalue = (function(v421){
        ((v421)["fname"] = "CLAIMP");
        return v421;
    })((function (v417,v418,v419){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v420){
                        return (v420 !== l3.value ? l82.fvalue(v419, l163.fvalue(v420)) : l3.value);
                    })(l173.fvalue(v417, (function(){
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
    (l188).fvalue = (function(v436){
        ((v436)["fname"] = "!PROCLAIM");
        return v436;
    })((function (v422){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v423){
                        return (l25.fvalue(v423, l189) !== l3.value ? (function(){
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
                                                            return l166.fvalue(l189, v426);
                                                        })(l186.fvalue(v425, l99, l99));
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
                        })() : (l25.fvalue(v423, l190) !== l3.value ? (function(){
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
                                                            return l166.fvalue(l190, v429);
                                                        })(l186.fvalue(v428, l98, l98));
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
                        })() : (l25.fvalue(v423, l191) !== l3.value ? (function(){
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
                                                            return l166.fvalue(l191, v432);
                                                        })(l186.fvalue(v431, l99, l99));
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
                        })() : (l25.fvalue(v423, l192) !== l3.value ? (function(){
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
                                                            return l166.fvalue(l192, v435);
                                                        })(l186.fvalue(v434, l98, l98));
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
(l193).fvalue = (function(){
    var symbol = l188;
    var func = symbol.fvalue;
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
((l194).value = ({car: l42.fvalue(l196, (function (v437,v438,v439){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v437), " !== ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), " ? ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v438), " : ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
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
    (l201).fvalue = (function(v442){
        ((v442)["fname"] = "LIST-UNTIL-KEYWORD");
        return v442;
    })((function (v440){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((function(v441){
                        return (v441 !== l3.value ? v441 : l82.fvalue((function(){
                            var tmp = v440;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), (function(){
                            var symbol = l197;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()));
                    })(l11.fvalue(v440)) !== l3.value ? l3.value : ({car: (function(){
                        var tmp = v440;
                        return tmp === l3.value? l3.value: tmp.car;
                    })(), cdr: l201.fvalue((function(){
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
    (l202).fvalue = (function(v444){
        ((v444)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
        return v444;
    })((function (v443){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l201.fvalue(v443);
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
    (l203).fvalue = (function(v446){
        ((v446)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
        return v446;
    })((function (v445){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.fvalue((function(){
                        var symbol = l56;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l201.fvalue((function(){
                        var tmp = l82.fvalue(l198, v445);
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
    (l204).fvalue = (function(v448){
        ((v448)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
        return v448;
    })((function (v447){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l69.fvalue((function(){
                        var symbol = l29;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l203.fvalue(v447));
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
    (l205).fvalue = (function(v451){
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
                    })(l201.fvalue((function(){
                        var tmp = l82.fvalue(l199, v449);
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
    (l206).fvalue = (function(v454){
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
                    return (v453 !== l3.value ? l124.fvalue("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("var func = ", l126.fvalue(v452), ";", (function(){
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
                    })()), "})()") : l126.fvalue(v452));
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
((l194).value = ({car: l42.fvalue(l207, (function (v456){
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
                    })()) == "string")?l4.value: l3.value) !== l3.value ? l26.fvalue(l11.fvalue((function(){
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
                            return l206.fvalue(v460, "(function (", l126.fvalue(l69.fvalue((function(){
                                var symbol = l177;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), l62.fvalue(v457, v458)), ","), "){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l131.fvalue((v457 !== l3.value ? l124.fvalue("if (arguments.length < ", l16.fvalue(v461), ") throw 'too few arguments';", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (l26.fvalue(v459) !== l3.value ? l124.fvalue("if (arguments.length > ", l16.fvalue((function(){
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
                            })()) : ""), (v458 !== l3.value ? l124.fvalue("switch(arguments.length){", (function(){
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
                                                            (v465 = ({car: l124.fvalue("case ", l16.fvalue((function(){
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
                                                            })(), l177.fvalue((function(){
                                                                var tmp = v467;
                                                                return tmp === l3.value? l3.value: tmp.car;
                                                            })()), "=", (function(){
                                                                var symbol = l133;
                                                                var func = symbol.fvalue;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(l32.fvalue(v467)), ";", (function(){
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
                                                        })(l79.fvalue(v466, v464));
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
                                    (v465 = ({car: l124.fvalue("default: break;", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()), cdr: v465}));
                                    return l126.fvalue(l64.fvalue(v465));
                                })();
                            })(l203.fvalue(v456),l3.value,0), "}", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) : ""), (v459 !== l3.value ? (function(v468){
                                return l124.fvalue("var ", v468, "= ", (function(){
                                    var symbol = l133;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l3.value), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "for (var i = arguments.length-1; i>=", l16.fvalue((function(){
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
                                })(), l131.fvalue(v468, " = ", "{car: arguments[i], cdr: "), v468, "};", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })(l177.fvalue(v459)) : ""), (function(){
                                var symbol = l208;
                                var func = symbol.fvalue;
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
                    })(l67.fvalue(v457),l67.fvalue(v458),l178.fvalue(l62.fvalue(l56.fvalue(v459), v457, v458)));
                })(l202.fvalue(v456),l204.fvalue(v456),l205.fvalue(v456),l3.value);
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
    (l209).fvalue = (function(v472){
        ((v472)["fname"] = "SETQ-PAIR");
        return v472;
    })((function (v469,v470){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v471){
                        return (((l161.fvalue(v471) === l179)?l4.value: l3.value) !== l3.value ? l124.fvalue(l162.fvalue(v471), " = ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v470)) : (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.fvalue(l42.fvalue(l210), l42.fvalue(l62.fvalue(l42.fvalue(l153), l42.fvalue(v469))), l42.fvalue(v470))));
                    })(l173.fvalue(v469, (function(){
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
((l194).value = ({car: l42.fvalue(l211, (function (){
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
                                        (l11.fvalue(v473) !== l3.value ? (function(){
                                            return (function(){
                                                throw ({type: 'block', id: 179, value: l3.value, message: 'Return from unknown block NIL.'})
                                            })();
                                        })() : (l11.fvalue((function(){
                                            var tmp = v473;
                                            return tmp === l3.value? l3.value: tmp.cdr;
                                        })()) !== l3.value ? (function(){
                                            return (function(){
                                                throw "Odd paris in SETQ";
                                            })();
                                        })() : (function(){
                                            (v474 = l124.fvalue(v474, (function(){
                                                return l124.fvalue(l209.fvalue((function(){
                                                    var tmp = v473;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })(), l32.fvalue(v473)), (l11.fvalue(l34.fvalue(v473)) !== l3.value ? "" : ", "));
                                            })()));
                                            return (v473 = l34.fvalue(v473));
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
                    return l124.fvalue("(", v474, ")");
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
((l194).value = ({car: l42.fvalue(l212, (function (v475){
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
((l194).value = ({car: l42.fvalue(l213, (function (v476,v477){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(", v476, " = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
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
    (l136).fvalue = (function(v484){
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
                                                    return (v483 !== l3.value ? v483 : l74.fvalue(v482, 92));
                                                })(l74.fvalue(v482, 34)) !== l3.value ? (function(){
                                                    return (v479 = l124.fvalue(v479, "\\"));
                                                })() : l3.value);
                                                (l74.fvalue(v482, 10) !== l3.value ? (function(){
                                                    (v479 = l124.fvalue(v479, "\\"));
                                                    return (v482 = 110);
                                                })() : l3.value);
                                                return (v479 = l124.fvalue(v479, l92.fvalue(v482)));
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
                    })("",0,l67.fvalue(v478));
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
    (l216).fvalue = (function(v485){
        ((v485)["fname"] = "GENLIT");
        return v485;
    })((function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue("l", l16.fvalue(((l215).value = (function(){
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
    (l217).fvalue = (function(v497){
        ((v497)["fname"] = "LITERAL");
        return v497;
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
                    return (l75.fvalue(v486) !== l3.value ? (function(){
                        return l16.fvalue(v486);
                    })() : (((typeof(v486) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue("\"", l136.fvalue(v486), "\"");
                    })() : (((function(){
                        var tmp = v486;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v488){
                            return (v488 !== l3.value ? v488 : (function(v490,v491){
                                ((l214).value = ({car: ({car: v486, cdr: v490}), cdr: (function(){
                                    var symbol = l214;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })()}));
                                l181.fvalue(l124.fvalue("var ", v490, " = ", v491));
                                return v490;
                            })(l216.fvalue(),(function(v489){
                                return (l11.fvalue(v489) !== l3.value ? l124.fvalue("{name: \"", l136.fvalue((v486).name), "\"}") : (function(){
                                    var symbol = l133;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.fvalue(l42.fvalue(l120), l42.fvalue((v486).name), l42.fvalue(l106.fvalue(v489)))));
                            })(l114.fvalue(v486))));
                        })((function(){
                            var tmp = l91.fvalue(v486, (function(){
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
                        return (function(v492){
                            return (v487 !== l3.value ? v492 : (function(v493){
                                l181.fvalue(l124.fvalue("var ", v493, " = ", v492));
                                return v493;
                            })(l216.fvalue()));
                        })(l124.fvalue("{car: ", l217.fvalue((function(){
                            var tmp = v486;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), l4.value), ", ", "cdr: ", l217.fvalue((function(){
                            var tmp = v486;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), l4.value), "}"));
                    })() : (((function(){
                        var x = v486;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v494){
                            return (function(v495){
                                return (v487 !== l3.value ? v495 : (function(v496){
                                    l181.fvalue(l124.fvalue("var ", v496, " = ", v495));
                                    return v496;
                                })(l216.fvalue()));
                            })(l124.fvalue("[", l126.fvalue(l69.fvalue((function(){
                                var symbol = l217;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })(), v494), ", "), "]"));
                        })(l129.fvalue(v486));
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
((l194).value = ({car: l42.fvalue(l153, (function (v498){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l217.fvalue(v498);
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
((l194).value = ({car: l42.fvalue(l218, (function (v500){
    if (arguments.length < 1) throw 'too few arguments';
    var v499= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v499 = {car: arguments[i], cdr: 
    v499};
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue("while(", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v500), " !== ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l3.value), "){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue((function(){
                    var symbol = l208;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v499)), "}", "return ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
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
((l194).value = ({car: l42.fvalue(l98, (function (v501){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((l57.fvalue(v501) !== l3.value ? (((function(){
                    var tmp = v501;
                    return tmp === l3.value? l3.value: tmp.car;
                })() === l207)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v501);
                })() : (((function(){
                    var tmp = v501;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.fvalue(l42.fvalue(l219), l42.fvalue(l62.fvalue(l42.fvalue(l153), l42.fvalue(v501)))));
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
((l194).value = ({car: l42.fvalue(l220, (function (){
    var v502= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v502 = {car: arguments[i], cdr: 
    v502};
    return (function(){
        try {
            return (function(){
                (function(){
                    var symbol = l221;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(({car: l222, cdr: v502}));
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
((l194).value = ({car: l42.fvalue(l222, (function (){
    var v503= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v503 = {car: arguments[i], cdr: 
    v503};
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue((function(){
                    var symbol = l208;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v503, l4.value)), "})()");
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
    (l224).fvalue = (function(v505){
        ((v505)["fname"] = "SPECIAL-VARIABLE-P");
        return v505;
    })((function (v504){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l187.fvalue(v504, l99, l189) !== l3.value ? l4.value : l3.value);
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
    (l225).fvalue = (function(v512){
        ((v512)["fname"] = "LET-BINDING-WRAPPER");
        return v512;
    })((function (v506,v507){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.fvalue(v506) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 192, value: v507, message: 'Return from unknown block LET-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return l124.fvalue("try {", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("var tmp;", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l128.fvalue((function (v508){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v509){
                            return l124.fvalue("tmp = ", v509, ".value;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), v509, ".value = ", (function(){
                                var tmp = v508;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), (function(){
                                var tmp = v508;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), " = tmp;", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.fvalue(l42.fvalue(l153), l42.fvalue((function(){
                            var tmp = v508;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v506), v507, (function(){
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
                    })(), l131.fvalue(l128.fvalue((function (v510){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v511){
                            return l124.fvalue(v511, ".value", " = ", (function(){
                                var tmp = v510;
                                return tmp === l3.value? l3.value: tmp.cdr;
                            })(), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })());
                        })((function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.fvalue(l42.fvalue(l153), l42.fvalue((function(){
                            var tmp = v510;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()))));
                    
                    }), v506)), "}", (function(){
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
((l194).value = ({car: l42.fvalue(l226, (function (v514){
    if (arguments.length < 1) throw 'too few arguments';
    var v513= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v513 = {car: arguments[i], cdr: 
    v513};
    return (function(){
        try {
            return (function(){
                return (function(){
                    try {
                        var v522 = l174.value;
                        var v515 = l69.fvalue((function(){
                            var symbol = l56;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v514);
                        var v516 = l69.fvalue((function(){
                            var symbol = l38;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v515);
                        var v517 = l69.fvalue((function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.fvalue((function(){
                            var symbol = l39;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v515));
                        ((l174).value = l178.fvalue(l84.fvalue((function(){
                            var symbol = l224;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v516)));
                        var v518 = l3.value;
                        return l124.fvalue("(function(", l126.fvalue(l69.fvalue((function (v519){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (l224.fvalue(v519) !== l3.value ? (function(v520){
                                ((l227).value = ({car: ({car: v519, cdr: v520}), cdr: v518}));
                                return v520;
                            })(l176.fvalue(v519)) : l177.fvalue(v519));
                        
                        }), v516), ","), "){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v521){
                            return l131.fvalue(l225.fvalue(v518, v521));
                        })((function(){
                            var symbol = l208;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v513, l4.value)), "})(", l126.fvalue(v517, ","), ")");
                    }
                    finally {
                        l174.value = v522;
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
    (l228).fvalue = (function(v529){
        ((v529)["fname"] = "LET*-INITIALIZE-VALUE");
        return v529;
    })((function (v523){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v524,v525){
                        return (l224.fvalue(v524) !== l3.value ? l124.fvalue((function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.fvalue(l42.fvalue(l211), l42.fvalue(v524), l42.fvalue(v525))), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()) : (function(){
                            var v526 = l176.fvalue(v524);
                            var v527 = l159.fvalue(v524, l99, v526);
                            return (function(v528){
                                l169.fvalue(v527, (function(){
                                    var symbol = l174;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), l99);
                                return v528;
                            })(l124.fvalue("var ", v526, " = ", (function(){
                                var symbol = l133;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(v525), ";", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()));
                        })());
                    })(l38.fvalue(v523),l39.fvalue(v523));
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
    (l229).fvalue = (function(v538){
        ((v538)["fname"] = "LET*-BINDING-WRAPPER");
        return v538;
    })((function (v530,v531){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (l11.fvalue(v530) !== l3.value ? (function(){
                        return (function(){
                            throw ({type: 'block', id: 195, value: v531, message: 'Return from unknown block LET*-BINDING-WRAPPER.'})
                        })();
                    })() : l3.value);
                    return (function(v533){
                        return l124.fvalue("try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l128.fvalue((function (v534){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v535){
                                return l124.fvalue("var ", (function(){
                                    var tmp = v534;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), " = ", v535, ".value;", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l133;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.fvalue(l42.fvalue(l153), l42.fvalue((function(){
                                var tmp = v534;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v533), v531), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "finally {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l128.fvalue((function (v536){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v537){
                                return l124.fvalue(v537, ".value", " = ", (function(){
                                    var tmp = v536;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })(), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            })((function(){
                                var symbol = l133;
                                var func = symbol.fvalue;
                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                return func;
                            })()(l62.fvalue(l42.fvalue(l153), l42.fvalue((function(){
                                var tmp = v536;
                                return tmp === l3.value? l3.value: tmp.car;
                            })()))));
                        
                        }), v533)), "}", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    })(l69.fvalue((function (v532){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return ({car: v532, cdr: l176.fvalue(v532)});
                    
                    }), l85.fvalue((function(){
                        var symbol = l224;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v530)));
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
((l194).value = ({car: l42.fvalue(l230, (function (v540){
    if (arguments.length < 1) throw 'too few arguments';
    var v539= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v539 = {car: arguments[i], cdr: 
    v539};
    return (function(){
        try {
            return (function(){
                return (function(v541,v542){
                    try {
                        var tmp;
                        tmp = l174.value;
                        l174.value = v542;
                        v542 = tmp;
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue((function(v543,v544){
                            return l229.fvalue(v543, v544);
                        })(l85.fvalue((function(){
                            var symbol = l224;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), l69.fvalue((function(){
                            var symbol = l38;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v541)),l124.fvalue(l128.fvalue((function(){
                            var symbol = l228;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })(), v541), (function(){
                            var symbol = l208;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(v539, l4.value)))), "})()");
                    }
                    finally {
                        l174.value = v542;
                    }
                })(l69.fvalue((function(){
                    var symbol = l56;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v540),l168.fvalue((function(){
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
((l194).value = ({car: l42.fvalue(l170, (function (v546){
    if (arguments.length < 1) throw 'too few arguments';
    var v545= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v545 = {car: arguments[i], cdr: 
    v545};
    return (function(){
        try {
            return (function(){
                return (function(v547){
                    return (function(v548){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("try {", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), (function(v549){
                            try {
                                var tmp;
                                tmp = l174.value;
                                l174.value = v549;
                                v549 = tmp;
                                return l131.fvalue("return ", (function(){
                                    var symbol = l133;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(l62.fvalue(l42.fvalue(l222), v545)), ";", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })());
                            }
                            finally {
                                l174.value = v549;
                            }
                        })(l172.fvalue(l42.fvalue(v548), (function(){
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
                        })(), "    if (cf.type == 'block' && cf.id == ", v547, ")", (function(){
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
                    })(l159.fvalue(v546, l170, v547));
                })(l16.fvalue(((l231).value = (function(){
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
((l194).value = ({car: l42.fvalue(l232, (function (v550,v551){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    switch(arguments.length){
    case 1:
    v551=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v552){
                    return (v552 !== l3.value ? l124.fvalue("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("throw ({", "type: 'block', ", "id: ", l162.fvalue(v552), ", ", "value: ", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v551), ", ", "message: 'Return from unknown block ", (v550).name, ".'", "})"), "})()") : (function(){
                        throw l124.fvalue("Unknown block `", (v550).name, "'.");
                    })());
                })(l173.fvalue(v550, (function(){
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
((l194).value = ({car: l42.fvalue(l233, (function (v554){
    if (arguments.length < 1) throw 'too few arguments';
    var v553= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v553 = {car: arguments[i], cdr: 
    v553};
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue("var id = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v554), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "try {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue("return ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l62.fvalue(l42.fvalue(l222), v553)), ";", (function(){
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
((l194).value = ({car: l42.fvalue(l234, (function (v555,v556){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue("throw ({", "type: 'catch', ", "id: ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v555), ", ", "value: ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v556), ", ", "message: 'Throw uncatched.'", "})"), "})()");
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
    (l237).fvalue = (function(v559){
        ((v559)["fname"] = "GO-TAG-P");
        return v559;
    })((function (v557){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v558){
                        return (v558 !== l3.value ? v558 : ((function(){
                            var tmp = v557;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?l4.value: l3.value));
                    })(l75.fvalue(v557));
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
    (l238).fvalue = (function(v565){
        ((v565)["fname"] = "DECLARE-TAGBODY-TAGS");
        return v565;
    })((function (v560,v561){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v564){
                        return l172.fvalue(v564, (function(){
                            var symbol = l174;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l171);
                    })(l69.fvalue((function (v562){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(v563){
                            return l159.fvalue(v562, l171, l42.fvalue(v560, v563));
                        })(l16.fvalue(((l236).value = (function(){
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
                    
                    }), l85.fvalue((function(){
                        var symbol = l237;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v561)));
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
((l194).value = ({car: l42.fvalue(l239, (function (){
    var v566= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v566 = {car: arguments[i], cdr: 
    v566};
    return (function(){
        try {
            return (function(){
                (l89.fvalue((function(){
                    var symbol = l237;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v566) !== l3.value ? l3.value : (function(){
                    return (function(){
                        throw ({type: 'block', id: 203, value: (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l62.fvalue(l42.fvalue(l222), v566, l42.fvalue(l3))), message: 'Return from unknown block TAGBODY.'})
                    })();
                })());
                (l237.fvalue((function(){
                    var tmp = v566;
                    return tmp === l3.value? l3.value: tmp.car;
                })()) !== l3.value ? l3.value : (function(){
                    return (v566 = ({car: l15.fvalue("START"), cdr: v566}));
                })());
                return (function(v567){
                    return (function(v569,v568){
                        try {
                            var tmp;
                            tmp = l174.value;
                            l174.value = v569;
                            v569 = tmp;
                            (function(v570){
                                return (v568 = l39.fvalue(l162.fvalue(v570)));
                            })(l173.fvalue(l38.fvalue(v566), (function(){
                                var symbol = l174;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l171));
                            return l124.fvalue("(function(){", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l131.fvalue("var tagbody_", v567, " = ", v568, ";", (function(){
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
                            })(), l131.fvalue("try {", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), l131.fvalue((function(v571){
                                return l124.fvalue("switch(tagbody_", v567, "){", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), "case ", v568, ":", (function(){
                                    var symbol = l123;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })(), (function(){
                                    try {
                                        return (function(){
                                            return (function(v572,v573){
                                                (function(){
                                                    while(v572 !== l3.value){
                                                        (v573 = (function(){
                                                            var tmp = v572;
                                                            return tmp === l3.value? l3.value: tmp.car;
                                                        })());
                                                        (function(){
                                                            (v571 = l124.fvalue(v571, (function(){
                                                                return (l26.fvalue(l237.fvalue(v573)) !== l3.value ? l131.fvalue((function(){
                                                                    var symbol = l133;
                                                                    var func = symbol.fvalue;
                                                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                    return func;
                                                                })()(v573), ";", (function(){
                                                                    var symbol = l123;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })()) : (function(v574){
                                                                    return l124.fvalue("case ", l39.fvalue(l162.fvalue(v574)), ":", (function(){
                                                                        var symbol = l123;
                                                                        var value = symbol.value;
                                                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                        return value;
                                                                    })());
                                                                })(l173.fvalue(v573, (function(){
                                                                    var symbol = l174;
                                                                    var value = symbol.value;
                                                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                    return value;
                                                                })(), l171)));
                                                            })()));
                                                            return l3.value;
                                                        })();
                                                        (v572 = (function(){
                                                            var tmp = v572;
                                                            return tmp === l3.value? l3.value: tmp.cdr;
                                                        })());
                                                    }return l3.value;
                                                })();
                                                return v571;
                                            })((function(){
                                                var tmp = v566;
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
                            })(), "    if (jump.type == 'tagbody' && jump.id == ", v567, ")", (function(){
                                var symbol = l123;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })(), "        tagbody_", v567, " = jump.label;", (function(){
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
                                var func = symbol.fvalue;
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
                            l174.value = v569;
                        }
                    })(l238.fvalue(v567, v566),l3.value);
                })(l16.fvalue((function(){
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
((l194).value = ({car: l42.fvalue(l240, (function (v575){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v576,v577){
                    return (v576 !== l3.value ? l124.fvalue("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("throw ({", "type: 'tagbody', ", "id: ", l38.fvalue(l162.fvalue(v576)), ", ", "label: ", l39.fvalue(l162.fvalue(v576)), ", ", "message: 'Attempt to GO to non-existing tag ", v577, "'", "})", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), "})()") : (function(){
                        throw l124.fvalue("Unknown tag `", v577, "'.");
                    })());
                })(l173.fvalue(v575, (function(){
                    var symbol = l174;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l171),(((function(){
                    var tmp = v575;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?l4.value: l3.value) !== l3.value ? (function(){
                    return (v575).name;
                })() : (l75.fvalue(v575) !== l3.value ? (function(){
                    return l16.fvalue(v575);
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
((l194).value = ({car: l42.fvalue(l241, (function (v579){
    if (arguments.length < 1) throw 'too few arguments';
    var v578= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v578 = {car: arguments[i], cdr: 
    v578};
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue("var ret = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
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
                })(), l131.fvalue("ret = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v579), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })()), "} finally {", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue((function(){
                    var symbol = l208;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v578)), "}", (function(){
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
    (l242).fvalue = (function(v582){
        ((v582)["fname"] = "BACKQUOTE-EXPAND-1");
        return v582;
    })((function (v580){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v580;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l42.fvalue(l153, v580);
                    })() : (l43.fvalue(v580) !== l3.value ? (function(){
                        return v580;
                    })() : ((((function(){
                        var tmp = v580;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l156)?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(){
                            var tmp = v580;
                            return tmp === l3.value? l3.value: tmp.car;
                        })();
                    })() : ((((function(){
                        var tmp = v580;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l154)?l4.value: l3.value) !== l3.value ? (function(){
                        return l242.fvalue(l242.fvalue(l32.fvalue(v580)));
                    })() : (function(){
                        return ({car: l62, cdr: l69.fvalue((function (v581){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return ((l57.fvalue(v581) !== l3.value ? (((function(){
                                var tmp = v581;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l156)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l42.fvalue(l42, l32.fvalue(v581));
                            })() : ((l57.fvalue(v581) !== l3.value ? (((function(){
                                var tmp = v581;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l155)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return l32.fvalue(v581);
                            })() : (function(){
                                return l42.fvalue(l42, l242.fvalue(v581));
                            })()));
                        
                        }), v580)});
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
    (l243).fvalue = (function(v584){
        ((v584)["fname"] = "BACKQUOTE-EXPAND");
        return v584;
    })((function (v583){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((l57.fvalue(v583) !== l3.value ? (((function(){
                        var tmp = v583;
                        return tmp === l3.value? l3.value: tmp.car;
                    })() === l154)?l4.value: l3.value) : l3.value) !== l3.value ? l242.fvalue(l32.fvalue(v583)) : v583);
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
((l194).value = ({car: l42.fvalue(l154, (function (v585){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(l242.fvalue(v585));
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
    (l248).fvalue = (function(v594){
        ((v594)["fname"] = "VARIABLE-ARITY-CALL");
        return v594;
    })((function (v586,v587){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    (((function(){
                        var tmp = v586;
                        return (typeof tmp == 'object' && 'car' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l3.value : (function(){
                        return (function(){
                            throw "ARGS must be a non-empty list";
                        })();
                    })());
                    return (function(v588,v589,v590){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v591,v592){
                                        (function(){
                                            while(v591 !== l3.value){
                                                (v592 = (function(){
                                                    var tmp = v591;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (function(v593){
                                                        (v589 = ({car: v593, cdr: v589}));
                                                        return (v590 = l124.fvalue(v590, (function(){
                                                            return l124.fvalue("var ", v593, " = ", (function(){
                                                                var symbol = l133;
                                                                var func = symbol.fvalue;
                                                                if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                                                return func;
                                                            })()(v592), ";", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })(), "if (typeof ", v593, " !== 'number') throw 'Not a number!';", (function(){
                                                                var symbol = l123;
                                                                var value = symbol.value;
                                                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                                                return value;
                                                            })());
                                                        })()));
                                                    })(l124.fvalue("x", l16.fvalue((v588 = (function(){
                                                        var x1 = v588;
                                                        if (typeof x1 !== 'number') throw 'Not a number!';
                                                        var x2 = 1;
                                                        if (typeof x2 !== 'number') throw 'Not a number!';
                                                        return x1+x2;
                                                    })()))));
                                                    return l3.value;
                                                })();
                                                (v591 = (function(){
                                                    var tmp = v591;
                                                    return tmp === l3.value? l3.value: tmp.cdr;
                                                })());
                                            }return l3.value;
                                        })();
                                        return l3.value;
                                    })(v586,l3.value);
                                })();
                            }
                            catch (cf){
                                if (cf.type == 'block' && cf.id == 211)
                                    return cf.value;
                                else
                                    throw cf;
                            }
                        })();
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(v590, (v587)(l64.fvalue(v589))), "})()");
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
    (l250).fvalue = (function(v598){
        ((v598)["fname"] = "NUM-OP-NUM");
        return v598;
    })((function (v595,v596,v597){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return l124.fvalue("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v595, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l124.fvalue("var ", "y", " = ", v597, ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })()), l124.fvalue("if (typeof ", "x", " != '", "number", "')", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l124.fvalue("if (typeof ", "y", " != '", "number", "')", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })())), l124.fvalue("return ", (function(){
                        return l124.fvalue("x", v596, "y");
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
((l244).value = ({car: l42.fvalue(l59, (function (){
    var v599= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v599 = {car: arguments[i], cdr: 
    v599};
    return (function(){
        try {
            return (function(){
                return (l11.fvalue(v599) !== l3.value ? "0" : l248.fvalue(v599, (function (v600){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l124.fvalue("return ", l126.fvalue(v600, "+"), ";", (function(){
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
((l244).value = ({car: l42.fvalue(l60, (function (v602){
    if (arguments.length < 1) throw 'too few arguments';
    var v601= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v601 = {car: arguments[i], cdr: 
    v601};
    return (function(){
        try {
            return (function(){
                return (function(v603){
                    return l248.fvalue(v603, (function (v604){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", (l11.fvalue(v601) !== l3.value ? l124.fvalue("-", (function(){
                            var tmp = v604;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l126.fvalue(v604, "-")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v602, cdr: v601}));
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
((l244).value = ({car: l42.fvalue(l19, (function (){
    var v605= l3.value;
    for (var i = arguments.length-1; i>=0; i--)
        v605 = {car: arguments[i], cdr: 
    v605};
    return (function(){
        try {
            return (function(){
                return (l11.fvalue(v605) !== l3.value ? "1" : l248.fvalue(v605, (function (v606){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return l124.fvalue("return ", l126.fvalue(v606, "*"), ";", (function(){
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
((l244).value = ({car: l42.fvalue(l20, (function (v608){
    if (arguments.length < 1) throw 'too few arguments';
    var v607= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v607 = {car: arguments[i], cdr: 
    v607};
    return (function(){
        try {
            return (function(){
                return (function(v609){
                    return l248.fvalue(v609, (function (v610){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", (l11.fvalue(v607) !== l3.value ? l124.fvalue("1 /", (function(){
                            var tmp = v610;
                            return tmp === l3.value? l3.value: tmp.car;
                        })()) : l126.fvalue(v610, "/")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v608, cdr: v607}));
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
    return ((l244).value = ({car: l42.fvalue(l251, (function (v611,v612){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v613,v614){
                        return l250.fvalue(v613, "%", v614);
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v611),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v612));
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
    (l252).fvalue = (function(v617){
        ((v617)["fname"] = "COMPARISON-CONJUNTION");
        return v617;
    })((function (v615,v616){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (l11.fvalue((function(){
                        var tmp = v615;
                        return tmp === l3.value? l3.value: tmp.cdr;
                    })()) !== l3.value ? (function(){
                        return "true";
                    })() : (l11.fvalue(l34.fvalue(v615)) !== l3.value ? (function(){
                        return l124.fvalue((function(){
                            var tmp = v615;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v616, l32.fvalue(v615));
                    })() : (function(){
                        return l124.fvalue((function(){
                            var tmp = v615;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(), v616, l32.fvalue(v615), " && ", l252.fvalue((function(){
                            var tmp = v615;
                            return tmp === l3.value? l3.value: tmp.cdr;
                        })(), v616));
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
((l244).value = ({car: l42.fvalue(l254, (function (v619){
    if (arguments.length < 1) throw 'too few arguments';
    var v618= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v618 = {car: arguments[i], cdr: 
    v618};
    return (function(){
        try {
            return (function(){
                return (function(v620){
                    return l248.fvalue(v620, (function (v621){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", l132.fvalue(l252.fvalue(v621, ">")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v619, cdr: v618}));
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
((l244).value = ({car: l42.fvalue(l255, (function (v623){
    if (arguments.length < 1) throw 'too few arguments';
    var v622= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v622 = {car: arguments[i], cdr: 
    v622};
    return (function(){
        try {
            return (function(){
                return (function(v624){
                    return l248.fvalue(v624, (function (v625){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", l132.fvalue(l252.fvalue(v625, "<")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v623, cdr: v622}));
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
((l244).value = ({car: l42.fvalue(l256, (function (v627){
    if (arguments.length < 1) throw 'too few arguments';
    var v626= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v626 = {car: arguments[i], cdr: 
    v626};
    return (function(){
        try {
            return (function(){
                return (function(v628){
                    return l248.fvalue(v628, (function (v629){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", l132.fvalue(l252.fvalue(v629, ">=")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v627, cdr: v626}));
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
((l244).value = ({car: l42.fvalue(l257, (function (v631){
    if (arguments.length < 1) throw 'too few arguments';
    var v630= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v630 = {car: arguments[i], cdr: 
    v630};
    return (function(){
        try {
            return (function(){
                return (function(v632){
                    return l248.fvalue(v632, (function (v633){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", l132.fvalue(l252.fvalue(v633, "<=")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v631, cdr: v630}));
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
((l244).value = ({car: l42.fvalue(l18, (function (v635){
    if (arguments.length < 1) throw 'too few arguments';
    var v634= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v634 = {car: arguments[i], cdr: 
    v634};
    return (function(){
        try {
            return (function(){
                return (function(v636){
                    return l248.fvalue(v636, (function (v637){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return l124.fvalue("return ", l132.fvalue(l252.fvalue(v637, "==")), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })());
                    
                    }));
                })(({car: v635, cdr: v634}));
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
    return ((l244).value = ({car: l42.fvalue(l258, (function (v638){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v639){
                        return l132.fvalue(l124.fvalue("(typeof (", v639, ") == \"number\")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l259 = {name: "FLOOR"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l259, (function (v640){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v641){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v641, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "Math.floor(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.fvalue(l27, (function (v642,v643){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v644,v645){
                        return l124.fvalue("({car: ", v644, ", cdr: ", v645, "})");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v642),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v643));
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
    return ((l244).value = ({car: l42.fvalue(l28, (function (v646){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v647){
                        return l132.fvalue(l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var tmp = ", v647, ";", (function(){
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
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.fvalue(l29, (function (v648){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v649){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var tmp = ", v649, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
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
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.fvalue(l30, (function (v650){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v651){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var tmp = ", v651, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp === ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), "? ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
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
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v650));
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
    return ((l244).value = ({car: l42.fvalue(l260, (function (v652,v653){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v654,v655){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v654, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return l124.fvalue("(x.car = ", v655, ")");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v652),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v653));
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
    return ((l244).value = ({car: l42.fvalue(l261, (function (v656,v657){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v658,v659){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v658, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "object", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return l124.fvalue("(x.cdr = ", v659, ")");
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v656),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v657));
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
    return ((l244).value = ({car: l42.fvalue(l262, (function (v660){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v661){
                        return l132.fvalue(l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var tmp = ", v661, ";", (function(){
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
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l263 = {name: "MAKE-SYMBOL"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l263, (function (v662){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v663){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "name", " = ", v663, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "name", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "({name: name})";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l264 = {name: "SYMBOL-NAME"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l264, (function (v664){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v665){
                        return l124.fvalue("(", v665, ").name");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v664));
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
    return ((l244).value = ({car: l42.fvalue(l210, (function (v666,v667){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v668,v669){
                        return l124.fvalue("(", v668, ").value = ", v669);
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v666),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v667));
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
    return ((l244).value = ({car: l42.fvalue(l265, (function (v670,v671){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v672,v673){
                        return l124.fvalue("(", v672, ").fvalue = ", v673);
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v670),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v671));
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
    return ((l244).value = ({car: l42.fvalue(l17, (function (v674){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v675){
                        return l132.fvalue(l124.fvalue("(", v675, ".value !== undefined)"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l266 = {name: "SYMBOL-VALUE"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l266, (function (v676){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v677){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var symbol = ", v677, ";", (function(){
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
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
(function(){
    return ((l244).value = ({car: l42.fvalue(l219, (function (v678){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v679){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var symbol = ", v679, ";", (function(){
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
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l267 = {name: "SYMBOL-PLIST"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l267, (function (v680){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v681){
                        return l124.fvalue("((", v681, ").plist || ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
                            if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                            return func;
                        })()(l3.value), ")");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l268 = {name: "LAMBDA-CODE"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l268, (function (v682){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v683){
                        return l124.fvalue("(", v683, ").toString()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v682));
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
    return ((l244).value = ({car: l42.fvalue(l269, (function (v684,v685){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v686,v687){
                        return l132.fvalue(l124.fvalue("(", v686, " === ", v687, ")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v684),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v685));
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
    return ((l244).value = ({car: l42.fvalue(l270, (function (v688,v689){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v690,v691){
                        return l132.fvalue(l124.fvalue("(", v690, " == ", v691, ")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v688),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v689));
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
    return ((l244).value = ({car: l42.fvalue(l271, (function (v692){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v693){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v693, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "String.fromCharCode(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l272 = {name: "STRINGP"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l272, (function (v694){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v695){
                        return l132.fvalue(l124.fvalue("(typeof(", v695, ") == \"string\")"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l273 = {name: "STRING-UPCASE"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l273, (function (v696){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v697){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v697, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "x.toUpperCase()";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l274 = {name: "STRING-LENGTH"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l274, (function (v698){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v699){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v699, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "x.length";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v698));
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
((l244).value = ({car: l42.fvalue(l275, (function (v700,v701,v702){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v702=l3.value;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(function(){", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), l131.fvalue("var str = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v700), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var a = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v701), ";", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), "var b;", (function(){
                    var symbol = l123;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                    return value;
                })(), (v702 !== l3.value ? l124.fvalue("b = ", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v702), ";", (function(){
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
    return ((l244).value = ({car: l42.fvalue(l276, (function (v703,v704){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v705,v706){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "string", " = ", v705, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("var ", "index", " = ", v706, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("if (typeof ", "index", " != '", "number", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "string.charCodeAt(index)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v703),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v704));
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
    return ((l244).value = ({car: l42.fvalue(l68, (function (v707,v708){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v709,v710){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "string1", " = ", v709, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("var ", "string2", " = ", v710, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "string1", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("if (typeof ", "string2", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "string1.concat(string2)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v707),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v708));
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
((l244).value = ({car: l42.fvalue(l277, (function (v712){
    if (arguments.length < 1) throw 'too few arguments';
    var v711= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v711 = {car: arguments[i], cdr: 
    v711};
    return (function(){
        try {
            return (function(){
                return l124.fvalue("(", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v712), ")(", l126.fvalue(l69.fvalue((function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })(), v711), ", "), ")");
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
((l244).value = ({car: l42.fvalue(l278, (function (v714){
    if (arguments.length < 1) throw 'too few arguments';
    var v713= l3.value;
    for (var i = arguments.length-1; i>=1; i--)
        v713 = {car: arguments[i], cdr: 
    v713};
    return (function(){
        try {
            return (function(){
                return (l11.fvalue(v713) !== l3.value ? l124.fvalue("(", (function(){
                    var symbol = l133;
                    var func = symbol.fvalue;
                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                    return func;
                })()(v714), ")()") : (function(v715,v716){
                    return l124.fvalue("(function(){", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), l131.fvalue("var f = ", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v714), ";", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var args = [", l126.fvalue(l69.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v715), ", "), "];", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "var tail = (", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v716), ");", (function(){
                        var symbol = l123;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                        return value;
                    })(), "while (tail != ", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
                })(l81.fvalue(v713),(function(){
                    var tmp = l80.fvalue(v713);
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
    return ((l244).value = ({car: l42.fvalue(l279, (function (v717){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v718){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "string", " = ", v718, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "string", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "eval.apply(window, [string])";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l280 = {name: "ERROR"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l280, (function (v719){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v720){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw ", v720, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l281 = {name: "NEW"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l281, (function (){
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
    return ((l244).value = ({car: l42.fvalue(l282, (function (v721){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v722){
                        return l132.fvalue(l124.fvalue("(typeof (", v722, ") === 'object')"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v721));
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
    return ((l244).value = ({car: l42.fvalue(l283, (function (v723,v724){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v725,v726){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var tmp = ", "(", v725, ")[", v726, "];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return tmp == undefined? ", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
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
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v723),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v724));
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
    return ((l244).value = ({car: l42.fvalue(l284, (function (v727,v728,v729){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v730,v731,v732){
                        return l124.fvalue("((", v730, ")[", v731, "] = ", v732, ")");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v727),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v728),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v729));
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
    return ((l244).value = ({car: l42.fvalue(l285, (function (v733,v734){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v735,v736){
                        return l132.fvalue(l124.fvalue("((", v735, ") in (", v736, "))"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v733),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v734));
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
    return ((l244).value = ({car: l42.fvalue(l286, (function (v737){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v738){
                        return l132.fvalue(l124.fvalue("(typeof ", v738, " == 'function')"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l287 = {name: "WRITE-STRING"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l287, (function (v739){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v740){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue(l124.fvalue("var ", "x", " = ", v740, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), l124.fvalue("if (typeof ", "x", " != '", "string", "')", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), l124.fvalue("return ", (function(){
                            return "lisp.write(x)";
                        })(), ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })())), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l288 = {name: "MAKE-ARRAY"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l288, (function (v741){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v742){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var r = [];", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "for (var i = 0; i < ", v742, "; i++)", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("r.push(", (function(){
                            var symbol = l133;
                            var func = symbol.fvalue;
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
                        var func = symbol.fvalue;
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
        var symbol = l244;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
        return value;
    })()}));
})();
var l289 = {name: "ARRAYP"};
(function(){
    return ((l244).value = ({car: l42.fvalue(l289, (function (v743){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v744){
                        return l132.fvalue(l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var x = ", v744, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return typeof x === 'object' && 'length' in x;"), "})()"));
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v743));
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
    return ((l244).value = ({car: l42.fvalue(l290, (function (v745,v746){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v747,v748){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var x = ", "(", v747, ")[", v748, "];", (function(){
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
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v745),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v746));
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
    return ((l244).value = ({car: l42.fvalue(l291, (function (v749,v750,v751){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v752,v753,v754){
                        return l124.fvalue("(function(){", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l131.fvalue("var x = ", v752, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "var i = ", v753, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "if (i < 0 || i >= x.length) throw 'Out of range';", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), "return x[i] = ", v754, ";", (function(){
                            var symbol = l123;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })()), "})()");
                    })((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v749),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v750),(function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(v751));
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
    return ((l244).value = ({car: l42.fvalue(l292, (function (){
        if (arguments.length > 0) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(){
                        return l124.fvalue("(Math.round(new Date() / 1000))");
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
    (l185).fvalue = (function(v757){
        ((v757)["fname"] = "MACRO");
        return v757;
    })((function (v755){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v755;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(v756){
                        return (((l161.fvalue(v756) === l185)?l4.value: l3.value) !== l3.value ? v756 : l3.value);
                    })(l173.fvalue(v755, (function(){
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
    (l293).fvalue = (function(v762){
        ((v762)["fname"] = "LS-MACROEXPAND-1");
        return v762;
    })((function (v758){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v759){
                        return (v759 !== l3.value ? (function(v760){
                            (l57.fvalue(v760) !== l3.value ? (function(){
                                return (function(v761){
                                    l164.fvalue(v759, v761);
                                    return (v760 = v761);
                                })((function(){
                                    var symbol = l221;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })()(v760));
                            })() : l3.value);
                            return (function(){
                                var f = v760;
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v758;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })());
                                while (tail != l3.value){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })();
                        })(l162.fvalue(v759)) : v758);
                    })(l185.fvalue((function(){
                        var tmp = v758;
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
    (l294).fvalue = (function(v765){
        ((v765)["fname"] = "COMPILE-FUNCALL");
        return v765;
    })((function (v763,v764){
        if (arguments.length < 2) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return ((((function(){
                        var tmp = v763;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? l187.fvalue(v763, l98, l192) : l3.value) !== l3.value ? l124.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.fvalue(l42.fvalue(l153), l42.fvalue(v763))), ".fvalue(", l126.fvalue(l69.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v764), ", "), ")") : l124.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()(l62.fvalue(l42.fvalue(l98), l42.fvalue(v763))), "(", l126.fvalue(l69.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v764), ", "), ")"));
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
    (l208).fvalue = (function(v768){
        ((v768)["fname"] = "LS-COMPILE-BLOCK");
        return v768;
    })((function (v766,v767){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 2) throw 'too many arguments';
        switch(arguments.length){
        case 1:
        v767=l3.value;
        default: break;
        }
        return (function(){
            try {
                return (function(){
                    return (v767 !== l3.value ? l124.fvalue(l208.fvalue(l81.fvalue(v766)), "return ", (function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })()((function(){
                        var tmp = l80.fvalue(v766);
                        return tmp === l3.value? l3.value: tmp.car;
                    })()), ";") : l127.fvalue(l84.fvalue((function(){
                        var symbol = l182;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), l69.fvalue((function(){
                        var symbol = l133;
                        var func = symbol.fvalue;
                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                        return func;
                    })(), v766)), l124.fvalue(";", (function(){
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
    (l133).fvalue = (function(v776){
        ((v776)["fname"] = "LS-COMPILE");
        return v776;
    })((function (v769){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (((function(){
                        var tmp = v769;
                        return (typeof tmp == 'object' && 'name' in tmp);
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return (function(v770){
                            return ((v770 !== l3.value ? l26.fvalue(l82.fvalue(l189, l163.fvalue(v770))) : l3.value) !== l3.value ? (function(){
                                return l162.fvalue(v770);
                            })() : ((function(v771){
                                return (v771 !== l3.value ? v771 : l82.fvalue(l191, l163.fvalue(v770)));
                            })(l113.fvalue(v769)) !== l3.value ? (function(){
                                return l124.fvalue(l133.fvalue(l62.fvalue(l42.fvalue(l153), l42.fvalue(v769))), ".value");
                            })() : (function(){
                                return l133.fvalue(l62.fvalue(l42.fvalue(l266), l42.fvalue(l62.fvalue(l42.fvalue(l153), l42.fvalue(v769)))));
                            })()));
                        })(l173.fvalue(v769, (function(){
                            var symbol = l174;
                            var value = symbol.value;
                            if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                            return value;
                        })(), l99));
                    })() : (l75.fvalue(v769) !== l3.value ? (function(){
                        return l16.fvalue(v769);
                    })() : (((typeof(v769) == "string")?l4.value: l3.value) !== l3.value ? (function(){
                        return l124.fvalue("\"", l136.fvalue(v769), "\"");
                    })() : (((function(){
                        var x = v769;
                        return typeof x === 'object' && 'length' in x;
                    })()?l4.value: l3.value) !== l3.value ? (function(){
                        return l217.fvalue(v769);
                    })() : (l57.fvalue(v769) !== l3.value ? (function(){
                        return (function(v772,v773){
                            return (l91.fvalue(v772, (function(){
                                var symbol = l194;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? (function(){
                                return (function(v774){
                                    return (function(){
                                        var f = v774;
                                        var args = [];
                                        var tail = (v773);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.fvalue(l91.fvalue(v772, (function(){
                                    var symbol = l194;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : ((l91.fvalue(v772, (function(){
                                var symbol = l244;
                                var value = symbol.value;
                                if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                return value;
                            })()) !== l3.value ? l26.fvalue(l187.fvalue(v772, l98, l190)) : l3.value) !== l3.value ? (function(){
                                return (function(v775){
                                    return (function(){
                                        var f = v775;
                                        var args = [];
                                        var tail = (v773);
                                        while (tail != l3.value){
                                            args.push(tail.car);
                                            tail = tail.cdr;
                                        }
                                        return f.apply(this, args);
                                    })();
                                })(l39.fvalue(l91.fvalue(v772, (function(){
                                    var symbol = l244;
                                    var value = symbol.value;
                                    if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                    return value;
                                })())));
                            })() : (function(){
                                return (l185.fvalue(v772) !== l3.value ? l133.fvalue(l293.fvalue(v769)) : l294.fvalue(v772, v773));
                            })()));
                        })((function(){
                            var tmp = v769;
                            return tmp === l3.value? l3.value: tmp.car;
                        })(),(function(){
                            var tmp = v769;
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
    (l295).fvalue = (function(v781){
        ((v781)["fname"] = "LS-COMPILE-TOPLEVEL");
        return v781;
    })((function (v777){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v778){
                        try {
                            var tmp;
                            tmp = l180.value;
                            l180.value = v778;
                            v778 = tmp;
                            return ((((function(){
                                var tmp = v777;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?l4.value: l3.value) !== l3.value ? (((function(){
                                var tmp = v777;
                                return tmp === l3.value? l3.value: tmp.car;
                            })() === l222)?l4.value: l3.value) : l3.value) !== l3.value ? (function(){
                                return (function(v779){
                                    return l126.fvalue(l84.fvalue((function(){
                                        var symbol = l182;
                                        var func = symbol.fvalue;
                                        if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                        return func;
                                    })(), v779));
                                })(l69.fvalue((function(){
                                    var symbol = l295;
                                    var func = symbol.fvalue;
                                    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
                                    return func;
                                })(), (function(){
                                    var tmp = v777;
                                    return tmp === l3.value? l3.value: tmp.cdr;
                                })()));
                            })() : (function(){
                                return (function(v780){
                                    return l124.fvalue(l127.fvalue(l183.fvalue(), l124.fvalue(";", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })())), (v780 !== l3.value ? l124.fvalue(v780, ";", (function(){
                                        var symbol = l123;
                                        var value = symbol.value;
                                        if (value === undefined) throw "Variable `" + symbol.name + "' is unbound.";
                                        return value;
                                    })()) : ""));
                                })(l133.fvalue(v777));
                            })());
                        }
                        finally {
                            l180.value = v778;
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
    (l221).fvalue = (function(v787){
        ((v787)["fname"] = "EVAL");
        return v787;
    })((function (v782){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (function(v786){
                        return (function(){
                            var string = v786;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            return eval.apply(window, [string]);
                        })();
                    })((function(v783){
                        (function(){
                            try {
                                return (function(){
                                    return (function(v784,v785){
                                        (function(){
                                            while(v784 !== l3.value){
                                                (v785 = (function(){
                                                    var tmp = v784;
                                                    return tmp === l3.value? l3.value: tmp.car;
                                                })());
                                                (function(){
                                                    (v785)();
                                                    return l3.value;
                                                })();
                                                (v784 = (function(){
                                                    var tmp = v784;
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
                        return v783;
                    })((function(){
                        ((l158).value = l3.value);
                        return l295.fvalue(v782);
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
var l298 = {car: l199, cdr: {car: l198, cdr: {car: l297, cdr: {car: l19, cdr: {car: l14, cdr: {car: l115, cdr: {car: l59, cdr: {car: l60, cdr: {car: l20, cdr: {car: l21, cdr: {car: l22, cdr: {car: l255, cdr: {car: l257, cdr: {car: l18, cdr: {car: l18, cdr: {car: l254, cdr: {car: l256, cdr: {car: l52, cdr: {car: l62, cdr: {car: l278, cdr: {car: l290, cdr: {car: l289, cdr: {car: l291, cdr: {car: l91, cdr: {car: l43, cdr: {car: l170, cdr: {car: l17, cdr: {car: l17, cdr: {car: l81, cdr: {car: l31, cdr: {car: l37, cdr: {car: l35, cdr: {car: l32, cdr: {car: l29, cdr: {car: l29, cdr: {car: l50, cdr: {car: l233, cdr: {car: l33, cdr: {car: l36, cdr: {car: l34, cdr: {car: l30, cdr: {car: l30, cdr: {car: l276, cdr: {car: l73, cdr: {car: l74, cdr: {car: l72, cdr: {car: l49, cdr: {car: l27, cdr: {car: l28, cdr: {car: l71, cdr: {car: l45, cdr: {car: l2, cdr: {car: l8, cdr: {car: l10, cdr: {car: l1, cdr: {car: l7, cdr: {car: l86, cdr: {car: l95, cdr: {car: l97, cdr: {car: l47, cdr: {car: l48, cdr: {car: l51, cdr: {car: l269, cdr: {car: l25, cdr: {car: l270, cdr: {car: l280, cdr: {car: l221, cdr: {car: l90, cdr: {car: l121, cdr: {car: l94, cdr: {car: l105, cdr: {car: l119, cdr: {car: l38, cdr: {car: l41, cdr: {car: l265, cdr: {car: l277, cdr: {car: l98, cdr: {car: l286, cdr: {car: l15, cdr: {car: l122, cdr: {car: l240, cdr: {car: l70, cdr: {car: l196, cdr: {car: l116, cdr: {car: l44, cdr: {car: l75, cdr: {car: l75, cdr: {car: l120, cdr: {car: l113, cdr: {car: l207, cdr: {car: l80, cdr: {car: l67, cdr: {car: l226, cdr: {car: l230, cdr: {car: l101, cdr: {car: l42, cdr: {car: l57, cdr: {car: l288, cdr: {car: l102, cdr: {car: l263, cdr: {car: l69, cdr: {car: l82, cdr: {car: l77, cdr: {car: l251, cdr: {car: l3, cdr: {car: l26, cdr: {car: l79, cdr: {car: l78, cdr: {car: l11, cdr: {car: l258, cdr: {car: l53, cdr: {car: l106, cdr: {car: l108, cdr: {car: l104, cdr: {car: l76, cdr: {car: l135, cdr: {car: l138, cdr: {car: l193, cdr: {car: l54, cdr: {car: l55, cdr: {car: l222, cdr: {car: l65, cdr: {car: l46, cdr: {car: l153, cdr: {car: l83, cdr: {car: l84, cdr: {car: l85, cdr: {car: l12, cdr: {car: l232, cdr: {car: l63, cdr: {car: l64, cdr: {car: l39, cdr: {car: l210, cdr: {car: l211, cdr: {car: l89, cdr: {car: l273, cdr: {car: l92, cdr: {car: l93, cdr: {car: l272, cdr: {car: l87, cdr: {car: l219, cdr: {car: l264, cdr: {car: l114, cdr: {car: l267, cdr: {car: l266, cdr: {car: l262, cdr: {car: l4, cdr: {car: l239, cdr: {car: l40, cdr: {car: l234, cdr: {car: l24, cdr: {car: l6, cdr: {car: l241, cdr: {car: l99, cdr: {car: l137, cdr: {car: l5, cdr: {car: l96, cdr: {car: l287, cdr: {car: l23, cdr: l3}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
l121.fvalue(l298);
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
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.print = (function(){
    var symbol = l135;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.eval = (function(){
    var symbol = l221;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.compile = (function(){
    var symbol = l295;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + symbol.name + "' is undefined.";
    return func;
})());
(lisp.evalString = (function (v788){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l221.fvalue(l157.fvalue(v788));

}));
(lisp.compileString = (function (v789){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return l295.fvalue(l157.fvalue(v789));

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
    l117.fvalue(l297);
    l117.fvalue(l296);
    l117.fvalue(l295);
    l117.fvalue(l294);
    l117.fvalue(l293);
    l117.fvalue(l292);
    l117.fvalue(l291);
    l117.fvalue(l290);
    l117.fvalue(l289);
    l117.fvalue(l288);
    l117.fvalue(l287);
    l117.fvalue(l286);
    l117.fvalue(l285);
    l117.fvalue(l284);
    l117.fvalue(l283);
    l117.fvalue(l282);
    l117.fvalue(l281);
    l117.fvalue(l280);
    l117.fvalue(l279);
    l117.fvalue(l278);
    l117.fvalue(l277);
    l117.fvalue(l276);
    l117.fvalue(l275);
    l117.fvalue(l274);
    l117.fvalue(l273);
    l117.fvalue(l272);
    l117.fvalue(l271);
    l117.fvalue(l270);
    l117.fvalue(l269);
    l117.fvalue(l268);
    l117.fvalue(l267);
    l117.fvalue(l266);
    l117.fvalue(l265);
    l117.fvalue(l264);
    l117.fvalue(l263);
    l117.fvalue(l262);
    l117.fvalue(l261);
    l117.fvalue(l260);
    l117.fvalue(l259);
    l117.fvalue(l258);
    l117.fvalue(l257);
    l117.fvalue(l256);
    l117.fvalue(l255);
    l117.fvalue(l254);
    l117.fvalue(l253);
    l117.fvalue(l252);
    l117.fvalue(l251);
    l117.fvalue(l250);
    l117.fvalue(l249);
    l117.fvalue(l248);
    l117.fvalue(l247);
    l117.fvalue(l246);
    l117.fvalue(l245);
    l117.fvalue(l244);
    l117.fvalue(l243);
    l117.fvalue(l242);
    l117.fvalue(l241);
    l117.fvalue(l240);
    l117.fvalue(l239);
    l117.fvalue(l238);
    l117.fvalue(l237);
    l117.fvalue(l236);
    l117.fvalue(l235);
    l117.fvalue(l234);
    l117.fvalue(l233);
    l117.fvalue(l232);
    l117.fvalue(l231);
    l117.fvalue(l230);
    l117.fvalue(l229);
    l117.fvalue(l228);
    l117.fvalue(l227);
    l117.fvalue(l226);
    l117.fvalue(l225);
    l117.fvalue(l224);
    l117.fvalue(l223);
    l117.fvalue(l222);
    l117.fvalue(l221);
    l117.fvalue(l220);
    l117.fvalue(l219);
    l117.fvalue(l218);
    l117.fvalue(l217);
    l117.fvalue(l216);
    l117.fvalue(l215);
    l117.fvalue(l214);
    l117.fvalue(l213);
    l117.fvalue(l212);
    l117.fvalue(l211);
    l117.fvalue(l210);
    l117.fvalue(l209);
    l117.fvalue(l208);
    l117.fvalue(l207);
    l117.fvalue(l206);
    l117.fvalue(l205);
    l117.fvalue(l204);
    l117.fvalue(l203);
    l117.fvalue(l202);
    l117.fvalue(l201);
    l117.fvalue(l199);
    l117.fvalue(l198);
    l117.fvalue(l197);
    l117.fvalue(l196);
    l117.fvalue(l195);
    l117.fvalue(l194);
    l117.fvalue(l193);
    l117.fvalue(l192);
    l117.fvalue(l191);
    l117.fvalue(l190);
    l117.fvalue(l189);
    l117.fvalue(l188);
    l117.fvalue(l187);
    l117.fvalue(l186);
    l117.fvalue(l185);
    l117.fvalue(l184);
    l117.fvalue(l183);
    l117.fvalue(l182);
    l117.fvalue(l181);
    l117.fvalue(l180);
    l117.fvalue(l179);
    l117.fvalue(l178);
    l117.fvalue(l177);
    l117.fvalue(l176);
    l117.fvalue(l175);
    l117.fvalue(l174);
    l117.fvalue(l173);
    l117.fvalue(l172);
    l117.fvalue(l171);
    l117.fvalue(l170);
    l117.fvalue(l169);
    l117.fvalue(l168);
    l117.fvalue(l167);
    l117.fvalue(l166);
    l117.fvalue(l165);
    l117.fvalue(l164);
    l117.fvalue(l163);
    l117.fvalue(l162);
    l117.fvalue(l161);
    l117.fvalue(l160);
    l117.fvalue(l159);
    l117.fvalue(l158);
    l117.fvalue(l157);
    l117.fvalue(l156);
    l117.fvalue(l155);
    l117.fvalue(l154);
    l117.fvalue(l153);
    l117.fvalue(l152);
    l117.fvalue(l151);
    l117.fvalue(l150);
    l117.fvalue(l149);
    l117.fvalue(l148);
    l117.fvalue(l147);
    l117.fvalue(l146);
    l117.fvalue(l145);
    l117.fvalue(l144);
    l117.fvalue(l143);
    l117.fvalue(l142);
    l117.fvalue(l141);
    l117.fvalue(l140);
    l117.fvalue(l139);
    l117.fvalue(l138);
    l117.fvalue(l137);
    l117.fvalue(l136);
    l117.fvalue(l135);
    l117.fvalue(l134);
    l117.fvalue(l133);
    l117.fvalue(l132);
    l117.fvalue(l131);
    l117.fvalue(l130);
    l117.fvalue(l129);
    l117.fvalue(l128);
    l117.fvalue(l127);
    l117.fvalue(l126);
    l117.fvalue(l125);
    l117.fvalue(l124);
    l117.fvalue(l123);
    l117.fvalue(l122);
    l117.fvalue(l121);
    l117.fvalue(l120);
    l117.fvalue(l119);
    l117.fvalue(l118);
    l117.fvalue(l117);
    l117.fvalue(l116);
    l117.fvalue(l115);
    l117.fvalue(l114);
    l117.fvalue(l113);
    l117.fvalue(l112);
    l117.fvalue(l111);
    l117.fvalue(l110);
    l117.fvalue(l109);
    l117.fvalue(l108);
    l117.fvalue(l107);
    l117.fvalue(l106);
    l117.fvalue(l105);
    l117.fvalue(l104);
    l117.fvalue(l103);
    l117.fvalue(l102);
    l117.fvalue(l101);
    l117.fvalue(l100);
    l117.fvalue(l99);
    l117.fvalue(l98);
    l117.fvalue(l97);
    l117.fvalue(l96);
    l117.fvalue(l95);
    l117.fvalue(l94);
    l117.fvalue(l93);
    l117.fvalue(l92);
    l117.fvalue(l91);
    l117.fvalue(l90);
    l117.fvalue(l89);
    l117.fvalue(l88);
    l117.fvalue(l87);
    l117.fvalue(l86);
    l117.fvalue(l85);
    l117.fvalue(l84);
    l117.fvalue(l83);
    l117.fvalue(l82);
    l117.fvalue(l81);
    l117.fvalue(l80);
    l117.fvalue(l79);
    l117.fvalue(l78);
    l117.fvalue(l77);
    l117.fvalue(l76);
    l117.fvalue(l75);
    l117.fvalue(l74);
    l117.fvalue(l73);
    l117.fvalue(l72);
    l117.fvalue(l71);
    l117.fvalue(l70);
    l117.fvalue(l69);
    l117.fvalue(l68);
    l117.fvalue(l67);
    l117.fvalue(l66);
    l117.fvalue(l65);
    l117.fvalue(l64);
    l117.fvalue(l63);
    l117.fvalue(l62);
    l117.fvalue(l61);
    l117.fvalue(l60);
    l117.fvalue(l59);
    l117.fvalue(l58);
    l117.fvalue(l57);
    l117.fvalue(l56);
    l117.fvalue(l55);
    l117.fvalue(l54);
    l117.fvalue(l53);
    l117.fvalue(l52);
    l117.fvalue(l51);
    l117.fvalue(l50);
    l117.fvalue(l49);
    l117.fvalue(l48);
    l117.fvalue(l47);
    l117.fvalue(l46);
    l117.fvalue(l45);
    l117.fvalue(l44);
    l117.fvalue(l43);
    l117.fvalue(l42);
    l117.fvalue(l41);
    l117.fvalue(l40);
    l117.fvalue(l39);
    l117.fvalue(l38);
    l117.fvalue(l37);
    l117.fvalue(l36);
    l117.fvalue(l35);
    l117.fvalue(l34);
    l117.fvalue(l33);
    l117.fvalue(l32);
    l117.fvalue(l31);
    l117.fvalue(l30);
    l117.fvalue(l29);
    l117.fvalue(l28);
    l117.fvalue(l27);
    l117.fvalue(l26);
    l117.fvalue(l25);
    l117.fvalue(l24);
    l117.fvalue(l23);
    l117.fvalue(l22);
    l117.fvalue(l21);
    l117.fvalue(l20);
    l117.fvalue(l19);
    l117.fvalue(l18);
    l117.fvalue(l17);
    l117.fvalue(l16);
    l117.fvalue(l15);
    l117.fvalue(l14);
    l117.fvalue(l13);
    l117.fvalue(l12);
    l117.fvalue(l11);
    l117.fvalue(l10);
    l117.fvalue(l9);
    l117.fvalue(l8);
    l117.fvalue(l7);
    l117.fvalue(l6);
    l117.fvalue(l5);
    l117.fvalue(l4);
    l117.fvalue(l3);
    l117.fvalue(l2);
    l117.fvalue(l1);
    ((l214).value = l299);
    ((l174).value = l331);
    ((l175).value = 789);
    ((l14).value = 206);
    return ((l231).value = 274);
})();
((l215).value = 331);
