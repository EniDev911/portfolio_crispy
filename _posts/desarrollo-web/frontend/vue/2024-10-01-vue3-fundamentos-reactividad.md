---
title: "Vue 3: Fundamentos de Ractividad"
author: enidev911
categories: [Desarrollo Web, "Vue 3"]
tags: [desarrollo web, vue]
---


## __¿Qué es la Reactividad?__

La reactividad en Vue significa que los datos y la interfaz de usuario están **vinculados dinámicamente**. Cuando un dato cambia, Vue detecta el cambio y actualiza automáticamente el DOM.

### __Ejemplo Básico de Reactividad__

Vamos a ver un ejemplo típico de contador para analizar la reactividad:

{% raw %}
```vue
<script setup>
import { ref } from 'vue';

const contador = ref(0);

const incrementar = () => {
  contador.value++;
}
</script>

<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>
```
{: .nolineno .bgerr }

- `ref(0)` crea una variable reactiva con un valor inicial de 0.
- `incrementar()` cambia el `contador.value`, la interfaz se actualiza automáticamente.

## __Principales Herramientas de reactividad en Vue 3__

### __1. Variables Reactivas con ref()__

`ref()` se usa para crear **valores reactivos primitivos** (números, strings, booleanos, etc). Ejemplo:

```vue
<script setup>
import { ref } from 'vue';

const mensaje = ref('¡Hola, esto es Vue 3!');
</script>

<template>
  <p>{{ mensaje }}</p>
</template>
```
{: .nolineno }

> Con `ref()` siempre se accede/modifica con `.value`, por ejemplo: `mensaje.value = 'Nuevo Mensaje'`.
{: .prompt-info }
{% endraw %}
