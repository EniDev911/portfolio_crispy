---
title: "MySQL 🐬 : Cliente de línea de Comandos"
author: enidev911
pin: true
description: "El cliente MySQL es una herramienta de línea de comandos que permite ejecutar consultas y gestionar bases de datos MySQL directamente desde la terminal."
categories: [Bases de Datos Relacionales, "MySQL - 01. Básico"]
tags: [Bases de Datos]
image:
    path: posters/mysql-cliente-terminal.webp
    lqip: data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJQAXf+A765PmdR4q07gAA/uqLJcRZMeZLMqSqqNHxfbqvYo6tqfPV1md4ZJcvyyr2o1Cmv1GQxsB76tOaGDaVRvrfisE2NnJfBGEmCMTHmRwAAAA=
---

Cuando instalamos MySQL, dentro del paquete de instalación contiene un programa para conectarnos al servidor mediante la línea de comandos, el programa se llama **mysql** y nos permite abrir una sesión como cliente para ejecutar sentencias **SQL** con capacidades de edición.


### **Conectarse al Servidor**

Una vez tenemos localizado el programa podemos conectar con el servidor de MySQL. Desde la consola o terminal invocamos al programa **mysql** y le indicamos en los argumentos, las opciones básicas de conexión (**host**, **usuario**, **puerto**, etc).
  
```terminal
mysql -h localhost -u root -P 3306 -p
```

Estos parámetros son sencillos, aunque dependiendo del método de autenticación podría variar pero simplemente necesitamos especificar 2:

- **-u**: El usuario que se configuró en el proceso de instalación u otro existente creado por un usuario administrador.
- **-p**: El password para el usuario especificado.

> Si el servidor se ejecuta en su propia máquina, no es necesario especificar el parámetro `-h` ya que el cliente mysql por defecto usa la opción de `localhost` .
{: .prompt-tip }


### **Comandos que interpreta mysql**

Cuando iniciamos una sesión interactiva desde el cliente de terminal **mysql**, podemos ver un listado de comandos que realizan diferentes tareas, para ello debemos ejecutar el comando `help`:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="CMD"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; HELP</span>

Lista de todos los comandos de MySQL:  
Tenga en cuenta que todos los comandos de texto deben estar al principio de la línea y terminar con ';'

?         (\?) Sinónimo del comando `help`
clear     (\c) Borra la instrucción de entrada actual.
connect   (\r) Vuelve a conectarse al servidor, Los argumentos opcionales son db y host.
delimiter (\d) Establecer delimitador de declaración.
edit      (\e) Editar el comando con $EDITOR. (no funciona en la versión 8)
ego       (\G) Envía el comando al servidor mysql, muestra el resultado verticalmente.
exit      (\q) Salir de mysql. Lo mismo que `quit`.
go        (\g) Envía el comando mysql server.
help      (\h) Muestra esta ayuda.
nopager   (\n) Deshabilitar paginación de salida. (El comando solo funciona en Unix.)
source    (\.) Ejecuta un archivo de script SQL. Toma un nombre de archivo como argumento.
status    (\s) Obtener información de estado del servidor.
system    (\!) Ejecute un comando, el comando solo funciona en Unix. 
               (desde 8.0.19,funciona en Windows.)
warnings  (\W) Mostrar advertencias después de cada declaración.
nowarning (\w) No mostrar advertencias después de cada declaración.

charset   (\C) Cambiar a otro conjunto de caracteres. Podría ser necesario para el procesamiento
               con juegos de caracteres multi-bytes.

Para obtener ayuda del lado del servidor, escriba `help contents`
</pre></code>
</div>
</div>

> Según el sistema operativo que estemos utilizando, el listado puede variar, mostrando comandos más o comandos menos. El idioma del servidor por defecto es en inglés pero lo podemos cambiar para que los mensajes se muestren español (que veremos más adelante).
{: .prompt-info }

**Ejemplo para ejecutar un comando del sistema**

```
\! ls
```
{: .nolineno }

El comando anterior, nos imprimirá los directorio y archivos en la ubicación como lo muestra el siguiente bloque:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; \! ls</span>
Applications
Desktop
Documents
Downloads
Library
Movies
Music
Pictures
Public
mysql&gt;
</pre></code>
</div>
</div>


**Ejemplo para ver la información del servidor**

```
\! status
```
{: .nolineno }

Al ejecutar el comando anterior, se imprimirá el estado y la información del servidor como lo muestra el siguiente bloque:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; \status</span>
--------------
mysql  Ver 8.4.3 for macos14 on x86_64 (MySQL Community Server - GPL)

Connection id:		11
Current database:	
Current user:		root@localhost
SSL:			Not in use
Current pager:		less
Using outfile:		''
Using delimiter:	;
Server version:		8.4.3 MySQL Community Server - GPL
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	utf8mb4
Db     characterset:	utf8mb4
Client characterset:	utf8mb4
Conn.  characterset:	utf8mb4
UNIX socket:		/tmp/mysql.sock
Binary data as:		Hexadecimal
Uptime:			1 hour 55 min 53 sec

Threads: 2  Questions: 18  Slow queries: 0  Opens: 139  Flush tables: 3  Open tables: 60  Queries per second avg: 0.002
--------------
</pre></code>
</div>
</div>

### **Mostrar información de Comandos**

El comando `HELP` también es una herramienta muy útil para obtener información sobre los comandos disponibles en el intérprete de MySQL. Cuando ejecutas el comando `HELP` seguido del comando que quieres obtener información, se despliega un listado sobre las opciones que puedes utilizar.

**Ejemplo para ver todos los comandos disponibles**

Para ver el listado completo sobre el comando `SHOW`:

```
HELP SHOW
```
{: .nolineno }

Al ejecutar el comando anterior, se despliega todo el listado como lo muestra en parte el siguiente bloque:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; HELP SHOW</span>
Name: 'SHOW'
Description:
SHOW has many forms that provide information about databases, tables,
columns, or status information about the server. This section describes
those following:

SHOW BINARY LOG STATUS
SHOW BINARY LOGS
SHOW BINLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count]
SHOW {CHARACTER SET | CHARSET} [like_or_where]
SHOW COLLATION [like_or_where]
SHOW [FULL] COLUMNS FROM tbl_name [FROM db_name] [like_or_where]
SHOW CREATE DATABASE db_name
...
</pre></code>
</div>
</div>

