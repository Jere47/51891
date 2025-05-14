# Instrucciones para ejecutar la aplicación

## Requisitos previos

- Node.js instalado en tu sistema.
- Dependencias instaladas (ejecuta `npm install` en la carpeta del proyecto si es necesario).

## Ejecución de la aplicación

1. Abre una terminal en la carpeta del proyecto:  
   `C:\Users\Tu-Usuario\Proyecto NodeJS\antlr-usuarios-project`

2. Asegúrate de que los archivos `input_(correcto/incorrecto)_(1/2).txt` estén presente en la carpeta `.. \Proyecto NodeJS`.

3. Ejecuta la aplicación con el siguiente comando:

   ```
   node index.js
   ```

4. Cuando la aplicación pregunte:

   ```
   ¿Qué archivo input deseas elegir? (Ingresa un número del 1 al 4):
   ```

   Escribe `1/2/3/4` y presiona Enter.

5. Si se eligen los números 1 o 2 se procesan los archivos `input_correcto_(1/2).txt` respectivamente, pero si se eligen los números 3 o 4 se procesan los archivos `input_incorrecto_(1/2).txt`, teniendo en cuenta que el número 3 corresponde a 1 y el 4 corresponde a 2.

6. La aplicación procesará el archivo `input_(correcto/incorrecto)_(1/2).txt` dependiendo del número que se haya escogido y mostrará el resultado en la consola.

---

**Nota:**  
Si deseas probar con otro archivo de entrada, puedes volver a colocar en la terminal "node index.js" y escoger un número distinto al elegido anteriormente.