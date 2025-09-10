---
title: "Diseñar un Modelo Conceptual en Draw.io"
icon: "drawio"
description: "En este artículo aprenderás a crear **un modelo conceptual** de base de datos utilizando la herramienta gratuita [draw.io (ahora diagrams.net)](https://draw.io){:target='_blank'}. Este tipo de modelo permite representar entidades, atributos y relaciones antes de implementar tu base de datos en un sistema gestor de bases de datos como MySQL, PostgreSQL o SQLite."
image:
  path: posters/drawio-diagramas.webp
  lqip: data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAwCdASoUAAsAPzleyV8vI6qmGAHgJwllAFR+h6II8uS+US1roSAA/t6sJSnrDFEQXY+jDrxAUFNqlpB4KOMJ1Y6TI6kLqW4HrwOy7QAAAA==
categories: [Bases de Datos Relacionales, "Modelado de Datos"]
tags: [Bases de Datos, "Modelado de Datos"]
---

## ¿Qué entendemos por Modelo Conceptual?

Un modelo conceptual es la representación abstracta de los datos relevantes de un sistema. Aquí se identifican conceptos claves como:

__Entidades__
: Representan objetos o conceptos importantes en el dominio (por ejemplo, Cliente, Producto, Pedido). Para representar una entidad, debes usar un rectángulo y puede tener o no un borde:

<div class="modelo-er ps-3">
  <div class="entity">Entidad</div>&nbsp;&nbsp;o&nbsp;&nbsp;
  <div class="entity" style="border-radius: 8px;">Entidad</div>
</div>

__Atributos__
: Describen las características de una entidad (por ejemplo, nombre, dirección, precio). Estos se representan mediante óvalos:

<div class="modelo-er ps-3">
  <div class="key-attribute">Atributo clave</div>&nbsp;
  <div class="simple-attribute">Atributo</div>
</div>

__Relaciones__
: Describen las conexiones entre entidades (por ejemplo, un cliente __realiza__ un pedido). Estas se representan mediante rombos:

<div class="modelo-er ps-3">
  <div class="relationship"><span>Relación</span></div>
</div>
<br/>

> La creación del __modelo conceptual es el primer paso fundamental en el diseño de una base de datos__. En esta etapa se identifican las entidades, atributos y relaciones sin preocuparse aún por detalles técnicos como tipos de datos o claves foráneas. Es una __fase previa al diseño del modelo lógico o físico__.
{: .prompt-info }


## Cómo comenzar con Draw.io

Existen muchas herramientas para crear diagramas, pero en este artículo vamos a utilizar [Draw.io](https://draw.io){:target='_blank'}, una herramienta gratuita para crear diagramas. Permite exportar, compartir y colaborar fácilmente, lo que lo convierte en una excelente opción para crear modelos conceptuales. Para ello, sigue estos pasos:

__1\. Accede a [https://draw.io](https://draw.io){:target='_blank'}__

![Pantalla principal de Draw.io](diagramas/drawio-main.webp)
_pantalla principal_

__2\. Ve al menú izquierdo y selecciona__
  - **Relación de la entidad** para trabajar con símbolos de bases de datos.
  - Usa rectángulos para entidades, óvalos para atributos y rombos para relaciones.

![Toolkit de Relación de la entidad](diagramas/drawio-toolkit-erd.webp)

### Entidades, Atributos y Relaciones

Aquí encontrarás lo necesario para comenzar a crear tus diagramas conceptuales. A continuación, se presentan algunos ejemplos básicos sobre cómo utilizar estos símbolos:

__1. Entidad__

<div class="modelo-er">
  <div class="entity">Entidad</div>&nbsp;&nbsp;o&nbsp;&nbsp;
  <div class="entity" style="border-radius: 8px;">Entidad</div>
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

### Crear un modelo conceptual

En este ejemplo básico definiremos dos entidades principales Cliente y Producto y su relación:

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

Para mostrar cómo representar nuevas formas en __Draw.io__, vamos a modificar este ejemplo. Usaremos una entidad `Pedido`, que se relaciona con una __entidad débil__ llamada `DetallePedido` (se dice entidad debíl porque depende de otra entidad, si no tienes pedidos no tiene sentido).

Añadimos la entidad débil:

![Añadir entidad debil](diagramas/drawio-entidad-debil.webp)
_La entidad `DetallePedido` se dibuja con __doble borde__ para marcarla como débil_

Además, ahora puedes observar que `DetallePedido` se conecta con la entidad `Producto`, que indica qué productos están incluidos en cada pedido.

> De esta forma, reflejamos una relación común en bases de datos: un pedido puede incluir varios productos, y cada producto puede estar en múltiples pedidos.
{: .prompt-info }

## Buenas Prácticas al diseñar

- Usa __nombres claros__ y __singulares__ para entidades. Ejemplo:
  - ✅ `Producto`
  - ✖️ `Productos`
- __Relaciona entidades con verbos__: `Compra`, `Contiene`. Ejemplo:
<div class="modelo-er">
  <div class="entity">Usuario</div>
  <div class="connector-line"></div>
  <div class="relationship"><span>Presta</span></div>
  <div class="connector-line"></div>
  <div class="connector-line"></div>
  <div class="entity">Libro</div>
</div>

- Añade atributos claves como `id_cliente`, `fecha`, etc.
- No mezclar atributos con relaciones.