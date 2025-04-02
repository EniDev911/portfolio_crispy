---
title: "Crear una aplicación de Vue 3"
author: enidev911
categories: [Desarrollo Web, "Vue"]
tags: [desarrollo web, vue]
---

Para crear un nuevo proyecto de Vue, se recomienda utilizar `npm`, que no es más que el gestor de dependencias de Node.js, en este sentido npm nos automatizará la tarea de instalar librerías y paquetes en aplicaciones javascript, de modo que no tengamos que preocuparnos de hacerlo manualmente.

## __Creando un nuevo proyecto__

Para comenzar, solo tenemos que abrir una nueva Terminal o Símbolo de sistema en alguna ubicación del sistema. Luego escribe el siguiente comando:

```terminal
npm create vue@latest
```

Al ejecutar el comando, nos puede solicitar instalar el paquete **create-vue**, que es el asistente que se encargará de crear la estructura de carpetas del proyecto de vue y dejarlo listo para empezar:

{% capture install_create_vue %}
<span class="hl">$ npm create vue@latest</span>
Need to install the following packages:
<span class="hl">  create-vue@3.15.1</span>
Ok to proceed? (y) _
{% endcapture %}

{% include terminal-wrapper.html content=install_create_vue %}

Una vez instalado, nos aparecerá el asistente para comenzar la configuración. Las opciones son las siguientes:

```
Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /home/manz/vue3-project...

Done. Now run:

  cd vue-folder
  npm install
  npm run format
  npm run dev

```
{: .nolineno .noheader }

Debemos marcar las opciones que nos intersa para que el asistente instale y preconfigure los paquetes necesarios para el proyecto.

## __Instalación de ESLint__

[ESlint](https://eslint.org/){:target='_blank'} es un linter de código javascript, que una vez instalado, el editor donde programamos y escribimos código estará preparado para revisar nuestro código en tiempo real y avisarnos de posibles errores, problemas con el código o fragmentos que escribamos mal. **Vue 3** lo configura por defecto.

## __Comenzar el Proyecto__

Una vez decidido que complementos vamos a utilizar y hemos respondido cada una de las preguntas 
Antes de profundizar en la configuración del proyecto, veamos un pequeño ejemplo de un **componente en Vue**:

{% raw %}
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
{: .nolineno .bgerr }

Para explicarte tan solo las partes que son propias de Vue en este código:

- `<script setup>` → Es la nueva forma simplificada de definir lógica del componente en Vue 3.
- `ref()` → Se usa para crear una variable reactiva en Vue.
- `{{ mensaje}}` → Es la sintaxis de **interporlación**, que permite mostrar valores en el HTML.
- `@click="cambiarMensaje"` → Usa la directiva `@click` para ejecutar una función cuando el usuario haga clic en el botón.

> Si lo comparamos con React, Vue no necesita JSX ni configuraciones complejas, si lo comparamos con Angular, No requiere TypeScript obligatorio ni estructuras rígidas.
{: .prompt-info }

## __Directivas__

Vue usa **directivas** para añadir funcionalidad especial a los elementos HTML. Algunas de las más conocidas son:

- `v-if` → Renderiza un elemento solo si se cumple una condición.
- `v-for` → Se usa para renderizar listas de datos.
- `v-bind` → Une atributos HTML con datos de Vue.
- `v-model` → Vincula datos con elementos de formularios.

### __Ejemplo Básico de v-if__

En este ejemplo, tenemos un botón que alterna la visibilidad de un mensaje.

```vue
<template>
  <div>
    <button @click="mostrarMensaje = !mostrarMensaje">
      {{ mostrarMensaje ? 'Ocultar' : 'Mostrar' }} Mensaje
    </button>

    <p v-if="mostrarMensaje">!Este mensaje se muestra con v-if!</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  
  const mostrarMensaje = ref(false);
</script>
```
{: .nolineno .bgerr }


### __Ejemplo Básico de v-for__

Supongamos que tenemos una lista de nombres y queremos mostrarlos en una lista desordenada `<ul>`:

```vue
<template>
  <div>
    <h2>Lista de nombres:</h2>
    <ul>
      <li v-for="(nombre, index) in nombres" :key="index">
        {{ index + 1 }} - {{ nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Lista de nombres
  const nombres = ref(['Ana', 'Carlos', 'Elena', 'Pedro', 'Luis'])
</script>
```
{: .nolineno .bgerr }

### __Ejemplo Básico de v-bind__

En este ejemplo, usaremos `v-bind` para cambiar dinámicamente el `src` de una imagen y el `href` de un enlace:

```vue
<template>
  <div>
    <h2>Ejemplo de v-bind</h2>

    <!-- Enlace dinámico -->
    <a :href="url" target="_blank">Visitar página</a>

    <!-- Imagen dinámica -->
     <img :src="imagen" alt="Imagen dinámica" width="200" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Datos reactivos
const url = ref('https://vuejs.org');
const imagen = ref('https://vuejs.org/images/logo.png');
</script>
```
{: .nolineno .bgerr }

- `:href="url"` → Enlaza el atributo `href` con la variable `url`.
- `:src="imagen"` → Enlaza el `src` de la imagen con la variable `imagen`.

### __Ejemplo Básico de v-model__

```vue
<template>
  <div>
    <h2>Ejemplo de v-model</h2>

    <!-- Campo de entrada -->
    <input v-model="nombre" placeholder="Escribe tu nombre" />

    <!-- Mostrar el valor del input en tiempo real -->
    <p>Hola, {{ nombre }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Variable reactiva
const nombre = ref('');
</script>
```
{: .nolineno .bgerr }

- `v-model="nombre"` → Enlaza el input con la variable `nombre`. **Cada vez que el usuario escriba en el input**, el valor de `nombre` cambiará automáticamente y se reflejará en la interfaz sin necesidad de eventos adicionales.
{% endraw %}