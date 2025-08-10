---
title: "Escribir en formato JSON con Node.js"
categories: [Desarrollo Web, "Node.js"]
---


## Activar Conceptos

Antes de comenzar, vamos a refrescar algunos conocimientos para desarrollar el objetivo de este artículo.

¿Qué es un JSON?
: **JSON (JavaScript Object Notation)** es un formato de intercambio de datos ampliamente utilizado debido a su simplicidad y facilidad de uso tanto para humanos como para máquinas. Es un formato basado en texto, que se utiliza comúnmente para enviar y recibir datos entre un servidor y un cliente, así como para almacenar datos de configuración y más.


¿Qué es Node.js?
: **Node.js**, al ser un entorno de ejecución para JavaScript en el servidor, proporciona herramientas poderosas para manipular archivos, incluyendo la capacidad de escribir y leer archivos en formato JSON.

En este artículo, aprenderás a cómo utilizar **Node.js** para escribir un archivo JSON específicamente a formatear objeto JavaScript en JSON. Te mostraré 2 formas de cómo hacerlo; primero de forma sincrónica (bloqueante) y segundo de forma asíncrona (no bloqueante) usando el módulo `fs` (file system), que es uno de los módulos nativos en Node.js para interactuar con el sistema de archivos.

### Escribir en formato JSON con Node.js

Para realizar la operación de escritura en un archivo, **Node.js** cuenta con el módulo **`fs`**, que proporciona funciones para leer y escribir archivos en el sistema.

En este ejemplo, escribirás un objeto de datos en un archivo en formato JSON, lo que es útil cuando quieres guardar configuraciones, respuestas de API o cualquier otro tipo de datos estructurados.

Pasos para escribir un objeto JSON en un archivo:

1. **Crear un objeto JavaScript** que deseas guardar en formato JSON.
2. **Convertir el objeto a JSON** utilizando `JSON.stringify()`.
3. **Escribir el JSON en un archivo** utilizando `fs.writeFile()` o `fs.writeFileSync()`.

### Ejemplo práctico: Escritura asíncrona en formato JSON

Crea un archivo `write-json.js` con el siguiente contenido:

```js
// Cargar el módulo fs para interactuar con el sistema de archivos
const fs = require('fs');

// Crear un objeto JavaScript
const data = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  isActive: true
};

// Convertir el objeto a formato JSON.
// El segundo parámetro es para hacer el JSON legible para humanos.
const jsonData = JSON.stringify(data, null, 2); // `null, 2` es para darle indentación

// Usar fs.writeFile para escribir en el archivo de forma asíncrona
fs.writeFile('data.json', jsonData, (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo JSON escrito con éxito!');
  }
});
```

**Ejecuta el archivo** en tu terminal

Asegúrate de estar en la misma carpeta donde guardaste el archivo `write-json.js`. Luego ejecuta:

```terminal
node write-json.js
```

Este comando hará que Node.js ejecute el archivo y escriba el contenido en un archivo llamado **`data.json`** en el mismo directorio. Una vez que el script se ejecute correctamente, se creará un archivo llamado `data.json` con el siguiente contenido:

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "isActive": true
}
```
{:file="data.json"}


**Escribir en formato JSON de forma sincrónica**

Si prefieres esperar a que la operación de escritura se complete antes de continuar con el código (es decir, hacerlo de forma sincrónica), puedes usar `fs.writeFileSync()` en lugar de `fs.writeFile()`. Aquí tienes el mismo ejemplo pero usando la versión sincrónica:

**Ejemplo con `fs.writeFileSync`**:

```js
const fs = require('fs');

const data = {
  name: "Jane Smith",
  age: 25,
  email: "janesmith@example.com",
  isActive: true
};

// Convertir el objeto a formato JSON
const jsonData = JSON.stringify(data, null, 2);

// Usar fs.writeFileSync para escribir el archivo de forma sincrónica
try {
  fs.writeFileSync('data.json', jsonData);  // Escribe el archivo de manera sincrónica
  console.log('Archivo JSON escrito con éxito!');
} catch (err) {
  console.error('Error al escribir el archivo:', err);
}
```

**Ejecuta el archivo sincrónico**:

```terminal
node write-json.js
```

Al usar **`fs.writeFileSync()`**, el código esperará a que se termine de escribir el archivo antes de continuar. Esto puede ser útil en situaciones donde necesitas que la escritura del archivo se complete antes de continuar con otras operaciones en tu programa.

{% include circle-line.html %}

Escribir en formato JSON con **Node.js** es una tarea sencilla que se puede hacer de forma sincrónica o asíncrona. El módulo `fs` de Node.js es la herramienta principal para interactuar con el sistema de archivos, y con **`JSON.stringify()`** puedes convertir cualquier objeto JavaScript a formato JSON.

* Si necesitas que tu código continúe ejecutándose mientras se escribe el archivo, utiliza **`fs.writeFile()`** (asíncrono).
* Si prefieres bloquear la ejecución hasta que la operación de escritura termine, utiliza **`fs.writeFileSync()`** (sincrónico).

Ambos métodos son útiles, dependiendo de las necesidades de tu aplicación y cómo manejes las operaciones asíncronas.

¡Espero que esta guía te haya sido útil! Ahora puedes escribir tus propios archivos JSON de manera eficiente con Node.js.
