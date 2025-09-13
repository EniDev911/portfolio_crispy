---
title: "Windows : Administrador de Discos"
categories: ["Sistemas Operativos", "Windows"]
image:
    path: posters/windows-administrador-de-discos.webp
    lqip: data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAACQAwCdASoUAAsAPzmGulQvKSWjMAgB4CcJZQAAW9NUnUZxKfBAAP7ankW4ehdlsW8jCat4BJIuI/7bfFz5Z+6hK2sjYshOdXXjKTajR+AAAA==
---

El __Administrador de discos__ es una __herramienta del sistema__ incluida en Windows que te permite ver y administrar todos los discos y particiones conectados a la computadora.

> __Importante__: Aunque el Administrador de discos permite __crear__, __borrar__ y __formatear particiones__, esta guía es solo para exploración y aprendizaje. No hagas cambios si no estás seguro, ya que podrías perder datos.
{: .prompt-warning }

## Cómo abrir el Administrador de Discos

Es muy sencillo, puedes simplemente presionar <kbd>Win</kbd> + <kbd>R</kbd> y escribe lo siguiente: `diskmgmt.msc` y presiona <kbd>Enter</kbd>.

![abrir el administrador](windows/abrir-diskmgmt.webp){: style="width: 330px"}

### 1. Lista de Vólumenes

Una vez abierta la herramienta, verás una lista de cada unidad (por ejemplo `C:`, `D:`, `E:`), su tipo de sistema de archivos (`NTFS`, `FAT32`), capacidad de espacio libre, y su estado.

![Lista de vólumenes](windows/lista-de-volumenes.webp)

### 2. Vista Gráfica

En esta parte verás los discos físicos representados como __"Disco 0"__, __"Disco 1"__, etc. Cada uno muestra sus particiones como bloques horizontales. Puedes ver lo siguiente:

![Vista Gráfica](windows/vista-grafica-administrador-de-discos.webp)

En cada disco, se puede ver el color que indica lo siguiente:

- El espacio usado (en azul).
- El espacio no asignado (en negro).

## ¿Qué es una Partición?

Una partición es como dividir tu disco en __"secciones"__. Aunque físicamente sea un solo disco, Windows puede tratar cada partición como una unidad independiente (por ejemplo, `C:`, `D:`, `E:`).

### Crear una nueva partición

Primero, debes tener un espacio __no asignado__ disponible, luego hacer clic derecho sobre él para seleccionar __"Nuevo volumen Simple"__

![Nuevo volumen simple](windows/nuevo-volumen-simple-administrador-de-discos.webp)

Ahora a seguir el asistente:

![Asignar tamaño](windows/asignar-tamanio-particion.webp){:style="width: 510px"}
_Asignar tamaño a la nueva artición_

![Asignar letra a la partición](windows/asignar-letra-particion.webp){: style="width: 510px"}
_Asignar letra a la nueva partición_

![Asignar tipo y etiqueta](windows/asignar-tipo-y-label-de-particion.webp){: style="width: 510px"}
_Asignar tipo y etiqueta a la nueva partición_

> Dale un nombre si quieres (por ejemplo: __"Mis cosas"__) y marca __"formato rápido"__.
{: .prompt-info }

![Resumen de la nueva partición](windows/resumen-nueva-particion.webp){: style="width: 510px"}
_Resumen de la nueva partición que se creará_

Listo. Ahora tenemos una nueva partición para almacenar nuestros archivos. Aparecerá como __una nueva unidad en el Explorador de archivos__.

![Nueva partición creada](windows/nueva-particion-explorar-de-archivos.webp){:style='border: 2px solid #ccc'}
_Nueva partición creada_

> Es una __Buena práctica__ separar tus archivos del sistema operativo. Si Windows falla y necesitás reinstalarlo, puedes formatear solo la unidad `C:` sin borrar tus archivos, que están en la nueva partición.
{: .prompt-tip }

{% include circle-line.html %}

El __Administrador de discos__ es una herramienta muy útil para visualizar y comprender el estado de almacenamiento en tu __PC__. No necesitas ser un técnico para empezar a usarla; con solo abrirla y explorar un poco, ya puedes aprender mucho.
