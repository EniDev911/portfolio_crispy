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
- Hacemos clic al botón verde <kbd style="background: green; color: white">New</kbd> para crear un nuevo repositorio.
- Le damos un nombre al repositorio (Ej: `webpack5-starter-template`).
- Dejamos marcada la opción de **public**.
- Marcamos la opción de **Add Readme**.
- Bajamos hasta encontrar el botón <kbd style="background: green; color: white">Create Repository</kbd>
- Hacemos clic en el botón **Settings** en la parte superior del repositorio.
- Marcamos la casilla **Template repository**

![settings repository](template-option-repository-light.png){: .light }
![settings repository](template-option-repository-dark.png){: .dark }

- Clonamos el repositorio creado ya sea por SSH, HTTP o GitHub CLI (En mi caso).

```terminal
gh repo clone mc-herrera-90/webpack5-starter-template
```

### Iniciar un Proyecto con Node

Para comenzar iniciamos un archivo `package.json`, con el siguiente comando:

```terminal
npm init -y
```

### Instalamos Webpack y Dependencias Necesarias

Procedamos a instalar Webpack y sus herramientas de línea de comandos

```terminal
npm install -D webpack webpack-cli webpack-dev-server webpack-merge
```

### Instalar Cargadores y Plugins Comunes

Dependiendo de cada proyecto se instalan ciertos cargadores, en esta starter template vamos a instalar los más comunes:

```terminal
npm install -D babel-loader @babel/core @babel/preset-env style-loader css-loader html-webpack-plugin mini-css-extract-plugin
```

Estos paquetes son necesarios, para la la transpilación de código JavaScript (Babel), el manejo de archivo CSS, y la generación de un archivo HTML que incluye el bundle de JavaScript.


### Configurar Webpack

Vamos a dividir la configuración de Webpack en varios archivos para tener una configuración para un entorno común, uno de desarrollo y otro de producción ya que es una buena práctica mantener el código y permitir configuraciones específicas para cada entorno. En Webpack, podemos tener los siguientes archivos:

- `webpack.common.js`: Para definir configuraciones comunes entre los entornos.
- `webpack.dev.js`: Para definir configuraciones específicas de desarrollo.
- `webpack.prod.js`: Para definir las configuraciones específicas de producción.

> Todos los archivos de configuración estarán dentro de una carpeta llamada `config`.
{: .prompt-info }

{% tabs config %}
{% tab config common %}
Este archivo contiene las configuraciones que son comunes en todos los entornos, como entrada (`entry`), la salida (`output`), las reglas de los módulos, los loaders y cualquier otra configuración que sea igual para desarrollo y producción:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  }
}
```
{: file="webpack.common.js" }
{% endtab %}
{% tab config dev %}
En el entorno de desarrollo, habilitamos las características como **hot reloading** y el **sourcemaps** para facilitar la depuración:
```js
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // Generar sourcemaps para la depuración
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  devServer: {
    hot: true,
    port: 4000,
    open: true, // Abrir el navegador automáticamente
  },
});
```
{: file="webpack.dev.js" }
{% endtab %}
{% tab config prod %}
En producción, se deben habilitar las optimizaciones, como la minimización de código, la optimización de imágenes y la eliminación de código muerto (tree-shaking).
```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extraer el CSS en un archivo separado

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Minimiza el código JavaScript
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Extraer CSS a un archivo separado con hash con el nombre
    }),
  ],
})
```
{: file="webpack.prod.js" }
{% endtab %}
{% endtabs %}


Ahora creamos un archivo `webpack.config.js` en el directorio raíz del proyecto. Este archivo es el punto de entrada para la configuración de Webpack. Usará la librería `webpack-merge` para combinar las configuraciones comunes y específicas de cada entorno. Aquí se importarán los archivos `webpack.dev.js` y `webpack.prod.js` según el entorno.


```js
// Determinamos el entorno y cargamos la configuración correspindiente
const envs = { development: 'dev', production: 'prod' };
const env = envs[process.env.NODE_ENV || 'development'];
const config = require(`./config/webpack.${env}.js`);

