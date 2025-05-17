import UsuariosVisitor from "./generated/UsuariosVisitor.js";

export class CustomUsuariosVisitor extends UsuariosVisitor {
    visitPrograma(ctx) {
        return ctx.usuario().map(usuarioCtx => this.visit(usuarioCtx));
    }

    visitUsuario(ctx) {
        const nombreUsuario = ctx.ID().getText();
        const atributo = ctx.atributo().map(atributoCtx => this.visit(atributoCtx));
        return { nombre: nombreUsuario, atributo };
    }
   
    visitAtributo(ctx) {
        const clave = ctx.ID().getText();
        const valor = this.visit(ctx.valor());
        return { clave, valor };
    }

    visitValor(ctx) {
        if (ctx.numero()) {
            return this.visit(ctx.numero());
        } else if (ctx.cadena()) {
            return this.visit(ctx.cadena());
        } else if (ctx.booleano()) {
            return this.visit(ctx.booleano());
        }
    }

    visitNumero(ctx) {

        return parseInt(ctx.NUMBER().getText(), 10);
    }

    visitCadena(ctx) {
        return ctx.getText().slice(1, -1);
    }

    visitBooleano(ctx) {
        if (ctx.TRUE()) {
            return true;
        } else if (ctx.FALSE()) {
            return false;
        }
    }
}