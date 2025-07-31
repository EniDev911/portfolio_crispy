---
title: "CSS Moderno y sus novedades"
categories: [Desarrollo Web, CSS]
icon: "modern-css"
image:
  path: posters/css-tradicional-vs-moderno.webp
  lqip: data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAABQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJZV/2VLMTjbXAAAD+7B00pyBMtnCddyqLFznakb8aby13ZpSVOT+RL2U7I4SpRr/ZZovMvoAAAA==
---

Es muy posible que lleves tiempo sin tocar CSS y desconozcas muchas de las novedades que incorpora CSS actualmente. En este artículo haremos un repaso de tareas comunes que hoy en día se pueden hacer de una forma mejor que la comunmente utilizada. En los siguientes ejemplos, encontrarás la forma __tradicional__ de hacer las cosas en la tab izquierda, y en la tab derecha la forma más moderna.

## Agrupación de selectores

__Tipos de combinadores lógicos__

Esencialmente, tenemos dos combinadores lógicos principales `:is()` y `:where()`. De todas formas, aquí te dejo una tabla donde podemos ver que mecanismos de __combinadores lógicos__ tenemos a nuestra disposición:

|Combinadores lógicos|Descripción|
|`:is()`|Agrupaciones que se puede combinar con otros selectores.|
|`:where()`|Agrupaciones identico al anterior, pero con menor __especificidad CSS__.|
|`:has()`|Permite seleccionar elementos padres que tengan ciertas características en sus hijos.|
|`:not()`|Permite seleccionar elementos que no cumplan ciertas características.|


## Combinador :is()

Resscribir de forma más compacta y sencilla los selectores múltiples combinados:

{% tabs demo-combinador-is %}
{% tab demo-combinador-is css %}
```css
.container .item,
.container .parent,
.container .element {
  /* ... */
}
```
{:.nolineno file="estilos.css"}
{% endtab %}
{% tab demo-combinador-is css moderno %}
```css
.container :is(.item, .parent, .element) {
  /* ... */
}
```
{: .nolineno file="estilos.css" }

Observa que hemos indicado los 3 casos iniciales en un sólo selector (que añade 3 posibilidades diferentes por parámetro). Esto permite crear código mucho más compacto y sencillo de leer y escribir.

> Antiguamente, esta pseudoclase era conocida como `:matches()`, pero finalmente fue renombrada a `:is()`, por lo que es posible que encontremos ejemplos de esta forma si accedemos a documentación antigua.
{: .prompt-info }

{% endtab %}
{% endtabs %}


## El combinador :where()

Por otro lado, existe otro combinador lógico denominado `:where()`, que funciona exactamente igual que el combinador `:is()`. La única diferencia que tiene es en cuanto la __especificidad CSS__.

Mientras que el combinador `:is()`, la especificidad es el valor más alto de la lista de parámetros de `:is()`, en el caso de `:where()` la __especificidad es siempre cero__.

Veamos el siguiente ejemplo:

```css
/* Especificidad (0,2,0) */
.container :is(.list, .element, .menu) {
    /* ... */
}

/* Especificidad (0,1,0) */
.container :where(.list, .element, .menu) {
    /* ... */
}
```
{: .nolineno }

__¿Cuándo usar cada uno?__

| Selector   | Especificidad          | ¿Cuándo usarlo?                                                |
| ---------- | ---------------------- | -------------------------------------------------------------- |
| `:is()`    | **Hereda** la más alta | Cuando quieras agrupar selectores manteniendo su especificidad |
| `:where()` | **Cero**               | Para reglas "por defecto" o fáciles de sobreescribir           |


> El combinador `:where()` puede ser útil para casos en los que se quiere anular la especificidad de un elemento fácilmente si se sobrescribe con otro selector. Esto lo hace especialmente interesante para crear unos estilos con especificidad muy baja que posteriormente van a ser sobreescritos y no queremos que la especificidad lo evite o lo vuelva complejo de sobreescribir.
{: .prompt-info }

## Colores RGB

Escribir colores RGB con canales alfa (transparencia):

{% tabs demo-rgb %}
{% tab demo-rgb css %}
```css
.container {
    background: rgba(255, 255, 0, 0.5):
}
```
{: .nolineno file="estilos.css" }
{% endtab %}
{% tab demo-rgb css moderno %}
```css
.container {
    background: rgb(100% 100% 0 / 50%);
}
```
{: .nolineno file="estilos.css" }
{% endtab %}
{% endtabs %}


## Nesting CSS

Crear componentes CSS nativos autocontenidos dentro de otros:

{% tabs demo-nesting %}
{% tab demo-nesting css %}
```scss
.parent {
  background: grey;
}

.parent .element {
  background: darkred;
}

.parent .element:hover {
  background: red;
}
```
{: .nolineno file="estilos.css"}
{% endtab %}
{% tab demo-nesting css moderno %}
```scss
.parent {
  background: grey;

  & .element {
    background: darkred;

    &:hover {
      background: red;
    }
  }
}
```
{: .nolineno file="estilos.css" }
{% endtab %}
{% endtabs %}

## Centrado CSS

Realizar un centrado en ambos ejes directamente, con una sola propiedad:

{% tabs demo-center %}
{% tab demo-center CSS %}
```scss
.parent {
    display: grid;
    justify-content: center;
    align-items: center;
}
```
{: .nolineno file="estilos.css"}
{% endtab %}
{% tab demo-center css moderno %}
```scss
.parent {
    display: grid;
    place-items: center;
}
```
{:.nolineno file="estilos.css"}
{% endtab %}
{% endtabs %}

## Variables CSS

Utilizar custom properties para guardar información:

{% tabs demo-variables %}
{% tab demo-variables css %}
```css
.parent {
    width: 300px;
    height: 300px;
    background: grey;
}
```
{: .nolineno file="estilos.css"}
{% endtab %}
{% tab demo-variables css moderno %}
```scss
.parent {
  --size: 300px;

  width: var(--size);
  height: var(--size);
  background: var(--color, grey);
}
```
{:.nolineno file="estilos.css"}
{% endtab %}
{% endtabs %}

## Media Queries

Posibilidad de utilizar una sintaxis más amigable para media queries:

{% tabs demo-media-queries %}
{% tab demo-media-queries css %}
```scss
@media (min-width: 800px) and
       (max-width: 1280px) {
  .menu {
    background: red;
  }
}
```
{: .nolineno file="estilos.css" }
{% endtab %}
{% tab demo-media-queries css moderno %}
```scss
@media (800px <= width <= 1280px) {
  .menu {
    background: red;
  }
}
```
{: .nolineno file="estilos.css" }
{% endtab %}
{% endtabs %}