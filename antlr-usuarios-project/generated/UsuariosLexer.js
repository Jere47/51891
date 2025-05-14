// Generated from c:/Users/jerea/ssl-antlr-calculator/Usuarios.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,17,92,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,4,16,87,8,16,11,16,12,16,88,1,
16,1,16,0,0,17,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
25,13,27,14,29,15,31,16,33,17,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,
13,13,32,32,92,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,
0,33,1,0,0,0,1,35,1,0,0,0,3,37,1,0,0,0,5,39,1,0,0,0,7,49,1,0,0,0,9,55,1,
0,0,0,11,63,1,0,0,0,13,65,1,0,0,0,15,67,1,0,0,0,17,69,1,0,0,0,19,71,1,0,
0,0,21,73,1,0,0,0,23,75,1,0,0,0,25,77,1,0,0,0,27,79,1,0,0,0,29,81,1,0,0,
0,31,83,1,0,0,0,33,86,1,0,0,0,35,36,7,0,0,0,36,2,1,0,0,0,37,38,7,1,0,0,38,
4,1,0,0,0,39,40,5,118,0,0,40,41,5,101,0,0,41,42,5,114,0,0,42,43,5,100,0,
0,43,44,5,97,0,0,44,45,5,100,0,0,45,46,5,101,0,0,46,47,5,114,0,0,47,48,5,
111,0,0,48,6,1,0,0,0,49,50,5,102,0,0,50,51,5,97,0,0,51,52,5,108,0,0,52,53,
5,115,0,0,53,54,5,111,0,0,54,8,1,0,0,0,55,56,5,117,0,0,56,57,5,115,0,0,57,
58,5,117,0,0,58,59,5,97,0,0,59,60,5,114,0,0,60,61,5,105,0,0,61,62,5,111,
0,0,62,10,1,0,0,0,63,64,5,123,0,0,64,12,1,0,0,0,65,66,5,125,0,0,66,14,1,
0,0,0,67,68,5,46,0,0,68,16,1,0,0,0,69,70,5,59,0,0,70,18,1,0,0,0,71,72,5,
61,0,0,72,20,1,0,0,0,73,74,5,44,0,0,74,22,1,0,0,0,75,76,5,34,0,0,76,24,1,
0,0,0,77,78,5,33,0,0,78,26,1,0,0,0,79,80,5,63,0,0,80,28,1,0,0,0,81,82,5,
58,0,0,82,30,1,0,0,0,83,84,5,39,0,0,84,32,1,0,0,0,85,87,7,2,0,0,86,85,1,
0,0,0,87,88,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,6,16,
0,0,91,34,1,0,0,0,2,0,88,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class UsuariosLexer extends antlr4.Lexer {

    static grammarFileName = "Usuarios.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'verdadero'", "'falso'", "'usuario'", 
                         "'{'", "'}'", "'.'", "';'", "'='", "','", "'\"'", 
                         "'!'", "'?'", "':'", "'''" ];
	static symbolicNames = [ null, "LETRA", "DIGITO", "VERDADERO", "FALSO", 
                          "USER", "LBRACE", "RBRACE", "PUNTO", "PUNTO_Y_COMA", 
                          "EQ", "COMA", "COMILLA", "EXCLAMATION", "QUESTION", 
                          "COLON", "S_QUOTE", "WS" ];
	static ruleNames = [ "LETRA", "DIGITO", "VERDADERO", "FALSO", "USER", "LBRACE", 
                      "RBRACE", "PUNTO", "PUNTO_Y_COMA", "EQ", "COMA", "COMILLA", 
                      "EXCLAMATION", "QUESTION", "COLON", "S_QUOTE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

UsuariosLexer.EOF = antlr4.Token.EOF;
UsuariosLexer.LETRA = 1;
UsuariosLexer.DIGITO = 2;
UsuariosLexer.VERDADERO = 3;
UsuariosLexer.FALSO = 4;
UsuariosLexer.USER = 5;
UsuariosLexer.LBRACE = 6;
UsuariosLexer.RBRACE = 7;
UsuariosLexer.PUNTO = 8;
UsuariosLexer.PUNTO_Y_COMA = 9;
UsuariosLexer.EQ = 10;
UsuariosLexer.COMA = 11;
UsuariosLexer.COMILLA = 12;
UsuariosLexer.EXCLAMATION = 13;
UsuariosLexer.QUESTION = 14;
UsuariosLexer.COLON = 15;
UsuariosLexer.S_QUOTE = 16;
UsuariosLexer.WS = 17;