module.exports = config;
```
{: .nolineno file="webpack.config.js" }


#### Agregar Script al package.json

Para facilitar la ejecución de Webpack, agregamos los siguientes scripts al `package.json`:

{% tabs packagejson %}
{% tab packagejson scripts %}
```json
"scripts": {
  "build": "cross-env NODE_ENV=production webpack",
  "dev": "webpack serve"
}
```
{: .nolineno file="package.json" }
{% endtab %}
{% tab packagejson package.json %}
```json
{
  "name": "webpack5-starter-template",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack",
    "dev": "webpack serve"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0",
    "babel-loader": "^9.2.1",
    "cross-env": "^7.0.3",
    "css-loader": "^7.1.2",
    "html-webpack-plugin": "^5.6.3",
    "mini-css-extract-plugin": "^2.9.2",
    "style-loader": "^4.0.0",
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0",
    "webpack-merge": "^6.0.1"
  }
}
```
{: file="package.json" }
{% endtab %}
{% endtabs %}

#### Crear un Flujo de Github Action para Desplegar

Para desplegar automáticamente la aplicación en **Github Pages** cada vez que hagamos un push a la rama `main`, vamos a a configurar un flujo de trabajo en un archivo llamado `deploy.yml` dentro de la siguiente ubicación `.github/workflows`. Este flujo se encaragará de ejecutar los pasos necesarios para desplegar el build de la aplicación en Github Pages.

Lo primero es poner lo siguiente en el archivo:

```yml
name: Deploy to Guthub Pages

on:
  push:
    branches:
      - main
```
{: .nolineno file="deploy.yml" }

`name: Deploy to GitHub Pages`
: Aquí se le da un nombre a este workflow. En este caso es "**Deploy to Github Pages**". Este nombre aparecerá en la interfaz de usuario de Github Actions.

`on`
: Define el **evento** que va a activar este workflow. En este caso, el evento es **push** a una rama específica. Es decir, cada vez que se haga un **push** a la rama que se indica más abajo, se ejecutará este workflow.

`push`
: Este es el tipo de evento que desencadena la ejecución del workflow lo que significa que el workflow se ejecutará cuando alguien haga push a la rama que se especifican en `branches`.

`branches`
: Especifica en qué ramas debe ejecutarse el workflow cuando se haga un push. En este caso solo se ejecutará cuando alguien haga push a la rama `main`.

Una vez definido el evento del workflow, ahora tenemos que añadir los **jobs**:

```yml
jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: write

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"

      - name: Install dependencies
        run: npm install
```
{: .nolineno file="deploy.yml" }


`jobs`
: Esta clave define los "**trabajos**" que se ejecutarán como parte del workflow. Un worflow puede tener varios trabajos, y cada uno se ejecuta de manera independiente (aunque pueden depender entre sí).

`deploy`
: Este es el nombre del trabajo. En este caso se llama `deploy`, lo que hace entender que es el trabajo que se encargará de realizar el despliegue.

`runs-on: ubuntu-latest`
: Especifica el sistema operativo o entorno donde se ejecutará este trabajo. En este caso `ubuntu-latest` indica que el trabajo se ejecutará en una máquina virtual que tenga una instalación reciente de ubuntu.

`permissions`
: En GitHub Actions, la clave `permissions` se utiliza para **controlar los permisos de acceso de las acciones de un flujo de trabajo** a los recursos del repositorio. Esto fue introducido por GitHub a partir de finales del 2022 para un control más granular sobre los permisos de los **tokens de autenticación** utilizados en los flujos de trabajo (principalmente el `GITHUB_TOKEN`), lo que permite definir explícitamente qué tipo de acceso tendrá el token al ejecutar las acciones en un flujo de trabajo.

`contents: write`
: Significa que el flujo de trabajo tiene **permiso para hacer push**, modificar o escribir en los contenidos del repositorio. Esto incluye tareas como:
- Subir archivos al repositorio (por ejemplo, hacer `git push`).
- Crear nuevas ramas (como en nuestro caso que creará la rama `gh-pages`).
- Modificar los archivos dentro de la carpetas del repositorio.


`steps`
: Los steps ("**pasos**") son una lista de acciones que se ejecutarán en orden dentro de un trabajo. Cada step representa una tarea que se realiza durante el trabajo.

`actions/checkout@v3`
Aquí se usa una acción predefinida de GitHub, en este caso esta acción se encarga de clonar el código del repositorio en el entorno que se ejecuta el job. Es esencial porque permite que los siguientes pasos trabajen con el código que está en el repositorio.

`uses: action/setup-node@v3`
: Aqui estamos usando otra acción preexistente. En este caso, se está usando la acción `setup-node` de GitHub que se utiliza para instalar y configurar una versión específica de Node.js. Esto es esencial para poder ejecutar cualquier comando que depende de Node.js, como `npm install`, `npm run build`, etc.

#### Estructura de Archivos del Template

Finalmente la estructura que terminamos creando para el template es la siguiente:

```
📂 webpack5-starter-template/
├─ 📂 .github/
│  └─ 📂 workflows/
│     └─ deploy.yml
├─ 📂 config/
│  ├─ webpack.common.js
│  ├─ webpack.dev.js
│  └─ webpack.prod.js
├─ 📂 src/
│  ├─ 📂 assets/
│  │  └─ webpack-logo.svg
│  ├─ index.html
│  └─ index.js
├─ package.json
└─ webpack.config.js
```
{: .nolineno .noheader }

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
