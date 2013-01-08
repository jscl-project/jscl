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
                return (function(v165){
                    (function(){
                        while((v164 !== v2 ? f17(v165) : v2) !== v2){
                            (f16(v163, f22(v164)) !== v2 ? v165 = v3 : v164 = (function(){
                                var tmp = v164;
                                return tmp === v2? v2: tmp.cdr;
                            })());
                    }})();
                    return (function(){
                        var tmp = v164;
                        return tmp === v2? v2: tmp.car;
                    })();
                })(v2);
            }));
        })();
        return l32;
    })();
    return (function(){
        (function(){
            return f66 = (function(v166){
                ((v166)["fname"] = "STRING=");
                return v166;
            })((function (v167,v168){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((v167 == v168)?v3: v2);
            }));
        })();
        return l33;
    })();
})(); 
var l34 = f3("*NEWLINE*");
var v169;
(function(){
    (function(){
        return v169 = (function(){
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
        return f67 = (function(v170){
            ((v170)["fname"] = "CONCAT");
            return v170;
        })((function (){
            var v171= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v171 = {car: arguments[i], cdr: v171};
            return f37(f44, v171, "");
        }));
    })();
    return l35;
})(); 
var l36 = f3("JOIN");
var f68;
(function(){
    (function(){
        return f68 = (function(v172){
            ((v172)["fname"] = "JOIN");
            return v172;
        })((function (v173,v174){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v174="";
            default: break;
            }
            return (f1(v173) !== v2 ? (function(){
                return "";
            })() : (f1((function(){
                var tmp = v173;
                return tmp === v2? v2: tmp.cdr;
            })()) !== v2 ? (function(){
                return (function(){
                    var tmp = v173;
                    return tmp === v2? v2: tmp.car;
                })();
            })() : (function(){
                return f67((function(){
                    var tmp = v173;
                    return tmp === v2? v2: tmp.car;
                })(), v174, f68((function(){
                    var tmp = v173;
                    return tmp === v2? v2: tmp.cdr;
                })(), v174));
            })()));
        }));
    })();
    return l36;
})(); 
var l37 = f3("JOIN-TRAILING");
var f69;
(function(){
    (function(){
        return f69 = (function(v175){
            ((v175)["fname"] = "JOIN-TRAILING");
            return v175;
        })((function (v176,v177){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v177="";
            default: break;
            }
            return (f1(v176) !== v2 ? "" : f67((function(){
                var tmp = v176;
                return tmp === v2? v2: tmp.car;
            })(), v177, f69((function(){
                var tmp = v176;
                return tmp === v2? v2: tmp.cdr;
            })(), v177)));
        }));
    })();
    return l37;
})(); 
var l38 = f3("INDENT");
var f70;
(function(){
    (function(){
        return f70 = (function(v178){
            ((v178)["fname"] = "INDENT");
            return v178;
        })((function (){
            var v179= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v179 = {car: arguments[i], cdr: v179};
            return (function(v180){
                return (function(v181,v182,v183){
                    (f52(v183) !== v2 ? (function(){
                        return v181 = "    ";
                    })() : v2);
                    (function(){
                        while(((function(){
                            var x = v182;
                            var y = v183;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            v181 = f67(v181, ((f50((function(){
                                var string = v180;
                                var index = v182;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10) !== v2 ? (((function(){
                                var x = v182;
                                var y = f13(v183);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2) !== v2 ? f17(f50((function(){
                                var string = v180;
                                var index = f12(v182);
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
                            })(), "    ") : f62(v180, v182, f12(v182))));
                            v182 = (function(){
                                var x = v182;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v181;
                })("",0,f43(v180));
            })(f68(v179));
        }));
    })();
    return l38;
})(); 
var l39 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v184){
            ((v184)["fname"] = "INTEGER-TO-STRING");
            return v184;
        })((function (v185){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f14(v185) !== v2 ? (function(){
                return "0";
            })() : (f53(v185) !== v2 ? (function(){
                return f67("-", f6((function(){
                    var x = 0;
                    var y = v185;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })()));
            })() : (function(){
                return (function(v186){
                    (function(){
                        while(f17(f14(v185)) !== v2){
                            v186 = ({car: (function(){
                                var x = v185;
                                var y = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x%y;
                            })(), cdr: v186});
                            v185 = f15(v185, 10);
                    }})();
                    return f68(f45((function (v187){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(){
                            var x = (function(){
                                var string = "0123456789";
                                var index = v187;
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
                    }), v186));
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
            return f71 = (function(v188){
                ((v188)["fname"] = "PRINT-TO-STRING");
                return v188;
            })((function (v189){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = v189;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return (v189).name;
                })() : (f51(v189) !== v2 ? (function(){
                    return f6(v189);
                })() : (((typeof(v189) == "string")?v3: v2) !== v2 ? (function(){
                    return f67("\"", f72(v189), "\"");
                })() : (((typeof v189 == 'function')?v3: v2) !== v2 ? (function(){
                    return (function(v190){
                        return (v190 !== v2 ? f67("#<FUNCTION ", v190, ">") : f67("#<FUNCTION>"));
                    })((function(){
                        var tmp = (v189)["fname"];
                        return tmp == undefined? v2: tmp ;
                    })());
                })() : (f36(v189) !== v2 ? (function(){
                    return f67("(", f69(f45(f71, f56(v189)), " "), (function(v191){
                        return (f1((function(){
                            var tmp = v191;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? f71((function(){
                            var tmp = v191;
                            return tmp === v2? v2: tmp.car;
                        })()) : f67(f71((function(){
                            var tmp = v191;
                            return tmp === v2? v2: tmp.car;
                        })()), " . ", f71((function(){
                            var tmp = v191;
                            return tmp === v2? v2: tmp.cdr;
                        })())));
                    })(f55(v189)), ")");
                })() : v2)))));
            }));
        })();
        return l40;
    })();
    (function(){
        (function(){
            return f73 = (function(v192){
                ((v192)["fname"] = "WRITE-LINE");
                return v192;
            })((function (v193){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                (function(){
                    var x = v193;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                (function(){
                    var x = v169;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                return v193;
            }));
        })();
        return l41;
    })();
    return (function(){
        (function(){
            return f74 = (function(v194){
                ((v194)["fname"] = "PRINT");
                return v194;
            })((function (v195){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                f73(f71(v195));
                return v195;
            }));
        })();
        return l42;
    })();
})(); 
var l43 = f3("MAKE-STRING-STREAM");
var f75;
(function(){
    (function(){
        return f75 = (function(v196){
            ((v196)["fname"] = "MAKE-STRING-STREAM");
            return v196;
        })((function (v197){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ({car: v197, cdr: 0});
        }));
    })();
    return l43;
})(); 
var l44 = f3("%PEEK-CHAR");
var f76;
(function(){
    (function(){
        return f76 = (function(v198){
            ((v198)["fname"] = "%PEEK-CHAR");
            return v198;
        })((function (v199){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v199;
                    return tmp === v2? v2: tmp.cdr;
                })();
                var y = f43((function(){
                    var tmp = v199;
                    return tmp === v2? v2: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v3: v2) !== v2 ? (function(){
                var string = (function(){
                    var tmp = v199;
                    return tmp === v2? v2: tmp.car;
                })();
                var index = (function(){
                    var tmp = v199;
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
        return f77 = (function(v200){
            ((v200)["fname"] = "%READ-CHAR");
            return v200;
        })((function (v201){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v201;
                    return tmp === v2? v2: tmp.cdr;
                })();
                var y = f43((function(){
                    var tmp = v201;
                    return tmp === v2? v2: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v3: v2) !== v2 ? (function(v202){
                (function(){
                    var x = v201;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.cdr = f12((function(){
                        var tmp = v201;
                        return tmp === v2? v2: tmp.cdr;
                    })()));
                })();
                return v202;
            })((function(){
                var string = (function(){
                    var tmp = v201;
                    return tmp === v2? v2: tmp.car;
                })();
                var index = (function(){
                    var tmp = v201;
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
        return f78 = (function(v203){
            ((v203)["fname"] = "WHITESPACEP");
            return v203;
        })((function (v204){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v205){
                return (v205 !== v2 ? v205 : (function(v206){
                    return (v206 !== v2 ? v206 : f50(v204, 9));
                })(f50(v204, 10)));
            })(f50(v204, 32));
        }));
    })();
    return l46;
})(); 
var l47 = f3("SKIP-WHITESPACES");
var f79;
(function(){
    (function(){
        return f79 = (function(v207){
            ((v207)["fname"] = "SKIP-WHITESPACES");
            return v207;
        })((function (v208){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v209){
                v209 = f76(v208);
                return (function(){
                    while((v209 !== v2 ? f78(v209) : v2) !== v2){
                        f77(v208);
                        v209 = f76(v208);
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
        return f80 = (function(v210){
            ((v210)["fname"] = "TERMINALP");
            return v210;
        })((function (v211){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v212){
                return (v212 !== v2 ? v212 : (function(v213){
                    return (v213 !== v2 ? v213 : (function(v214){
                        return (v214 !== v2 ? v214 : f50(40, v211));
                    })(f50(41, v211)));
                })(f78(v211)));
            })(f1(v211));
        }));
    })();
    return l48;
})(); 
var l49 = f3("READ-UNTIL");
var f81;
(function(){
    (function(){
        return f81 = (function(v215){
            ((v215)["fname"] = "READ-UNTIL");
            return v215;
        })((function (v216,v217){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v218,v219){
                v219 = f76(v216);
                (function(){
                    while((v219 !== v2 ? f17((v217)(v219)) : v2) !== v2){
                        v218 = f67(v218, (function(){
                            var x = v219;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        f77(v216);
                        v219 = f76(v216);
                }})();
                return v218;
            })("",v2);
        }));
    })();
    return l49;
})(); 
var l50 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f82;
(function(){
    (function(){
        return f82 = (function(v220){
            ((v220)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v220;
        })((function (v221){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v222){
                f79(v221);
                v222 = f76(v221);
                return (function(){
                    while((v222 !== v2 ? f50(v222, 59) : v2) !== v2){
                        f81(v221, (function (v223){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f50(v223, 10);
                        }));
                        f79(v221);
                        v222 = f76(v221);
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
        return f83 = (function(v224){
            ((v224)["fname"] = "%READ-LIST");
            return v224;
        })((function (v225){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f82(v225);
            return (function(v226){
                return (f1(v226) !== v2 ? (function(){
                    return (function (){ throw "Unspected EOF"; })();
                })() : (f50(v226, 41) !== v2 ? (function(){
                    f77(v225);
                    return v2;
                })() : (f50(v226, 46) !== v2 ? (function(){
                    f77(v225);
                    return (function(v227){
                        f82(v225);
                        (f50(f77(v225), 41) !== v2 ? v2 : (function(){
                            return (function (){ throw "')' was expected."; })();
                        })());
                        return v227;
                    })(f84(v225));
                })() : (function(){
                    return ({car: f84(v225), cdr: f83(v225)});
                })())));
            })(f76(v225));
        }));
    })();
    return l51;
})(); 
var l52 = f3("READ-STRING");
var f85;
(function(){
    (function(){
        return f85 = (function(v228){
            ((v228)["fname"] = "READ-STRING");
            return v228;
        })((function (v229){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v230,v231){
                v231 = f77(v229);
                (function(){
                    while(f17(f16(v231, 34)) !== v2){
                        (f1(v231) !== v2 ? (function(){
                            return (function (){ throw "Unexpected EOF"; })();
                        })() : v2);
                        (f16(v231, 92) !== v2 ? (function(){
                            return v231 = f77(v229);
                        })() : v2);
                        v230 = f67(v230, (function(){
                            var x = v231;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        v231 = f77(v229);
                }})();
                return v230;
            })("",v2);
        }));
    })();
    return l52;
})(); 
var l57 = f3("READ-SHARP");
var l56 = 43;
var l55 = 92;
var l54 = f3("FUNCTION");
var l53 = 39;
var f86;
(function(){
    (function(){
        return f86 = (function(v232){
            ((v232)["fname"] = "READ-SHARP");
            return v232;
        })((function (v233){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f77(v233);
            return (function(v234){
                return (f16(v234, l53) !== v2 ? (function(){
                    return f33(l54, f84(v233));
                })() : (f16(v234, l55) !== v2 ? (function(){
                    return (function(v235){
                        return (f66(v235, "space") !== v2 ? (function(){
                            return f49(32);
                        })() : (f66(v235, "tab") !== v2 ? (function(){
                            return f49(9);
                        })() : (f66(v235, "newline") !== v2 ? (function(){
                            return f49(10);
                        })() : (function(){
                            return f49((function(){
                                var string = v235;
                                var index = 0;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })());
                        })())));
                    })(f67((function(){
                        var x = f77(v233);
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return String.fromCharCode(x);
                    })(), f81(v233, f80)));
                })() : (f16(v234, l56) !== v2 ? (function(){
                    return (function(v236){
                        return (f66(v236, "common-lisp") !== v2 ? (function(){
                            f84(v233);
                            return f84(v233);
                        })() : (f66(v236, "ecmalisp") !== v2 ? (function(){
                            return f84(v233);
                        })() : (function(){
                            return (function (){ throw "Unknown reader form."; })();
                        })()));
                    })(f81(v233, f80));
                })() : (function(){
                    return (function (){ throw "ECASE expression failed."; })();
                })())));
            })(f77(v233));
        }));
    })();
    return l57;
})(); 
var l58 = f3("*EOF*");
var v237;
(function(){
    (function(){
        return v237 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l58;
})(); 
var l63 = f3("LS-READ");
var l62 = f3("UNQUOTE");
var l61 = f3("UNQUOTE-SPLICING");
var l60 = f3("BACKQUOTE");
var l59 = f3("QUOTE");
var f84;
(function(){
    (function(){
        return f84 = (function(v238){
            ((v238)["fname"] = "LS-READ");
            return v238;
        })((function (v239){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f82(v239);
            return (function(v240){
                return (f1(v240) !== v2 ? (function(){
                    return v237;
                })() : (f50(v240, 40) !== v2 ? (function(){
                    f77(v239);
                    return f83(v239);
                })() : (f50(v240, 39) !== v2 ? (function(){
                    f77(v239);
                    return f33(l59, f84(v239));
                })() : (f50(v240, 96) !== v2 ? (function(){
                    f77(v239);
                    return f33(l60, f84(v239));
                })() : (f50(v240, 34) !== v2 ? (function(){
                    f77(v239);
                    return f85(v239);
                })() : (f50(v240, 44) !== v2 ? (function(){
                    f77(v239);
                    return (f16(f76(v239), 64) !== v2 ? (function(){
                        f77(v239);
                        return f33(l61, f84(v239));
                    })() : f33(l62, f84(v239)));
                })() : (f50(v240, 35) !== v2 ? (function(){
                    return f86(v239);
                })() : (function(){
                    return (function(v241){
                        return (f64(f61, v241) !== v2 ? f63(v241) : f3((function(){
                            var x = v241;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })()));
                    })(f81(v239, f80));
                })())))))));
            })(f76(v239));
        }));
    })();
    return l63;
})(); 
var l64 = f3("LS-READ-FROM-STRING");
var f87;
(function(){
    (function(){
        return f87 = (function(v242){
            ((v242)["fname"] = "LS-READ-FROM-STRING");
            return v242;
        })((function (v243){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f84(f75(v243));
        }));
    })();
    return l64;
})(); 
var l66 = f3("*COMPILATION-UNIT-CHECKS*");
var l65 = f3("NIL");
var v244;
(function(){
    (function(){
        return v244 = l65;
    })();
    return l66;
})(); 
var l67 = f3("MAKE-BINDING");
var f88;
(function(){
    (function(){
        return f88 = (function(v245){
            ((v245)["fname"] = "MAKE-BINDING");
            return v245;
        })((function (v246,v247,v248,v249){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return f33(v246, v247, v248, v249);
        }));
    })();
    return l67;
})(); 
var l68 = f3("BINDING-NAME");
var f89;
(function(){
    (function(){
        return f89 = (function(v250){
            ((v250)["fname"] = "BINDING-NAME");
            return v250;
        })((function (v251){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f29(v251);
        }));
    })();
    return l68;
})(); 
var l69 = f3("BINDING-TYPE");
var f90;
(function(){
    (function(){
        return f90 = (function(v252){
            ((v252)["fname"] = "BINDING-TYPE");
            return v252;
        })((function (v253){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f30(v253);
        }));
    })();
    return l69;
})(); 
var l70 = f3("BINDING-TRANSLATION");
var f91;
(function(){
    (function(){
        return f91 = (function(v254){
            ((v254)["fname"] = "BINDING-TRANSLATION");
            return v254;
        })((function (v255){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f31(v255);
        }));
    })();
    return l70;
})(); 
var l71 = f3("BINDING-DECLARED");
var f92;
(function(){
    (function(){
        return f92 = (function(v256){
            ((v256)["fname"] = "BINDING-DECLARED");
            return v256;
        })((function (v257){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (v257 !== v2 ? f32(v257) : v2);
        }));
    })();
    return l71;
})(); 
var l72 = f3("MARK-BINDING-AS-DECLARED");
var f93;
(function(){
    (function(){
        return f93 = (function(v258){
            ((v258)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v258;
        })((function (v259){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = f27(v259);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v3);
            })();
        }));
    })();
    return l72;
})(); 
var l73 = f3("MAKE-LEXENV");
var f94;
(function(){
    (function(){
        return f94 = (function(v260){
            ((v260)["fname"] = "MAKE-LEXENV");
            return v260;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return f33(v2, v2, v2);
        }));
    })();
    return l73;
})(); 
var l74 = f3("COPY-LEXENV");
var f95;
(function(){
    (function(){
        return f95 = (function(v261){
            ((v261)["fname"] = "COPY-LEXENV");
            return v261;
        })((function (v262){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f47(v262);
        }));
    })();
    return l74;
})(); 
var l78 = f3("PUSH-TO-LEXENV");
var l77 = f3("BLOCK");
var l76 = f3("FUNCTION");
var l75 = f3("VARIABLE");
var f96;
(function(){
    (function(){
        return f96 = (function(v263){
            ((v263)["fname"] = "PUSH-TO-LEXENV");
            return v263;
        })((function (v264,v265,v266){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(v267){
                return (f16(v267, l75) !== v2 ? (function(){
                    return (function(){
                        var x = v265;
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v264, cdr: (function(){
                            var tmp = v265;
                            return tmp === v2? v2: tmp.car;
                        })()}));
                    })();
                })() : (f16(v267, l76) !== v2 ? (function(){
                    return (function(){
                        var x = (function(){
                            var tmp = v265;
                            return tmp === v2? v2: tmp.cdr;
                        })();
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v264, cdr: f23(v265)}));
                    })();
                })() : (f16(v267, l77) !== v2 ? (function(){
                    return (function(){
                        var x = f25(v265);
                        if (typeof x != 'object')
                            throw 'The value ' + x + ' is not a type object.';
                        return (x.car = ({car: v264, cdr: f26(v265)}));
                    })();
                })() : (function(){
                    return (function (){ throw "ECASE expression failed."; })();
                })())));
            })(v266);
        }));
    })();
    return l78;
})(); 
var l79 = f3("EXTEND-LEXENV");
var f97;
(function(){
    (function(){
        return f97 = (function(v268){
            ((v268)["fname"] = "EXTEND-LEXENV");
            return v268;
        })((function (v269,v270,v271){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(v272){
                f96(v269, v272, v271);
                return v272;
            })(f95(v270));
        }));
    })();
    return l79;
})(); 
var l83 = f3("LOOKUP-IN-LEXENV");
var l82 = f3("BLOCK");
var l81 = f3("FUNCTION");
var l80 = f3("VARIABLE");
var f98;
(function(){
    (function(){
        return f98 = (function(v273){
            ((v273)["fname"] = "LOOKUP-IN-LEXENV");
            return v273;
        })((function (v274,v275,v276){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f65(v274, (function(v277){
                return (f16(v277, l80) !== v2 ? (function(){
                    return f29(v275);
                })() : (f16(v277, l81) !== v2 ? (function(){
                    return f30(v275);
                })() : (f16(v277, l82) !== v2 ? (function(){
                    return f31(v275);
                })() : (function(){
                    return (function (){ throw "ECASE expression failed."; })();
                })())));
            })(v276));
        }));
    })();
    return l83;
})(); 
var l84 = f3("*ENVIRONMENT*");
var v278;
(function(){
    (function(){
        return v278 = f94();
    })();
    return l84;
})(); 
var l85 = f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS");
var f99;
(function(){
    (function(){
        return f99 = (function(v279){
            ((v279)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
            return v279;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(v280,v281){
                return v278 = f33(v280, v281, f31(v278));
            })(f29(v278),f30(v278));
        }));
    })();
    return l85;
})(); 
var l86 = f3("*VARIABLE-COUNTER*");
var v282;
(function(){
    (function(){
        return v282 = 0;
    })();
    return l86;
})(); 
var l87 = f3("GVARNAME");
var f100;
(function(){
    (function(){
        return f100 = (function(v283){
            ((v283)["fname"] = "GVARNAME");
            return v283;
        })((function (v284){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f67("v", f6(v282 = (function(){
                var x = v282;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()));
        }));
    })();
    return l87;
})(); 
var l93 = f3("LOOKUP-VARIABLE");
var l92 = f3("VARIABLE");
var l91 = f3("VARIABLE");
var l90 = f3("VARIABLE");
var l89 = f3("VARIABLE");
var l88 = f3("VARIABLE");
var f101;
(function(){
    (function(){
        return f101 = (function(v285){
            ((v285)["fname"] = "LOOKUP-VARIABLE");
            return v285;
        })((function (v286,v287){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v288){
                return (v288 !== v2 ? v288 : (function(v289){
                    return (v289 !== v2 ? v289 : (function(v290,v291){
                        f96(v291, v278, l88);
                        v244 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f98(v286, v278, l89) !== v2 ? v2 : (function(){
                                return (function (){ throw f67("Undefined variable `", v290, "'"); })();
                            })());
                        }), cdr: v244});
                        return v291;
                    })((v286).name,f88(v286, l90, f100(v286), v2)));
                })(f98(v286, v278, l91)));
            })(f98(v286, v287, l92));
        }));
    })();
    return l93;
})(); 
var l94 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f102;
(function(){
    (function(){
        return f102 = (function(v292){
            ((v292)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v292;
        })((function (v293,v294){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f91(f101(v293, v294));
        }));
    })();
    return l94;
})(); 
var l97 = f3("EXTEND-LOCAL-ENV");
var l96 = f3("VARIABLE");
var l95 = f3("VARIABLE");
var f103;
(function(){
    (function(){
        return f103 = (function(v295){
            ((v295)["fname"] = "EXTEND-LOCAL-ENV");
            return v295;
        })((function (v296,v297){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v298){
                return (function(v299,v300){
                    (function(){
                        while(v299 !== v2){
                            v300 = (function(){
                                var tmp = v299;
                                return tmp === v2? v2: tmp.car;
                            })();
                            (function(v301){
                                return f96(v301, v298, l95);
                            })(f88(v300, l96, f100(v300), v3));
                            v299 = (function(){
                                var tmp = v299;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                    }})();
                    return v298;
                })(v296,v2);
            })(f95(v297));
        }));
    })();
    return l97;
})(); 
var l98 = f3("*FUNCTION-COUNTER*");
var v302;
(function(){
    (function(){
        return v302 = 0;
    })();
    return l98;
})(); 
var l104 = f3("LOOKUP-FUNCTION");
var l103 = f3("FUNCTION");
var l102 = f3("FUNCTION");
var l101 = f3("FUNCTION");
var l100 = f3("FUNCTION");
var l99 = f3("FUNCTION");
var f104;
(function(){
    (function(){
        return f104 = (function(v303){
            ((v303)["fname"] = "LOOKUP-FUNCTION");
            return v303;
        })((function (v304,v305){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v306){
                return (v306 !== v2 ? v306 : (function(v307){
                    return (v307 !== v2 ? v307 : (function(v308,v309){
                        f96(v309, v278, l99);
                        v244 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f92(f98(v304, v278, l100)) !== v2 ? v2 : (function(){
                                return (function (){ throw f67("Undefined function `", v308, "'"); })();
                            })());
                        }), cdr: v244});
                        return v309;
                    })((v304).name,f88(v304, l101, f67("f", f6(v302 = (function(){
                        var x = v302;
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })())), v2)));
                })(f98(v304, v278, l102)));
            })(f98(v304, v305, l103));
        }));
    })();
    return l104;
})(); 
var l105 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f105;
(function(){
    (function(){
        return f105 = (function(v310){
            ((v310)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v310;
        })((function (v311,v312){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f91(f104(v311, v312));
        }));
    })();
    return l105;
})(); 
var l106 = f3("*TOPLEVEL-COMPILATIONS*");
var v313;
(function(){
    (function(){
        return v313 = v2;
    })();
    return l106;
})(); 
var l107 = f3("%COMPILE-DEFVAR");
var f106;
(function(){
    (function(){
        return f106 = (function(v314){
            ((v314)["fname"] = "%COMPILE-DEFVAR");
            return v314;
        })((function (v315){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v316){
                f93(v316);
                return v313 = ({car: f67("var ", f91(v316)), cdr: v313});
            })(f101(v315, v278));
        }));
    })();
    return l107;
})(); 
var l108 = f3("%COMPILE-DEFUN");
var f107;
(function(){
    (function(){
        return f107 = (function(v317){
            ((v317)["fname"] = "%COMPILE-DEFUN");
            return v317;
        })((function (v318){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v319){
                f93(v319);
                return v313 = ({car: f67("var ", f91(v319)), cdr: v313});
            })(f104(v318, v278));
        }));
    })();
    return l108;
})(); 
var l111 = f3("%COMPILE-DEFMACRO");
var l110 = f3("FUNCTION");
var l109 = f3("MACRO");
var f108;
(function(){
    (function(){
        return f108 = (function(v320){
            ((v320)["fname"] = "%COMPILE-DEFMACRO");
            return v320;
        })((function (v321,v322){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f96(f88(v321, l109, v322, v3), v278, l110);
        }));
    })();
    return l111;
})(); 
var l112 = f3("*COMPILATIONS*");
var v323;
(function(){
    (function(){
        return v323 = v2;
    })();
    return l112;
})(); 
var l113 = f3("LS-COMPILE-BLOCK");
var f109;
(function(){
    (function(){
        return f109 = (function(v324){
            ((v324)["fname"] = "LS-COMPILE-BLOCK");
            return v324;
        })((function (v325,v326){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f69(f59((function (v327){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v328){
                    return (v328 !== v2 ? v328 : (((typeof(v327) == "string")?v3: v2) !== v2 ? f14(f43(v327)) : v2));
                })(f1(v327));
            }), f45((function (v329){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f110(v329, v326);
            }), v325)), f67(";", v169));
        }));
    })();
    return l113;
})(); 
var l114 = f3("IF");
v323 = ({car: f33(l114, (function (v330,v331,v332,v333){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f67("(", f110(v331, v330), " !== ", f110(v2), " ? ", f110(v332, v330), " : ", f110(v333, v330), ")");
})), cdr: v323}); 
var l116 = f3("*LAMBDA-LIST-KEYWORDS*");
var l115 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v334;
(function(){
    (function(){
        return v334 = l115;
    })();
    return l116;
})(); 
var l117 = f3("LIST-UNTIL-KEYWORD");
var f111;
(function(){
    (function(){
        return f111 = (function(v335){
            ((v335)["fname"] = "LIST-UNTIL-KEYWORD");
            return v335;
        })((function (v336){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(v337){
                return (v337 !== v2 ? v337 : f57((function(){
                    var tmp = v336;
                    return tmp === v2? v2: tmp.car;
                })(), v334));
            })(f1(v336)) !== v2 ? v2 : ({car: (function(){
                var tmp = v336;
                return tmp === v2? v2: tmp.car;
            })(), cdr: f111((function(){
                var tmp = v336;
                return tmp === v2? v2: tmp.cdr;
            })())}));
        }));
    })();
    return l117;
})(); 
var l118 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f112;
(function(){
    (function(){
        return f112 = (function(v338){
            ((v338)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v338;
        })((function (v339){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f111(v339);
        }));
    })();
    return l118;
})(); 
var l120 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l119 = f3("&OPTIONAL");
var f113;
(function(){
    (function(){
        return f113 = (function(v340){
            ((v340)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v340;
        })((function (v341){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f45(f35, f111((function(){
                var tmp = f57(l119, v341);
                return tmp === v2? v2: tmp.cdr;
            })()));
        }));
    })();
    return l120;
})(); 
var l121 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f114;
(function(){
    (function(){
        return f114 = (function(v342){
            ((v342)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v342;
        })((function (v343){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f45(f20, f113(v343));
        }));
    })();
    return l121;
})(); 
var l123 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l122 = f3("&REST");
var f115;
(function(){
    (function(){
        return f115 = (function(v344){
            ((v344)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v344;
        })((function (v345){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v346){
                ((function(){
                    var tmp = v346;
                    return tmp === v2? v2: tmp.cdr;
                })() !== v2 ? (function(){
                    return (function (){ throw "Bad lambda-list"; })();
                })() : v2);
                return (function(){
                    var tmp = v346;
                    return tmp === v2? v2: tmp.car;
                })();
            })(f111((function(){
                var tmp = f57(l122, v345);
                return tmp === v2? v2: tmp.cdr;
            })()));
        }));
    })();
    return l123;
})(); 
var l124 = f3("LAMBDA");
v323 = ({car: f33(l124, (function (v348,v349){
    if (arguments.length < 2) throw 'too few arguments';
    var v347= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v347 = {car: arguments[i], cdr: v347};
    return (function(v350,v351,v352){
        return (function(v353,v354,v355){
            return f67("(function (", f68(f45((function (v356){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f102(v356, v355);
            }), f39(v350, v351)), ","), "){", v169, f70((v350 !== v2 ? f67("if (arguments.length < ", f6(v353), ") throw 'too few arguments';", v169) : ""), (f17(v352) !== v2 ? f67("if (arguments.length > ", f6((function(){
                var x = v353;
                var y = v354;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()), ") throw 'too many arguments';", v169) : ""), (v351 !== v2 ? f67("switch(arguments.length){", v169, (function(v357,v358,v359){
                return (function(){
                    (function(){
                        while(((function(){
                            var x = v359;
                            var y = v354;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2){
                            (function(v360){
                                v358 = ({car: f67("case ", f6((function(){
                                    var x = v359;
                                    var y = v353;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), ":", v169, f102((function(){
                                    var tmp = v360;
                                    return tmp === v2? v2: tmp.car;
                                })(), v355), "=", f110(f23(v360), v355), ";", v169), cdr: v358});
                                return v359 = (function(){
                                    var x = v359;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })();
                            })(f54(v359, v357));
                    }})();
                    v358 = ({car: f67("default: break;", v169), cdr: v358});
                    return f68(f41(v358));
                })();
            })(f113(v349),v2,0), "}", v169) : ""), (v352 !== v2 ? (function(v361){
                return f67("var ", v361, "= ", f110(v2), ";", v169, "for (var i = arguments.length-1; i>=", f6((function(){
                    var x = v353;
                    var y = v354;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()), "; i--)", v169, f70(v361, " = ", "{car: arguments[i], cdr: "), v361, "};", v169);
            })(f102(v352, v355)) : ""), f67(f109(f56(v347), v355), "return ", f110((function(){
                var tmp = f55(v347);
                return tmp === v2? v2: tmp.car;
            })(), v355), ";")), v169, "})");
        })(f43(v350),f43(v351),f103(f39(f35(v352), v350, v351), v348));
    })(f112(v349),f114(v349),f115(v349));
})), cdr: v323}); 
var l125 = f3("FSETQ");
v323 = ({car: f33(l125, (function (v362,v363,v364){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f67(f105(v363, v362), " = ", f110(v364, v362));
})), cdr: v323}); 
var l126 = f3("SETQ");
v323 = ({car: f33(l126, (function (v365,v366,v367){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f67(f102(v366, v365), " = ", f110(v367, v365));
})), cdr: v323}); 
var l127 = f3("ESCAPE-STRING");
var f72;
(function(){
    (function(){
        return f72 = (function(v368){
            ((v368)["fname"] = "ESCAPE-STRING");
            return v368;
        })((function (v369){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v370,v371,v372){
                (function(){
                    while(((function(){
                        var x = v371;
                        var y = v372;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?v3: v2) !== v2){
                        (function(v373){
                            ((function(v374){
                                return (v374 !== v2 ? v374 : f50(v373, 92));
                            })(f50(v373, 34)) !== v2 ? (function(){
                                return v370 = f67(v370, "\\");
                            })() : v2);
                            (f50(v373, 10) !== v2 ? (function(){
                                v370 = f67(v370, "\\");
                                return v373 = 110;
                            })() : v2);
                            return v370 = f67(v370, (function(){
                                var x = v373;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })());
                        })((function(){
                            var string = v369;
                            var index = v371;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                        v371 = (function(){
                            var x = v371;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })();
                }})();
                return v370;
            })("",0,f43(v369));
        }));
    })();
    return l127;
})(); 
var l129 = f3("LITERAL->JS");
var l128 = f3("INTERN");
var f116;
(function(){
    (function(){
        return f116 = (function(v375){
            ((v375)["fname"] = "LITERAL->JS");
            return v375;
        })((function (v376){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f51(v376) !== v2 ? (function(){
                return f6(v376);
            })() : (((typeof(v376) == "string")?v3: v2) !== v2 ? (function(){
                return f67("\"", f72(v376), "\"");
            })() : (((function(){
                var tmp = v376;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f110(f39(f33(l128), f33(f72((v376).name))), v278);
            })() : (((function(){
                var tmp = v376;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f67("{car: ", f116((function(){
                    var tmp = v376;
                    return tmp === v2? v2: tmp.car;
                })()), ", cdr: ", f116((function(){
                    var tmp = v376;
                    return tmp === v2? v2: tmp.cdr;
                })()), "}");
            })() : v2))));
        }));
    })();
    return l129;
})(); 
var l130 = f3("*LITERAL-COUNTER*");
var v377;
(function(){
    (function(){
        return v377 = 0;
    })();
    return l130;
})(); 
var l131 = f3("LITERAL");
var f117;
(function(){
    (function(){
        return f117 = (function(v378){
            ((v378)["fname"] = "LITERAL");
            return v378;
        })((function (v379){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v380){
                v313 = ({car: f67("var ", v380, " = ", f116(v379)), cdr: v313});
                return v380;
            })(f67("l", f6(v377 = (function(){
                var x = v377;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })())));
        }));
    })();
    return l131;
})(); 
var l132 = f3("QUOTE");
v323 = ({car: f33(l132, (function (v381,v382){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return f117(v382);
})), cdr: v323}); 
var l133 = f3("WHILE");
v323 = ({car: f33(l133, (function (v384,v385){
    if (arguments.length < 2) throw 'too few arguments';
    var v383= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v383 = {car: arguments[i], cdr: v383};
    return f67("(function(){", v169, f70("while(", f110(v385, v384), " !== ", f110(v2), "){", v169, f70(f109(v383, v384))), "}})()");
})), cdr: v323}); 
var l135 = f3("LAMBDA");
var l134 = f3("FUNCTION");
v323 = ({car: f33(l134, (function (v386,v387){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return ((f36(v387) !== v2 ? (((function(){
        var tmp = v387;
        return tmp === v2? v2: tmp.car;
    })() === l135)?v3: v2) : v2) !== v2 ? (function(){
        return f110(v387, v386);
    })() : (((function(){
        var tmp = v387;
        return (typeof tmp == 'object' && 'name' in tmp);
    })()?v3: v2) !== v2 ? (function(){
        return f105(v387, v386);
    })() : v2));
})), cdr: v323}); 
var l137 = f3("PROGN");
var l136 = f3("EVAL-WHEN-COMPILE");
v323 = ({car: f33(l136, (function (v389){
    if (arguments.length < 1) throw 'too few arguments';
    var v388= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v388 = {car: arguments[i], cdr: v388};
    f118(({car: l137, cdr: v388}));
    return "";
})), cdr: v323}); 
var l138 = f3("PROGN");
v323 = ({car: f33(l138, (function (v391){
    if (arguments.length < 1) throw 'too few arguments';
    var v390= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v390 = {car: arguments[i], cdr: v390};
    return f67("(function(){", v169, f70(f109(f56(v390), v391), "return ", f110((function(){
        var tmp = f55(v390);
        return tmp === v2? v2: tmp.car;
    })(), v391), ";", v169), "})()");
})), cdr: v323}); 
var l139 = f3("LET");
v323 = ({car: f33(l139, (function (v393,v394){
    if (arguments.length < 2) throw 'too few arguments';
    var v392= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v392 = {car: arguments[i], cdr: v392};
    return (function(v395){
        return (function(v396,v397){
            return (function(v398){
                return f67("(function(", f68(f45((function (v399){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f102(v399, v398);
                }), v396), ","), "){", v169, f70(f109(f56(v392), v398), "return ", f110((function(){
                    var tmp = f55(v392);
                    return tmp === v2? v2: tmp.car;
                })(), v398), ";", v169), "})(", f68(f45((function (v400){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f110(v400, v393);
                }), v397), ","), ")");
            })(f103(v396, v393));
        })(f45(f29, v395),f45(f30, v395));
    })(f45(f35, v394));
})), cdr: v323}); 
var l140 = f3("*BLOCK-COUNTER*");
var v401;
(function(){
    (function(){
        return v401 = 0;
    })();
    return l140;
})(); 
var l144 = f3("BLOCK");
var l143 = f3("BLOCK");
var l142 = f3("PROGN");
var l141 = f3("BLOCK");
v323 = ({car: f33(l141, (function (v403,v404){
    if (arguments.length < 2) throw 'too few arguments';
    var v402= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v402 = {car: arguments[i], cdr: v402};
    return (function(v405){
        return (function(v406){
            return f67("(function(){", v169, f70("try {", v169, f70("return ", f110(f39(f33(l142), v402), f97(v406, v403, l143))), ";", v169, "}", v169, "catch (cf){", v169, "    if (cf.type == 'block' && cf.id == ", v405, ")", v169, "        return cf.value;", v169, "    else", v169, "        throw cf;", v169, "}", v169), "})()", v169);
        })(f88(v404, l144, v405, v3));
    })(f6(v401 = (function(){
        var x = v401;
        var y = 1;
        if (typeof x != 'number')
            throw 'The value ' + x + ' is not a type number.';
        if (typeof y != 'number')
            throw 'The value ' + y + ' is not a type number.';
        return x+y;
    })()));
})), cdr: v323}); 
var l146 = f3("BLOCK");
var l145 = f3("RETURN-FROM");
v323 = ({car: f33(l145, (function (v407,v408,v409){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v409=v2;
    default: break;
    }
    return (function(v410){
        return (v410 !== v2 ? f67("(function(){ throw ({", "type: 'block', ", "id: ", f91(v410), ", ", "value: ", f110(v409, v407), ", ", "message: 'Return from unknown block ", (v408).name, ".'", "})})()") : (function (){ throw f67("Unknown block `", (v408).name, "'."); })());
    })(f98(v408, v407, l146));
})), cdr: v323}); 
var l155 = f3("BACKQUOTE-EXPAND-1");
var l154 = f3("LIST");
var l153 = f3("UNQUOTE-SPLICING");
var l152 = f3("LIST");
var l151 = f3("UNQUOTE");
var l150 = f3("APPEND");
var l149 = f3("BACKQUOTE");
var l148 = f3("UNQUOTE");
var l147 = f3("QUOTE");
var f119;
(function(){
    (function(){
        return f119 = (function(v411){
            ((v411)["fname"] = "BACKQUOTE-EXPAND-1");
            return v411;
        })((function (v412){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v412;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f33(l147, v412);
            })() : (f34(v412) !== v2 ? (function(){
                return v412;
            })() : ((((function(){
                var tmp = v412;
                return tmp === v2? v2: tmp.car;
            })() === l148)?v3: v2) !== v2 ? (function(){
                return (function(){
                    var tmp = v412;
                    return tmp === v2? v2: tmp.car;
                })();
            })() : ((((function(){
                var tmp = v412;
                return tmp === v2? v2: tmp.car;
            })() === l149)?v3: v2) !== v2 ? (function(){
                return f119(f119(f23(v412)));
            })() : (function(){
                return ({car: l150, cdr: f45((function (v413){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return ((f36(v413) !== v2 ? (((function(){
                        var tmp = v413;
                        return tmp === v2? v2: tmp.car;
                    })() === l151)?v3: v2) : v2) !== v2 ? (function(){
                        return f33(l152, f23(v413));
                    })() : ((f36(v413) !== v2 ? (((function(){
                        var tmp = v413;
                        return tmp === v2? v2: tmp.car;
                    })() === l153)?v3: v2) : v2) !== v2 ? (function(){
                        return f23(v413);
                    })() : (function(){
                        return f33(l154, f119(v413));
                    })()));
                }), v412)});
            })()))));
        }));
    })();
    return l155;
})(); 
var l157 = f3("BACKQUOTE-EXPAND");
var l156 = f3("BACKQUOTE");
var f120;
(function(){
    (function(){
        return f120 = (function(v414){
            ((v414)["fname"] = "BACKQUOTE-EXPAND");
            return v414;
        })((function (v415){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((f36(v415) !== v2 ? (((function(){
                var tmp = v415;
                return tmp === v2? v2: tmp.car;
            })() === l156)?v3: v2) : v2) !== v2 ? f119(f23(v415)) : v415);
        }));
    })();
    return l157;
})(); 
var l158 = f3("BACKQUOTE");
v323 = ({car: f33(l158, (function (v416,v417){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return f110(f119(v417), v416);
})), cdr: v323}); 
var l159 = f3("COMPILE-BOOL");
var f121;
(function(){
    (function(){
        return f121 = (function(v418){
            ((v418)["fname"] = "COMPILE-BOOL");
            return v418;
        })((function (v419){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f67("(", v419, "?", f110(v3), ": ", f110(v2), ")");
        }));
    })();
    return l159;
})(); 
var l160 = f3("NUM-OP-NUM");
var f122;
(function(){
    (function(){
        return f122 = (function(v420){
            ((v420)["fname"] = "NUM-OP-NUM");
            return v420;
        })((function (v421,v422,v423){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f67("(function(){", v169, f70(f67("var ", "x", " = ", v421, ";", v169), f67("var ", "y", " = ", v423, ";", v169), f67("if (typeof ", "x", " != '", "number", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v169)), f67("if (typeof ", "y", " != '", "number", "')", v169, f70("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v169)), f67("return ", (function(){
                return f67("x", v422, "y");
            })(), ";", v169)), "})()");
        }));
    })();
    return l160;
})(); 
var l161 = f3("+");
v323 = ({car: f33(l161, (function (v424,v425,v426){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v427,v428){
        return f122(v427, "+", v428);
    })(f110(v425, v424),f110(v426, v424));
})), cdr: v323}); 
var l162 = f3("-");
v323 = ({car: f33(l162, (function (v429,v430,v431){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v432,v433){
        return f122(v432, "-", v433);
    })(f110(v430, v429),f110(v431, v429));
})), cdr: v323}); 
var l163 = f3("*");
v323 = ({car: f33(l163, (function (v434,v435,v436){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v437,v438){
        return f122(v437, "*", v438);
    })(f110(v435, v434),f110(v436, v434));
})), cdr: v323}); 
var l164 = f3("/");
v323 = ({car: f33(l164, (function (v439,v440,v441){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v442,v443){
        return f122(v442, "/", v443);
    })(f110(v440, v439),f110(v441, v439));
})), cdr: v323}); 
var l165 = f3("MOD");
v323 = ({car: f33(l165, (function (v444,v445,v446){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v447,v448){
        return f122(v447, "%", v448);
    })(f110(v445, v444),f110(v446, v444));
})), cdr: v323}); 
var l166 = f3("<");
v323 = ({car: f33(l166, (function (v449,v450,v451){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v452,v453){
        return f121(f122(v452, "<", v453));
    })(f110(v450, v449),f110(v451, v449));
})), cdr: v323}); 
var l167 = f3(">");
v323 = ({car: f33(l167, (function (v454,v455,v456){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v457,v458){
        return f121(f122(v457, ">", v458));
    })(f110(v455, v454),f110(v456, v454));
})), cdr: v323}); 
var l168 = f3("=");
v323 = ({car: f33(l168, (function (v459,v460,v461){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v462,v463){
        return f121(f122(v462, "==", v463));
    })(f110(v460, v459),f110(v461, v459));
})), cdr: v323}); 
var l169 = f3("<=");
v323 = ({car: f33(l169, (function (v464,v465,v466){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v467,v468){
        return f121(f122(v467, "<=", v468));
    })(f110(v465, v464),f110(v466, v464));
})), cdr: v323}); 
var l170 = f3(">=");
v323 = ({car: f33(l170, (function (v469,v470,v471){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v472,v473){
        return f121(f122(v472, ">=", v473));
    })(f110(v470, v469),f110(v471, v469));
})), cdr: v323}); 
var l171 = f3("NUMBERP");
v323 = ({car: f33(l171, (function (v474,v475){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v476){
        return f121(f67("(typeof (", v476, ") == \"number\")"));
    })(f110(v475, v474));
})), cdr: v323}); 
var l172 = f3("FLOOR");
v323 = ({car: f33(l172, (function (v477,v478){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v479){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v479, ";", v169), f67("if (typeof ", "x", " != '", "number", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v169)), f67("return ", (function(){
            return "Math.floor(x)";
        })(), ";", v169)), "})()");
    })(f110(v478, v477));
})), cdr: v323}); 
var l173 = f3("CONS");
v323 = ({car: f33(l173, (function (v480,v481,v482){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v483,v484){
        return f67("({car: ", v483, ", cdr: ", v484, "})");
    })(f110(v481, v480),f110(v482, v480));
})), cdr: v323}); 
var l174 = f3("CONSP");
v323 = ({car: f33(l174, (function (v485,v486){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v487){
        return f121(f67("(function(){", v169, f70("var tmp = ", v487, ";", v169, "return (typeof tmp == 'object' && 'car' in tmp);", v169), "})()"));
    })(f110(v486, v485));
})), cdr: v323}); 
var l175 = f3("CAR");
v323 = ({car: f33(l175, (function (v488,v489){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v490){
        return f67("(function(){", v169, f70("var tmp = ", v490, ";", v169, "return tmp === ", f110(v2), "? ", f110(v2), ": tmp.car;", v169), "})()");
    })(f110(v489, v488));
})), cdr: v323}); 
var l176 = f3("CDR");
v323 = ({car: f33(l176, (function (v491,v492){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v493){
        return f67("(function(){", v169, f70("var tmp = ", v493, ";", v169, "return tmp === ", f110(v2), "? ", f110(v2), ": tmp.cdr;", v169), "})()");
    })(f110(v492, v491));
})), cdr: v323}); 
var l177 = f3("SETCAR");
v323 = ({car: f33(l177, (function (v494,v495,v496){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v497,v498){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v497, ";", v169), f67("if (typeof ", "x", " != '", "object", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v169)), f67("return ", (function(){
            return f67("(x.car = ", v498, ")");
        })(), ";", v169)), "})()");
    })(f110(v495, v494),f110(v496, v494));
})), cdr: v323}); 
var l178 = f3("SETCDR");
v323 = ({car: f33(l178, (function (v499,v500,v501){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v502,v503){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v502, ";", v169), f67("if (typeof ", "x", " != '", "object", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v169)), f67("return ", (function(){
            return f67("(x.cdr = ", v503, ")");
        })(), ";", v169)), "})()");
    })(f110(v500, v499),f110(v501, v499));
})), cdr: v323}); 
var l179 = f3("SYMBOLP");
v323 = ({car: f33(l179, (function (v504,v505){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v506){
        return f121(f67("(function(){", v169, f70("var tmp = ", v506, ";", v169, "return (typeof tmp == 'object' && 'name' in tmp);", v169), "})()"));
    })(f110(v505, v504));
})), cdr: v323}); 
var l180 = f3("MAKE-SYMBOL");
v323 = ({car: f33(l180, (function (v507,v508){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v509){
        return f67("(function(){", v169, f70(f67("var ", "name", " = ", v509, ";", v169), f67("if (typeof ", "name", " != '", "string", "')", v169, f70("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v169)), f67("return ", (function(){
            return "({name: name})";
        })(), ";", v169)), "})()");
    })(f110(v508, v507));
})), cdr: v323}); 
var l181 = f3("SYMBOL-NAME");
v323 = ({car: f33(l181, (function (v510,v511){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v512){
        return f67("(", v512, ").name");
    })(f110(v511, v510));
})), cdr: v323}); 
var l182 = f3("EQ");
v323 = ({car: f33(l182, (function (v513,v514,v515){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v516,v517){
        return f121(f67("(", v516, " === ", v517, ")"));
    })(f110(v514, v513),f110(v515, v513));
})), cdr: v323}); 
var l183 = f3("EQUAL");
v323 = ({car: f33(l183, (function (v518,v519,v520){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v521,v522){
        return f121(f67("(", v521, " == ", v522, ")"));
    })(f110(v519, v518),f110(v520, v518));
})), cdr: v323}); 
var l184 = f3("STRING");
v323 = ({car: f33(l184, (function (v523,v524){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v525){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v525, ";", v169), f67("if (typeof ", "x", " != '", "number", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v169)), f67("return ", (function(){
            return "String.fromCharCode(x)";
        })(), ";", v169)), "})()");
    })(f110(v524, v523));
})), cdr: v323}); 
var l185 = f3("STRINGP");
v323 = ({car: f33(l185, (function (v526,v527){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v528){
        return f121(f67("(typeof(", v528, ") == \"string\")"));
    })(f110(v527, v526));
})), cdr: v323}); 
var l186 = f3("STRING-UPCASE");
v323 = ({car: f33(l186, (function (v529,v530){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v531){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v531, ";", v169), f67("if (typeof ", "x", " != '", "string", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v169)), f67("return ", (function(){
            return "x.toUpperCase()";
        })(), ";", v169)), "})()");
    })(f110(v530, v529));
})), cdr: v323}); 
var l187 = f3("STRING-LENGTH");
v323 = ({car: f33(l187, (function (v532,v533){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v534){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v534, ";", v169), f67("if (typeof ", "x", " != '", "string", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v169)), f67("return ", (function(){
            return "x.length";
        })(), ";", v169)), "})()");
    })(f110(v533, v532));
})), cdr: v323}); 
var l188 = f3("SLICE");
v323 = ({car: f33(l188, (function (v535,v536,v537,v538){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    switch(arguments.length){
    case 3:
    v538=v2;
    default: break;
    }
    return f67("(function(){", v169, f70("var str = ", f110(v536, v535), ";", v169, "var a = ", f110(v537, v535), ";", v169, "var b;", v169, (v538 !== v2 ? f67("b = ", f110(v538, v535), ";", v169) : ""), "return str.slice(a,b);", v169), "})()");
})), cdr: v323}); 
var l189 = f3("CHAR");
v323 = ({car: f33(l189, (function (v539,v540,v541){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v542,v543){
        return f67("(function(){", v169, f70(f67("var ", "string", " = ", v542, ";", v169), f67("var ", "index", " = ", v543, ";", v169), f67("if (typeof ", "string", " != '", "string", "')", v169, f70("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v169)), f67("if (typeof ", "index", " != '", "number", "')", v169, f70("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v169)), f67("return ", (function(){
            return "string.charCodeAt(index)";
        })(), ";", v169)), "})()");
    })(f110(v540, v539),f110(v541, v539));
})), cdr: v323}); 
var l190 = f3("CONCAT-TWO");
v323 = ({car: f33(l190, (function (v544,v545,v546){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v547,v548){
        return f67("(function(){", v169, f70(f67("var ", "string1", " = ", v547, ";", v169), f67("var ", "string2", " = ", v548, ";", v169), f67("if (typeof ", "string1", " != '", "string", "')", v169, f70("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v169)), f67("if (typeof ", "string2", " != '", "string", "')", v169, f70("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v169)), f67("return ", (function(){
            return "string1.concat(string2)";
        })(), ";", v169)), "})()");
    })(f110(v545, v544),f110(v546, v544));
})), cdr: v323}); 
var l191 = f3("FUNCALL");
v323 = ({car: f33(l191, (function (v550,v551){
    if (arguments.length < 2) throw 'too few arguments';
    var v549= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v549 = {car: arguments[i], cdr: v549};
    return f67("(", f110(v551, v550), ")(", f68(f45((function (v552){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return f110(v552, v550);
    }), v549), ", "), ")");
})), cdr: v323}); 
var l192 = f3("APPLY");
v323 = ({car: f33(l192, (function (v554,v555){
    if (arguments.length < 2) throw 'too few arguments';
    var v553= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v553 = {car: arguments[i], cdr: v553};
    return (f1(v553) !== v2 ? f67("(", f110(v555, v554), ")()") : (function(v556,v557){
        return f67("(function(){", v169, f70("var f = ", f110(v555, v554), ";", v169, "var args = [", f68(f45((function (v558){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f110(v558, v554);
        }), v556), ", "), "];", v169, "var tail = (", f110(v557, v554), ");", v169, f70("while (tail != ", f110(v2), "){", v169, "    args.push(tail.car);", v169, "    tail = tail.cdr;", v169, "}", v169, "return f.apply(this, args);", v169), "})()"));
    })(f56(v553),(function(){
        var tmp = f55(v553);
        return tmp === v2? v2: tmp.car;
    })()));
})), cdr: v323}); 
var l193 = f3("JS-EVAL");
v323 = ({car: f33(l193, (function (v559,v560){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v561){
        return f67("(function(){", v169, f70(f67("var ", "string", " = ", v561, ";", v169), f67("if (typeof ", "string", " != '", "string", "')", v169, f70("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v169)), f67("return ", (function(){
            return "eval.apply(window, [string])";
        })(), ";", v169)), "})()");
    })(f110(v560, v559));
})), cdr: v323}); 
var l194 = f3("ERROR");
v323 = ({car: f33(l194, (function (v562,v563){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v564){
        return f67("(function (){ throw ", v564, "; })()");
    })(f110(v563, v562));
})), cdr: v323}); 
var l195 = f3("NEW");
v323 = ({car: f33(l195, (function (v565){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        return "{}";
    })();
})), cdr: v323}); 
var l196 = f3("GET");
v323 = ({car: f33(l196, (function (v566,v567,v568){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v569,v570){
        return f67("(function(){", v169, f70("var tmp = ", "(", v569, ")[", v570, "];", v169, "return tmp == undefined? ", f110(v2), ": tmp ;", v169), "})()");
    })(f110(v567, v566),f110(v568, v566));
})), cdr: v323}); 
var l197 = f3("SET");
v323 = ({car: f33(l197, (function (v571,v572,v573,v574){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v575,v576,v577){
        return f67("((", v575, ")[", v576, "] = ", v577, ")");
    })(f110(v572, v571),f110(v573, v571),f110(v574, v571));
})), cdr: v323}); 
var l198 = f3("IN");
v323 = ({car: f33(l198, (function (v578,v579,v580){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v581,v582){
        return f121(f67("((", v581, ") in (", v582, "))"));
    })(f110(v579, v578),f110(v580, v578));
})), cdr: v323}); 
var l199 = f3("FUNCTIONP");
v323 = ({car: f33(l199, (function (v583,v584){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v585){
        return f121(f67("(typeof ", v585, " == 'function')"));
    })(f110(v584, v583));
})), cdr: v323}); 
var l200 = f3("WRITE-STRING");
v323 = ({car: f33(l200, (function (v586,v587){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(v588){
        return f67("(function(){", v169, f70(f67("var ", "x", " = ", v588, ";", v169), f67("if (typeof ", "x", " != '", "string", "')", v169, f70("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v169)), f67("return ", (function(){
            return "lisp.write(x)";
        })(), ";", v169)), "})()");
    })(f110(v587, v586));
})), cdr: v323}); 
var l202 = f3("MACROP");
var l201 = f3("MACRO");
var f123;
(function(){
    (function(){
        return f123 = (function(v589){
            ((v589)["fname"] = "MACROP");
            return v589;
        })((function (v590){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v590;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? ((f90(f104(v590, v278)) === l201)?v3: v2) : v2);
        }));
    })();
    return l202;
})(); 
var l204 = f3("LS-MACROEXPAND-1");
var l203 = f3("MACRO");
var f124;
(function(){
    (function(){
        return f124 = (function(v591){
            ((v591)["fname"] = "LS-MACROEXPAND-1");
            return v591;
        })((function (v592,v593){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (f123((function(){
                var tmp = v592;
                return tmp === v2? v2: tmp.car;
            })()) !== v2 ? (function(v594){
                return (((f90(v594) === l203)?v3: v2) !== v2 ? (function(){
                    var f = f118(f91(v594));
                    var args = [];
                    var tail = ((function(){
                        var tmp = v592;
                        return tmp === v2? v2: tmp.cdr;
                    })());
                        while (tail != v2){
                            args.push(tail.car);
                            tail = tail.cdr;
                        }
                        return f.apply(this, args);
                    })() : v592);
            })(f104((function(){
                var tmp = v592;
                return tmp === v2? v2: tmp.car;
            })(), v278)) : v592);
        }));
    })();
    return l204;
})(); 
var l206 = f3("COMPILE-FUNCALL");
var l205 = f3("LAMBDA");
var f125;
(function(){
    (function(){
        return f125 = (function(v595){
            ((v595)["fname"] = "COMPILE-FUNCALL");
            return v595;
        })((function (v596,v597,v598){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (((function(){
                var tmp = v596;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f67(f105(v596, v598), "(", f68(f45((function (v599){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f110(v599, v598);
                }), v597), ", "), ")");
            })() : ((f36(v596) !== v2 ? (((function(){
                var tmp = v596;
                return tmp === v2? v2: tmp.car;
            })() === l205)?v3: v2) : v2) !== v2 ? (function(){
                return f67("(", f110(v596, v598), ")(", f68(f45((function (v600){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f110(v600, v598);
                }), v597), ", "), ")");
            })() : (function(){
                return (function (){ throw f67("Invalid function designator ", (v596).name); })();
            })()));
        }));
    })();
    return l206;
})(); 
var l207 = f3("LS-COMPILE");
var f110;
(function(){
    (function(){
        return f110 = (function(v601){
            ((v601)["fname"] = "LS-COMPILE");
            return v601;
        })((function (v602,v603){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v603=f94();
            default: break;
            }
            return (((function(){
                var tmp = v602;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v3: v2) !== v2 ? (function(){
                return f102(v602, v603);
            })() : (f51(v602) !== v2 ? (function(){
                return f6(v602);
            })() : (((typeof(v602) == "string")?v3: v2) !== v2 ? (function(){
                return f67("\"", f72(v602), "\"");
            })() : (f36(v602) !== v2 ? (function(){
                return (f65((function(){
                    var tmp = v602;
                    return tmp === v2? v2: tmp.car;
                })(), v323) !== v2 ? (function(v604){
                    return (function(){
                        var f = v604;
                        var args = [v603];
                        var tail = ((function(){
                            var tmp = v602;
                            return tmp === v2? v2: tmp.cdr;
                        })());
                            while (tail != v2){
                                args.push(tail.car);
                                tail = tail.cdr;
                            }
                            return f.apply(this, args);
                        })();
                })(f30(f65((function(){
                    var tmp = v602;
                    return tmp === v2? v2: tmp.car;
                })(), v323))) : (f123((function(){
                    var tmp = v602;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? f110(f124(v602, v603), v603) : f125((function(){
                    var tmp = v602;
                    return tmp === v2? v2: tmp.car;
                })(), (function(){
                    var tmp = v602;
                    return tmp === v2? v2: tmp.cdr;
                })(), v603)));
            })() : v2))));
        }));
    })();
    return l207;
})(); 
var l208 = f3("LS-COMPILE-TOPLEVEL");
var f126;
(function(){
    (function(){
        return f126 = (function(v605){
            ((v605)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v605;
        })((function (v606){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            v313 = v2;
            return (function(v607){
                return (function(v608){
                    v313 = v2;
                    return v608;
                })(f67(f68(f45((function (v609){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f67(v609, ";", v169);
                }), v313)), v607));
            })(f110(v606));
        }));
    })();
    return l208;
})(); 
var l219 = f3("LS-COMPILE-TOPLEVEL");
var l218 = f3("EVAL");
var l217 = f3("PRINT-TO-STRING");
var l216 = f3("LS-READ-FROM-STRING");
var l215 = 0;
var l214 = 148;
var l213 = 209;
var l212 = 126;
var l211 = 615;
var l210 = {car: {car: {car: f3("*BLOCK-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v401", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v377", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v334", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v323", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v313", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v302", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v282", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENVIRONMENT*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v278", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v244", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v237", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v169", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}, cdr: {car: {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f126", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f125", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f124", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f123", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f122", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f121", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f120", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f119", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-IN-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH-TO-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("IDENTITY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE-AUX"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("RETURN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("VALUE"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("RETURN-FROM"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}};
var l209 = f3("EVAL");
var f118;
(function(){
    v278 = l210;
    v282 = l211;
    v302 = l212;
    v377 = l213;
    v12 = l214;
    return v401 = l215;
})();
(function(){
    (function(){
        (function(){
            return f118 = (function(v610){
                ((v610)["fname"] = "EVAL");
                return v610;
            })((function (v611){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v612){
                    return (function(){
                        var string = v612;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        return eval.apply(window, [string]);
                    })();
                })((function(v613){
                    (function(v614,v615){
                        (function(){
                            while(v614 !== v2){
                                v615 = (function(){
                                    var tmp = v614;
                                    return tmp === v2? v2: tmp.car;
                                })();
                                (v615)();
                                v614 = (function(){
                                    var tmp = v614;
                                    return tmp === v2? v2: tmp.cdr;
                                })();
                        }})();
                        return v2;
                    })(v244,v2);
                    return v613;
                })((function(){
                    v244 = v2;
                    f99();
                    return f126(v611);
                })()));
            }));
        })();
        return l209;
    })();
    return (function(){
        var string = f67("var lisp = {};", "lisp.read = ", f105(l216, v2), ";", v169, "lisp.print = ", f105(l217, v2), ";", v169, "lisp.eval = ", f105(l218, v2), ";", v169, "lisp.compile = ", f105(l219, v2), ";", v169, "lisp.evalString = function(str){", v169, "   return lisp.eval(lisp.read(str));", v169, "}", v169, "lisp.compileString = function(str){", v169, "   return lisp.compile(lisp.read(str));", v169, "}", v169);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
