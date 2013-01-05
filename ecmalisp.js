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
var l31 = f3("STRING=");
var f64;
var l30 = f3("ASSOC");
var f63;
var l29 = f3("EVERY");
var f62;
var l28 = f3("PARSE-INTEGER");
var f61;
var l27 = f3("SUBSEQ");
var f60;
var l26 = f3("DIGIT-CHAR-P");
var f59;
var l25 = f3("REMOVE-IF-NOT");
var f58;
var l24 = f3("REMOVE-IF");
var f57;
var l23 = f3("REMOVE");
var f56;
var l22 = f3("MEMBER");
var f55;
var l21 = f3("BUTLAST");
var f54;
var l20 = f3("LAST");
var f53;
var l19 = f3("NTH");
var f52;
var l18 = f3("LISTP");
var f36;
var l17 = f3("MINUSP");
var f51;
var l16 = f3("PLUSP");
var f50;
var l15 = f3("INTEGERP");
var f49;
var l14 = f3("CHAR=");
var f48;
var l13 = f3("CHAR-CODE");
var f47;
var l12 = f3("CODE-CHAR");
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
                ((v106)["fname"] = "CODE-CHAR");
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
                ((v108)["fname"] = "CHAR-CODE");
                return v108;
            })((function (v109){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return v109;
            }));
        })();
        return l13;
    })();
    (function(){
        (function(){
            return f48 = (function(v110){
                ((v110)["fname"] = "CHAR=");
                return v110;
            })((function (v111,v112){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((function(){
                    var x = v111;
                    var y = v112;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x==y;
                })()?v3: v2);
            }));
        })();
        return l14;
    })();
    (function(){
        (function(){
            return f49 = (function(v113){
                ((v113)["fname"] = "INTEGERP");
                return v113;
            })((function (v114){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((typeof (v114) == "number")?v3: v2) !== v2 ? ((function(){
                    var x = (function(){
                        var x = v114;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return Math.floor(x);
                    })();
                    var y = v114;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x==y;
                })()?v3: v2) : v2);
            }));
        })();
        return l15;
    })();
    (function(){
        (function(){
            return f50 = (function(v115){
                ((v115)["fname"] = "PLUSP");
                return v115;
            })((function (v116){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((function(){
                    var x = 0;
                    var y = v116;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<y;
                })()?v3: v2);
            }));
        })();
        return l16;
    })();
    (function(){
        (function(){
            return f51 = (function(v117){
                ((v117)["fname"] = "MINUSP");
                return v117;
            })((function (v118){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((function(){
                    var x = v118;
                    var y = 0;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<y;
                })()?v3: v2);
            }));
        })();
        return l17;
    })();
    (function(){
        (function(){
            return f36 = (function(v119){
                ((v119)["fname"] = "LISTP");
                return v119;
            })((function (v120){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v121){
                    return (v121 !== v2 ? v121 : f1(v120));
                })(((function(){
                    var tmp = v120;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v3: v2));
            }));
        })();
        return l18;
    })();
    (function(){
        (function(){
            return f52 = (function(v122){
                ((v122)["fname"] = "NTH");
                return v122;
            })((function (v123,v124){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v124) !== v2 ? (function(){
                    return v124;
                })() : (f14(v123) !== v2 ? (function(){
                    return (function(){
                        var tmp = v124;
                        return tmp === v2? v2: tmp.car;
                    })();
                })() : (function(){
                    return f52(f13(v123), (function(){
                        var tmp = v124;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l19;
    })();
    (function(){
        (function(){
            return f53 = (function(v125){
                ((v125)["fname"] = "LAST");
                return v125;
            })((function (v126){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = (function(){
                        var tmp = v126;
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v3: v2) !== v2 ? f53((function(){
                    var tmp = v126;
                    return tmp === v2? v2: tmp.cdr;
                })()) : v126);
            }));
        })();
        return l20;
    })();
    (function(){
        (function(){
            return f54 = (function(v127){
                ((v127)["fname"] = "BUTLAST");
                return v127;
            })((function (v128){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = (function(){
                        var tmp = v128;
                        return tmp === v2? v2: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v3: v2) !== v2 ? ({car: (function(){
                    var tmp = v128;
                    return tmp === v2? v2: tmp.car;
                })(), cdr: f54((function(){
                    var tmp = v128;
                    return tmp === v2? v2: tmp.cdr;
                })())}) : v2);
            }));
        })();
        return l21;
    })();
    (function(){
        (function(){
            return f55 = (function(v129){
                ((v129)["fname"] = "MEMBER");
                return v129;
            })((function (v130,v131){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v131) !== v2 ? (function(){
                    return v2;
                })() : (f16(v130, (function(){
                    var tmp = v131;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return v131;
                })() : (function(){
                    return f55(v130, (function(){
                        var tmp = v131;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l22;
    })();
    (function(){
        (function(){
            return f56 = (function(v132){
                ((v132)["fname"] = "REMOVE");
                return v132;
            })((function (v133,v134){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v134) !== v2 ? (function(){
                    return v2;
                })() : (f16(v133, (function(){
                    var tmp = v134;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return f56(v133, (function(){
                        var tmp = v134;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })() : (function(){
                    return ({car: (function(){
                        var tmp = v134;
                        return tmp === v2? v2: tmp.car;
                    })(), cdr: f56(v133, (function(){
                        var tmp = v134;
                        return tmp === v2? v2: tmp.cdr;
                    })())});
                })()));
            }));
        })();
        return l23;
    })();
    (function(){
        (function(){
            return f57 = (function(v135){
                ((v135)["fname"] = "REMOVE-IF");
                return v135;
            })((function (v136,v137){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v137) !== v2 ? (function(){
                    return v2;
                })() : ((v136)((function(){
                    var tmp = v137;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return f57(v136, (function(){
                        var tmp = v137;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })() : (function(){
                    return ({car: (function(){
                        var tmp = v137;
                        return tmp === v2? v2: tmp.car;
                    })(), cdr: f57(v136, (function(){
                        var tmp = v137;
                        return tmp === v2? v2: tmp.cdr;
                    })())});
                })()));
            }));
        })();
        return l24;
    })();
    (function(){
        (function(){
            return f58 = (function(v138){
                ((v138)["fname"] = "REMOVE-IF-NOT");
                return v138;
            })((function (v139,v140){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v140) !== v2 ? (function(){
                    return v2;
                })() : ((v139)((function(){
                    var tmp = v140;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? (function(){
                    return ({car: (function(){
                        var tmp = v140;
                        return tmp === v2? v2: tmp.car;
                    })(), cdr: f58(v139, (function(){
                        var tmp = v140;
                        return tmp === v2? v2: tmp.cdr;
                    })())});
                })() : (function(){
                    return f58(v139, (function(){
                        var tmp = v140;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l25;
    })();
    (function(){
        (function(){
            return f59 = (function(v141){
                ((v141)["fname"] = "DIGIT-CHAR-P");
                return v141;
            })((function (v142){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((((function(){
                    var x = 48;
                    var y = v142;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<=y;
                })()?v3: v2) !== v2 ? ((function(){
                    var x = v142;
                    var y = 57;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<=y;
                })()?v3: v2) : v2) !== v2 ? (function(){
                    var x = v142;
                    var y = 48;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })() : v2);
            }));
        })();
        return l26;
    })();
    (function(){
        (function(){
            return f60 = (function(v143){
                ((v143)["fname"] = "SUBSEQ");
                return v143;
            })((function (v144,v145,v146){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 3) throw 'too many arguments';
                switch(arguments.length){
                case 2:
                v146=v2;
                default: break;
                }
                return (((typeof(v144) == "string")?v3: v2) !== v2 ? (function(){
                    return (v146 !== v2 ? (function(){
                        var str = v144;
                        var a = v145;
                        var b;
                        b = v146;
                        return str.slice(a,b);
                    })() : (function(){
                        var str = v144;
                        var a = v145;
                        var b;
                        return str.slice(a,b);
                    })());
                })() : (function(){
                    return (function (){ throw "Unsupported argument."; })();
                })());
            }));
        })();
        return l27;
    })();
    (function(){
        (function(){
            return f61 = (function(v147){
                ((v147)["fname"] = "PARSE-INTEGER");
                return v147;
            })((function (v148){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v149,v150,v151){
                    (function(){
                        while(((function(){
                            var x = v150;
                            var y = v151;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            v149 = (function(){
                                var x = (function(){
                                    var x = v149;
                                    var y = 10;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x*y;
                                })();
                                var y = f59((function(){
                                    var string = v148;
                                    var index = v150;
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
                            v150 = (function(){
                                var x = v150;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v149;
                })(0,0,f43(v148));
            }));
        })();
        return l28;
    })();
    (function(){
        (function(){
            return f62 = (function(v152){
                ((v152)["fname"] = "EVERY");
                return v152;
            })((function (v153,v154){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(v155,v156,v157){
                    (function(){
                        while((v155 !== v2 ? ((function(){
                            var x = v156;
                            var y = v157;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) : v2) !== v2){
                            ((v153)((function(){
                                var string = v154;
                                var index = v156;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })()) !== v2 ? v2 : (function(){
                                return v155 = v2;
                            })());
                            v156 = (function(){
                                var x = v156;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v155;
                })(v3,0,f43(v154));
            }));
        })();
        return l29;
    })();
    (function(){
        (function(){
            return f63 = (function(v158){
                ((v158)["fname"] = "ASSOC");
                return v158;
            })((function (v159,v160){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f1(v160) !== v2 ? (function(){
                    return v2;
                })() : (f16(v159, f22(v160)) !== v2 ? (function(){
                    return (function(){
                        var tmp = v160;
                        return tmp === v2? v2: tmp.car;
                    })();
                })() : (function(){
                    return f63(v159, (function(){
                        var tmp = v160;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l30;
    })();
    return (function(){
        (function(){
            return f64 = (function(v161){
                ((v161)["fname"] = "STRING=");
                return v161;
            })((function (v162,v163){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((v162 == v163)?v3: v2);
            }));
        })();
        return l31;
    })();
})(); 
var l32 = f3("*NEWLINE*");
var v164;
(function(){
    (function(){
        return v164 = (function(){
            var x = f46(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l32;
})(); 
var l33 = f3("CONCAT");
var f65;
(function(){
    (function(){
        return f65 = (function(v165){
            ((v165)["fname"] = "CONCAT");
            return v165;
        })((function (){
            var v166= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v166 = {car: arguments[i], cdr: v166};
            return f37(f44, v166, "");
        }));
    })();
    return l33;
})(); 
var l34 = f3("JOIN");
var f66;
(function(){
    (function(){
        return f66 = (function(v167){
            ((v167)["fname"] = "JOIN");
            return v167;
        })((function (v168,v169){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v169="";
            default: break;
            }
            return (f1(v168) !== v2 ? (function(){
                return "";
            })() : (f1((function(){
                var tmp = v168;
                return tmp === v2? v2: tmp.cdr;
            })()) !== v2 ? (function(){
                return (function(){
                    var tmp = v168;
                    return tmp === v2? v2: tmp.car;
                })();
            })() : (function(){
                return f65((function(){
                    var tmp = v168;
                    return tmp === v2? v2: tmp.car;
                })(), v169, f66((function(){
                    var tmp = v168;
                    return tmp === v2? v2: tmp.cdr;
                })(), v169));
            })()));
        }));
    })();
    return l34;
})(); 
var l35 = f3("JOIN-TRAILING");
var f67;
(function(){
    (function(){
        return f67 = (function(v170){
            ((v170)["fname"] = "JOIN-TRAILING");
            return v170;
        })((function (v171,v172){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v172="";
            default: break;
            }
            return (f1(v171) !== v2 ? "" : f65((function(){
                var tmp = v171;
                return tmp === v2? v2: tmp.car;
            })(), v172, f67((function(){
                var tmp = v171;
                return tmp === v2? v2: tmp.cdr;
            })(), v172)));
        }));
    })();
    return l35;
})(); 
var l36 = f3("INDENT");
var f68;
(function(){
    (function(){
        return f68 = (function(v173){
            ((v173)["fname"] = "INDENT");
            return v173;
        })((function (){
            var v174= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v174 = {car: arguments[i], cdr: v174};
            return (function(v175){
                return (function(v176,v177,v178){
                    (f50(v178) !== v2 ? (function(){
                        return v176 = "    ";
                    })() : v2);
                    (function(){
                        while(((function(){
                            var x = v177;
                            var y = v178;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            v176 = f65(v176, ((f48((function(){
                                var string = v175;
                                var index = v177;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10) !== v2 ? (((function(){
                                var x = v177;
                                var y = f13(v178);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2) !== v2 ? f17(f48((function(){
                                var string = v175;
                                var index = f12(v177);
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10)) : v2) : v2) !== v2 ? f65((function(){
                                var x = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })(), "    ") : f60(v175, v177, f12(v177))));
                            v177 = (function(){
                                var x = v177;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v176;
                })("",0,f43(v175));
            })(f37(f65, v174, ""));
        }));
    })();
    return l36;
})(); 
var l37 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v179){
            ((v179)["fname"] = "INTEGER-TO-STRING");
            return v179;
        })((function (v180){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f14(v180) !== v2 ? (function(){
                return "0";
            })() : (f51(v180) !== v2 ? (function(){
                return f65("-", f6((function(){
                    var x = 0;
                    var y = v180;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })()));
            })() : (function(){
                return (function(v181){
                    (function(){
                        while(f17(f14(v180)) !== v2){
                            v181 = ({car: (function(){
                                var x = v180;
                                var y = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x%y;
                            })(), cdr: v181});
                            v180 = f15(v180, 10);
                    }})();
                    return f66(f45((function (v182){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(){
                            var x = (function(){
                                var string = "0123456789";
                                var index = v182;
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
                    }), v181));
                })(v2);
            })()));
        }));
    })();
    return l37;
})(); 
var l40 = f3("PRINT");
var f72;
var l39 = f3("WRITE-LINE");
var f71;
var l38 = f3("PRINT-TO-STRING");
var f69;
(function(){
    (function(){
        (function(){
            return f69 = (function(v183){
                ((v183)["fname"] = "PRINT-TO-STRING");
                return v183;
            })((function (v184){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = v184;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return (v184).name;
                })() : (f49(v184) !== v2 ? (function(){
                    return f6(v184);
                })() : (((typeof(v184) == "string")?v3: v2) !== v2 ? (function(){
                    return f65("\"", f70(v184), "\"");
                })() : (((typeof v184 == 'function')?v3: v2) !== v2 ? (function(){
                    return (function(v185){
                        return (v185 !== v2 ? f65("#<FUNCTION ", v185, ">") : f65("#<FUNCTION>"));
                    })((function(){
                        var tmp = (v184)["fname"];
                        return tmp == undefined? v2: tmp ;
                    })());
                })() : (f36(v184) !== v2 ? (function(){
                    return f65("(", f67(f45(f69, f54(v184)), " "), (function(v186){
                        return (f1((function(){
                            var tmp = v186;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? f69((function(){
                            var tmp = v186;
                            return tmp === v2? v2: tmp.car;
                        })()) : f65(f69((function(){
                            var tmp = v186;
                            return tmp === v2? v2: tmp.car;
                        })()), " . ", f69((function(){
                            var tmp = v186;
                            return tmp === v2? v2: tmp.cdr;
                        })())));
                    })(f53(v184)), ")");
                })() : v2)))));
            }));
        })();
        return l38;
    })();
    (function(){
        (function(){
            return f71 = (function(v187){
                ((v187)["fname"] = "WRITE-LINE");
                return v187;
            })((function (v188){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                (function(){
                    var x = v188;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                (function(){
                    var x = v164;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                return v188;
            }));
        })();
        return l39;
    })();
    return (function(){
        (function(){
            return f72 = (function(v189){
                ((v189)["fname"] = "PRINT");
                return v189;
            })((function (v190){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f71(f69(v190));
            }));
        })();
        return l40;
    })();
})(); 
var l41 = f3("MAKE-STRING-STREAM");
var f73;
(function(){
    (function(){
        return f73 = (function(v191){
            ((v191)["fname"] = "MAKE-STRING-STREAM");
            return v191;
        })((function (v192){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ({car: v192, cdr: 0});
        }));
    })();
    return l41;
})(); 
var l42 = f3("%PEEK-CHAR");
var f74;
(function(){
    (function(){
        return f74 = (function(v193){
            ((v193)["fname"] = "%PEEK-CHAR");
            return v193;
        })((function (v194){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v194;
                    return tmp === v2? v2: tmp.cdr;
                })();
                var y = f43((function(){
                    var tmp = v194;
                    return tmp === v2? v2: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v3: v2) !== v2 ? (function(){
                var string = (function(){
                    var tmp = v194;
                    return tmp === v2? v2: tmp.car;
                })();
                var index = (function(){
                    var tmp = v194;
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
    return l42;
})(); 
var l43 = f3("%READ-CHAR");
var f75;
(function(){
    (function(){
        return f75 = (function(v195){
            ((v195)["fname"] = "%READ-CHAR");
            return v195;
        })((function (v196){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v196;
                    return tmp === v2? v2: tmp.cdr;
                })();
                var y = f43((function(){
                    var tmp = v196;
                    return tmp === v2? v2: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v3: v2) !== v2 ? (function(v197){
                (function(){
                    var x = v196;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.cdr = f12((function(){
                        var tmp = v196;
                        return tmp === v2? v2: tmp.cdr;
                    })()));
                })();
                return v197;
            })((function(){
                var string = (function(){
                    var tmp = v196;
                    return tmp === v2? v2: tmp.car;
                })();
                var index = (function(){
                    var tmp = v196;
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
    return l43;
})(); 
var l44 = f3("WHITESPACEP");
var f76;
(function(){
    (function(){
        return f76 = (function(v198){
            ((v198)["fname"] = "WHITESPACEP");
            return v198;
        })((function (v199){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v200){
                return (v200 !== v2 ? v200 : (function(v201){
                    return (v201 !== v2 ? v201 : f48(v199, 9));
                })(f48(v199, 10)));
            })(f48(v199, 32));
        }));
    })();
    return l44;
})(); 
var l45 = f3("SKIP-WHITESPACES");
var f77;
(function(){
    (function(){
        return f77 = (function(v202){
            ((v202)["fname"] = "SKIP-WHITESPACES");
            return v202;
        })((function (v203){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v204){
                v204 = f74(v203);
                return (function(){
                    while((v204 !== v2 ? f76(v204) : v2) !== v2){
                        f75(v203);
                        v204 = f74(v203);
                }})();
            })(v2);
        }));
    })();
    return l45;
})(); 
var l46 = f3("TERMINALP");
var f78;
(function(){
    (function(){
        return f78 = (function(v205){
            ((v205)["fname"] = "TERMINALP");
            return v205;
        })((function (v206){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v207){
                return (v207 !== v2 ? v207 : (function(v208){
                    return (v208 !== v2 ? v208 : (function(v209){
                        return (v209 !== v2 ? v209 : f48(40, v206));
                    })(f48(41, v206)));
                })(f76(v206)));
            })(f1(v206));
        }));
    })();
    return l46;
})(); 
var l47 = f3("READ-UNTIL");
var f79;
(function(){
    (function(){
        return f79 = (function(v210){
            ((v210)["fname"] = "READ-UNTIL");
            return v210;
        })((function (v211,v212){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v213,v214){
                v214 = f74(v211);
                (function(){
                    while((v214 !== v2 ? f17((v212)(v214)) : v2) !== v2){
                        v213 = f65(v213, (function(){
                            var x = v214;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        f75(v211);
                        v214 = f74(v211);
                }})();
                return v213;
            })("",v2);
        }));
    })();
    return l47;
})(); 
var l48 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f80;
(function(){
    (function(){
        return f80 = (function(v215){
            ((v215)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v215;
        })((function (v216){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v217){
                f77(v216);
                v217 = f74(v216);
                return (function(){
                    while((v217 !== v2 ? f48(v217, 59) : v2) !== v2){
                        f79(v216, (function (v218){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f48(v218, 10);
                        }));
                        f77(v216);
                        v217 = f74(v216);
                }})();
            })(v2);
        }));
    })();
    return l48;
})(); 
var l49 = f3("%READ-LIST");
var f81;
(function(){
    (function(){
        return f81 = (function(v219){
            ((v219)["fname"] = "%READ-LIST");
            return v219;
        })((function (v220){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f80(v220);
            return (function(v221){
                return (f1(v221) !== v2 ? (function(){
                    return (function (){ throw "Unspected EOF"; })();
                })() : (f48(v221, 41) !== v2 ? (function(){
                    f75(v220);
                    return v2;
                })() : (f48(v221, 46) !== v2 ? (function(){
                    f75(v220);
                    return (function(v222){
                        f80(v220);
                        (f48(f75(v220), 41) !== v2 ? v2 : (function(){
                            return (function (){ throw "')' was expected."; })();
                        })());
                        return v222;
                    })(f82(v220));
                })() : (function(){
                    return ({car: f82(v220), cdr: f81(v220)});
                })())));
            })(f74(v220));
        }));
    })();
    return l49;
})(); 
var l50 = f3("READ-STRING");
var f83;
(function(){
    (function(){
        return f83 = (function(v223){
            ((v223)["fname"] = "READ-STRING");
            return v223;
        })((function (v224){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v225,v226){
                v226 = f75(v224);
                (function(){
                    while(f17(f16(v226, 34)) !== v2){
                        (f1(v226) !== v2 ? (function(){
                            return (function (){ throw "Unexpected EOF"; })();
                        })() : v2);
                        (f16(v226, 92) !== v2 ? (function(){
                            return v226 = f75(v224);
                        })() : v2);
                        v225 = f65(v225, (function(){
                            var x = v226;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        v226 = f75(v224);
                }})();
                return v225;
            })("",v2);
        }));
    })();
    return l50;
})(); 
var l52 = f3("READ-SHARP");
var l51 = f3("FUNCTION");
var f84;
(function(){
    (function(){
        return f84 = (function(v227){
            ((v227)["fname"] = "READ-SHARP");
            return v227;
        })((function (v228){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f75(v228);
            return (function(v229){
                return (f16(v229, 39) !== v2 ? (function(){
                    return f33(l51, f82(v228));
                })() : (f16(v229, 92) !== v2 ? (function(){
                    return (function(v230){
                        return (f64(v230, "space") !== v2 ? (function(){
                            return f47(32);
                        })() : (f64(v230, "tab") !== v2 ? (function(){
                            return f47(9);
                        })() : (f64(v230, "newline") !== v2 ? (function(){
                            return f47(10);
                        })() : (function(){
                            return f47((function(){
                                var string = v230;
                                var index = 0;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })());
                        })())));
                    })(f65((function(){
                        var x = f75(v228);
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return String.fromCharCode(x);
                    })(), f79(v228, f78)));
                })() : (f16(v229, 43) !== v2 ? (function(){
                    return (function(v231){
                        return (f64(v231, "common-lisp") !== v2 ? (function(){
                            f82(v228);
                            return f82(v228);
                        })() : (f64(v231, "ecmalisp") !== v2 ? (function(){
                            return f82(v228);
                        })() : (function(){
                            return (function (){ throw "Unknown reader form."; })();
                        })()));
                    })(f79(v228, f78));
                })() : (function(){
                    return (function (){ throw "ECASE expression failed."; })();
                })())));
            })(f75(v228));
        }));
    })();
    return l52;
})(); 
var l53 = f3("*EOF*");
var v232;
(function(){
    (function(){
        return v232 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l53;
})(); 
var l58 = f3("LS-READ");
var l57 = f3("UNQUOTE");
var l56 = f3("UNQUOTE-SPLICING");
var l55 = f3("BACKQUOTE");
var l54 = f3("QUOTE");
var f82;
(function(){
    (function(){
        return f82 = (function(v233){
            ((v233)["fname"] = "LS-READ");
            return v233;
        })((function (v234){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f80(v234);
            return (function(v235){
                return (f1(v235) !== v2 ? (function(){
                    return v232;
                })() : (f48(v235, 40) !== v2 ? (function(){
                    f75(v234);
                    return f81(v234);
                })() : (f48(v235, 39) !== v2 ? (function(){
                    f75(v234);
                    return f33(l54, f82(v234));
                })() : (f48(v235, 96) !== v2 ? (function(){
                    f75(v234);
                    return f33(l55, f82(v234));
                })() : (f48(v235, 34) !== v2 ? (function(){
                    f75(v234);
                    return f83(v234);
                })() : (f48(v235, 44) !== v2 ? (function(){
                    f75(v234);
                    return (f16(f74(v234), 64) !== v2 ? (function(){
                        f75(v234);
                        return f33(l56, f82(v234));
                    })() : f33(l57, f82(v234)));
                })() : (f48(v235, 35) !== v2 ? (function(){
                    return f84(v234);
                })() : (function(){
                    return (function(v236){
                        return (f62(f59, v236) !== v2 ? f61(v236) : f3((function(){
                            var x = v236;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })()));
                    })(f79(v234, f78));
                })())))))));
            })(f74(v234));
        }));
    })();
    return l58;
})(); 
var l59 = f3("LS-READ-FROM-STRING");
var f85;
(function(){
    (function(){
        return f85 = (function(v237){
            ((v237)["fname"] = "LS-READ-FROM-STRING");
            return v237;
        })((function (v238){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f82(f73(v238));
        }));
    })();
    return l59;
})(); 
var l61 = f3("*COMPILATION-UNIT-CHECKS*");
var l60 = f3("NIL");
var v239;
(function(){
    (function(){
        return v239 = l60;
    })();
    return l61;
})(); 
var l63 = f3("*ENV*");
var l62 = f3("NIL");
var v240;
(function(){
    (function(){
        return v240 = l62;
    })();
    return l63;
})(); 
var l65 = f3("*FENV*");
var l64 = f3("NIL");
var v241;
(function(){
    (function(){
        return v241 = l64;
    })();
    return l65;
})(); 
var l66 = f3("MAKE-BINDING");
var f86;
(function(){
    (function(){
        return f86 = (function(v242){
            ((v242)["fname"] = "MAKE-BINDING");
            return v242;
        })((function (v243,v244,v245,v246){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return f33(v243, v244, v245, v246);
        }));
    })();
    return l66;
})(); 
var l67 = f3("BINDING-NAME");
var f87;
(function(){
    (function(){
        return f87 = (function(v247){
            ((v247)["fname"] = "BINDING-NAME");
            return v247;
        })((function (v248){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f29(v248);
        }));
    })();
    return l67;
})(); 
var l68 = f3("BINDING-TYPE");
var f88;
(function(){
    (function(){
        return f88 = (function(v249){
            ((v249)["fname"] = "BINDING-TYPE");
            return v249;
        })((function (v250){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f30(v250);
        }));
    })();
    return l68;
})(); 
var l69 = f3("BINDING-TRANSLATION");
var f89;
(function(){
    (function(){
        return f89 = (function(v251){
            ((v251)["fname"] = "BINDING-TRANSLATION");
            return v251;
        })((function (v252){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f31(v252);
        }));
    })();
    return l69;
})(); 
var l70 = f3("BINDING-DECLARED");
var f90;
(function(){
    (function(){
        return f90 = (function(v253){
            ((v253)["fname"] = "BINDING-DECLARED");
            return v253;
        })((function (v254){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (v254 !== v2 ? f32(v254) : v2);
        }));
    })();
    return l70;
})(); 
var l71 = f3("MARK-BINDING-AS-DECLARED");
var f91;
(function(){
    (function(){
        return f91 = (function(v255){
            ((v255)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v255;
        })((function (v256){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = f27(v256);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v3);
            })();
        }));
    })();
    return l71;
})(); 
var l72 = f3("*VARIABLE-COUNTER*");
var v257;
(function(){
    (function(){
        return v257 = 0;
    })();
    return l72;
})(); 
var l73 = f3("GVARNAME");
var f92;
(function(){
    (function(){
        return f92 = (function(v258){
            ((v258)["fname"] = "GVARNAME");
            return v258;
        })((function (v259){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f65("v", f6(v257 = (function(){
                var x = v257;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()));
        }));
    })();
    return l73;
})(); 
var l75 = f3("LOOKUP-VARIABLE");
var l74 = f3("VARIABLE");
var f93;
(function(){
    (function(){
        return f93 = (function(v260){
            ((v260)["fname"] = "LOOKUP-VARIABLE");
            return v260;
        })((function (v261,v262){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v263){
                return (v263 !== v2 ? v263 : (function(v264){
                    return (v264 !== v2 ? v264 : (function(v265,v266){
                        v240 = ({car: v266, cdr: v240});
                        v239 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f90(f63(v261, v240)) !== v2 ? v2 : (function(){
                                return (function (){ throw f65("Undefined variable `", v265, "'"); })();
                            })());
                        }), cdr: v239});
                        return v266;
                    })((v261).name,f86(v261, l74, f92(v261), v2)));
                })(f63(v261, v240)));
            })(f63(v261, v262));
        }));
    })();
    return l75;
})(); 
var l76 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f94;
(function(){
    (function(){
        return f94 = (function(v267){
            ((v267)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v267;
        })((function (v268,v269){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f89(f93(v268, v269));
        }));
    })();
    return l76;
})(); 
var l78 = f3("EXTEND-LOCAL-ENV");
var l77 = f3("VARIABLE");
var f95;
(function(){
    (function(){
        return f95 = (function(v270){
            ((v270)["fname"] = "EXTEND-LOCAL-ENV");
            return v270;
        })((function (v271,v272){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f39(f45((function (v273){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f86(v273, l77, f92(v273), v3);
            }), v271), v272);
        }));
    })();
    return l78;
})(); 
var l79 = f3("*FUNCTION-COUNTER*");
var v274;
(function(){
    (function(){
        return v274 = 0;
    })();
    return l79;
})(); 
var l81 = f3("LOOKUP-FUNCTION");
var l80 = f3("FUNCTION");
var f96;
(function(){
    (function(){
        return f96 = (function(v275){
            ((v275)["fname"] = "LOOKUP-FUNCTION");
            return v275;
        })((function (v276,v277){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v278){
                return (v278 !== v2 ? v278 : (function(v279){
                    return (v279 !== v2 ? v279 : (function(v280,v281){
                        v241 = ({car: v281, cdr: v241});
                        v239 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f90(f63(v276, v241)) !== v2 ? v2 : (function(){
                                return (function (){ throw f65("Undefined function `", v280, "'"); })();
                            })());
                        }), cdr: v239});
                        return v281;
                    })((v276).name,f86(v276, l80, f65("f", f6(v274 = (function(){
                        var x = v274;
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })())), v2)));
                })(f63(v276, v241)));
            })(f63(v276, v277));
        }));
    })();
    return l81;
})(); 
var l82 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f97;
(function(){
    (function(){
        return f97 = (function(v282){
            ((v282)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v282;
        })((function (v283,v284){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f89(f96(v283, v284));
        }));
    })();
    return l82;
})(); 
var l83 = f3("*TOPLEVEL-COMPILATIONS*");
var v285;
(function(){
    (function(){
        return v285 = v2;
    })();
    return l83;
})(); 
var l84 = f3("%COMPILE-DEFVAR");
var f98;
(function(){
    (function(){
        return f98 = (function(v286){
            ((v286)["fname"] = "%COMPILE-DEFVAR");
            return v286;
        })((function (v287){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v288){
                f91(v288);
                return v285 = ({car: f65("var ", f89(v288)), cdr: v285});
            })(f93(v287, v240));
        }));
    })();
    return l84;
})(); 
var l85 = f3("%COMPILE-DEFUN");
var f99;
(function(){
    (function(){
        return f99 = (function(v289){
            ((v289)["fname"] = "%COMPILE-DEFUN");
            return v289;
        })((function (v290){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v291){
                f91(v291);
                return v285 = ({car: f65("var ", f89(v291)), cdr: v285});
            })(f96(v290, v241));
        }));
    })();
    return l85;
})(); 
var l87 = f3("%COMPILE-DEFMACRO");
var l86 = f3("MACRO");
var f100;
(function(){
    (function(){
        return f100 = (function(v292){
            ((v292)["fname"] = "%COMPILE-DEFMACRO");
            return v292;
        })((function (v293,v294){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return v241 = ({car: f86(v293, l86, v294, v3), cdr: v241});
        }));
    })();
    return l87;
})(); 
var l88 = f3("*COMPILATIONS*");
var v295;
(function(){
    (function(){
        return v295 = v2;
    })();
    return l88;
})(); 
var l89 = f3("LS-COMPILE-BLOCK");
var f101;
(function(){
    (function(){
        return f101 = (function(v296){
            ((v296)["fname"] = "LS-COMPILE-BLOCK");
            return v296;
        })((function (v297,v298,v299){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f67(f57((function (v300){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v301){
                    return (v301 !== v2 ? v301 : (((typeof(v300) == "string")?v3: v2) !== v2 ? f14(f43(v300)) : v2));
                })(f1(v300));
            }), f45((function (v302){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f102(v302, v298, v299);
            }), v297)), f65(";", v164));
        }));
    })();
    return l89;
})(); 
var l90 = f3("IF");
v295 = ({car: f33(l90, (function (v303,v304,v305,v306,v307){
    if (arguments.length < 5) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    return f65("(", f102(v305, v303, v304), " !== ", f102(v2, v2, v2), " ? ", f102(v306, v303, v304), " : ", f102(v307, v303, v304), ")");
})), cdr: v295}); 
var l92 = f3("*LAMBDA-LIST-KEYWORDS*");
var l91 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v308;
(function(){
    (function(){
        return v308 = l91;
    })();
    return l92;
})(); 
var l93 = f3("LIST-UNTIL-KEYWORD");
var f103;
(function(){
    (function(){
        return f103 = (function(v309){
            ((v309)["fname"] = "LIST-UNTIL-KEYWORD");
            return v309;
        })((function (v310){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(v311){
                return (v311 !== v2 ? v311 : f55((function(){
                    var tmp = v310;
                    return tmp === v2? v2: tmp.car;
                })(), v308));
            })(f1(v310)) !== v2 ? v2 : ({car: (function(){
                var tmp = v310;
                return tmp === v2? v2: tmp.car;
            })(), cdr: f103((function(){
                var tmp = v310;
                return tmp === v2? v2: tmp.cdr;
            })())}));
        }));
    })();
    return l93;
})(); 
var l94 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f104;
(function(){
    (function(){
        return f104 = (function(v312){
            ((v312)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v312;
        })((function (v313){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f103(v313);
        }));
    })();
    return l94;
})(); 
var l96 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l95 = f3("&OPTIONAL");
var f105;
(function(){
    (function(){
        return f105 = (function(v314){
            ((v314)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v314;
        })((function (v315){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f45(f35, f103((function(){
                var tmp = f55(l95, v315);
                return tmp === v2? v2: tmp.cdr;
            })()));
        }));
    })();
    return l96;
})(); 
var l97 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f106;
(function(){
    (function(){
        return f106 = (function(v316){
            ((v316)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v316;
        })((function (v317){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f45(f20, f105(v317));
        }));
    })();
    return l97;
})(); 
var l99 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l98 = f3("&REST");
var f107;
(function(){
    (function(){
        return f107 = (function(v318){
            ((v318)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v318;
        })((function (v319){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v320){
                ((function(){
                    var tmp = v320;
                    return tmp === v2? v2: tmp.cdr;
                })() !== v2 ? (function(){
                    return (function (){ throw "Bad lambda-list"; })();
                })() : v2);
                return (function(){
                    var tmp = v320;
                    return tmp === v2? v2: tmp.car;
                })();
            })(f103((function(){
                var tmp = f55(l98, v319);
                return tmp === v2? v2: tmp.cdr;
            })()));
        }));
    })();
    return l99;
})(); 
var l100 = f3("LAMBDA");
v295 = ({car: f33(l100, (function (v322,v323,v324){
    if (arguments.length < 3) throw 'too few arguments';
    var v321= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v321 = {car: arguments[i], cdr: v321};
    return (function(v325,v326,v327){
        return (function(v328,v329,v330){
            return f65("(function (", f66(f45((function (v331){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f94(v331, v330);
            }), f39(v325, v326)), ","), "){", v164, f68((v325 !== v2 ? f65("if (arguments.length < ", f6(v328), ") throw 'too few arguments';", v164) : ""), (f17(v327) !== v2 ? f65("if (arguments.length > ", f6((function(){
                var x = v328;
                var y = v329;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()), ") throw 'too many arguments';", v164) : ""), (v326 !== v2 ? f65("switch(arguments.length){", v164, (function(v332,v333,v334){
                return (function(){
                    (function(){
                        while(((function(){
                            var x = v334;
                            var y = v329;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            (function(v335){
                                v333 = ({car: f65("case ", f6((function(){
                                    var x = v334;
                                    var y = v328;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), ":", v164, f94((function(){
                                    var tmp = v335;
                                    return tmp === v2? v2: tmp.car;
                                })(), v330), "=", f102(f23(v335), v330, v323), ";", v164), cdr: v333});
                                return v334 = (function(){
                                    var x = v334;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })();
                            })(f52(v334, v332));
                    }})();
                    v333 = ({car: f65("default: break;", v164), cdr: v333});
                    return f66(f41(v333));
                })();
            })(f105(v324),v2,0), "}", v164) : ""), (v327 !== v2 ? (function(v336){
                return f65("var ", v336, "= ", f102(v2, v322, v323), ";", v164, "for (var i = arguments.length-1; i>=", f6((function(){
                    var x = v328;
                    var y = v329;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()), "; i--)", v164, f68(v336, " = ", "{car: arguments[i], cdr: "), v336, "};", v164);
            })(f94(v327, v330)) : ""), f65(f101(f54(v321), v330, v323), "return ", f102((function(){
                var tmp = f53(v321);
                return tmp === v2? v2: tmp.car;
            })(), v330, v323), ";")), v164, "})");
        })(f43(v325),f43(v326),f95(f39(f35(v327), v325, v326), v322));
    })(f104(v324),f106(v324),f107(v324));
})), cdr: v295}); 
var l101 = f3("FSETQ");
v295 = ({car: f33(l101, (function (v337,v338,v339,v340){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f65(f97(v339, v338), " = ", f102(v340, v337, v338));
})), cdr: v295}); 
var l102 = f3("SETQ");
v295 = ({car: f33(l102, (function (v341,v342,v343,v344){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f65(f94(v343, v341), " = ", f102(v344, v341, v342));
})), cdr: v295}); 
var l103 = f3("ESCAPE-STRING");
var f70;
(function(){
    (function(){
        return f70 = (function(v345){
            ((v345)["fname"] = "ESCAPE-STRING");
            return v345;
        })((function (v346){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v347,v348,v349){
                (function(){
                    while(((function(){
                        var x = v348;
                        var y = v349;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?v3: v2) !== v2){
                        (function(v350){
                            ((function(v351){
                                return (v351 !== v2 ? v351 : f48(v350, 92));
                            })(f48(v350, 34)) !== v2 ? (function(){
                                return v347 = f65(v347, "\\");
                            })() : v2);
                            (f48(v350, 10) !== v2 ? (function(){
                                v347 = f65(v347, "\\");
                                return v350 = 110;
                            })() : v2);
                            return v347 = f65(v347, (function(){
                                var x = v350;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })());
                        })((function(){
                            var string = v346;
                            var index = v348;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                        v348 = (function(){
                            var x = v348;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })();
                }})();
                return v347;
            })("",0,f43(v346));
        }));
    })();
    return l103;
})(); 
var l105 = f3("LITERAL->JS");
var l104 = f3("INTERN");
var f108;
(function(){
    (function(){
        return f108 = (function(v352){
            ((v352)["fname"] = "LITERAL->JS");
            return v352;
        })((function (v353){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f49(v353) !== v2 ? (function(){
                return f6(v353);
            })() : (((typeof(v353) == "string")?v3: v2) !== v2 ? (function(){
                return f65("\"", f70(v353), "\"");
            })() : (((function(){
                var tmp = v353;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f102(f39(f33(l104), f33(f70((v353).name))), v240, v241);
            })() : (((function(){
                var tmp = v353;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f65("{car: ", f108((function(){
                    var tmp = v353;
                    return tmp === v2? v2: tmp.car;
                })()), ", cdr: ", f108((function(){
                    var tmp = v353;
                    return tmp === v2? v2: tmp.cdr;
                })()), "}");
            })() : v2))));
        }));
    })();
    return l105;
})(); 
var l106 = f3("*LITERAL-COUNTER*");
var v354;
(function(){
    (function(){
        return v354 = 0;
    })();
    return l106;
})(); 
var l107 = f3("LITERAL");
var f109;
(function(){
    (function(){
        return f109 = (function(v355){
            ((v355)["fname"] = "LITERAL");
            return v355;
        })((function (v356){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v357){
                v285 = ({car: f65("var ", v357, " = ", f108(v356)), cdr: v285});
                return v357;
            })(f65("l", f6(v354 = (function(){
                var x = v354;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })())));
        }));
    })();
    return l107;
})(); 
var l108 = f3("QUOTE");
v295 = ({car: f33(l108, (function (v358,v359,v360){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f109(v360);
})), cdr: v295}); 
var l109 = f3("WHILE");
v295 = ({car: f33(l109, (function (v362,v363,v364){
    if (arguments.length < 3) throw 'too few arguments';
    var v361= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v361 = {car: arguments[i], cdr: v361};
    return f65("(function(){", v164, f68("while(", f102(v364, v362, v363), " !== ", f102(v2, v2, v2), "){", v164, f68(f101(v361, v362, v363))), "}})()");
})), cdr: v295}); 
var l111 = f3("LAMBDA");
var l110 = f3("FUNCTION");
v295 = ({car: f33(l110, (function (v365,v366,v367){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return ((f36(v367) !== v2 ? (((function(){
        var tmp = v367;
        return tmp === v2? v2: tmp.car;
    })() === l111)?v3: v2) : v2) !== v2 ? (function(){
        return f102(v367, v365, v366);
    })() : (((function(){
        var tmp = v367;
        return (typeof tmp == 'object' && 'name' in tmp);
    })()?v3: v2) !== v2 ? (function(){
        return f97(v367, v366);
    })() : v2));
})), cdr: v295}); 
var l113 = f3("PROGN");
var l112 = f3("EVAL-WHEN-COMPILE");
v295 = ({car: f33(l112, (function (v369,v370){
    if (arguments.length < 2) throw 'too few arguments';
    var v368= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v368 = {car: arguments[i], cdr: v368};
    f110(({car: l113, cdr: v368}));
    return "";
})), cdr: v295}); 
var l114 = f3("PROGN");
v295 = ({car: f33(l114, (function (v372,v373){
    if (arguments.length < 2) throw 'too few arguments';
    var v371= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v371 = {car: arguments[i], cdr: v371};
    return f65("(function(){", v164, f68(f101(f54(v371), v372, v373), "return ", f102((function(){
        var tmp = f53(v371);
        return tmp === v2? v2: tmp.car;
    })(), v372, v373), ";", v164), "})()");
})), cdr: v295}); 
var l115 = f3("LET");
v295 = ({car: f33(l115, (function (v375,v376,v377){
    if (arguments.length < 3) throw 'too few arguments';
    var v374= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v374 = {car: arguments[i], cdr: v374};
    return (function(v378){
        return (function(v379,v380){
            return (function(v381){
                return f65("(function(", f66(f45((function (v382){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f94(v382, v381);
                }), v379), ","), "){", v164, f68(f101(f54(v374), v381, v376), "return ", f102((function(){
                    var tmp = f53(v374);
                    return tmp === v2? v2: tmp.car;
                })(), v381, v376), ";", v164), "})(", f66(f45((function (v383){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f102(v383, v375, v376);
                }), v380), ","), ")");
            })(f95(v379, v375));
        })(f45(f29, v378),f45(f30, v378));
    })(f45(f35, v377));
})), cdr: v295}); 
var l124 = f3("BACKQUOTE-EXPAND-1");
var l123 = f3("LIST");
var l122 = f3("UNQUOTE-SPLICING");
var l121 = f3("LIST");
var l120 = f3("UNQUOTE");
var l119 = f3("APPEND");
var l118 = f3("BACKQUOTE");
var l117 = f3("UNQUOTE");
var l116 = f3("QUOTE");
var f111;
(function(){
    (function(){
        return f111 = (function(v384){
            ((v384)["fname"] = "BACKQUOTE-EXPAND-1");
            return v384;
        })((function (v385){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v385;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f33(l116, v385);
            })() : (f34(v385) !== v2 ? (function(){
                return v385;
            })() : ((((function(){
                var tmp = v385;
                return tmp === v2? v2: tmp.car;
            })() === l117)?v3: v2) !== v2 ? (function(){
                return (function(){
                    var tmp = v385;
                    return tmp === v2? v2: tmp.car;
                })();
            })() : ((((function(){
                var tmp = v385;
                return tmp === v2? v2: tmp.car;
            })() === l118)?v3: v2) !== v2 ? (function(){
                return f111(f111(f23(v385)));
            })() : (function(){
                return ({car: l119, cdr: f45((function (v386){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return ((f36(v386) !== v2 ? (((function(){
                        var tmp = v386;
                        return tmp === v2? v2: tmp.car;
                    })() === l120)?v3: v2) : v2) !== v2 ? (function(){
                        return f33(l121, f23(v386));
                    })() : ((f36(v386) !== v2 ? (((function(){
                        var tmp = v386;
                        return tmp === v2? v2: tmp.car;
                    })() === l122)?v3: v2) : v2) !== v2 ? (function(){
                        return f23(v386);
                    })() : (function(){
                        return f33(l123, f111(v386));
                    })()));
                }), v385)});
            })()))));
        }));
    })();
    return l124;
})(); 
var l126 = f3("BACKQUOTE-EXPAND");
var l125 = f3("BACKQUOTE");
var f112;
(function(){
    (function(){
        return f112 = (function(v387){
            ((v387)["fname"] = "BACKQUOTE-EXPAND");
            return v387;
        })((function (v388){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((f36(v388) !== v2 ? (((function(){
                var tmp = v388;
                return tmp === v2? v2: tmp.car;
            })() === l125)?v3: v2) : v2) !== v2 ? f111(f23(v388)) : v388);
        }));
    })();
    return l126;
})(); 
var l127 = f3("BACKQUOTE");
v295 = ({car: f33(l127, (function (v389,v390,v391){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f102(f111(v391), v389, v390);
})), cdr: v295}); 
var l128 = f3("COMPILE-BOOL");
var f113;
(function(){
    (function(){
        return f113 = (function(v392){
            ((v392)["fname"] = "COMPILE-BOOL");
            return v392;
        })((function (v393){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f65("(", v393, "?", f102(v3, v2, v2), ": ", f102(v2, v2, v2), ")");
        }));
    })();
    return l128;
})(); 
var l129 = f3("NUM-OP-NUM");
var f114;
(function(){
    (function(){
        return f114 = (function(v394){
            ((v394)["fname"] = "NUM-OP-NUM");
            return v394;
        })((function (v395,v396,v397){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f65("(function(){", v164, f68(f65("var ", "x", " = ", v395, ";", v164), f65("var ", "y", " = ", v397, ";", v164), f65("if (typeof ", "x", " != '", "number", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v164)), f65("if (typeof ", "y", " != '", "number", "')", v164, f68("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v164)), f65("return ", (function(){
                return f65("x", v396, "y");
            })(), ";", v164)), "})()");
        }));
    })();
    return l129;
})(); 
var l130 = f3("+");
v295 = ({car: f33(l130, (function (v398,v399,v400,v401){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v402,v403){
        return f114(v402, "+", v403);
    })(f102(v400, v398, v399),f102(v401, v398, v399));
})), cdr: v295}); 
var l131 = f3("-");
v295 = ({car: f33(l131, (function (v404,v405,v406,v407){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v408,v409){
        return f114(v408, "-", v409);
    })(f102(v406, v404, v405),f102(v407, v404, v405));
})), cdr: v295}); 
var l132 = f3("*");
v295 = ({car: f33(l132, (function (v410,v411,v412,v413){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v414,v415){
        return f114(v414, "*", v415);
    })(f102(v412, v410, v411),f102(v413, v410, v411));
})), cdr: v295}); 
var l133 = f3("/");
v295 = ({car: f33(l133, (function (v416,v417,v418,v419){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v420,v421){
        return f114(v420, "/", v421);
    })(f102(v418, v416, v417),f102(v419, v416, v417));
})), cdr: v295}); 
var l134 = f3("MOD");
v295 = ({car: f33(l134, (function (v422,v423,v424,v425){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v426,v427){
        return f114(v426, "%", v427);
    })(f102(v424, v422, v423),f102(v425, v422, v423));
})), cdr: v295}); 
var l135 = f3("<");
v295 = ({car: f33(l135, (function (v428,v429,v430,v431){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v432,v433){
        return f113(f114(v432, "<", v433));
    })(f102(v430, v428, v429),f102(v431, v428, v429));
})), cdr: v295}); 
var l136 = f3(">");
v295 = ({car: f33(l136, (function (v434,v435,v436,v437){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v438,v439){
        return f113(f114(v438, ">", v439));
    })(f102(v436, v434, v435),f102(v437, v434, v435));
})), cdr: v295}); 
var l137 = f3("=");
v295 = ({car: f33(l137, (function (v440,v441,v442,v443){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v444,v445){
        return f113(f114(v444, "==", v445));
    })(f102(v442, v440, v441),f102(v443, v440, v441));
})), cdr: v295}); 
var l138 = f3("<=");
v295 = ({car: f33(l138, (function (v446,v447,v448,v449){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v450,v451){
        return f113(f114(v450, "<=", v451));
    })(f102(v448, v446, v447),f102(v449, v446, v447));
})), cdr: v295}); 
var l139 = f3(">=");
v295 = ({car: f33(l139, (function (v452,v453,v454,v455){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v456,v457){
        return f113(f114(v456, ">=", v457));
    })(f102(v454, v452, v453),f102(v455, v452, v453));
})), cdr: v295}); 
var l140 = f3("NUMBERP");
v295 = ({car: f33(l140, (function (v458,v459,v460){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v461){
        return f113(f65("(typeof (", v461, ") == \"number\")"));
    })(f102(v460, v458, v459));
})), cdr: v295}); 
var l141 = f3("FLOOR");
v295 = ({car: f33(l141, (function (v462,v463,v464){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v465){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v465, ";", v164), f65("if (typeof ", "x", " != '", "number", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v164)), f65("return ", (function(){
            return "Math.floor(x)";
        })(), ";", v164)), "})()");
    })(f102(v464, v462, v463));
})), cdr: v295}); 
var l142 = f3("CONS");
v295 = ({car: f33(l142, (function (v466,v467,v468,v469){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v470,v471){
        return f65("({car: ", v470, ", cdr: ", v471, "})");
    })(f102(v468, v466, v467),f102(v469, v466, v467));
})), cdr: v295}); 
var l143 = f3("CONSP");
v295 = ({car: f33(l143, (function (v472,v473,v474){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v475){
        return f113(f65("(function(){", v164, f68("var tmp = ", v475, ";", v164, "return (typeof tmp == 'object' && 'car' in tmp);", v164), "})()"));
    })(f102(v474, v472, v473));
})), cdr: v295}); 
var l144 = f3("CAR");
v295 = ({car: f33(l144, (function (v476,v477,v478){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v479){
        return f65("(function(){", v164, f68("var tmp = ", v479, ";", v164, "return tmp === ", f102(v2, v2, v2), "? ", f102(v2, v2, v2), ": tmp.car;", v164), "})()");
    })(f102(v478, v476, v477));
})), cdr: v295}); 
var l145 = f3("CDR");
v295 = ({car: f33(l145, (function (v480,v481,v482){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v483){
        return f65("(function(){", v164, f68("var tmp = ", v483, ";", v164, "return tmp === ", f102(v2, v2, v2), "? ", f102(v2, v2, v2), ": tmp.cdr;", v164), "})()");
    })(f102(v482, v480, v481));
})), cdr: v295}); 
var l146 = f3("SETCAR");
v295 = ({car: f33(l146, (function (v484,v485,v486,v487){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v488,v489){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v488, ";", v164), f65("if (typeof ", "x", " != '", "object", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v164)), f65("return ", (function(){
            return f65("(x.car = ", v489, ")");
        })(), ";", v164)), "})()");
    })(f102(v486, v484, v485),f102(v487, v484, v485));
})), cdr: v295}); 
var l147 = f3("SETCDR");
v295 = ({car: f33(l147, (function (v490,v491,v492,v493){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v494,v495){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v494, ";", v164), f65("if (typeof ", "x", " != '", "object", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v164)), f65("return ", (function(){
            return f65("(x.cdr = ", v495, ")");
        })(), ";", v164)), "})()");
    })(f102(v492, v490, v491),f102(v493, v490, v491));
})), cdr: v295}); 
var l148 = f3("SYMBOLP");
v295 = ({car: f33(l148, (function (v496,v497,v498){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v499){
        return f113(f65("(function(){", v164, f68("var tmp = ", v499, ";", v164, "return (typeof tmp == 'object' && 'name' in tmp);", v164), "})()"));
    })(f102(v498, v496, v497));
})), cdr: v295}); 
var l149 = f3("MAKE-SYMBOL");
v295 = ({car: f33(l149, (function (v500,v501,v502){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v503){
        return f65("(function(){", v164, f68(f65("var ", "name", " = ", v503, ";", v164), f65("if (typeof ", "name", " != '", "string", "')", v164, f68("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v164)), f65("return ", (function(){
            return "({name: name})";
        })(), ";", v164)), "})()");
    })(f102(v502, v500, v501));
})), cdr: v295}); 
var l150 = f3("SYMBOL-NAME");
v295 = ({car: f33(l150, (function (v504,v505,v506){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v507){
        return f65("(", v507, ").name");
    })(f102(v506, v504, v505));
})), cdr: v295}); 
var l151 = f3("EQ");
v295 = ({car: f33(l151, (function (v508,v509,v510,v511){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v512,v513){
        return f113(f65("(", v512, " === ", v513, ")"));
    })(f102(v510, v508, v509),f102(v511, v508, v509));
})), cdr: v295}); 
var l152 = f3("EQUAL");
v295 = ({car: f33(l152, (function (v514,v515,v516,v517){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v518,v519){
        return f113(f65("(", v518, " == ", v519, ")"));
    })(f102(v516, v514, v515),f102(v517, v514, v515));
})), cdr: v295}); 
var l153 = f3("STRING");
v295 = ({car: f33(l153, (function (v520,v521,v522){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v523){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v523, ";", v164), f65("if (typeof ", "x", " != '", "number", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v164)), f65("return ", (function(){
            return "String.fromCharCode(x)";
        })(), ";", v164)), "})()");
    })(f102(v522, v520, v521));
})), cdr: v295}); 
var l154 = f3("STRINGP");
v295 = ({car: f33(l154, (function (v524,v525,v526){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v527){
        return f113(f65("(typeof(", v527, ") == \"string\")"));
    })(f102(v526, v524, v525));
})), cdr: v295}); 
var l155 = f3("STRING-UPCASE");
v295 = ({car: f33(l155, (function (v528,v529,v530){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v531){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v531, ";", v164), f65("if (typeof ", "x", " != '", "string", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v164)), f65("return ", (function(){
            return "x.toUpperCase()";
        })(), ";", v164)), "})()");
    })(f102(v530, v528, v529));
})), cdr: v295}); 
var l156 = f3("STRING-LENGTH");
v295 = ({car: f33(l156, (function (v532,v533,v534){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v535){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v535, ";", v164), f65("if (typeof ", "x", " != '", "string", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v164)), f65("return ", (function(){
            return "x.length";
        })(), ";", v164)), "})()");
    })(f102(v534, v532, v533));
})), cdr: v295}); 
var l157 = f3("SLICE");
v295 = ({car: f33(l157, (function (v536,v537,v538,v539,v540){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    switch(arguments.length){
    case 4:
    v540=v2;
    default: break;
    }
    return f65("(function(){", v164, f68("var str = ", f102(v538, v536, v537), ";", v164, "var a = ", f102(v539, v536, v537), ";", v164, "var b;", v164, (v540 !== v2 ? f65("b = ", f102(v540, v536, v537), ";", v164) : ""), "return str.slice(a,b);", v164), "})()");
})), cdr: v295}); 
var l158 = f3("CHAR");
v295 = ({car: f33(l158, (function (v541,v542,v543,v544){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v545,v546){
        return f65("(function(){", v164, f68(f65("var ", "string", " = ", v545, ";", v164), f65("var ", "index", " = ", v546, ";", v164), f65("if (typeof ", "string", " != '", "string", "')", v164, f68("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v164)), f65("if (typeof ", "index", " != '", "number", "')", v164, f68("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v164)), f65("return ", (function(){
            return "string.charCodeAt(index)";
        })(), ";", v164)), "})()");
    })(f102(v543, v541, v542),f102(v544, v541, v542));
})), cdr: v295}); 
var l159 = f3("CONCAT-TWO");
v295 = ({car: f33(l159, (function (v547,v548,v549,v550){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v551,v552){
        return f65("(function(){", v164, f68(f65("var ", "string1", " = ", v551, ";", v164), f65("var ", "string2", " = ", v552, ";", v164), f65("if (typeof ", "string1", " != '", "string", "')", v164, f68("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v164)), f65("if (typeof ", "string2", " != '", "string", "')", v164, f68("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v164)), f65("return ", (function(){
            return "string1.concat(string2)";
        })(), ";", v164)), "})()");
    })(f102(v549, v547, v548),f102(v550, v547, v548));
})), cdr: v295}); 
var l160 = f3("FUNCALL");
v295 = ({car: f33(l160, (function (v554,v555,v556){
    if (arguments.length < 3) throw 'too few arguments';
    var v553= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v553 = {car: arguments[i], cdr: v553};
    return f65("(", f102(v556, v554, v555), ")(", f66(f45((function (v557){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return f102(v557, v554, v555);
    }), v553), ", "), ")");
})), cdr: v295}); 
var l161 = f3("APPLY");
v295 = ({car: f33(l161, (function (v559,v560,v561){
    if (arguments.length < 3) throw 'too few arguments';
    var v558= v2;
    for (var i = arguments.length-1; i>=3; i--)
        v558 = {car: arguments[i], cdr: v558};
    return (f1(v558) !== v2 ? f65("(", f102(v561, v559, v560), ")()") : (function(v562,v563){
        return f65("(function(){", v164, f68("var f = ", f102(v561, v559, v560), ";", v164, "var args = [", f66(f45((function (v564){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f102(v564, v559, v560);
        }), v562), ", "), "];", v164, "var tail = (", f102(v563, v559, v560), ");", v164, f68("while (tail != ", f102(v2, v559, v560), "){", v164, "    args.push(tail.car);", v164, "    tail = tail.cdr;", v164, "}", v164, "return f.apply(this, args);", v164), "})()"));
    })(f54(v558),(function(){
        var tmp = f53(v558);
        return tmp === v2? v2: tmp.car;
    })()));
})), cdr: v295}); 
var l162 = f3("JS-EVAL");
v295 = ({car: f33(l162, (function (v565,v566,v567){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v568){
        return f65("(function(){", v164, f68(f65("var ", "string", " = ", v568, ";", v164), f65("if (typeof ", "string", " != '", "string", "')", v164, f68("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v164)), f65("return ", (function(){
            return "eval.apply(window, [string])";
        })(), ";", v164)), "})()");
    })(f102(v567, v565, v566));
})), cdr: v295}); 
var l163 = f3("ERROR");
v295 = ({car: f33(l163, (function (v569,v570,v571){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v572){
        return f65("(function (){ throw ", v572, "; })()");
    })(f102(v571, v569, v570));
})), cdr: v295}); 
var l164 = f3("NEW");
v295 = ({car: f33(l164, (function (v573,v574){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        return "{}";
    })();
})), cdr: v295}); 
var l165 = f3("GET");
v295 = ({car: f33(l165, (function (v575,v576,v577,v578){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v579,v580){
        return f65("(function(){", v164, f68("var tmp = ", "(", v579, ")[", v580, "];", v164, "return tmp == undefined? ", f102(v2, v2, v2), ": tmp ;", v164), "})()");
    })(f102(v577, v575, v576),f102(v578, v575, v576));
})), cdr: v295}); 
var l166 = f3("SET");
v295 = ({car: f33(l166, (function (v581,v582,v583,v584,v585){
    if (arguments.length < 5) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    return (function(v586,v587,v588){
        return f65("((", v586, ")[", v587, "] = ", v588, ")");
    })(f102(v583, v581, v582),f102(v584, v581, v582),f102(v585, v581, v582));
})), cdr: v295}); 
var l167 = f3("IN");
v295 = ({car: f33(l167, (function (v589,v590,v591,v592){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v593,v594){
        return f113(f65("((", v593, ") in (", v594, "))"));
    })(f102(v591, v589, v590),f102(v592, v589, v590));
})), cdr: v295}); 
var l168 = f3("FUNCTIONP");
v295 = ({car: f33(l168, (function (v595,v596,v597){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v598){
        return f113(f65("(typeof ", v598, " == 'function')"));
    })(f102(v597, v595, v596));
})), cdr: v295}); 
var l169 = f3("WRITE-STRING");
v295 = ({car: f33(l169, (function (v599,v600,v601){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v602){
        return f65("(function(){", v164, f68(f65("var ", "x", " = ", v602, ";", v164), f65("if (typeof ", "x", " != '", "string", "')", v164, f68("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v164)), f65("return ", (function(){
            return "lisp.write(x)";
        })(), ";", v164)), "})()");
    })(f102(v601, v599, v600));
})), cdr: v295}); 
var l171 = f3("MACROP");
var l170 = f3("MACRO");
var f115;
(function(){
    (function(){
        return f115 = (function(v603){
            ((v603)["fname"] = "MACROP");
            return v603;
        })((function (v604){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v604;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? ((f88(f96(v604, v241)) === l170)?v3: v2) : v2);
        }));
    })();
    return l171;
})(); 
var l173 = f3("LS-MACROEXPAND-1");
var l172 = f3("MACRO");
var f116;
(function(){
    (function(){
        return f116 = (function(v605){
            ((v605)["fname"] = "LS-MACROEXPAND-1");
            return v605;
        })((function (v606,v607,v608){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (f115((function(){
                var tmp = v606;
                return tmp === v2? v2: tmp.car;
            })()) !== v2 ? (function(v609){
                return (((f88(v609) === l172)?v3: v2) !== v2 ? (function(){
                    var f = f110(f89(v609));
                    var args = [];
                    var tail = ((function(){
                        var tmp = v606;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                        while (tail != v2){
                            args.push(tail.car);
                            tail = tail.cdr;
                        }
                        return f.apply(this, args);
                    })() : v606);
            })(f96((function(){
                var tmp = v606;
                return tmp === v2? v2: tmp.car;
            })(), v240)) : v606);
        }));
    })();
    return l173;
})(); 
var l175 = f3("COMPILE-FUNCALL");
var l174 = f3("LAMBDA");
var f117;
(function(){
    (function(){
        return f117 = (function(v610){
            ((v610)["fname"] = "COMPILE-FUNCALL");
            return v610;
        })((function (v611,v612,v613,v614){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (((function(){
                var tmp = v611;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f65(f97(v611, v614), "(", f66(f45((function (v615){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f102(v615, v613, v614);
                }), v612), ", "), ")");
            })() : ((f36(v611) !== v2 ? (((function(){
                var tmp = v611;
                return tmp === v2? v2: tmp.car;
            })() === l174)?v3: v2) : v2) !== v2 ? (function(){
                return f65("(", f102(v611, v613, v614), ")(", f66(f45((function (v616){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f102(v616, v613, v614);
                }), v612), ", "), ")");
            })() : (function(){
                return (function (){ throw f65("Invalid function designator ", (v611).name); })();
            })()));
        }));
    })();
    return l175;
})(); 
var l176 = f3("LS-COMPILE");
var f102;
(function(){
    (function(){
        return f102 = (function(v617){
            ((v617)["fname"] = "LS-COMPILE");
            return v617;
        })((function (v618,v619,v620){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (((function(){
                var tmp = v618;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f94(v618, v619);
            })() : (f49(v618) !== v2 ? (function(){
                return f6(v618);
            })() : (((typeof(v618) == "string")?v3: v2) !== v2 ? (function(){
                return f65("\"", f70(v618), "\"");
            })() : (f36(v618) !== v2 ? (function(){
                return (f63((function(){
                    var tmp = v618;
                    return tmp === v2? v2: tmp.car;
                })(), v295) !== v2 ? (function(v621){
                    return (function(){
                        var f = v621;
                        var args = [v619, v620];
                        var tail = ((function(){
                            var tmp = v618;
                            return tmp === v2? v2: tmp.cdr;
                        })());
                            while (tail != v2){
                                args.push(tail.car);
                                tail = tail.cdr;
                            }
                            return f.apply(this, args);
                        })();
                })(f30(f63((function(){
                    var tmp = v618;
                    return tmp === v2? v2: tmp.car;
                })(), v295))) : (f115((function(){
                    var tmp = v618;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? f102(f116(v618, v619, v620), v619, v620) : f117((function(){
                    var tmp = v618;
                    return tmp === v2? v2: tmp.car;
                })(), (function(){
                    var tmp = v618;
                    return tmp === v2? v2: tmp.cdr;
                })(), v619, v620)));
            })() : v2))));
        }));
    })();
    return l176;
})(); 
var l177 = f3("LS-COMPILE-TOPLEVEL");
var f118;
(function(){
    (function(){
        return f118 = (function(v622){
            ((v622)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v622;
        })((function (v623){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            v285 = v2;
            return (function(v624){
                return (function(v625){
                    v285 = v2;
                    return v625;
                })(f65(f66(f45((function (v626){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f65(v626, ";", v164);
                }), v285)), v624));
            })(f102(v623, v2, v2));
        }));
    })();
    return l177;
})(); 
var l188 = f3("LS-COMPILE-TOPLEVEL");
var l187 = f3("EVAL");
var l186 = f3("PRINT-TO-STRING");
var l185 = f3("LS-READ-FROM-STRING");
var l184 = 137;
var l183 = 182;
var l182 = 118;
var l181 = 632;
var l180 = {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v354", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v308", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v295", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v285", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v274", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v257", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FENV*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v241", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENV*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v240", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v239", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v232", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v164", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}};
var l179 = {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*ENV*"), cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: {car: f3("FUNCTION"), cdr: {car: f3("BINDING-DECLARED"), cdr: f3("NIL")}}, cdr: {car: f3("*ENV*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*FENV*"), cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: {car: f3("FUNCTION"), cdr: {car: f3("BINDING-DECLARED"), cdr: f3("NIL")}}, cdr: {car: f3("*FENV*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: {car: f3("FENV"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: {car: f3("FENV"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: f3("FENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE-AUX"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l178 = f3("EVAL");
var f110;
v241 = l179;
v240 = l180;
v257 = l181;
v274 = l182;
v354 = l183;
v12 = l184;
(function(){
    (function(){
        (function(){
            return f110 = (function(v627){
                ((v627)["fname"] = "EVAL");
                return v627;
            })((function (v628){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v629){
                    return (function(){
                        var string = v629;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        return eval.apply(window, [string]);
                    })();
                })((function(v630){
                    (function(v631,v632){
                        return (function(){
                            while(v631 !== v2){
                                v632 = (function(){
                                    var tmp = v631;
                                    return tmp === v2? v2: tmp.car;
                                })();
                                (v632)();
                                v631 = (function(){
                                    var tmp = v631;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                        }})();
                    })(v239,v2);
                    return v630;
                })((function(){
                    v239 = v2;
                    v240 = f58(f90, v240);
                    v241 = f58(f90, v241);
                    return f118(v628);
                })()));
            }));
        })();
        return l178;
    })();
    return (function(){
        var string = f65("var lisp = {};", "lisp.read = ", f97(l185, v2), ";", v164, "lisp.print = ", f97(l186, v2), ";", v164, "lisp.eval = ", f97(l187, v2), ";", v164, "lisp.compile = ", f97(l188, v2), ";", v164, "lisp.evalString = function(str){", v164, "   return lisp.eval(lisp.read(str));", v164, "}", v164, "lisp.compileString = function(str){", v164, "   return lisp.compile(lisp.read(str));", v164, "}", v164);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
