---
title: "Command Line For SQLite3 (línea de comandos) para ejecutar SQL"
categories: [Bases de Datos Relacionales, SQLite]
tags: [Bases de Datos Relacionales, SQLite]
image:
  path: posters/sqlite-cli-shell.webp
  lqip: data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBUAAAABF9D/iAgQZNtMYmi7v88FIvqfSy4AVlA4IFoAAADQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJYgCdABuxpDp2c2dbBoAA/mFM6qUC24fxX3gBWhW85NEtVhEZh7nBiA92rtoJgZGSQbGINpYYi7eesK2p6wp84AA=
---

SQLite incluye una herramienta de línea de comandos simple llamado __`sqlite3`__, que permite a los usuarios interactuar directamente con bases de datos SQLite y ejecutar instrucciones SQL. Esta herramienta es especialmente útil para realizar pruebas rápidas, consultas, y tareas de administración sin necesidad de una interfaz gráfica.

Al ejecutar el comando __`sqlite3`__ seguido del nombre de una base de datos ( por ejemplo: `mi_base_de_datos.db` ), el programa __abrirá la base de datos__ especificada __o la creará si no existe__. A continuación, mostrará un breve mensaje de bienvenida y quedará en espera de que el usuario introduzca instrucciones SQL. Por ejemplo, una conexión básica a una base de datos, sería el siguiente caso:

{% capture example1 %}
<span class="hl">$ sqlite3 mi-db.sqlite</span>
SQLite version 3.40.1 2022-12-28 14:03:47
Enter ".help" for usage hints.
<span class="hl">sqlite&gt; </span>
{% endcapture %}

{% include terminal-wrapper.html content=example1 %}

## __¿Qué es la línea de comandos para SQLite3?__

La **interfaz de línea de comandos** (_Command Line Interface_) es un programa que permite interactuar con bases de datos SQLite mediante comandos SQL.

