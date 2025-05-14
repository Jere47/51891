import UsuariosVisitor from "./generated/UsuariosVisitor.js";

export class CustomUsuariosVisitor extends UsuariosVisitor {

    constructor() {
        super();
        this.usuarios = []; // Lista para almacenar los usuarios procesados
    }

    visitPrograma(ctx) {
        // Visita todos los usuarios en el programa
        ctx.usuario().forEach((usuarioCtx) => this.visit(usuarioCtx));
        return this.usuarios;
    }

    visitUsuario(ctx) {
        const nombreUsuario = ctx.identificador().getText(); // Obtiene el identificador del usuario
        const atributos = [];

        // Procesa los atributos del usuario
        ctx.atributo().forEach((atributoCtx) => {
            atributos.push(this.visit(atributoCtx));
        });

        // Agrega el usuario a la lista
        this.usuarios.push({ nombre: nombreUsuario, atributos });
    }

    visitAtributo(ctx) {
        const clave = ctx.identificador().getText(); // Extrae el identificador (clave) del atributo
        const valor = this.visit(ctx.valor()); // Procesa el valor del atributo
        return { clave, valor }; // Devuelve un objeto con clave y valor
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
        // Une todos los tokens DIGITO en un solo número y lo convierte a entero
        const numeroTexto = ctx.DIGITO().map(digito => digito.getText()).join('');
        return parseInt(numeroTexto, 10); // Convierte el texto a un número entero
    }

    visitCadena(ctx) {
        // Elimina las comillas de la cadena
        return ctx.getText().slice(1, -1);
    }

    visitBooleano(ctx) {
        if (ctx.VERDADERO()) {
            return true;
        } else if (ctx.FALSO()) {
            return false;
        }
    }
}