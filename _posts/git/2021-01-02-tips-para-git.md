---
title: "Tips para acciones de limpieza en Git"
categories: ["Git", "Extras"]
---


## Eliminar ramas

A medida que trabajamos en un proyecto con Git, es habitual crear ramas para desarrollar nuevas funcionalidades, corregir errores o probar ideas.

Sin embargo, si no las eliminanos después de cumplir con su propósito, el repositorio puede llenarse de ramas obsoletas, lo que complica la navegación, genera confusión y puede llevar a errores como posiblemente estar trabajando sobre una rama equivocada. Para mantener limpio nuestro flujo de trabajo sigue estos consejos:

### Eliminar ramas locales que ya no usas

Cuando terminas una tarea y haces merge, a veces dejas ramas locales olvidadas que no las vuelves a usar. Para borrarlas:

```terminal
git branch -d nombre-rama
```

Si aún no fue fusionada y estás seguro de eliminarla usa:

```terminal
git branch -D mombre-de-la-rama
```

__Demostración__:

{% include embed/video.html src="git-merge-and-delete-branch.webm" %}

### Eliminar ramas remotas que ya no existen

Para sincronizar tu lista de ramas remotas y eliminar referencias muertas:

```terminal
git remote prune origin
```

Esto limpia las ramas remotas que ya fueron eliminadas en el servidor.


## Limpiar archivos no trackeados

En ocasiones, puede ocurrir que necesitemos limpiar nuestro directorio de trabajo de todo aquello que no hemos trackeado (rastreado).

### ¿Qué son archivos no trackeados?

Son aquellos que existen en tu directorio de trabajo pero que no han sido añadido al staging con `git add`. Por ejemplo: archivos temporales, binarios generados, carpetas de caché, etc.

### Verificar antes de eliminar

Antes de ejecutar cualquier acción destructiva, es buena práctica hacer un __simulacro__ para ver exactamente qué se eliminará. Con el siguiente comando, puedes ver exactamente qué archivos se van a borrar:

```terminal
git clean --dry-run
```

{% include embed/video.html src="git-clean-dry-run.mp4" %}

Como puedes ver, Git __simula la limpieza__ y te muestra qué archivos serían eliminados si ejecutaras el comando `git clean -f` ().

> El flag `--dry-run`, nos da la oportunidad de revisar los archivos y asegurarte de que no vas a perder nada importante.
{:.prompt-tip}

Una vez que confirmas que todo está bien, puedes ejecutar el comando real:

```terminal
git clean -fd
```

{% include embed/video.html src="git-clean-execute.mp4" %}