Este programa está disponible para los principales sistemas operativos ( Windows, macOS y Linux ) y puede ser descargado gratuitamente desde su [__sitio web oficial__](https://www.sqlite.org/download.html){:target='_blank'}

### __Instalar el Programa__

La instalación de SQLite3 es sencilla y varía ligeramente dependiendo del sistema operativo:

#### __En Windows__

1. Ve al sitio oficial de SQLite: [https://www.sqlite.org/download.html](https://www.sqlite.org/download.html)
2. Descarga el archivo **"sqlite-tools"** correspondiente a tu sistema (por ejemplo, `sqlite-tools-win32-x86`).
3. Extrae el archivo `.zip` en una carpeta, por ejemplo `C:\sqlite`.
4. Abre la terminal ( símbolo del sistema o PowerShell ), navega a esa carpeta y ejecuta `sqlite3` para iniciar el programa.

> __Opcional__: Agrega la ruta de SQLite a las variables de entorno para poder usarlo desde cualquier ubicación del sistema.
{: .prompt-info }

#### __En macOS__

Puedes instalar SQLite fácilmente usando Homebrew:

```bash
brew install sqlite
```
{: .nolineno }

Luego, ejecuta el comando `sqlite3` en la terminal para comenzar.

#### __En Linux ( Debian/Ubuntu )__

En la mayoría de las distribuciones Linux, SQLite está disponible en los repositorios oficiales:

```bash
sudo apt update
sudo apt install sqlite3
```
{: .nolineno }

Después, solo debes escribir `sqlite3` en la terminal para iniciar la herramienta.

## __¿Qué podemos hacer con la línea de comandos de SQLite3?__

Una vez iniciado el programa `sqlite3`, puedes revisar diversas operaciones sobre bases de datos SQLite, tales como:

- Crear nuevas bases de datos o abrir bases existentes.
- Ejecutar sentencias SQL.
- Crear y modificar tablas y otros objetos de la base de datos.
- Importar y exportar información ( por ejemplo, en formato CSV ).
- Ejecutar archivos `.sql` que contengan múltiples instrucciones.
- Usar comandos internos especiales ( comienzan con `.` ) para facilitar la gestión y visualización de datos.

### __Crear y abrir Bases de Datos__

Para crear una base de datos, debes abrir una nueva __Terminal__ o ventana de __símbolo del sistema__ ( CMD ) y escribir el nombre del programa seguido del nombre del archivo de base de datos:

```terminal
sqlite3 sistema.db
```

> Si la base de datos no existe, **se creará el archivo de base de datos una vez que tengamos como mínimo creada una tabla**.
{: .prompt-info }

El comando anterior abre un __entorno interactivo__ y se ve de la siguiente manera:

```sql
SQLite version 3.40.1 2022-12-28 14:03:47
Enter ".help" for usage hints.
sqlite>
```
{: .nolineno .noheader }

Ahora puedes ejecutar instrucciones SQL.

### __Crear Tablas__

Ahora en la **sesión interactiva** ejecutamos una sentencia SQL para crear una tabla sencilla de ejemplo:

```sql
CREATE TABLE usuarios (id INT, nombre TEXT);
```
{: .nolineno }

> Creada una tabla, se crea el archivo de base de dato.
{: .prompt-info }

![sqlite crear una base de datos](sqlite/create-filedb.webp)

### __Insertar Datos__

Ahora puedes crear nuevos registros:

{% tabs insertar_datos %}
{% tab insertar_datos SQL %}
```sql
INSERT INTO usuarios (id, nombre) VALUES (1, 'marco');
INSERT INTO usuarios (id, nombre) VALUES (2, 'marcelo');
```
{: .nolineno }
{% endtab %}
{% tab insertar_datos SQLite3 %}
```sql
sqlite> INSERT INTO usuarios (id, nombre)
   ...> VALUES (1, 'marco');

sqlite> INSERT INTO usuarios (id, nombre)
   ...> VALUES (2, 'marcelo');
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

### __Consultar información__

Para ver los registros existentes con el comando `SELECT`:

{% tabs select_datos %}
{% tab select_datos SQL %}
```sql
SELECT * FROM usuarios;
```
{: .nolineno }
{% endtab %}
{% tab select_datos SQLite3 %}
```sql
sqlite> SELECT * FROM usuarios;
1|marco
2|marcelo
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

### __Actualizar Registros__

Modificar datos existentes con el comando `UPDATE`:

{% tabs update_datos %}
{% tab update_datos SQL %}
```sql
UPDATE usuarios SET nombre = 'alonso' WHERE nombre = 'marcelo';
```
{: .nolineno }
{% endtab %}
{% tab update_datos SQLite3 %}
```sql
sqlite> UPDATE usuarios SET nombre = 'alonso' WHERE nombre = 'marcelo';
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

### __Eliminar Registros__

Borrar registros específicos:

{% tabs del_datos %}
{% tab del_datos SQL %}
```sql
DELETE FROM usuarios WHERE nombre = 'marco';
```
{: .nolineno }
{% endtab %}
{% tab del_datos SQLite3 %}
```sql
sqlite> DELETE FROM usuarios WHERE nombre = 'marco';
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}


> Para salir del programa **sqlite3** escribe el comando `.q` o con el atajo <kbd>Ctrl</kbd> + <kbd>D</kbd> y luego <kbd>Enter</kbd>.
{: .prompt-info }

## __Comandos Especiales__

La mayoría de las veces, sqlite3 solo lee líneas de entrada y las pasa a la biblioteca SQLite para su ejecución. Pero las líneas de entradas que comienzan con un punto (`.`) son interceptadas e interpretadas por el propio programa sqlite3.

Estos comandos de puntos se utilizan normalmente para cambiar el formato de salida, ver información sobre la base de datos o manejar ciertos aspectos del entorno de ejecución. Para ver una lista de los comandos de puntos disponibles, puede introducir el comando `.help` sin argumentos o `help TOPIC` para obtener información detallada sobre algún `TOPIC` en específico. Aquí te dejo una tabla con algunos comandos especiales disponibles.


|Comando|Descripción|Valor predeterminado|
|:------|:----------|:-------------------|
|`.archive`|Administrar archivos SQL.|.|
|`.auth`|Muestra devoluciones de llamadas|OFF|
|`.backup` **?DB? FILE**|Crea un respaldo de la `DB` actual en un `FILE` indicado.|MAIN|
|`.bail` **ON** \| **OFF**|Detener después de un error.|OFF|
|`.binary` **ON** \| **OFF**|Activa o desactiva la salida binaria.|ON|
|`.cd` **DIR**|Cambiar de ubicación a `DIR` especificado.|.|
|`.changes` **ON** \| **OFF**|Mostrar número de filas afectadas por SQL.|ON|
|`.clone` **NEWDB**|Clona la base de datos actual en `NEWDB` (directorio)|.|
|`.databases`|Lista las bases de datos adjuntas|.| 

### __Esquema de la base de datos__

Para ver el esquema, donde figuran las sentencias SQL ejecutadas en la creación de tablas, ejecuta el comando `.schema` o `.fullschema`:

{% tabs ver_schema %}
{% tab ver_schema Comando %}
```sql
.fullschema
```
{: .nolineno }
{% endtab %}
{% tab ver_schema SQLite3 %}
```sql
sqlite> .fullschema
CREATE TABLE usuarios (id INT, nombre TEXT);
/* No STAT tables available */
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

### __Ver las tablas existentes__

Para listar las tablas existentes en la base de datos, ejecuta el siguiente comando especial de punto:

```sql
.tables
```
{: .nolineno }

El comando anterior es equivalente a configurar el modo lista y luego ejecutar la siguiente consulta:

```sql
SELECT name FROM sqlite_schema 
WHERE type IN ('table','view') AND name NOT LIKE 'sqlite_%'
ORDER BY 1;
```
{: .nolineno }

## __Funciones de E/S de archivos__

La función `readfile(x)` lee todo el contenido de un archivo y devuelve ese contenido como un `BLOB`. Esto se puede usar para cargar contenido en una tabla. Por ejemplo:

```sql
CREATE TABLE imagenes(nombre TEXT,tipo TEXT,imagen BLOB);

INSERT INTO imagenes(nombre,tipo,imagen)
VALUES(
   'icon_folder',
   'png',
   readfile('C:\\Users\\home\\Pictures\\folder.png')
);
```
{: .nolineno }

La función `writefile(x, y)` crea un archivo llamado (`x`) y escribe el `BLOB` (`y`) y devuelve el número de bytes escritos:

```sql
SELECT writefile('folder.png', imagen)
FROM imagenes WHERE nombre = 'icon_folder';
```
{: .nolineno }

## __Analizar Archivos CSV con SQL__

La línea de comandos de `sqlite3` permite importar archivos CSV fácilmente y consultarlos como si fueran una base de datos. Esto es útil para analizar datos sin necesidad de convertirlos a otro formato o cargarlos en una base de datos existente.

> ¡Ideal para analizar datos rápido sin herramientas adicionales!
{: .prompt-tip }

Para hacer el análisis de un archivo CSV, abre una terminal y ejecuta `sqlite3` sin argumentos. Esto iniciará **SQLite en la memoria** en vez de crear una base de datos en el disco, lo que significa que los datos se cargarán solo mientras la sesión esté activa. A continuación tienes los comandos que debes ejecutar para importar el CSV:

{% tabs ejemplo_import_csv %}
{% tab ejemplo_import_csv comando %}
```sql
.mode csv
.import ventas.csv ventas
```
{: .nolineno }
{% endtab %}
{% tab ejemplo_import_csv CSV %}
Copia y guarda este contenido en un archivo llamado `ventas.csv`:
```
Producto,Categoría,Precio,Cantidad,Total,Fecha_Venta
Laptop,Electrónica,1200000,2,2400000,2023-01-15
Teléfono,Electrónica,850000,1,850000,2023-02-20
Teclado,Accesorios,46000,3,138000,2023-03-10
Mouse,Accesorios,25500,2,51000,2023-04-05
Monitor,Electrónica,300000,1,300000,2023-05-12
Impresora,Oficina,200000,1,200000,2023-06-25
Escritorio,Muebles,450000,1,450000,2023-07-30
Silla de oficina,Muebles,220000,2,440000,2023-08-18
Cámara,Electrónica,670000,1,670000,2023-09-22
Auriculares,Accesorios,75000,4,300000,2023-10-10
Laptop,Electrónica,1300000,1,1300000,2023-11-15
Teléfono,Electrónica,900000,2,1800000,2023-12-05
Teclado,Accesorios,50000,1,50000,2024-01-08
Mouse,Accesorios,30000,3,90000,2024-02-14
Monitor,Electrónica,310000,2,620000,2024-03-20
Impresora,Oficina,215000,1,215000,2024-04-02
Escritorio,Muebles,480000,1,480000,2024-05-09
Silla de oficina,Muebles,250000,3,750000,2024-06-15
Cámara,Electrónica,700000,2,1400000,2024-07-21
Auriculares,Accesorios,81000,1,81000,2024-08-30
```
{% endtab %}
{% endtabs %}

### __Consultas SQL rápidas sobre el CSV__

__Ver las primeras 5 filas__:
```sql
SELECT * FROM ventas LIMIT 5;
```
{: .nolineno }

__Total de ventas por categoría__:
```sql
SELECT 'Categoría', SUM(Total) AS Ventas_Totales
FROM ventas
GROUP BY 'Categoría';
```
{: .nolineno }

__Ventas en enero de 2024__:
```sql
SELECT * FROM ventas WHERE Fecha_Venta LIKE '2024-01%';
```
{: .nolineno }

__Productos más caros vendidos__:
```sql
SELECT * FROM ventas ORDER BY Precio DESC LIMIT 5;
```
{: .nolineno }

### __Guardar los resultados en un nuevo CSV__

Si después de analizar los datos quieres guardar los resultados en otro archivo CSV, usa:

```sql
.mode csv
.output resumen.csv

SELECT 'Categoría', SUM(Total) AS Ventas_Totales
FROM ventas GROUP BY 'Categoría';

.output stdout -- Volver a cambiar la salida al modo normal
```
{: .nolineno }

Esto creará un archivo **resumen.csv** con el total de ventas por categoría.  

## __Exportar datos desde SQLite a otros formatos__

SQLite permite exportar a otros formatos como __JSON__, __CSV__. Esto resulta útil cuando necesitas compartir información fuera de la base de datos.

### __Exportar a JSON__

SQLite permite exportar directamente a JSON si usas una versión 3.33 o superior, puedes exportar tus datos a JSON con el siguiente comando:

```bash
sqlite3 mi_base.db -json "SELECT * FROM ventas;" > ventas.json
```
{:.nolineno}

### __Expotar a CSV__

El formato CSV es ideal para hojas de cálculo u otras herramientas que aceptan datos tabulares, puedes exportar a CSV con el siguiente comando:

```bash
sqlite3 -header -csv mi_base_db "SELECT * FROM ventas;" > ventas.csv
```
{:.nolineno}

- `-header`: incluye la fila con nombres de columnas.
- `-csv`: define el formato delimmitado por comas.

## __Configurar SQLite CLI__

Para definir opciones de forma permanente al ejecutar sqlite3, crea un archivo de configuración `.sqliterc` en el directorio del usuario. Ejemplo:

```terminal
nano ~/.sqliterc
```

Luego añade las opciones que quieres que se apliquen siempre:

```
.headers on
.mode table
.nullvalue NULL
PRAGMA foreign_keys = ON;
```
{: .nolineno file=".sqliterc"}

Al abrir nuevamente el programa se aplican esas configuraciones.

![aplicar las configuraciones](sqlite/load-sqliterc-light.webp){: .light }
![aplicar las configuraciones](sqlite/load-sqliterc-dark.webp){: .dark }

{% include circle-line.html %}

La línea de comandos de SQLite3 es una herramienta ligera que te permite administrar bases de datos de forma eficiente, sin necesidad de instalar programas gráficos o servidores adicionales. Es __ideal para quienes están aprendiendo__ SQL, ya que ofrece una forma rápida y directa de practicar y ejecutar consultas.
