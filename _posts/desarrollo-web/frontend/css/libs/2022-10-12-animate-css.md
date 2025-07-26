---
title: "Animaciones básicas con Animate.css "
categories: [Desarrollo Web, CSS]
icon: "modern-css"
---

[Animate.css](https://animate.style/){:target='_blank'} es una librería que contiene animaciones predefinidas, como `fadeIn`, `bounce`, `zoomIn`, entre otras. Ideal para añadir una mejora y experiencia visual sin escribir líneas complejas de código o `@keyframes` a mano.

Animate.css es ideal para páginas de aterrizaje, componentes interactivos.

> Usa las animaciones con moderación. Un exceso puede distraer al usuario y afectar la experiencia. Elige animaciones que __refuercen la interfaz__, no que compitan con el contenido.
{: .prompt-info } 

## __Instalación__

Para usar a través de una __CDN__ agrega esto a tu `<head>`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```
{: .nolineno }


Para tener la librería instalada en el proyecto, usa __npm__:

```terminal
npm install animate.css --save
```

Y luego importalo en tu CSS o JavaScript:

```js
import 'animate.css';
```
{:.nolineno .noheader .fit-content}

## __Como usar las animaciones__

Solo se necesita dos clases:

- `animate__animated` → Clase base (con 2 guiones bajos)
- `animate__NOMBRE_DE_ANIMACIÓN_`  → La animación que quieres usar

```html
<h1 class="animate__animated animate__bounce">¡Hola mundo!</h1>
```
{: .nolineno}


### __Animaciones populares__

| Nombre        | Descripción              |
| ------------- | ------------------------ |
| `fadeIn`      | Aparece suavemente       |
| `bounce`      | Rebota                   |
| `zoomIn`      | Hace zoom al aparecer    |
| `flip`        | Gira en 3D               |
| `slideInLeft` | Entra desde la izquierda |

### __Controlar duración, retraso y repetición__

Podemos manejar el comportamiento de la animación a través de variables CSS para definir la duración, el retraso y las iteraciones de la animación. Esto hace que Animate.css sea muy flexible y personalizable. Ejemplo:

```css
.custom-timing {
    --animate-duration: 2s;
    --animate-delay: 1s;
    --animate-repear: 3;
}
```
{: .nolineno }

Luego, la usamos en nuestro elemento HTML:

```html
<div class="animate__animated animate__fadeIn my-element">Cargando...</div>
```
{: .nolineno }

> Para animar al hacer scroll, combina Animate.css con librerías como [AOS](https://michalsnik.github.io/aos/){:target='_blank'} o usa un `IntersectionObserver` en JavaScript para añadir las clases dinámicamente.
{: .prompt-tip }

Aunque la librería ofrece algunas clases como `animated` para usar la librería rápidamente, se puede usar directamente como animaciones (`keyframes`). Esto proporciona una forma flexible de usar las animaciones proporcionadas por los `keyframes` de Animate.css,  sin tener que refactorizar el html.

Ejemplo:

```css
.mi-clase {
    display: inline-block;
    animation: bounce;
    animation-duration: 2s;
}
```

Teniendo en cuenta que algunas animaciones dependen de la propiedad `animation-timing` establecida en la clase de animación.

Para cambiar la duración de una animación simplemente se establece el nuevo valor global o localmente. Ejemplo:

```css
.animate__animated.animate__bounce {
    --animate-duration: 2s;
}
:root {
    --animate-duration: 800ms;
    --animate-delay: 0.95;
}
```
{: .nolineno }


Las propiedades personalizadas también facilitan el cambio sobre la marcha de todas las propiedades, lo que significa que puedes tener un efecto de camara lenta o de lapso de tiempo con una sola línea de JavaScript. Ejemplo:

```js
document.elemento.style.setProperty('--animate-duration', '2s');

document.elemento.style.setProperty('--animate-duration', '5s');
```

## __Clases de utilidad__

A continuación tienes algunas clases que puedes ir experimentando y sirven para configurar rápido una animación.

```html
<div class="animate__animated animated__bounce animate__delay_2s">
    Ejemplo
</div>
```
__Controlar el tiempo__:

```bash
animate__delay-2s => animate__slow  # 2s   
animate__delay-3s => animate__slower # 3s
animate__delay-4s => animate__fast # 800ms
animate__delay-5s => animate__faster # 500ms v
```
{: .nolineno }

