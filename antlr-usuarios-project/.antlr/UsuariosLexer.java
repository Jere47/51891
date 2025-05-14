// Generated from Usuarios.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class UsuariosLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LETRA=1, DIGITO=2, VERDADERO=3, FALSO=4, USER=5, LBRACE=6, RBRACE=7, PUNTO=8, 
		PUNTO_Y_COMA=9, EQ=10, COMA=11, COMILLA=12, EXCLAMATION=13, QUESTION=14, 
		COLON=15, S_QUOTE=16, WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LETRA", "DIGITO", "VERDADERO", "FALSO", "USER", "LBRACE", "RBRACE", 
			"PUNTO", "PUNTO_Y_COMA", "EQ", "COMA", "COMILLA", "EXCLAMATION", "QUESTION", 
			"COLON", "S_QUOTE", "WS"
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


	public UsuariosLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Usuarios.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0011\\\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0004\u0010W\b\u0010\u000b\u0010"+
		"\f\u0010X\u0001\u0010\u0001\u0010\u0000\u0000\u0011\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010"+
		"!\u0011\u0001\u0000\u0003\u0002\u0000AZaz\u0001\u000009\u0003\u0000\t"+
		"\n\r\r  \\\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0001#\u0001\u0000\u0000\u0000\u0003%"+
		"\u0001\u0000\u0000\u0000\u0005\'\u0001\u0000\u0000\u0000\u00071\u0001"+
		"\u0000\u0000\u0000\t7\u0001\u0000\u0000\u0000\u000b?\u0001\u0000\u0000"+
		"\u0000\rA\u0001\u0000\u0000\u0000\u000fC\u0001\u0000\u0000\u0000\u0011"+
		"E\u0001\u0000\u0000\u0000\u0013G\u0001\u0000\u0000\u0000\u0015I\u0001"+
		"\u0000\u0000\u0000\u0017K\u0001\u0000\u0000\u0000\u0019M\u0001\u0000\u0000"+
		"\u0000\u001bO\u0001\u0000\u0000\u0000\u001dQ\u0001\u0000\u0000\u0000\u001f"+
		"S\u0001\u0000\u0000\u0000!V\u0001\u0000\u0000\u0000#$\u0007\u0000\u0000"+
		"\u0000$\u0002\u0001\u0000\u0000\u0000%&\u0007\u0001\u0000\u0000&\u0004"+
		"\u0001\u0000\u0000\u0000\'(\u0005v\u0000\u0000()\u0005e\u0000\u0000)*"+
		"\u0005r\u0000\u0000*+\u0005d\u0000\u0000+,\u0005a\u0000\u0000,-\u0005"+
		"d\u0000\u0000-.\u0005e\u0000\u0000./\u0005r\u0000\u0000/0\u0005o\u0000"+
		"\u00000\u0006\u0001\u0000\u0000\u000012\u0005f\u0000\u000023\u0005a\u0000"+
		"\u000034\u0005l\u0000\u000045\u0005s\u0000\u000056\u0005o\u0000\u0000"+
		"6\b\u0001\u0000\u0000\u000078\u0005U\u0000\u000089\u0005s\u0000\u0000"+
		"9:\u0005u\u0000\u0000:;\u0005a\u0000\u0000;<\u0005r\u0000\u0000<=\u0005"+
		"i\u0000\u0000=>\u0005o\u0000\u0000>\n\u0001\u0000\u0000\u0000?@\u0005"+
		"{\u0000\u0000@\f\u0001\u0000\u0000\u0000AB\u0005}\u0000\u0000B\u000e\u0001"+
		"\u0000\u0000\u0000CD\u0005.\u0000\u0000D\u0010\u0001\u0000\u0000\u0000"+
		"EF\u0005;\u0000\u0000F\u0012\u0001\u0000\u0000\u0000GH\u0005=\u0000\u0000"+
		"H\u0014\u0001\u0000\u0000\u0000IJ\u0005,\u0000\u0000J\u0016\u0001\u0000"+
		"\u0000\u0000KL\u0005\"\u0000\u0000L\u0018\u0001\u0000\u0000\u0000MN\u0005"+
		"!\u0000\u0000N\u001a\u0001\u0000\u0000\u0000OP\u0005?\u0000\u0000P\u001c"+
		"\u0001\u0000\u0000\u0000QR\u0005:\u0000\u0000R\u001e\u0001\u0000\u0000"+
		"\u0000ST\u0005\'\u0000\u0000T \u0001\u0000\u0000\u0000UW\u0007\u0002\u0000"+
		"\u0000VU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XV\u0001\u0000"+
		"\u0000\u0000XY\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z[\u0006"+
		"\u0010\u0000\u0000[\"\u0001\u0000\u0000\u0000\u0002\u0000X\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}