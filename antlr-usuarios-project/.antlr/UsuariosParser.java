// Generated from Usuarios.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class UsuariosParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LETRA=1, DIGITO=2, VERDADERO=3, FALSO=4, USER=5, LBRACE=6, RBRACE=7, PUNTO=8, 
		PUNTO_Y_COMA=9, EQ=10, COMA=11, COMILLA=12, EXCLAMATION=13, QUESTION=14, 
		COLON=15, S_QUOTE=16, WS=17;
	public static final int
		RULE_programa = 0, RULE_usuario = 1, RULE_atributo = 2, RULE_valor = 3, 
		RULE_numero = 4, RULE_cadena = 5, RULE_booleano = 6, RULE_identificador = 7, 
		RULE_caracter = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "usuario", "atributo", "valor", "numero", "cadena", "booleano", 
			"identificador", "caracter"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'verdadero'", "'falso'", "'Usuario'", "'{'", "'}'", 
			"'.'", "';'", "'='", "','", "'\"'", "'!'", "'?'", "':'", "'''"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LETRA", "DIGITO", "VERDADERO", "FALSO", "USER", "LBRACE", "RBRACE", 
			"PUNTO", "PUNTO_Y_COMA", "EQ", "COMA", "COMILLA", "EXCLAMATION", "QUESTION", 
			"COLON", "S_QUOTE", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Usuarios.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public UsuariosParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public List<UsuarioContext> usuario() {
			return getRuleContexts(UsuarioContext.class);
		}
		public UsuarioContext usuario(int i) {
			return getRuleContext(UsuarioContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(18);
				usuario();
				}
				}
				setState(21); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==USER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UsuarioContext extends ParserRuleContext {
		public TerminalNode USER() { return getToken(UsuariosParser.USER, 0); }
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(UsuariosParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(UsuariosParser.RBRACE, 0); }
		public List<AtributoContext> atributo() {
			return getRuleContexts(AtributoContext.class);
		}
		public AtributoContext atributo(int i) {
			return getRuleContext(AtributoContext.class,i);
		}
		public UsuarioContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usuario; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterUsuario(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitUsuario(this);
		}
	}

	public final UsuarioContext usuario() throws RecognitionException {
		UsuarioContext _localctx = new UsuarioContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_usuario);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			match(USER);
			setState(24);
			identificador();
			setState(25);
			match(LBRACE);
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LETRA) {
				{
				{
				setState(26);
				atributo();
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(32);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AtributoContext extends ParserRuleContext {
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public TerminalNode EQ() { return getToken(UsuariosParser.EQ, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode PUNTO_Y_COMA() { return getToken(UsuariosParser.PUNTO_Y_COMA, 0); }
		public AtributoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atributo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterAtributo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitAtributo(this);
		}
	}

	public final AtributoContext atributo() throws RecognitionException {
		AtributoContext _localctx = new AtributoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_atributo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			identificador();
			setState(35);
			match(EQ);
			setState(36);
			valor();
			setState(37);
			match(PUNTO_Y_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public BooleanoContext booleano() {
			return getRuleContext(BooleanoContext.class,0);
		}
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterValor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitValor(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_valor);
		try {
			setState(42);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIGITO:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				numero();
				}
				break;
			case COMILLA:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				cadena();
				}
				break;
			case VERDADERO:
			case FALSO:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				booleano();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(UsuariosParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(UsuariosParser.DIGITO, i);
		}
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterNumero(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitNumero(this);
		}
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_numero);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(44);
				match(DIGITO);
				}
				}
				setState(47); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGITO );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public List<TerminalNode> COMILLA() { return getTokens(UsuariosParser.COMILLA); }
		public TerminalNode COMILLA(int i) {
			return getToken(UsuariosParser.COMILLA, i);
		}
		public List<CaracterContext> caracter() {
			return getRuleContexts(CaracterContext.class);
		}
		public CaracterContext caracter(int i) {
			return getRuleContext(CaracterContext.class,i);
		}
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterCadena(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitCadena(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_cadena);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(COMILLA);
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 125702L) != 0)) {
				{
				{
				setState(50);
				caracter();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(56);
			match(COMILLA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BooleanoContext extends ParserRuleContext {
		public TerminalNode VERDADERO() { return getToken(UsuariosParser.VERDADERO, 0); }
		public TerminalNode FALSO() { return getToken(UsuariosParser.FALSO, 0); }
		public BooleanoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleano; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterBooleano(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitBooleano(this);
		}
	}

	public final BooleanoContext booleano() throws RecognitionException {
		BooleanoContext _localctx = new BooleanoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_booleano);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			_la = _input.LA(1);
			if ( !(_la==VERDADERO || _la==FALSO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentificadorContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(UsuariosParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(UsuariosParser.LETRA, i);
		}
		public List<TerminalNode> DIGITO() { return getTokens(UsuariosParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(UsuariosParser.DIGITO, i);
		}
		public IdentificadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identificador; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterIdentificador(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitIdentificador(this);
		}
	}

	public final IdentificadorContext identificador() throws RecognitionException {
		IdentificadorContext _localctx = new IdentificadorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_identificador);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(LETRA);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LETRA || _la==DIGITO) {
				{
				{
				setState(61);
				_la = _input.LA(1);
				if ( !(_la==LETRA || _la==DIGITO) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracterContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(UsuariosParser.LETRA, 0); }
		public TerminalNode DIGITO() { return getToken(UsuariosParser.DIGITO, 0); }
		public TerminalNode PUNTO() { return getToken(UsuariosParser.PUNTO, 0); }
		public TerminalNode COMA() { return getToken(UsuariosParser.COMA, 0); }
		public TerminalNode EXCLAMATION() { return getToken(UsuariosParser.EXCLAMATION, 0); }
		public TerminalNode QUESTION() { return getToken(UsuariosParser.QUESTION, 0); }
		public TerminalNode COLON() { return getToken(UsuariosParser.COLON, 0); }
		public TerminalNode PUNTO_Y_COMA() { return getToken(UsuariosParser.PUNTO_Y_COMA, 0); }
		public TerminalNode S_QUOTE() { return getToken(UsuariosParser.S_QUOTE, 0); }
		public CaracterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).enterCaracter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof UsuariosListener ) ((UsuariosListener)listener).exitCaracter(this);
		}
	}

	public final CaracterContext caracter() throws RecognitionException {
		CaracterContext _localctx = new CaracterContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_caracter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 125702L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0011F\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0004\u0000\u0014\b\u0000\u000b\u0000\f\u0000\u0015"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001\u001c\b\u0001"+
		"\n\u0001\f\u0001\u001f\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003+\b\u0003\u0001\u0004\u0004\u0004.\b\u0004\u000b\u0004"+
		"\f\u0004/\u0001\u0005\u0001\u0005\u0005\u00054\b\u0005\n\u0005\f\u0005"+
		"7\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0005\u0007?\b\u0007\n\u0007\f\u0007B\t\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0000\u0000\t\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0000"+
		"\u0003\u0001\u0000\u0003\u0004\u0001\u0000\u0001\u0002\u0004\u0000\u0001"+
		"\u0002\b\t\u000b\u000b\r\u0010C\u0000\u0013\u0001\u0000\u0000\u0000\u0002"+
		"\u0017\u0001\u0000\u0000\u0000\u0004\"\u0001\u0000\u0000\u0000\u0006*"+
		"\u0001\u0000\u0000\u0000\b-\u0001\u0000\u0000\u0000\n1\u0001\u0000\u0000"+
		"\u0000\f:\u0001\u0000\u0000\u0000\u000e<\u0001\u0000\u0000\u0000\u0010"+
		"C\u0001\u0000\u0000\u0000\u0012\u0014\u0003\u0002\u0001\u0000\u0013\u0012"+
		"\u0001\u0000\u0000\u0000\u0014\u0015\u0001\u0000\u0000\u0000\u0015\u0013"+
		"\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000\u0000\u0000\u0016\u0001"+
		"\u0001\u0000\u0000\u0000\u0017\u0018\u0005\u0005\u0000\u0000\u0018\u0019"+
		"\u0003\u000e\u0007\u0000\u0019\u001d\u0005\u0006\u0000\u0000\u001a\u001c"+
		"\u0003\u0004\u0002\u0000\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001f"+
		"\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0001\u0000\u0000\u0000\u001e \u0001\u0000\u0000\u0000\u001f\u001d\u0001"+
		"\u0000\u0000\u0000 !\u0005\u0007\u0000\u0000!\u0003\u0001\u0000\u0000"+
		"\u0000\"#\u0003\u000e\u0007\u0000#$\u0005\n\u0000\u0000$%\u0003\u0006"+
		"\u0003\u0000%&\u0005\t\u0000\u0000&\u0005\u0001\u0000\u0000\u0000\'+\u0003"+
		"\b\u0004\u0000(+\u0003\n\u0005\u0000)+\u0003\f\u0006\u0000*\'\u0001\u0000"+
		"\u0000\u0000*(\u0001\u0000\u0000\u0000*)\u0001\u0000\u0000\u0000+\u0007"+
		"\u0001\u0000\u0000\u0000,.\u0005\u0002\u0000\u0000-,\u0001\u0000\u0000"+
		"\u0000./\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000/0\u0001\u0000"+
		"\u0000\u00000\t\u0001\u0000\u0000\u000015\u0005\f\u0000\u000024\u0003"+
		"\u0010\b\u000032\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u000053\u0001"+
		"\u0000\u0000\u000056\u0001\u0000\u0000\u000068\u0001\u0000\u0000\u0000"+
		"75\u0001\u0000\u0000\u000089\u0005\f\u0000\u00009\u000b\u0001\u0000\u0000"+
		"\u0000:;\u0007\u0000\u0000\u0000;\r\u0001\u0000\u0000\u0000<@\u0005\u0001"+
		"\u0000\u0000=?\u0007\u0001\u0000\u0000>=\u0001\u0000\u0000\u0000?B\u0001"+
		"\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000"+
		"A\u000f\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000CD\u0007\u0002"+
		"\u0000\u0000D\u0011\u0001\u0000\u0000\u0000\u0006\u0015\u001d*/5@";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}