---
title:  "HTML: Estructura de una etiqueta"
author: enidev911
categories: [Desarrollo Web, HTML]
tags: [desarrollo web, HTML]
---

La parte esencial de una __etiqueta HTML__ es lo que se denomina __etiqueta de apertura__. Se trata de escribir el nombre de la etiqueta en cuestión, colocándola entre los caracteres `<...>`. Aunque no es obligatorio, se recomienda y considera una buena costumbre __escribir las etiquetas siempre en minúsculas__.

En __HTML5__ no se puede colocar cualquier palabra como etiqueta, sino que existe una serie específica de etiquetas, cada una con una misión y objetivo diferente. Por ejemplo, la etiqueta `<strong>`:

```html
<strong>contenido</strong>
```
{: .nolineno }

Como podemos ver, la mayoría de las etiquetas requieren que se especifique un __cierre de etiqueta__ para saber donde termina de actuar. Se caracteriza en que se escribe igual que la etiqueta de apertura, pero con la barra diagonal inmediatamente después del símbolo menor que `</...>`.

### __Atributos__

En algunas etiquetas __HTML__, existen algunos atributos específicos (que pueden ser opcionales u obligatorios). Los atributos determinan cierta información sobre la etiqueta (o su modo de actuar) y generalmente van asociados a un valor determinado