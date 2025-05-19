---
title: "VsCode : Archivo de Configuración"
categories: [Kit Tools, VsCode]
---

El editor de configuración es la interfaz de usuario que permite revisar y modificar los valores de configuración que se almacenan en el archivo setting.json.

## __¿Dónde está el archivo de configuración?__

Puedes acceder al archivo de configuración directamente desde VS Code:

1. Abre la paleta de comandos con <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.
2. Escribe __"Preferences: Open Settings (JSON)"__ y selecciona esa opción.

El archivo `settings.json` es el archivo principal donde se almacenan las preferencias del usuario en VS Code. Desde allí puedes ajustar el comportamiento del editor, habilitar extensiones, configurar formatos, y personalizar tu flujo de trabajo.

Si prefieres trabajar directamente sobre el archivo `settings.json`, se puede establecer la siguiente opción:

```js
"workbench.settings.editor": "json"
```
{: .nolineno file='settings.json' }

El archivo `settings.json` viene con __intelliSense__ incorporado, lo que significa que tiene autocompletado inteligente y sugerencias. A continuación vemos un poco las opciones de diferentes tipos que podemos cambiar:

### __Opciones de formato__

```js
  "editor.formatOnPaste": true, // Formatea el código al guardar
  "editor.formatOnSave": true,  // Formatea una línea después de escribirla
  "editor.formatOnType": true,  // Formatea una línea después de escribirla
```
{: .nolineno file='settings.json' }

### __Opciones de fuente__

```js
"editor.fontSize": 18,                             // Tamaño de fuente de 18px
"editor.fontFamily": "'Cascadia code', monospace", // Familia de la fuente
"editor.fontLigatures": true,                      // Activa las ligaduras para las fuentes que lo soportan
```
{: .nolineno file='settings.json' }

### __Opciones del cursor__

```js
"editor.cursorStyle": "line-thin",        // Estilo del cursor: línea delgada
"editor.cursorBlinking": "blink",         // Animación del cursor
"editor.hideCursorInOverviewRuler": true, // Oculta la marca del cursor en el editor
```
{: .nolineno file='settings.json' }

### __Opciones para personalizar el espacio de trabajo__

```js
"workbench.colorCustomizations": {
    "statusBar.background": "#FFD166", // Cambia el color de fondo de la barra de status
    "statusBar.foreground": "282B39",  // Cambia el color del primer plano de la barra de status
    "editor.foreground": "#ffb191",   // Cambia el color de primer plano que no es afectado por la sintaxis 
    "editorLineNumber.foreground": "#00ff00", // Cambia el color del número de línea del editor
}
```
{: .nolineno file='settings.json' }