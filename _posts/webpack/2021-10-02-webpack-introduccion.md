---
title: "Webpack: Introducción"
categories: ["Desarrollo Web", "Webpack"]
---

## ¿Qué es Webpack?

**Webpack** es un empaquetador (*bundler*) de módulos. En términos sencillos, es una herramienta que toma todos los recursos de una aplicación web (JavaScript, CSS, Imágenes, etc.) y los agrupa en un solo archivo (o varios archivos optimizados) para ser usados en el navegador. Webpack no solo empaqueta archivos, sino que también permite realizar tareas de transformación y optimización de esos archivos, como la transpilación de JavaScript con Babel, la minificación de código y la inyección de recursos estáticos como imágenes y fuentes.

### Conceptos Básicos de Webpack

Para entender cómo funciona Webpack, hay varios conceptos clave que debemos conocer:

**Entrypoint**
: Es el archivo principal que Webpack utiliza para comenzar a construir el gráfico de dependencias. Generalmente, es un archivo javaScript principal, como `index.js`.

**Modules**
: En Webpack, cualquier archivo que puedas importar o requerir en tu aplicación es considerado un módulo (archivo JS, CSS, imágenes, etc).

**Loaders**
: Son transformaciones que Webpack aplica a los módulos antes de empaquetarlos. Por ejemplo, un *loader* puede transpilar código TypeScript a JavaScript, o convertir archivos Sass en CSS.

**Plugins**
: Son herramientas más poderosas que Webpack usa para realizar tareas más complejas como la optimización de recursos, la generación de HTML, la minificación de código y la definición de variables de entorno.

**Output**
: Es donde Webpack coloca los archivos finales después de haberlos empaquetado. Puedes especificar el nombre y la estructura de los archivos de salida.

### Empezar con Webpack

A continuación vamos a ver el flujo básico para comenzar con Webpack en un proyecto.

Iniciamos un nuevo proyecto y creamos un package.json de manera automática con valores predeterminados:

```terminal
npm i -D webpack webpack-cli
```

#### Configurar Webpack

Creamos un archivo `webpack.config.js` en el directorio raíz del proyecto. Este archivo contiene todas las reglas y configuraciones para que Webpack empaquete los archivos de la manera que necesites.

Un archivo `webpack.config.js` básico puede lurcir de la siguiente manera:

```js
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
```
{: .nolineno file="webpack.config.js" }

En este ejemplo, Webpack tomará el archivo `index.js` en la carpeta `src`, lo procesará y generará un archivo `bundle.js` en la carpeta `dist`. Además, usa un *loader* para procesar archivos `CSS`.


### Ejecutar Webpack

Podemos ejecutar Webpack, abriendo la terminal y ejecutar el siguiente comando:

```terminal
npx webpack --config webpack.config.js
```

Para facilitar la ejecución de Webpack desde la terminal, podemos agregar algunos scripts útiles en nuestro archivo `package.json`:

```js
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --mode development"
},
```
{: .nolineno file="package.json" }
