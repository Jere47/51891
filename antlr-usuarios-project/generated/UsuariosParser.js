// Generated from c:/Users/jerea/Vale/51891/antlr-usuarios-project/Usuarios.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import UsuariosListener from './UsuariosListener.js';
import UsuariosVisitor from './UsuariosVisitor.js';

const serializedATN = [4,1,18,47,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,1,1,1,5,1,24,8,1,10,
1,12,1,27,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,39,8,3,1,4,1,4,
1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,1,2,43,0,15,1,0,0,0,2,
19,1,0,0,0,4,30,1,0,0,0,6,38,1,0,0,0,8,40,1,0,0,0,10,42,1,0,0,0,12,44,1,
0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,
0,0,18,1,1,0,0,0,19,20,5,3,0,0,20,21,5,4,0,0,21,25,5,7,0,0,22,24,3,4,2,0,
23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,
25,1,0,0,0,28,29,5,8,0,0,29,3,1,0,0,0,30,31,5,4,0,0,31,32,5,11,0,0,32,33,
3,6,3,0,33,34,5,10,0,0,34,5,1,0,0,0,35,39,3,8,4,0,36,39,3,10,5,0,37,39,3,
12,6,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,7,1,0,0,0,40,41,5,6,
0,0,41,9,1,0,0,0,42,43,5,5,0,0,43,11,1,0,0,0,44,45,7,0,0,0,45,13,1,0,0,0,
3,17,25,38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class UsuariosParser extends antlr4.Parser {

    static grammarFileName = "Usuarios.g4";
    static literalNames = [ null, "'verdadero'", "'falso'", "'usuario'", 
                            null, null, null, "'{'", "'}'", "'.'", "';'", 
                            "'='", "','", "'\"'", "'!'", "'?'", "':'", "'''" ];
    static symbolicNames = [ null, "TRUE", "FALSE", "USER", "ID", "STRING", 
                             "NUMBER", "LBRACE", "RBRACE", "PUNTO", "SEMICOLON", 
                             "EQ", "COMA", "COMILLA", "EXCLAMATION", "QUESTION", 
                             "COLON", "S_QUOTE", "WS" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor", "numero", 
                         "cadena", "booleano" ];

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
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.usuario();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
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
	        this.state = 19;
	        this.match(UsuariosParser.USER);
	        this.state = 20;
	        this.match(UsuariosParser.ID);
	        this.state = 21;
	        this.match(UsuariosParser.LBRACE);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 22;
	            this.atributo();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
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
	        this.state = 30;
	        this.match(UsuariosParser.ID);
	        this.state = 31;
	        this.match(UsuariosParser.EQ);
	        this.state = 32;
	        this.valor();
	        this.state = 33;
	        this.match(UsuariosParser.SEMICOLON);
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.numero();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.cadena();
	            break;
	        case 1:
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(UsuariosParser.NUMBER);
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(UsuariosParser.STRING);
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
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
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
UsuariosParser.TRUE = 1;
UsuariosParser.FALSE = 2;
UsuariosParser.USER = 3;
UsuariosParser.ID = 4;
UsuariosParser.STRING = 5;
UsuariosParser.NUMBER = 6;
UsuariosParser.LBRACE = 7;
UsuariosParser.RBRACE = 8;
UsuariosParser.PUNTO = 9;
UsuariosParser.SEMICOLON = 10;
UsuariosParser.EQ = 11;
UsuariosParser.COMA = 12;
UsuariosParser.COMILLA = 13;
UsuariosParser.EXCLAMATION = 14;
UsuariosParser.QUESTION = 15;
UsuariosParser.COLON = 16;
UsuariosParser.S_QUOTE = 17;
UsuariosParser.WS = 18;

UsuariosParser.RULE_programa = 0;
UsuariosParser.RULE_usuario = 1;
UsuariosParser.RULE_atributo = 2;
UsuariosParser.RULE_valor = 3;
UsuariosParser.RULE_numero = 4;
UsuariosParser.RULE_cadena = 5;
UsuariosParser.RULE_booleano = 6;

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

	ID() {
	    return this.getToken(UsuariosParser.ID, 0);
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

	ID() {
	    return this.getToken(UsuariosParser.ID, 0);
	};

	EQ() {
	    return this.getToken(UsuariosParser.EQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMICOLON() {
	    return this.getToken(UsuariosParser.SEMICOLON, 0);
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

	NUMBER() {
	    return this.getToken(UsuariosParser.NUMBER, 0);
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

	STRING() {
	    return this.getToken(UsuariosParser.STRING, 0);
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

	TRUE() {
	    return this.getToken(UsuariosParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(UsuariosParser.FALSE, 0);
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




UsuariosParser.ProgramaContext = ProgramaContext; 
UsuariosParser.UsuarioContext = UsuarioContext; 
UsuariosParser.AtributoContext = AtributoContext; 
UsuariosParser.ValorContext = ValorContext; 
UsuariosParser.NumeroContext = NumeroContext; 
UsuariosParser.CadenaContext = CadenaContext; 
UsuariosParser.BooleanoContext = BooleanoContext; 
