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
            return (function(){
                try {
                    return (function(){
                        return ((v5 === v2)?v3: v2);
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
    })();
    (function(){
        return f2 = (function(v6){
            ((v6)["fname"] = "INTERNP");
            return v6;
        })((function (v7){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((v7) in (v1))?v3: v2);
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
    })();
    (function(){
        return f3 = (function(v8){
            ((v8)["fname"] = "INTERN");
            return v8;
        })((function (v9){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f2(v9) !== v2 ? (function(){
                            var tmp = (v1)[v9];
                            return tmp == undefined? v2: tmp ;
                        })() : ((v1)[v9] = (function(){
                            var name = v9;
                            if (typeof name != 'string')
                                throw 'The value ' + name + ' is not a type string.';
                            return ({name: name});
                        })()));
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
    })();
    (function(){
        return f4 = (function(v10){
            ((v10)["fname"] = "FIND-SYMBOL");
            return v10;
        })((function (v11){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (v1)[v11];
                            return tmp == undefined? v2: tmp ;
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
            return (function(){
                try {
                    return (function(){
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
    })();
    (function(){
        return f7 = (function(v15){
            ((v15)["fname"] = "=");
            return v15;
        })((function (v16,v17){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(){
                            var x = v16;
                            var y = v17;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x==y;
                        })()?v3: v2);
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
    })();
    (function(){
        return f8 = (function(v18){
            ((v18)["fname"] = "+");
            return v18;
        })((function (v19,v20){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v19;
                            var y = v20;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
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
    })();
    (function(){
        return f9 = (function(v21){
            ((v21)["fname"] = "-");
            return v21;
        })((function (v22,v23){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v22;
                            var y = v23;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
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
    })();
    (function(){
        return f10 = (function(v24){
            ((v24)["fname"] = "*");
            return v24;
        })((function (v25,v26){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v25;
                            var y = v26;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x*y;
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
    })();
    (function(){
        return f11 = (function(v27){
            ((v27)["fname"] = "/");
            return v27;
        })((function (v28,v29){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v28;
                            var y = v29;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x/y;
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
    })();
    (function(){
        return f12 = (function(v30){
            ((v30)["fname"] = "1+");
            return v30;
        })((function (v31){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v31;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })();
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
    })();
    (function(){
        return f13 = (function(v32){
            ((v32)["fname"] = "1-");
            return v32;
        })((function (v33){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = v33;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x-y;
                        })();
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
    })();
    (function(){
        return f14 = (function(v34){
            ((v34)["fname"] = "ZEROP");
            return v34;
        })((function (v35){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(){
                            var x = v35;
                            var y = 0;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x==y;
                        })()?v3: v2);
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
    })();
    (function(){
        return f15 = (function(v36){
            ((v36)["fname"] = "TRUNCATE");
            return v36;
        })((function (v37,v38){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
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
    })();
    (function(){
        return f16 = (function(v39){
            ((v39)["fname"] = "EQL");
            return v39;
        })((function (v40,v41){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((v40 === v41)?v3: v2);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 15)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    (function(){
        return f17 = (function(v42){
            ((v42)["fname"] = "NOT");
            return v42;
        })((function (v43){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (v43 !== v2 ? v2 : v3);
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
    })();
    (function(){
        return f18 = (function(v44){
            ((v44)["fname"] = "CONS");
            return v44;
        })((function (v45,v46){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ({car: v45, cdr: v46});
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
    })();
    (function(){
        return f19 = (function(v47){
            ((v47)["fname"] = "CONSP");
            return v47;
        })((function (v48){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(){
                            var tmp = v48;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2);
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
    })();
    (function(){
        return f20 = (function(v49){
            ((v49)["fname"] = "CAR");
            return v49;
        })((function (v50){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v50;
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f21 = (function(v51){
            ((v51)["fname"] = "CDR");
            return v51;
        })((function (v52){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v52;
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f22 = (function(v53){
            ((v53)["fname"] = "CAAR");
            return v53;
        })((function (v54){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v54;
                                return tmp === v2? v2: tmp.car;
                            })();
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f23 = (function(v55){
            ((v55)["fname"] = "CADR");
            return v55;
        })((function (v56){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v56;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.car;
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
    })();
    (function(){
        return f24 = (function(v57){
            ((v57)["fname"] = "CDAR");
            return v57;
        })((function (v58){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v58;
                                return tmp === v2? v2: tmp.car;
                            })();
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f25 = (function(v59){
            ((v59)["fname"] = "CDDR");
            return v59;
        })((function (v60){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = (function(){
                                var tmp = v60;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            return tmp === v2? v2: tmp.cdr;
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
    })();
    (function(){
        return f26 = (function(v61){
            ((v61)["fname"] = "CADDR");
            return v61;
        })((function (v62){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
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
    })();
    (function(){
        return f27 = (function(v63){
            ((v63)["fname"] = "CDDDR");
            return v63;
        })((function (v64){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
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
    })();
    (function(){
        return f28 = (function(v65){
            ((v65)["fname"] = "CADDDR");
            return v65;
        })((function (v66){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
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
    })();
    (function(){
        return f29 = (function(v67){
            ((v67)["fname"] = "FIRST");
            return v67;
        })((function (v68){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var tmp = v68;
                            return tmp === v2? v2: tmp.car;
                        })();
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
    })();
    (function(){
        return f30 = (function(v69){
            ((v69)["fname"] = "SECOND");
            return v69;
        })((function (v70){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f23(v70);
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
    })();
    (function(){
        return f31 = (function(v71){
            ((v71)["fname"] = "THIRD");
            return v71;
        })((function (v72){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f26(v72);
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
    })();
    (function(){
        return f32 = (function(v73){
            ((v73)["fname"] = "FOURTH");
            return v73;
        })((function (v74){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f28(v74);
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
    })();
    (function(){
        return f33 = (function(v75){
            ((v75)["fname"] = "LIST");
            return v75;
        })((function (){
            var v76= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v76 = {car: arguments[i], cdr: v76};
            return (function(){
                try {
                    return (function(){
                        return v76;
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
    })();
    (function(){
        return f34 = (function(v77){
            ((v77)["fname"] = "ATOM");
            return v77;
        })((function (v78){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f17(((function(){
                            var tmp = v78;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 33)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
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
        return (function(){
            try {
                return (function(){
                    return (f36(v80) !== v2 ? v80 : f33(v80));
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
})(); 
var f37;
(function(){
    return f37 = (function(v81){
        ((v81)["fname"] = "!REDUCE");
        return v81;
    })((function (v82,v83,v84){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (function(){
            try {
                return (function(){
                    return (f1(v83) !== v2 ? v84 : f37(v82, (function(){
                        var tmp = v83;
                        return tmp === v2? v2: tmp.cdr;
                    })(), (v82)(v84, (function(){
                        var tmp = v83;
                        return tmp === v2? v2: tmp.car;
                    })())));
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == 35)
                    return cf.value;
                else
                    throw cf;
            }
        })();
    }));
})(); 
var l34 = f3("STRING=");
var f67;
var l33 = f3("ASSOC");
var f66;
var l32 = f3("EVERY");
var f65;
var l31 = f3("SOME");
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
                return (function(){
                    try {
                        return (function(){
                            return (f1(v86) !== v2 ? v87 : ({car: (function(){
                                var tmp = v86;
                                return tmp === v2? v2: tmp.car;
                            })(), cdr: f39((function(){
                                var tmp = v86;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v87)}));
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
                return (function(){
                    try {
                        return (function(){
                            return f37(f38, v89, l2);
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
                return (function(){
                    try {
                        return (function(){
                            return (f1(v91) !== v2 ? v92 : f40((function(){
                                var tmp = v91;
                                return tmp === v2? v2: tmp.cdr;
                            })(), ({car: (function(){
                                var tmp = v91;
                                return tmp === v2? v2: tmp.car;
                            })(), cdr: v92})));
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
                return (function(){
                    try {
                        return (function(){
                            return f40(v94, l5);
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 39)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
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
                return (function(){
                    try {
                        return (function(){
                            return (function(v97){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
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
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 41)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v97;
                            })(0);
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
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v99) == "string")?v3: v2) !== v2 ? (function(){
                                var x = v99;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return x.length;
                            })() : f42(v99));
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 42)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
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
                    try {
                        return (function(){
                            return (function(){
                                var string1 = v101;
                                var string2 = v102;
                                if (typeof string1 != 'string')
                                    throw 'The value ' + string1 + ' is not a type string.';
                                if (typeof string2 != 'string')
                                    throw 'The value ' + string2 + ' is not a type string.';
                                return string1.concat(string2);
                            })();
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
                return (function(){
                    try {
                        return (function(){
                            return (f1(v105) !== v2 ? l10 : ({car: (v104)((function(){
                                var tmp = v105;
                                return tmp === v2? v2: tmp.car;
                            })()), cdr: f45(v104, (function(){
                                var tmp = v105;
                                return tmp === v2? v2: tmp.cdr;
                            })())}));
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
                return (function(){
                    try {
                        return (function(){
                            return v107;
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
                return (function(){
                    try {
                        return (function(){
                            return f45(f46, v109);
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
                return (function(){
                    try {
                        return (function(){
                            return v111;
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
                return (function(){
                    try {
                        return (function(){
                            return v113;
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
                return (function(){
                    try {
                        return (function(){
                            return ((function(){
                                var x = v115;
                                var y = v116;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x==y;
                            })()?v3: v2);
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
                            return ((function(){
                                var x = 0;
                                var y = v120;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2);
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
                return (function(){
                    try {
                        return (function(){
                            return ((function(){
                                var x = v122;
                                var y = 0;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v3: v2);
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
                return (function(){
                    try {
                        return (function(){
                            return (function(v125){
                                return (v125 !== v2 ? v125 : f1(v124));
                            })(((function(){
                                var tmp = v124;
                                return (typeof tmp == 'object' && 'car' in tmp);
                            })()?v3: v2));
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
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
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 56)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
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
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 59)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
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
                return (function(){
                    try {
                        return (function(){
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
                                return (function(){
                                    throw "Unsupported argument.";
                                })();
                            })());
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 62)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
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
                return (function(){
                    try {
                        return (function(){
                            return (function(v153,v154,v155){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
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
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 64)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v153;
                            })(0,0,f43(v152));
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
        })();
        return l30;
    })();
    (function(){
        (function(){
            return f64 = (function(v156){
                ((v156)["fname"] = "SOME");
                return v156;
            })((function (v157,v158){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v158) == "string")?v3: v2) !== v2 ? (function(){
                                return (function(v159,v160){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v159;
                                                        var y = v160;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2){
                                                        ((v157)((function(){
                                                            var string = v158;
                                                            var index = v159;
                                                            if (typeof string != 'string')
                                                                throw 'The value ' + string + ' is not a type string.';
                                                            if (typeof index != 'number')
                                                                throw 'The value ' + index + ' is not a type number.';
                                                            return string.charCodeAt(index);
                                                        })()) !== v2 ? (function(){
                                                            return (function(){
                                                                throw ({type: 'block', id: 65, value: v3, message: 'Return from unknown block SOME.'})})();
                                                        })() : v2);
                                                        v159 = (function(){
                                                            var x = v159;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    }return v2;
                                                })();
                                            })();
                                        }
                                        catch (cf){
                                            if (cf.type == 'block' && cf.id == 66)
                                                return cf.value;
                                            else
                                                throw cf;
                                        }
                                    })();
                                    return v2;
                                })(0,f43(v158));
                            })() : (f36(v158) !== v2 ? (function(){
                                return (function(){
                                    try {
                                        return (function(){
                                            return (function(v161,v162){
                                                (function(){
                                                    while(v161 !== v2){
                                                        v162 = (function(){
                                                            var tmp = v161;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (function(){
                                                            ((v157)(v162) !== v2 ? (function(){
                                                                return (function(){
                                                                    throw ({type: 'block', id: 67, value: v3, message: 'Return from unknown block NIL.'})})();
                                                            })() : v2);
                                                            return v2;
                                                        })();
                                                        v161 = (function(){
                                                            var tmp = v161;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v158,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 67)
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
                        if (cf.type == 'block' && cf.id == 65)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
            }));
        })();
        return l31;
    })();
    (function(){
        (function(){
            return f65 = (function(v163){
                ((v163)["fname"] = "EVERY");
                return v163;
            })((function (v164,v165){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((typeof(v165) == "string")?v3: v2) !== v2 ? (function(){
                                return (function(v166,v167){
                                    (function(){
                                        try {
                                            return (function(){
                                                return (function(){
                                                    while(((function(){
                                                        var x = v166;
                                                        var y = v167;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2){
                                                        ((v164)((function(){
                                                            var string = v165;
                                                            var index = v166;
                                                            if (typeof string != 'string')
                                                                throw 'The value ' + string + ' is not a type string.';
                                                            if (typeof index != 'number')
                                                                throw 'The value ' + index + ' is not a type number.';
                                                            return string.charCodeAt(index);
                                                        })()) !== v2 ? v2 : (function(){
                                                            return (function(){
                                                                throw ({type: 'block', id: 68, value: v2, message: 'Return from unknown block EVERY.'})})();
                                                        })());
                                                        v166 = (function(){
                                                            var x = v166;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    }return v2;
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
                                    return v3;
                                })(0,f43(v165));
                            })() : (f36(v165) !== v2 ? (function(){
                                return (function(){
                                    try {
                                        return (function(){
                                            return (function(v168,v169){
                                                (function(){
                                                    while(v168 !== v2){
                                                        v169 = (function(){
                                                            var tmp = v168;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (function(){
                                                            ((v164)(v169) !== v2 ? v2 : (function(){
                                                                return (function(){
                                                                    throw ({type: 'block', id: 70, value: v2, message: 'Return from unknown block NIL.'})})();
                                                            })());
                                                            return v2;
                                                        })();
                                                        v168 = (function(){
                                                            var tmp = v168;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v3;
                                            })(v165,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 70)
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
                        if (cf.type == 'block' && cf.id == 68)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
            }));
        })();
        return l32;
    })();
    (function(){
        (function(){
            return f66 = (function(v170){
                ((v170)["fname"] = "ASSOC");
                return v170;
            })((function (v171,v172){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(v172 !== v2){
                                                (f16(v171, f22(v172)) !== v2 ? (function(){
                                                    throw ({type: 'block', id: 72, value: v2, message: 'Return from unknown block NIL.'})})() : v172 = (function(){
                                                    var tmp = v172;
                                                    return tmp === v2? v2: tmp.cdr;
                                                })());
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 72)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return (function(){
                                var tmp = v172;
                                return tmp === v2? v2: tmp.car;
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
            }));
        })();
        return l33;
    })();
    return (function(){
        (function(){
            return f67 = (function(v173){
                ((v173)["fname"] = "STRING=");
                return v173;
            })((function (v174,v175){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return ((v174 == v175)?v3: v2);
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
        })();
        return l34;
    })();
})(); 
var l35 = f3("*NEWLINE*");
var v176;
(function(){
    (function(){
        return v176 = (function(){
            var x = f48(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l35;
})(); 
var l36 = f3("CONCAT");
var f68;
(function(){
    (function(){
        return f68 = (function(v177){
            ((v177)["fname"] = "CONCAT");
            return v177;
        })((function (){
            var v178= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v178 = {car: arguments[i], cdr: v178};
            return (function(){
                try {
                    return (function(){
                        return f37(f44, v178, "");
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 74)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l36;
})(); 
var l37 = f3("JOIN");
var f69;
(function(){
    (function(){
        return f69 = (function(v179){
            ((v179)["fname"] = "JOIN");
            return v179;
        })((function (v180,v181){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v181="";
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (f1(v180) !== v2 ? (function(){
                            return "";
                        })() : (f1((function(){
                            var tmp = v180;
                            return tmp === v2? v2: tmp.cdr;
                        })()) !== v2 ? (function(){
                            return (function(){
                                var tmp = v180;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : (function(){
                            return f68((function(){
                                var tmp = v180;
                                return tmp === v2? v2: tmp.car;
                            })(), v181, f69((function(){
                                var tmp = v180;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v181));
                        })()));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 75)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l37;
})(); 
var l38 = f3("JOIN-TRAILING");
var f70;
(function(){
    (function(){
        return f70 = (function(v182){
            ((v182)["fname"] = "JOIN-TRAILING");
            return v182;
        })((function (v183,v184){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v184="";
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (f1(v183) !== v2 ? "" : f68((function(){
                            var tmp = v183;
                            return tmp === v2? v2: tmp.car;
                        })(), v184, f70((function(){
                            var tmp = v183;
                            return tmp === v2? v2: tmp.cdr;
                        })(), v184)));
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
    })();
    return l38;
})(); 
var l39 = f3("INDENT");
var f71;
(function(){
    (function(){
        return f71 = (function(v185){
            ((v185)["fname"] = "INDENT");
            return v185;
        })((function (){
            var v186= v2;
            for (var i = arguments.length-1; i>=0; i--)
                v186 = {car: arguments[i], cdr: v186};
            return (function(){
                try {
                    return (function(){
                        return (function(v187){
                            return (function(v188,v189,v190){
                                (f52(v190) !== v2 ? (function(){
                                    return v188 = "    ";
                                })() : v2);
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v189;
                                                    var y = v190;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    v188 = f68(v188, ((f50((function(){
                                                        var string = v187;
                                                        var index = v189;
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10) !== v2 ? (((function(){
                                                        var x = v189;
                                                        var y = f13(v190);
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x<y;
                                                    })()?v3: v2) !== v2 ? f17(f50((function(){
                                                        var string = v187;
                                                        var index = f12(v189);
                                                        if (typeof string != 'string')
                                                            throw 'The value ' + string + ' is not a type string.';
                                                        if (typeof index != 'number')
                                                            throw 'The value ' + index + ' is not a type number.';
                                                        return string.charCodeAt(index);
                                                    })(), 10)) : v2) : v2) !== v2 ? f68((function(){
                                                        var x = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })(), "    ") : f62(v187, v189, f12(v189))));
                                                    v189 = (function(){
                                                        var x = v189;
                                                        var y = 1;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x+y;
                                                    })();
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 78)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v188;
                            })("",0,f43(v187));
                        })(f69(v186));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 77)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l39;
})(); 
var l40 = f3("INTEGER-TO-STRING");
var f6;
(function(){
    (function(){
        return f6 = (function(v191){
            ((v191)["fname"] = "INTEGER-TO-STRING");
            return v191;
        })((function (v192){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f14(v192) !== v2 ? (function(){
                            return "0";
                        })() : (f53(v192) !== v2 ? (function(){
                            return f68("-", f6((function(){
                                var x = 0;
                                var y = v192;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x-y;
                            })()));
                        })() : (function(){
                            return (function(v193){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(f17(f14(v192)) !== v2){
                                                    v193 = ({car: (function(){
                                                        var x = v192;
                                                        var y = 10;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        if (typeof y != 'number')
                                                            throw 'The value ' + y + ' is not a type number.';
                                                        return x%y;
                                                    })(), cdr: v193});
                                                    v192 = f15(v192, 10);
                                                }return v2;
                                            })();
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 80)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return f69(f45((function (v194){
                                    if (arguments.length < 1) throw 'too few arguments';
                                    if (arguments.length > 1) throw 'too many arguments';
                                    return (function(){
                                        var x = (function(){
                                            var string = "0123456789";
                                            var index = v194;
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
                                }), v193));
                            })(v2);
                        })()));
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
    })();
    return l40;
})(); 
var l41 = f3("JS!BOOL");
var f72;
(function(){
    (function(){
        return f72 = (function(v195){
            ((v195)["fname"] = "JS!BOOL");
            return v195;
        })((function (v196){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f68("(", v196, "?", f73(v3), ": ", f73(v2), ")");
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
    })();
    return l41;
})(); 
var l44 = f3("PRINT");
var f77;
var l43 = f3("WRITE-LINE");
var f76;
var l42 = f3("PRIN1-TO-STRING");
var f74;
(function(){
    (function(){
        (function(){
            return f74 = (function(v197){
                ((v197)["fname"] = "PRIN1-TO-STRING");
                return v197;
            })((function (v198){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (((function(){
                                var tmp = v198;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2) !== v2 ? (function(){
                                return (v198).name;
                            })() : (f51(v198) !== v2 ? (function(){
                                return f6(v198);
                            })() : (((typeof(v198) == "string")?v3: v2) !== v2 ? (function(){
                                return f68("\"", f75(v198), "\"");
                            })() : (((typeof v198 == 'function')?v3: v2) !== v2 ? (function(){
                                return (function(v199){
                                    return (v199 !== v2 ? f68("#<FUNCTION ", v199, ">") : f68("#<FUNCTION>"));
                                })((function(){
                                    var tmp = (v198)["fname"];
                                    return tmp == undefined? v2: tmp ;
                                })());
                            })() : (f36(v198) !== v2 ? (function(){
                                return f68("(", f70(f45(f74, f56(v198)), " "), (function(v200){
                                    return (f1((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.cdr;
                                    })()) !== v2 ? f74((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.car;
                                    })()) : f68(f74((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.car;
                                    })()), " . ", f74((function(){
                                        var tmp = v200;
                                        return tmp === v2? v2: tmp.cdr;
                                    })())));
                                })(f55(v198)), ")");
                            })() : v2)))));
                        })();
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == 82)
                            return cf.value;
                        else
                            throw cf;
                    }
                })();
            }));
        })();
        return l42;
    })();
    (function(){
        (function(){
            return f76 = (function(v201){
                ((v201)["fname"] = "WRITE-LINE");
                return v201;
            })((function (v202){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            (function(){
                                var x = v202;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            (function(){
                                var x = v176;
                                if (typeof x != 'string')
                                    throw 'The value ' + x + ' is not a type string.';
                                return lisp.write(x);
                            })();
                            return v202;
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
        })();
        return l43;
    })();
    return (function(){
        (function(){
            return f77 = (function(v203){
                ((v203)["fname"] = "PRINT");
                return v203;
            })((function (v204){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            f76(f74(v204));
                            return v204;
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
        })();
        return l44;
    })();
})(); 
var l45 = f3("MAKE-STRING-STREAM");
var f78;
(function(){
    (function(){
        return f78 = (function(v205){
            ((v205)["fname"] = "MAKE-STRING-STREAM");
            return v205;
        })((function (v206){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ({car: v206, cdr: 0});
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
    })();
    return l45;
})(); 
var l46 = f3("%PEEK-CHAR");
var f79;
(function(){
    (function(){
        return f79 = (function(v207){
            ((v207)["fname"] = "%PEEK-CHAR");
            return v207;
        })((function (v208){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(){
                            var string = (function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v208;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })() : v2);
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
    })();
    return l46;
})(); 
var l47 = f3("%READ-CHAR");
var f80;
(function(){
    (function(){
        return f80 = (function(v209){
            ((v209)["fname"] = "%READ-CHAR");
            return v209;
        })((function (v210){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var x = (function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            var y = f43((function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.car;
                            })());
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v3: v2) !== v2 ? (function(v211){
                            (function(){
                                var x = v210;
                                if (typeof x != 'object')
                                    throw 'The value ' + x + ' is not a type object.';
                                return (x.cdr = f12((function(){
                                    var tmp = v210;
                                    return tmp === v2? v2: tmp.cdr;
                                })()));
                            })();
                            return v211;
                        })((function(){
                            var string = (function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.car;
                            })();
                            var index = (function(){
                                var tmp = v210;
                                return tmp === v2? v2: tmp.cdr;
                            })();
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })()) : v2);
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 87)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l47;
})(); 
var l48 = f3("WHITESPACEP");
var f81;
(function(){
    (function(){
        return f81 = (function(v212){
            ((v212)["fname"] = "WHITESPACEP");
            return v212;
        })((function (v213){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v214){
                            return (v214 !== v2 ? v214 : (function(v215){
                                return (v215 !== v2 ? v215 : f50(v213, 9));
                            })(f50(v213, 10)));
                        })(f50(v213, 32));
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
    })();
    return l48;
})(); 
var l49 = f3("SKIP-WHITESPACES");
var f82;
(function(){
    (function(){
        return f82 = (function(v216){
            ((v216)["fname"] = "SKIP-WHITESPACES");
            return v216;
        })((function (v217){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v218){
                            v218 = f79(v217);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v218 !== v2 ? f81(v218) : v2) !== v2){
                                                f80(v217);
                                                v218 = f79(v217);
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 90)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(v2);
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
    })();
    return l49;
})(); 
var l50 = f3("TERMINALP");
var f83;
(function(){
    (function(){
        return f83 = (function(v219){
            ((v219)["fname"] = "TERMINALP");
            return v219;
        })((function (v220){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v221){
                            return (v221 !== v2 ? v221 : (function(v222){
                                return (v222 !== v2 ? v222 : (function(v223){
                                    return (v223 !== v2 ? v223 : f50(40, v220));
                                })(f50(41, v220)));
                            })(f81(v220)));
                        })(f1(v220));
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
    })();
    return l50;
})(); 
var l51 = f3("READ-UNTIL");
var f84;
(function(){
    (function(){
        return f84 = (function(v224){
            ((v224)["fname"] = "READ-UNTIL");
            return v224;
        })((function (v225,v226){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v227,v228){
                            v228 = f79(v225);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v228 !== v2 ? f17((v226)(v228)) : v2) !== v2){
                                                v227 = f68(v227, (function(){
                                                    var x = v228;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                f80(v225);
                                                v228 = f79(v225);
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 93)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v227;
                        })("",v2);
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
    })();
    return l51;
})(); 
var l52 = f3("SKIP-WHITESPACES-AND-COMMENTS");
var f85;
(function(){
    (function(){
        return f85 = (function(v229){
            ((v229)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v229;
        })((function (v230){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v231){
                            f82(v230);
                            v231 = f79(v230);
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while((v231 !== v2 ? f50(v231, 59) : v2) !== v2){
                                                f84(v230, (function (v232){
                                                    if (arguments.length < 1) throw 'too few arguments';
                                                    if (arguments.length > 1) throw 'too many arguments';
                                                    return f50(v232, 10);
                                                }));
                                                f82(v230);
                                                v231 = f79(v230);
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 95)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(v2);
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
    })();
    return l52;
})(); 
var l53 = f3("%READ-LIST");
var f86;
(function(){
    (function(){
        return f86 = (function(v233){
            ((v233)["fname"] = "%READ-LIST");
            return v233;
        })((function (v234){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f85(v234);
                        return (function(v235){
                            return (f1(v235) !== v2 ? (function(){
                                return (function(){
                                    throw "Unspected EOF";
                                })();
                            })() : (f50(v235, 41) !== v2 ? (function(){
                                f80(v234);
                                return v2;
                            })() : (f50(v235, 46) !== v2 ? (function(){
                                f80(v234);
                                return (function(v236){
                                    f85(v234);
                                    (f50(f80(v234), 41) !== v2 ? v2 : (function(){
                                        return (function(){
                                            throw "')' was expected.";
                                        })();
                                    })());
                                    return v236;
                                })(f87(v234));
                            })() : (function(){
                                return ({car: f87(v234), cdr: f86(v234)});
                            })())));
                        })(f79(v234));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 96)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l53;
})(); 
var l54 = f3("READ-STRING");
var f88;
(function(){
    (function(){
        return f88 = (function(v237){
            ((v237)["fname"] = "READ-STRING");
            return v237;
        })((function (v238){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v239,v240){
                            v240 = f80(v238);
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(f17(f16(v240, 34)) !== v2){
                                                (f1(v240) !== v2 ? (function(){
                                                    return (function(){
                                                        throw "Unexpected EOF";
                                                    })();
                                                })() : v2);
                                                (f16(v240, 92) !== v2 ? (function(){
                                                    return v240 = f80(v238);
                                                })() : v2);
                                                v239 = f68(v239, (function(){
                                                    var x = v240;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    return String.fromCharCode(x);
                                                })());
                                                v240 = f80(v238);
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 98)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v239;
                        })("",v2);
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
    })();
    return l54;
})(); 
var l59 = f3("READ-SHARP");
var l58 = 43;
var l57 = 92;
var l56 = f3("FUNCTION");
var l55 = 39;
var f89;
(function(){
    (function(){
        return f89 = (function(v241){
            ((v241)["fname"] = "READ-SHARP");
            return v241;
        })((function (v242){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f80(v242);
                        return (function(v243){
                            return (f16(v243, l55) !== v2 ? (function(){
                                return f33(l56, f87(v242));
                            })() : (f16(v243, l57) !== v2 ? (function(){
                                return (function(v244){
                                    return (f67(v244, "space") !== v2 ? (function(){
                                        return f49(32);
                                    })() : (f67(v244, "tab") !== v2 ? (function(){
                                        return f49(9);
                                    })() : (f67(v244, "newline") !== v2 ? (function(){
                                        return f49(10);
                                    })() : (function(){
                                        return f49((function(){
                                            var string = v244;
                                            var index = 0;
                                            if (typeof string != 'string')
                                                throw 'The value ' + string + ' is not a type string.';
                                            if (typeof index != 'number')
                                                throw 'The value ' + index + ' is not a type number.';
                                            return string.charCodeAt(index);
                                        })());
                                    })())));
                                })(f68((function(){
                                    var x = f80(v242);
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    return String.fromCharCode(x);
                                })(), f84(v242, f83)));
                            })() : (f16(v243, l58) !== v2 ? (function(){
                                return (function(v245){
                                    return (f67(v245, "common-lisp") !== v2 ? (function(){
                                        f87(v242);
                                        return f87(v242);
                                    })() : (f67(v245, "ecmalisp") !== v2 ? (function(){
                                        return f87(v242);
                                    })() : (function(){
                                        return (function(){
                                            throw "Unknown reader form.";
                                        })();
                                    })()));
                                })(f84(v242, f83));
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })())));
                        })(f80(v242));
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
    })();
    return l59;
})(); 
var l60 = f3("*EOF*");
var v246;
(function(){
    (function(){
        return v246 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l60;
})(); 
var l65 = f3("LS-READ");
var l64 = f3("UNQUOTE");
var l63 = f3("UNQUOTE-SPLICING");
var l62 = f3("BACKQUOTE");
var l61 = f3("QUOTE");
var f87;
(function(){
    (function(){
        return f87 = (function(v247){
            ((v247)["fname"] = "LS-READ");
            return v247;
        })((function (v248){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        f85(v248);
                        return (function(v249){
                            return (f1(v249) !== v2 ? (function(){
                                return v246;
                            })() : (f50(v249, 40) !== v2 ? (function(){
                                f80(v248);
                                return f86(v248);
                            })() : (f50(v249, 39) !== v2 ? (function(){
                                f80(v248);
                                return f33(l61, f87(v248));
                            })() : (f50(v249, 96) !== v2 ? (function(){
                                f80(v248);
                                return f33(l62, f87(v248));
                            })() : (f50(v249, 34) !== v2 ? (function(){
                                f80(v248);
                                return f88(v248);
                            })() : (f50(v249, 44) !== v2 ? (function(){
                                f80(v248);
                                return (f16(f79(v248), 64) !== v2 ? (function(){
                                    f80(v248);
                                    return f33(l63, f87(v248));
                                })() : f33(l64, f87(v248)));
                            })() : (f50(v249, 35) !== v2 ? (function(){
                                return f89(v248);
                            })() : (function(){
                                return (function(v250){
                                    return (f65(f61, v250) !== v2 ? f63(v250) : f3((function(){
                                        var x = v250;
                                        if (typeof x != 'string')
                                            throw 'The value ' + x + ' is not a type string.';
                                        return x.toUpperCase();
                                    })()));
                                })(f84(v248, f83));
                            })())))))));
                        })(f79(v248));
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
    })();
    return l65;
})(); 
var l66 = f3("LS-READ-FROM-STRING");
var f90;
(function(){
    (function(){
        return f90 = (function(v251){
            ((v251)["fname"] = "LS-READ-FROM-STRING");
            return v251;
        })((function (v252){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f87(f78(v252));
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == 101)
                        return cf.value;
                    else
                        throw cf;
                }
            })();
        }));
    })();
    return l66;
})(); 
var l68 = f3("*COMPILATION-UNIT-CHECKS*");
var l67 = f3("NIL");
var v253;
(function(){
    (function(){
        return v253 = l67;
    })();
    return l68;
})(); 
var l69 = f3("MAKE-BINDING");
var f91;
(function(){
    (function(){
        return f91 = (function(v254){
            ((v254)["fname"] = "MAKE-BINDING");
            return v254;
        })((function (v255,v256,v257,v258){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v255, v256, v257, v258);
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
    })();
    return l69;
})(); 
var l70 = f3("BINDING-NAME");
var f92;
(function(){
    (function(){
        return f92 = (function(v259){
            ((v259)["fname"] = "BINDING-NAME");
            return v259;
        })((function (v260){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f29(v260);
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
    })();
    return l70;
})(); 
var l71 = f3("BINDING-TYPE");
var f93;
(function(){
    (function(){
        return f93 = (function(v261){
            ((v261)["fname"] = "BINDING-TYPE");
            return v261;
        })((function (v262){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f30(v262);
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
    })();
    return l71;
})(); 
var l72 = f3("BINDING-TRANSLATION");
var f94;
(function(){
    (function(){
        return f94 = (function(v263){
            ((v263)["fname"] = "BINDING-TRANSLATION");
            return v263;
        })((function (v264){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f31(v264);
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
    })();
    return l72;
})(); 
var l73 = f3("BINDING-DECLARED");
var f95;
(function(){
    (function(){
        return f95 = (function(v265){
            ((v265)["fname"] = "BINDING-DECLARED");
            return v265;
        })((function (v266){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (v266 !== v2 ? f32(v266) : v2);
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
    })();
    return l73;
})(); 
var l74 = f3("MARK-BINDING-AS-DECLARED");
var f96;
(function(){
    (function(){
        return f96 = (function(v267){
            ((v267)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v267;
        })((function (v268){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(){
                            var x = f27(v268);
                            if (typeof x != 'object')
                                throw 'The value ' + x + ' is not a type object.';
                            return (x.car = v3);
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
        }));
    })();
    return l74;
})(); 
var l75 = f3("MAKE-LEXENV");
var f97;
(function(){
    (function(){
        return f97 = (function(v269){
            ((v269)["fname"] = "MAKE-LEXENV");
            return v269;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f33(v2, v2, v2, v2);
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
    })();
    return l75;
})(); 
var l76 = f3("COPY-LEXENV");
var f98;
(function(){
    (function(){
        return f98 = (function(v270){
            ((v270)["fname"] = "COPY-LEXENV");
            return v270;
        })((function (v271){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f47(v271);
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
    })();
    return l76;
})(); 
var l81 = f3("PUSH-TO-LEXENV");
var l80 = f3("GOTAG");
var l79 = f3("BLOCK");
var l78 = f3("FUNCTION");
var l77 = f3("VARIABLE");
var f99;
(function(){
    (function(){
        return f99 = (function(v272){
            ((v272)["fname"] = "PUSH-TO-LEXENV");
            return v272;
        })((function (v273,v274,v275){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v276){
                            return (f16(v276, l77) !== v2 ? (function(){
                                return (function(){
                                    var x = v274;
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: (function(){
                                        var tmp = v274;
                                        return tmp === v2? v2: tmp.car;
                                    })()}));
                                })();
                            })() : (f16(v276, l78) !== v2 ? (function(){
                                return (function(){
                                    var x = (function(){
                                        var tmp = v274;
                                        return tmp === v2? v2: tmp.cdr;
                                    })();
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: f23(v274)}));
                                })();
                            })() : (f16(v276, l79) !== v2 ? (function(){
                                return (function(){
                                    var x = f25(v274);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: f26(v274)}));
                                })();
                            })() : (f16(v276, l80) !== v2 ? (function(){
                                return (function(){
                                    var x = f27(v274);
                                    if (typeof x != 'object')
                                        throw 'The value ' + x + ' is not a type object.';
                                    return (x.car = ({car: v273, cdr: f28(v274)}));
                                })();
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()))));
                        })(v275);
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
    })();
    return l81;
})(); 
var l82 = f3("EXTEND-LEXENV");
var f100;
(function(){
    (function(){
        return f100 = (function(v277){
            ((v277)["fname"] = "EXTEND-LEXENV");
            return v277;
        })((function (v278,v279,v280){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v281){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v282,v283){
                                            (function(){
                                                while(v282 !== v2){
                                                    v283 = (function(){
                                                        var tmp = v282;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(){
                                                        f99(v283, v281, v280);
                                                        return v2;
                                                    })();
                                                    v282 = (function(){
                                                        var tmp = v282;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v281;
                                        })(f41(v278),v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 112)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f98(v279));
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
    })();
    return l82;
})(); 
var l87 = f3("LOOKUP-IN-LEXENV");
var l86 = f3("GOTAG");
var l85 = f3("BLOCK");
var l84 = f3("FUNCTION");
var l83 = f3("VARIABLE");
var f101;
(function(){
    (function(){
        return f101 = (function(v284){
            ((v284)["fname"] = "LOOKUP-IN-LEXENV");
            return v284;
        })((function (v285,v286,v287){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f66(v285, (function(v288){
                            return (f16(v288, l83) !== v2 ? (function(){
                                return f29(v286);
                            })() : (f16(v288, l84) !== v2 ? (function(){
                                return f30(v286);
                            })() : (f16(v288, l85) !== v2 ? (function(){
                                return f31(v286);
                            })() : (f16(v288, l86) !== v2 ? (function(){
                                return f32(v286);
                            })() : (function(){
                                return (function(){
                                    throw "ECASE expression failed.";
                                })();
                            })()))));
                        })(v287));
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
    })();
    return l87;
})(); 
var l88 = f3("*ENVIRONMENT*");
var v289;
(function(){
    (function(){
        return v289 = f97();
    })();
    return l88;
})(); 
var l89 = f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS");
var f102;
(function(){
    (function(){
        return f102 = (function(v290){
            ((v290)["fname"] = "CLEAR-UNDECLARED-GLOBAL-BINDINGS");
            return v290;
        })((function (){
            if (arguments.length > 0) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return v289 = f45((function (v291){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f60(f95, v291);
                        }), v289);
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
    })();
    return l89;
})(); 
var l90 = f3("*VARIABLE-COUNTER*");
var v292;
(function(){
    (function(){
        return v292 = 0;
    })();
    return l90;
})(); 
var l91 = f3("GVARNAME");
var f103;
(function(){
    (function(){
        return f103 = (function(v293){
            ((v293)["fname"] = "GVARNAME");
            return v293;
        })((function (v294){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f68("v", f6(v292 = (function(){
                            var x = v292;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })()));
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
    })();
    return l91;
})(); 
var l97 = f3("LOOKUP-VARIABLE");
var l96 = f3("VARIABLE");
var l95 = f3("VARIABLE");
var l94 = f3("VARIABLE");
var l93 = f3("VARIABLE");
var l92 = f3("VARIABLE");
var f104;
(function(){
    (function(){
        return f104 = (function(v295){
            ((v295)["fname"] = "LOOKUP-VARIABLE");
            return v295;
        })((function (v296,v297){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v298){
                            return (v298 !== v2 ? v298 : (function(v299){
                                return (v299 !== v2 ? v299 : (function(v300,v301){
                                    f99(v301, v289, l92);
                                    v253 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (function(v302){
                                            return (f95(v302) !== v2 ? v2 : (function(){
                                                return (function(){
                                                    throw f68("Undefined variable `", v300, "'");
                                                })();
                                            })());
                                        })(f101(v296, v289, l93));
                                    }), cdr: v253});
                                    return v301;
                                })((v296).name,f91(v296, l94, f103(v296), v2)));
                            })(f101(v296, v289, l95)));
                        })(f101(v296, v297, l96));
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
    })();
    return l97;
})(); 
var l98 = f3("LOOKUP-VARIABLE-TRANSLATION");
var f105;
(function(){
    (function(){
        return f105 = (function(v303){
            ((v303)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v303;
        })((function (v304,v305){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f94(f104(v304, v305));
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
    })();
    return l98;
})(); 
var l101 = f3("EXTEND-LOCAL-ENV");
var l100 = f3("VARIABLE");
var l99 = f3("VARIABLE");
var f106;
(function(){
    (function(){
        return f106 = (function(v306){
            ((v306)["fname"] = "EXTEND-LOCAL-ENV");
            return v306;
        })((function (v307,v308){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v309){
                            return (function(){
                                try {
                                    return (function(){
                                        return (function(v310,v311){
                                            (function(){
                                                while(v310 !== v2){
                                                    v311 = (function(){
                                                        var tmp = v310;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(){
                                                        (function(v312){
                                                            return f99(v312, v309, l99);
                                                        })(f91(v311, l100, f103(v311), v3));
                                                        return v2;
                                                    })();
                                                    v310 = (function(){
                                                        var tmp = v310;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v309;
                                        })(v307,v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 119)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                        })(f98(v308));
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
    })();
    return l101;
})(); 
var l102 = f3("*FUNCTION-COUNTER*");
var v313;
(function(){
    (function(){
        return v313 = 0;
    })();
    return l102;
})(); 
var l108 = f3("LOOKUP-FUNCTION");
var l107 = f3("FUNCTION");
var l106 = f3("FUNCTION");
var l105 = f3("FUNCTION");
var l104 = f3("FUNCTION");
var l103 = f3("FUNCTION");
var f107;
(function(){
    (function(){
        return f107 = (function(v314){
            ((v314)["fname"] = "LOOKUP-FUNCTION");
            return v314;
        })((function (v315,v316){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v317){
                            return (v317 !== v2 ? v317 : (function(v318){
                                return (v318 !== v2 ? v318 : (function(v319,v320){
                                    f99(v320, v289, l103);
                                    v253 = ({car: (function (){
                                        if (arguments.length > 0) throw 'too many arguments';
                                        return (function(v321){
                                            return (f95(v321) !== v2 ? v2 : (function(){
                                                return (function(){
                                                    throw f68("Undefined function `", v319, "'");
                                                })();
                                            })());
                                        })(f101(v315, v289, l104));
                                    }), cdr: v253});
                                    return v320;
                                })((v315).name,f91(v315, l105, f68("f", f6(v313 = (function(){
                                    var x = v313;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })())), v2)));
                            })(f101(v315, v289, l106)));
                        })(f101(v315, v316, l107));
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
    })();
    return l108;
})(); 
var l109 = f3("LOOKUP-FUNCTION-TRANSLATION");
var f108;
(function(){
    (function(){
        return f108 = (function(v322){
            ((v322)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v322;
        })((function (v323,v324){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f94(f107(v323, v324));
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
    })();
    return l109;
})(); 
var l110 = f3("*TOPLEVEL-COMPILATIONS*");
var v325;
(function(){
    (function(){
        return v325 = v2;
    })();
    return l110;
})(); 
var l111 = f3("%COMPILE-DEFVAR");
var f109;
(function(){
    (function(){
        return f109 = (function(v326){
            ((v326)["fname"] = "%COMPILE-DEFVAR");
            return v326;
        })((function (v327){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v328){
                            f96(v328);
                            return v325 = ({car: f68("var ", f94(v328)), cdr: v325});
                        })(f104(v327, v289));
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
    })();
    return l111;
})(); 
var l112 = f3("%COMPILE-DEFUN");
var f110;
(function(){
    (function(){
        return f110 = (function(v329){
            ((v329)["fname"] = "%COMPILE-DEFUN");
            return v329;
        })((function (v330){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v331){
                            f96(v331);
                            return v325 = ({car: f68("var ", f94(v331)), cdr: v325});
                        })(f107(v330, v289));
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
    })();
    return l112;
})(); 
var l115 = f3("%COMPILE-DEFMACRO");
var l114 = f3("FUNCTION");
var l113 = f3("MACRO");
var f111;
(function(){
    (function(){
        return f111 = (function(v332){
            ((v332)["fname"] = "%COMPILE-DEFMACRO");
            return v332;
        })((function (v333,v334){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f99(f91(v333, l113, v334, v3), v289, l114);
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
    })();
    return l115;
})(); 
var l116 = f3("*COMPILATIONS*");
var v335;
(function(){
    (function(){
        return v335 = v2;
    })();
    return l116;
})(); 
var l117 = f3("LS-COMPILE-BLOCK");
var f112;
(function(){
    (function(){
        return f112 = (function(v336){
            ((v336)["fname"] = "LS-COMPILE-BLOCK");
            return v336;
        })((function (v337,v338){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f70(f59((function (v339){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v340){
                                return (v340 !== v2 ? v340 : (((typeof(v339) == "string")?v3: v2) !== v2 ? f14(f43(v339)) : v2));
                            })(f1(v339));
                        }), f45((function (v341){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f73(v341, v338);
                        }), v337)), f68(";", v176));
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
    })();
    return l117;
})(); 
var l118 = f3("IF");
v335 = ({car: f33(l118, (function (v342,v343,v344,v345){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f68("(", f73(v343, v342), " !== ", f73(v2), " ? ", f73(v344, v342), " : ", f73(v345, v342), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 126)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l120 = f3("*LAMBDA-LIST-KEYWORDS*");
var l119 = {car: f3("&OPTIONAL"), cdr: {car: f3("&REST"), cdr: f3("NIL")}};
var v346;
(function(){
    (function(){
        return v346 = l119;
    })();
    return l120;
})(); 
var l121 = f3("LIST-UNTIL-KEYWORD");
var f113;
(function(){
    (function(){
        return f113 = (function(v347){
            ((v347)["fname"] = "LIST-UNTIL-KEYWORD");
            return v347;
        })((function (v348){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((function(v349){
                            return (v349 !== v2 ? v349 : f57((function(){
                                var tmp = v348;
                                return tmp === v2? v2: tmp.car;
                            })(), v346));
                        })(f1(v348)) !== v2 ? v2 : ({car: (function(){
                            var tmp = v348;
                            return tmp === v2? v2: tmp.car;
                        })(), cdr: f113((function(){
                            var tmp = v348;
                            return tmp === v2? v2: tmp.cdr;
                        })())}));
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
    })();
    return l121;
})(); 
var l122 = f3("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f114;
(function(){
    (function(){
        return f114 = (function(v350){
            ((v350)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v350;
        })((function (v351){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f113(v351);
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
    })();
    return l122;
})(); 
var l124 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l123 = f3("&OPTIONAL");
var f115;
(function(){
    (function(){
        return f115 = (function(v352){
            ((v352)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v352;
        })((function (v353){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f35, f113((function(){
                            var tmp = f57(l123, v353);
                            return tmp === v2? v2: tmp.cdr;
                        })()));
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
    })();
    return l124;
})(); 
var l125 = f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f116;
(function(){
    (function(){
        return f116 = (function(v354){
            ((v354)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v354;
        })((function (v355){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f45(f20, f115(v355));
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
    })();
    return l125;
})(); 
var l127 = f3("LAMBDA-LIST-REST-ARGUMENT");
var l126 = f3("&REST");
var f117;
(function(){
    (function(){
        return f117 = (function(v356){
            ((v356)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v356;
        })((function (v357){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v358){
                            ((function(){
                                var tmp = v358;
                                return tmp === v2? v2: tmp.cdr;
                            })() !== v2 ? (function(){
                                return (function(){
                                    throw "Bad lambda-list";
                                })();
                            })() : v2);
                            return (function(){
                                var tmp = v358;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })(f113((function(){
                            var tmp = f57(l126, v357);
                            return tmp === v2? v2: tmp.cdr;
                        })()));
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
    })();
    return l127;
})(); 
var l128 = f3("LAMBDA");
v335 = ({car: f33(l128, (function (v360,v361){
    if (arguments.length < 2) throw 'too few arguments';
    var v359= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v359 = {car: arguments[i], cdr: v359};
    return (function(){
        try {
            return (function(){
                return (function(v362,v363,v364){
                    return (function(v365,v366,v367){
                        return f68("(function (", f69(f45((function (v368){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f105(v368, v367);
                        }), f39(v362, v363)), ","), "){", v176, f71((v362 !== v2 ? f68("if (arguments.length < ", f6(v365), ") throw 'too few arguments';", v176) : ""), (f17(v364) !== v2 ? f68("if (arguments.length > ", f6((function(){
                            var x = v365;
                            var y = v366;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })()), ") throw 'too many arguments';", v176) : ""), (v363 !== v2 ? f68("switch(arguments.length){", v176, (function(v369,v370,v371){
                            return (function(){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(){
                                                while(((function(){
                                                    var x = v371;
                                                    var y = v366;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x<y;
                                                })()?v3: v2) !== v2){
                                                    (function(v372){
                                                        v370 = ({car: f68("case ", f6((function(){
                                                            var x = v371;
                                                            var y = v365;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })()), ":", v176, f105((function(){
                                                            var tmp = v372;
                                                            return tmp === v2? v2: tmp.car;
                                                        })(), v367), "=", f73(f23(v372), v367), ";", v176), cdr: v370});
                                                        return v371 = (function(){
                                                            var x = v371;
                                                            var y = 1;
                                                            if (typeof x != 'number')
                                                                throw 'The value ' + x + ' is not a type number.';
                                                            if (typeof y != 'number')
                                                                throw 'The value ' + y + ' is not a type number.';
                                                            return x+y;
                                                        })();
                                                    })(f54(v371, v369));
                                                }return v2;
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
                                v370 = ({car: f68("default: break;", v176), cdr: v370});
                                return f69(f41(v370));
                            })();
                        })(f115(v361),v2,0), "}", v176) : ""), (v364 !== v2 ? (function(v373){
                            return f68("var ", v373, "= ", f73(v2), ";", v176, "for (var i = arguments.length-1; i>=", f6((function(){
                                var x = v365;
                                var y = v366;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()), "; i--)", v176, f71(v373, " = ", "{car: arguments[i], cdr: "), v373, "};", v176);
                        })(f105(v364, v367)) : ""), f68(f112(f56(v359), v367), "return ", f73((function(){
                            var tmp = f55(v359);
                            return tmp === v2? v2: tmp.car;
                        })(), v367), ";")), v176, "})");
                    })(f43(v362),f43(v363),f106(f39(f35(v364), v362, v363), v360));
                })(f114(v361),f116(v361),f117(v361));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 132)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l129 = f3("FSETQ");
v335 = ({car: f33(l129, (function (v374,v375,v376){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f68(f108(v375, v374), " = ", f73(v376, v374));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 134)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l130 = f3("SETQ");
v335 = ({car: f33(l130, (function (v377,v378,v379){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f68(f105(v378, v377), " = ", f73(v379, v377));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 135)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l131 = f3("ESCAPE-STRING");
var f75;
(function(){
    (function(){
        return f75 = (function(v380){
            ((v380)["fname"] = "ESCAPE-STRING");
            return v380;
        })((function (v381){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v382,v383,v384){
                            (function(){
                                try {
                                    return (function(){
                                        return (function(){
                                            while(((function(){
                                                var x = v383;
                                                var y = v384;
                                                if (typeof x != 'number')
                                                    throw 'The value ' + x + ' is not a type number.';
                                                if (typeof y != 'number')
                                                    throw 'The value ' + y + ' is not a type number.';
                                                return x<y;
                                            })()?v3: v2) !== v2){
                                                (function(v385){
                                                    ((function(v386){
                                                        return (v386 !== v2 ? v386 : f50(v385, 92));
                                                    })(f50(v385, 34)) !== v2 ? (function(){
                                                        return v382 = f68(v382, "\\");
                                                    })() : v2);
                                                    (f50(v385, 10) !== v2 ? (function(){
                                                        v382 = f68(v382, "\\");
                                                        return v385 = 110;
                                                    })() : v2);
                                                    return v382 = f68(v382, (function(){
                                                        var x = v385;
                                                        if (typeof x != 'number')
                                                            throw 'The value ' + x + ' is not a type number.';
                                                        return String.fromCharCode(x);
                                                    })());
                                                })((function(){
                                                    var string = v381;
                                                    var index = v383;
                                                    if (typeof string != 'string')
                                                        throw 'The value ' + string + ' is not a type string.';
                                                    if (typeof index != 'number')
                                                        throw 'The value ' + index + ' is not a type number.';
                                                    return string.charCodeAt(index);
                                                })());
                                                v383 = (function(){
                                                    var x = v383;
                                                    var y = 1;
                                                    if (typeof x != 'number')
                                                        throw 'The value ' + x + ' is not a type number.';
                                                    if (typeof y != 'number')
                                                        throw 'The value ' + y + ' is not a type number.';
                                                    return x+y;
                                                })();
                                            }return v2;
                                        })();
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 137)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })();
                            return v382;
                        })("",0,f43(v381));
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
    })();
    return l131;
})(); 
var l133 = f3("LITERAL->JS");
var l132 = f3("INTERN");
var f118;
(function(){
    (function(){
        return f118 = (function(v387){
            ((v387)["fname"] = "LITERAL->JS");
            return v387;
        })((function (v388){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f51(v388) !== v2 ? (function(){
                            return f6(v388);
                        })() : (((typeof(v388) == "string")?v3: v2) !== v2 ? (function(){
                            return f68("\"", f75(v388), "\"");
                        })() : (((function(){
                            var tmp = v388;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f73(f39(f33(l132), f33(f75((v388).name))), v289);
                        })() : (((function(){
                            var tmp = v388;
                            return (typeof tmp == 'object' && 'car' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f68("{car: ", f118((function(){
                                var tmp = v388;
                                return tmp === v2? v2: tmp.car;
                            })()), ", cdr: ", f118((function(){
                                var tmp = v388;
                                return tmp === v2? v2: tmp.cdr;
                            })()), "}");
                        })() : v2))));
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
    })();
    return l133;
})(); 
var l134 = f3("*LITERAL-COUNTER*");
var v389;
(function(){
    (function(){
        return v389 = 0;
    })();
    return l134;
})(); 
var l135 = f3("LITERAL");
var f119;
(function(){
    (function(){
        return f119 = (function(v390){
            ((v390)["fname"] = "LITERAL");
            return v390;
        })((function (v391){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v392){
                            v325 = ({car: f68("var ", v392, " = ", f118(v391)), cdr: v325});
                            return v392;
                        })(f68("l", f6(v389 = (function(){
                            var x = v389;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })())));
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
    })();
    return l135;
})(); 
var l136 = f3("QUOTE");
v335 = ({car: f33(l136, (function (v393,v394){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f119(v394);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 140)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l137 = f3("%WHILE");
v335 = ({car: f33(l137, (function (v396,v397){
    if (arguments.length < 2) throw 'too few arguments';
    var v395= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v395 = {car: arguments[i], cdr: v395};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("while(", f73(v397, v396), " !== ", f73(v2), "){", v176, f71(f112(v395, v396)), "}", "return ", f73(v2), ";", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 141)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l139 = f3("LAMBDA");
var l138 = f3("FUNCTION");
v335 = ({car: f33(l138, (function (v398,v399){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return ((f36(v399) !== v2 ? (((function(){
                    var tmp = v399;
                    return tmp === v2? v2: tmp.car;
                })() === l139)?v3: v2) : v2) !== v2 ? (function(){
                    return f73(v399, v398);
                })() : (((function(){
                    var tmp = v399;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return f108(v399, v398);
                })() : v2));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 142)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l141 = f3("PROGN");
var l140 = f3("EVAL-WHEN-COMPILE");
v335 = ({car: f33(l140, (function (v401){
    if (arguments.length < 1) throw 'too few arguments';
    var v400= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v400 = {car: arguments[i], cdr: v400};
    return (function(){
        try {
            return (function(){
                f120(({car: l141, cdr: v400}));
                return "";
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 143)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l142 = f3("PROGN");
v335 = ({car: f33(l142, (function (v403){
    if (arguments.length < 1) throw 'too few arguments';
    var v402= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v402 = {car: arguments[i], cdr: v402};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71(f112(f56(v402), v403), "return ", f73((function(){
                    var tmp = f55(v402);
                    return tmp === v2? v2: tmp.car;
                })(), v403), ";", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 144)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l143 = f3("LET");
v335 = ({car: f33(l143, (function (v405,v406){
    if (arguments.length < 2) throw 'too few arguments';
    var v404= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v404 = {car: arguments[i], cdr: v404};
    return (function(){
        try {
            return (function(){
                return (function(v407){
                    return (function(v408,v409){
                        return (function(v410){
                            return f68("(function(", f69(f45((function (v411){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f105(v411, v410);
                            }), v408), ","), "){", v176, f71(f112(f56(v404), v410), "return ", f73((function(){
                                var tmp = f55(v404);
                                return tmp === v2? v2: tmp.car;
                            })(), v410), ";", v176), "})(", f69(f45((function (v412){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f73(v412, v405);
                            }), v409), ","), ")");
                        })(f106(v408, v405));
                    })(f45(f29, v407),f45(f30, v407));
                })(f45(f35, v406));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 145)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l144 = f3("*BLOCK-COUNTER*");
var v413;
(function(){
    (function(){
        return v413 = 0;
    })();
    return l144;
})(); 
var l148 = f3("BLOCK");
var l147 = f3("BLOCK");
var l146 = f3("PROGN");
var l145 = f3("BLOCK");
v335 = ({car: f33(l145, (function (v415,v416){
    if (arguments.length < 2) throw 'too few arguments';
    var v414= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v414 = {car: arguments[i], cdr: v414};
    return (function(){
        try {
            return (function(){
                return (function(v417){
                    return (function(v418){
                        return f68("(function(){", v176, f71("try {", v176, f71("return ", f73(f39(f33(l146), v414), f100(f33(v418), v415, l147)), ";", v176), "}", v176, "catch (cf){", v176, "    if (cf.type == 'block' && cf.id == ", v417, ")", v176, "        return cf.value;", v176, "    else", v176, "        throw cf;", v176, "}", v176), "})()");
                    })(f91(v416, l148, v417, v3));
                })(f6(v413 = (function(){
                    var x = v413;
                    var y = 1;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 146)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l150 = f3("BLOCK");
var l149 = f3("RETURN-FROM");
v335 = ({car: f33(l149, (function (v419,v420,v421){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v421=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return (function(v422){
                    return (v422 !== v2 ? f68("(function(){", v176, f71("throw ({", "type: 'block', ", "id: ", f94(v422), ", ", "value: ", f73(v421, v419), ", ", "message: 'Return from unknown block ", (v420).name, ".'", "})"), "})()") : (function(){
                        throw f68("Unknown block `", (v420).name, "'.");
                    })());
                })(f101(v420, v419, l150));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 147)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l152 = f3("PROGN");
var l151 = f3("CATCH");
v335 = ({car: f33(l151, (function (v424,v425){
    if (arguments.length < 2) throw 'too few arguments';
    var v423= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v423 = {car: arguments[i], cdr: v423};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("var id = ", f73(v425, v424), ";", v176, "try {", v176, f71("return ", f73(f39(f33(l152), v423)), ";", v176), "}", v176, "catch (cf){", v176, "    if (cf.type == 'catch' && cf.id == id)", v176, "        return cf.value;", v176, "    else", v176, "        throw cf;", v176, "}", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 148)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l153 = f3("THROW");
v335 = ({car: f33(l153, (function (v426,v427,v428){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    switch(arguments.length){
    case 2:
    v428=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("throw ({", "type: 'catch', ", "id: ", f73(v427, v426), ", ", "value: ", f73(v428, v426), ", ", "message: 'Throw uncatched.'", "})"), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 149)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l154 = f3("*TAGBODY-COUNTER*");
var v429;
(function(){
    (function(){
        return v429 = 0;
    })();
    return l154;
})(); 
var l155 = f3("*GO-TAG-COUNTER*");
var v430;
(function(){
    (function(){
        return v430 = 0;
    })();
    return l155;
})(); 
var l156 = f3("GO-TAG-P");
var f121;
(function(){
    (function(){
        return f121 = (function(v431){
            ((v431)["fname"] = "GO-TAG-P");
            return v431;
        })((function (v432){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v433){
                            return (v433 !== v2 ? v433 : ((function(){
                                var tmp = v432;
                                return (typeof tmp == 'object' && 'name' in tmp);
                            })()?v3: v2));
                        })(f51(v432));
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
    })();
    return l156;
})(); 
var l159 = f3("DECLARE-TAGBODY-TAGS");
var l158 = f3("GOTAG");
var l157 = f3("GOTAG");
var f122;
(function(){
    (function(){
        return f122 = (function(v434){
            ((v434)["fname"] = "DECLARE-TAGBODY-TAGS");
            return v434;
        })((function (v435,v436,v437){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (function(v438){
                            return f100(v438, v435, l157);
                        })(f45((function (v439){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return (function(v440){
                                return f91(v439, l158, f33(v436, v440), v3);
                            })(f6(v430 = (function(){
                                var x = v430;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })()));
                        }), f60(f121, v437)));
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
    })();
    return l159;
})(); 
var l164 = f3("GOTAG");
var l163 = f3("GOTAG");
var l162 = f3("NIL");
var l161 = f3("PROGN");
var l160 = f3("TAGBODY");
v335 = ({car: f33(l160, (function (v442){
    if (arguments.length < 1) throw 'too few arguments';
    var v441= v2;
    for (var i = arguments.length-1; i>=1; i--)
        v441 = {car: arguments[i], cdr: v441};
    return (function(){
        try {
            return (function(){
                (f64(f121, v441) !== v2 ? v2 : (function(){
                    return (function(){
                        throw ({type: 'block', id: 152, value: f73(f39(f33(l161), v441, f33(l162)), v442), message: 'Return from unknown block TAGBODY.'})})();
                })());
                (f121((function(){
                    var tmp = v441;
                    return tmp === v2? v2: tmp.car;
                })()) !== v2 ? v2 : (function(){
                    return v441 = ({car: f5("START"), cdr: v441});
                })());
                return (function(v443){
                    return (function(v444,v445){
                        (function(v446){
                            return v445 = f30(f94(v446));
                        })(f101(f29(v441), v444, l163));
                        return f68("(function(){", v176, f71("var tagbody_", v443, " = ", v445, ";", v176, "tbloop:", v176, "while (true) {", v176, f71("try {", v176, f71((function(v447){
                            return f68("switch(tagbody_", v443, "){", v176, "case ", v445, ":", v176, (function(){
                                try {
                                    return (function(){
                                        return (function(v448,v449){
                                            (function(){
                                                while(v448 !== v2){
                                                    v449 = (function(){
                                                        var tmp = v448;
                                                        return tmp === v2? v2: tmp.car;
                                                    })();
                                                    (function(){
                                                        v447 = f68(v447, (function(){
                                                            return (f17(f121(v449)) !== v2 ? f71(f73(v449, v444), ";", v176) : (function(v450){
                                                                return f68("case ", f30(f94(v450)), ":", v176);
                                                            })(f101(v449, v444, l164)));
                                                        })());
                                                        return v2;
                                                    })();
                                                    v448 = (function(){
                                                        var tmp = v448;
                                                        return tmp === v2? v2: tmp.cdr;
                                                    })();
                                                }return v2;
                                            })();
                                            return v447;
                                        })((function(){
                                            var tmp = v441;
                                            return tmp === v2? v2: tmp.cdr;
                                        })(),v2);
                                    })();
                                }
                                catch (cf){
                                    if (cf.type == 'block' && cf.id == 153)
                                        return cf.value;
                                    else
                                        throw cf;
                                }
                            })(), "default:", v176, "    break tbloop;", v176, "}", v176);
                        })("")), "}", v176, "catch (jump) {", v176, "    if (jump.type == 'tagbody' && jump.id == ", v443, ")", v176, "        tagbody_", v443, " = jump.label;", v176, "    else", v176, "        throw(jump);", v176, "}", v176), "}", v176, "return ", f73(v2), ";", v176), "})()");
                    })(f122(v442, v443, v441),v2);
                })(f6(v429));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 152)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l166 = f3("GOTAG");
var l165 = f3("GO");
v335 = ({car: f33(l165, (function (v451,v452){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v453,v454){
                    return (v453 !== v2 ? f68("(function(){", v176, f71("throw ({", "type: 'tagbody', ", "id: ", f29(f94(v453)), ", ", "label: ", f30(f94(v453)), ", ", "message: 'Attempt to GO to non-existing tag ", v454, "'", "})", v176), "})()") : (function(){
                        throw f68("Unknown tag `", v454, "'.");
                    })());
                })(f101(v452, v451, l166),(((function(){
                    var tmp = v452;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v3: v2) !== v2 ? (function(){
                    return (v452).name;
                })() : (f51(v452) !== v2 ? (function(){
                    return f6(v452);
                })() : v2)));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 154)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l167 = f3("UNWIND-PROTECT");
v335 = ({car: f33(l167, (function (v456,v457){
    if (arguments.length < 2) throw 'too few arguments';
    var v455= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v455 = {car: arguments[i], cdr: v455};
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("var ret = ", f73(v2), ";", v176, "try {", v176, f71("ret = ", f73(v457, v456), ";", v176), "} finally {", v176, f71(f112(v455, v456)), "}", v176, "return ret;", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 155)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l176 = f3("BACKQUOTE-EXPAND-1");
var l175 = f3("LIST");
var l174 = f3("UNQUOTE-SPLICING");
var l173 = f3("LIST");
var l172 = f3("UNQUOTE");
var l171 = f3("APPEND");
var l170 = f3("BACKQUOTE");
var l169 = f3("UNQUOTE");
var l168 = f3("QUOTE");
var f123;
(function(){
    (function(){
        return f123 = (function(v458){
            ((v458)["fname"] = "BACKQUOTE-EXPAND-1");
            return v458;
        })((function (v459){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v459;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f33(l168, v459);
                        })() : (f34(v459) !== v2 ? (function(){
                            return v459;
                        })() : ((((function(){
                            var tmp = v459;
                            return tmp === v2? v2: tmp.car;
                        })() === l169)?v3: v2) !== v2 ? (function(){
                            return (function(){
                                var tmp = v459;
                                return tmp === v2? v2: tmp.car;
                            })();
                        })() : ((((function(){
                            var tmp = v459;
                            return tmp === v2? v2: tmp.car;
                        })() === l170)?v3: v2) !== v2 ? (function(){
                            return f123(f123(f23(v459)));
                        })() : (function(){
                            return ({car: l171, cdr: f45((function (v460){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return ((f36(v460) !== v2 ? (((function(){
                                    var tmp = v460;
                                    return tmp === v2? v2: tmp.car;
                                })() === l172)?v3: v2) : v2) !== v2 ? (function(){
                                    return f33(l173, f23(v460));
                                })() : ((f36(v460) !== v2 ? (((function(){
                                    var tmp = v460;
                                    return tmp === v2? v2: tmp.car;
                                })() === l174)?v3: v2) : v2) !== v2 ? (function(){
                                    return f23(v460);
                                })() : (function(){
                                    return f33(l175, f123(v460));
                                })()));
                            }), v459)});
                        })()))));
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
    })();
    return l176;
})(); 
var l178 = f3("BACKQUOTE-EXPAND");
var l177 = f3("BACKQUOTE");
var f124;
(function(){
    (function(){
        return f124 = (function(v461){
            ((v461)["fname"] = "BACKQUOTE-EXPAND");
            return v461;
        })((function (v462){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return ((f36(v462) !== v2 ? (((function(){
                            var tmp = v462;
                            return tmp === v2? v2: tmp.car;
                        })() === l177)?v3: v2) : v2) !== v2 ? f123(f23(v462)) : v462);
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
    })();
    return l178;
})(); 
var l179 = f3("BACKQUOTE");
v335 = ({car: f33(l179, (function (v463,v464){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return f73(f123(v464), v463);
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 158)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l180 = f3("NUM-OP-NUM");
var f125;
(function(){
    (function(){
        return f125 = (function(v465){
            ((v465)["fname"] = "NUM-OP-NUM");
            return v465;
        })((function (v466,v467,v468){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return f68("(function(){", v176, f71(f68("var ", "x", " = ", v466, ";", v176), f68("var ", "y", " = ", v468, ";", v176), f68("if (typeof ", "x", " != '", "number", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v176)), f68("if (typeof ", "y", " != '", "number", "')", v176, f71("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                            return f68("x", v467, "y");
                        })(), ";", v176)), "})()");
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
    })();
    return l180;
})(); 
var l181 = f3("+");
v335 = ({car: f33(l181, (function (v469,v470,v471){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v472,v473){
                    return f125(v472, "+", v473);
                })(f73(v470, v469),f73(v471, v469));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 160)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l182 = f3("-");
v335 = ({car: f33(l182, (function (v474,v475,v476){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v477,v478){
                    return f125(v477, "-", v478);
                })(f73(v475, v474),f73(v476, v474));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 161)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l183 = f3("*");
v335 = ({car: f33(l183, (function (v479,v480,v481){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v482,v483){
                    return f125(v482, "*", v483);
                })(f73(v480, v479),f73(v481, v479));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 162)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l184 = f3("/");
v335 = ({car: f33(l184, (function (v484,v485,v486){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v487,v488){
                    return f125(v487, "/", v488);
                })(f73(v485, v484),f73(v486, v484));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 163)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l185 = f3("MOD");
v335 = ({car: f33(l185, (function (v489,v490,v491){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v492,v493){
                    return f125(v492, "%", v493);
                })(f73(v490, v489),f73(v491, v489));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 164)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l186 = f3("<");
v335 = ({car: f33(l186, (function (v494,v495,v496){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v497,v498){
                    return f72(f125(v497, "<", v498));
                })(f73(v495, v494),f73(v496, v494));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 165)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l187 = f3(">");
v335 = ({car: f33(l187, (function (v499,v500,v501){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v502,v503){
                    return f72(f125(v502, ">", v503));
                })(f73(v500, v499),f73(v501, v499));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 166)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l188 = f3("=");
v335 = ({car: f33(l188, (function (v504,v505,v506){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v507,v508){
                    return f72(f125(v507, "==", v508));
                })(f73(v505, v504),f73(v506, v504));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 167)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l189 = f3("<=");
v335 = ({car: f33(l189, (function (v509,v510,v511){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v512,v513){
                    return f72(f125(v512, "<=", v513));
                })(f73(v510, v509),f73(v511, v509));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 168)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l190 = f3(">=");
v335 = ({car: f33(l190, (function (v514,v515,v516){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v517,v518){
                    return f72(f125(v517, ">=", v518));
                })(f73(v515, v514),f73(v516, v514));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 169)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l191 = f3("NUMBERP");
v335 = ({car: f33(l191, (function (v519,v520){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v521){
                    return f72(f68("(typeof (", v521, ") == \"number\")"));
                })(f73(v520, v519));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 170)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l192 = f3("FLOOR");
v335 = ({car: f33(l192, (function (v522,v523){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v524){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v524, ";", v176), f68("if (typeof ", "x", " != '", "number", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                        return "Math.floor(x)";
                    })(), ";", v176)), "})()");
                })(f73(v523, v522));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 171)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l193 = f3("CONS");
v335 = ({car: f33(l193, (function (v525,v526,v527){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v528,v529){
                    return f68("({car: ", v528, ", cdr: ", v529, "})");
                })(f73(v526, v525),f73(v527, v525));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 172)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l194 = f3("CONSP");
v335 = ({car: f33(l194, (function (v530,v531){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v532){
                    return f72(f68("(function(){", v176, f71("var tmp = ", v532, ";", v176, "return (typeof tmp == 'object' && 'car' in tmp);", v176), "})()"));
                })(f73(v531, v530));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 173)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l195 = f3("CAR");
v335 = ({car: f33(l195, (function (v533,v534){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v535){
                    return f68("(function(){", v176, f71("var tmp = ", v535, ";", v176, "return tmp === ", f73(v2), "? ", f73(v2), ": tmp.car;", v176), "})()");
                })(f73(v534, v533));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 174)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l196 = f3("CDR");
v335 = ({car: f33(l196, (function (v536,v537){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v538){
                    return f68("(function(){", v176, f71("var tmp = ", v538, ";", v176, "return tmp === ", f73(v2), "? ", f73(v2), ": tmp.cdr;", v176), "})()");
                })(f73(v537, v536));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 175)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l197 = f3("SETCAR");
v335 = ({car: f33(l197, (function (v539,v540,v541){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v542,v543){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v542, ";", v176), f68("if (typeof ", "x", " != '", "object", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v176)), f68("return ", (function(){
                        return f68("(x.car = ", v543, ")");
                    })(), ";", v176)), "})()");
                })(f73(v540, v539),f73(v541, v539));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 176)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l198 = f3("SETCDR");
v335 = ({car: f33(l198, (function (v544,v545,v546){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v547,v548){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v547, ";", v176), f68("if (typeof ", "x", " != '", "object", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v176)), f68("return ", (function(){
                        return f68("(x.cdr = ", v548, ")");
                    })(), ";", v176)), "})()");
                })(f73(v545, v544),f73(v546, v544));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 177)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l199 = f3("SYMBOLP");
v335 = ({car: f33(l199, (function (v549,v550){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v551){
                    return f72(f68("(function(){", v176, f71("var tmp = ", v551, ";", v176, "return (typeof tmp == 'object' && 'name' in tmp);", v176), "})()"));
                })(f73(v550, v549));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 178)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l200 = f3("MAKE-SYMBOL");
v335 = ({car: f33(l200, (function (v552,v553){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v554){
                    return f68("(function(){", v176, f71(f68("var ", "name", " = ", v554, ";", v176), f68("if (typeof ", "name", " != '", "string", "')", v176, f71("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "({name: name})";
                    })(), ";", v176)), "})()");
                })(f73(v553, v552));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 179)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l201 = f3("SYMBOL-NAME");
v335 = ({car: f33(l201, (function (v555,v556){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v557){
                    return f68("(", v557, ").name");
                })(f73(v556, v555));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 180)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l202 = f3("EQ");
v335 = ({car: f33(l202, (function (v558,v559,v560){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v561,v562){
                    return f72(f68("(", v561, " === ", v562, ")"));
                })(f73(v559, v558),f73(v560, v558));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 181)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l203 = f3("EQUAL");
v335 = ({car: f33(l203, (function (v563,v564,v565){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v566,v567){
                    return f72(f68("(", v566, " == ", v567, ")"));
                })(f73(v564, v563),f73(v565, v563));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 182)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l204 = f3("STRING");
v335 = ({car: f33(l204, (function (v568,v569){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v570){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v570, ";", v176), f68("if (typeof ", "x", " != '", "number", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                        return "String.fromCharCode(x)";
                    })(), ";", v176)), "})()");
                })(f73(v569, v568));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 183)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l205 = f3("STRINGP");
v335 = ({car: f33(l205, (function (v571,v572){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v573){
                    return f72(f68("(typeof(", v573, ") == \"string\")"));
                })(f73(v572, v571));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 184)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l206 = f3("STRING-UPCASE");
v335 = ({car: f33(l206, (function (v574,v575){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v576){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v576, ";", v176), f68("if (typeof ", "x", " != '", "string", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "x.toUpperCase()";
                    })(), ";", v176)), "})()");
                })(f73(v575, v574));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 185)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l207 = f3("STRING-LENGTH");
v335 = ({car: f33(l207, (function (v577,v578){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v579){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v579, ";", v176), f68("if (typeof ", "x", " != '", "string", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "x.length";
                    })(), ";", v176)), "})()");
                })(f73(v578, v577));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 186)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l208 = f3("SLICE");
v335 = ({car: f33(l208, (function (v580,v581,v582,v583){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    switch(arguments.length){
    case 3:
    v583=v2;
    default: break;
    }
    return (function(){
        try {
            return (function(){
                return f68("(function(){", v176, f71("var str = ", f73(v581, v580), ";", v176, "var a = ", f73(v582, v580), ";", v176, "var b;", v176, (v583 !== v2 ? f68("b = ", f73(v583, v580), ";", v176) : ""), "return str.slice(a,b);", v176), "})()");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 187)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l209 = f3("CHAR");
v335 = ({car: f33(l209, (function (v584,v585,v586){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v587,v588){
                    return f68("(function(){", v176, f71(f68("var ", "string", " = ", v587, ";", v176), f68("var ", "index", " = ", v588, ";", v176), f68("if (typeof ", "string", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v176)), f68("if (typeof ", "index", " != '", "number", "')", v176, f71("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v176)), f68("return ", (function(){
                        return "string.charCodeAt(index)";
                    })(), ";", v176)), "})()");
                })(f73(v585, v584),f73(v586, v584));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 188)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l210 = f3("CONCAT-TWO");
v335 = ({car: f33(l210, (function (v589,v590,v591){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v592,v593){
                    return f68("(function(){", v176, f71(f68("var ", "string1", " = ", v592, ";", v176), f68("var ", "string2", " = ", v593, ";", v176), f68("if (typeof ", "string1", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v176)), f68("if (typeof ", "string2", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "string1.concat(string2)";
                    })(), ";", v176)), "})()");
                })(f73(v590, v589),f73(v591, v589));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 189)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l211 = f3("FUNCALL");
v335 = ({car: f33(l211, (function (v595,v596){
    if (arguments.length < 2) throw 'too few arguments';
    var v594= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v594 = {car: arguments[i], cdr: v594};
    return (function(){
        try {
            return (function(){
                return f68("(", f73(v596, v595), ")(", f69(f45((function (v597){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f73(v597, v595);
                }), v594), ", "), ")");
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 190)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l212 = f3("APPLY");
v335 = ({car: f33(l212, (function (v599,v600){
    if (arguments.length < 2) throw 'too few arguments';
    var v598= v2;
    for (var i = arguments.length-1; i>=2; i--)
        v598 = {car: arguments[i], cdr: v598};
    return (function(){
        try {
            return (function(){
                return (f1(v598) !== v2 ? f68("(", f73(v600, v599), ")()") : (function(v601,v602){
                    return f68("(function(){", v176, f71("var f = ", f73(v600, v599), ";", v176, "var args = [", f69(f45((function (v603){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return f73(v603, v599);
                    }), v601), ", "), "];", v176, "var tail = (", f73(v602, v599), ");", v176, "while (tail != ", f73(v2), "){", v176, "    args.push(tail.car);", v176, "    tail = tail.cdr;", v176, "}", v176, "return f.apply(this, args);", v176), "})()");
                })(f56(v598),(function(){
                    var tmp = f55(v598);
                    return tmp === v2? v2: tmp.car;
                })()));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 191)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l213 = f3("JS-EVAL");
v335 = ({car: f33(l213, (function (v604,v605){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v606){
                    return f68("(function(){", v176, f71(f68("var ", "string", " = ", v606, ";", v176), f68("if (typeof ", "string", " != '", "string", "')", v176, f71("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "eval.apply(window, [string])";
                    })(), ";", v176)), "})()");
                })(f73(v605, v604));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 192)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l214 = f3("ERROR");
v335 = ({car: f33(l214, (function (v607,v608){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v609){
                    return f68("(function(){", v176, f71("throw ", v609, ";", v176), "})()");
                })(f73(v608, v607));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 193)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l215 = f3("NEW");
v335 = ({car: f33(l215, (function (v610){
    if (arguments.length < 1) throw 'too few arguments';
    if (arguments.length > 1) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(){
                    return "{}";
                })();
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 194)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l216 = f3("GET");
v335 = ({car: f33(l216, (function (v611,v612,v613){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v614,v615){
                    return f68("(function(){", v176, f71("var tmp = ", "(", v614, ")[", v615, "];", v176, "return tmp == undefined? ", f73(v2), ": tmp ;", v176), "})()");
                })(f73(v612, v611),f73(v613, v611));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 195)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l217 = f3("SET");
v335 = ({car: f33(l217, (function (v616,v617,v618,v619){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v620,v621,v622){
                    return f68("((", v620, ")[", v621, "] = ", v622, ")");
                })(f73(v617, v616),f73(v618, v616),f73(v619, v616));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 196)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l218 = f3("IN");
v335 = ({car: f33(l218, (function (v623,v624,v625){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v626,v627){
                    return f72(f68("((", v626, ") in (", v627, "))"));
                })(f73(v624, v623),f73(v625, v623));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 197)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l219 = f3("FUNCTIONP");
v335 = ({car: f33(l219, (function (v628,v629){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v630){
                    return f72(f68("(typeof ", v630, " == 'function')"));
                })(f73(v629, v628));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 198)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l220 = f3("WRITE-STRING");
v335 = ({car: f33(l220, (function (v631,v632){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        try {
            return (function(){
                return (function(v633){
                    return f68("(function(){", v176, f71(f68("var ", "x", " = ", v633, ";", v176), f68("if (typeof ", "x", " != '", "string", "')", v176, f71("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v176)), f68("return ", (function(){
                        return "lisp.write(x)";
                    })(), ";", v176)), "})()");
                })(f73(v632, v631));
            })();
        }
        catch (cf){
            if (cf.type == 'block' && cf.id == 199)
                return cf.value;
            else
                throw cf;
        }
    })();
})), cdr: v335}); 
var l222 = f3("MACROP");
var l221 = f3("MACRO");
var f126;
(function(){
    (function(){
        return f126 = (function(v634){
            ((v634)["fname"] = "MACROP");
            return v634;
        })((function (v635){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v635;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? ((f93(f107(v635, v289)) === l221)?v3: v2) : v2);
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
    })();
    return l222;
})(); 
var l224 = f3("LS-MACROEXPAND-1");
var l223 = f3("MACRO");
var f127;
(function(){
    (function(){
        return f127 = (function(v636){
            ((v636)["fname"] = "LS-MACROEXPAND-1");
            return v636;
        })((function (v637,v638){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (f126((function(){
                            var tmp = v637;
                            return tmp === v2? v2: tmp.car;
                        })()) !== v2 ? (function(v639){
                            return (((f93(v639) === l223)?v3: v2) !== v2 ? (function(){
                                var f = f120(f94(v639));
                                var args = [];
                                var tail = ((function(){
                                    var tmp = v637;
                                    return tmp === v2? v2: tmp.cdr;
                                })());
                                while (tail != v2){
                                    args.push(tail.car);
                                    tail = tail.cdr;
                                }
                                return f.apply(this, args);
                            })() : v637);
                        })(f107((function(){
                            var tmp = v637;
                            return tmp === v2? v2: tmp.car;
                        })(), v289)) : v637);
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
    })();
    return l224;
})(); 
var l226 = f3("COMPILE-FUNCALL");
var l225 = f3("LAMBDA");
var f128;
(function(){
    (function(){
        return f128 = (function(v640){
            ((v640)["fname"] = "COMPILE-FUNCALL");
            return v640;
        })((function (v641,v642,v643){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v641;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f68(f108(v641, v643), "(", f69(f45((function (v644){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f73(v644, v643);
                            }), v642), ", "), ")");
                        })() : ((f36(v641) !== v2 ? (((function(){
                            var tmp = v641;
                            return tmp === v2? v2: tmp.car;
                        })() === l225)?v3: v2) : v2) !== v2 ? (function(){
                            return f68("(", f73(v641, v643), ")(", f69(f45((function (v645){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f73(v645, v643);
                            }), v642), ", "), ")");
                        })() : (function(){
                            return (function(){
                                throw f68("Invalid function designator ", (v641).name);
                            })();
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
        }));
    })();
    return l226;
})(); 
var l227 = f3("LS-COMPILE");
var f73;
(function(){
    (function(){
        return f73 = (function(v646){
            ((v646)["fname"] = "LS-COMPILE");
            return v646;
        })((function (v647,v648){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v648=f97();
            default: break;
            }
            return (function(){
                try {
                    return (function(){
                        return (((function(){
                            var tmp = v647;
                            return (typeof tmp == 'object' && 'name' in tmp);
                        })()?v3: v2) !== v2 ? (function(){
                            return f105(v647, v648);
                        })() : (f51(v647) !== v2 ? (function(){
                            return f6(v647);
                        })() : (((typeof(v647) == "string")?v3: v2) !== v2 ? (function(){
                            return f68("\"", f75(v647), "\"");
                        })() : (f36(v647) !== v2 ? (function(){
                            return (f66((function(){
                                var tmp = v647;
                                return tmp === v2? v2: tmp.car;
                            })(), v335) !== v2 ? (function(v649){
                                return (function(){
                                    var f = v649;
                                    var args = [v648];
                                    var tail = ((function(){
                                        var tmp = v647;
                                        return tmp === v2? v2: tmp.cdr;
                                    })());
                                    while (tail != v2){
                                        args.push(tail.car);
                                        tail = tail.cdr;
                                    }
                                    return f.apply(this, args);
                                })();
                            })(f30(f66((function(){
                                var tmp = v647;
                                return tmp === v2? v2: tmp.car;
                            })(), v335))) : (f126((function(){
                                var tmp = v647;
                                return tmp === v2? v2: tmp.car;
                            })()) !== v2 ? f73(f127(v647, v648), v648) : f128((function(){
                                var tmp = v647;
                                return tmp === v2? v2: tmp.car;
                            })(), (function(){
                                var tmp = v647;
                                return tmp === v2? v2: tmp.cdr;
                            })(), v648)));
                        })() : v2))));
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
    })();
    return l227;
})(); 
var l228 = f3("LS-COMPILE-TOPLEVEL");
var f129;
(function(){
    (function(){
        return f129 = (function(v650){
            ((v650)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v650;
        })((function (v651){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                try {
                    return (function(){
                        v325 = v2;
                        return (function(v652){
                            return (function(v653){
                                v325 = v2;
                                return v653;
                            })(f68(f69(f45((function (v654){
                                if (arguments.length < 1) throw 'too few arguments';
                                if (arguments.length > 1) throw 'too many arguments';
                                return f68(v654, ";", v176);
                            }), v325)), v652));
                        })(f73(v651));
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
    })();
    return l228;
})(); 
var l239 = f3("LS-COMPILE-TOPLEVEL");
var l238 = f3("EVAL");
var l237 = f3("PRIN1-TO-STRING");
var l236 = f3("LS-READ-FROM-STRING");
var l235 = 206;
var l234 = 156;
var l233 = 229;
var l232 = 129;
var l231 = 660;
var l230 = {car: {car: {car: f3("*GO-TAG-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v430", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TAGBODY-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v429", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*BLOCK-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v413", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LITERAL-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v389", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v346", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v335", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v325", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*FUNCTION-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v313", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*VARIABLE-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v292", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*ENVIRONMENT*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v289", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v253", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*EOF*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v246", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*NEWLINE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v176", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*GENSYM-COUNTER*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("T"), cdr: {car: f3("VARIABLE"), cdr: {car: "v3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NIL"), cdr: {car: f3("VARIABLE"), cdr: {car: "v2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*PACKAGE*"), cdr: {car: f3("VARIABLE"), cdr: {car: "v1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}, cdr: {car: {car: {car: f3("WITH-COMPILATION-UNIT"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROG1"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("SETQ"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: {car: f3("CHECK"), cdr: {car: f3("*COMPILATION-UNIT-CHECKS*"), cdr: f3("NIL")}}, cdr: {car: {car: f3("FUNCALL"), cdr: {car: f3("CHECK"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-TOPLEVEL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f129", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COMPILE-FUNCALL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f128", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-MACROEXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f127", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MACROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f126", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NUM-OP-NUM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f125", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TYPE-CHECK"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECLS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("JS!SELFCALL"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("DECL"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "')", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("DECL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ".';", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}}}, cdr: f3("NIL")}}}}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("DECLS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: ";", cdr: {car: f3("*NEWLINE*"), cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-BUILTIN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ARG"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARG"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f124", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE-EXPAND-1"), cdr: {car: f3("FUNCTION"), cdr: {car: "f123", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECLARE-TAGBODY-TAGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f122", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GO-TAG-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f121", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-TRANSFORMATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: f3("ENV"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f120", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f119", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LITERAL->JS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f118", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f117", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f116", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f115", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f114", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-UNTIL-KEYWORD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f113", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFINE-COMPILATION"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PUSH"), cdr: {car: {car: f3("LIST"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ENV"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("*COMPILATIONS*"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE-BLOCK"), cdr: {car: f3("FUNCTION"), cdr: {car: "f112", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f111", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f110", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f109", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f108", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-FUNCTION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f107", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LOCAL-ENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f106", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f105", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-VARIABLE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f104", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GVARNAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f103", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CLEAR-UNDECLARED-GLOBAL-BINDINGS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f102", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LOOKUP-IN-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f101", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EXTEND-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f100", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH-TO-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f99", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f98", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-LEXENV"), cdr: {car: f3("FUNCTION"), cdr: {car: "f97", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MARK-BINDING-AS-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f96", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-DECLARED"), cdr: {car: f3("FUNCTION"), cdr: {car: "f95", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TRANSLATION"), cdr: {car: f3("FUNCTION"), cdr: {car: "f94", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-TYPE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f93", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BINDING-NAME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f92", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-BINDING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f91", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ-FROM-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f90", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-SHARP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f89", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f88", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-READ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f87", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f86", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f85", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("READ-UNTIL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f84", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TERMINALP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f83", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SKIP-WHITESPACES"), cdr: {car: f3("FUNCTION"), cdr: {car: "f82", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHITESPACEP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f81", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%READ-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f80", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%PEEK-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f79", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAKE-STRING-STREAM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f78", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRINT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f77", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WRITE-LINE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f76", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ESCAPE-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f75", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PRIN1-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f74", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JS!SELFCALL"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CONCAT"), cdr: {car: "(function(){", cdr: {car: f3("*NEWLINE*"), cdr: {car: {car: f3("INDENT"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: "})()", cdr: f3("NIL")}}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LS-COMPILE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f73", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JS!BOOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f72", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INDENT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f71", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN-TRAILING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f70", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("JOIN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f69", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCATF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("VARIABLE"), cdr: {car: f3("&REST"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VARIABLE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VARIABLE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f68", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("STRING="), cdr: {car: f3("FUNCTION"), cdr: {car: "f67", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ASSOC"), cdr: {car: f3("FUNCTION"), cdr: {car: "f66", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EVERY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f65", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SOME"), cdr: {car: f3("FUNCTION"), cdr: {car: "f64", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PARSE-INTEGER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f63", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SUBSEQ"), cdr: {car: f3("FUNCTION"), cdr: {car: "f62", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DIGIT-CHAR-P"), cdr: {car: f3("FUNCTION"), cdr: {car: "f61", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF-NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f60", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE-IF"), cdr: {car: f3("FUNCTION"), cdr: {car: "f59", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REMOVE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f58", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MEMBER"), cdr: {car: f3("FUNCTION"), cdr: {car: "f57", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BUTLAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f56", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LAST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f55", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f54", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MINUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f53", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PLUSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f52", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGERP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f51", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR="), cdr: {car: f3("FUNCTION"), cdr: {car: "f50", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CHAR-CODE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f49", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CODE-CHAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f48", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COPY-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f47", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("IDENTITY"), cdr: {car: f3("FUNCTION"), cdr: {car: "f46", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("MAPCAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f45", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONCAT-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f44", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f43", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST-LENGTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f42", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f41", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("REVERSE-AUX"), cdr: {car: f3("FUNCTION"), cdr: {car: "f40", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f39", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("APPEND-TWO"), cdr: {car: f3("FUNCTION"), cdr: {car: "f38", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("!REDUCE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f37", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LISTP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f36", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ENSURE-LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f35", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PROG1"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VALUE"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("OR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G"), cdr: f3("NIL")}}, cdr: {car: {car: f3("OR"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("AND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: {car: f3("NULL"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("NULL"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("T"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("AND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("FORMS"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ECASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("CASE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("APPEND"), cdr: {car: f3("CLAUSULES"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("T"), cdr: {car: {car: f3("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CASE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("FORM"), cdr: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("!FORM"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("FORM"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CLAUSULE"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULE"), cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: {car: f3("EQL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("!FORM"), cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("COND"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&REST"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("NULL"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("CAAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDAR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("COND"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: {car: f3("CDR"), cdr: {car: f3("CLAUSULES"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOTIMES"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("G!TO"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("TO"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("RESULT"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: 0, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("<"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!TO"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("TAGBODY"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("INCF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("RESULT"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DOLIST"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("ITER"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("VAR"), cdr: {car: {car: f3("FIRST"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("G!LIST"), cdr: {car: {car: f3("GENSYM"), cdr: f3("NIL")}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SECOND"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VAR"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("TAGBODY"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CDR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("G!LIST"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("THIRD"), cdr: {car: f3("ITER"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNLESS"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHEN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: f3("NIL"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("PUSH"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("CONS"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("PLACE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DECF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("-"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INCF"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: {car: f3("&OPTIONAL"), cdr: {car: {car: f3("DELTA"), cdr: {car: 1, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("+"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("DELTA"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ATOM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f34", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LIST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f33", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FOURTH"), cdr: {car: f3("FUNCTION"), cdr: {car: "f32", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("THIRD"), cdr: {car: f3("FUNCTION"), cdr: {car: "f31", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("SECOND"), cdr: {car: f3("FUNCTION"), cdr: {car: "f30", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIRST"), cdr: {car: f3("FUNCTION"), cdr: {car: "f29", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f28", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f27", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f26", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f25", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f24", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CADR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f23", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f22", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CDR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f21", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CAR"), cdr: {car: f3("FUNCTION"), cdr: {car: "f20", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONSP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f19", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("CONS"), cdr: {car: f3("FUNCTION"), cdr: {car: "f18", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NOT"), cdr: {car: f3("FUNCTION"), cdr: {car: "f17", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("EQL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f16", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("TRUNCATE"), cdr: {car: f3("FUNCTION"), cdr: {car: "f15", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("ZEROP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f14", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f13", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("1+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f12", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("/"), cdr: {car: f3("FUNCTION"), cdr: {car: "f11", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("*"), cdr: {car: f3("FUNCTION"), cdr: {car: "f10", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("-"), cdr: {car: f3("FUNCTION"), cdr: {car: "f9", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("+"), cdr: {car: f3("FUNCTION"), cdr: {car: "f8", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("="), cdr: {car: f3("FUNCTION"), cdr: {car: "f7", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTEGER-TO-STRING"), cdr: {car: f3("FUNCTION"), cdr: {car: "f6", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("GENSYM"), cdr: {car: f3("FUNCTION"), cdr: {car: "f5", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("FIND-SYMBOL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f4", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERN"), cdr: {car: f3("FUNCTION"), cdr: {car: "f3", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("INTERNP"), cdr: {car: f3("FUNCTION"), cdr: {car: "f2", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("WHILE"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("CONDITION"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("BLOCK"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("%WHILE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("CONDITION"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("RETURN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("RETURN-FROM"), cdr: {car: f3("NIL"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NULL"), cdr: {car: f3("FUNCTION"), cdr: {car: "f1", cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFUN"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFUN"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFUN"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("FSETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("SYMBOL-NAME"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BLOCK"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("NAMED-LAMBDA"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: f3("X"), cdr: {car: {car: f3("GENSYM"), cdr: {car: "FN", cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("LET"), cdr: {car: {car: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("ARGS"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}, cdr: {car: {car: f3("SET"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("X"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("&OPTIONAL"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("%DEFVAR"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("%DEFVAR"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("PROGN"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFVAR"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("SETQ"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("VALUE"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("DEFMACRO"), cdr: {car: f3("MACRO"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("NAME"), cdr: {car: f3("ARGS"), cdr: {car: f3("&REST"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}}}, cdr: {car: {car: f3("BACKQUOTE"), cdr: {car: {car: f3("EVAL-WHEN-COMPILE"), cdr: {car: {car: f3("%COMPILE-DEFMACRO"), cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: f3("NAME"), cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("UNQUOTE"), cdr: {car: {car: f3("MAPCAR"), cdr: {car: {car: f3("LAMBDA"), cdr: {car: {car: f3("X"), cdr: f3("NIL")}, cdr: {car: {car: f3("IF"), cdr: {car: {car: f3("EQ"), cdr: {car: f3("X"), cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: {car: f3("QUOTE"), cdr: {car: f3("&REST"), cdr: f3("NIL")}}, cdr: {car: f3("X"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}, cdr: {car: f3("ARGS"), cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: {car: {car: f3("UNQUOTE-SPLICING"), cdr: {car: f3("BODY"), cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}, cdr: f3("NIL")}}}, cdr: {car: f3("T"), cdr: f3("NIL")}}}}, cdr: f3("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}, cdr: {car: f3("NIL"), cdr: {car: f3("NIL"), cdr: f3("NIL")}}}};
var l229 = f3("EVAL");
var f120;
(function(){
    v289 = l230;
    v292 = l231;
    v313 = l232;
    v389 = l233;
    v12 = l234;
    return v413 = l235;
})();
(function(){
    (function(){
        (function(){
            return f120 = (function(v655){
                ((v655)["fname"] = "EVAL");
                return v655;
            })((function (v656){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(){
                    try {
                        return (function(){
                            return (function(v657){
                                return (function(){
                                    var string = v657;
                                    if (typeof string != 'string')
                                        throw 'The value ' + string + ' is not a type string.';
                                    return eval.apply(window, [string]);
                                })();
                            })((function(v658){
                                (function(){
                                    try {
                                        return (function(){
                                            return (function(v659,v660){
                                                (function(){
                                                    while(v659 !== v2){
                                                        v660 = (function(){
                                                            var tmp = v659;
                                                            return tmp === v2? v2: tmp.car;
                                                        })();
                                                        (function(){
                                                            (v660)();
                                                            return v2;
                                                        })();
                                                        v659 = (function(){
                                                            var tmp = v659;
                                                            return tmp === v2? v2: tmp.cdr;
                                                        })();
                                                    }return v2;
                                                })();
                                                return v2;
                                            })(v253,v2);
                                        })();
                                    }
                                    catch (cf){
                                        if (cf.type == 'block' && cf.id == 206)
                                            return cf.value;
                                        else
                                            throw cf;
                                    }
                                })();
                                return v658;
                            })((function(){
                                v253 = v2;
                                f102();
                                return f129(v656);
                            })()));
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
        })();
        return l229;
    })();
    return (function(){
        var string = f68("var lisp = {};", "lisp.read = ", f108(l236, v2), ";", v176, "lisp.print = ", f108(l237, v2), ";", v176, "lisp.eval = ", f108(l238, v2), ";", v176, "lisp.compile = ", f108(l239, v2), ";", v176, "lisp.evalString = function(str){", v176, "   return lisp.eval(lisp.read(str));", v176, "}", v176, "lisp.compileString = function(str){", v176, "   return lisp.compile(lisp.read(str));", v176, "}", v176);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
