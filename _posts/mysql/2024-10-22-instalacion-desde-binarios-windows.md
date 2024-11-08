---
title: "MySQL 🐬 : Instalar y Configurar desde los Binarios en Windows"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
---

Instalar MySQL en Windows desde los binarios es una buena opción si deseamos una instalación limpia y controlada de MySQL.


### 1. Descargar los binarios de MySQL

- Abrimos el navegador y vamos a la página oficial de descargas de MySQL: <a href="https://dev.mysql.com/downloads/" target="_blank">https://dev.mysql.com/downloads/</a>
- En la sección de **MySQL Community Server**, seleccionamos la versión de MySQL s instalar.
- Luego de seleccionar la versión según la arquitectura de nuestro equipo:
  - **Windows (x86, 64bit), ZIP archive**: Este archivo contiene los binarios sin necesidad de un instalador gráfico.
  - **Windows (x86, 32-bit), ZIP archive**: Si estás usando una versión de 32 bits de Windows.
- Clic en **Download** y luego clic en **No thank, just start my download** para evitar registrarse y comenzar la descarga directamente.

![descarga de los binarios](mysql/download-binary-mysql-light.png){: .light }
![descarga de los binarios](mysql/download-binary-mysql-dark.png){: .dark }

### 2. Extraer el contenido

- Una vez descargado el archivo, extraemos su contenido en una carpeta, por ejemplo: `C:\mysql`.

### 3. Configurar MySQL

#### 3.1 Crear la carpeta de datos

- En la carpeta donde hemos extraído los binarios de MySQL, creamos una carpeta llamada `data`.
- La ruta completa sería algo así como `C:\mysql\data`.
- Esta carpeta almacenará las bases de datos de MySQL.

#### 3.2 Crear el archivo de configuración

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

#### 3.3 Inicializar la base de datos

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
  
#### 3.4 Agregar al path

- Para ejecutar después el programa cliente de mysql desde cualquier ubicación, debemos incluir el directorio `C:\mysql\bin` a la variable `PATH`.
- Abrimos la CMD normal (para que sea disponible a nivel de usuario) o como administrador (para que sea disponible a nivel de sistema):

```
setx PATH "%path%;"C:\mysql\bin\
```
  

