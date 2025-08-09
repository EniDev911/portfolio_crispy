---
layout: post
title: "¿Qué es Husky y cómo configurarlo en tu proyecto Git?"
categories: [Kit Tools, Git]
tags: [git, husky, hooks, automatización, desarrollo]
---


Git proporciona una serie de _hooks_ predefinidos, y puedes personalizarlos para satiafacer las necesidades de tu flujo de trabajo


¿Alguna vez te ha pasado que alguien hace un *commit* sin pasar los linters o rompe el código porque no corrió las pruebas?

Aquí es donde entra **Husky** 🐶, una herramienta que ayuda a mantener tu proyecto limpio y saludable desde el momento en que alguien hace un commit.

## 🐶 ¿Qué es Husky?

**Husky** es una herramienta de **JavaScript** que te permite **agregar fácilmente Git hooks** a tu proyecto.

Un *Git hook* es un script que se ejecuta automáticamente en momentos específicos del ciclo de vida de Git, como __antes de un commit o push__.  
Husky facilita mucho el trabajo con hooks, especialmente para cosas como:

- Ejecutar linters antes de hacer *commit*
- Correr pruebas antes de hacer *push*
- Evitar *commits* mal formateados
- Validar convenciones de mensajes de commit

## Instalación y configuración

A continuación te muestro cómo puedes configurar Husky en tu proyecto:

### 1. Prerrequisitos

- `git` y `Node.js` instalados

```bash
git --version
node -v
```

### 2. Inicializar un proyecto

En caso de que estás trabajando con un proyecto con JavaScript, lo más probable es que ya tengas un archivo `package.json`, sino puedes inicializar uno con el siguiente comando:

```terminal
npm init -y
```

