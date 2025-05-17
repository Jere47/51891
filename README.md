# Instrucciones para ejecutar la aplicación

## Requisitos previos

- Node.js instalado en tu sistema.
- Dependencias instaladas (ejecuta `npm install` en la carpeta del proyecto si es necesario).

## Ejecución de la aplicación

1. Clona el repositorio con GitHub.

2. Copia el directorio del repositorio incluida la carpeta `antlr-usuarios-project`.  

3. Abre una terminal y luego coloca cd + (el directorio que copiaste recientemente):  
   `cd C:\...\antlr-usuarios-project`

4. Asegúrate de que los archivos `input_(correcto/incorrecto)_(1/2).txt` estén presentes.

5. Ejecuta la aplicación con el siguiente comando:

   ```
   node index.js
   ```

6. Cuando la aplicación pregunte:

   ```
   ¿Qué archivo input deseas elegir? (Ingresa un número del 1 al 4):
   ```

   Escribe `1/2/3/4` y presiona Enter.

7. Si se eligen los números 1 o 2 se procesan los archivos `input_correcto_(1/2).txt` respectivamente, pero si se eligen los números 3 o 4 se procesan los archivos `input_incorrecto_(1/2).txt`, teniendo en cuenta que el número 3 corresponde a 1 y el 4 corresponde a 2.

8. La aplicación procesará el archivo `input_(correcto/incorrecto)_(1/2).txt` dependiendo del número que se haya escogido y mostrará el resultado en la consola.

---

**Nota:**  
Si deseas probar con otro archivo de entrada, puedes volver a colocar en la terminal "node index.js" y escoger un número distinto al elegido anteriormente.
