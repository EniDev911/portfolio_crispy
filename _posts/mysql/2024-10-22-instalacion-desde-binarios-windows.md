---
title: "MySQL 🐬 : Instalar y Configurar desde los Binarios en Windows"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
---

Instalar MySQL en Windows desde los binarios es una buena opción si deseamos una instalación limpia y controlada de MySQL.


## Descargar los binarios de MySQL

- Abrimos el navegador y vamos a la página oficial de descargas de MySQL: <a href="https://dev.mysql.com/downloads/" target="_blank">https://dev.mysql.com/downloads/</a>
- En la sección de **MySQL Community Server**, seleccionamos la versión de MySQL s instalar.
- Luego de seleccionar la versión según la arquitectura de nuestro equipo:
  - **Windows (x86, 64bit), ZIP archive**: Este archivo contiene los binarios sin necesidad de un instalador gráfico.
  - **Windows (x86, 32-bit), ZIP archive**: Si estás usando una versión de 32 bits de Windows.
- Clic en **Download** y luego clic en **No thank, just start my download** para evitar registrarse y comenzar la descarga directamente.

![descarga de los binarios](mysql/download-binary-mysql-light.png){: .light }
![descarga de los binarios](mysql/download-binary-mysql-dark.png){: .dark }

### Extraer el contenido

- Una vez descargado el archivo, extraemos su contenido en una carpeta, por ejemplo: `C:\mysql`.

---

## Configurar MySQL

### Crear la carpeta de datos

- En la carpeta donde hemos extraído los binarios de MySQL, creamos una carpeta llamada `data`.
- La ruta completa sería algo así como `C:\mysql\data`.
- Esta carpeta almacenará las bases de datos de MySQL.

### Crear el archivo de configuración

- En la misma carpeta donde se han extraído los binarios de MySQL (`C:\mysql`), creamos un archivo `my.ini`.  
- El [archivo de opciones](https://dev.mysql.com/doc/refman/8.4/en/option-files.html){: target='_blank'} define la configuración que se utilizará para iniciar el servidor de MySQL.

A continuación, veamos un ejemplo básico de configuración que podemos usar:

```ini
[mysqld]
# Configuración de la base de datos
basedir=C:/mysql
datadir=C:/mysql/data
port=3306

# Otras opciones recomendadas
default_storage_engine=INNODB
max_connections=200
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```
{: .nolineno file="my.ini" }

> Ten en cuenta que las barras invertidas `\` en Windows deben ser reemplazadas por barras diagonales `/` en la configuración de MySQL, o debes escaparlas (por ejemplo: `C:\\mysql`).
{: .prompt-info }

### Inicializar la base de datos

- Abrimos un **Símbolo del sistema** (cmd) como administrador.
- Navegamos hasta la carpeta de los binarios con el comando `cd`. Ejemplo:

```console
cd C:\mysql
```
- Ahora, ejecutamos el siguiente comando para inicializar el directorio de datos de MySQL:

```console
bin\mysqld --initialize --console
```

- El comando anterior realiza lo siguiente:
  - Inicializa el directorio de datos de MySQL y crea las tablas del sistema.
  - Instala el [esquema sys](https://dev.mysql.com/doc/refman/8.0/en/sys-schema.html){: target='_blank' }.
  - Crea una cuenta administrativa.
- Implementación segura por defecto:
  - Se crea una sola cuenta administrativa `root@localhost` con una contraseña generada aleatoriamente, que se marca como caducada.
  - No se crean cuentas de usuarios anónimos.
  - No se crea ninguna base de datos como `test` accesible para todos los usuarios.


Observamos que en la consola que nos muestra el password generado aleatoriamente:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="CMD"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">&gt; bin\mysqld --initialize --console</span>
2024-11-08T16:35:45.951151Z 0 [System] [MY-015017] [Server] MySQL Server Initialization - start.
2024-11-08T16:35:45.966750Z 0 [Warning] [MY-010915] [Server] 'NO_ZERO_DATE', 'NO_ZERO_IN_DATE' and 'ERROR_FOR_DIVISION_BY_ZERO' sql modes should be used with strict mode. They will be merged with strict mode in a future release.
2024-11-08T16:35:46.013551Z 0 [System] [MY-013169] [Server] C:\mysql\bin\mysqld.exe (mysqld 8.4.3) initializing of server in progress as process 4644
2024-11-08T16:35:46.153954Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2024-11-08T16:35:53.068762Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
<span class="hl">2024-11-08T16:36:11.759321Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: /-H_NXhO1h.#</span>
</pre></code>
</div>
</div>

### Agregar al path

- Para ejecutar después el programa cliente de mysql desde cualquier ubicación, debemos incluir el directorio `C:\mysql\bin` a la variable `PATH`.
- Abrimos la CMD normal (para que sea disponible a nivel de usuario) o como administrador (para que sea disponible a nivel de sistema):

```
setx PATH "%path%;"C:\mysql\bin\
```

### Configurar MySQL como servicio

Nos posicionamos dentro del directorio de instalación e ingresamos a la carpeta **bin** y ejecutamos los siguientes comandos:

- El siguiente comando es para asegurarnos de no tener ninguna instancia del servidor corriendo actualmente:

```console
mysqladmin -u root shutdown
```

- El siguiente comando registra MySQL como servicio (ejecutar con privilegios de administrador):

```console
mysqld --install "MySQL8"
```

### Establecer una nueva contraseña

Una vez ya podemos acceder a nuestro servidor, lo primero que debemos hacer es cambiar la contraseña generada al momento de inicializar las bases de datos del servidor. Para eso tenemos el comando `ALTER USER` que fue introducido en versiones de MySQL 5.7 en adelante.

- Ejecutamos el siguiente comando para cambiar la contraseña del usuario conectado (root):

```sql
ALTER USER user() IDENTIFIED BY '<new-password>';
```
{: .nolineno }

Este sería un ejemplo, que explica de forma ordenada de cómo implementar una instalación limpia de MySQL desde los binarios en Windows y configurar las opciones de inicio del servidor. ¡Espero que te sirva!
