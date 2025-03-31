---
title: "Vue 3: Introducción"
author: enidev911
categories: [Desarrollo Web, "Vue 3"]
tags: [desarrollo web, vue]
---

Vue.js es un framework para crear interfaces de usuario, o en otras palabras, se trata de una capa añadida de javascript formada por herramientas, convenciones de trabajo y nos permite crear aplicaciones de forma rápida, agradable, sencilla y muy práctica.

**Vue** es un framework frontend, si vienes de framework del estilo **Laravel** (PHP), **Ruby on Rails** (Ruby), **Django** (Python) u otros framework de backend, te encontrarás múltiples diferencias. En los últimos años se ha popularizado la cración de **aplicaciones de tipo SPA** (Single Page Application), que es la categoría donde se encuentra Vue, React, Angular, etc...


## __¿Qué es Vue.js?__

Vue.js es un **framework progresivo** de javascript que permite desarrollar **interfaces de usuario interactivas** de manera sencilla y agradable. Se basa en el concepto de **componentes**, lo que facilita la cración de interfaces modulares y reutilizables.

## __Principales Ventajas de Vue__

Quizás, la pregunta más frecuente cuando hablamos de **frameworks de javascript** es **¿Por qué Vue y no otro?**. La respuesta a esta pregunta es subjetiva. Para ello, revisemos algunas de sus características:

- La **curva de aprendizaje** es, con diferencia, las más sencilla en comparación con otros frameworks como Angular o React.
- Se trata de un **framework amigable** con las tecnologías de frontend y los estándares. Utiliza HTML, CSS y javascript y es compatible con [WebComponents](https://www.webcomponents.org/){:target='_blank'}. Esto significa, que si tienes una base fuerte de HTML/CSS, muy probablemente te guste más **Vue** que otras opciones.
- Depuración Avanzada (Vue Devtools) con la llegada de **Vue 3y Vite**, las Vue DevTools ahora vienen integradas en los proyectos durante el desarrollo, sin necesidad de instalar extensiones en el navegador.

> Como vez, la principal ventaja de Vue es su **curva de aprendizaje suave**. Su sintaxis es clara y fácil de entender, incluso para principiantes en desarrollo frontend.
{: .prompt-info }

## __Ecosistema de Vue__

El ecosistema de Vue, está formado por varias herramientas, donde cada una se encarga de tareas concretas. Sus herramientas principales son:

|Herramienta|Descripción|
|:----------|:----------|
|**Vue**|El core o núcleo del framework Vue, donde se encuentran sus funciones principales.|
|**create-vue**|El asistente para crear y administrar proyectos de Vue desde una terminal con Vite.|
|**Vue Router**|Sistema para crear y gestionar rutas URL desde el navegador en una aplicación Vue.|
|**Pinia**|Gestor de estados para aplicaciones SPA Vue de nueva generación.|
|**Vuex**|Gestor de estados para aplicaciones SPA de Vue legacy.|

## __Ejemplo Básico de un Componente en Vue 3__

Antes de profundizar en la configuración del proyecto, veamos un pequeño ejemplo de un **componente en Vue 3**:


```vue
<script setup>
import { ref } from 'vue';

// Definimos una variable reactiva
const mensaje = ref('¡Hola, Vue!');

// Función para cambiar el mensaje
const cambiarMensaje = () => {
  mensaje.value = '¡Vue es lo máximo!';
};
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="cambiarMensaje">Cambiar mensaje</button>
</template>
```
{: .nolineno }

Para explicarte tan solo las partes que son propias de Vue en este código:

- `<script setup>` → Es la nueva forma simplificada de definir lógica del componente en Vue 3.
- `ref()` → Se usa para crear una variable reactiva en Vue.
- `{{ mensaje}}` → Es la sintaxis de **interporlación**, que permite mostrar valores en el HTML.
- `@click="cambiarMensaje"` → Usa la directiva `@click` para ejecutar una función cuando el usuario haga clic en el botón.

> Si lo comparamos con React, Vue no necesita JSX ni configuraciones complejas, si lo comparamos con Angular, No requiere TypeScript obligatorio ni estructuras rígidas.
{: .prompt-info }

Vue 3 tiene un **ecosistema completo** equipado 
