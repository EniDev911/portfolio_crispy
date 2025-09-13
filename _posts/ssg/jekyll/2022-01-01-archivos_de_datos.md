---
title: "Archivos de Datos"
categories: [SSG, Jekyll]
icon: "jekyll"
image:
  path: posters/jekyll-carpeta-data.webp
  lqip: data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJbAAAW/bMEUBYJxa/AAD+6nn1h8C8WZROLPLs/enWA+lNeYL/DGgSkj1C2/0HMv+bBrreGn7YIuodvitiqHeb3FrfxlMzLxCgRVXFAAA=
permalink: /jekyll/archivo-de-datos
---

## ¿Para qué sirve la carpeta `_data`?

Es una carpeta especial que Jekyll reconoce automáticamente. Todo lo que pongas ahí queda disponible para que lo uses en cualquier parte del sitio. 

> Es como tener una mini base de datos, pero hecha con archivos simples como `.yml`, `.json` o `.csv`, que puedes consultar desde cualquier parte de tu sitio.
{: .prompt-tip }

¿Para qué sirve en la práctica?
: Para separar el contenido repetitivo y estructurado del resto del sitio. Algunos ejemplos comunes:
: - Miembros del equipo (`team.json`)
  - Proyectos (`portfolio.yml`)

## Setup para Jekyll

Antes de comenzar con los ejemplos, asegúrate de tener lo siguiente:

