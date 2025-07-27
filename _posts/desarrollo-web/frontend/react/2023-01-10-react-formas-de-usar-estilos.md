---
title: "React: Formas de usar estilos"
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---

## __CSS usando className (Tradicional)__

La forma tradicional de gestionar CSS es a través de las clases de HTML. Sin embargo, una diferencia que suele causar problemas es que en JSX no podemos hacer referencia a `class`, porque es una palabra reservada para las clases de javascript. Por esta razón, utilizamos la propiedad `className`.

{% tabs exclassname %}
{% tab exclassname JSX %}
```jsx
import "./UserCard.css";

export function UserCard({ user, url, children }) {
  return (
    <article className="user-card">
      <img src={user.image} alt={user.name} />
      <div className="data">
        <h1>{user.name}</h1>
        {children}
        <footer className="links">
          <a href={url.site}>Site</a>
          <a href={url.twitch}>Twitch</a>
          <a href={url.twitter}>Twitter</a>
        </footer>
      </div>
    </article>
  );
}
```
{:file='UserCard.jsx'}
{% endtab %}
{% tab exclassname CSS %}
```scss
.usercard {
  display: inline grid;
  grid-template-columns: 150px 1fr;
  background: #262626;
  padding: 1.5rem;
  max-width: 450px;

  & img {
    --size: 128px;

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  }

  & h1 {
    color: #fff;
    font-size: 2.25rem;
    margin: 0;
    line-height: 75%;
  }

  & .links {
    display: inline flex;
    gap: 0.25rem;

    & a {
      background: deeppink;
      padding: 0 0.5rem;
      text-decoration: none;
      color: #fff;

      &:hover {
        background: gold;
        color: #222;
      }
    }
  }
}
```
{:file='UserCard.css'}
{% endtab %}
{% endtabs %}

Si observas al principio estamos importando desde javascript un archivo `.css` y que no lo guardamos en un objeto o elemento, sino que simplemente importamos el archivo. Esto es algo especial de React. Lo que estamos haciendo es importar un archivo CSS que se añadirá de forma global en el bloque `<style>` en nuestro HTML.

## __CSS Modules__

Una estrategia muy utilizada en ecosistemas React es utilizar __CSS Modules__. Se trata de una variante al caso anterior, pero con algunos cambios que hacen que los estilos CSS importados sólo afecten al componente en cuestión. De esta forma, hablamos de módulos CSS y no de CSS global.

Si observas el componente `UserCard.jsx`, sigue importando el archivo CSS y no cambia su contenido, excepto que su nombre ahora es `UserCard.module.css`. Al detectar esa extensión `.module.css`, el automatizador (vite) lo tratará como un módulo CSS.

{% tabs excssmodule %}
{% tab excssmodule JSX %}
```jsx
import styles from "./UserCard.module.css";

export function UserCard({ user, url, children }) {
  const { image, name } = user;

  return (
    <article className={styles.usercard}>
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        {children}
        <footer className={styles.links}>
          <a href={url.site}>Site</a>
          <a href={url.twitch}>Twitch</a>
          <a href={url.twitter}>Twitter</a>
        </footer>
      </div>
    </article>
  );
}
```
{:file='UserCard.jsx'}
{% endtab %}
{% tab excssmodule CSS %}
```scss
.usercard {
  display: inline grid;
  grid-template-columns: 150px 1fr;
  background: #262626;
  padding: 1.5rem;
  max-width: 450px;

  & img {
    --size: 128px;

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  }

  & h1 {
    color: #fff;
    font-size: 2.25rem;
    margin: 0;
    line-height: 75%;
  }

  & .links {
    display: inline flex;
    gap: 0.25rem;

    & a {
      background: deeppink;
      padding: 0 0.5rem;
      text-decoration: none;
      color: #fff;

      &:hover {
        background: gold;
        color: #222;
      }
    }
  }
}
```
{:file='UserCard.css'}
{% endtab %}
{% endtabs %}

Al importar el archivo `UserCard.module.css` lo estamos guardando en un objeto `styles` que contendrá las clases utilizadas en ese archivo `.module.css`.

## __Estilos dinámicos__

En muchos casos nos encontramos con una situación donde queremos dar estilo dependiendo del estado o de la lógica de javascript. En este caso, no nos sirve simplemente lo anterior, sino que tenemos que utilizar algún mecanismo que nos permita mezclarlo.

En React, la forma más cómoda de hacerlo, probablemente sea desde JSX en un atributo `style`. Observa que tenemos un dato `color` en javascript y queremos hacerlo llegar al CSS. Este dato podría ser dinámico, obtenerse desde una fuente externa de datos o generarse en la lógica javascript:

{% raw %}
```jsx
export function UserCard() {
  /* ... */

  const color = "red";

  return (
    <article className={styles.usercard} style={{ "--bg-color": color }}>
      <!-- ... -->
    </article>
  );
}
```
{: .nolineno }
{% endraw %}

Mediante un atributo `style` creamos la variable CSS `--bg-color` que existirá para todo el elemento `<article>`.
