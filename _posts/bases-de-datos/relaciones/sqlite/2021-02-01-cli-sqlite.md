---
title: "Command Line For SQLite3 (línea de comandos) para ejecutar SQL"
categories: [Bases de Datos Relacionales, SQLite]
tags: [Bases de Datos Relacionales, SQLite]
---

SQLite proporciona un programa de línea de comandos simple llamado **sqlite3** que permite al usuario conectar con una base de datos y ejecutar instrucciones SQL manualmente en bases de datos SQLite.

Al iniciarse, el programa **sqlite3** mostrará un breve mensaje y queda esperando que ingresemos instrucciones SQL. Cada sentencia SQL debe terminar con un punto y coma.

## __¿Qué es Command Line For SQLite3?__

La **interfaz de línea de comandos** o "**CLI**" es el programa que descargamos y que permite ejecutar comandos SQL y los pasa al núcleo del motor de base de datos SQLite.

## __¿Qué podemos hacer desde la línea de comandos?__

### __Crear Bases de Datos__

Para crear una base de datos, se debe abrir un nuevo símbolo del sistema **CMD** o la **Terminal** y escribimos el nombre del programa seguido del nombre de la base de datos que queremos conectarnos:

```terminal
sqlite3 sistema.db
```

> **Si la base de datos no existe, creará el archivo de base de datos una vez que tengamos como mínimo creada una tabla**.
{: .prompt-info }

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

```sql
INSERT INTO usuarios (id, nombre) VALUES (1, 'marco');
INSERT INTO usuarios (id, nombre) VALUES (2, 'marcelo');
```
{: .nolineno }


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

```
.fullschema
```
{: .nolineno }

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
  VALUES('icon_folder','png',readfile('C:\\Users\\home\\Pictures\\folder.png'));
```
{: .nolineno }

La función `writefile(x, y)` crea un archivo llamado (`x`) y escribe el `BLOB` (`y`) y devuelve el número de bytes escritos:

```sql
SELECT writefile('folder.png', imagen) FROM imagenes WHERE nombre = 'icon_folder';
```
{: .nolineno }

## __Analizar Archivos CSV con SQL__

La línea de comandos de `sqlite3` permite importar archivos CSV fácilmente y consultarlos como si fueran una base de datos. Esto es útil para analizar datos sin necesidad de convertirlos a otro formato o cargarlos en una base de datos existente.

> 👉 **¡Ideal para analizar datos rápido sin herramientas adicionales!**
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

**💡 Ejemplo**: Ver las primeras 5 filas:
```sql
SELECT * FROM ventas LIMIT 5;
```
{: .nolineno }
**💡 Ejemplo**: Total de ventas por categoría:
```sql
SELECT 'Categoría', SUM(Total) AS Ventas_Totales
FROM ventas
GROUP BY 'Categoría';
```
{: .nolineno }
**💡 Ejemplo**: Ventas en enero de 2024:
```sql
SELECT * FROM ventas WHERE Fecha_Venta LIKE '2024-01%';
```
{: .nolineno }
**💡 Ejemplo**: Productos más caros vendidos:
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
FROM ventas
GROUP BY 'Categoría';
.output stdout -- Volver a cambiar la salida al modo normal
```
{: .nolineno }

Esto creará un archivo **resumen.csv** con el total de ventas por categoría.  

## __Configurar SQLite CLI__

Para definir opciones de forma permanente al ejecutar sqlite3, crea un archivo de configuración `.sqliterc` en el directorio del usuario. Ejemplo:

```terminal
nano ~/.sqliterc  # O usa vi, vim, o cualquier editor de texto
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
