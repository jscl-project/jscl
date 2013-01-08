var f34;
var f33;
var f32;
var f31;
var f30;
var f29;
var f28;
var f27;
var f26;
var f25;
var f24;
var f23;
var f22;
var f21;
var f20;
var f19;
var f18;
var f17;
var f16;
var f15;
var f14;
var f13;
var f12;
var f11;
var f10;
var f9;
var f8;
var f7;
var f5;
var v12;
var f4;
var f3;
var f2;
var f1;
var v3;
var v2;
var v1;
(function(){
    (function(){
        return v1 = {};
    })();
    (function(){
        return v2 = (function(){
            var name = "NIL";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    ((v1)["NIL"] = v2);
    (function(){
        return v3 = (function(){
            var name = "T";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    ((v1)["T"] = v3);
    (function(){
        return f1 = (function(v4){
            ((v4)["fname"] = "NULL");
            return v4;
        })((function (v5){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((v5 === v2)?v3: v2);
        }));
    })();
    (function(){
        return f2 = (function(v6){
            ((v6)["fname"] = "INTERNP");
            return v6;
        })((function (v7){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((v7) in (v1))?v3: v2);
        }));
    })();
    (function(){
        return f3 = (function(v8){
            ((v8)["fname"] = "INTERN");
            return v8;
        })((function (v9){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f2(v9) !== v2 ? (function(){
                var tmp = (v1)[v9];
                return tmp == undefined? v2: tmp ;
            })() : ((v1)[v9] = (function(){
                var name = v9;
                if (typeof name != 'string')
                    throw 'The value ' + name + ' is not a type string.';
                return ({name: name});
            })()));
        }));
    })();
    (function(){
        return f4 = (function(v10){
            ((v10)["fname"] = "FIND-SYMBOL");
            return v10;
        })((function (v11){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (v1)[v11];
                return tmp == undefined? v2: tmp ;
            })();
        }));
    })();
    (function(){
        return v12 = 0;
    })();
    (function(){
        return f5 = (function(v13){
            ((v13)["fname"] = "GENSYM");
            return v13;
        })((function (v14){
            if (arguments.length > 1) throw 'too many arguments';
            switch(arguments.length){
            case 0:
            v14="G";
            default: break;
            }
            v12 = (function(){
                var x = v12;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })();
            return (function(){
                var name = (function(){
                    var string1 = v14;
                    var string2 = f6(v12);
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
        }));
    })();
    (function(){
        return f7 = (function(v15){
            ((v15)["fname"] = "=");
            return v15;
        })((function (v16,v17){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return ((function(){
                var x = v16;
                var y = v17;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x==y;
            })()?v3: v2);
        }));
    })();
    (function(){
        return f8 = (function(v18){
            ((v18)["fname"] = "+");
            return v18;
        })((function (v19,v20){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v19;
                var y = v20;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })();
        }));
    })();
    (function(){
        return f9 = (function(v21){
            ((v21)["fname"] = "-");
            return v21;
        })((function (v22,v23){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v22;
                var y = v23;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x-y;
            })();
        }));
    })();
    (function(){
        return f10 = (function(v24){
            ((v24)["fname"] = "*");
            return v24;
        })((function (v25,v26){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v25;
                var y = v26;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x*y;
            })();
        }));
    })();
    (function(){
        return f11 = (function(v27){
            ((v27)["fname"] = "/");
            return v27;
        })((function (v28,v29){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v28;
                var y = v29;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x/y;
            })();
        }));
    })();
    (function(){
        return f12 = (function(v30){
            ((v30)["fname"] = "1+");
            return v30;
        })((function (v31){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = v31;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })();
        }));
    })();
    (function(){
        return f13 = (function(v32){
            ((v32)["fname"] = "1-");
            return v32;
        })((function (v33){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = v33;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x-y;
            })();
        }));
    })();
    (function(){
        return f14 = (function(v34){
            ((v34)["fname"] = "ZEROP");
            return v34;
        })((function (v35){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(){
                var x = v35;
                var y = 0;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x==y;
            })()?v3: v2);
        }));
    })();
    (function(){
        return f15 = (function(v36){
            ((v36)["fname"] = "TRUNCATE");
            return v36;
        })((function (v37,v38){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = (function(){
                    var x = v37;
                    var y = v38;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x/y;
                })();
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                return Math.floor(x);
            })();
        }));
    })();
    (function(){
        return f16 = (function(v39){
            ((v39)["fname"] = "EQL");
            return v39;
        })((function (v40,v41){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return ((v40 === v41)?v3: v2);
        }));
    })();
    (function(){
        return f17 = (function(v42){
            ((v42)["fname"] = "NOT");
            return v42;
        })((function (v43){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (v43 !== v2 ? v2 : v3);
        }));
    })();
    (function(){
        return f18 = (function(v44){
            ((v44)["fname"] = "CONS");
            return v44;
        })((function (v45,v46){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return ({car: v45, cdr: v46});
        }));
    })();
    (function(){
        return f19 = (function(v47){
            ((v47)["fname"] = "CONSP");
            return v47;
        })((function (v48){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(){
                var tmp = v48;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v3: v2);
        }));
    })();
    (function(){
        return f20 = (function(v49){
            ((v49)["fname"] = "CAR");
            return v49;
        })((function (v50){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = v50;
                return tmp === v2? v2: tmp.car;
            })();
        }));
    })();
    (function(){
        return f21 = (function(v51){
            ((v51)["fname"] = "CDR");
            return v51;
        })((function (v52){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = v52;
                return tmp === v2? v2: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f22 = (function(v53){
            ((v53)["fname"] = "CAAR");
            return v53;
        })((function (v54){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v54;
                    return tmp === v2? v2: tmp.car;
                })();
                return tmp === v2? v2: tmp.car;
            })();
        }));
    })();
    (function(){
        return f23 = (function(v55){
            ((v55)["fname"] = "CADR");
            return v55;
        })((function (v56){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v56;
                    return tmp === v2? v2: tmp.cdr;
                })();
                return tmp === v2? v2: tmp.car;
            })();
        }));
    })();
    (function(){
        return f24 = (function(v57){
            ((v57)["fname"] = "CDAR");
            return v57;
        })((function (v58){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v58;
                    return tmp === v2? v2: tmp.car;
                })();
                return tmp === v2? v2: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f25 = (function(v59){
            ((v59)["fname"] = "CDDR");
            return v59;
        })((function (v60){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v60;
                    return tmp === v2? v2: tmp.cdr;
                })();
                return tmp === v2? v2: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f26 = (function(v61){
            ((v61)["fname"] = "CADDR");
            return v61;
        })((function (v62){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v62;
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return tmp === v2? v2: tmp.cdr;
                })();
                return tmp === v2? v2: tmp.car;
            })();
        }));
    })();
    (function(){
        return f27 = (function(v63){
            ((v63)["fname"] = "CDDDR");
            return v63;
        })((function (v64){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v64;
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return tmp === v2? v2: tmp.cdr;
                })();
                return tmp === v2? v2: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f28 = (function(v65){
            ((v65)["fname"] = "CADDDR");
            return v65;
        })((function (v66){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v66;
                            return tmp === v2? v2: tmp.cdr;
                        })();
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return tmp === v2? v2: tmp.cdr;
                })();
                return tmp === v2? v2: tmp.car;
            })();
        }));
    })();
    (function(){
        return f29 = (function(v67){
            ((v67)["fname"] = "FIRST");
            return v67;
        })((function (v68){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = v68;
                return tmp === v2? v2: tmp.car;
            })();
        }));
    })();
    (function(){
        return f30 = (function(v69){
            ((v69)["fname"] = "SECOND");
            return v69;
        })((function (v70){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f23(v70);
        }));
    })();
    (function(){
        return f31 = (function(v71){
            ((v71)["fname"] = "THIRD");
            return v71;
        })((function (v72){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f26(v72);
        }));
    })();
    (function(){
        return f32 = (function(v73){
            ((v73)["fname"] = "FOURTH");
            return v73;
        })((function (v74){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f28(v74);
        }));
    })();
    (function(){
        return f33 = (function(v75){
            ((v75)["fname"] = "LIST");
            return v75;
        })((function (){
            var v76= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v76 = {car: arguments[i], cdr: v76};
            return v76;
        }));
    })();
    (function(){
        return f34 = (function(v77){
            ((v77)["fname"] = "ATOM");
            return v77;
        })((function (v78){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f17(((function(){
                var tmp = v78;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v3: v2));
        }));
    })();
    return ;
})(); 
var f35;
(function(){
    return f35 = (function(v79){
        ((v79)["fname"] = "ENSURE-LIST");
        return v79;
    })((function (v80){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (f36(v80) !== v2 ? v80 : f33(v80));
    }));
})(); 
var f37;
(function(){
    return f37 = (function(v81){
        ((v81)["fname"] = "!REDUCE");
        return v81;
    })((function (v82,v83,v84){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (f1(v83) !== v2 ? v84 : f37(v82, (function(){
            var tmp = v83;
            return tmp === v2? v2: tmp.cdr;
        })(), (v82)(v84, (function(){
            var tmp = v83;
            return tmp === v2? v2: tmp.car;
        })())));
    }));
})(); 
var l33 = f3("STRING=");
var f66;
var l32 = f3("ASSOC");
var f65;
var l31 = f3("EVERY");
var f64;
var l30 = f3("PARSE-INTEGER");
var f63;
var l29 = f3("SUBSEQ");
var f62;
var l28 = f3("DIGIT-CHAR-P");
var f61;
var l27 = f3("REMOVE-IF-NOT");
var f60;
var l26 = f3("REMOVE-IF");
var f59;
var l25 = f3("REMOVE");
var f58;
var l24 = f3("MEMBER");
var f57;
var l23 = f3("BUTLAST");
var f56;
var l22 = f3("LAST");
var f55;
var l21 = f3("NTH");
var f54;
var l20 = f3("LISTP");
var f36;
var l19 = f3("MINUSP");
var f53;
var l18 = f3("PLUSP");
var f52;
var l17 = f3("INTEGERP");
var f51;
var l16 = f3("CHAR=");
var f50;
var l15 = f3("CHAR-CODE");
var f49;
var l14 = f3("CODE-CHAR");
var f48;
var l13 = f3("COPY-LIST");
var f47;
var l12 = f3("IDENTITY");
var f46;
var l11 = f3("MAPCAR");
var l10 = f3("NIL");
var f45;
var l9 = f3("CONCAT-TWO");
var f44;
var l8 = f3("LENGTH");
var f43;
var l7 = f3("LIST-LENGTH");
var f42;
var l6 = f3("REVERSE");
var l5 = f3("NIL");
var f41;
var l4 = f3("REVERSE-AUX");
var f40;
var l3 = f3("APPEND");
var l2 = f3("NIL");
var f39;
var l1 = f3("APPEND-TWO");
var f38;
(function(){
    (function(){
        (function(){
            return f38 = (function(v85){
                ((v85)["fname"] = "APPEND-TWO");
                return v85;
            })((function (v86,v87){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v86) !== v2 ? v87 : ({car: (function(){
                    var tmp = v86;
                    return tmp === v2? v2: tmp.car;
                })(), cdr: f39((function(){
                    var tmp = v86;
                    return tmp === v2? v2: tmp.cdr;
                })(), v87)}));
            }));
        })();
        return l1;
    })();
    (function(){
        (function(){
            return f39 = (function(v88){
                ((v88)["fname"] = "APPEND");
                return v88;
            })((function (){
                var v89= v2;
                for (var i = arguments.length-1; i>=0; i--)
                    v89 = {car: arguments[i], cdr: v89};
                return f37(f38, v89, l2);
            }));
        })();
        return l3;
    })();
    (function(){
        (function(){
            return f40 = (function(v90){
                ((v90)["fname"] = "REVERSE-AUX");
                return v90;
            })((function (v91,v92){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v91) !== v2 ? v92 : f40((function(){
                    var tmp = v91;
                    return tmp === v2? v2: tmp.cdr;
                })(), ({car: (function(){
                    var tmp = v91;
                    return tmp === v2? v2: tmp.car;
                })(), cdr: v92})));
            }));
        })();
        return l4;
    })();
    (function(){
        (function(){
            return f41 = (function(v93){
                ((v93)["fname"] = "REVERSE");
                return v93;
            })((function (v94){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f40(v94, l5);
            }));
        })();
        return l6;
    })();
    (function(){
        (function(){
            return f42 = (function(v95){
                ((v95)["fname"] = "LIST-LENGTH");
                return v95;
            })((function (v96){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v97){
                    (function(){
                        while(f17(f1(v96)) !== v2){
                            v97 = (function(){
                                var x = v97;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                            v96 = (function(){
                                var tmp = v96;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                    }})();
                    return v97;
                })(0);
            }));
        })();
        return l7;
    })();
    (function(){
        (function(){
            return f43 = (function(v98){
                ((v98)["fname"] = "LENGTH");
                return v98;
            })((function (v99){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((typeof(v99) == "string")?v3: v2) !== v2 ? (function(){
                    var x = v99;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return x.length;
                })() : f42(v99));
            }));
        })();
        return l8;
    })();
    (function(){
        (function(){
            return f44 = (function(v100){
                ((v100)["fname"] = "CONCAT-TWO");
                return v100;
            })((function (v101,v102){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    var string1 = v101;
                    var string2 = v102;
                    if (typeof string1 != 'string')
                        throw 'The value ' + string1 + ' is not a type string.';
                    if (typeof string2 != 'string')
                        throw 'The value ' + string2 + ' is not a type string.';
                    return string1.concat(string2);
                })();
            }));
        })();
        return l9;
    })();
    (function(){
        (function(){
            return f45 = (function(v103){
                ((v103)["fname"] = "MAPCAR");
                return v103;
            })((function (v104,v105){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v105) !== v2 ? l10 : ({car: (v104)((function(){
                    var tmp = v105;
                    return tmp === v2? v2: tmp.car;
                })()), cdr: f45(v104, (function(){
                    var tmp = v105;
                    return tmp === v2? v2: tmp.cdr;
                })())}));
            }));
        })();
        return l11;
    })();
    (function(){
        (function(){
            return f46 = (function(v106){
                ((v106)["fname"] = "IDENTITY");
                return v106;
            })((function (v107){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return v107;
            }));
        })();
        return l12;
    })();
    (function(){
        (function(){
            return f47 = (function(v108){
                ((v108)["fname"] = "COPY-LIST");
                return v108;
            })((function (v109){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f45(f46, v109);
            }));
        })();
        return l13;
    })();
    (function(){
        (function(){
            return f48 = (function(v110){
                ((v110)["fname"] = "CODE-CHAR");
                return v110;
            })((function (v111){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return v111;
            }));
        })();
        return l14;
    })();
    (function(){
        (function(){
            return f49 = (function(v112){
                ((v112)["fname"] = "CHAR-CODE");
                return v112;
            })((function (v113){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return v113;
            }));
        })();
        return l15;
    })();
    (function(){
        (function(){
            return f50 = (function(v114){
                ((v114)["fname"] = "CHAR=");
                return v114;
            })((function (v115,v116){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((function(){
                    var x = v115;
                    var y = v116;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x==y;
                })()?v3: v2);
            }));
        })();
        return l16;
    })();
    (function(){
        (function(){
            return f51 = (function(v117){
                ((v117)["fname"] = "INTEGERP");
                return v117;
            })((function (v118){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((typeof (v118) == "number")?v3: v2) !== v2 ? ((function(){
                    var x = (function(){
                        var x = v118;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return Math.floor(x);
                    })();
                    var y = v118;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x==y;
                })()?v3: v2) : v2);
            }));
        })();
        return l17;
    })();
    (function(){
        (function(){
            return f52 = (function(v119){
                ((v119)["fname"] = "PLUSP");
                return v119;
            })((function (v120){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((function(){
                    var x = 0;
                    var y = v120;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<y;
                })()?v3: v2);
            }));
        })();
        return l18;
    })();
    (function(){
        (function(){
            return f53 = (function(v121){
                ((v121)["fname"] = "MINUSP");
                return v121;
            })((function (v122){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((function(){
                    var x = v122;
                    var y = 0;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<y;
                })()?v3: v2);
            }));
        })();
        return l19;
    })();
    (function(){
        (function(){
            return f36 = (function(v123){
                ((v123)["fname"] = "LISTP");
                return v123;
            })((function (v124){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v125){
                    return (v125 !== v2 ? v125 : f1(v124));
                })(((function(){
                    var tmp = v124;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v3: v2));
            }));
        })();
        return l20;
    })();
    (function(){
        (function(){
            return f54 = (function(v126){
                ((v126)["fname"] = "NTH");
                return v126;
            })((function (v127,v128){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v128) !== v2 ? (function(){
                    return v128;
                })() : (f14(v127) !== v2 ? (function(){
                    return (function(){
                        var tmp = v128;
                        return tmp === v2? v2: tmp.car;
                    })();
                })() : (function(){
                    return f54(f13(v127), (function(){
                        var tmp = v128;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l21;
    })();
    (function(){
        (function(){
            return f55 = (function(v129){
                ((v129)["fname"] = "LAST");
                return v129;
            })((function (v130){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = (function(){
                        var tmp = v130;
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v3: v2) !== v2 ? f55((function(){
                    var tmp = v130;
                    return tmp === v2? v2: tmp.cdr;
                })()) : v130);
            }));
        })();
        return l22;
    })();
    (function(){
        (function(){
            return f56 = (function(v131){
                ((v131)["fname"] = "BUTLAST");
                return v131;
            })((function (v132){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = (function(){
                        var tmp = v132;
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v3: v2) !== v2 ? ({car: (function(){
                    var tmp = v132;
                    return tmp === v2? v2: tmp.car;
                })(), cdr: f56((function(){
                    var tmp = v132;
                    return tmp === v2? v2: tmp.cdr;
                })())}) : v2);
            }));
        })();
        return l23;
    })();
    (function(){
        (function(){
            return f57 = (function(v133){
                ((v133)["fname"] = "MEMBER");
                return v133;
            })((function (v134,v135){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v135) !== v2 ? (function(){
                    return v2;
                })() : (f16(v134, (function(){
                    var tmp = v135;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return v135;
                })() : (function(){
                    return f57(v134, (function(){
                        var tmp = v135;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l24;
    })();
    (function(){
        (function(){
            return f58 = (function(v136){
                ((v136)["fname"] = "REMOVE");
                return v136;
            })((function (v137,v138){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v138) !== v2 ? (function(){
                    return v2;
                })() : (f16(v137, (function(){
                    var tmp = v138;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return f58(v137, (function(){
                        var tmp = v138;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })() : (function(){
                    return ({car: (function(){
                        var tmp = v138;
                        return tmp === v2? v2: tmp.car;
                    })(), cdr: f58(v137, (function(){
                        var tmp = v138;
                        return tmp === v2? v2: tmp.cdr;
                    })())});
                })()));
            }));
        })();
        return l25;
    })();
    (function(){
        (function(){
            return f59 = (function(v139){
                ((v139)["fname"] = "REMOVE-IF");
                return v139;
            })((function (v140,v141){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v141) !== v2 ? (function(){
                    return v2;
                })() : ((v140)((function(){
                    var tmp = v141;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return f59(v140, (function(){
                        var tmp = v141;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })() : (function(){
                    return ({car: (function(){
                        var tmp = v141;
                        return tmp === v2? v2: tmp.car;
                    })(), cdr: f59(v140, (function(){
                        var tmp = v141;
                        return tmp === v2? v2: tmp.cdr;
                    })())});
                })()));
            }));
        })();
        return l26;
    })();
    (function(){
        (function(){
            return f60 = (function(v142){
                ((v142)["fname"] = "REMOVE-IF-NOT");
                return v142;
            })((function (v143,v144){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v144) !== v2 ? (function(){
                    return v2;
                })() : ((v143)((function(){
                    var tmp = v144;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return ({car: (function(){
                        var tmp = v144;
                        return tmp === v2? v2: tmp.car;
                    })(), cdr: f60(v143, (function(){
                        var tmp = v144;
                        return tmp === v2? v2: tmp.cdr;
                    })())});
                })() : (function(){
                    return f60(v143, (function(){
                        var tmp = v144;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l27;
    })();
    (function(){
        (function(){
            return f61 = (function(v145){
                ((v145)["fname"] = "DIGIT-CHAR-P");
                return v145;
            })((function (v146){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((((function(){
                    var x = 48;
                    var y = v146;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<=y;
                })()?v3: v2) !== v2 ? ((function(){
                    var x = v146;
                    var y = 57;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<=y;
                })()?v3: v2) : v2) !== v2 ? (function(){
                    var x = v146;
                    var y = 48;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })() : v2);
            }));
        })();
        return l28;
    })();
    (function(){
        (function(){
            return f62 = (function(v147){
                ((v147)["fname"] = "SUBSEQ");
                return v147;
            })((function (v148,v149,v150){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 3) throw 'too many arguments';
                switch(arguments.length){
                case 2:
                v150=v2;
                default: break;
                }
                return (((typeof(v148) == "string")?v3: v2) !== v2 ? (function(){
                    return (v150 !== v2 ? (function(){
                        var str = v148;
                        var a = v149;
                        var b;
                        b = v150;
                        return str.slice(a,b);
                    })() : (function(){
                        var str = v148;
                        var a = v149;
                        var b;
                        return str.slice(a,b);
                    })());
                })() : (function(){
                    return (function (){ throw "Unsupported argument."; })();
                })());
            }));
        })();
        return l29;
    })();
    (function(){
        (function(){
            return f63 = (function(v151){
                ((v151)["fname"] = "PARSE-INTEGER");
                return v151;
            })((function (v152){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v153,v154,v155){
                    (function(){
                        while(((function(){
                            var x = v154;
                            var y = v155;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            v153 = (function(){
                                var x = (function(){
                                    var x = v153;
                                    var y = 10;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x*y;
                                })();
                                var y = f61((function(){
                                    var string = v152;
                                    var index = v154;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    if (typeof index != 'number')
                                        throw 'The value ' + index + ' is not a type number.';
                                    return string.charCodeAt(index);
                                })());
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                            v154 = (function(){
                                var x = v154;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v153;
                })(0,0,f43(v152));
            }));
        })();
        return l30;
    })();
    (function(){
        (function(){
            return f64 = (function(v156){
                ((v156)["fname"] = "EVERY");
                return v156;
            })((function (v157,v158){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(v159,v160,v161){
                    (function(){
                        while((v159 !== v2 ? ((function(){
                            var x = v160;
                            var y = v161;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) : v2) !== v2){
                            ((v157)((function(){
                                var string = v158;
                                var index = v160;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })()) !== v2 ? v2 : (function(){
                                return v159 = v2;
                            })());
                            v160 = (function(){
                                var x = v160;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v159;
                })(v3,0,f43(v158));
            }));
        })();
        return l31;
    })();
    (function(){
        (function(){
            return f65 = (function(v162){
                ((v162)["fname"] = "ASSOC");
                return v162;
            })((function (v163,v164){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v164) !== v2 ? (function(){
                    return v2;
                })() : (f16(v163, f22(v164)) !== v2 ? (function(){
                    return (function(){
                        var tmp = v164;
                        return tmp === v2? v2: tmp.car;
                    })();
                })() : (function(){
                    return f65(v163, (function(){
                        var tmp = v164;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l32;
    })();
    return (function(){
        (function(){
            return f66 = (function(v165){
                ((v165)["fname"] = "STRING=");
                return v165;
            })((function (v166,v167){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((v166 == v167)?v3: v2);
            }));
        })();
        return l33;
    })();
})(); 
var l34 = f3("*NEWLINE*");
var v168;
(function(){
    (function(){
        return v168 = (function(){
            var x = f48(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l34;
})(); 
var l35 = f3("CONCAT");
var f67;
(function(){
    (function(){
        return f67 = (function(v169){
            ((v169)["fname"] = "CONCAT");
            return v169;
        })((function (){
            var v170= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v170 = {car: arguments[i], cdr: v170};
            return f37(f44, v170, "");
        }));
    })();
    return l35;
})(); 
var l36 = f3("JOIN");
var f68;
(function(){
    (function(){
        return f68 = (function(v171){
            ((v171)["fname"] = "JOIN");
            return v171;
        })((function (v172,v173){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v173="";
            default: break;
            }
            return (f1(v172) !== v2 ? (function(){
                return "";
            })() : (f1((function(){
                var tmp = v172;
                return tmp === v2? v2: tmp.cdr;
            })()) !== v2 ? (function(){
                return (function(){
                    var tmp = v172;
                    return tmp === v2? v2: tmp.car;
                })();
            })() : (function(){
                return f67((function(){
                    var tmp = v172;
                    return tmp === v2? v2: tmp.car;
                })(), v173, f68((function(){
                    var tmp = v172;
                    return tmp === v2? v2: tmp.cdr;
                })(), v173));
            })()));
        }));
    })();
    return l36;
})(); 
var l37 = f3("JOIN-TRAILING");
var f69;
(function(){
    (function(){
        return f69 = (function(v174){
            ((v174)["fname"] = "JOIN-TRAILING");
            return v174;
        })((function (v175,v176){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v176="";
            default: break;
            }
            return (f1(v175) !== v2 ? "" : f67((function(){
                var tmp = v175;
                return tmp === v2? v2: tmp.car;
            })(), v176, f69((function(){
                var tmp = v175;
                return tmp === v2? v2: tmp.cdr;
            })(), v176)));
        }));
    })();
    return l37;
})(); 
var l38 = f3("INDENT");
var f70;
(function(){
    (function(){
        return f70 = (function(v177){
            ((v177)["fname"] = "INDENT");
            return v177;
        })((function (){
            var v178= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v178 = {car: arguments[i], cdr: v178};
            return (function(v179){
                return (function(v180,v181,v182){
                    (f52(v182) !== v2 ? (function(){
                        return v180 = "    ";
                    })() : v2);
                    (function(){
                        while(((function(){
                            var x = v181;
                            var y = v182;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            v180 = f67(v180, ((f50((function(){
                                var string = v179;
                                var index = v181;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10) !== v2 ? (((function(){
                                var x = v181;
                                var y = f13(v182);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2) !== v2 ? f17(f50((function(){
                                var string = v179;
                                var index = f12(v181);
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10)) : v2) : v2) !== v2 ? f67((function(){
                                var x = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })(), "    ") : f62(v179, v181, f12(v181))));
                            v181 = (function(){
                                var x = v181;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v180;
                })("",0,f43(v179));
            })(f37(f67, v178, ""));
        }));
    })();
    return l38;
})(); 
var l39 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v183){
            ((v183)["fname"] = "INTEGER-TO-STRING");
            return v183;
        })((function (v184){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f14(v184) !== v2 ? (function(){
                return "0";
            })() : (f53(v184) !== v2 ? (function(){
                return f67("-", f6((function(){
                    var x = 0;
                    var y = v184;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })()));
            })() : (function(){
                return (function(v185){
                    (function(){
                        while(f17(f14(v184)) !== v2){
                            v185 = ({car: (function(){
                                var x = v184;
                                var y = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x%y;
                            })(), cdr: v185});
                            v184 = f15(v184, 10);
                    }})();
                    return f68(f45((function (v186){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(){
                            var x = (function(){
                                var string = "0123456789";
                                var index = v186;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })();
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })();
                    }), v185));
                })(v2);
            })()));
        }));
    })();
    return l39;
})(); 
var l42 = f3("PRINT");
var f74;
var l41 = f3("WRITE-LINE");
var f73;
var l40 = f3("PRINT-TO-STRING");
var f71;
(function(){
    (function(){
        (function(){
            return f71 = (function(v187){
                ((v187)["fname"] = "PRINT-TO-STRING");
                return v187;
            })((function (v188){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = v188;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return (v188).name;
                })() : (f51(v188) !== v2 ? (function(){
                    return f6(v188);
                })() : (((typeof(v188) == "string")?v3: v2) !== v2 ? (function(){
                    return f67("\"", f72(v188), "\"");
                })() : (((typeof v188 == 'function')?v3: v2) !== v2 ? (function(){
                    return (function(v189){
                        return (v189 !== v2 ? f67("#<FUNCTION ", v189, ">") : f67("#<FUNCTION>"));
                    })((function(){
                        var tmp = (v188)["fname"];
                        return tmp == undefined? v2: tmp ;
                    })());
                })() : (f36(v188) !== v2 ? (function(){
                    return f67("(", f69(f45(f71, f56(v188)), " "), (function(v190){
                        return (f1((function(){
                            var tmp = v190;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? f71((function(){
                            var tmp = v190;
                            return tmp === v2? v2: tmp.car;
                        })()) : f67(f71((function(){
                            var tmp = v190;
                            return tmp === v2? v2: tmp.car;
                        })()), " . ", f71((function(){
                            var tmp = v190;
                            return tmp === v2? v2: tmp.cdr;
                        })())));
                    })(f55(v188)), ")");
                })() : v2)))));
            }));
        })();
        return l40;
    })();
    (function(){
        (function(){
            return f73 = (function(v191){
                ((v191)["fname"] = "WRITE-LINE");
                return v191;
            })((function (v192){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                (function(){
                    var x = v192;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                (function(){
                    var x = v168;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                return v192;
            }));
        })();
        return l41;
    })();
    return (function(){
        (function(){
            return f74 = (function(v193){
                ((v193)["fname"] = "PRINT");
                return v193;
            })((function (v194){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f73(f71(v194));
            }));
        })();
        return l42;
    })();
})(); 
var l43 = f3("MAKE-STRING-STREAM");
var f75;
(function(){
    (function(){
        return f75 = (function(v195){
            ((v195)["fname"] = "MAKE-STRING-STREAM");
            return v195;
        })((function (v196){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ({car: v196, cdr: 0});
        }));
    })();
    return l43;
})(); 
var l44 = f3("%PEEK-CHAR");
var f76;
(function(){
    (function(){
        return f76 = (function(v197){
            ((v197)["fname"] = "%PEEK-CHAR");
            return v197;
        })((function (v198){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v198;
                    return tmp === v2? v2: tmp.cdr;
                })();
                var y = f43((function(){
                    var tmp = v198;
                    return tmp === v2? v2: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v3: v2) !== v2 ? (function(){
                var string = (function(){
                    var tmp = v198;
                    return tmp === v2? v2: tmp.car;
                })();
                var index = (function(){
                    var tmp = v198;
                    return tmp === v2? v2: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })() : v2);
        }));
    })();
    return l44;
})(); 
var l45 = f3("%READ-CHAR");
var f77;
(function(){
    (function(){
        return f77 = (function(v199){
            ((v199)["fname"] = "%READ-CHAR");
            return v199;
        })((function (v200){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v200;
                    return tmp === v2? v2: tmp.cdr;
                })();
                var y = f43((function(){
                    var tmp = v200;
                    return tmp === v2? v2: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v3: v2) !== v2 ? (function(v201){
                (function(){
                    var x = v200;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.cdr = f12((function(){
                        var tmp = v200;
                        return tmp === v2? v2: tmp.cdr;
                    })()));
                })();
                return v201;
            })((function(){
                var string = (function(){
                    var tmp = v200;
                    return tmp === v2? v2: tmp.car;
                })();
                var index = (function(){
                    var tmp = v200;
                    return tmp === v2? v2: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })()) : v2);
        }));
    })();
    return l45;
})(); 
var l46 = f3("WHITESPACEP");
var f78;
(function(){
    (function(){
        return f78 = (function(v202){
            ((v202)["fname"] = "WHITESPACEP");
            return v202;
        })((function (v203){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v204){
                return (v204 !== v2 ? v204 : (function(v205){
                    return (v205 !== v2 ? v205 : f50(v203, 9));
                })(f50(v203, 10)));
            })(f50(v203, 32));
        }));
    })();
    return l46;
})(); 
var l47 = f3("SKIP-WHITESPACES");
var f79;
(function(){
    (function(){
        return f79 = (function(v206){
            ((v206)["fname"] = "SKIP-WHITESPACES");
            return v206;
        })((function (v207){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v208){
                v208 = f76(v207);
                return (function(){
                    while((v208 !== v2 ? f78(v208) : v2) !== v2){
                        f77(v207);
                        v208 = f76(v207);
                }})();
            })(v2);
        }));
    })();
    return l47;
})(); 
var l48 = f3("TERMINALP");
var f80;
(function(){
    (function(){
        return f80 = (function(v209){
            ((v209)["fname"] = "TERMINALP");
            return v209;
        })((function (v210){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v211){
                return (v211 !== v2 ? v211 : (function(v212){
                    return (v212 !== v2 ? v212 : (function(v213){
                        return (v213 !== v2 ? v213 : f50(40, v210));
                    })(f50(41, v210)));
                })(f78(v210)));
            })(f1(v210));
        }));
    })();
    return l48;
})(); 
var l49 = f3("READ-UNTIL");
var f81;
(function(){
    (function(){
        return f81 = (function(v214){
            ((v214)["fname"] = "READ-UNTIL");
            return v214;
        })((function (v215,v216){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v217,v218){
                v218 = f76(v215);
                (function(){
                    while((v218 !== v2 ? f17((v216)(v218)) : v2) !== v2){
                        v217 = f67(v217, (function(){
                            var x = v218;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        f77(v215);
                        v218 = f76(v215);
                }})();
                return v217;
            })("",v2);
        }));
    })();
    return l49;
})(); 
var l50 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f82;
(function(){
    (function(){
        return f82 = (function(v219){
            ((v219)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v219;
        })((function (v220){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v221){
                f79(v220);
                v221 = f76(v220);
                return (function(){
                    while((v221 !== v2 ? f50(v221, 59) : v2) !== v2){
                        f81(v220, (function (v222){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f50(v222, 10);
                        }));
                        f79(v220);
                        v221 = f76(v220);
                }})();
            })(v2);
        }));
    })();
    return l50;
})(); 
var l51 = f3("%READ-LIST");
var f83;
(function(){
    (function(){
        return f83 = (function(v223){
            ((v223)["fname"] = "%READ-LIST");
            return v223;
        })((function (v224){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f82(v224);
            return (function(v225){
                return (f1(v225) !== v2 ? (function(){
                    return (function (){ throw "Unspected EOF"; })();
                })() : (f50(v225, 41) !== v2 ? (function(){
                    f77(v224);
                    return v2;
                })() : (f50(v225, 46) !== v2 ? (function(){
                    f77(v224);
                    return (function(v226){
                        f82(v224);
                        (f50(f77(v224), 41) !== v2 ? v2 : (function(){
                            return (function (){ throw "')' was expected."; })();
                        })());
                        return v226;
                    })(f84(v224));
                })() : (function(){
                    return ({car: f84(v224), cdr: f83(v224)});
                })())));
            })(f76(v224));
        }));
    })();
    return l51;
})(); 
var l52 = f3("READ-STRING");
var f85;
(function(){
    (function(){
        return f85 = (function(v227){
            ((v227)["fname"] = "READ-STRING");
            return v227;
        })((function (v228){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v229,v230){
                v230 = f77(v228);
                (function(){
                    while(f17(f16(v230, 34)) !== v2){
                        (f1(v230) !== v2 ? (function(){
                            return (function (){ throw "Unexpected EOF"; })();
                        })() : v2);
                        (f16(v230, 92) !== v2 ? (function(){
                            return v230 = f77(v228);
                        })() : v2);
                        v229 = f67(v229, (function(){
                            var x = v230;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        v230 = f77(v228);
                }})();
                return v229;
            })("",v2);
        }));
    })();
    return l52;
})(); 
var l54 = f3("READ-SHARP");
var l53 = f3("FUNCTION");
var f86;
(function(){
    (function(){
        return f86 = (function(v231){
            ((v231)["fname"] = "READ-SHARP");
            return v231;
        })((function (v232){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f77(v232);
            return (function(v233){
                return (f16(v233, 39) !== v2 ? (function(){
                    return f33(l53, f84(v232));
                })() : (f16(v233, 92) !== v2 ? (function(){
                    return (function(v234){
                        return (f66(v234, "space") !== v2 ? (function(){
                            return f49(32);
                        })() : (f66(v234, "tab") !== v2 ? (function(){
                            return f49(9);
                        })() : (f66(v234, "newline") !== v2 ? (function(){
                            return f49(10);
                        })() : (function(){
                            return f49((function(){
                                var string = v234;
                                var index = 0;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })());
                        })())));
                    })(f67((function(){
                        var x = f77(v232);
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return String.fromCharCode(x);
                    })(), f81(v232, f80)));
                })() : (f16(v233, 43) !== v2 ? (function(){
                    return (function(v235){
                        return (f66(v235, "common-lisp") !== v2 ? (function(){
                            f84(v232);
                            return f84(v232);
                        })() : (f66(v235, "ecmalisp") !== v2 ? (function(){
                            return f84(v232);
                        })() : (function(){
                            return (function (){ throw "Unknown reader form."; })();
                        })()));
                    })(f81(v232, f80));
                })() : (function(){
                    return (function (){ throw "ECASE expression failed."; })();
                })())));
            })(f77(v232));
        }));
    })();
    return l54;
})(); 
var l55 = f3("*EOF*");
var v236;
(function(){
    (function(){
        return v236 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l55;
})(); 
var l60 = f3("LS-READ");
var l59 = f3("UNQUOTE");
var l58 = f3("UNQUOTE-SPLICING");
var l57 = f3("BACKQUOTE");
var l56 = f3("QUOTE");
var f84;
(function(){
    (function(){
        return f84 = (function(v237){
            ((v237)["fname"] = "LS-READ");
            return v237;
        })((function (v238){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f82(v238);
            return (function(v239){
                return (f1(v239) !== v2 ? (function(){
                    return v236;
                })() : (f50(v239, 40) !== v2 ? (function(){
                    f77(v238);
                    return f83(v238);
                })() : (f50(v239, 39) !== v2 ? (function(){
                    f77(v238);
                    return f33(l56, f84(v238));
                })() : (f50(v239, 96) !== v2 ? (function(){
                    f77(v238);
                    return f33(l57, f84(v238));
                })() : (f50(v239, 34) !== v2 ? (function(){
                    f77(v238);
                    return f85(v238);
                })() : (f50(v239, 44) !== v2 ? (function(){
                    f77(v238);
                    return (f16(f76(v238), 64) !== v2 ? (function(){
                        f77(v238);
                        return f33(l58, f84(v238));
                    })() : f33(l59, f84(v238)));
                })() : (f50(v239, 35) !== v2 ? (function(){
                    return f86(v238);
                })() : (function(){
                    return (function(v240){
                        return (f64(f61, v240) !== v2 ? f63(v240) : f3((function(){
                            var x = v240;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })()));
                    })(f81(v238, f80));
                })())))))));
            })(f76(v238));
        }));
    })();
    return l60;
})(); 
var l61 = f3("LS-READ-FROM-STRING");
var f87;
(function(){
    (function(){
        return f87 = (function(v241){
            ((v241)["fname"] = "LS-READ-FROM-STRING");
            return v241;
        })((function (v242){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f84(f75(v242));
        }));
    })();
    return l61;
})(); 
var l63 = f3("*COMPILATION-UNIT-CHECKS*");
var l62 = f3("NIL");
var v243;
(function(){
    (function(){
        return v243 = l62;
    })();
    return l63;
})(); 
var l65 = f3("*ENV*");
var l64 = f3("NIL");
var v244;
(function(){
    (function(){
        return v244 = l64;
    })();
    return l65;
})(); 
var l67 = f3("*FENV*");
var l66 = f3("NIL");
var v245;
(function(){
    (function(){
        return v245 = l66;
    })();
    return l67;
})(); 
var l68 = f3("MAKE-BINDING");
var f88;
(function(){
    (function(){
        return f88 = (function(v246){
            ((v246)["fname"] = "MAKE-BINDING");
            return v246;
        })((function (v247,v248,v249,v250){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return f33(v247, v248, v249, v250);
        }));
    })();
    return l68;
})(); 
var l69 = f3("BINDING-NAME");
var f89;
(function(){
    (function(){
        return f89 = (function(v251){
            ((v251)["fname"] = "BINDING-NAME");
            return v251;
        })((function (v252){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f29(v252);
        }));
    })();
    return l69;
})(); 
var l70 = f3("BINDING-TYPE");
var f90;
(function(){
    (function(){
        return f90 = (function(v253){
            ((v253)["fname"] = "BINDING-TYPE");
            return v253;
        })((function (v254){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f30(v254);
        }));
    })();
    return l70;
})(); 
var l71 = f3("BINDING-TRANSLATION");
var f91;
(function(){
    (function(){
        return f91 = (function(v255){
            ((v255)["fname"] = "BINDING-TRANSLATION");
            return v255;
        })((function (v256){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f31(v256);
        }));
    })();
    return l71;
})(); 
var l72 = f3("BINDING-DECLARED");
var f92;
(function(){
    (function(){
        return f92 = (function(v257){
            ((v257)["fname"] = "BINDING-DECLARED");
            return v257;
        })((function (v258){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (v258 !== v2 ? f32(v258) : v2);
        }));
    })();
    return l72;
})(); 
var l73 = f3("MARK-BINDING-AS-DECLARED");
var f93;
(function(){
    (function(){
        return f93 = (function(v259){
            ((v259)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v259;
        })((function (v260){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = f27(v260);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v3);
            })();
        }));
    })();
    return l73;
})(); 
var l74 = f3("*VARIABLE-COUNTER*");
var v261;
(function(){
    (function(){
        return v261 = 0;
    })();
    return l74;
})(); 
var l75 = f3("GVARNAME");
var f94;
(function(){
    (function(){
        return f94 = (function(v262){
            ((v262)["fname"] = "GVARNAME");
            return v262;
        })((function (v263){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f67("v", f6(v261 = (function(){
                var x = v261;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()));
        }));
    })();
    return l75;
})(); 
var l77 = f3("LOOKUP-VARIABLE");
var l76 = f3("VARIABLE");
var f95;
(function(){
    (function(){
        return f95 = (function(v264){
            ((v264)["fname"] = "LOOKUP-VARIABLE");
            return v264;
        })((function (v265,v266){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v267){
                return (v267 !== v2 ? v267 : (function(v268){
                    return (v268 !== v2 ? v268 : (function(v269,v270){
                        v244 = ({car: v270, cdr: v244});
                        v243 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f92(f65(v265, v244)) !== v2 ? v2 : (function(){
                                return (function (){ throw f67("Undefined variable `", v269, "'"); })();
                            })());
                        }), cdr: v243});
                        return v270;
                    })((v265).name,f88(v265, l76, f94(v265), v2)));
                })(f65(v265, v244)));
            })(f65(v265, v266));
        }));
    })();
    return l77;
})(); 
var l78 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f96;
(function(){
    (function(){
        return f96 = (function(v271){
            ((v271)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v271;
        })((function (v272,v273){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f91(f95(v272, v273));
        }));
    })();
    return l78;
})(); 
var l80 = f3("EXTEND-LOCAL-ENV");
var l79 = f3("VARIABLE");
var f97;
(function(){
    (function(){
        return f97 = (function(v274){
            ((v274)["fname"] = "EXTEND-LOCAL-ENV");
            return v274;
        })((function (v275,v276){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f39(f45((function (v277){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f88(v277, l79, f94(v277), v3);
            }), v275), v276);
        }));
    })();
    return l80;
})(); 
var l81 = f3("*FUNCTION-COUNTER*");
var v278;
(function(){
    (function(){
        return v278 = 0;
    })();
    return l81;
})(); 
var l83 = f3("LOOKUP-FUNCTION");
var l82 = f3("FUNCTION");
var f98;
(function(){
    (function(){
        return f98 = (function(v279){
            ((v279)["fname"] = "LOOKUP-FUNCTION");
            return v279;
        })((function (v280,v281){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v282){
                return (v282 !== v2 ? v282 : (function(v283){
                    return (v283 !== v2 ? v283 : (function(v284,v285){
                        v245 = ({car: v285, cdr: v245});
                        v243 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f92(f65(v280, v245)) !== v2 ? v2 : (function(){
                                return (function (){ throw f67("Undefined function `", v284, "'"); })();
                            })());
                        }), cdr: v243});
                        return v285;
                    })((v280).name,f88(v280, l82, f67("f", f6(v278 = (function(){
                        var x = v278;
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })())), v2)));
                })(f65(v280, v245)));
            })(f65(v280, v281));
        }));
    })();
    return l83;
})(); 
var l84 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f99;
(function(){
    (function(){
        return f99 = (function(v286){
            ((v286)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v286;
        })((function (v287,v288){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f91(f98(v287, v288));
        }));
    })();
    return l84;
})(); 
var l85 = f3("*TOPLEVEL-COMPILATIONS*");
var v289;
(function(){
    (function(){
        return v289 = v2;
    })();
    return l85;
})(); 
var l86 = f3("%COMPILE-DEFVAR");
var f100;
(function(){
    (function(){
        return f100 = (function(v290){
            ((v290)["fname"] = "%COMPILE-DEFVAR");
            return v290;
        })((function (v291){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v292){
                f93(v292);
                return v289 = ({car: f67("var ", f91(v292)), cdr: v289});
            })(f95(v291, v244));
        }));
    })();
    return l86;
})(); 
var l87 = f3("%COMPILE-DEFUN");
var f101;
(function(){
    (function(){
        return f101 = (function(v293){
            ((v293)["fname"] = "%COMPILE-DEFUN");
            return v293;
        })((function (v294){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v295){
                f93(v295);
                return v289 = ({car: f67("var ", f91(v295)), cdr: v289});
            })(f98(v294, v245));
        }));
    })();
    return l87;
})(); 
var l89 = f3("%COMPILE-DEFMACRO");
var l88 = f3("MACRO");
var f102;
(function(){
    (function(){
        return f102 = (function(v296){
            ((v296)["fname"] = "%COMPILE-DEFMACRO");
            return v296;
        })((function (v297,v298){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return v245 = ({car: f88(v297, l88, v298, v3), cdr: v245});
        }));
    })();
    return l89;
})(); 
var l90 = f3("*COMPILATIONS*");
var v299;
(function(){
    (function(){
        return v299 = v2;
    })();
    return l90;
})(); 
var l91 = f3("LS-COMPILE-BLOCK");
var f103;
(function(){
    (function(){
        return f103 = (function(v300){
            ((v300)["fname"] = "LS-COMPILE-BLOCK");
            return v300;
        })((function (v301,v302,v303){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f69(f59((function (v304){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v305){
                    return (v305 !== v2 ? v305 : (((typeof(v304) == "string")?v3: v2) !== v2 ? f14(f43(v304)) : v2));
                })(f1(v304));
            }), f45((function (v306){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f104(v306, v302, v303);
            }), v301)), f67(";", v168));
        }));
    })();
    return l91;
})(); 
var l92 = f3("IF");
v299 = ({car: f33(l92, (function (v307,v308,v309,v310,v311){
    if (arguments.length < 5) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    return f67("(", f104(v309, v307, v308), " !== ", f104(v2, v2, v2), " ? ", f104(v310, v307, v308), " : ", f104(v311, v307, v308), ")");
})), cdr: v299}); 
var l94 = f3("*LAMBDA-LIST-KEYWORDS*");
var l93 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v312;
(function(){
    (function(){
        return v312 = l93;
    })();
    return l94;
})(); 
var l95 = f3("LIST-UNTIL-KEYWORD");
var f105;
(function(){
    (function(){
        return f105 = (function(v313){
            ((v313)["fname"] = "LIST-UNTIL-KEYWORD");
            return v313;
        })((function (v314){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(v315){
                return (v315 !== v2 ? v315 : f57((function(){
                    var tmp = v314;
                    return tmp === v2? v2: tmp.car;
                })(), v312));
            })(f1(v314)) !== v2 ? v2 : ({car: (function(){
                var tmp = v314;
                return tmp === v2? v2: tmp.car;
            })(), cdr: f105((function(){
                var tmp = v314;
                return tmp === v2? v2: tmp.cdr;
            })())}));
        }));
    })();
    return l95;
})(); 
var l96 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f106;
(function(){
    (function(){
        return f106 = (function(v316){
            ((v316)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v316;
        })((function (v317){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f105(v317);
        }));
    })();
    return l96;
})(); 
var l98 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l97 = f3("&OPTIONAL");
var f107;
(function(){
    (function(){
        return f107 = (function(v318){
            ((v318)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v318;
        })((function (v319){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f45(f35, f105((function(){
                var tmp = f57(l97, v319);
                return tmp === v2? v2: tmp.cdr;
            })()));
        }));
    })();
    return l98;
})(); 
var l99 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f108;
(function(){
    (function(){
        return f108 = (function(v320){
            ((v320)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v320;
        })((function (v321){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f45(f20, f107(v321));
        }));
    })();
    return l99;
})(); 
var l101 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l100 = f3("&REST");
var f109;
(function(){
    (function(){
        return f109 = (function(v322){
            ((v322)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v322;
        })((function (v323){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v324){
                ((function(){
                    var tmp = v324;
                    return tmp === v2? v2: tmp.cdr;
                })() !== v2 ? (function(){
                    return (function (){ throw "Bad lambda-list"; })();
                })() : v2);
                return (function(){
                    var tmp = v324;
                    return tmp === v2? v2: tmp.car;
                })();
            })(f105((function(){
                var tmp = f57(l100, v323);
                return tmp === v2? v2: tmp.cdr;
            })()));
        }));
    })();
    return l101;
})(); 
var l102 = f3("LAMBDA");
v299 = ({car: f33(l102, (function (v326,v327,v328){
    if (arguments.length < 3) throw 'too few arguments';
    var v325= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v325 = {car: arguments[i], cdr: v325};
    return (function(v329,v330,v331){
        return (function(v332,v333,v334){
            return f67("(function (", f68(f45((function (v335){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f96(v335, v334);
            }), f39(v329, v330)), ","), "){", v168, f70((v329 !== v2 ? f67("if (arguments.length < ", f6(v332), ") throw 'too few arguments';", v168) : ""), (f17(v331) !== v2 ? f67("if (arguments.length > ", f6((function(){
                var x = v332;
                var y = v333;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()), ") throw 'too many arguments';", v168) : ""), (v330 !== v2 ? f67("switch(arguments.length){", v168, (function(v336,v337,v338){
                return (function(){
                    (function(){
                        while(((function(){
                            var x = v338;
                            var y = v333;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            (function(v339){
                                v337 = ({car: f67("case ", f6((function(){
                                    var x = v338;
                                    var y = v332;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), ":", v168, f96((function(){
                                    var tmp = v339;
                                    return tmp === v2? v2: tmp.car;
                                })(), v334), "=", f104(f23(v339), v334, v327), ";", v168), cdr: v337});
                                return v338 = (function(){
                                    var x = v338;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })();
                            })(f54(v338, v336));
                    }})();
                    v337 = ({car: f67("default: break;", v168), cdr: v337});
                    return f68(f41(v337));
                })();
            })(f107(v328),v2,0), "}", v168) : ""), (v331 !== v2 ? (function(v340){
                return f67("var ", v340, "= ", f104(v2, v326, v327), ";", v168, "for (var i = arguments.length-1; i>=", f6((function(){
                    var x = v332;
                    var y = v333;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()), "; i--)", v168, f70(v340, " = ", "{car: arguments[i], cdr: "), v340, "};", v168);
            })(f96(v331, v334)) : ""), f67(f103(f56(v325), v334, v327), "return ", f104((function(){
                var tmp = f55(v325);
                return tmp === v2? v2: tmp.car;
            })(), v334, v327), ";")), v168, "})");
        })(f43(v329),f43(v330),f97(f39(f35(v331), v329, v330), v326));
    })(f106(v328),f108(v328),f109(v328));
})), cdr: v299}); 
var l103 = f3("FSETQ");
v299 = ({car: f33(l103, (function (v341,v342,v343,v344){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f67(f99(v343, v342), " = ", f104(v344, v341, v342));
})), cdr: v299}); 
var l104 = f3("SETQ");
v299 = ({car: f33(l104, (function (v345,v346,v347,v348){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f67(f96(v347, v345), " = ", f104(v348, v345, v346));
})), cdr: v299}); 
var l105 = f3("ESCAPE-STRING");
var f72;
(function(){
    (function(){
        return f72 = (function(v349){
            ((v349)["fname"] = "ESCAPE-STRING");
            return v349;
        })((function (v350){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v351,v352,v353){
                (function(){
                    while(((function(){
                        var x = v352;
                        var y = v353;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?v3: v2) !== v2){
                        (function(v354){
                            ((function(v355){
                                return (v355 !== v2 ? v355 : f50(v354, 92));
                            })(f50(v354, 34)) !== v2 ? (function(){
                                return v351 = f67(v351, "\\");
                            })() : v2);
                            (f50(v354, 10) !== v2 ? (function(){
                                v351 = f67(v351, "\\");
                                return v354 = 110;
                            })() : v2);
                            return v351 = f67(v351, (function(){
                                var x = v354;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })());
                        })((function(){
                            var string = v350;
                            var index = v352;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                        v352 = (function(){
                            var x = v352;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })();
                }})();
                return v351;
            })("",0,f43(v350));
        }));
    })();
    return l105;
})(); 
var l107 = f3("LITERAL->JS");
var l106 = f3("INTERN");
var f110;
(function(){
    (function(){
        return f110 = (function(v356){
            ((v356)["fname"] = "LITERAL->JS");
            return v356;
        })((function (v357){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f51(v357) !== v2 ? (function(){
                return f6(v357);
            })() : (((typeof(v357) == "string")?v3: v2) !== v2 ? (function(){
                return f67("\"", f72(v357), "\"");
            })() : (((function(){
                var tmp = v357;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f104(f39(f33(l106), f33(f72((v357).name))), v244, v245);
            })() : (((function(){
                var tmp = v357;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f67("{car: ", f110((function(){
                    var tmp = v357;
                    return tmp === v2? v2: tmp.car;
                })()), ", cdr: ", f110((function(){
                    var tmp = v357;
                    return tmp === v2? v2: tmp.cdr;
                })()), "}");
            })() : v2))));
        }));
    })();
    return l107;
})(); 
var l108 = f3("*LITERAL-COUNTER*");
var v358;
(function(){
    (function(){
        return v358 = 0;
    })();
    return l108;
})(); 
var l109 = f3("LITERAL");
var f111;
(function(){
    (function(){
        return f111 = (function(v359){
            ((v359)["fname"] = "LITERAL");
            return v359;
        })((function (v360){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v361){
                v289 = ({car: f67("var ", v361, " = ", f110(v360)), cdr: v289});
                return v361;
            })(f67("l", f6(v358 = (function(){
                var x = v358;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })())));
        }));
    })();
    return l109;
})(); 
var l110 = f3("QUOTE");
v299 = ({car: f33(l110, (function (v362,v363,v364){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f111(v364);
})), cdr: v299}); 
var l111 = f3("WHILE");
v299 = ({car: f33(l111, (function (v366,v367,v368){
    if (arguments.length < 3) throw 'too few arguments';
    var v365= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v365 = {car: arguments[i], cdr: v365};
    return f67("(function(){", v168, f70("while(", f104(v368, v366, v367), " !== ", f104(v2, v2, v2), "){", v168, f70(f103(v365, v366, v367))), "}})()");
})), cdr: v299}); 
var l113 = f3("LAMBDA");
var l112 = f3("FUNCTION");
v299 = ({car: f33(l112, (function (v369,v370,v371){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return ((f36(v371) !== v2 ? (((function(){
        var tmp = v371;
        return tmp === v2? v2: tmp.car;
    })() === l113)?v3: v2) : v2) !== v2 ? (function(){
        return f104(v371, v369, v370);
    })() : (((function(){
        var tmp = v371;
        return (typeof tmp == 'object' && 'name' in tmp);
    })()?v3: v2) !== v2 ? (function(){
        return f99(v371, v370);
    })() : v2));
})), cdr: v299}); 
var l115 = f3("PROGN");
var l114 = f3("EVAL-WHEN-COMPILE");
v299 = ({car: f33(l114, (function (v373,v374){
    if (arguments.length < 2) throw 'too few arguments';
    var v372= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v372 = {car: arguments[i], cdr: v372};
    f112(({car: l115, cdr: v372}));
    return "";
})), cdr: v299}); 
var l116 = f3("PROGN");
v299 = ({car: f33(l116, (function (v376,v377){
    if (arguments.length < 2) throw 'too few arguments';
    var v375= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v375 = {car: arguments[i], cdr: v375};
    return f67("(function(){", v168, f70(f103(f56(v375), v376, v377), "return ", f104((function(){
        var tmp = f55(v375);
        return tmp === v2? v2: tmp.car;
    })(), v376, v377), ";", v168), "})()");
})), cdr: v299}); 
var l117 = f3("LET");
v299 = ({car: f33(l117, (function (v379,v380,v381){
    if (arguments.length < 3) throw 'too few arguments';
    var v378= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v378 = {car: arguments[i], cdr: v378};
    return (function(v382){
        return (function(v383,v384){
            return (function(v385){
                return f67("(function(", f68(f45((function (v386){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f96(v386, v385);
                }), v383), ","), "){", v168, f70(f103(f56(v378), v385, v380), "return ", f104((function(){
                    var tmp = f55(v378);
                    return tmp === v2? v2: tmp.car;
                })(), v385, v380), ";", v168), "})(", f68(f45((function (v387){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f104(v387, v379, v380);
                }), v384), ","), ")");
            })(f97(v383, v379));
        })(f45(f29, v382),f45(f30, v382));
    })(f45(f35, v381));
})), cdr: v299}); 
var l126 = f3("BACKQUOTE-EXPAND-1");
var l125 = f3("LIST");
var l124 = f3("UNQUOTE-SPLICING");
var l123 = f3("LIST");
var l122 = f3("UNQUOTE");
var l121 = f3("APPEND");
var l120 = f3("BACKQUOTE");
var l119 = f3("UNQUOTE");
var l118 = f3("QUOTE");
var f113;
(function(){
    (function(){
        return f113 = (function(v388){
            ((v388)["fname"] = "BACKQUOTE-EXPAND-1");
            return v388;
        })((function (v389){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v389;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f33(l118, v389);
            })() : (f34(v389) !== v2 ? (function(){
                return v389;
            })() : ((((function(){
                var tmp = v389;
                return tmp === v2? v2: tmp.car;
            })() === l119)?v3: v2) !== v2 ? (function(){
                return (function(){
                    var tmp = v389;
                    return tmp === v2? v2: tmp.car;
                })();
            })() : ((((function(){
                var tmp = v389;
                return tmp === v2? v2: tmp.car;
            })() === l120)?v3: v2) !== v2 ? (function(){
                return f113(f113(f23(v389)));
            })() : (function(){
                return ({car: l121, cdr: f45((function (v390){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return ((f36(v390) !== v2 ? (((function(){
                        var tmp = v390;
                        return tmp === v2? v2: tmp.car;
                    })() === l122)?v3: v2) : v2) !== v2 ? (function(){
                        return f33(l123, f23(v390));
                    })() : ((f36(v390) !== v2 ? (((function(){
                        var tmp = v390;
                        return tmp === v2? v2: tmp.car;
                    })() === l124)?v3: v2) : v2) !== v2 ? (function(){
                        return f23(v390);
                    })() : (function(){
                        return f33(l125, f113(v390));
                    })()));
                }), v389)});
            })()))));
        }));
    })();
    return l126;
})(); 
var l128 = f3("BACKQUOTE-EXPAND");
var l127 = f3("BACKQUOTE");
var f114;
(function(){
    (function(){
        return f114 = (function(v391){
            ((v391)["fname"] = "BACKQUOTE-EXPAND");
            return v391;
        })((function (v392){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((f36(v392) !== v2 ? (((function(){
                var tmp = v392;
                return tmp === v2? v2: tmp.car;
            })() === l127)?v3: v2) : v2) !== v2 ? f113(f23(v392)) : v392);
        }));
    })();
    return l128;
})(); 
var l129 = f3("BACKQUOTE");
v299 = ({car: f33(l129, (function (v393,v394,v395){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f104(f113(v395), v393, v394);
})), cdr: v299}); 
var l130 = f3("COMPILE-BOOL");
var f115;
(function(){
    (function(){
        return f115 = (function(v396){
            ((v396)["fname"] = "COMPILE-BOOL");
            return v396;
        })((function (v397){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f67("(", v397, "?", f104(v3, v2, v2), ": ", f104(v2, v2, v2), ")");
        }));
    })();
    return l130;
})(); 
var l131 = f3("NUM-OP-NUM");
var f116;
(function(){
    (function(){
        return f116 = (function(v398){
            ((v398)["fname"] = "NUM-OP-NUM");
            return v398;
        })((function (v399,v400,v401){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f67("(function(){", v168, f70(f67("var ", "x", " = ", v399, ";", v168), f67("var ", "y", " = ", v401, ";", v168), f67("if (typeof ", "x", " != '", "number", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v168)), f67("if (typeof ", "y", " != '", "number", "')", v168, f70("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v168)), f67("return ", (function(){
                return f67("x", v400, "y");
            })(), ";", v168)), "})()");
        }));
    })();
    return l131;
})(); 
var l132 = f3("+");
v299 = ({car: f33(l132, (function (v402,v403,v404,v405){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v406,v407){
        return f116(v406, "+", v407);
    })(f104(v404, v402, v403),f104(v405, v402, v403));
})), cdr: v299}); 
var l133 = f3("-");
v299 = ({car: f33(l133, (function (v408,v409,v410,v411){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v412,v413){
        return f116(v412, "-", v413);
    })(f104(v410, v408, v409),f104(v411, v408, v409));
})), cdr: v299}); 
var l134 = f3("*");
v299 = ({car: f33(l134, (function (v414,v415,v416,v417){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v418,v419){
        return f116(v418, "*", v419);
    })(f104(v416, v414, v415),f104(v417, v414, v415));
})), cdr: v299}); 
var l135 = f3("/");
v299 = ({car: f33(l135, (function (v420,v421,v422,v423){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v424,v425){
        return f116(v424, "/", v425);
    })(f104(v422, v420, v421),f104(v423, v420, v421));
})), cdr: v299}); 
var l136 = f3("MOD");
v299 = ({car: f33(l136, (function (v426,v427,v428,v429){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v430,v431){
        return f116(v430, "%", v431);
    })(f104(v428, v426, v427),f104(v429, v426, v427));
})), cdr: v299}); 
var l137 = f3("<");
v299 = ({car: f33(l137, (function (v432,v433,v434,v435){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v436,v437){
        return f115(f116(v436, "<", v437));
    })(f104(v434, v432, v433),f104(v435, v432, v433));
})), cdr: v299}); 
var l138 = f3(">");
v299 = ({car: f33(l138, (function (v438,v439,v440,v441){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v442,v443){
        return f115(f116(v442, ">", v443));
    })(f104(v440, v438, v439),f104(v441, v438, v439));
})), cdr: v299}); 
var l139 = f3("=");
v299 = ({car: f33(l139, (function (v444,v445,v446,v447){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v448,v449){
        return f115(f116(v448, "==", v449));
    })(f104(v446, v444, v445),f104(v447, v444, v445));
})), cdr: v299}); 
var l140 = f3("<=");
v299 = ({car: f33(l140, (function (v450,v451,v452,v453){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v454,v455){
        return f115(f116(v454, "<=", v455));
    })(f104(v452, v450, v451),f104(v453, v450, v451));
})), cdr: v299}); 
var l141 = f3(">=");
v299 = ({car: f33(l141, (function (v456,v457,v458,v459){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v460,v461){
        return f115(f116(v460, ">=", v461));
    })(f104(v458, v456, v457),f104(v459, v456, v457));
})), cdr: v299}); 
var l142 = f3("NUMBERP");
v299 = ({car: f33(l142, (function (v462,v463,v464){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v465){
        return f115(f67("(typeof (", v465, ") == \"number\")"));
    })(f104(v464, v462, v463));
})), cdr: v299}); 
var l143 = f3("FLOOR");
v299 = ({car: f33(l143, (function (v466,v467,v468){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v469){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v469, ";", v168), f67("if (typeof ", "x", " != '", "number", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v168)), f67("return ", (function(){
            return "Math.floor(x)";
        })(), ";", v168)), "})()");
    })(f104(v468, v466, v467));
})), cdr: v299}); 
var l144 = f3("CONS");
v299 = ({car: f33(l144, (function (v470,v471,v472,v473){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v474,v475){
        return f67("({car: ", v474, ", cdr: ", v475, "})");
    })(f104(v472, v470, v471),f104(v473, v470, v471));
})), cdr: v299}); 
var l145 = f3("CONSP");
v299 = ({car: f33(l145, (function (v476,v477,v478){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v479){
        return f115(f67("(function(){", v168, f70("var tmp = ", v479, ";", v168, "return (typeof tmp == 'object' && 'car' in tmp);", v168), "})()"));
    })(f104(v478, v476, v477));
})), cdr: v299}); 
var l146 = f3("CAR");
v299 = ({car: f33(l146, (function (v480,v481,v482){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v483){
        return f67("(function(){", v168, f70("var tmp = ", v483, ";", v168, "return tmp === ", f104(v2, v2, v2), "? ", f104(v2, v2, v2), ": tmp.car;", v168), "})()");
    })(f104(v482, v480, v481));
})), cdr: v299}); 
var l147 = f3("CDR");
v299 = ({car: f33(l147, (function (v484,v485,v486){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v487){
        return f67("(function(){", v168, f70("var tmp = ", v487, ";", v168, "return tmp === ", f104(v2, v2, v2), "? ", f104(v2, v2, v2), ": tmp.cdr;", v168), "})()");
    })(f104(v486, v484, v485));
})), cdr: v299}); 
var l148 = f3("SETCAR");
v299 = ({car: f33(l148, (function (v488,v489,v490,v491){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v492,v493){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v492, ";", v168), f67("if (typeof ", "x", " != '", "object", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v168)), f67("return ", (function(){
            return f67("(x.car = ", v493, ")");
        })(), ";", v168)), "})()");
    })(f104(v490, v488, v489),f104(v491, v488, v489));
})), cdr: v299}); 
var l149 = f3("SETCDR");
v299 = ({car: f33(l149, (function (v494,v495,v496,v497){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v498,v499){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v498, ";", v168), f67("if (typeof ", "x", " != '", "object", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v168)), f67("return ", (function(){
            return f67("(x.cdr = ", v499, ")");
        })(), ";", v168)), "})()");
    })(f104(v496, v494, v495),f104(v497, v494, v495));
})), cdr: v299}); 
var l150 = f3("SYMBOLP");
v299 = ({car: f33(l150, (function (v500,v501,v502){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v503){
        return f115(f67("(function(){", v168, f70("var tmp = ", v503, ";", v168, "return (typeof tmp == 'object' && 'name' in tmp);", v168), "})()"));
    })(f104(v502, v500, v501));
})), cdr: v299}); 
var l151 = f3("MAKE-SYMBOL");
v299 = ({car: f33(l151, (function (v504,v505,v506){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v507){
        return f67("(function(){", v168, f70(f67("var ", "name", " = ", v507, ";", v168), f67("if (typeof ", "name", " != '", "string", "')", v168, f70("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v168)), f67("return ", (function(){
            return "({name: name})";
        })(), ";", v168)), "})()");
    })(f104(v506, v504, v505));
})), cdr: v299}); 
var l152 = f3("SYMBOL-NAME");
v299 = ({car: f33(l152, (function (v508,v509,v510){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v511){
        return f67("(", v511, ").name");
    })(f104(v510, v508, v509));
})), cdr: v299}); 
var l153 = f3("EQ");
v299 = ({car: f33(l153, (function (v512,v513,v514,v515){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v516,v517){
        return f115(f67("(", v516, " === ", v517, ")"));
    })(f104(v514, v512, v513),f104(v515, v512, v513));
})), cdr: v299}); 
var l154 = f3("EQUAL");
v299 = ({car: f33(l154, (function (v518,v519,v520,v521){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v522,v523){
        return f115(f67("(", v522, " == ", v523, ")"));
    })(f104(v520, v518, v519),f104(v521, v518, v519));
})), cdr: v299}); 
var l155 = f3("STRING");
v299 = ({car: f33(l155, (function (v524,v525,v526){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v527){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v527, ";", v168), f67("if (typeof ", "x", " != '", "number", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v168)), f67("return ", (function(){
            return "String.fromCharCode(x)";
        })(), ";", v168)), "})()");
    })(f104(v526, v524, v525));
})), cdr: v299}); 
var l156 = f3("STRINGP");
v299 = ({car: f33(l156, (function (v528,v529,v530){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v531){
        return f115(f67("(typeof(", v531, ") == \"string\")"));
    })(f104(v530, v528, v529));
})), cdr: v299}); 
var l157 = f3("STRING-UPCASE");
v299 = ({car: f33(l157, (function (v532,v533,v534){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v535){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v535, ";", v168), f67("if (typeof ", "x", " != '", "string", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v168)), f67("return ", (function(){
            return "x.toUpperCase()";
        })(), ";", v168)), "})()");
    })(f104(v534, v532, v533));
})), cdr: v299}); 
var l158 = f3("STRING-LENGTH");
v299 = ({car: f33(l158, (function (v536,v537,v538){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v539){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v539, ";", v168), f67("if (typeof ", "x", " != '", "string", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v168)), f67("return ", (function(){
            return "x.length";
        })(), ";", v168)), "})()");
    })(f104(v538, v536, v537));
})), cdr: v299}); 
var l159 = f3("SLICE");
v299 = ({car: f33(l159, (function (v540,v541,v542,v543,v544){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    switch(arguments.length){
    case 4:
    v544=v2;
    default: break;
    }
    return f67("(function(){", v168, f70("var str = ", f104(v542, v540, v541), ";", v168, "var a = ", f104(v543, v540, v541), ";", v168, "var b;", v168, (v544 !== v2 ? f67("b = ", f104(v544, v540, v541), ";", v168) : ""), "return str.slice(a,b);", v168), "})()");
})), cdr: v299}); 
var l160 = f3("CHAR");
v299 = ({car: f33(l160, (function (v545,v546,v547,v548){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v549,v550){
        return f67("(function(){", v168, f70(f67("var ", "string", " = ", v549, ";", v168), f67("var ", "index", " = ", v550, ";", v168), f67("if (typeof ", "string", " != '", "string", "')", v168, f70("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v168)), f67("if (typeof ", "index", " != '", "number", "')", v168, f70("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v168)), f67("return ", (function(){
            return "string.charCodeAt(index)";
        })(), ";", v168)), "})()");
    })(f104(v547, v545, v546),f104(v548, v545, v546));
})), cdr: v299}); 
var l161 = f3("CONCAT-TWO");
v299 = ({car: f33(l161, (function (v551,v552,v553,v554){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v555,v556){
        return f67("(function(){", v168, f70(f67("var ", "string1", " = ", v555, ";", v168), f67("var ", "string2", " = ", v556, ";", v168), f67("if (typeof ", "string1", " != '", "string", "')", v168, f70("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v168)), f67("if (typeof ", "string2", " != '", "string", "')", v168, f70("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v168)), f67("return ", (function(){
            return "string1.concat(string2)";
        })(), ";", v168)), "})()");
    })(f104(v553, v551, v552),f104(v554, v551, v552));
})), cdr: v299}); 
var l162 = f3("FUNCALL");
v299 = ({car: f33(l162, (function (v558,v559,v560){
    if (arguments.length < 3) throw 'too few arguments';
    var v557= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v557 = {car: arguments[i], cdr: v557};
    return f67("(", f104(v560, v558, v559), ")(", f68(f45((function (v561){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return f104(v561, v558, v559);
    }), v557), ", "), ")");
})), cdr: v299}); 
var l163 = f3("APPLY");
v299 = ({car: f33(l163, (function (v563,v564,v565){
    if (arguments.length < 3) throw 'too few arguments';
    var v562= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v562 = {car: arguments[i], cdr: v562};
    return (f1(v562) !== v2 ? f67("(", f104(v565, v563, v564), ")()") : (function(v566,v567){
        return f67("(function(){", v168, f70("var f = ", f104(v565, v563, v564), ";", v168, "var args = [", f68(f45((function (v568){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f104(v568, v563, v564);
        }), v566), ", "), "];", v168, "var tail = (", f104(v567, v563, v564), ");", v168, f70("while (tail != ", f104(v2, v563, v564), "){", v168, "    args.push(tail.car);", v168, "    tail = tail.cdr;", v168, "}", v168, "return f.apply(this, args);", v168), "})()"));
    })(f56(v562),(function(){
        var tmp = f55(v562);
        return tmp === v2? v2: tmp.car;
    })()));
})), cdr: v299}); 
var l164 = f3("JS-EVAL");
v299 = ({car: f33(l164, (function (v569,v570,v571){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v572){
        return f67("(function(){", v168, f70(f67("var ", "string", " = ", v572, ";", v168), f67("if (typeof ", "string", " != '", "string", "')", v168, f70("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v168)), f67("return ", (function(){
            return "eval.apply(window, [string])";
        })(), ";", v168)), "})()");
    })(f104(v571, v569, v570));
})), cdr: v299}); 
var l165 = f3("ERROR");
v299 = ({car: f33(l165, (function (v573,v574,v575){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v576){
        return f67("(function (){ throw ", v576, "; })()");
    })(f104(v575, v573, v574));
})), cdr: v299}); 
var l166 = f3("NEW");
v299 = ({car: f33(l166, (function (v577,v578){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        return "{}";
    })();
})), cdr: v299}); 
var l167 = f3("GET");
v299 = ({car: f33(l167, (function (v579,v580,v581,v582){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v583,v584){
        return f67("(function(){", v168, f70("var tmp = ", "(", v583, ")[", v584, "];", v168, "return tmp == undefined? ", f104(v2, v2, v2), ": tmp ;", v168), "})()");
    })(f104(v581, v579, v580),f104(v582, v579, v580));
})), cdr: v299}); 
var l168 = f3("SET");
v299 = ({car: f33(l168, (function (v585,v586,v587,v588,v589){
    if (arguments.length < 5) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    return (function(v590,v591,v592){
        return f67("((", v590, ")[", v591, "] = ", v592, ")");
    })(f104(v587, v585, v586),f104(v588, v585, v586),f104(v589, v585, v586));
})), cdr: v299}); 
var l169 = f3("IN");
v299 = ({car: f33(l169, (function (v593,v594,v595,v596){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v597,v598){
        return f115(f67("((", v597, ") in (", v598, "))"));
    })(f104(v595, v593, v594),f104(v596, v593, v594));
})), cdr: v299}); 
var l170 = f3("FUNCTIONP");
v299 = ({car: f33(l170, (function (v599,v600,v601){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v602){
        return f115(f67("(typeof ", v602, " == 'function')"));
    })(f104(v601, v599, v600));
})), cdr: v299}); 
var l171 = f3("WRITE-STRING");
v299 = ({car: f33(l171, (function (v603,v604,v605){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v606){
        return f67("(function(){", v168, f70(f67("var ", "x", " = ", v606, ";", v168), f67("if (typeof ", "x", " != '", "string", "')", v168, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v168)), f67("return ", (function(){
            return "lisp.write(x)";
        })(), ";", v168)), "})()");
    })(f104(v605, v603, v604));
})), cdr: v299}); 
var l173 = f3("MACROP");
var l172 = f3("MACRO");
var f117;
(function(){
    (function(){
        return f117 = (function(v607){
            ((v607)["fname"] = "MACROP");
            return v607;
        })((function (v608){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v608;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? ((f90(f98(v608, v245)) === l172)?v3: v2) : v2);
        }));
    })();
    return l173;
})(); 
var l175 = f3("LS-MACROEXPAND-1");
var l174 = f3("MACRO");
var f118;
(function(){
    (function(){
        return f118 = (function(v609){
            ((v609)["fname"] = "LS-MACROEXPAND-1");
            return v609;
        })((function (v610,v611,v612){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (f117((function(){
                var tmp = v610;
                return tmp === v2? v2: tmp.car;
            })()) !== v2 ? (function(v613){
                return (((f90(v613) === l174)?v3: v2) !== v2 ? (function(){
                    var f = f112(f91(v613));
                    var args = [];
                    var tail = ((function(){
                        var tmp = v610;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                        while (tail != v2){
                            args.push(tail.car);
                            tail = tail.cdr;
                        }
                        return f.apply(this, args);
                    })() : v610);
            })(f98((function(){
                var tmp = v610;
                return tmp === v2? v2: tmp.car;
            })(), v244)) : v610);
        }));
    })();
    return l175;
})(); 
var l177 = f3("COMPILE-FUNCALL");
var l176 = f3("LAMBDA");
var f119;
(function(){
    (function(){
        return f119 = (function(v614){
            ((v614)["fname"] = "COMPILE-FUNCALL");
            return v614;
        })((function (v615,v616,v617,v618){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (((function(){
                var tmp = v615;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f67(f99(v615, v618), "(", f68(f45((function (v619){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f104(v619, v617, v618);
                }), v616), ", "), ")");
            })() : ((f36(v615) !== v2 ? (((function(){
                var tmp = v615;
                return tmp === v2? v2: tmp.car;
            })() === l176)?v3: v2) : v2) !== v2 ? (function(){
                return f67("(", f104(v615, v617, v618), ")(", f68(f45((function (v620){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f104(v620, v617, v618);
                }), v616), ", "), ")");
            })() : (function(){
                return (function (){ throw f67("Invalid function designator ", (v615).name); })();
            })()));
        }));
    })();
    return l177;
})(); 
var l178 = f3("LS-COMPILE");
var f104;
(function(){
    (function(){
        return f104 = (function(v621){
            ((v621)["fname"] = "LS-COMPILE");
            return v621;
        })((function (v622,v623,v624){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (((function(){
                var tmp = v622;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f96(v622, v623);
            })() : (f51(v622) !== v2 ? (function(){
                return f6(v622);
            })() : (((typeof(v622) == "string")?v3: v2) !== v2 ? (function(){
                return f67("\"", f72(v622), "\"");
            })() : (f36(v622) !== v2 ? (function(){
                return (f65((function(){
                    var tmp = v622;
                    return tmp === v2? v2: tmp.car;
                })(), v299) !== v2 ? (function(v625){
                    return (function(){
                        var f = v625;
                        var args = [v623, v624];
                        var tail = ((function(){
                            var tmp = v622;
                            return tmp === v2? v2: tmp.cdr;
                        })());
                            while (tail != v2){
                                args.push(tail.car);
                                tail = tail.cdr;
                            }
                            return f.apply(this, args);
                        })();
                })(f30(f65((function(){
                    var tmp = v622;
                    return tmp === v2? v2: tmp.car;
                })(), v299))) : (f117((function(){
                    var tmp = v622;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? f104(f118(v622, v623, v624), v623, v624) : f119((function(){
                    var tmp = v622;
                    return tmp === v2? v2: tmp.car;
                })(), (function(){
                    var tmp = v622;
                    return tmp === v2? v2: tmp.cdr;
                })(), v623, v624)));
            })() : v2))));
        }));
    })();
    return l178;
})(); 
var l179 = f3("LS-COMPILE-TOPLEVEL");
var f120;
(function(){
    (function(){
        return f120 = (function(v626){
            ((v626)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v626;
        })((function (v627){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            v289 = v2;
            return (function(v628){
                return (function(v629){
                    v289 = v2;
                    return v629;
                })(f67(f68(f45((function (v630){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f67(v630, ";", v168);
                }), v289)), v628));
            })(f104(v627, v2, v2));
        }));
    })();
    return l179;
})(); 
var l190 = f3("LS-COMPILE-TOPLEVEL");
var l189 = f3("EVAL");
var l188 = f3("PRINT-TO-STRING");
var l187 = f3("LS-READ-FROM-STRING");
var l186 = 139;
var l185 = 184;
var l184 = 120;
var l183 = 636;
var l182 = {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v358", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v312", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v299", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v289", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v278", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v261", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FENV*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v245", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENV*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v244", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v243", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v236", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v168", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}};
var l181 = {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*ENV*"), cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: {car: f3("FUNCTION"), cdr: {car: f3("BINDING-DECLARED"), cdr: f3("NIL")}}, cdr: {car: f3("*ENV*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*FENV*"), cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: {car: f3("FUNCTION"), cdr: {car: f3("BINDING-DECLARED"), cdr: f3("NIL")}}, cdr: {car: f3("*FENV*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f120", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f119", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: {car: f3("FENV"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: {car: f3("FENV"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: f3("FENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("IDENTITY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE-AUX"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l180 = f3("EVAL");
var f112;
v245 = l181;
v244 = l182;
v261 = l183;
v278 = l184;
v358 = l185;
v12 = l186;
(function(){
    (function(){
        (function(){
            return f112 = (function(v631){
                ((v631)["fname"] = "EVAL");
                return v631;
            })((function (v632){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v633){
                    return (function(){
                        var string = v633;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        return eval.apply(window, [string]);
                    })();
                })((function(v634){
                    (function(v635,v636){
                        return (function(){
                            while(v635 !== v2){
                                v636 = (function(){
                                    var tmp = v635;
                                    return tmp === v2? v2: tmp.car;
                                })();
                                (v636)();
                                v635 = (function(){
                                    var tmp = v635;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                        }})();
                    })(v243,v2);
                    return v634;
                })((function(){
                    v243 = v2;
                    v244 = f60(f92, v244);
                    v245 = f60(f92, v245);
                    return f120(v632);
                })()));
            }));
        })();
        return l180;
    })();
    return (function(){
        var string = f67("var lisp = {};", "lisp.read = ", f99(l187, v2), ";", v168, "lisp.print = ", f99(l188, v2), ";", v168, "lisp.eval = ", f99(l189, v2), ";", v168, "lisp.compile = ", f99(l190, v2), ";", v168, "lisp.evalString = function(str){", v168, "   return lisp.eval(lisp.read(str));", v168, "}", v168, "lisp.compileString = function(str){", v168, "   return lisp.compile(lisp.read(str));", v168, "}", v168);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