1. **Ruby** (__versión 3.2__ o superior)
2. [**Jekyll**](https://jekyllrb.com/){:target='_blank'}

### 1. Crear un proyecto Jekyll

Si aún no tienes un sitio Jekyll andando, crea un proyecto básico:

```terminal
jekyll new jekyll-data-demo
cd jekyll-data-demo
```

Una vez generado el proyecto, puedes servirlo en local con el siguiente comando:

```terminal
jekyll serve
```

Eso va a levantar tu sitio en <http://localhost:4000>.

{% include embed/video.html src='init-jekyll-data-demo.webm' %}

### 2. Usar un archivo de datos

Dentro del proyecto, en la raíz, crea una carpeta llamada `_data`. Dentro de ella, crea un archivo llamado `team.yml`:

```yml
- nombre: Ana González
  rol: Diseñadora UX
  github: anitaux

- nombre: Pedro Soto
  rol: Frontend Dev
  github: pedrodev

- nombre: Lucía Reyes
  rol: Project Manager
  github: luciareyes
```
{:file="_data/team.yml"}

![Folder data](jekyll/crear-un-archivo-de-datos.gif)

### 3. Mostrar esos datos

En la raíz del proyecto, crea un archivo `equipo.md` y pega lo siguiente:

{% raw %}
```markdown
---
permalink: /equipo/
---

# Nuestro Equipo

<ul>
  {% for persona in site.data.team %}
    <li>
      <strong>{{ persona.nombre }}</strong> — {{ persona.rol }}<br/>
      GitHub: <a href="https://github.com/{{ persona.github }}" target="_blank">@{{ persona.github }}</a>
    </li>
  {% endfor %}
</ul>
```
{:file="equipo.md"}
{% endraw %}

> Jekyll expone este archivo como `site.data.team`, lo que nos permite recorrer sus miembros en lugar de escribir cada uno a mano.
{: .prompt-info }

A continuación, abre <http://localhost:4000/equipo/> en tu navegador para ver el resultado.

![Mostrando los datos del team](jekyll/show-data-team.webp)

## Otro caso de uso para `_data`

Hasta ahora, usamos la carpeta `_data` para mostrar datos desde un archivo `.yml`.

Ahora continuaremos con el __menú de navegación__ del sitio, pero esta vez utilizando un archivo `.json`. Esto te permitirá agregar, quitar o cambiar enlaces sin tener que meterte a modificar el HTML del _layout_.

Crea un archivo llamado `_data/navigation.json`

```json
[
  {
    "name": "Inicio",
    "url": "/"
  },
  {
    "name": "Equipo",
    "url": "/equipo/"
  },
  {
    "name": "Blog",
    "url": "/blog/"
  },
  {
    "name": "Contacto",
    "url": "/contacto/"
  }
]
```
{: file='_data/navigation.json' }

En tu layout principal, recorremos los datos así:

{% raw %}
```liquid
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>{{ page.title }} - {{ site.title }}</title>
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
  </head>
  <body>

  <nav>
    {% for item in site.data.navigation %}
      <a href="{{ item.url }}" 
        {% if page.url == item.url %}style="color: red;"{% endif %}>
          {{ item.name }}
      </a>&nbsp;
    {% endfor %}
  </nav>

  {{ content }}

  </body>
</html>
```
{: .nolineno file="_layouts/default.html" }
{% endraw %}

![Mostrando los datos de navegación](jekyll/menu-de-navegacion-con-datos.gif)

> El uso es idéntico al de __YAML__ porque Jekyll interpreta automáticamente el formato de los archivos `.json`, `.yml` o `.csv`. Lo importante es que esté en la carpeta `_data`.
{: .prompt-info }

## Multiidioma en tu sitio de Jekyll

### 1. ¿Cómo funciona la estrategia?

- Tienes una versión del sitio por idioma, como:

```
/es/index.html
/en/index.html
```
{: .fit-content .noheader }

- Los archivos `.yml` de `_data` contienen las traducciones.
- El botón solo **redirecciona** entre las versiones, no cambia dinámicamente el idioma (recordar que Jekyll genera HTML estático).
- Usar `includes` y `layouts` compartidos que adapten su contenido según el idioma actual.

###  2. Estructura de carpetas sugerida:

```
_data/
  es.yml
  en.yml
es/
  index.md
en/
  index.md
_layouts/
  default.html
_includes/
  nav.html
  lang-switch.html
```
{: .fit-content .noheader }


### 3. Escribir la misma estructura en ambos archivos

```yaml
title: "Bienvenido"
nav:
  home: "Inicio"
  about: "Acerca de"
```
{:file="_data/es.yml" }


```yaml
title: "Welcome"
nav:
  home: "Home"
  about: "About"
```
{:file="_data/en.yml" }


### 4. Definir el idioma en el front-matter

Para el español:

{% raw %}
```markdown
---
layout: default
lang: es
---
# {{ site.data[page.lang].title }}
```
{:file="es/index.md"}
{% endraw %}

Para el inglés:

{% raw %}
```markdown
---
layout: default
lang: en
---
# {{ site.data[page.lang].title }}
```
{:file="en/index.md"}
{% endraw %}

> El ejemplo anterior muestra archivos `.md`, pero te recomiendo que uses `.html`
{: .prompt-tip .fit-content}

### 5. Reemplazar valores donde corresponda

{% raw %}
```liquid
<nav>
  <ul>
    <li><a href="/{{ page.lang }}/">{{ site.data[page.lang].nav.home }}</a></li>
    <li><a href="/{{ page.lang }}/about">{{ site.data[page.lang].nav.about }}</a></li>
  </ul>
</nav>
```
{:file="_includes/nav.html"}
{% endraw %}

### 6. Crear enlaces para cambiar el idioma

{% raw %}
```liquid
{% if page.lang == "es" %}
  <a href="/en{{ page.url }}">English</a>
{% else %}
  <a href="/es{{ page.url }}">Español</a>
{% endif %}
```
{: file="_includes/lang-switch.html"}
{% endraw %}


### 7. Ejemplo mínimo en el Layout

{% raw %}
```html
<!DOCTYPE html>
<html lang="{{ page.lang }}">
<head>
  <meta charset="UTF-8">
  <title>{{ site.data[page.lang].title }}</title>
</head>
<body>
  {% include nav.html %}
  {% include lang-switch.html %}
  <main>
    {{ content }}
  </main>
</body>
</html>
```
{: file="_layouts/default.html" }
{% endraw %}

### Resultado

* Al visitar `/es/`, ves el sitio en español con un botón para cambiar a inglés.
* Al visitar `/en/`, ves el sitio en inglés con un botón para volver al español.

{% include circle-line.html %}

Con esto concluimos el artículo, explorando las ventajas que ofrece Jekyll al trabajar con archivos de datos. Ya sea para mostrar miembros de un equipo o construir un menú de navegación dinámico, la carpeta `_data` te permite organizar contenido de forma clara y reutilizable.

A partir de aquí, puedes seguir expandiendo su uso para mantener tu sitio más limpio, modular y fácil de mantener.

Ideal para:

- Sitios multilingües
- Portafolios (proyectos, servicios, etc.)
- Blogs con categorías o autores personalizados
- Listados dinámicos que quieres mantener en un solo lugar
