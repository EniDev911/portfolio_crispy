---
title: "Tutorial : Presentaciones con HackMD"
categories: [Tutoriales, Productividad]
---

Últimamente he estado experimentando con __HackMD__, una plataforma en línea que permite escribir y compartir documentos en __Markdown__. Lo interesante es que, más allá de escribir notas, también puedes crear excelentes presentaciones.

En este artículo comparto lo que he descubierto, por qué lo estoy usando para preparar mis trabajos y charlas técnicas, y además dejaré algunos ejemplos reales que he preparado para que puedas explorar y adaptarlo a tus necesidades. 

## __¿Qué es HackMD?__

[__HackMD__](https://hackmd.io/){:target='_blank'} es un editor colaborativo de __Markdown__ basado en la web, pensado para facilitar la escritura de contenido técnico y su distribución. Es como una mezcla entre Google Docs y un IDE ligero, pero con soporte completo para Markdown, LaTeX y varias librerías adicionales.

La plataforma fue lanzada originalmente en 2016 por la startup __HackMD Co., Ltd.__, fundada en Taiwán.

Con el paso del tiempo, HackMD se volvió popular entre comunidades open source, equipos DevOps y startups. Además, se lanzó una versión open source llamada __CodiMD__, ideal para quienes quieren alojar su propia instancia personalizada.

- Código Fuente (CodiMD): [https://github.com/hackmdio/codimd](https://github.com/hackmdio/codimd){:target='_blank'}

HackMD integra [reveal.js](https://github.com/hakimel/reveal.js/){:target='_blank'} para crear fácilmente presentaciones con una serie de diapositivas dentro de una nota en Markdown.

## __Cambiar a Modo de Diapositivas__

Podemos elegir <i class="fa fa-tv"></i> el __Modo de diapositiva__ desde el menú desplegable "Modo" (de forma predeterminada se muestra el <i class="fa fa-eye fa-fw"></i> __Modo de visualización__) en el menú __uso compartido__ en la esquina superior derecha y presiona en __"vista previa"__ para ver su diapositiva.

![Cambiar a modo Slide](tutoriales/hackmd-cambiar-a-modo-slide.webp){:style='border: 1px solid #ccc'}

### __Crear Diapositivas__

La estructura básica es simple, cada diapositiva regular se separa con un interlineado de tres guiones (`---`) y las diapositivas de sección por un interlineado de cuatro guiones (`----`). Por ejemplo, las diapositivas se escriben de la siguiente manera:

```markdown
# Diapositiva 1
text

---

# Diapositiva 2
text

----

## Diapositiva 2.1
text

----

## Diapositiva 2.2
text

---

# Diapositiva 3
text
```

![Escribiendo Slides](tutoriales/hackmd-escribiendo-slides.webp){:style='border: 1px solid #ccc'}

### __Diapositivas Personalizada__

Cada sección separada por `---` se convierte automáticamente en una __diapositiva__. Reveal.js asigna a cada una de ellas una clase CSS llamada `.slide`. Esta clase se puede usar para __asignar atributos especiales__ como transiciones, alineación, estilos y más.

A continuación, puedes ver algunos de estos atributos especiales:

| Atributo                | Descripción                                 |
| ----------------------- | ------------------------------------------- |
| `data-transition="..."` | Tipo de transición (`fade`, `slide`, etc.)  |
| `data-background-color` | Cambia el fondo de esa diapositiva          |
| `data-background-image` | Añade una imagen de fondo                   |
| `data-background-video` | Usa un video de fondo                       |
| `data-auto-animate`     | Activa animaciones automáticas entre slides |

### __Configurar Transiciones__

En HackMD, puedes usar bloques de HTML embebido __antes de cada diapositiva__ para asignarle una transición específica.

```markdown
<!-- .slide: data-transition="fade-in zoom-out" -->
```
{: .nolineno }

Esto es un __comentario HTML especial__ que HackMD y Reveal.js interpretan como una instrucción para la siguiente diapositiva. Se compone de tres partes:

1. `<!--` : indica el inicio del comentario HTML.
2. `.slide:` : especifica que el atributo debe aplicarse al contenedor `<section>` de la diapositiva.
3. `data-transition="..."` : es el atributo Reveal.js que define el tipo de transición.
4. `fade-in`: la diapositiva __entra__ con un efecto de desvanecimiento.
5. `zoom-out`: la diapositiva __sale__ con un efecto de alejamiento.


### __Escribir y Resaltar Bloques de Código__

Una de las mayores ventajas de usar HackMD para documentación técnica es su excelente soporte de código fuente. Utiliza la librería de [__Highlight.js__](https://highlightjs.org/){:target='_blank'}, lo que significa que reconoce automáticamente más de 180 lenguajes de programación y los resalta correctamente.

Para comenzar a resaltar código, se debe usar tres backticks (<code class="language-plaintext highlighter-rouge">```</code>) para iniciar y cerrar un bloque de código. Después de los primeros backticks, puedes indicar el lenguaje:

````markdown
```python
def saludar(nombre):
    print(f"Hola, {nombre}")
```
````
{: .nolineno }
