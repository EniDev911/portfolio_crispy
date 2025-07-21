---
title: "El cliente gráfico DB BROWSER"
categories: [Bases de Datos Relacionales, SQLite]
tags: [Bases de Datos Relacionales, SQLite]
image:
  path: posters/dbbrowser-for-sqlite.webp
  lqip: data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACQAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJQBOgAzfTUwCEJ4QAAP6RpW7O3uePDkFph6RURYdw7esdbmIp4it19EOQM4vxOnJ/823k64BxaG30SFFLgSThwyhqihLgAAA=
---

[DB Browser for SQLite](https://sqlitebrowser.org/){:target='_blank'} es un software de código abierto que nos permite administrar, procesar y explorar bases de datos SQLite de forma visual e intuitiva.

Es una herramienta ideal tanto para crear prototipos o estudiantes que empiezan a trabajar con bases de datos. Su interfaz gráfica facilita tareas comunes como crear tablas, insertar datos, ejecutar consultas y visualizar resultados sin necesidad de escribir demasiado código SQL. En este artículo vamos a aprender a cómo usarlo para realizar tareas básicas como crear bases datos, tablas, insertar registros, importar y exportar datos de diferentes fuentes, entre otras cosas.

### __Instalación DB Browser for SQLite__

Instalar __DB Browser for SQLite__ es muy sencillo y está disponible para los principales sistemas operativos.

{% tabs install_dbbrowser %}
{% tab install_dbbrowser windows %}
Para Windows, descargue los binarios desde [la página oficial](https://sqlitebrowser.org/dl/){:target='_blank'} y sigue las instrucciones para la instalación.
{% endtab %}
{% tab install_dbbrowser macos %}
```terminal
brew install --cask db-browser-for-sqlite
```
{% endtab %}
{% tab install_dbbrowser linux %}
```terminal
sudo apt install sqlitebrowser
```
{% endtab %}
{% endtabs %}

### __Crear una Base de Datos__

Ahora, cuando abres el programa y quieres crear una base de datos, solo debes realizar dos pasos:

1. Presionar el botón <kbd>New Database</kbd>.
2. Eligir el destino donde se almacenará el archivo de base de datos y dar un nombre.

![New database DB Browser](sqlite/db-browser-new-database.webp)

### __Crear una tabla__

Una vez que hayas creado tu base de datos, puedes comenzar de inmediato creando tu primera tabla. A continuación se muestra un ejemplo de cómo hacerlo:

![Crear una nueva tabla](sqlite/db-browser-add-table.webp)

1. Establece un nombre para la tabla.
2. Añadir nuevas columnas para la tabla actual.

### __Añadir Columnas__

Cuando das clic en "Add" para agregar una nueva columna, se añadirá el recuadro que permite configurar esa columna. A continuación se muestra un ejemplo:

![Añadir una nueva columna](sqlite/db-browser-add-column.webp)

Cuando terminas de agregar las columnas necesarias, presiona el botón "Ok" para crear las columnas:

![Añadir columnas](sqlite/db-browser-add-column2.webp)

1. Se definen 3 columnas para la tabla; nombre, apellido, celular. Cada una de ella de tipo texto con longitudes limitadas.
2. El código SQL generado en relación a las acciones anteriores.
3. Al dar clic en aceptar se crea la tabla en el archivo de base de datos.

## __Examinar y Agregar Datos__

Al acceder a la pestaña "Browse Data" (Explorar datos), podremos visualizar los encabezados de las columnas, así como otros elementos relevantes de la tabla, como los registros almacenados:

![Examinar datos](sqlite/db-browser-browse-data.webp)

1. El botón que permite añadir un nuevo registro.
2. Por defecto se presenta una fila con valores `NULL`, valores que podemos editar directamente dando clic en cada casilla.
3. El área para editar las celdas además nos da la posibilidad de importar, exportar y previsualizar la información que queramos ingresar.

Una vez editadas las filas con información en cada celda, podemos actualizar la tabla con los nuevos registros con el botón <kbd>Write Changes</kbd> o usando el atajo de teclado <kbd>Ctrl</kbd> + <kbd>S</kbd>.

![Guardar cambios](sqlite/db-browser-write-changes.webp)

## __Importar datos en DB Browser__

Una forma rápida de poblar tablas en DB Browser es utilizando la opción de __importar datos__ desde un archivo externo, como un CSV. Esto permite agregar múltiples registros de manera masiva sin necesidad de escribir cada uno manualmente.

Antes de comenzar a importar, puedes usar este [archivo CSV](https://raw.githubusercontent.com/EniDev911/assets/refs/heads/main/data/csv/banco.csv){:target='_blank'} y guardarlo en tu equipo presionando <kbd>Ctrl</kbd> + <kbd>S</kbd>. Luego en DB Browser, dirígete al menú y selecciona la opción "Import" > "Table from CSV file...":

![Importar CSV](sqlite/db-browser-import-csv.webp)

Luego, revisa las opciones que vienen marcadas y ajustala al formato específico del archivo cargado:

![Detalles del CSV](sqlite/db-browser-detail-csv.webp)

1. __Configuración de opciones al importar__:
    - __Nombre de la tabla__: por defecto pone el nombre del archivo que se carga.
    - __Usar nombres de columna__: habilita la opción para que DB Browser tome la primera fila como encabezados. En la mayoría de los casos, debe estar activada.
    - __Separador de campo__: asegúrate de que sea el correcto (por ejemplo, `,` o `;`). El previsualizador ayuda mostrando las filas como se verán al importar.
    - __Formato de codificación__: define la codificación del archivo (idealmente `UTF-8`).
2. __Vista previa__: muestra los primeros 19-20 registros del archivo para verificar que la estructura sea correcta.
3. __Resultado__: se crea la tabla con todos los registros contenidos en el archivo CSV.

## __Crear Vistas__

En caso de que no sepas que es una vista, una vista es simplemente un conjunto de resultados de una consulta almacenada. Una vista es una forma de empaquetar una consulta en un objeto con nombre que se almacena en la base de datos.

Esta tarea es un poco más avanzada que lo que vimos anteriormente sobre DB Browser, sin embargo aplicando algunos pasos sencillos, puedes crear vistas sin problemas. Para ello, cambiate al área de explorador de datos y selecciona una tabla, ideal una que tenga muchos registros como la que importaste desde el CSV (del banco) y aplica algunos filtros:

![aplicar filtros](sqlite/db-browser-browse-data-filter.webp)

En el área de filtros, se pueden aplicar distintos criterios para filtrar los datos:

1. Que la columna `Puntaje_Credito` sean clientes que tengan más de 750 puntos.
2. Que la columna `Pais` sean clientes de Francia.
3. Que la columna `Edad` sean clientes entre 20 y 40 años de edad.

Ahora, puedes exportar esta presentación de los datos como una vista:

![Guardar como una vista](sqlite/db-browser-save-as-view.webp)

Luego, debes asignar un nombre a la vista y esta se creará. Podrás encontrarla como un objeto de tipo "views" almacenado en la base de datos:

![Vista creada](sqlite/db-browser-view-created.webp)


{% include circle-line.html %}

DB Browser for SQLite es una herramienta simple pero poderosa para trabajar con bases de datos SQLite de forma visual. Ideal para crear, importar y administrar tus datos o cuando necesitas explorar datos sin depender de una línea de comandos.