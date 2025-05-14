import UsuariosLexer from "./generated/UsuariosLexer.js";
import UsuariosParser from "./generated/UsuariosParser.js";
import { CustomUsuariosVisitor } from "./CustomUsuariosVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

function crearUsuario(id, atributos) {
    console.log(`crearUsuario ("${id}", [`);
    atributos.forEach(({ clave, valor }, index) => {
        const separator = index === atributos.length - 1 ? '' : ';'; // Agrega ';' excepto en el último atributo
        console.log(`    {clave: "${clave}", valor: ${typeof valor === 'string' ? `"${valor}"` : valor}}${separator}`);
    });
    console.log("])");
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    let input;

     const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Pregunta al usuario qué archivo desea elegir
    while (true) {
        var archivo = await new Promise(resolve => {
            rl.question("¿Qué archivo input deseas elegir? (Ingresa un número del 1 al 4): ", (answer) => {
                resolve(answer.trim());
            });
        });

        if (archivo >= 1 && archivo <= 2) {
            archivo = `input_correcto_${archivo}.txt`;
            break; // Sal del bucle si el número es válido
        } else if (archivo >= 3 && archivo <= 4) {
            archivo = `input_incorrecto_${archivo - 2}.txt`;
            break; // Sal del bucle si el número es válido
        } else {
            console.error("\nNúmero de archivo no válido. Debe ser un número entre 1 y 4. Inténtalo de nuevo.\n");
        }
    }

    rl.close();

    // Intento leer la entrada desde el archivo txt que elija
    try {
        input = fs.readFileSync(`../${archivo}`, 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Proceso la entrada con el analizador
    let inputStream = CharStreams.fromString(input);
    let lexer = new UsuariosLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new UsuariosParser(tokenStream);
    let tree = parser.programa(); // Cambiado para usar la regla `programa` de la gramática `Usuarios.g4`

    // Verifico si se produjeron errores
    if (parser._syntaxErrors > 0) { // Cambiado a `parser._syntaxErrors` para verificar errores
        console.error(`\nSe encontraron ${parser._syntaxErrors} errores de sintaxis en la entrada.`);
    } else {
        console.log("\nEntrada válida.");

        // Imprime el árbol de derivación solo si no hay errores
        console.log("\nÁrbol de derivación:");
        console.log(tree.toStringTree(parser.ruleNames) + "\n");

        // Utilizo el visitor para procesar los nodos del árbol
        const visitor = new CustomUsuariosVisitor();
        const usuarios = visitor.visit(tree);

        // Llamo a la función para crear usuarios en base a los datos procesados
        usuarios.forEach(usuario => {
            crearUsuario(usuario.nombre, usuario.atributos);
        });
    }
}

// Ejecuta la función principal
main();