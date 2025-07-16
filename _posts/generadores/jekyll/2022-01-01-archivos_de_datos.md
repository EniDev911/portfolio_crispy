---
title: "Jekyll: Usar Archivo de Datos"
categories: [SSG, Jekyll]
image:
  path: posters/jekyll-carpeta-data.webp
  lqip: data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJbAAAW/bMEUBYJxa/AAD+6nn1h8C8WZROLPLs/enWA+lNeYL/DGgSkj1C2/0HMv+bBrreGn7YIuodvitiqHeb3FrfxlMzLxCgRVXFAAA=
---

## __¿Para qué sirve la carpeta _data?__ 

Es una carpeta especial que Jekyll reconoce automáticamente. Todo lo que pongas ahí queda disponible para que lo uses en cualquier parte del sitio. 

> Es como tener una mini base de datos, pero hecha con archivos simples como `.yml`, `.json` o `.csv`, que puedes consultar desde cualquier parte de tu sitio.
{: .prompt-tip }

¿Para qué sirve en la práctica? Para separar el contenido repetitivo y estructurado del resto del sitio. Algunos ejemplos comunes:

- Miembros del equipo (`team.json`)
- Proyectos (`portfolio.yml`)

## __1. Crear un proyecto Jekyll__

Si aún no tienes un sitio Jekyll andando, crea un proyecto básico:

```terminal
jekyll new equipo-demo --blank
cd equipo-demo
```

Dentro del proyecto, usamos Bundler para generar un Gemfile, y luego añadimos Jekyll como dependencia para gestionarlo correctamente:

```terminal
bundle init
bundle add jekyll
```

Una vez instaladas las dependencias, usa Bundler para construir el proyecto y servirlo en local:

```terminal
bundle exec jekyll serve
```

Eso va a levantar tu sitio en <http://localhost:4000>.

![new project jekyll](https://fullstack-python.mcherrera.dev/assets/img/notas/nuevo_proyecto.png)

## __2. Usar un archivo de datos__

Dentro del proyecto, busca la carpeta `_data`:

![Folder data](jekyll/data-folder.webp){:w="600" }

Y dentro de ella, creá un archivo llamado `team.yml`:

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


## __3. Crear una página que use esos datos__

En la raíz del proyecto, crea un archivo `equipo.md` y pega lo siguiente:

{% raw %}
```markdown
---
layout: default
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

Ahora ve al sitio en <http://localhost:4000/equipo>.

![Mostrando los datos del team](jekyll/show-data-team.webp)

## __4. Crear una navegación con _data__

Hasta ahora usamos la carpeta `_data` para mostrar el equipo, pero también la podemos usar para manejar algo tan básico como el __menú de navegación__ del sitio. Esto te permitirá agregar, quitar o cambiar enlaces sin tener que meterte a modificar el HTML del layout.

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

![Mostrando los datos de navegación](jekyll/show-data-navigation.webp)

> El uso es idéntico al de __YAML__ porque Jekyll interpreta automáticamente el formato de los archivos `.json`, `.yml` o `.csv`. Lo importante es que esté en la carpeta `_data`.
{: .prompt-info }

{% include circle-line.html %}

Y así como hicimos con el equipo y la navegación, puedes seguir organizando contenido en la carpeta `_data`.


Ideal para:

- Sitios multilingües
- Portafolios (proyectos, servicios, etc.)
- Blogs con categorías o autores personalizados
- Listados dinámicos que quieres mantener en un solo lugar
