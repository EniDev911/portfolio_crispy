---
title: "Ignorar archivos"
icon: "fab fa-git-alt"
categories: ["Git", "Básico"]
---

Cuando estas trabajando con Git, a menudo tendrás archivos que no deseas que Git este siguiendo automáticamente. Por lo general, se trata de archivos generados automáticamente, como archivos de registro o archivos producidos por un sistema de compilación. En tales casos, Git nos da la posibilidad de ignorar cualquier tipo de archivos usando nombres de archivos o patrones que coincidan con los nombres.

El archivo `.gitignore` generalmente es un archivo que se crea en la raíz de un proyecto. También puedes crear archivos `.gitignore` globales, y cualquier entrada o patrones que tenga en ese archivo, se aplicará para todos tus repositorios de Git.

A continuación, te muestro como luce más menos un archivo `.gitignore` y con algunos comentarios para saber que tipos de archivos está ignorando específicamente esa entrada:


```bash
# La siguiente entrada, ignora todos los archivos con extensión `.a`
# en el directorio raíz
*.a

# La siguiente entrada, ignora todos los archivos dentro de la carpeta `TODO`
# en el directorio raíz, pero no en los subdirectorios
/TODO

# La siguiente entrada, ignora todos los archivos en cualquier directorio
# llamado `build`
build/

# ignora doc/notes.txt,
# pero no ignora doc/day6/notes.txt
doc/*.txt

# La siguiente entrada, ignorar todos los archivos .pdf en el directorio `doc/`
# y sus subdirectorios
doc/**/*.pdf
```
{:file=".gitignore"}

> Te recomiendo el siguiente [repositorio](https://github.com/github/gitignore){:target='_blank'} donde encontrarás una colección de plantillas para tus archivos `.gitignore`
{: .prompt-tip }

Cada línea de un archivo `.gitignore` específica un patrón o nombre de una ruta o archivo. Al decidir si ignorar una ruta, Git normalmente verifica los patrones de múltiples fuentes, con el siguiente orden de procedencia, de mayor a menor (dentro de un nivel de precedencia, el último patrón coincidente decide el resultado).