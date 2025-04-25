---
title: "Windows : Archivos Desktop.ini"
categories: ["Sistemas Operativos", "Windows"]
---

¿Sabías que puedes **cambiar el ícono de tus carpetas** y que esa personalización se mantenga incluso en **discos externos**? 🚀  
Sí, y todo gracias a un archivo oculto que casi nadie conoce: **`Desktop.ini`**.

## __¿Qué es un archivo Desktop.ini?__

Es un archivo de configuración (oculto por defecto) que Windows usa para recordar cómo debe verse una carpeta. Es como un "maquillaje" de tus carpetas. Este archivo te permite lo siguiente:

- Le dice al sistema qué __ícono__ usar.
- Puede cambiar el __nombre que se muestra__ (aunque el nombre de la carpeta no cambie).


📁 **Organizar tu disco como un profesional:**

¿Tenés un disco duro externo con carpetas para música, backups, proyectos o videos? Ponerles íconos distintos te permite identificarlas **al instante**, sin leer nombres.

### __¿Cómo lo hacés?__

1. Eliges una carpeta y sobre ella haces __clic derecho__ → __Propiedades__ → __Personalizar__.
2. Selecciona __"Cambiar ícono"__ y asigna uno.
3. Windows creará automáticamente el archivo `Desktop.ini` dentro de esa carpeta.
4. ¡Listo! Incluso si te llevás esa carpeta en un pendrive o disco externo, **la personalización viaja contigo** (si se mantienen los íconos).

Si no puedes ver este archivo, debes ir a panel de control y cambiar la vista a íconos pequeños y __selecciona opciones del explorador de archivos__:

![panel de control](windows/pdc-opciones-del-explorador-de-archivos.webp)

Y luego desmarca la casilla __"ocultar archivos protegidos del sistema"__:

![desmarcar opción](windows/ocultar-archivos-protegidos-del-sistema.webp)

### ⚠️ __Tip para que funcione bien en discos externos__

- Asegurate de que el ícono esté **dentro de la misma carpeta** o en una ruta accesible desde el mismo dispositivo.
- Podés copiar un archivo `.ico` personalizado y enlazarlo desde `Desktop.ini`.

Ejemplo de contenido de un `Desktop.ini`:

```ini
[.ShellClassInfo]
IconResource=icono.ico,0
```

### 😎 En resumen:

`Desktop.ini` no es basura ni algo que borrar. Es un pequeño genio oculto que te permite tener un **sistema visual personalizado y más organizado**, ideal para creativos, organizados, y amantes del orden.