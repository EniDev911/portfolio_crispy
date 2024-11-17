---
title: "Webpack: Starter Template"
categories: ["Desarrollo Web", "Webpack"]
image: posters/webpack-starter-template.png
---

Github ofrece la opción de configurar repositorios template que permite a los desarrolladores crear proyectos basados en una estructura común, facilitando la reutilización de configuraciones y dependencias sin tener que empezar de cero en cada proyecto.

## ¿Que es un Repositorio Template?

Un repositorio template en Github es un repositorio que podemos usar como plantilla para crear nuevos repositorios. Al clonar un repositorio template, Github te permite copiar el contenido sin traer el historial de commits, lo que facilita la reutilización. Esto es ideal cuando tienes una configuración estándar que deseas compartir o utilizar repetidamente, como en el caso de una configuración de Webpack.


### Crear un Repositorio en Github

- **Iniciamos sesión en Github** y nos dirigimos a nuestro perfil.
- Haz clic en el botón verde <kbd style="background: green; color: white">New</kbd> para crear un nuevo repositorio.
- Le damos un nombre al repositorio (Ej: `webpack5-template`).
- Hacemos clic en el botón **Settings** en la parte superior del repositorio.
- Marcamos la casilla **Template repository**

![settings repository](template-option-repository-light.png){: .light }
![settings repository](template-option-repository-dark.png){: .dark }

### Iniciar un Proyecto con Node

Para comenzar iniciamos un archivo `package.json`, con el siguiente comando:

```terminal
npm init -y
```

### Instalamos Webpack y Dependencias Necesarias

Procedamos a instalar Webpack y sus herramientas de línea de comandos

```terminal
npm install -D webpack webpack-cli webpack-dev-server
```


### Instalar Cargadores y Plugins Comunes

Dependiendo de cada proyecto se instalan ciertos cargadores, en esta starter template vamos a instalar los más comunes:

```terminal
npm install -D babel-loader @babel/core @babel/preset-env style-loader css-loader html-webpack-plugin
```

Estos paquetes son necesarios, para la la transpilación de código JavaScript (Babel), el manejo de archivo CSS, y la generación de un archivo HTML que incluye el bundle de JavaScript.


### Configurar Webpack

Creamos un archivo `webpack.config.js` en el directorio raíz del proyecto. Este archivo contiene todas las reglas y configuraciones para que Webpack empaquete los archivos de la manera que se necesita:


```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },
  mode: 'development'
}
```
{: .nolineno file="webpack.config.js" }

Esta configuración establece el punto de entrada de la aplicación en `src/index.js`, y la salida se generará en `dist/bundle.js`, y configuraciones para procesar JavaScript y CSS. También incluye el plugin `HtmlWebpackPlugin` para generar automáticamente un archivo `index.html` optimizado.

#### Agregar Script al package.json

Para facilitar la ejecución de Webpack, agregamos los siguientes scripts al `package.json`:

```json
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve"
}
```
{: .nolineno file="package.json" }


#### Subimos el proyecto a Github

Cuando tengamos completado lo anterior, procedimos a subir el proyecto:

```terminal
git add .
git commit -m "configuración inicial de Webpack"
```

Subimos los archivos a Github:

```terminal
git push origin main
```

### Usar el Repositorio como Template

Para usar este repositorio como base para futuros proyectos o como un recurso de partida para otros post sobre Webpack:


- Ir a la página del repositorio en Github.
- Hacer clic en el botón <kbd style="background: green; color: white">Use this template ▼</kbd>
- Crear un nuevo repositorio a partir de la plantilla.



### Sobre este Template

Este **starter template** no solo te permitirá crear proyectos de manera más eficiente, sino que también será la base para explorar temas más avanzados de Webpack en futuros posts. Al reutilizar esta plantilla, podrás experimentar con diferentes configuraciones de Webpack para mejorar el rendimiento, la modularidad y la estructura de otras aplicaciones.

¡Ya estás listo para empezar a crear proyectos con Webpack más rápido y de manera más eficiente!