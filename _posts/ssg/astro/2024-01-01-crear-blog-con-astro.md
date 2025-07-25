---
title: "Astro: Crear un blog"
categories: [SSG, Astro]
---

__Astro__ es una de los frameworks más modernos y rápidos para construir sitios estáticos. En este artículoo aprenderás a cómo usar la plantilla de blog junto con React para crear tu propio sitio, personalizarlo y dejarlo listo para producción.

## __1. Crear el proyecto__

Desde una terminal, ejecuta el siguiente comando:

```terminal
npm create astro@latest -- --add react
```

Esto lanza un asistente interactivo donde debes elegir:

- El nombre del proyecto
- El lenguaje (TypeScript o JavaScript)
- El marco de componentes que quieres trabajar (en este caso React, ya incluido con la opción `--add react`)
- La plantilla base: `blog`
- Instalar las dependencias
- Inicializar git

![Nuevo proyecto](astro/new-blog-project.webp)


Una vez termine la instalación, navega a tu proyecto y levanta el servidor local:

```terminal
cd nombre-de-tu-proyecto
npm run dev
```

Y con esto ya puedes abrir el navegador para ver la el proyecto:

![Preview sitio](astro/preview-template-blog.webp)

## __2. Estructura del proyecto__

> Primero que todo, al abrir el proyecto con VS Code, se nos recomendará instalar las extensiones para Astro, lo cual les aconsejo hacer.
{: .prompt-info }

![abrir con vs code](astro/install-extensions-recommended.webp)
_Instalar la extensión para Astro__

Como podemos observar, la estructura tiene el siguiente árbol de directorio:

```bash
📁 src/
│  ├── components/         # Componentes reutilizables (puedes poner tus React aquí)
│  ├── content/            # Los posts escritos en Markdown
│  ├── layouts/            # Layouts que definen la estructura general de las páginas
│  ├── pages/              # Rutas del sitio: index, about, etc.
│  └── styles/             # Archivos CSS globales o específicos
📁 public/                 # Imágenes o archivos accesibles directamente
astro.config.mjs          # Configuración principal de Astro
```
{: .noheader .nolineno  .fit-content }

## __3. Crear un nuevo post__

Como en la mayoría de generadores de sitios web estáticos (tipo Jekyll, Hugo) los artículos se pueden escribir en __Markdown__ y en el caso de astro se crean en la siguiente ruta:

```
src/content/blog/
```
{: .noheader .fit-content }

![contenido del blog](astro/content-blog-files.webp)

Como podemos observar, los artículos que vallas creando aquí, se van a mostrar automáticamente. Astro usa su sistema de __Content Collections__, lo que permite leer y organizar automáticamente todos los archivos dentro de esta ruta.

## __4. Agregar un componente React__

Como tenemos configurado `--add react`, ya puedes agregar componentes de React dentro de tus páginas. Para ello, vamos a crear lo siguiente:

1. Un archivo en:
    ```
    src/components/Contador.jsx
    ```
    {: .fit-content .noheader}

```jsx
import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Has hecho clic {count} veces
    </button>
  );
}
```
{: file="Contador.jsx" }
{:start="2"}
2. En una página Astro, por ejemplo en:
    ```
    src/pages/index.astro
    ```
    {:.nolineno .fit-content .noheader }

{% raw %}
```md
---
import Contador from '../components/Contador.jsx';
---

<h2>Componente React</h2>
<Contador client:only="react" />
```
{:file="index.astro"}
{% endraw %}

- `client:only="react"`: Renderiza el componente solo en el cliente y no en el servidor.