import UsuariosListener from "./generated/UsuariosListener.js";

export class CustomUsuariosListener extends UsuariosListener {

    constructor() {
        super();
        this.usuarios = []; // Lista para almacenar los usuarios procesados
        this.usuarioActual = null; // Usuario que se está procesando actualmente
    }

    enterPrograma(ctx) {
        console.log("Iniciando el procesamiento del programa...");
    }

    exitPrograma(ctx) {
        console.log("Finalizando el procesamiento del programa.");
        console.log("Usuarios procesados:", this.usuarios);
    }

    enterUsuario(ctx) {
        const nombreUsuario = ctx.identificador().getText(); // Obtiene el identificador del usuario
        this.usuarioActual = { nombre: nombreUsuario, atributos: [] };
        console.log(`Iniciando el procesamiento del usuario: ${nombreUsuario}`);
    }

    exitUsuario(ctx) {
        console.log(`Finalizando el procesamiento del usuario: ${this.usuarioActual.nombre}`);
        this.usuarios.push(this.usuarioActual); // Agrega el usuario procesado a la lista
        this.usuarioActual = null; // Resetea el usuario actual
    }

    enterAtributo(ctx) {
        const nombreAtributo = ctx.identificador().getText(); // Nombre del atributo
        const valor = ctx.valor().getText(); // Valor del atributo (sin procesar)
        console.log(`Procesando atributo: ${nombreAtributo} = ${valor}`);
        this.usuarioActual.atributos.push({ nombre: nombreAtributo, valor });
    }

    exitAtributo(ctx) {
        console.log("Finalizando el procesamiento de un atributo.");
    }
}