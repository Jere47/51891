// Generated from c:/Users/jerea/ssl-antlr-calculator/Usuarios.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import UsuariosListener from './UsuariosListener.js';
import UsuariosVisitor from './UsuariosVisitor.js';

const serializedATN = [4,1,17,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
3,3,43,8,3,1,4,4,4,46,8,4,11,4,12,4,47,1,5,1,5,5,5,52,8,5,10,5,12,5,55,9,
5,1,5,1,5,1,6,1,6,1,7,1,7,5,7,63,8,7,10,7,12,7,66,9,7,1,8,1,8,1,8,0,0,9,
0,2,4,6,8,10,12,14,16,0,3,1,0,3,4,1,0,1,2,4,0,1,2,8,9,11,11,13,16,67,0,19,
1,0,0,0,2,23,1,0,0,0,4,34,1,0,0,0,6,42,1,0,0,0,8,45,1,0,0,0,10,49,1,0,0,
0,12,58,1,0,0,0,14,60,1,0,0,0,16,67,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,
20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,24,5,5,0,0,24,
25,3,14,7,0,25,29,5,6,0,0,26,28,3,4,2,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,7,0,0,33,3,1,0,
0,0,34,35,3,14,7,0,35,36,5,10,0,0,36,37,3,6,3,0,37,38,5,9,0,0,38,5,1,0,0,
0,39,43,3,8,4,0,40,43,3,10,5,0,41,43,3,12,6,0,42,39,1,0,0,0,42,40,1,0,0,
0,42,41,1,0,0,0,43,7,1,0,0,0,44,46,5,2,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,
45,1,0,0,0,47,48,1,0,0,0,48,9,1,0,0,0,49,53,5,12,0,0,50,52,3,16,8,0,51,50,
1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,
0,0,0,56,57,5,12,0,0,57,11,1,0,0,0,58,59,7,0,0,0,59,13,1,0,0,0,60,64,5,1,
0,0,61,63,7,1,0,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,
0,65,15,1,0,0,0,66,64,1,0,0,0,67,68,7,2,0,0,68,17,1,0,0,0,6,21,29,42,47,
53,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class UsuariosParser extends antlr4.Parser {

    static grammarFileName = "Usuarios.g4";
    static literalNames = [ null, null, null, "'verdadero'", "'falso'", 
                            "'usuario'", "'{'", "'}'", "'.'", "';'", "'='", 
                            "','", "'\"'", "'!'", "'?'", "':'", "'''" ];
    static symbolicNames = [ null, "LETRA", "DIGITO", "VERDADERO", "FALSO", 
                             "USER", "LBRACE", "RBRACE", "PUNTO", "PUNTO_Y_COMA", 
                             "EQ", "COMA", "COMILLA", "EXCLAMATION", "QUESTION", 
                             "COLON", "S_QUOTE", "WS" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor", "numero", 
                         "cadena", "booleano", "identificador", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = UsuariosParser.ruleNames;
        this.literalNames = UsuariosParser.literalNames;
        this.symbolicNames = UsuariosParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, UsuariosParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.usuario();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, UsuariosParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(UsuariosParser.USER);
	        this.state = 24;
	        this.identificador();
	        this.state = 25;
	        this.match(UsuariosParser.LBRACE);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 26;
	            this.atributo();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(UsuariosParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, UsuariosParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.identificador();
	        this.state = 35;
	        this.match(UsuariosParser.EQ);
	        this.state = 36;
	        this.valor();
	        this.state = 37;
	        this.match(UsuariosParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, UsuariosParser.RULE_valor);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.numero();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.cadena();
	            break;
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, UsuariosParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this.match(UsuariosParser.DIGITO);
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, UsuariosParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(UsuariosParser.COMILLA);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 125702) !== 0)) {
	            this.state = 50;
	            this.caracter();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(UsuariosParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, UsuariosParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, UsuariosParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(UsuariosParser.LETRA);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, UsuariosParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 125702) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

UsuariosParser.EOF = antlr4.Token.EOF;
UsuariosParser.LETRA = 1;
UsuariosParser.DIGITO = 2;
UsuariosParser.VERDADERO = 3;
UsuariosParser.FALSO = 4;
UsuariosParser.USER = 5;
UsuariosParser.LBRACE = 6;
UsuariosParser.RBRACE = 7;
UsuariosParser.PUNTO = 8;
UsuariosParser.PUNTO_Y_COMA = 9;
UsuariosParser.EQ = 10;
UsuariosParser.COMA = 11;
UsuariosParser.COMILLA = 12;
UsuariosParser.EXCLAMATION = 13;
UsuariosParser.QUESTION = 14;
UsuariosParser.COLON = 15;
UsuariosParser.S_QUOTE = 16;
UsuariosParser.WS = 17;

UsuariosParser.RULE_programa = 0;
UsuariosParser.RULE_usuario = 1;
UsuariosParser.RULE_atributo = 2;
UsuariosParser.RULE_valor = 3;
UsuariosParser.RULE_numero = 4;
UsuariosParser.RULE_cadena = 5;
UsuariosParser.RULE_booleano = 6;
UsuariosParser.RULE_identificador = 7;
UsuariosParser.RULE_caracter = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_programa;
    }

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_usuario;
    }

	USER() {
	    return this.getToken(UsuariosParser.USER, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LBRACE() {
	    return this.getToken(UsuariosParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(UsuariosParser.RBRACE, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_atributo;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	EQ() {
	    return this.getToken(UsuariosParser.EQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(UsuariosParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UsuariosParser.DIGITO);
	    } else {
	        return this.getToken(UsuariosParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UsuariosParser.COMILLA);
	    } else {
	        return this.getToken(UsuariosParser.COMILLA, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(UsuariosParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(UsuariosParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UsuariosParser.LETRA);
	    } else {
	        return this.getToken(UsuariosParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UsuariosParser.DIGITO);
	    } else {
	        return this.getToken(UsuariosParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UsuariosParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(UsuariosParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(UsuariosParser.DIGITO, 0);
	};

	PUNTO() {
	    return this.getToken(UsuariosParser.PUNTO, 0);
	};

	COMA() {
	    return this.getToken(UsuariosParser.COMA, 0);
	};

	EXCLAMATION() {
	    return this.getToken(UsuariosParser.EXCLAMATION, 0);
	};

	QUESTION() {
	    return this.getToken(UsuariosParser.QUESTION, 0);
	};

	COLON() {
	    return this.getToken(UsuariosParser.COLON, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(UsuariosParser.PUNTO_Y_COMA, 0);
	};

	S_QUOTE() {
	    return this.getToken(UsuariosParser.S_QUOTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UsuariosListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof UsuariosVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




UsuariosParser.ProgramaContext = ProgramaContext; 
UsuariosParser.UsuarioContext = UsuarioContext; 
UsuariosParser.AtributoContext = AtributoContext; 
UsuariosParser.ValorContext = ValorContext; 
UsuariosParser.NumeroContext = NumeroContext; 
UsuariosParser.CadenaContext = CadenaContext; 
UsuariosParser.BooleanoContext = BooleanoContext; 
UsuariosParser.IdentificadorContext = IdentificadorContext; 
UsuariosParser.CaracterContext = CaracterContext; 
