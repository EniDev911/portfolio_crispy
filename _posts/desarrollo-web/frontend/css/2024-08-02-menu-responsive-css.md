---
title: "Menú responsive y funcional solo con HTML y CSS"
categories: [Desarrollo Web, CSS]
---

En el mundo del diseño web responsive, uno de los elementos más comunes y útiles son los menús. Aunque muchas veces frameworks como [Bootstrap](https://getbootstrap.com/){:target='_blank'} ofrecen soluciones rápidas y "eficientes" (entre comillas), es mucho más gratificante construir tú mismo el menú desde cero, y aquí lo vas a lograr utilizando solo HTML y CSS.

Otra ventaja de hacerlo desde cero, es la personalización. Al usar Bootstrap, es fácil caer en el mismo diseño que otros sitios web. Además, para que elcomponente `Navbar` de bootstrap funcione correctamente,  es necesario agregar el JavaScript, y en mi caso, quiero hacer un menú sin nada de JavaScript. {% include techs/cancel-js.svg %}

Ahora, tengamos en cuenta que para lograr que nuestro menu sea _reponsive_ y funcional usando solo HTML y CSS, existen varios métodos que vamos a ir conociendo y profundizando poco a poco.


## Estructura del menú

Vamos a comenzar con una estructura mínima con un html muy básico:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú Responsive sin JavaScript</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="logo">Mi Sitio</div>
    <nav>
      <a href="#menu" class="menu-icon">&#9776;</a>
      <ul class="nav-list" id="menu">
        <a href="#!" class="menu-close">✖</a>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>
```
{:file="index.html" .pen pen-title="Estructura básica"}

Lo más relevante en el código anterior, es la vinculación con la hoja de estilo y la estructura del menú.

## Estilos recomendados

Lo interesante viene a continuación en las reglas de estilos, usamos flexbox para alinear los elementos del menú, también algunas media queries y para darle funcionalidad, usamos la pseudoclase `:target`:

```css
/* Reset */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  font-family: Arial, sans-serif;
}

/* Contenedores flex, y bg */
header,
nav,
.nav-list {
  display: flex;
  background: #333;
}

/* Elementos ocultos para desktop */
.menu-icon,
.menu-close {
  display: none;
}

header {
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
}

.nav-list {
  list-style: none;
  gap: 25px;
}

@media(max-width: 768px) {
  /* Mobile */

  /* Mostrar el icono hamburguesa */
  .menu-icon {
    display: block;
  }

  .nav-list {
    /* Ocultamos el menu por defecto */
    display: none;
    /* ---------- */
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  /* Mostramos el menu y el botón para cerrarlo */
  #menu:target,
  #menu:target .menu-close {
    display: flex;
  }

  .menu-close {
    align-self: flex-start;
  }
}
```

