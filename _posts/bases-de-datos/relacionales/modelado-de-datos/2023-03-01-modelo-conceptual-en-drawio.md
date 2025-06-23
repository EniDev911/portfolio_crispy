---
title: "Crear un Modelo Conceptual en Draw.io"
author: enidev911
description: "En este artículo aprenderás a crear **un modelo conceptual** de base de datos utilizando la herramienta gratuita [draw.io (ahora diagrams.net)](https://draw.io){:target='_blank'}. Este tipo de modelo permite representar entidades, atributos y relaciones antes de implementar tu base de datos en sistemas como MySQL, PostgreSQL o SQLite."
image:
  path: posters/drawio-diagramas.webp
  lqip: data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAwCdASoUAAsAPzleyV8vI6qmGAHgJwllAFR+h6II8uS+US1roSAA/t6sJSnrDFEQXY+jDrxAUFNqlpB4KOMJ1Y6TI6kLqW4HrwOy7QAAAA==
categories: [Bases de Datos Relacionales, "Modelado de Datos"]
tags: [Bases de Datos, "Modelado de Datos"]
---

## __¿Qué entendemos por Modelo Conceptual?__

Un modelo conceptual es la representación abstracta de los datos relevantes de un sistema. Aquí se definen:

- __Entidades__ (ej. Usuario, Producto)
- __Atributos__ (ej. nombre, precio)
- __Relaciones__ (ej. Compra, Tiene)

> La creación del __modelo conceptual es el primer paso fundamental en el diseño de una base de datos__. En esta etapa se identifican las entidades, atributos y relaciones sin preocuparse aún por detalles técnicos como tipos de datos o claves foráneas. Es una __fase previa al diseño del modelo lógico o físico__.
{: .prompt-info }

## __Cómo Comenzar con Draw.io__

Existen muchas herramientas para crear diagramas, pero en este artículo vamos a utilizar [Draw.io](https://draw.io){:target='_blank'}, una herramienta gratuita para crear diagramas. Permite exportar, compartir y colaborar fácilmente, lo que lo convierte en una excelente opción para crear modelos conceptuales. Para ello, sigue estos pasos:

__1\. Accede a [https://draw.io](https://draw.io){:target='_blank'}__

![Pantalla principal de Draw.io](diagramas/drawio-main.webp)
_pantalla principal_

__2\. Ve al menú izquierdo y selecciona__
  - **Entity Relation** para trabajar con símbolos de bases de datos.
  - Usa rectángulos para entidades, óvalos para atributos y rombos para relaciones.

### __Entidades, Atributos y Relaciones__

Una __entidad__ puede representarse como un __rectángulo__, ya sea con o sin bordes, dependiendo del estilo que elijas para tus diagramas, los __atributos__ se representan con óvalos y las __relaciones__ con rombos.

__1. Entidad__

<div class="modelo-er">
  <div class="entity">Entidad</div>&nbsp;&nbsp;o&nbsp;&nbsp;
  <div class="entity" style="border-radius: 8px;">
  Entidad
</div>
</div>

__2. Entidad con atributo clave__

<div class="modelo-er">
  <div class="entity">Cliente</div>
  <div class="connector-line"></div>
  <div class="key-attribute">ID_Cliente</div>
</div>

__3. Entidad con atributo normal__

<div class="modelo-er">
  <div class="entity">Cliente</div>
  <div class="connector-line"></div>
  <div class="simple-attribute">Nombre</div>
</div>

__4. Relaciones__

<div class="modelo-er">
  <div class="entity">Cliente</div>
  <div class="connector-line"></div>
  <div class="relationship"><span>Compra</span></div>
  <div class="connector-line"></div>
  <div class="connector-line"></div>
  <div class="entity">Producto</div>
</div>

### __Ejemplo de Modelo Conceptual de Cliente y Producto__

En este ejemplo básico definiremos dos entidades principales y su relación:

- __Entidad__: `Cliente`
   - __Atributos__: `ID_Cliente`, `Nombre`, `Correo`

- __Entidad__: `Producto`
   - __Atributos__: `ID_Producto`, `Nombre`, `Precio`

- __Relación__: `Compra`

Empezamos por añadir la entidad `Cliente` y `Producto`, buscamos en el cajón de herramientas y si nos ponemos encima del item correcto lo vemos ampliado, clic sobre él y se añade.

![añadir entidades](diagramas/drawio-entidad.webp)

Ahora añadimos usando un verbo para describir la relación, un cliente ___compra___ un producto:

![añadir relación](diagramas/drawio-relacion.webp)

Ahora unimos con un conector (usando los conectores de relación __uno a uno__ y __uno a muchos__):

![usando conector 1 to mandatory](diagramas/drawio-relacion-1-mandatory.webp)

![usando conector 1 to many](diagramas/drawio-relacion-1-to-many.webp)

Para finalizar vamos a definir los atributos de la entidad cliente, añadimos la clave, el nombre y su correo, esta vez los unimos utilizando conectores de línea:

![usando atributos](diagramas/drawio-atributos.webp)

![usando conector standar](diagramas/drawio-conector-linea-normal.webp)

Ahora repite el proceso en la otra entidad `Producto` y el resultado sería el siguiente:

![Modelo de ejemplo](diagramas/drawio-cliente-producto.webp)

Podemos aplicar distintos estilos utilizando el cajón de herramientas de la forma seleccionada.

![Aplicar estilos](diagramas/drawio-aplicar-estilos.webp)

## __Buenas Prácticas al Diseñar__

- Usa __nombres claros__ y __singulares__ para entidades: `Producto`, no `Productos`
- __Relaciona entidades con verbos__: `Compra`, `Contiene`
- Añade atributos claves como `id_cliente`, `fecha`, etc.
- No mezclar atributos con relaciones.