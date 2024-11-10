---
title: 🚀 Deplegando Aplicación Vite + React en Gh Pages
author: enidev911
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---

### Crear la Aplicación de React

Para crear una aplicación de React configurada con TypeScript utilizando [Vite](https://vite.dev/){: target='_blank'}, puedes usar el siguiente comando:

```terminal
npm create vite@latest react-vite-gh-pages -- --template react
```

Una vez creado el proyecto, navegamos a la carpeta generada y ejecutamos el comando para instalar las dependencias:

```terminal
cd react-vite-gh-pages
npm install
```

Luego de forma opcional, inicia el servidor de desarrollo para ver la aplicación que nos crea vite:

```terminal
npm run dev
```

El template básico de React en Vite te proporciona una estructura mínima con la que puedes empezar a trabajar de inmediato. Incluye un archivo App.jsx que se renderiza como la página de inicio:

![React Vite StartApp](desarrollo-web/vite-react-startapp-light.png){: .light }
![React Vite StartApp](desarrollo-web/vite-react-startapp-dark.png){: .dark }

Para efecto de aprendizaje, no vamos a modificar ningún componente, seguiremos con los pasos para desplegar la aplicación.

---

### Configurar el Repositorio

- Inicializamos un nuevo repositorio, en la raíz del proyecto ejecutamos el siguiente comando:

```terminal
git init
```

- Creamos un nuevo repositorio usando [gh-cli](https://cli.github.com/){: target='_blank' } basado en nuestro proyecto:

{% tabs gh-repo-create %}
{% tab gh-repo-create terminal %}
```terminal
gh repo clone --public -s=. -r=origin
```
> Si no haz utilizado antes [gh-cli](https://cli.github.com/){: target='_blank' }, hechale un ojo a mi siguiente [post de gh-cli](/gh-cli/)
{: .prompt-tip }
{% endtab %}
{% tab gh-repo-create output %}
```terminal
$ gh repo clone --public -s=. -r=origin
✓ Created repository <tu-usuario>/react-vite-gh-pages on GitHub
✓ Added remote git@github.com:<tu-usuario>/react-vite-gh-pages.git
```
> El comando anterior no recibe el nombre para el repositorio, por ende crea un repositorio remoto con el nombre del proyecto.
{: .prompt-info }
{% endtab %}
{% endtabs %}




---

### Instalar el paquete de gh-pages

En el caso de Vite, necesitamos instalar [gh-pages](https://www.npmjs.com/package/gh-pages){: target='_blank' } para desplegar los archivos generados en la carpeta `dist` a Github Pages.

En el proyecto abrimos la terminal y lo instalamos:

```terminal
npm install gh-pages --save-dev
```

En la sección de `scripts` del `package.json` añadimos el comando `deploy`:

```js
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
},
```
{: .nolineno file="package.json" }

- `build`: El comando que genera los archivos de producción en la carpeta `dist`.
- `deploy`: Usa el paquete `gh-pages` para subir el contenido de la carpeta `dist` a la rama `gh-pages` en el repositorio de Github.

#### Construir la aplicación

Ahora podríamos construir la aplicación usando Vite. abrimos la terminal y corremos el siguiente comando:

```terminal
npm run build
```

Esto generará los archivos estáticos de producción en la carpeta `dist`.

#### Desplegar a Github Pages

Para subir los archivos generados y servirlo a Github Pages, utilizamos el comando que definimos `deploy`:

```terminal
npm run deploy
```

Y que pasa ahora, nos encontramos una gran sorpresa al ir a visitar nuestra página:

Es fácil detectar el problema que sucede, basta con abrir la consola con <kbd>F12</kbd> y ver los mensajes en la consola:

![Mensajes de la consola](desarrollo-web/not-found-resource-light.png){: .light }
![Mensajes de la consola](desarrollo-web/not-found-resource-dark.png){: .dark }

### Configurar vite.config.ts

En este paso, configuraremos `Vite` para que funcione bien en GiHub Pages, ya que GitHub Pages sirve la aplicación desde un subdirectorio. Esto significa que tenemos que ajustar las rutas base en la configuración de Vite. Abrimos el archivo `vite.config.ts` en la raíz de nuestro proyecto, y configura el `base` de la siguiente manera:


```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-vite-gh-pages/',  // Asegúrate de reemplazar <react-vite-gh-pages> por el nombre de tu repositorio de GitHub
});
```
{: .nolineno file="vite.config.js" }

---

