---
title: "Jekyll: Usar Archivo de Datos"
categories: [SSG, Jekyll]
---

## __Crear un Nuevo Proyecto de Jekyll__

Para comenzar a utilizar los archivos de datos en Jekyll, primero crea un proyecto en blanco:

```terminal
jekyll new usar_archivos_de_datos --blank
```

## __Agregar Jekyll__

Dentro del proyecto, usamos Bundler para crear un Gemfile vacío y luego agregamos Jekyll como dependencia:

```terminal
bundle init
bundle add jekyll
```

## __Usar un archivo de datos__

Ahora podemos comenzar a crear archivos de datos personalizados en los siguientes formatos: YAML, JSON, CSV, TSV.

Primero podemos crear un archivo en `_data/navigation.yml` con los siguientes datos:

```yml
- name: Home
  link: /
- name: About
  link: /about
```
{: file='_data/navigation.yml' }

Jekyll pone este archivo a disposición a través de `site.data.navigation`. En lugar de generar cada enlace, podemos iterar sobre los datos:

{% raw %}
```liquid
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.link }}" 
      {% if page.url == item.link %}style="color: red;"{% endif %}>
        {{ item.name }}
    </a>
  {% endfor %}
</nav>
```
{: .nolineno file="_includes/navigation.html" }
{% endraw %}