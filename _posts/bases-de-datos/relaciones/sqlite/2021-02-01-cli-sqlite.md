---
title: "SQLite: El shell (línea de comandos) para ejecutar SQL"
categories: [Bases de Datos Relacionales, SQLite]
tags: [Bases de Datos Relacionales, SQLite]
---

SQLite proporciona un programa de línea de comandos simple llamado **sqlite3** que permite al usuario conectar con una base de datos y ejecutar instrucciones SQL manualmente en la base de datos SQLite.

Al iniciarse, el programa **sqlite3** mostrará un breve mensaje y queda esperando que ingresemos instrucciones SQL. Cada sentencia SQL debe terminar con un punto y coma.

## __Crear una Nueva Base de Datos__

La **interfaz de línea de comandos** o "**CLI**" es el programa que descargamos y que permite ejecutar comandos SQL y los pasa al núcleo del motor de base de datos SQLite.

Para crear una base de datos, se debe invocar al intérprete de comandos **CMD** o la **Terminal** y escribimos el nombre del programa seguido del nombre de la base de datos que queremos conectarnos:

```terminal
sqlite3 sistema.db
```

> Si **la base de datos no existe, creará el archivo de base de datos una vez tengamos como mínimo creada una tabla**.
{: .prompt-info }

Ahora en la **sesión interactiva** ejecutamos una sentencia SQL para crear una tabla sencilla de ejemplo para crear la base de datos:

```sql
CREATE TABLE usuarios (id INT, nombre TEXT);
```
{: .nolineno }

![sqlite crear una base de datos](sqlite/create-filedb.webp)

> Para salir del programa **sqlite3** escribe el comando `.q` o con el atajo <kbd>Ctrl</kbd> + <kbd>C</kbd> y luego <kbd>Enter</kbd>.
{: .prompt-info }

## __Comandos Especiales__

La mayoría de las veces, sqlite3 solo lee líneas de entrada y las pasa a la biblioteca SQLite para su ejecución. Pero las líneas de entradas que comienzan con un punto (`.`) son interceptadas e interpretadas por el propio programa sqlite3.

Estos comandos de puntos se utilizan normalmente para cambiar el formato de salida, ver información sobre la base de datos o manejar ciertos aspectos del entorno de ejecución. Para ver una lista de los comandos de puntos disponibles, puede introducir el comando `.help` sin argumentos

### __Esquema de la base de datos__

Para ver el esquema, donde figuran las sentencias SQL ejecutadas en la creación de tablas, ejecuta el comando `.schema` o `.fullschema`:

```
.fullschema
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
