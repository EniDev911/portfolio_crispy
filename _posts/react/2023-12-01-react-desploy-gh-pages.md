---
title: Deplegando Aplicación Vite + React en Gh Pages
author: enidev911
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---


### Configurar vite.config.ts

En este paso, configuraremos `Vite` para que funcione bien en GiHub Pages, ya que GitHub Pages sirve la aplicación desde un subdirectorio. Esto significa que tenemos que ajustar las rutas base en la configuración de Vite. Abrimos el archivo `vite.config.ts` en la raíz de nuestro proyecto, y configura el `base` de la siguiente manera:


```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<nombre-del-repositorio>/',  // Asegúrate de reemplazar <nombre-del-repositorio> por el nombre de tu repositorio de GitHub
});
```
{: .nolineno file="vite.config.js" }
