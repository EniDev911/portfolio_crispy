---
title: "Webpack: Require Context"
categories: ["Desarrollo Web", "Webpack"]
---

La función `require.context()` es una herramienta poderosa ya que permite crear contexto dinámico de importación para todos los archivos dentro de una carpeta específica, sin necesidad de importarlos uno por uno.

## ¿Qué hace require context?

En Webpack la función `require.context()` permite importar cualquier archivo dentro de una carpeta, o incluso dentro de subcarpetas. A diferencia de las importaciones estáticas de ES6, que requiren que declares explícitamente cada archivo, `require.context()` nos permite importar archivos de una manera más flexible y dinámica.

**Sintaxis Básica**:

```js
require.context(directory, recursive, pattern);
```
{: .nolineno }

- `directory`: La ruta relativa a la carpeta donde Webpack debe buscar los archivos.
- `recursive`: Un valor booleano (`true` o `false`) que indica si Webpack debe buscar en las subcarpetas dentro de `directory`.
- `pattern`: Una expresión regular que define los archivos que deben ser incluidos (por ejemplo, `\.js$` para todos los archivos JavaScript).

#### Ejemplo básico de require context

Vamos a suponer que tenemos una carpeta llamada `assets/images` con varios archivos de imagen y quieres cargarlos dinámicamente en la aplicación:

```js
const imageContext = require.context(
  './assets/images', // 👈 ruta de la carpeta que contiene los archivos
  false, // 👈 le indicamos que no haga búsqueda recursiva
  /\.(png|jpe?g|svg)$/ // 👈 expresión regular para el filtro
);

console.log(imageContext.keys()) // Devuelve un array con las rutas de los archivos

imageContext.keys().forEach((imagePath) => {
  const imageUrl = imageContext(imageContext); // URL del archivo
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = imagePath;
  imageContainer.appendChild(img);
})
```
{: .nolineno }



En resumen `require.context()` permite:

1. **Buscar archivos en una carpeta**: Puedes especificar una carpeta en la que se deben buscar archivos.
2. **Filtrar archivos por extensión o nombre**: Puedes aplicar filtros para que solo se incluyan los archivos que coincidan con un patrón determinado (por ejemplo solo archivos `.svg` o `.json`).
3. **Obtener una lista de archivos**: Devuelve una lista de archivos que coinciden con el patrón y te permite hacer un procesamiento dinámico de esos archivos.
