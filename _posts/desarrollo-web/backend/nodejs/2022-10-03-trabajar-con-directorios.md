---
title: "Node.js: Trabajar con directorios y archivos"
categories: [Desarrollo Web, "Node.js"]
tags: [desarrollo web, nodejs]
---


En Node.js, el manejo de archivos y directorios es una de las tareas más comunes cuando tenemos aplicaciones que leen o escriben datos del sistema de archivos. En este artículo, aprenderás a trabajar con diferentes módulos para el manejo eficiente de archivos.


## Módulos que usaremos

Los módulos que utilizaremos permiten interactuar con el sistema de archivos y manejar rutas de forma segura. Vienen incorporado con Node.js, así que no necesitas instalar nada extra.

### 1. Módulo fs

API tradicional basada en callbacks

```js
const fs = require('fs');
```
{:.nolineno}


### 2. Módulo fs/promises

API moderna basada en promesas

```js
const fsPromises = require('fs/promises');
```
{:.nolineno}


### 3. Módulo path - Ruta de archivos

Este módulo ayuda a construir rutas seguras que funcionen tanto en Windows como en Linux/macOS.

```js
const path = require('path');
```
{: .nolineno }

## Crear directorios

Cualquiera sea el módulo, para crear un directorio usaremos el método `mkdir` y en el siguiente ejemplo tenemos en la _tab_ izquierda la forma tradicional con callbacks y en la derecha la forma moderna con promesas:

{% tabs demo-node-mkdir %}
{% tab demo-node-mkdir fs %}
```js
const fsLegacy = require('fs');

fsLegacy.mkdir('mi_carpeta', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Carpeta creada con fs (callback).');
});
```
{: .nolineno }
{% endtab %}
{% tab demo-node-mkdir fs/promises %}
```js
const fsPromises = require('fs/promises');

async function crearDirectorio(nombre) {
  try {
    await fsPromises.mkdir(nombre, { recursive: true });
    console.log(`Directorio '${nombre}' creado.`);
  } catch (err) {
    console.error('Error al crear el directorio:', err.message);
  }
}

crearDirectorio(__dirname + '/directorios');
crearDirectorio(__dirname + '/directorios/documentos');
```
{: .nolineno }
{% endtab %}
{% endtabs %}

## Leer contenido de un directorio

{% tabs demo-node-leer %}
{% tab demo-node-leer fs/promises %}
```js
async function leerDirectorio(ruta) {
    try {
        const archivos = await fsPromises.readdir(ruta);
        console.log(`Contenido de '${ruta}':`, archivos);
    } catch (err) {
        console.error('Error al leer el directorio:', err.message);
    }
}

leerDirectorio(__dirname + '/mis_notas');
```
{% endtab %}
{% endtabs %}


## Eliminar un directorio

{% tabs demo-node-eliminar %}
{% tab demo-node-eliminar fs/promises %}
```js
async function eliminarDirectorio(ruta) {
  try {
    await fs.rm(ruta, { recursive: true, force: true });
    console.log(`Directorio '${ruta}' eliminado.`);
  } catch (err) {
    console.error('No se pudo eliminar:', err.message);
  }
}
```

> `recursive: true` permite eliminar carpetas incluso si tienen contenido. `force: true` evita errores si la carpeta no existe.
{: .prompt-info }
{% endtab %}
{% endtabs %}

## Manejo seguro de rutas con path

Siempre que trabajes con archivos o carpetas, especialmente si usas rutas relativas o absolutas, utiliza `path` para evitar errores entre los diferentes sistemas operativos:

```js
const rutaCompleta = path.join(__dirname, 'mi_directorio', 'archivo.txt');
console.log('Ruta segura generada:', rutaCompleta);
```
{: .nolineno }


{% include circle-line.html %}

Trabajar con directorios en Node.js es más simple de lo que parece, especialmente si usas el módulo basado en promesas `fs/promises` y `async/await`. Esto permite:

- Evitar el "callback hell"
- tener código más limpio y fácil de mantener
- Escribir scripts eficientes para la gestión de archivos