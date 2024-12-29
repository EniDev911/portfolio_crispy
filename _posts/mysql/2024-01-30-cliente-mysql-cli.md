---
title: "MySQL 🐬 : Cliente de línea de Comandos"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
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


### **Opciones de mysql**

Cuando iniciamos una sesión interactiva desde el cliente de terminal **mysql**, podemos ver un listado de comandos que realizan diferentes tareas, para ello debemos ejecutar el comando `help`:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="CMD"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; help</span>

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

> Según el sistema operativo que estemos utilizando, el listado puede variar, mostrando comandos más o comandos menos.
{: .prompt-info }
