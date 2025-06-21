---
title:  "HTML: Entidades"
author: enidev911
categories: [Desarrollo Web, HTML]
tags: [desarrollo web, HTML]
---

Cuando trabajamos con HTML, no todos los caracteres se pueden escribir directamente en el código. Algunos tienen un __significado especial__ para el navegador, como `<`, `>` o `&`. Para mostrar estos símbolos como texto en una página web, necesitamos usar lo que se conoce como **entidades HTML**.


## __¿Qué es una entidad HTML?__

Una entidad HTML es una secuencia de caracteres que comienza con `&` y termina con `;`. Sirve para representar caracteres que de otra manera podrían romper o confundir el código HTML.

Por ejemplo:

```html
<p>5 &lt; 10</p>
```
{: .nolineno }

Esto mostrará correctamente: `5 < 10`.
Si escribieras `<` directamente, el navegador lo interpretaría como el inicio de una etiqueta HTML.

### __Sintaxis general__

Las entidades HTML pueden tener dos formas:

* **Con nombre**:
  Ejemplo: `&lt;`, `&gt;`, `&amp;`, `&copy;`

* **Numérica**:
  Decimal: `&#60;`
  Hexadecimal: `&#x3C;`

Ambas representan el mismo carácter, aunque la versión con nombre suele ser más legible.

## __Entidades HTML más comunes__

> 💡 Nota: `&nbsp;` crea un espacio que no se rompe al hacer saltos de línea, útil para evitar cortes indeseados en palabras o cifras.
{: .prompt-info }


{% include entities-viewer.html %}

{% include circle-line.html %}

Las entidades HTML son una herramienta fundamental para escribir código limpio, correcto y seguro. Saber cuándo y cómo usarlas marca la diferencia entre un HTML que se ve bien… y uno que se rompe.
