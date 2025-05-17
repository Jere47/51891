// Generated from c:/Users/jerea/Vale/51891/antlr-usuarios-project/Usuarios.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link UsuariosParser}.
 */
public interface UsuariosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(UsuariosParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(UsuariosParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#usuario}.
	 * @param ctx the parse tree
	 */
	void enterUsuario(UsuariosParser.UsuarioContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#usuario}.
	 * @param ctx the parse tree
	 */
	void exitUsuario(UsuariosParser.UsuarioContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#atributo}.
	 * @param ctx the parse tree
	 */
	void enterAtributo(UsuariosParser.AtributoContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#atributo}.
	 * @param ctx the parse tree
	 */
	void exitAtributo(UsuariosParser.AtributoContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(UsuariosParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(UsuariosParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(UsuariosParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(UsuariosParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(UsuariosParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(UsuariosParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#booleano}.
	 * @param ctx the parse tree
	 */
	void enterBooleano(UsuariosParser.BooleanoContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#booleano}.
	 * @param ctx the parse tree
	 */
	void exitBooleano(UsuariosParser.BooleanoContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(UsuariosParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(UsuariosParser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link UsuariosParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(UsuariosParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link UsuariosParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(UsuariosParser.CaracterContext ctx);
}