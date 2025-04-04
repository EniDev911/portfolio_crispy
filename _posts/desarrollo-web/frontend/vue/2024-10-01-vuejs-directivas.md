---
title: "Qué son y cómo usar directivas en Vue.js"
author: enidev911
categories: [Desarrollo Web, "Vue"]
tags: [desarrollo web, vue]
---


En Vue.js, una **directiva** es un atributo especial que se añade a un elemento HTML para aplicar un comportamiento específico. Es decir, son atributos que vamos a usar en nuestro HTML, pero que no son estándar de HTML.

> En su lugar Vue.js usará estos atributos para hacer su magia y extender el comportamiento de los elementos HTML.
{: .prompt-love }

## __Directivas Incorporadas en Vue.js__

Vue.js **incluye varias directivas incorporadas** que cubren la mayoría de las necesidades en el desarrollo de aplicaciones.

Estas directivas siempre comienzan con `v-`, seguido del nombre de la directiva. Son las que usaremos en la mayoría de los casos.

> Sobre todo `v-bind` y `v-on`, se usan tan frecuente que hasta tienen un alias más corto.
{: .prompt-info }

## __Enlace de Datos__

Las directivas de enlace de datos permiten **vincular datos y variables** de Vue con atributos HTML o propiedades de componentes.


|Nombre|Descripción|
|:-----|:----------|
|`v-bind`|Enlaza dinámicamente atributos HTML o propiedades de componentes.|
|`v-model`|Crea un enlace bidireccional entre un input y una propiedad de datos.|
|`v-text`|Actualiza el `textContent` de un elemento con un valor proporcionado.|
|`v-html`|Actualiza el `innerHTML` de un elemento (¡cuidado con XSS!).|

{% raw %}
```vue
<template>
  <!-- Pone como atributo src el contenido de la variable imageURL -->
  <img :src="imageURL" alt="Imagen">

  <!-- Actualiza el `textContent` de un elemento -->
  <p v-text="message"></p>

  <!-- Actualiza el `innerHTML` de un elemento -->
  <p v-html="htmlContent"></p>
</template>
```
{: .nolineno .bgerr }
{% endraw %}

> El uso de `:` es una abreviatura de `v-bind`. Por ejemplo, `:src` es equivalente a `v-bind:src`.
{: .prompt-info }

## __Renderizado Condicional__

Las directivas de renderizado condicional permiten **mostrar u ocultar** elementos en función de una condición. Por ejemplo, para crear interfaces dinámicas que reaccionan al estado de la aplicación.

|Nombre|Descripción|
|:-----|:----------|
|`v-if`|Renderiza condicionalmente un bloque de HTML si la expresión es verdadera.|
|`v-else-if`|Renderiza condicionalmente un bloque HTML si la expresión anterior es falsa.|
|`v-else`|Renderiza un bloque de HTML si todas las condiciones anteriores son falsas.|
|`v-show`|Muestra u oculta un elemento basado en una condición (usando `display: none`).|

```vue
<p v-if="showMessage">!Hola!</p>
<p v-else>No hay mensaje.</p>
```
{: .nolineno .bgerr }

## __Renderizado Iterativo__

Las directivas de iteración permiten **mostrar colecciones de datos** de manera dinámica (por ejemplo, mostrar datos de un array).

|Nombre|Descripción|
|:-----|:----------|
|`v-for`|Itera sobre una lista y renderiza un bloque de HTML para cada elemento.|

{% raw %}
```vue
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```
{: .nolineno }

## __Manejo de Eventos__

Las directivas de manejo de eventos permiten **escuchar eventos del DOM** (como clics, entradas de teclado o cambios en un campo de texto), y ejecutar métodos en respuestas.

|Nombre|Descripción|
|:-----|:----------|
|`v-on`|Escucha eventos del DOM y ejecuta métodos cuando ocurren.|

```vue
<button @click="handleClick">Haz clic</button>
```
{: .nolineno .bgerr }

> El uso de `@` es una abreviatura de `v-on`. Por ejemplo, `@click` es equivalente a `v-on:click`
{: .prompt-info }

## __Optimización__

Las directivas de optimización están diseñadas para mejorar el rendimiento de la aplicación. Permiten controlar cómo Vue.js compila y renderiza los elementos, evitando actualizaciones innecesarias.

|Nombre|Descripción|
|:-----|:----------|
|`v-pre`|Omite la compilación de Vue para un elemento y sus hijos.|
|`v-cloak`|Oculta el contenido hasta que Vue termine de compilar el componente.|
|`v-once`|Renderiza un elemento o componente solo una vez (no se actualiza).|
|`v-memo`|Memoriza un subárbol del DOM para optimizar renderizados repetidos.|

```vue
<div v-pre>{{ Esto no será compilado }}</div>
<div v-cloak>{{ message }}</div>
```
{% endraw %}
