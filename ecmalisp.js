var f153;
var f152;
var f151;
var f150;
var f149;
var f148;
var f147;
var f146;
var f145;
var f144;
var f143;
var f142;
var f141;
var f140;
var f139;
var f138;
var f137;
var f136;
var f135;
var f134;
var f133;
var f132;
var f131;
var f130;
var f129;
var f128;
var f127;
var f126;
var f124;
var v644;
var f123;
var f122;
var f121;
var f120;
var v635;
var v634;
var v633;
(function(){
    (function(){
        return v633 = {};
    })();
    (function(){
        return v634 = (function(){
            var name = "NIL";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    ((v633)["NIL"] = v634);
    (function(){
        return v635 = (function(){
            var name = "T";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    ((v633)["T"] = v635);
    (function(){
        return f120 = (function(v636){
            ((v636)["fname"] = "NULL");
            return v636;
        })((function (v637){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((v637 === v634)?v635: v634);
        }));
    })();
    (function(){
        return f121 = (function(v638){
            ((v638)["fname"] = "INTERNP");
            return v638;
        })((function (v639){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((v639) in (v633))?v635: v634);
        }));
    })();
    (function(){
        return f122 = (function(v640){
            ((v640)["fname"] = "INTERN");
            return v640;
        })((function (v641){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f121(v641) !== v634 ? (function(){
                var tmp = (v633)[v641];
                return tmp == undefined? v634: tmp ;
            })() : ((v633)[v641] = (function(){
                var name = v641;
                if (typeof name != 'string')
                    throw 'The value ' + name + ' is not a type string.';
                return ({name: name});
            })()));
        }));
    })();
    (function(){
        return f123 = (function(v642){
            ((v642)["fname"] = "FIND-SYMBOL");
            return v642;
        })((function (v643){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (v633)[v643];
                return tmp == undefined? v634: tmp ;
            })();
        }));
    })();
    (function(){
        return v644 = 0;
    })();
    (function(){
        return f124 = (function(v645){
            ((v645)["fname"] = "GENSYM");
            return v645;
        })((function (v646){
            if (arguments.length > 1) throw 'too many arguments';
            switch(arguments.length){
            case 0:
            v646="G";
            default: break;
            }
            v644 = (function(){
                var x = v644;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })();
            return (function(){
                var name = (function(){
                    var string1 = v646;
                    var string2 = f125(v644);
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
        return f126 = (function(v647){
            ((v647)["fname"] = "=");
            return v647;
        })((function (v648,v649){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return ((function(){
                var x = v648;
                var y = v649;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x==y;
            })()?v635: v634);
        }));
    })();
    (function(){
        return f127 = (function(v650){
            ((v650)["fname"] = "+");
            return v650;
        })((function (v651,v652){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v651;
                var y = v652;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })();
        }));
    })();
    (function(){
        return f128 = (function(v653){
            ((v653)["fname"] = "-");
            return v653;
        })((function (v654,v655){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v654;
                var y = v655;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x-y;
            })();
        }));
    })();
    (function(){
        return f129 = (function(v656){
            ((v656)["fname"] = "*");
            return v656;
        })((function (v657,v658){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v657;
                var y = v658;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x*y;
            })();
        }));
    })();
    (function(){
        return f130 = (function(v659){
            ((v659)["fname"] = "/");
            return v659;
        })((function (v660,v661){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = v660;
                var y = v661;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x/y;
            })();
        }));
    })();
    (function(){
        return f131 = (function(v662){
            ((v662)["fname"] = "1+");
            return v662;
        })((function (v663){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = v663;
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
        return f132 = (function(v664){
            ((v664)["fname"] = "1-");
            return v664;
        })((function (v665){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = v665;
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
        return f133 = (function(v666){
            ((v666)["fname"] = "ZEROP");
            return v666;
        })((function (v667){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(){
                var x = v667;
                var y = 0;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x==y;
            })()?v635: v634);
        }));
    })();
    (function(){
        return f134 = (function(v668){
            ((v668)["fname"] = "TRUNCATE");
            return v668;
        })((function (v669,v670){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(){
                var x = (function(){
                    var x = v669;
                    var y = v670;
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
        return f135 = (function(v671){
            ((v671)["fname"] = "EQL");
            return v671;
        })((function (v672,v673){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return ((v672 === v673)?v635: v634);
        }));
    })();
    (function(){
        return f136 = (function(v674){
            ((v674)["fname"] = "NOT");
            return v674;
        })((function (v675){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (v675 !== v634 ? v634 : v635);
        }));
    })();
    (function(){
        return f137 = (function(v676){
            ((v676)["fname"] = "CONS");
            return v676;
        })((function (v677,v678){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return ({car: v677, cdr: v678});
        }));
    })();
    (function(){
        return f138 = (function(v679){
            ((v679)["fname"] = "CONSP");
            return v679;
        })((function (v680){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(){
                var tmp = v680;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v635: v634);
        }));
    })();
    (function(){
        return f139 = (function(v681){
            ((v681)["fname"] = "CAR");
            return v681;
        })((function (v682){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = v682;
                return tmp === v634? v634: tmp.car;
            })();
        }));
    })();
    (function(){
        return f140 = (function(v683){
            ((v683)["fname"] = "CDR");
            return v683;
        })((function (v684){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = v684;
                return tmp === v634? v634: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f141 = (function(v685){
            ((v685)["fname"] = "CAAR");
            return v685;
        })((function (v686){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v686;
                    return tmp === v634? v634: tmp.car;
                })();
                return tmp === v634? v634: tmp.car;
            })();
        }));
    })();
    (function(){
        return f142 = (function(v687){
            ((v687)["fname"] = "CADR");
            return v687;
        })((function (v688){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v688;
                    return tmp === v634? v634: tmp.cdr;
                })();
                return tmp === v634? v634: tmp.car;
            })();
        }));
    })();
    (function(){
        return f143 = (function(v689){
            ((v689)["fname"] = "CDAR");
            return v689;
        })((function (v690){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v690;
                    return tmp === v634? v634: tmp.car;
                })();
                return tmp === v634? v634: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f144 = (function(v691){
            ((v691)["fname"] = "CDDR");
            return v691;
        })((function (v692){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = v692;
                    return tmp === v634? v634: tmp.cdr;
                })();
                return tmp === v634? v634: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f145 = (function(v693){
            ((v693)["fname"] = "CADDR");
            return v693;
        })((function (v694){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v694;
                        return tmp === v634? v634: tmp.cdr;
                    })();
                    return tmp === v634? v634: tmp.cdr;
                })();
                return tmp === v634? v634: tmp.car;
            })();
        }));
    })();
    (function(){
        return f146 = (function(v695){
            ((v695)["fname"] = "CDDDR");
            return v695;
        })((function (v696){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = v696;
                        return tmp === v634? v634: tmp.cdr;
                    })();
                    return tmp === v634? v634: tmp.cdr;
                })();
                return tmp === v634? v634: tmp.cdr;
            })();
        }));
    })();
    (function(){
        return f147 = (function(v697){
            ((v697)["fname"] = "CADDDR");
            return v697;
        })((function (v698){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = (function(){
                    var tmp = (function(){
                        var tmp = (function(){
                            var tmp = v698;
                            return tmp === v634? v634: tmp.cdr;
                        })();
                        return tmp === v634? v634: tmp.cdr;
                    })();
                    return tmp === v634? v634: tmp.cdr;
                })();
                return tmp === v634? v634: tmp.car;
            })();
        }));
    })();
    (function(){
        return f148 = (function(v699){
            ((v699)["fname"] = "FIRST");
            return v699;
        })((function (v700){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var tmp = v700;
                return tmp === v634? v634: tmp.car;
            })();
        }));
    })();
    (function(){
        return f149 = (function(v701){
            ((v701)["fname"] = "SECOND");
            return v701;
        })((function (v702){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f142(v702);
        }));
    })();
    (function(){
        return f150 = (function(v703){
            ((v703)["fname"] = "THIRD");
            return v703;
        })((function (v704){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f145(v704);
        }));
    })();
    (function(){
        return f151 = (function(v705){
            ((v705)["fname"] = "FOURTH");
            return v705;
        })((function (v706){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f147(v706);
        }));
    })();
    (function(){
        return f152 = (function(v707){
            ((v707)["fname"] = "LIST");
            return v707;
        })((function (){
            var v708= v634;
            for (var i = arguments.length-1; i>=0; i--)
                v708 = {car: arguments[i], cdr: v708};
            return v708;
        }));
    })();
    (function(){
        return f153 = (function(v709){
            ((v709)["fname"] = "ATOM");
            return v709;
        })((function (v710){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f136(((function(){
                var tmp = v710;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v635: v634));
        }));
    })();
    return ;
})(); 
var f154;
(function(){
    return f154 = (function(v711){
        ((v711)["fname"] = "ENSURE-LIST");
        return v711;
    })((function (v712){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return (f155(v712) !== v634 ? v712 : f152(v712));
    }));
})(); 
var f156;
(function(){
    return f156 = (function(v713){
        ((v713)["fname"] = "!REDUCE");
        return v713;
    })((function (v714,v715,v716){
        if (arguments.length < 3) throw 'too few arguments';
        if (arguments.length > 3) throw 'too many arguments';
        return (f120(v715) !== v634 ? v716 : f156(v714, (function(){
            var tmp = v715;
            return tmp === v634? v634: tmp.cdr;
        })(), (v714)(v716, (function(){
            var tmp = v715;
            return tmp === v634? v634: tmp.car;
        })())));
    }));
})(); 
var l219 = f122("STRING=");
var f183;
var l218 = f122("ASSOC");
var f182;
var l217 = f122("EVERY");
var f181;
var l216 = f122("PARSE-INTEGER");
var f180;
var l215 = f122("SUBSEQ");
var f179;
var l214 = f122("DIGIT-CHAR-P");
var f178;
var l213 = f122("REMOVE-IF-NOT");
var f177;
var l212 = f122("REMOVE-IF");
var f176;
var l211 = f122("REMOVE");
var f175;
var l210 = f122("MEMBER");
var f174;
var l209 = f122("BUTLAST");
var f173;
var l208 = f122("LAST");
var f172;
var l207 = f122("NTH");
var f171;
var l206 = f122("LISTP");
var f155;
var l205 = f122("MINUSP");
var f170;
var l204 = f122("PLUSP");
var f169;
var l203 = f122("INTEGERP");
var f168;
var l202 = f122("CHAR=");
var f167;
var l201 = f122("CHAR-CODE");
var f166;
var l200 = f122("CODE-CHAR");
var f165;
var l199 = f122("MAPCAR");
var l198 = f122("NIL");
var f164;
var l197 = f122("CONCAT-TWO");
var f163;
var l196 = f122("LENGTH");
var f162;
var l195 = f122("LIST-LENGTH");
var f161;
var l194 = f122("REVERSE");
var l193 = f122("NIL");
var f160;
var l192 = f122("REVERSE-AUX");
var f159;
var l191 = f122("APPEND");
var l190 = f122("NIL");
var f158;
var l189 = f122("APPEND-TWO");
var f157;
(function(){
    (function(){
        (function(){
            return f157 = (function(v717){
                ((v717)["fname"] = "APPEND-TWO");
                return v717;
            })((function (v718,v719){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v718) !== v634 ? v719 : ({car: (function(){
                    var tmp = v718;
                    return tmp === v634? v634: tmp.car;
                })(), cdr: f158((function(){
                    var tmp = v718;
                    return tmp === v634? v634: tmp.cdr;
                })(), v719)}));
            }));
        })();
        return l189;
    })();
    (function(){
        (function(){
            return f158 = (function(v720){
                ((v720)["fname"] = "APPEND");
                return v720;
            })((function (){
                var v721= v634;
                for (var i = arguments.length-1; i>=0; i--)
                    v721 = {car: arguments[i], cdr: v721};
                return f156(f157, v721, l190);
            }));
        })();
        return l191;
    })();
    (function(){
        (function(){
            return f159 = (function(v722){
                ((v722)["fname"] = "REVERSE-AUX");
                return v722;
            })((function (v723,v724){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v723) !== v634 ? v724 : f159((function(){
                    var tmp = v723;
                    return tmp === v634? v634: tmp.cdr;
                })(), ({car: (function(){
                    var tmp = v723;
                    return tmp === v634? v634: tmp.car;
                })(), cdr: v724})));
            }));
        })();
        return l192;
    })();
    (function(){
        (function(){
            return f160 = (function(v725){
                ((v725)["fname"] = "REVERSE");
                return v725;
            })((function (v726){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f159(v726, l193);
            }));
        })();
        return l194;
    })();
    (function(){
        (function(){
            return f161 = (function(v727){
                ((v727)["fname"] = "LIST-LENGTH");
                return v727;
            })((function (v728){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v729){
                    (function(){
                        while(f136(f120(v728)) !== v634){
                            v729 = (function(){
                                var x = v729;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                            v728 = (function(){
                                var tmp = v728;
                                return tmp === v634? v634: tmp.cdr;
                            })();
                    }})();
                    return v729;
                })(0);
            }));
        })();
        return l195;
    })();
    (function(){
        (function(){
            return f162 = (function(v730){
                ((v730)["fname"] = "LENGTH");
                return v730;
            })((function (v731){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((typeof(v731) == "string")?v635: v634) !== v634 ? (function(){
                    var x = v731;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return x.length;
                })() : f161(v731));
            }));
        })();
        return l196;
    })();
    (function(){
        (function(){
            return f163 = (function(v732){
                ((v732)["fname"] = "CONCAT-TWO");
                return v732;
            })((function (v733,v734){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(){
                    var string1 = v733;
                    var string2 = v734;
                    if (typeof string1 != 'string')
                        throw 'The value ' + string1 + ' is not a type string.';
                    if (typeof string2 != 'string')
                        throw 'The value ' + string2 + ' is not a type string.';
                    return string1.concat(string2);
                })();
            }));
        })();
        return l197;
    })();
    (function(){
        (function(){
            return f164 = (function(v735){
                ((v735)["fname"] = "MAPCAR");
                return v735;
            })((function (v736,v737){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v737) !== v634 ? l198 : ({car: (v736)((function(){
                    var tmp = v737;
                    return tmp === v634? v634: tmp.car;
                })()), cdr: f164(v736, (function(){
                    var tmp = v737;
                    return tmp === v634? v634: tmp.cdr;
                })())}));
            }));
        })();
        return l199;
    })();
    (function(){
        (function(){
            return f165 = (function(v738){
                ((v738)["fname"] = "CODE-CHAR");
                return v738;
            })((function (v739){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return v739;
            }));
        })();
        return l200;
    })();
    (function(){
        (function(){
            return f166 = (function(v740){
                ((v740)["fname"] = "CHAR-CODE");
                return v740;
            })((function (v741){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return v741;
            }));
        })();
        return l201;
    })();
    (function(){
        (function(){
            return f167 = (function(v742){
                ((v742)["fname"] = "CHAR=");
                return v742;
            })((function (v743,v744){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((function(){
                    var x = v743;
                    var y = v744;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x==y;
                })()?v635: v634);
            }));
        })();
        return l202;
    })();
    (function(){
        (function(){
            return f168 = (function(v745){
                ((v745)["fname"] = "INTEGERP");
                return v745;
            })((function (v746){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((typeof (v746) == "number")?v635: v634) !== v634 ? ((function(){
                    var x = (function(){
                        var x = v746;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return Math.floor(x);
                    })();
                    var y = v746;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x==y;
                })()?v635: v634) : v634);
            }));
        })();
        return l203;
    })();
    (function(){
        (function(){
            return f169 = (function(v747){
                ((v747)["fname"] = "PLUSP");
                return v747;
            })((function (v748){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((function(){
                    var x = 0;
                    var y = v748;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<y;
                })()?v635: v634);
            }));
        })();
        return l204;
    })();
    (function(){
        (function(){
            return f170 = (function(v749){
                ((v749)["fname"] = "MINUSP");
                return v749;
            })((function (v750){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((function(){
                    var x = v750;
                    var y = 0;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<y;
                })()?v635: v634);
            }));
        })();
        return l205;
    })();
    (function(){
        (function(){
            return f155 = (function(v751){
                ((v751)["fname"] = "LISTP");
                return v751;
            })((function (v752){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v753){
                    return (v753 !== v634 ? v753 : f120(v752));
                })(((function(){
                    var tmp = v752;
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v635: v634));
            }));
        })();
        return l206;
    })();
    (function(){
        (function(){
            return f171 = (function(v754){
                ((v754)["fname"] = "NTH");
                return v754;
            })((function (v755,v756){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v756) !== v634 ? (function(){
                    return v756;
                })() : (f133(v755) !== v634 ? (function(){
                    return (function(){
                        var tmp = v756;
                        return tmp === v634? v634: tmp.car;
                    })();
                })() : (function(){
                    return f171(f132(v755), (function(){
                        var tmp = v756;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l207;
    })();
    (function(){
        (function(){
            return f172 = (function(v757){
                ((v757)["fname"] = "LAST");
                return v757;
            })((function (v758){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = (function(){
                        var tmp = v758;
                        return tmp === v634? v634: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v635: v634) !== v634 ? f172((function(){
                    var tmp = v758;
                    return tmp === v634? v634: tmp.cdr;
                })()) : v758);
            }));
        })();
        return l208;
    })();
    (function(){
        (function(){
            return f173 = (function(v759){
                ((v759)["fname"] = "BUTLAST");
                return v759;
            })((function (v760){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = (function(){
                        var tmp = v760;
                        return tmp === v634? v634: tmp.cdr;
                    })();
                    return (typeof tmp == 'object' && 'car' in tmp);
                })()?v635: v634) !== v634 ? ({car: (function(){
                    var tmp = v760;
                    return tmp === v634? v634: tmp.car;
                })(), cdr: f173((function(){
                    var tmp = v760;
                    return tmp === v634? v634: tmp.cdr;
                })())}) : v634);
            }));
        })();
        return l209;
    })();
    (function(){
        (function(){
            return f174 = (function(v761){
                ((v761)["fname"] = "MEMBER");
                return v761;
            })((function (v762,v763){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v763) !== v634 ? (function(){
                    return v634;
                })() : (f135(v762, (function(){
                    var tmp = v763;
                    return tmp === v634? v634: tmp.car;
                })()) !== v634 ? (function(){
                    return v763;
                })() : (function(){
                    return f174(v762, (function(){
                        var tmp = v763;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l210;
    })();
    (function(){
        (function(){
            return f175 = (function(v764){
                ((v764)["fname"] = "REMOVE");
                return v764;
            })((function (v765,v766){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v766) !== v634 ? (function(){
                    return v634;
                })() : (f135(v765, (function(){
                    var tmp = v766;
                    return tmp === v634? v634: tmp.car;
                })()) !== v634 ? (function(){
                    return f175(v765, (function(){
                        var tmp = v766;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                })() : (function(){
                    return ({car: (function(){
                        var tmp = v766;
                        return tmp === v634? v634: tmp.car;
                    })(), cdr: f175(v765, (function(){
                        var tmp = v766;
                        return tmp === v634? v634: tmp.cdr;
                    })())});
                })()));
            }));
        })();
        return l211;
    })();
    (function(){
        (function(){
            return f176 = (function(v767){
                ((v767)["fname"] = "REMOVE-IF");
                return v767;
            })((function (v768,v769){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v769) !== v634 ? (function(){
                    return v634;
                })() : ((v768)((function(){
                    var tmp = v769;
                    return tmp === v634? v634: tmp.car;
                })()) !== v634 ? (function(){
                    return f176(v768, (function(){
                        var tmp = v769;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                })() : (function(){
                    return ({car: (function(){
                        var tmp = v769;
                        return tmp === v634? v634: tmp.car;
                    })(), cdr: f176(v768, (function(){
                        var tmp = v769;
                        return tmp === v634? v634: tmp.cdr;
                    })())});
                })()));
            }));
        })();
        return l212;
    })();
    (function(){
        (function(){
            return f177 = (function(v770){
                ((v770)["fname"] = "REMOVE-IF-NOT");
                return v770;
            })((function (v771,v772){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v772) !== v634 ? (function(){
                    return v634;
                })() : ((v771)((function(){
                    var tmp = v772;
                    return tmp === v634? v634: tmp.car;
                })()) !== v634 ? (function(){
                    return ({car: (function(){
                        var tmp = v772;
                        return tmp === v634? v634: tmp.car;
                    })(), cdr: f177(v771, (function(){
                        var tmp = v772;
                        return tmp === v634? v634: tmp.cdr;
                    })())});
                })() : (function(){
                    return f177(v771, (function(){
                        var tmp = v772;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l213;
    })();
    (function(){
        (function(){
            return f178 = (function(v773){
                ((v773)["fname"] = "DIGIT-CHAR-P");
                return v773;
            })((function (v774){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return ((((function(){
                    var x = 48;
                    var y = v774;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<=y;
                })()?v635: v634) !== v634 ? ((function(){
                    var x = v774;
                    var y = 57;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x<=y;
                })()?v635: v634) : v634) !== v634 ? (function(){
                    var x = v774;
                    var y = 48;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })() : v634);
            }));
        })();
        return l214;
    })();
    (function(){
        (function(){
            return f179 = (function(v775){
                ((v775)["fname"] = "SUBSEQ");
                return v775;
            })((function (v776,v777,v778){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 3) throw 'too many arguments';
                switch(arguments.length){
                case 2:
                v778=v634;
                default: break;
                }
                return (((typeof(v776) == "string")?v635: v634) !== v634 ? (function(){
                    return (v778 !== v634 ? (function(){
                        var str = v776;
                        var a = v777;
                        var b;
                        b = v778;
                        return str.slice(a,b);
                    })() : (function(){
                        var str = v776;
                        var a = v777;
                        var b;
                        return str.slice(a,b);
                    })());
                })() : (function(){
                    return (function (){ throw "Unsupported argument.";return 0;})();
                })());
            }));
        })();
        return l215;
    })();
    (function(){
        (function(){
            return f180 = (function(v779){
                ((v779)["fname"] = "PARSE-INTEGER");
                return v779;
            })((function (v780){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v781,v782,v783){
                    (function(){
                        while(((function(){
                            var x = v782;
                            var y = v783;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v635: v634) !== v634){
                            v781 = (function(){
                                var x = (function(){
                                    var x = v781;
                                    var y = 10;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x*y;
                                })();
                                var y = f178((function(){
                                    var string = v780;
                                    var index = v782;
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
                            v782 = (function(){
                                var x = v782;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v781;
                })(0,0,f162(v780));
            }));
        })();
        return l216;
    })();
    (function(){
        (function(){
            return f181 = (function(v784){
                ((v784)["fname"] = "EVERY");
                return v784;
            })((function (v785,v786){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (function(v787,v788,v789){
                    (function(){
                        while((v787 !== v634 ? ((function(){
                            var x = v788;
                            var y = v789;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v635: v634) : v634) !== v634){
                            ((v785)((function(){
                                var string = v786;
                                var index = v788;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })()) !== v634 ? v634 : (function(){
                                return v787 = v634;
                            })());
                            v788 = (function(){
                                var x = v788;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v787;
                })(v635,0,f162(v786));
            }));
        })();
        return l217;
    })();
    (function(){
        (function(){
            return f182 = (function(v790){
                ((v790)["fname"] = "ASSOC");
                return v790;
            })((function (v791,v792){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return (f120(v792) !== v634 ? (function(){
                    return v634;
                })() : (f135(v791, f141(v792)) !== v634 ? (function(){
                    return (function(){
                        var tmp = v792;
                        return tmp === v634? v634: tmp.car;
                    })();
                })() : (function(){
                    return f182(v791, (function(){
                        var tmp = v792;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                })()));
            }));
        })();
        return l218;
    })();
    return (function(){
        (function(){
            return f183 = (function(v793){
                ((v793)["fname"] = "STRING=");
                return v793;
            })((function (v794,v795){
                if (arguments.length < 2) throw 'too few arguments';
                if (arguments.length > 2) throw 'too many arguments';
                return ((v794 == v795)?v635: v634);
            }));
        })();
        return l219;
    })();
})(); 
var l220 = f122("*NEWLINE*");
var v796;
(function(){
    (function(){
        return v796 = (function(){
            var x = f165(10);
            if (typeof x != 'number')
                throw 'The value ' + x + ' is not a type number.';
            return String.fromCharCode(x);
        })();
    })();
    return l220;
})(); 
var l221 = f122("CONCAT");
var f184;
(function(){
    (function(){
        return f184 = (function(v797){
            ((v797)["fname"] = "CONCAT");
            return v797;
        })((function (){
            var v798= v634;
            for (var i = arguments.length-1; i>=0; i--)
                v798 = {car: arguments[i], cdr: v798};
            return f156(f163, v798, "");
        }));
    })();
    return l221;
})(); 
var l222 = f122("JOIN");
var f185;
(function(){
    (function(){
        return f185 = (function(v799){
            ((v799)["fname"] = "JOIN");
            return v799;
        })((function (v800,v801){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v801="";
            default: break;
            }
            return (f120(v800) !== v634 ? (function(){
                return "";
            })() : (f120((function(){
                var tmp = v800;
                return tmp === v634? v634: tmp.cdr;
            })()) !== v634 ? (function(){
                return (function(){
                    var tmp = v800;
                    return tmp === v634? v634: tmp.car;
                })();
            })() : (function(){
                return f184((function(){
                    var tmp = v800;
                    return tmp === v634? v634: tmp.car;
                })(), v801, f185((function(){
                    var tmp = v800;
                    return tmp === v634? v634: tmp.cdr;
                })(), v801));
            })()));
        }));
    })();
    return l222;
})(); 
var l223 = f122("JOIN-TRAILING");
var f186;
(function(){
    (function(){
        return f186 = (function(v802){
            ((v802)["fname"] = "JOIN-TRAILING");
            return v802;
        })((function (v803,v804){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            switch(arguments.length){
            case 1:
            v804="";
            default: break;
            }
            return (f120(v803) !== v634 ? "" : f184((function(){
                var tmp = v803;
                return tmp === v634? v634: tmp.car;
            })(), v804, f186((function(){
                var tmp = v803;
                return tmp === v634? v634: tmp.cdr;
            })(), v804)));
        }));
    })();
    return l223;
})(); 
var l224 = f122("INDENT");
var f187;
(function(){
    (function(){
        return f187 = (function(v805){
            ((v805)["fname"] = "INDENT");
            return v805;
        })((function (){
            var v806= v634;
            for (var i = arguments.length-1; i>=0; i--)
                v806 = {car: arguments[i], cdr: v806};
            return (function(v807){
                return (function(v808,v809,v810){
                    (f169(v810) !== v634 ? (function(){
                        return v808 = "    ";
                    })() : v634);
                    (function(){
                        while(((function(){
                            var x = v809;
                            var y = v810;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v635: v634) !== v634){
                            v808 = f184(v808, ((f167((function(){
                                var string = v807;
                                var index = v809;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10) !== v634 ? (((function(){
                                var x = v809;
                                var y = f132(v810);
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x<y;
                            })()?v635: v634) !== v634 ? f136(f167((function(){
                                var string = v807;
                                var index = f131(v809);
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })(), 10)) : v634) : v634) !== v634 ? f184((function(){
                                var x = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })(), "    ") : f179(v807, v809, f131(v809))));
                            v809 = (function(){
                                var x = v809;
                                var y = 1;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x+y;
                            })();
                    }})();
                    return v808;
                })("",0,f162(v807));
            })(f156(f184, v806, ""));
        }));
    })();
    return l224;
})(); 
var l225 = f122("INTEGER-TO-STRING");
var f125;
(function(){
    (function(){
        return f125 = (function(v811){
            ((v811)["fname"] = "INTEGER-TO-STRING");
            return v811;
        })((function (v812){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f133(v812) !== v634 ? (function(){
                return "0";
            })() : (f170(v812) !== v634 ? (function(){
                return f184("-", f125((function(){
                    var x = 0;
                    var y = v812;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x-y;
                })()));
            })() : (function(){
                return (function(v813){
                    (function(){
                        while(f136(f133(v812)) !== v634){
                            v813 = ({car: (function(){
                                var x = v812;
                                var y = 10;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                if (typeof y != 'number')
                                    throw 'The value ' + y + ' is not a type number.';
                                return x%y;
                            })(), cdr: v813});
                            v812 = f134(v812, 10);
                    }})();
                    return f185(f164((function (v814){
                        if (arguments.length < 1) throw 'too few arguments';
                        if (arguments.length > 1) throw 'too many arguments';
                        return (function(){
                            var x = (function(){
                                var string = "0123456789";
                                var index = v814;
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
                    }), v813));
                })(v634);
            })()));
        }));
    })();
    return l225;
})(); 
var l228 = f122("PRINT");
var f191;
var l227 = f122("WRITE-LINE");
var f190;
var l226 = f122("PRINT-TO-STRING");
var f188;
(function(){
    (function(){
        (function(){
            return f188 = (function(v815){
                ((v815)["fname"] = "PRINT-TO-STRING");
                return v815;
            })((function (v816){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (((function(){
                    var tmp = v816;
                    return (typeof tmp == 'object' && 'name' in tmp);
                })()?v635: v634) !== v634 ? (function(){
                    return (v816).name;
                })() : (f168(v816) !== v634 ? (function(){
                    return f125(v816);
                })() : (((typeof(v816) == "string")?v635: v634) !== v634 ? (function(){
                    return f184("\"", f189(v816), "\"");
                })() : (((typeof v816 == 'function')?v635: v634) !== v634 ? (function(){
                    return (function(v817){
                        return (v817 !== v634 ? f184("#<FUNCTION ", v817, ">") : f184("#<FUNCTION>"));
                    })((function(){
                        var tmp = (v816)["fname"];
                        return tmp == undefined? v634: tmp ;
                    })());
                })() : (f155(v816) !== v634 ? (function(){
                    return f184("(", f186(f164(f188, f173(v816)), " "), (function(v818){
                        return (f120((function(){
                            var tmp = v818;
                            return tmp === v634? v634: tmp.cdr;
                        })()) !== v634 ? f188((function(){
                            var tmp = v818;
                            return tmp === v634? v634: tmp.car;
                        })()) : f184(f188((function(){
                            var tmp = v818;
                            return tmp === v634? v634: tmp.car;
                        })()), " . ", f188((function(){
                            var tmp = v818;
                            return tmp === v634? v634: tmp.cdr;
                        })())));
                    })(f172(v816)), ")");
                })() : v634)))));
            }));
        })();
        return l226;
    })();
    (function(){
        (function(){
            return f190 = (function(v819){
                ((v819)["fname"] = "WRITE-LINE");
                return v819;
            })((function (v820){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                (function(){
                    var x = v820;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                (function(){
                    var x = v796;
                    if (typeof x != 'string')
                        throw 'The value ' + x + ' is not a type string.';
                    return lisp.write(x);
                })();
                return v820;
            }));
        })();
        return l227;
    })();
    return (function(){
        (function(){
            return f191 = (function(v821){
                ((v821)["fname"] = "PRINT");
                return v821;
            })((function (v822){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f190(f188(v822));
            }));
        })();
        return l228;
    })();
})(); 
var l229 = f122("MAKE-STRING-STREAM");
var f192;
(function(){
    (function(){
        return f192 = (function(v823){
            ((v823)["fname"] = "MAKE-STRING-STREAM");
            return v823;
        })((function (v824){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ({car: v824, cdr: 0});
        }));
    })();
    return l229;
})(); 
var l230 = f122("%PEEK-CHAR");
var f193;
(function(){
    (function(){
        return f193 = (function(v825){
            ((v825)["fname"] = "%PEEK-CHAR");
            return v825;
        })((function (v826){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v826;
                    return tmp === v634? v634: tmp.cdr;
                })();
                var y = f162((function(){
                    var tmp = v826;
                    return tmp === v634? v634: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v635: v634) !== v634 ? (function(){
                var string = (function(){
                    var tmp = v826;
                    return tmp === v634? v634: tmp.car;
                })();
                var index = (function(){
                    var tmp = v826;
                    return tmp === v634? v634: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })() : v634);
        }));
    })();
    return l230;
})(); 
var l231 = f122("%READ-CHAR");
var f194;
(function(){
    (function(){
        return f194 = (function(v827){
            ((v827)["fname"] = "%READ-CHAR");
            return v827;
        })((function (v828){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var x = (function(){
                    var tmp = v828;
                    return tmp === v634? v634: tmp.cdr;
                })();
                var y = f162((function(){
                    var tmp = v828;
                    return tmp === v634? v634: tmp.car;
                })());
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x<y;
            })()?v635: v634) !== v634 ? (function(v829){
                (function(){
                    var x = v828;
                    if (typeof x != 'object')
                        throw 'The value ' + x + ' is not a type object.';
                    return (x.cdr = f131((function(){
                        var tmp = v828;
                        return tmp === v634? v634: tmp.cdr;
                    })()));
                })();
                return v829;
            })((function(){
                var string = (function(){
                    var tmp = v828;
                    return tmp === v634? v634: tmp.car;
                })();
                var index = (function(){
                    var tmp = v828;
                    return tmp === v634? v634: tmp.cdr;
                })();
                if (typeof string != 'string')
                    throw 'The value ' + string + ' is not a type string.';
                if (typeof index != 'number')
                    throw 'The value ' + index + ' is not a type number.';
                return string.charCodeAt(index);
            })()) : v634);
        }));
    })();
    return l231;
})(); 
var l232 = f122("WHITESPACEP");
var f195;
(function(){
    (function(){
        return f195 = (function(v830){
            ((v830)["fname"] = "WHITESPACEP");
            return v830;
        })((function (v831){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v832){
                return (v832 !== v634 ? v832 : (function(v833){
                    return (v833 !== v634 ? v833 : f167(v831, 9));
                })(f167(v831, 10)));
            })(f167(v831, 32));
        }));
    })();
    return l232;
})(); 
var l233 = f122("SKIP-WHITESPACES");
var f196;
(function(){
    (function(){
        return f196 = (function(v834){
            ((v834)["fname"] = "SKIP-WHITESPACES");
            return v834;
        })((function (v835){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v836){
                v836 = f193(v835);
                return (function(){
                    while((v836 !== v634 ? f195(v836) : v634) !== v634){
                        f194(v835);
                        v836 = f193(v835);
                }})();
            })(v634);
        }));
    })();
    return l233;
})(); 
var l234 = f122("TERMINALP");
var f197;
(function(){
    (function(){
        return f197 = (function(v837){
            ((v837)["fname"] = "TERMINALP");
            return v837;
        })((function (v838){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v839){
                return (v839 !== v634 ? v839 : (function(v840){
                    return (v840 !== v634 ? v840 : (function(v841){
                        return (v841 !== v634 ? v841 : f167(40, v838));
                    })(f167(41, v838)));
                })(f195(v838)));
            })(f120(v838));
        }));
    })();
    return l234;
})(); 
var l235 = f122("READ-UNTIL");
var f198;
(function(){
    (function(){
        return f198 = (function(v842){
            ((v842)["fname"] = "READ-UNTIL");
            return v842;
        })((function (v843,v844){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v845,v846){
                v846 = f193(v843);
                (function(){
                    while((v846 !== v634 ? f136((v844)(v846)) : v634) !== v634){
                        v845 = f184(v845, (function(){
                            var x = v846;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        f194(v843);
                        v846 = f193(v843);
                }})();
                return v845;
            })("",v634);
        }));
    })();
    return l235;
})(); 
var l236 = f122("SKIP-WHITESPACES-AND-COMMENTS");
var f199;
(function(){
    (function(){
        return f199 = (function(v847){
            ((v847)["fname"] = "SKIP-WHITESPACES-AND-COMMENTS");
            return v847;
        })((function (v848){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v849){
                f196(v848);
                v849 = f193(v848);
                return (function(){
                    while((v849 !== v634 ? f167(v849, 59) : v634) !== v634){
                        f198(v848, (function (v850){
                            if (arguments.length < 1) throw 'too few arguments';
                            if (arguments.length > 1) throw 'too many arguments';
                            return f167(v850, 10);
                        }));
                        f196(v848);
                        v849 = f193(v848);
                }})();
            })(v634);
        }));
    })();
    return l236;
})(); 
var l237 = f122("%READ-LIST");
var f200;
(function(){
    (function(){
        return f200 = (function(v851){
            ((v851)["fname"] = "%READ-LIST");
            return v851;
        })((function (v852){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f199(v852);
            return (function(v853){
                return (f120(v853) !== v634 ? (function(){
                    return (function (){ throw "Unspected EOF";return 0;})();
                })() : (f167(v853, 41) !== v634 ? (function(){
                    f194(v852);
                    return v634;
                })() : (f167(v853, 46) !== v634 ? (function(){
                    f194(v852);
                    return (function(v854){
                        f199(v852);
                        (f167(f194(v852), 41) !== v634 ? v634 : (function(){
                            return (function (){ throw "')' was expected.";return 0;})();
                        })());
                        return v854;
                    })(f201(v852));
                })() : (function(){
                    return ({car: f201(v852), cdr: f200(v852)});
                })())));
            })(f193(v852));
        }));
    })();
    return l237;
})(); 
var l238 = f122("READ-STRING");
var f202;
(function(){
    (function(){
        return f202 = (function(v855){
            ((v855)["fname"] = "READ-STRING");
            return v855;
        })((function (v856){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v857,v858){
                v858 = f194(v856);
                (function(){
                    while(f136(f135(v858, 34)) !== v634){
                        (f120(v858) !== v634 ? (function(){
                            return (function (){ throw "Unexpected EOF";return 0;})();
                        })() : v634);
                        (f135(v858, 92) !== v634 ? (function(){
                            return v858 = f194(v856);
                        })() : v634);
                        v857 = f184(v857, (function(){
                            var x = v858;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            return String.fromCharCode(x);
                        })());
                        v858 = f194(v856);
                }})();
                return v857;
            })("",v634);
        }));
    })();
    return l238;
})(); 
var l240 = f122("READ-SHARP");
var l239 = f122("FUNCTION");
var f203;
(function(){
    (function(){
        return f203 = (function(v859){
            ((v859)["fname"] = "READ-SHARP");
            return v859;
        })((function (v860){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f194(v860);
            return (function(v861){
                return (f135(v861, 39) !== v634 ? (function(){
                    return f152(l239, f201(v860));
                })() : (f135(v861, 92) !== v634 ? (function(){
                    return (function(v862){
                        return (f183(v862, "space") !== v634 ? (function(){
                            return f166(32);
                        })() : (f183(v862, "tab") !== v634 ? (function(){
                            return f166(9);
                        })() : (f183(v862, "newline") !== v634 ? (function(){
                            return f166(10);
                        })() : (function(){
                            return f166((function(){
                                var string = v862;
                                var index = 0;
                                if (typeof string != 'string')
                                    throw 'The value ' + string + ' is not a type string.';
                                if (typeof index != 'number')
                                    throw 'The value ' + index + ' is not a type number.';
                                return string.charCodeAt(index);
                            })());
                        })())));
                    })(f184((function(){
                        var x = f194(v860);
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        return String.fromCharCode(x);
                    })(), f198(v860, f197)));
                })() : (f135(v861, 43) !== v634 ? (function(){
                    return (function(v863){
                        return (f183(v863, "common-lisp") !== v634 ? (function(){
                            f201(v860);
                            return f201(v860);
                        })() : (f183(v863, "ecmalisp") !== v634 ? (function(){
                            return f201(v860);
                        })() : (function(){
                            return (function (){ throw "Unknown reader form.";return 0;})();
                        })()));
                    })(f198(v860, f197));
                })() : (function(){
                    return (function (){ throw "ECASE expression failed.";return 0;})();
                })())));
            })(f194(v860));
        }));
    })();
    return l240;
})(); 
var l241 = f122("*EOF*");
var v864;
(function(){
    (function(){
        return v864 = (function(){
            var name = "EOF";
            if (typeof name != 'string')
                throw 'The value ' + name + ' is not a type string.';
            return ({name: name});
        })();
    })();
    return l241;
})(); 
var l246 = f122("LS-READ");
var l245 = f122("UNQUOTE");
var l244 = f122("UNQUOTE-SPLICING");
var l243 = f122("BACKQUOTE");
var l242 = f122("QUOTE");
var f201;
(function(){
    (function(){
        return f201 = (function(v865){
            ((v865)["fname"] = "LS-READ");
            return v865;
        })((function (v866){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            f199(v866);
            return (function(v867){
                return (f120(v867) !== v634 ? (function(){
                    return v864;
                })() : (f167(v867, 40) !== v634 ? (function(){
                    f194(v866);
                    return f200(v866);
                })() : (f167(v867, 39) !== v634 ? (function(){
                    f194(v866);
                    return f152(l242, f201(v866));
                })() : (f167(v867, 96) !== v634 ? (function(){
                    f194(v866);
                    return f152(l243, f201(v866));
                })() : (f167(v867, 34) !== v634 ? (function(){
                    f194(v866);
                    return f202(v866);
                })() : (f167(v867, 44) !== v634 ? (function(){
                    f194(v866);
                    return (f135(f193(v866), 64) !== v634 ? (function(){
                        f194(v866);
                        return f152(l244, f201(v866));
                    })() : f152(l245, f201(v866)));
                })() : (f167(v867, 35) !== v634 ? (function(){
                    return f203(v866);
                })() : (function(){
                    return (function(v868){
                        return (f181(f178, v868) !== v634 ? f180(v868) : f122((function(){
                            var x = v868;
                            if (typeof x != 'string')
                                throw 'The value ' + x + ' is not a type string.';
                            return x.toUpperCase();
                        })()));
                    })(f198(v866, f197));
                })())))))));
            })(f193(v866));
        }));
    })();
    return l246;
})(); 
var l247 = f122("LS-READ-FROM-STRING");
var f204;
(function(){
    (function(){
        return f204 = (function(v869){
            ((v869)["fname"] = "LS-READ-FROM-STRING");
            return v869;
        })((function (v870){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f201(f192(v870));
        }));
    })();
    return l247;
})(); 
var l249 = f122("*COMPILATION-UNIT-CHECKS*");
var l248 = f122("NIL");
var v871;
(function(){
    (function(){
        return v871 = l248;
    })();
    return l249;
})(); 
var l251 = f122("*ENV*");
var l250 = f122("NIL");
var v872;
(function(){
    (function(){
        return v872 = l250;
    })();
    return l251;
})(); 
var l253 = f122("*FENV*");
var l252 = f122("NIL");
var v873;
(function(){
    (function(){
        return v873 = l252;
    })();
    return l253;
})(); 
var l254 = f122("MAKE-BINDING");
var f205;
(function(){
    (function(){
        return f205 = (function(v874){
            ((v874)["fname"] = "MAKE-BINDING");
            return v874;
        })((function (v875,v876,v877,v878){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return f152(v875, v876, v877, v878);
        }));
    })();
    return l254;
})(); 
var l255 = f122("BINDING-NAME");
var f206;
(function(){
    (function(){
        return f206 = (function(v879){
            ((v879)["fname"] = "BINDING-NAME");
            return v879;
        })((function (v880){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f148(v880);
        }));
    })();
    return l255;
})(); 
var l256 = f122("BINDING-TYPE");
var f207;
(function(){
    (function(){
        return f207 = (function(v881){
            ((v881)["fname"] = "BINDING-TYPE");
            return v881;
        })((function (v882){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f149(v882);
        }));
    })();
    return l256;
})(); 
var l257 = f122("BINDING-TRANSLATION");
var f208;
(function(){
    (function(){
        return f208 = (function(v883){
            ((v883)["fname"] = "BINDING-TRANSLATION");
            return v883;
        })((function (v884){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f150(v884);
        }));
    })();
    return l257;
})(); 
var l258 = f122("BINDING-DECLARED");
var f209;
(function(){
    (function(){
        return f209 = (function(v885){
            ((v885)["fname"] = "BINDING-DECLARED");
            return v885;
        })((function (v886){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (v886 !== v634 ? f151(v886) : v634);
        }));
    })();
    return l258;
})(); 
var l259 = f122("MARK-BINDING-AS-DECLARED");
var f210;
(function(){
    (function(){
        return f210 = (function(v887){
            ((v887)["fname"] = "MARK-BINDING-AS-DECLARED");
            return v887;
        })((function (v888){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(){
                var x = f146(v888);
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = v635);
            })();
        }));
    })();
    return l259;
})(); 
var l260 = f122("*VARIABLE-COUNTER*");
var v889;
(function(){
    (function(){
        return v889 = 0;
    })();
    return l260;
})(); 
var l261 = f122("GVARNAME");
var f211;
(function(){
    (function(){
        return f211 = (function(v890){
            ((v890)["fname"] = "GVARNAME");
            return v890;
        })((function (v891){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f184("v", f125(v889 = (function(){
                var x = v889;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()));
        }));
    })();
    return l261;
})(); 
var l263 = f122("LOOKUP-VARIABLE");
var l262 = f122("VARIABLE");
var f212;
(function(){
    (function(){
        return f212 = (function(v892){
            ((v892)["fname"] = "LOOKUP-VARIABLE");
            return v892;
        })((function (v893,v894){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v895){
                return (v895 !== v634 ? v895 : (function(v896){
                    return (v896 !== v634 ? v896 : (function(v897,v898){
                        v872 = ({car: v898, cdr: v872});
                        v871 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f209(f182(v893, v872)) !== v634 ? v634 : (function(){
                                return (function (){ throw f184("Undefined variable `", v897, "'");return 0;})();
                            })());
                        }), cdr: v871});
                        return v898;
                    })((v893).name,f205(v893, l262, f211(v893), v634)));
                })(f182(v893, v872)));
            })(f182(v893, v894));
        }));
    })();
    return l263;
})(); 
var l264 = f122("LOOKUP-VARIABLE-TRANSLATION");
var f213;
(function(){
    (function(){
        return f213 = (function(v899){
            ((v899)["fname"] = "LOOKUP-VARIABLE-TRANSLATION");
            return v899;
        })((function (v900,v901){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f208(f212(v900, v901));
        }));
    })();
    return l264;
})(); 
var l266 = f122("EXTEND-LOCAL-ENV");
var l265 = f122("VARIABLE");
var f214;
(function(){
    (function(){
        return f214 = (function(v902){
            ((v902)["fname"] = "EXTEND-LOCAL-ENV");
            return v902;
        })((function (v903,v904){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f158(f164((function (v905){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f205(v905, l265, f211(v905), v635);
            }), v903), v904);
        }));
    })();
    return l266;
})(); 
var l267 = f122("*FUNCTION-COUNTER*");
var v906;
(function(){
    (function(){
        return v906 = 0;
    })();
    return l267;
})(); 
var l269 = f122("LOOKUP-FUNCTION");
var l268 = f122("FUNCTION");
var f215;
(function(){
    (function(){
        return f215 = (function(v907){
            ((v907)["fname"] = "LOOKUP-FUNCTION");
            return v907;
        })((function (v908,v909){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return (function(v910){
                return (v910 !== v634 ? v910 : (function(v911){
                    return (v911 !== v634 ? v911 : (function(v912,v913){
                        v873 = ({car: v913, cdr: v873});
                        v871 = ({car: (function (){
                            if (arguments.length > 0) throw 'too many arguments';
                            return (f209(f182(v908, v873)) !== v634 ? v634 : (function(){
                                return (function (){ throw f184("Undefined function `", v912, "'");return 0;})();
                            })());
                        }), cdr: v871});
                        return v913;
                    })((v908).name,f205(v908, l268, f184("f", f125(v906 = (function(){
                        var x = v906;
                        var y = 1;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x+y;
                    })())), v634)));
                })(f182(v908, v873)));
            })(f182(v908, v909));
        }));
    })();
    return l269;
})(); 
var l270 = f122("LOOKUP-FUNCTION-TRANSLATION");
var f216;
(function(){
    (function(){
        return f216 = (function(v914){
            ((v914)["fname"] = "LOOKUP-FUNCTION-TRANSLATION");
            return v914;
        })((function (v915,v916){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return f208(f215(v915, v916));
        }));
    })();
    return l270;
})(); 
var l271 = f122("*TOPLEVEL-COMPILATIONS*");
var v917;
(function(){
    (function(){
        return v917 = v634;
    })();
    return l271;
})(); 
var l272 = f122("%COMPILE-DEFVAR");
var f217;
(function(){
    (function(){
        return f217 = (function(v918){
            ((v918)["fname"] = "%COMPILE-DEFVAR");
            return v918;
        })((function (v919){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v920){
                f210(v920);
                return v917 = ({car: f184("var ", f208(v920)), cdr: v917});
            })(f212(v919, v872));
        }));
    })();
    return l272;
})(); 
var l273 = f122("%COMPILE-DEFUN");
var f218;
(function(){
    (function(){
        return f218 = (function(v921){
            ((v921)["fname"] = "%COMPILE-DEFUN");
            return v921;
        })((function (v922){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v923){
                f210(v923);
                return v917 = ({car: f184("var ", f208(v923)), cdr: v917});
            })(f215(v922, v873));
        }));
    })();
    return l273;
})(); 
var l275 = f122("%COMPILE-DEFMACRO");
var l274 = f122("MACRO");
var f219;
(function(){
    (function(){
        return f219 = (function(v924){
            ((v924)["fname"] = "%COMPILE-DEFMACRO");
            return v924;
        })((function (v925,v926){
            if (arguments.length < 2) throw 'too few arguments';
            if (arguments.length > 2) throw 'too many arguments';
            return v873 = ({car: f205(v925, l274, v926, v635), cdr: v873});
        }));
    })();
    return l275;
})(); 
var l276 = f122("*COMPILATIONS*");
var v927;
(function(){
    (function(){
        return v927 = v634;
    })();
    return l276;
})(); 
var l277 = f122("LS-COMPILE-BLOCK");
var f220;
(function(){
    (function(){
        return f220 = (function(v928){
            ((v928)["fname"] = "LS-COMPILE-BLOCK");
            return v928;
        })((function (v929,v930,v931){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f186(f176((function (v932){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v933){
                    return (v933 !== v634 ? v933 : (((typeof(v932) == "string")?v635: v634) !== v634 ? f133(f162(v932)) : v634));
                })(f120(v932));
            }), f164((function (v934){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f221(v934, v930, v931);
            }), v929)), f184(";", v796));
        }));
    })();
    return l277;
})(); 
var l278 = f122("IF");
v927 = ({car: f152(l278, (function (v935,v936,v937,v938,v939){
    if (arguments.length < 5) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    return f184("(", f221(v937, v935, v936), " !== ", f221(v634, v634, v634), " ? ", f221(v938, v935, v936), " : ", f221(v939, v935, v936), ")");
})), cdr: v927}); 
var l280 = f122("*LAMBDA-LIST-KEYWORDS*");
var l279 = {car: f122("&OPTIONAL"), cdr: {car: f122("&REST"), cdr: f122("NIL")}};
var v940;
(function(){
    (function(){
        return v940 = l279;
    })();
    return l280;
})(); 
var l281 = f122("LIST-UNTIL-KEYWORD");
var f222;
(function(){
    (function(){
        return f222 = (function(v941){
            ((v941)["fname"] = "LIST-UNTIL-KEYWORD");
            return v941;
        })((function (v942){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((function(v943){
                return (v943 !== v634 ? v943 : f174((function(){
                    var tmp = v942;
                    return tmp === v634? v634: tmp.car;
                })(), v940));
            })(f120(v942)) !== v634 ? v634 : ({car: (function(){
                var tmp = v942;
                return tmp === v634? v634: tmp.car;
            })(), cdr: f222((function(){
                var tmp = v942;
                return tmp === v634? v634: tmp.cdr;
            })())}));
        }));
    })();
    return l281;
})(); 
var l282 = f122("LAMBDA-LIST-REQUIRED-ARGUMENTS");
var f223;
(function(){
    (function(){
        return f223 = (function(v944){
            ((v944)["fname"] = "LAMBDA-LIST-REQUIRED-ARGUMENTS");
            return v944;
        })((function (v945){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f222(v945);
        }));
    })();
    return l282;
})(); 
var l284 = f122("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
var l283 = f122("&OPTIONAL");
var f224;
(function(){
    (function(){
        return f224 = (function(v946){
            ((v946)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT");
            return v946;
        })((function (v947){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f164(f154, f222((function(){
                var tmp = f174(l283, v947);
                return tmp === v634? v634: tmp.cdr;
            })()));
        }));
    })();
    return l284;
})(); 
var l285 = f122("LAMBDA-LIST-OPTIONAL-ARGUMENTS");
var f225;
(function(){
    (function(){
        return f225 = (function(v948){
            ((v948)["fname"] = "LAMBDA-LIST-OPTIONAL-ARGUMENTS");
            return v948;
        })((function (v949){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f164(f139, f224(v949));
        }));
    })();
    return l285;
})(); 
var l287 = f122("LAMBDA-LIST-REST-ARGUMENT");
var l286 = f122("&REST");
var f226;
(function(){
    (function(){
        return f226 = (function(v950){
            ((v950)["fname"] = "LAMBDA-LIST-REST-ARGUMENT");
            return v950;
        })((function (v951){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v952){
                ((function(){
                    var tmp = v952;
                    return tmp === v634? v634: tmp.cdr;
                })() !== v634 ? (function(){
                    return (function (){ throw "Bad lambda-list";return 0;})();
                })() : v634);
                return (function(){
                    var tmp = v952;
                    return tmp === v634? v634: tmp.car;
                })();
            })(f222((function(){
                var tmp = f174(l286, v951);
                return tmp === v634? v634: tmp.cdr;
            })()));
        }));
    })();
    return l287;
})(); 
var l288 = f122("LAMBDA");
v927 = ({car: f152(l288, (function (v954,v955,v956){
    if (arguments.length < 3) throw 'too few arguments';
    var v953= v634;
    for (var i = arguments.length-1; i>=3; i--)
        v953 = {car: arguments[i], cdr: v953};
    return (function(v957,v958,v959){
        return (function(v960,v961,v962){
            return f184("(function (", f185(f164((function (v963){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return f213(v963, v962);
            }), f158(v957, v958)), ","), "){", v796, f187((v957 !== v634 ? f184("if (arguments.length < ", f125(v960), ") throw 'too few arguments';", v796) : ""), (f136(v959) !== v634 ? f184("if (arguments.length > ", f125((function(){
                var x = v960;
                var y = v961;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })()), ") throw 'too many arguments';", v796) : ""), (v958 !== v634 ? f184("switch(arguments.length){", v796, (function(v964,v965,v966){
                return (function(){
                    (function(){
                        while(((function(){
                            var x = v966;
                            var y = v961;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x<y;
                        })()?v635: v634) !== v634){
                            (function(v967){
                                v965 = ({car: f184("case ", f125((function(){
                                    var x = v966;
                                    var y = v960;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })()), ":", v796, f213((function(){
                                    var tmp = v967;
                                    return tmp === v634? v634: tmp.car;
                                })(), v962), "=", f221(f142(v967), v962, v955), ";", v796), cdr: v965});
                                return v966 = (function(){
                                    var x = v966;
                                    var y = 1;
                                    if (typeof x != 'number')
                                        throw 'The value ' + x + ' is not a type number.';
                                    if (typeof y != 'number')
                                        throw 'The value ' + y + ' is not a type number.';
                                    return x+y;
                                })();
                            })(f171(v966, v964));
                    }})();
                    v965 = ({car: f184("default: break;", v796), cdr: v965});
                    return f185(f160(v965));
                })();
            })(f224(v956),v634,0), "}", v796) : ""), (v959 !== v634 ? (function(v968){
                return f184("var ", v968, "= ", f221(v634, v954, v955), ";", v796, "for (var i = arguments.length-1; i>=", f125((function(){
                    var x = v960;
                    var y = v961;
                    if (typeof x != 'number')
                        throw 'The value ' + x + ' is not a type number.';
                    if (typeof y != 'number')
                        throw 'The value ' + y + ' is not a type number.';
                    return x+y;
                })()), "; i--)", v796, f187(v968, " = ", "{car: arguments[i], cdr: "), v968, "};", v796);
            })(f213(v959, v962)) : ""), f184(f220(f173(v953), v962, v955), "return ", f221((function(){
                var tmp = f172(v953);
                return tmp === v634? v634: tmp.car;
            })(), v962, v955), ";")), v796, "})");
        })(f162(v957),f162(v958),f214(f158(f154(v959), v957, v958), v954));
    })(f223(v956),f225(v956),f226(v956));
})), cdr: v927}); 
var l289 = f122("FSETQ");
v927 = ({car: f152(l289, (function (v969,v970,v971,v972){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f184(f216(v971, v970), " = ", f221(v972, v969, v970));
})), cdr: v927}); 
var l290 = f122("SETQ");
v927 = ({car: f152(l290, (function (v973,v974,v975,v976){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return f184(f213(v975, v973), " = ", f221(v976, v973, v974));
})), cdr: v927}); 
var l291 = f122("ESCAPE-STRING");
var f189;
(function(){
    (function(){
        return f189 = (function(v977){
            ((v977)["fname"] = "ESCAPE-STRING");
            return v977;
        })((function (v978){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v979,v980,v981){
                (function(){
                    while(((function(){
                        var x = v980;
                        var y = v981;
                        if (typeof x != 'number')
                            throw 'The value ' + x + ' is not a type number.';
                        if (typeof y != 'number')
                            throw 'The value ' + y + ' is not a type number.';
                        return x<y;
                    })()?v635: v634) !== v634){
                        (function(v982){
                            ((function(v983){
                                return (v983 !== v634 ? v983 : f167(v982, 92));
                            })(f167(v982, 34)) !== v634 ? (function(){
                                return v979 = f184(v979, "\\");
                            })() : v634);
                            (f167(v982, 10) !== v634 ? (function(){
                                v979 = f184(v979, "\\");
                                return v982 = 110;
                            })() : v634);
                            return v979 = f184(v979, (function(){
                                var x = v982;
                                if (typeof x != 'number')
                                    throw 'The value ' + x + ' is not a type number.';
                                return String.fromCharCode(x);
                            })());
                        })((function(){
                            var string = v978;
                            var index = v980;
                            if (typeof string != 'string')
                                throw 'The value ' + string + ' is not a type string.';
                            if (typeof index != 'number')
                                throw 'The value ' + index + ' is not a type number.';
                            return string.charCodeAt(index);
                        })());
                        v980 = (function(){
                            var x = v980;
                            var y = 1;
                            if (typeof x != 'number')
                                throw 'The value ' + x + ' is not a type number.';
                            if (typeof y != 'number')
                                throw 'The value ' + y + ' is not a type number.';
                            return x+y;
                        })();
                }})();
                return v979;
            })("",0,f162(v978));
        }));
    })();
    return l291;
})(); 
var l293 = f122("LITERAL->JS");
var l292 = f122("INTERN");
var f227;
(function(){
    (function(){
        return f227 = (function(v984){
            ((v984)["fname"] = "LITERAL->JS");
            return v984;
        })((function (v985){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (f168(v985) !== v634 ? (function(){
                return f125(v985);
            })() : (((typeof(v985) == "string")?v635: v634) !== v634 ? (function(){
                return f184("\"", f189(v985), "\"");
            })() : (((function(){
                var tmp = v985;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v635: v634) !== v634 ? (function(){
                return f221(f158(f152(l292), f152(f189((v985).name))), v872, v873);
            })() : (((function(){
                var tmp = v985;
                return (typeof tmp == 'object' && 'car' in tmp);
            })()?v635: v634) !== v634 ? (function(){
                return f184("{car: ", f227((function(){
                    var tmp = v985;
                    return tmp === v634? v634: tmp.car;
                })()), ", cdr: ", f227((function(){
                    var tmp = v985;
                    return tmp === v634? v634: tmp.cdr;
                })()), "}");
            })() : v634))));
        }));
    })();
    return l293;
})(); 
var l294 = f122("*LITERAL-COUNTER*");
var v986;
(function(){
    (function(){
        return v986 = 0;
    })();
    return l294;
})(); 
var l295 = f122("LITERAL");
var f228;
(function(){
    (function(){
        return f228 = (function(v987){
            ((v987)["fname"] = "LITERAL");
            return v987;
        })((function (v988){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (function(v989){
                v917 = ({car: f184("var ", v989, " = ", f227(v988)), cdr: v917});
                return v989;
            })(f184("l", f125(v986 = (function(){
                var x = v986;
                var y = 1;
                if (typeof x != 'number')
                    throw 'The value ' + x + ' is not a type number.';
                if (typeof y != 'number')
                    throw 'The value ' + y + ' is not a type number.';
                return x+y;
            })())));
        }));
    })();
    return l295;
})(); 
var l296 = f122("QUOTE");
v927 = ({car: f152(l296, (function (v990,v991,v992){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f228(v992);
})), cdr: v927}); 
var l297 = f122("WHILE");
v927 = ({car: f152(l297, (function (v994,v995,v996){
    if (arguments.length < 3) throw 'too few arguments';
    var v993= v634;
    for (var i = arguments.length-1; i>=3; i--)
        v993 = {car: arguments[i], cdr: v993};
    return f184("(function(){", v796, f187("while(", f221(v996, v994, v995), " !== ", f221(v634, v634, v634), "){", v796, f187(f220(v993, v994, v995))), "}})()");
})), cdr: v927}); 
var l299 = f122("LAMBDA");
var l298 = f122("FUNCTION");
v927 = ({car: f152(l298, (function (v997,v998,v999){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return ((f155(v999) !== v634 ? (((function(){
        var tmp = v999;
        return tmp === v634? v634: tmp.car;
    })() === l299)?v635: v634) : v634) !== v634 ? (function(){
        return f221(v999, v997, v998);
    })() : (((function(){
        var tmp = v999;
        return (typeof tmp == 'object' && 'name' in tmp);
    })()?v635: v634) !== v634 ? (function(){
        return f216(v999, v998);
    })() : v634));
})), cdr: v927}); 
var l301 = f122("PROGN");
var l300 = f122("EVAL-WHEN-COMPILE");
v927 = ({car: f152(l300, (function (v1001,v1002){
    if (arguments.length < 2) throw 'too few arguments';
    var v1000= v634;
    for (var i = arguments.length-1; i>=2; i--)
        v1000 = {car: arguments[i], cdr: v1000};
    f229(({car: l301, cdr: v1000}));
    return "";
})), cdr: v927}); 
var l302 = f122("PROGN");
v927 = ({car: f152(l302, (function (v1004,v1005){
    if (arguments.length < 2) throw 'too few arguments';
    var v1003= v634;
    for (var i = arguments.length-1; i>=2; i--)
        v1003 = {car: arguments[i], cdr: v1003};
    return f184("(function(){", v796, f187(f220(f173(v1003), v1004, v1005), "return ", f221((function(){
        var tmp = f172(v1003);
        return tmp === v634? v634: tmp.car;
    })(), v1004, v1005), ";", v796), "})()");
})), cdr: v927}); 
var l303 = f122("LET");
v927 = ({car: f152(l303, (function (v1007,v1008,v1009){
    if (arguments.length < 3) throw 'too few arguments';
    var v1006= v634;
    for (var i = arguments.length-1; i>=3; i--)
        v1006 = {car: arguments[i], cdr: v1006};
    return (function(v1010){
        return (function(v1011,v1012){
            return (function(v1013){
                return f184("(function(", f185(f164((function (v1014){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f213(v1014, v1013);
                }), v1011), ","), "){", v796, f187(f220(f173(v1006), v1013, v1008), "return ", f221((function(){
                    var tmp = f172(v1006);
                    return tmp === v634? v634: tmp.car;
                })(), v1013, v1008), ";", v796), "})(", f185(f164((function (v1015){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f221(v1015, v1007, v1008);
                }), v1012), ","), ")");
            })(f214(v1011, v1007));
        })(f164(f148, v1010),f164(f149, v1010));
    })(f164(f154, v1009));
})), cdr: v927}); 
var l312 = f122("BACKQUOTE-EXPAND-1");
var l311 = f122("LIST");
var l310 = f122("UNQUOTE-SPLICING");
var l309 = f122("LIST");
var l308 = f122("UNQUOTE");
var l307 = f122("APPEND");
var l306 = f122("BACKQUOTE");
var l305 = f122("UNQUOTE");
var l304 = f122("QUOTE");
var f230;
(function(){
    (function(){
        return f230 = (function(v1016){
            ((v1016)["fname"] = "BACKQUOTE-EXPAND-1");
            return v1016;
        })((function (v1017){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v1017;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v635: v634) !== v634 ? (function(){
                return f152(l304, v1017);
            })() : (f153(v1017) !== v634 ? (function(){
                return v1017;
            })() : ((((function(){
                var tmp = v1017;
                return tmp === v634? v634: tmp.car;
            })() === l305)?v635: v634) !== v634 ? (function(){
                return (function(){
                    var tmp = v1017;
                    return tmp === v634? v634: tmp.car;
                })();
            })() : ((((function(){
                var tmp = v1017;
                return tmp === v634? v634: tmp.car;
            })() === l306)?v635: v634) !== v634 ? (function(){
                return f230(f230(f142(v1017)));
            })() : (function(){
                return ({car: l307, cdr: f164((function (v1018){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return ((f155(v1018) !== v634 ? (((function(){
                        var tmp = v1018;
                        return tmp === v634? v634: tmp.car;
                    })() === l308)?v635: v634) : v634) !== v634 ? (function(){
                        return f152(l309, f142(v1018));
                    })() : ((f155(v1018) !== v634 ? (((function(){
                        var tmp = v1018;
                        return tmp === v634? v634: tmp.car;
                    })() === l310)?v635: v634) : v634) !== v634 ? (function(){
                        return f142(v1018);
                    })() : (function(){
                        return f152(l311, f230(v1018));
                    })()));
                }), v1017)});
            })()))));
        }));
    })();
    return l312;
})(); 
var l314 = f122("BACKQUOTE-EXPAND");
var l313 = f122("BACKQUOTE");
var f231;
(function(){
    (function(){
        return f231 = (function(v1019){
            ((v1019)["fname"] = "BACKQUOTE-EXPAND");
            return v1019;
        })((function (v1020){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return ((f155(v1020) !== v634 ? (((function(){
                var tmp = v1020;
                return tmp === v634? v634: tmp.car;
            })() === l313)?v635: v634) : v634) !== v634 ? f230(f142(v1020)) : v1020);
        }));
    })();
    return l314;
})(); 
var l315 = f122("BACKQUOTE");
v927 = ({car: f152(l315, (function (v1021,v1022,v1023){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return f221(f230(v1023), v1021, v1022);
})), cdr: v927}); 
var l316 = f122("COMPILE-BOOL");
var f232;
(function(){
    (function(){
        return f232 = (function(v1024){
            ((v1024)["fname"] = "COMPILE-BOOL");
            return v1024;
        })((function (v1025){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f184("(", v1025, "?", f221(v635, v634, v634), ": ", f221(v634, v634, v634), ")");
        }));
    })();
    return l316;
})(); 
var l317 = f122("NUM-OP-NUM");
var f233;
(function(){
    (function(){
        return f233 = (function(v1026){
            ((v1026)["fname"] = "NUM-OP-NUM");
            return v1026;
        })((function (v1027,v1028,v1029){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1027, ";", v796), f184("var ", "y", " = ", v1029, ";", v796), f184("if (typeof ", "x", " != '", "number", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v796)), f184("if (typeof ", "y", " != '", "number", "')", v796, f187("throw 'The value ' + ", "y", " + ' is not a type ", "number", ".';", v796)), f184("return ", (function(){
                return f184("x", v1028, "y");
            })(), ";", v796)), "})()");
        }));
    })();
    return l317;
})(); 
var l318 = f122("+");
v927 = ({car: f152(l318, (function (v1030,v1031,v1032,v1033){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1034,v1035){
        return f233(v1034, "+", v1035);
    })(f221(v1032, v1030, v1031),f221(v1033, v1030, v1031));
})), cdr: v927}); 
var l319 = f122("-");
v927 = ({car: f152(l319, (function (v1036,v1037,v1038,v1039){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1040,v1041){
        return f233(v1040, "-", v1041);
    })(f221(v1038, v1036, v1037),f221(v1039, v1036, v1037));
})), cdr: v927}); 
var l320 = f122("*");
v927 = ({car: f152(l320, (function (v1042,v1043,v1044,v1045){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1046,v1047){
        return f233(v1046, "*", v1047);
    })(f221(v1044, v1042, v1043),f221(v1045, v1042, v1043));
})), cdr: v927}); 
var l321 = f122("/");
v927 = ({car: f152(l321, (function (v1048,v1049,v1050,v1051){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1052,v1053){
        return f233(v1052, "/", v1053);
    })(f221(v1050, v1048, v1049),f221(v1051, v1048, v1049));
})), cdr: v927}); 
var l322 = f122("MOD");
v927 = ({car: f152(l322, (function (v1054,v1055,v1056,v1057){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1058,v1059){
        return f233(v1058, "%", v1059);
    })(f221(v1056, v1054, v1055),f221(v1057, v1054, v1055));
})), cdr: v927}); 
var l323 = f122("<");
v927 = ({car: f152(l323, (function (v1060,v1061,v1062,v1063){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1064,v1065){
        return f232(f233(v1064, "<", v1065));
    })(f221(v1062, v1060, v1061),f221(v1063, v1060, v1061));
})), cdr: v927}); 
var l324 = f122(">");
v927 = ({car: f152(l324, (function (v1066,v1067,v1068,v1069){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1070,v1071){
        return f232(f233(v1070, ">", v1071));
    })(f221(v1068, v1066, v1067),f221(v1069, v1066, v1067));
})), cdr: v927}); 
var l325 = f122("=");
v927 = ({car: f152(l325, (function (v1072,v1073,v1074,v1075){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1076,v1077){
        return f232(f233(v1076, "==", v1077));
    })(f221(v1074, v1072, v1073),f221(v1075, v1072, v1073));
})), cdr: v927}); 
var l326 = f122("<=");
v927 = ({car: f152(l326, (function (v1078,v1079,v1080,v1081){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1082,v1083){
        return f232(f233(v1082, "<=", v1083));
    })(f221(v1080, v1078, v1079),f221(v1081, v1078, v1079));
})), cdr: v927}); 
var l327 = f122(">=");
v927 = ({car: f152(l327, (function (v1084,v1085,v1086,v1087){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1088,v1089){
        return f232(f233(v1088, ">=", v1089));
    })(f221(v1086, v1084, v1085),f221(v1087, v1084, v1085));
})), cdr: v927}); 
var l328 = f122("NUMBERP");
v927 = ({car: f152(l328, (function (v1090,v1091,v1092){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1093){
        return f232(f184("(typeof (", v1093, ") == \"number\")"));
    })(f221(v1092, v1090, v1091));
})), cdr: v927}); 
var l329 = f122("FLOOR");
v927 = ({car: f152(l329, (function (v1094,v1095,v1096){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1097){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1097, ";", v796), f184("if (typeof ", "x", " != '", "number", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v796)), f184("return ", (function(){
            return "Math.floor(x)";
        })(), ";", v796)), "})()");
    })(f221(v1096, v1094, v1095));
})), cdr: v927}); 
var l330 = f122("CONS");
v927 = ({car: f152(l330, (function (v1098,v1099,v1100,v1101){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1102,v1103){
        return f184("({car: ", v1102, ", cdr: ", v1103, "})");
    })(f221(v1100, v1098, v1099),f221(v1101, v1098, v1099));
})), cdr: v927}); 
var l331 = f122("CONSP");
v927 = ({car: f152(l331, (function (v1104,v1105,v1106){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1107){
        return f232(f184("(function(){", v796, f187("var tmp = ", v1107, ";", v796, "return (typeof tmp == 'object' && 'car' in tmp);", v796), "})()"));
    })(f221(v1106, v1104, v1105));
})), cdr: v927}); 
var l332 = f122("CAR");
v927 = ({car: f152(l332, (function (v1108,v1109,v1110){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1111){
        return f184("(function(){", v796, f187("var tmp = ", v1111, ";", v796, "return tmp === ", f221(v634, v634, v634), "? ", f221(v634, v634, v634), ": tmp.car;", v796), "})()");
    })(f221(v1110, v1108, v1109));
})), cdr: v927}); 
var l333 = f122("CDR");
v927 = ({car: f152(l333, (function (v1112,v1113,v1114){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1115){
        return f184("(function(){", v796, f187("var tmp = ", v1115, ";", v796, "return tmp === ", f221(v634, v634, v634), "? ", f221(v634, v634, v634), ": tmp.cdr;", v796), "})()");
    })(f221(v1114, v1112, v1113));
})), cdr: v927}); 
var l334 = f122("SETCAR");
v927 = ({car: f152(l334, (function (v1116,v1117,v1118,v1119){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1120,v1121){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1120, ";", v796), f184("if (typeof ", "x", " != '", "object", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v796)), f184("return ", (function(){
            return f184("(x.car = ", v1121, ")");
        })(), ";", v796)), "})()");
    })(f221(v1118, v1116, v1117),f221(v1119, v1116, v1117));
})), cdr: v927}); 
var l335 = f122("SETCDR");
v927 = ({car: f152(l335, (function (v1122,v1123,v1124,v1125){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1126,v1127){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1126, ";", v796), f184("if (typeof ", "x", " != '", "object", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "object", ".';", v796)), f184("return ", (function(){
            return f184("(x.cdr = ", v1127, ")");
        })(), ";", v796)), "})()");
    })(f221(v1124, v1122, v1123),f221(v1125, v1122, v1123));
})), cdr: v927}); 
var l336 = f122("SYMBOLP");
v927 = ({car: f152(l336, (function (v1128,v1129,v1130){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1131){
        return f232(f184("(function(){", v796, f187("var tmp = ", v1131, ";", v796, "return (typeof tmp == 'object' && 'name' in tmp);", v796), "})()"));
    })(f221(v1130, v1128, v1129));
})), cdr: v927}); 
var l337 = f122("MAKE-SYMBOL");
v927 = ({car: f152(l337, (function (v1132,v1133,v1134){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1135){
        return f184("(function(){", v796, f187(f184("var ", "name", " = ", v1135, ";", v796), f184("if (typeof ", "name", " != '", "string", "')", v796, f187("throw 'The value ' + ", "name", " + ' is not a type ", "string", ".';", v796)), f184("return ", (function(){
            return "({name: name})";
        })(), ";", v796)), "})()");
    })(f221(v1134, v1132, v1133));
})), cdr: v927}); 
var l338 = f122("SYMBOL-NAME");
v927 = ({car: f152(l338, (function (v1136,v1137,v1138){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1139){
        return f184("(", v1139, ").name");
    })(f221(v1138, v1136, v1137));
})), cdr: v927}); 
var l339 = f122("EQ");
v927 = ({car: f152(l339, (function (v1140,v1141,v1142,v1143){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1144,v1145){
        return f232(f184("(", v1144, " === ", v1145, ")"));
    })(f221(v1142, v1140, v1141),f221(v1143, v1140, v1141));
})), cdr: v927}); 
var l340 = f122("EQUAL");
v927 = ({car: f152(l340, (function (v1146,v1147,v1148,v1149){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1150,v1151){
        return f232(f184("(", v1150, " == ", v1151, ")"));
    })(f221(v1148, v1146, v1147),f221(v1149, v1146, v1147));
})), cdr: v927}); 
var l341 = f122("STRING");
v927 = ({car: f152(l341, (function (v1152,v1153,v1154){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1155){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1155, ";", v796), f184("if (typeof ", "x", " != '", "number", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "number", ".';", v796)), f184("return ", (function(){
            return "String.fromCharCode(x)";
        })(), ";", v796)), "})()");
    })(f221(v1154, v1152, v1153));
})), cdr: v927}); 
var l342 = f122("STRINGP");
v927 = ({car: f152(l342, (function (v1156,v1157,v1158){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1159){
        return f232(f184("(typeof(", v1159, ") == \"string\")"));
    })(f221(v1158, v1156, v1157));
})), cdr: v927}); 
var l343 = f122("STRING-UPCASE");
v927 = ({car: f152(l343, (function (v1160,v1161,v1162){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1163){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1163, ";", v796), f184("if (typeof ", "x", " != '", "string", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v796)), f184("return ", (function(){
            return "x.toUpperCase()";
        })(), ";", v796)), "})()");
    })(f221(v1162, v1160, v1161));
})), cdr: v927}); 
var l344 = f122("STRING-LENGTH");
v927 = ({car: f152(l344, (function (v1164,v1165,v1166){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1167){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1167, ";", v796), f184("if (typeof ", "x", " != '", "string", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v796)), f184("return ", (function(){
            return "x.length";
        })(), ";", v796)), "})()");
    })(f221(v1166, v1164, v1165));
})), cdr: v927}); 
var l345 = f122("SLICE");
v927 = ({car: f152(l345, (function (v1168,v1169,v1170,v1171,v1172){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    switch(arguments.length){
    case 4:
    v1172=v634;
    default: break;
    }
    return f184("(function(){", v796, f187("var str = ", f221(v1170, v1168, v1169), ";", v796, "var a = ", f221(v1171, v1168, v1169), ";", v796, "var b;", v796, (v1172 !== v634 ? f184("b = ", f221(v1172, v1168, v1169), ";", v796) : ""), "return str.slice(a,b);", v796), "})()");
})), cdr: v927}); 
var l346 = f122("CHAR");
v927 = ({car: f152(l346, (function (v1173,v1174,v1175,v1176){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1177,v1178){
        return f184("(function(){", v796, f187(f184("var ", "string", " = ", v1177, ";", v796), f184("var ", "index", " = ", v1178, ";", v796), f184("if (typeof ", "string", " != '", "string", "')", v796, f187("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v796)), f184("if (typeof ", "index", " != '", "number", "')", v796, f187("throw 'The value ' + ", "index", " + ' is not a type ", "number", ".';", v796)), f184("return ", (function(){
            return "string.charCodeAt(index)";
        })(), ";", v796)), "})()");
    })(f221(v1175, v1173, v1174),f221(v1176, v1173, v1174));
})), cdr: v927}); 
var l347 = f122("CONCAT-TWO");
v927 = ({car: f152(l347, (function (v1179,v1180,v1181,v1182){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1183,v1184){
        return f184("(function(){", v796, f187(f184("var ", "string1", " = ", v1183, ";", v796), f184("var ", "string2", " = ", v1184, ";", v796), f184("if (typeof ", "string1", " != '", "string", "')", v796, f187("throw 'The value ' + ", "string1", " + ' is not a type ", "string", ".';", v796)), f184("if (typeof ", "string2", " != '", "string", "')", v796, f187("throw 'The value ' + ", "string2", " + ' is not a type ", "string", ".';", v796)), f184("return ", (function(){
            return "string1.concat(string2)";
        })(), ";", v796)), "})()");
    })(f221(v1181, v1179, v1180),f221(v1182, v1179, v1180));
})), cdr: v927}); 
var l348 = f122("FUNCALL");
v927 = ({car: f152(l348, (function (v1186,v1187,v1188){
    if (arguments.length < 3) throw 'too few arguments';
    var v1185= v634;
    for (var i = arguments.length-1; i>=3; i--)
        v1185 = {car: arguments[i], cdr: v1185};
    return f184("(", f221(v1188, v1186, v1187), ")(", f185(f164((function (v1189){
        if (arguments.length < 1) throw 'too few arguments';
        if (arguments.length > 1) throw 'too many arguments';
        return f221(v1189, v1186, v1187);
    }), v1185), ", "), ")");
})), cdr: v927}); 
var l349 = f122("APPLY");
v927 = ({car: f152(l349, (function (v1191,v1192,v1193){
    if (arguments.length < 3) throw 'too few arguments';
    var v1190= v634;
    for (var i = arguments.length-1; i>=3; i--)
        v1190 = {car: arguments[i], cdr: v1190};
    return (f120(v1190) !== v634 ? f184("(", f221(v1193, v1191, v1192), ")()") : (function(v1194,v1195){
        return f184("(function(){", v796, f187("var f = ", f221(v1193, v1191, v1192), ";", v796, "var args = [", f185(f164((function (v1196){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return f221(v1196, v1191, v1192);
        }), v1194), ", "), "];", v796, "var tail = (", f221(v1195, v1191, v1192), ");", v796, f187("while (tail != ", f221(v634, v1191, v1192), "){", v796, "    args.push(tail.car);", v796, "    tail = tail.cdr;", v796, "}", v796, "return f.apply(this, args);", v796), "})()"));
    })(f173(v1190),(function(){
        var tmp = f172(v1190);
        return tmp === v634? v634: tmp.car;
    })()));
})), cdr: v927}); 
var l350 = f122("JS-EVAL");
v927 = ({car: f152(l350, (function (v1197,v1198,v1199){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1200){
        return f184("(function(){", v796, f187(f184("var ", "string", " = ", v1200, ";", v796), f184("if (typeof ", "string", " != '", "string", "')", v796, f187("throw 'The value ' + ", "string", " + ' is not a type ", "string", ".';", v796)), f184("return ", (function(){
            return "eval.apply(window, [string])";
        })(), ";", v796)), "})()");
    })(f221(v1199, v1197, v1198));
})), cdr: v927}); 
var l351 = f122("ERROR");
v927 = ({car: f152(l351, (function (v1201,v1202,v1203){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1204){
        return f184("(function (){ throw ", v1204, ";", "return 0;})()");
    })(f221(v1203, v1201, v1202));
})), cdr: v927}); 
var l352 = f122("NEW");
v927 = ({car: f152(l352, (function (v1205,v1206){
    if (arguments.length < 2) throw 'too few arguments';
    if (arguments.length > 2) throw 'too many arguments';
    return (function(){
        return "{}";
    })();
})), cdr: v927}); 
var l353 = f122("GET");
v927 = ({car: f152(l353, (function (v1207,v1208,v1209,v1210){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1211,v1212){
        return f184("(function(){", v796, f187("var tmp = ", "(", v1211, ")[", v1212, "];", v796, "return tmp == undefined? ", f221(v634, v634, v634), ": tmp ;", v796), "})()");
    })(f221(v1209, v1207, v1208),f221(v1210, v1207, v1208));
})), cdr: v927}); 
var l354 = f122("SET");
v927 = ({car: f152(l354, (function (v1213,v1214,v1215,v1216,v1217){
    if (arguments.length < 5) throw 'too few arguments';
    if (arguments.length > 5) throw 'too many arguments';
    return (function(v1218,v1219,v1220){
        return f184("((", v1218, ")[", v1219, "] = ", v1220, ")");
    })(f221(v1215, v1213, v1214),f221(v1216, v1213, v1214),f221(v1217, v1213, v1214));
})), cdr: v927}); 
var l355 = f122("IN");
v927 = ({car: f152(l355, (function (v1221,v1222,v1223,v1224){
    if (arguments.length < 4) throw 'too few arguments';
    if (arguments.length > 4) throw 'too many arguments';
    return (function(v1225,v1226){
        return f232(f184("((", v1225, ") in (", v1226, "))"));
    })(f221(v1223, v1221, v1222),f221(v1224, v1221, v1222));
})), cdr: v927}); 
var l356 = f122("FUNCTIONP");
v927 = ({car: f152(l356, (function (v1227,v1228,v1229){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1230){
        return f232(f184("(typeof ", v1230, " == 'function')"));
    })(f221(v1229, v1227, v1228));
})), cdr: v927}); 
var l357 = f122("WRITE-STRING");
v927 = ({car: f152(l357, (function (v1231,v1232,v1233){
    if (arguments.length < 3) throw 'too few arguments';
    if (arguments.length > 3) throw 'too many arguments';
    return (function(v1234){
        return f184("(function(){", v796, f187(f184("var ", "x", " = ", v1234, ";", v796), f184("if (typeof ", "x", " != '", "string", "')", v796, f187("throw 'The value ' + ", "x", " + ' is not a type ", "string", ".';", v796)), f184("return ", (function(){
            return "lisp.write(x)";
        })(), ";", v796)), "})()");
    })(f221(v1233, v1231, v1232));
})), cdr: v927}); 
var l359 = f122("MACROP");
var l358 = f122("MACRO");
var f234;
(function(){
    (function(){
        return f234 = (function(v1235){
            ((v1235)["fname"] = "MACROP");
            return v1235;
        })((function (v1236){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            return (((function(){
                var tmp = v1236;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v635: v634) !== v634 ? ((f207(f215(v1236, v873)) === l358)?v635: v634) : v634);
        }));
    })();
    return l359;
})(); 
var l361 = f122("LS-MACROEXPAND-1");
var l360 = f122("MACRO");
var f235;
(function(){
    (function(){
        return f235 = (function(v1237){
            ((v1237)["fname"] = "LS-MACROEXPAND-1");
            return v1237;
        })((function (v1238,v1239,v1240){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (f234((function(){
                var tmp = v1238;
                return tmp === v634? v634: tmp.car;
            })()) !== v634 ? (function(v1241){
                return (((f207(v1241) === l360)?v635: v634) !== v634 ? (function(){
                    var f = f229(f208(v1241));
                    var args = [];
                    var tail = ((function(){
                        var tmp = v1238;
                        return tmp === v634? v634: tmp.cdr;
                    })());
                        while (tail != v634){
                            args.push(tail.car);
                            tail = tail.cdr;
                        }
                        return f.apply(this, args);
                    })() : v1238);
            })(f215((function(){
                var tmp = v1238;
                return tmp === v634? v634: tmp.car;
            })(), v872)) : v1238);
        }));
    })();
    return l361;
})(); 
var l363 = f122("COMPILE-FUNCALL");
var l362 = f122("LAMBDA");
var f236;
(function(){
    (function(){
        return f236 = (function(v1242){
            ((v1242)["fname"] = "COMPILE-FUNCALL");
            return v1242;
        })((function (v1243,v1244,v1245,v1246){
            if (arguments.length < 4) throw 'too few arguments';
            if (arguments.length > 4) throw 'too many arguments';
            return (((function(){
                var tmp = v1243;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v635: v634) !== v634 ? (function(){
                return f184(f216(v1243, v1246), "(", f185(f164((function (v1247){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f221(v1247, v1245, v1246);
                }), v1244), ", "), ")");
            })() : ((f155(v1243) !== v634 ? (((function(){
                var tmp = v1243;
                return tmp === v634? v634: tmp.car;
            })() === l362)?v635: v634) : v634) !== v634 ? (function(){
                return f184("(", f221(v1243, v1245, v1246), ")(", f185(f164((function (v1248){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f221(v1248, v1245, v1246);
                }), v1244), ", "), ")");
            })() : (function(){
                return (function (){ throw f184("Invalid function designator ", (v1243).name);return 0;})();
            })()));
        }));
    })();
    return l363;
})(); 
var l364 = f122("LS-COMPILE");
var f221;
(function(){
    (function(){
        return f221 = (function(v1249){
            ((v1249)["fname"] = "LS-COMPILE");
            return v1249;
        })((function (v1250,v1251,v1252){
            if (arguments.length < 3) throw 'too few arguments';
            if (arguments.length > 3) throw 'too many arguments';
            return (((function(){
                var tmp = v1250;
                return (typeof tmp == 'object' && 'name' in tmp);
            })()?v635: v634) !== v634 ? (function(){
                return f213(v1250, v1251);
            })() : (f168(v1250) !== v634 ? (function(){
                return f125(v1250);
            })() : (((typeof(v1250) == "string")?v635: v634) !== v634 ? (function(){
                return f184("\"", f189(v1250), "\"");
            })() : (f155(v1250) !== v634 ? (function(){
                return (f182((function(){
                    var tmp = v1250;
                    return tmp === v634? v634: tmp.car;
                })(), v927) !== v634 ? (function(v1253){
                    return (function(){
                        var f = v1253;
                        var args = [v1251, v1252];
                        var tail = ((function(){
                            var tmp = v1250;
                            return tmp === v634? v634: tmp.cdr;
                        })());
                            while (tail != v634){
                                args.push(tail.car);
                                tail = tail.cdr;
                            }
                            return f.apply(this, args);
                        })();
                })(f149(f182((function(){
                    var tmp = v1250;
                    return tmp === v634? v634: tmp.car;
                })(), v927))) : (f234((function(){
                    var tmp = v1250;
                    return tmp === v634? v634: tmp.car;
                })()) !== v634 ? f221(f235(v1250, v1251, v1252), v1251, v1252) : f236((function(){
                    var tmp = v1250;
                    return tmp === v634? v634: tmp.car;
                })(), (function(){
                    var tmp = v1250;
                    return tmp === v634? v634: tmp.cdr;
                })(), v1251, v1252)));
            })() : v634))));
        }));
    })();
    return l364;
})(); 
var l365 = f122("LS-COMPILE-TOPLEVEL");
var f237;
(function(){
    (function(){
        return f237 = (function(v1254){
            ((v1254)["fname"] = "LS-COMPILE-TOPLEVEL");
            return v1254;
        })((function (v1255){
            if (arguments.length < 1) throw 'too few arguments';
            if (arguments.length > 1) throw 'too many arguments';
            v917 = v634;
            return (function(v1256){
                return (function(v1257){
                    v917 = v634;
                    return v1257;
                })(f184(f185(f164((function (v1258){
                    if (arguments.length < 1) throw 'too few arguments';
                    if (arguments.length > 1) throw 'too many arguments';
                    return f184(v1258, ";", v796);
                }), v917)), v1256));
            })(f221(v1255, v634, v634));
        }));
    })();
    return l365;
})(); 
var l376 = f122("LS-COMPILE-TOPLEVEL");
var l375 = f122("EVAL");
var l374 = f122("PRINT-TO-STRING");
var l373 = f122("LS-READ-FROM-STRING");
var l372 = 1303;
var l371 = 370;
var l370 = 237;
var l369 = 1264;
var l368 = {car: {car: f122("*LITERAL-COUNTER*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v986", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*LAMBDA-LIST-KEYWORDS*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v940", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*COMPILATIONS*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v927", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*TOPLEVEL-COMPILATIONS*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v917", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*FUNCTION-COUNTER*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v906", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*VARIABLE-COUNTER*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v889", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*FENV*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v873", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*ENV*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v872", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v871", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*EOF*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v864", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*NEWLINE*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v796", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*GENSYM-COUNTER*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v644", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("T"), cdr: {car: f122("VARIABLE"), cdr: {car: "v635", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("NIL"), cdr: {car: f122("VARIABLE"), cdr: {car: "v634", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*PACKAGE*"), cdr: {car: f122("VARIABLE"), cdr: {car: "v633", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}}}}}}}}}}}}};
var l367 = {car: {car: f122("WITH-COMPILATION-UNIT"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PROG1"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("SETQ"), cdr: {car: f122("*COMPILATION-UNIT-CHECKS*"), cdr: {car: f122("NIL"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("SETQ"), cdr: {car: f122("*ENV*"), cdr: {car: {car: f122("REMOVE-IF-NOT"), cdr: {car: {car: f122("FUNCTION"), cdr: {car: f122("BINDING-DECLARED"), cdr: f122("NIL")}}, cdr: {car: f122("*ENV*"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("SETQ"), cdr: {car: f122("*FENV*"), cdr: {car: {car: f122("REMOVE-IF-NOT"), cdr: {car: {car: f122("FUNCTION"), cdr: {car: f122("BINDING-DECLARED"), cdr: f122("NIL")}}, cdr: {car: f122("*FENV*"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}}, cdr: {car: {car: f122("DOLIST"), cdr: {car: {car: f122("CHECK"), cdr: {car: f122("*COMPILATION-UNIT-CHECKS*"), cdr: f122("NIL")}}, cdr: {car: {car: f122("FUNCALL"), cdr: {car: f122("CHECK"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LS-COMPILE-TOPLEVEL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f237", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("COMPILE-FUNCALL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f236", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LS-MACROEXPAND-1"), cdr: {car: f122("FUNCTION"), cdr: {car: "f235", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MACROP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f234", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("NUM-OP-NUM"), cdr: {car: f122("FUNCTION"), cdr: {car: "f233", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("TYPE-CHECK"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("DECLS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("CONCAT"), cdr: {car: "(function(){", cdr: {car: f122("*NEWLINE*"), cdr: {car: {car: f122("INDENT"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("MAPCAR"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("DECL"), cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("CONCAT"), cdr: {car: "var ", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("FIRST"), cdr: {car: f122("DECL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: " = ", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("THIRD"), cdr: {car: f122("DECL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: ";", cdr: {car: f122("*NEWLINE*"), cdr: f122("NIL")}}}}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("DECLS"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("MAPCAR"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("DECL"), cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("CONCAT"), cdr: {car: "if (typeof ", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("FIRST"), cdr: {car: f122("DECL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: " != '", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("SECOND"), cdr: {car: f122("DECL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: "')", cdr: {car: f122("*NEWLINE*"), cdr: {car: {car: f122("INDENT"), cdr: {car: "throw 'The value ' + ", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("FIRST"), cdr: {car: f122("DECL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: " + ' is not a type ", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("SECOND"), cdr: {car: f122("DECL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: ".';", cdr: {car: f122("*NEWLINE*"), cdr: f122("NIL")}}}}}}}, cdr: f122("NIL")}}}}}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("DECLS"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("CONCAT"), cdr: {car: "return ", cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: ";", cdr: {car: f122("*NEWLINE*"), cdr: f122("NIL")}}}}}, cdr: f122("NIL")}}}}, cdr: {car: "})()", cdr: f122("NIL")}}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("COMPILE-BOOL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f232", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFINE-BUILTIN"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("DEFINE-COMPILATION"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("LET"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("MAPCAR"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("ARG"), cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARG"), cdr: f122("NIL")}}, cdr: {car: {car: f122("LS-COMPILE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARG"), cdr: f122("NIL")}}, cdr: {car: f122("ENV"), cdr: {car: f122("FENV"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("ARGS"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("FORM"), cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE-EXPAND-1"), cdr: {car: f122("FORM"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE-EXPAND"), cdr: {car: f122("FUNCTION"), cdr: {car: "f231", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE-EXPAND-1"), cdr: {car: f122("FUNCTION"), cdr: {car: "f230", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFINE-TRANSFORMATION"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("FORM"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("DEFINE-COMPILATION"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("LS-COMPILE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("FORM"), cdr: f122("NIL")}}, cdr: {car: f122("ENV"), cdr: {car: f122("FENV"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("EVAL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f229", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LITERAL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f228", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LITERAL->JS"), cdr: {car: f122("FUNCTION"), cdr: {car: "f227", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LAMBDA-LIST-REST-ARGUMENT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f226", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LAMBDA-LIST-OPTIONAL-ARGUMENTS"), cdr: {car: f122("FUNCTION"), cdr: {car: "f225", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LAMBDA-LIST-OPTIONAL-ARGUMENTS-WITH-DEFAULT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f224", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LAMBDA-LIST-REQUIRED-ARGUMENTS"), cdr: {car: f122("FUNCTION"), cdr: {car: "f223", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LIST-UNTIL-KEYWORD"), cdr: {car: f122("FUNCTION"), cdr: {car: "f222", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFINE-COMPILATION"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PUSH"), cdr: {car: {car: f122("LIST"), cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("ENV"), cdr: {car: f122("FENV"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: f122("*COMPILATIONS*"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LS-COMPILE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f221", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LS-COMPILE-BLOCK"), cdr: {car: f122("FUNCTION"), cdr: {car: "f220", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%COMPILE-DEFMACRO"), cdr: {car: f122("FUNCTION"), cdr: {car: "f219", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%COMPILE-DEFUN"), cdr: {car: f122("FUNCTION"), cdr: {car: "f218", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%COMPILE-DEFVAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f217", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LOOKUP-FUNCTION-TRANSLATION"), cdr: {car: f122("FUNCTION"), cdr: {car: "f216", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LOOKUP-FUNCTION"), cdr: {car: f122("FUNCTION"), cdr: {car: "f215", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("EXTEND-LOCAL-ENV"), cdr: {car: f122("FUNCTION"), cdr: {car: "f214", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LOOKUP-VARIABLE-TRANSLATION"), cdr: {car: f122("FUNCTION"), cdr: {car: "f213", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LOOKUP-VARIABLE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f212", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("GVARNAME"), cdr: {car: f122("FUNCTION"), cdr: {car: "f211", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MARK-BINDING-AS-DECLARED"), cdr: {car: f122("FUNCTION"), cdr: {car: "f210", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BINDING-DECLARED"), cdr: {car: f122("FUNCTION"), cdr: {car: "f209", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BINDING-TRANSLATION"), cdr: {car: f122("FUNCTION"), cdr: {car: "f208", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BINDING-TYPE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f207", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BINDING-NAME"), cdr: {car: f122("FUNCTION"), cdr: {car: "f206", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MAKE-BINDING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f205", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LS-READ-FROM-STRING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f204", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("READ-SHARP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f203", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("READ-STRING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f202", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LS-READ"), cdr: {car: f122("FUNCTION"), cdr: {car: "f201", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%READ-LIST"), cdr: {car: f122("FUNCTION"), cdr: {car: "f200", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("SKIP-WHITESPACES-AND-COMMENTS"), cdr: {car: f122("FUNCTION"), cdr: {car: "f199", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("READ-UNTIL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f198", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("TERMINALP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f197", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("SKIP-WHITESPACES"), cdr: {car: f122("FUNCTION"), cdr: {car: "f196", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("WHITESPACEP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f195", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%READ-CHAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f194", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%PEEK-CHAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f193", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MAKE-STRING-STREAM"), cdr: {car: f122("FUNCTION"), cdr: {car: "f192", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("PRINT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f191", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("WRITE-LINE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f190", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("ESCAPE-STRING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f189", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("PRINT-TO-STRING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f188", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("INDENT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f187", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("JOIN-TRAILING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f186", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("JOIN"), cdr: {car: f122("FUNCTION"), cdr: {car: "f185", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CONCAT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f184", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("STRING="), cdr: {car: f122("FUNCTION"), cdr: {car: "f183", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("ASSOC"), cdr: {car: f122("FUNCTION"), cdr: {car: "f182", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("EVERY"), cdr: {car: f122("FUNCTION"), cdr: {car: "f181", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("PARSE-INTEGER"), cdr: {car: f122("FUNCTION"), cdr: {car: "f180", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("SUBSEQ"), cdr: {car: f122("FUNCTION"), cdr: {car: "f179", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DIGIT-CHAR-P"), cdr: {car: f122("FUNCTION"), cdr: {car: "f178", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("REMOVE-IF-NOT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f177", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("REMOVE-IF"), cdr: {car: f122("FUNCTION"), cdr: {car: "f176", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("REMOVE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f175", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MEMBER"), cdr: {car: f122("FUNCTION"), cdr: {car: "f174", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BUTLAST"), cdr: {car: f122("FUNCTION"), cdr: {car: "f173", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LAST"), cdr: {car: f122("FUNCTION"), cdr: {car: "f172", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("NTH"), cdr: {car: f122("FUNCTION"), cdr: {car: "f171", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MINUSP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f170", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("PLUSP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f169", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("INTEGERP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f168", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CHAR="), cdr: {car: f122("FUNCTION"), cdr: {car: "f167", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CHAR-CODE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f166", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CODE-CHAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f165", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("MAPCAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f164", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CONCAT-TWO"), cdr: {car: f122("FUNCTION"), cdr: {car: "f163", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LENGTH"), cdr: {car: f122("FUNCTION"), cdr: {car: "f162", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LIST-LENGTH"), cdr: {car: f122("FUNCTION"), cdr: {car: "f161", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("REVERSE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f160", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("REVERSE-AUX"), cdr: {car: f122("FUNCTION"), cdr: {car: "f159", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("APPEND"), cdr: {car: f122("FUNCTION"), cdr: {car: "f158", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("APPEND-TWO"), cdr: {car: f122("FUNCTION"), cdr: {car: "f157", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFVAR"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("&OPTIONAL"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("%DEFVAR"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFUN"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("%DEFUN"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("!REDUCE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f156", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LISTP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f155", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("ENSURE-LIST"), cdr: {car: f122("FUNCTION"), cdr: {car: "f154", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("PROG1"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("FORM"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: f122("VALUE"), cdr: {car: {car: f122("GENSYM"), cdr: f122("NIL")}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("FORM"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("OR"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("&REST"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("COND"), cdr: {car: {car: {car: f122("NULL"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: {car: f122("NIL"), cdr: f122("NIL")}}, cdr: {car: {car: {car: f122("NULL"), cdr: {car: {car: f122("CDR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("CAR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("T"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: f122("G"), cdr: {car: {car: f122("GENSYM"), cdr: f122("NIL")}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("CAR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G"), cdr: f122("NIL")}}, cdr: {car: {car: f122("OR"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("CDR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("AND"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("&REST"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("COND"), cdr: {car: {car: {car: f122("NULL"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: {car: f122("T"), cdr: f122("NIL")}}, cdr: {car: {car: {car: f122("NULL"), cdr: {car: {car: f122("CDR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("CAR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("T"), cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("CAR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("AND"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("CDR"), cdr: {car: f122("FORMS"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: f122("NIL"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("ECASE"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("FORM"), cdr: {car: f122("&REST"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("CASE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("FORM"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("APPEND"), cdr: {car: f122("CLAUSULES"), cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: {car: f122("T"), cdr: {car: {car: f122("ERROR"), cdr: {car: "ECASE expression failed.", cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CASE"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("FORM"), cdr: {car: f122("&REST"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: f122("!FORM"), cdr: {car: {car: f122("GENSYM"), cdr: f122("NIL")}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("!FORM"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("FORM"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("COND"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("MAPCAR"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("CLAUSULE"), cdr: f122("NIL")}, cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("EQ"), cdr: {car: {car: f122("CAR"), cdr: {car: f122("CLAUSULE"), cdr: f122("NIL")}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}, cdr: {car: f122("CLAUSULE"), cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: {car: f122("EQL"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("!FORM"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("CAR"), cdr: {car: f122("CLAUSULE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("CDR"), cdr: {car: f122("CLAUSULE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("COND"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("&REST"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("NULL"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: {car: f122("NIL"), cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("EQ"), cdr: {car: {car: f122("CAAR"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("CDAR"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("CAAR"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("CDAR"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("COND"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: {car: f122("CDR"), cdr: {car: f122("CLAUSULES"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DOTIMES"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("ITER"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: f122("G!TO"), cdr: {car: {car: f122("GENSYM"), cdr: f122("NIL")}, cdr: f122("NIL")}}, cdr: {car: {car: f122("VAR"), cdr: {car: {car: f122("FIRST"), cdr: {car: f122("ITER"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("TO"), cdr: {car: {car: f122("SECOND"), cdr: {car: f122("ITER"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("RESULT"), cdr: {car: {car: f122("THIRD"), cdr: {car: f122("ITER"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VAR"), cdr: f122("NIL")}}, cdr: {car: 0, cdr: f122("NIL")}}, cdr: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!TO"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("TO"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("WHILE"), cdr: {car: {car: f122("<"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VAR"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!TO"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: {car: {car: f122("INCF"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VAR"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("RESULT"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DOLIST"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("ITER"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: f122("VAR"), cdr: {car: {car: f122("FIRST"), cdr: {car: f122("ITER"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("G!LIST"), cdr: {car: {car: f122("GENSYM"), cdr: f122("NIL")}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!LIST"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("SECOND"), cdr: {car: f122("ITER"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VAR"), cdr: f122("NIL")}}, cdr: {car: f122("NIL"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("WHILE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!LIST"), cdr: f122("NIL")}}, cdr: {car: {car: f122("SETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VAR"), cdr: f122("NIL")}}, cdr: {car: {car: f122("CAR"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!LIST"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: {car: {car: f122("SETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!LIST"), cdr: f122("NIL")}}, cdr: {car: {car: f122("CDR"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("G!LIST"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("UNLESS"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("CONDITION"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("CONDITION"), cdr: f122("NIL")}}, cdr: {car: f122("NIL"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("WHEN"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("CONDITION"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("CONDITION"), cdr: f122("NIL")}}, cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: f122("NIL"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("PUSH"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("X"), cdr: {car: f122("PLACE"), cdr: f122("NIL")}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("SETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("PLACE"), cdr: f122("NIL")}}, cdr: {car: {car: f122("CONS"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("PLACE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DECF"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("X"), cdr: {car: f122("&OPTIONAL"), cdr: {car: {car: f122("DELTA"), cdr: {car: 1, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("SETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: {car: f122("-"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("DELTA"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("INCF"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("X"), cdr: {car: f122("&OPTIONAL"), cdr: {car: {car: f122("DELTA"), cdr: {car: 1, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("SETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: {car: f122("+"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("DELTA"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("ATOM"), cdr: {car: f122("FUNCTION"), cdr: {car: "f153", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LIST"), cdr: {car: f122("FUNCTION"), cdr: {car: "f152", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("FOURTH"), cdr: {car: f122("FUNCTION"), cdr: {car: "f151", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("THIRD"), cdr: {car: f122("FUNCTION"), cdr: {car: "f150", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("SECOND"), cdr: {car: f122("FUNCTION"), cdr: {car: "f149", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("FIRST"), cdr: {car: f122("FUNCTION"), cdr: {car: "f148", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CADDDR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f147", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CDDDR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f146", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CADDR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f145", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CDDR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f144", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CDAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f143", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CADR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f142", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CAAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f141", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CDR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f140", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CAR"), cdr: {car: f122("FUNCTION"), cdr: {car: "f139", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CONSP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f138", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("CONS"), cdr: {car: f122("FUNCTION"), cdr: {car: "f137", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("NOT"), cdr: {car: f122("FUNCTION"), cdr: {car: "f136", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("EQL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f135", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("TRUNCATE"), cdr: {car: f122("FUNCTION"), cdr: {car: "f134", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("ZEROP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f133", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("1-"), cdr: {car: f122("FUNCTION"), cdr: {car: "f132", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("1+"), cdr: {car: f122("FUNCTION"), cdr: {car: "f131", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("/"), cdr: {car: f122("FUNCTION"), cdr: {car: "f130", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("*"), cdr: {car: f122("FUNCTION"), cdr: {car: "f129", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("-"), cdr: {car: f122("FUNCTION"), cdr: {car: "f128", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("+"), cdr: {car: f122("FUNCTION"), cdr: {car: "f127", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("="), cdr: {car: f122("FUNCTION"), cdr: {car: "f126", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("INTEGER-TO-STRING"), cdr: {car: f122("FUNCTION"), cdr: {car: "f125", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("GENSYM"), cdr: {car: f122("FUNCTION"), cdr: {car: "f124", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("FIND-SYMBOL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f123", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("INTERN"), cdr: {car: f122("FUNCTION"), cdr: {car: "f122", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("INTERNP"), cdr: {car: f122("FUNCTION"), cdr: {car: "f121", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("NULL"), cdr: {car: f122("FUNCTION"), cdr: {car: "f120", cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFUN"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("%DEFUN"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%DEFUN"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("EVAL-WHEN-COMPILE"), cdr: {car: {car: f122("%COMPILE-DEFUN"), cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("FSETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("NAMED-LAMBDA"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("SYMBOL-NAME"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("NAMED-LAMBDA"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: f122("X"), cdr: {car: {car: f122("GENSYM"), cdr: {car: "FN", cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("LET"), cdr: {car: {car: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("ARGS"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}, cdr: {car: {car: f122("SET"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: {car: "fname", cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("X"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFVAR"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("&OPTIONAL"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("%DEFVAR"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("%DEFVAR"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("PROGN"), cdr: {car: {car: f122("EVAL-WHEN-COMPILE"), cdr: {car: {car: f122("%COMPILE-DEFVAR"), cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("SETQ"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("VALUE"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("DEFMACRO"), cdr: {car: f122("MACRO"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("NAME"), cdr: {car: f122("ARGS"), cdr: {car: f122("&REST"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}}}, cdr: {car: {car: f122("BACKQUOTE"), cdr: {car: {car: f122("EVAL-WHEN-COMPILE"), cdr: {car: {car: f122("%COMPILE-DEFMACRO"), cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: f122("NAME"), cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("QUOTE"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("UNQUOTE"), cdr: {car: {car: f122("MAPCAR"), cdr: {car: {car: f122("LAMBDA"), cdr: {car: {car: f122("X"), cdr: f122("NIL")}, cdr: {car: {car: f122("IF"), cdr: {car: {car: f122("EQ"), cdr: {car: f122("X"), cdr: {car: {car: f122("QUOTE"), cdr: {car: f122("&BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: {car: f122("QUOTE"), cdr: {car: f122("&REST"), cdr: f122("NIL")}}, cdr: {car: f122("X"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}, cdr: {car: f122("ARGS"), cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: {car: {car: f122("UNQUOTE-SPLICING"), cdr: {car: f122("BODY"), cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}, cdr: f122("NIL")}}}, cdr: {car: f122("T"), cdr: f122("NIL")}}}}, cdr: f122("NIL")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
var l366 = f122("EVAL");
var f229;
v873 = l367;
v872 = l368;
v889 = l369;
v906 = l370;
v986 = l371;
v644 = l372;
(function(){
    (function(){
        (function(){
            return f229 = (function(v1259){
                ((v1259)["fname"] = "EVAL");
                return v1259;
            })((function (v1260){
                if (arguments.length < 1) throw 'too few arguments';
                if (arguments.length > 1) throw 'too many arguments';
                return (function(v1261){
                    return (function(){
                        var string = v1261;
                        if (typeof string != 'string')
                            throw 'The value ' + string + ' is not a type string.';
                        return eval.apply(window, [string]);
                    })();
                })((function(v1262){
                    (function(v1263,v1264){
                        return (function(){
                            while(v1263 !== v634){
                                v1264 = (function(){
                                    var tmp = v1263;
                                    return tmp === v634? v634: tmp.car;
                                })();
                                (v1264)();
                                v1263 = (function(){
                                    var tmp = v1263;
                                    return tmp === v634? v634: tmp.cdr;
                                })();
                        }})();
                    })(v871,v634);
                    return v1262;
                })((function(){
                    v871 = v634;
                    v872 = f177(f209, v872);
                    v873 = f177(f209, v873);
                    return f237(v1260);
                })()));
            }));
        })();
        return l366;
    })();
    return (function(){
        var string = f184("var lisp = {};", "lisp.read = ", f216(l373, v634), ";", v796, "lisp.print = ", f216(l374, v634), ";", v796, "lisp.eval = ", f216(l375, v634), ";", v796, "lisp.compile = ", f216(l376, v634), ";", v796, "lisp.evalString = function(str){", v796, "   return lisp.eval(lisp.read(str));", v796, "}", v796, "lisp.compileString = function(str){", v796, "   return lisp.compile(lisp.read(str));", v796, "}", v796);
        if (typeof string != 'string')
            throw 'The value ' + string + ' is not a type string.';
        return eval.apply(window, [string]);
    })();
})(); 
