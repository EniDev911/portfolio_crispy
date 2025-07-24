---
title: "Jekyll: Usar Colecciones"
categories: [SSG, Jekyll]
---

Si ya te sientes encantado y cómodo usando `_post/`, `_data/` y layouts en Jekyll, es hora de conocer las colecciones.

Las colecciones te permiten agrupar contenido por tipo (como proyectos, cursos, tutoriales) y tratarlos de forma independiente a los posts del blog.

Entonces, ¿Cuál es la diferencia?. Piensa en:

- Utilizar __publicaciones__ (`_post/`) cuando quieras escribir artículos independiente, con fecha de publicación.
- Utilizar __colecciones__ cuando quieras agrupar contenido relacionado, que pueda tener su propia página, pero la fecha no es importante.

## __1. Crear una colección__

En el archivo `_config.yml` en la raíz del proyecto, podemos declarar todas las colecciones que necesites:

```yml
collections:
  proyectos:
    output: true
    permalink: /proyectos/:name/
```
{:file="_config.yml"}

> - `output: true`: indica que Jekyll debe generar páginas individuales para cada item.
> - `permalink`: define la estructura de URL de cada item.  
> - Para más detalles sobre estas opciones, revisa en la documentacipon oficial de [Jekyll sobre colecciones](https://jekyllrb.com/docs/collections/){:target='_blank'}.
{: .prompt-info }

## __2. Crea carpetas por cada colección__

Por convención, toda colección debe comenzar con guión bajo: `_proyectos/`, `_recursos`, etc.

En la raíz del proyecto, crea un archivo en `_proyectos/app-movil.md` y agrega lo siguiente:

{% raw %}
```markdown
---
title: App Móvil
cliente: Fundación Innova
fecha: 2022-01-02
layout: proyecto
---

Desarrollamos una app móvil híbrida con Ionic para mejorar la logística de distribución.
```
{:file="_proyectos/app-movil.md}
{% endraw %}

## __3. Crear un layout personalizado__

Es una buena idea tener un layout personalizado para las colecciones. Por ejemplo, tener algo así:

{% raw %}
```html
---
layout: default
---

<article>
  <h1>{{ page.title }}</h1>
  <p><strong>Cliente:</strong> {{ page.cliente }}</p>
  <p><strong>Fecha:</strong> {{ page.fecha | date: "%B %Y" }}</p>
  <div>{{ content }}</div>
</article>
```
{% endraw %}

Por último, crea una página para mostrar los artículos:

{% raw %}
```html
<h2>Poryectos realizados</h2>
<ul>
    {% for proyecto in site.proyectos %}
     <li>
        <a href="{{ proyecto.url }}">{{ proyecto.title }}</a>
        - {{ proyecto.fecha | date: "%d/%m/%Y" }}
     </li>
    {% endfor %}
</ul>
```
{:file="proyectos.html"}
{% endraw %}