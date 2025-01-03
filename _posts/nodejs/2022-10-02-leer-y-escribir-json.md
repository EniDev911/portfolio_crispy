---
title: Leer y Escribir JSON
author: enidev911
categories: [Desarrollo Web, nodejs]
tags: [desarrollo web, nodejs]
---

Para leer datos JSON, node tiene el módulo **fs**. Hay 2 funciones disponibles en este módulo que podemos usar para leer archivos del sistema **readFile** y **readFileSync**. La función `readFileSync` lee los datos de un archivo de forma **síncrona**, lo que significa que esta función **bloquea la ejecución del resto del código hasta que se leen todos los datos de un archivo**, esta función es particularmente útil cuando se requiere que la aplicación cargue ajustes de configuración antes de poder realizar cualquier otra tarea.

**Ejemplo**

```javascript
'use strinct'
const fs = require('student.json');
const rawdarta
```
{: .nolineno }