---
title: "Módulo Pathlib"
author: enidev911
categories: [Python, Módulos]
mermaid: true
---


Este módulo incluido en Python es para trabajar con las rutas del sistema de archivos. Las clases que contiene este módulo se dividen entre **rutas puras**, que proporcionan operaciones computacionales sin **E/S**; y **rutas concretas**, que heredan de las rutas puras pero también proporcionan operaciones de **E/S**.

```mermaid
graph BT
    A[PurePath]
    F[Path]
    B[PurePosixPath]
    C[PureWindowsPath]
    D[PosixPath]
    E[WindowsPath]
    B --> A
    F --> A
    C --> A
    D --> B
    E --> C
    D --> F
    E --> F
```

Las rutas puras son útiles en algunos casos concretamente:

1. Si deseas manipular rutas de Windows en una máquina Unix (o vicecersa). No puedes crear una instancia de **WindowsPath** cuando se ejecuta en Unix, pero se puede crear una instancia de **PureWindowsPath**.

### Uso básico


```py
from pathlib import Path

p = Path('.')
```

## Rutas puras

Los objetos de ruta pura proporcionan operaciones de manejo de rutas que en realidad no acceden al sistema de archivos.


### *class* pathlib.PurePath(\*pathsegment)

Una clase genérica que representa la familia de rutas del sistema (al crear la instancia se crea **PurePosixPath** o **PureWindowsPath**). Cada elemento de los segmentos de rutas (*pathsegment*) puede ser una cadena que represente un segmento de la ruta o un objeto que implementa la interfaz `os.PathLike` donde el método `__fspath__()` devuelve una cadena, como otro obejto de ruta:


```py
from pathlib import PurePath

p = PurePath('parent', 'child')
print(p)
```

Ejecutado en Unix:
```
parent/child
```
{: .nolineno .noheader }
Ejecutado en Windows:
```
parent\child
```
{: .nolineno .noheader }

> Cuando `*pathsegment` está vacío, se asume el directorio actual.
{: .prompt-info }

En Windows, los separadores no se repiten cuando se hace lo siguiente:

```py
from pathlib import PureWindowsPath

p = PureWindowsPath('C:/Windows', '/Program Files')

print(p)
```

```
C:\Program Files
```
{: .nolineno .noheader }

Las rutas de diferentes familias no son iguales:

```py
from pathlib import PureWindowsPath, PurePosixPath

print(PureWindowsPath('foo') == PurePosixPath('foo'))
```

### Descomponer una ruta en partes

Podemos acceder a las **partes** (componentes) individuales de una ruta, usamos la propiedad `parts`.

```py
from pathlib import PurePath

p = PurePath('/foo/bar')
print(p.parts)
```

En Windows:

```
('\\', 'foo', 'bar')
```
{: .nolineno .noheader }
En Unix:

```
('/', 'foo', 'bar')
```
{: .nolineno .noheader }


## Métodos y propiedades


#### PurePath.drive

Retorna una cadena que representa la letra o el nombre de la unidad que corresponda:

```py
from pathlib import PureWindowsPath

p = PureWindowsPath('c:/Program Files/')

print(p.drive)
```

```
c:
```
{: .nolineno .noheader }

#### PurePath.parent

EL padre lógico de la ruta:

```py
from pathlib import PurePosixPath

p = PurePosixPath('/a/b/c/d')

print(p.parent)
```

```
/a/b/c
```
{: .nolineno .noheader }


#### PurePath.name

Retorna el componente final de la ruta:

```py
from pathlib import PureWindowsPath

p = PureWindowsPath('C:/Program Files/Git/git-bash.exe')

print(p.name)
```

```
git-bash.exe
```
{: .nolineno .noheader }


#### PurePath.suffix

La extensión del archivo del componente final (si lo hay):

```py
from pathlib import PurePosixPath

p = PurePosixPath('/home/project/main.py')

print(p.suffix)
```

```
.py
```
{: .nolineno .noheader }

#### PurePath.stem

El componente final sin su extensión:

```py
from pathlib import PurePosixPath

p = PurePosixPath('/home/project/main.py')

print(p.stem)
```

```
main
```
{: .nolineno .noheader }

#### PurePath.as_posix()

Devuelve una cadena que representa la ruta con barras invertidas `/`:

```py
from pathlib import PureWindowsPath

p = PureWindowsPath("C:\\Program Files\\Git\\git-bash.exe")
print(p.as_posix())
```

```
C:/Program Files/Git/git-bash.exe
```
{: .nolineno .noheader }

---

## Rutas concretas

Las rutas concretas son subclases de las rutas puras. Además de las operaciones que proporcionan las rutas puras, también proporcionan métodos que pueden interactuar con el sistema de archivos usando los objetos de ruta.


#### class pathlib.Path(\*pathsegments)

Una subclase de **PurePath**, esta clase representa rutas concretas de la familia de rutas del sistema:

```py
from pathlib import WindowsPath

p = WindowsPath("c:\\Program Files\\Git\git-bash.exe")
```
```
c:\Program Files\Git\git-bash.exe
```
{: .nolineno .noheader }


> Solo se pueden crear instancias de la familia de clase que corresponde a su sistema operativo (permitir llamadas al sistema de archivos que no sea compatible, puede provocar errores en la aplicación)
{: .prompt-info}