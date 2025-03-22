---
title: "PostgreSQL 🐘 : Almacenar Credenciales de Forma Segura"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres, "Extras/Trucos"]
tags: [Bases de Datos]
image:
    path: posters/postgres-uso-pgpass.webp
    lqip: data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJZACdH8ACu95gjmIj0rcoAMye8lKZjUwbdlLZS/oxLyP/yeT2kPHno7VZx8wI3UmiwEnZuQ1El0tXl7H7GPu3fai4AA==
pin: true
---

Cuando trabajas con bases de datos en PostgreSQL y en general, una de las tareas más comunes es conectarte a las bases de datos desde la línea comandos usando el cliente **`psql`**. Sin embargo, cada vez que lo haces, el servidor de PostgreSQL te pide la contraseña. Esto puede resultar tedioso, especialmente al automatizar tareas o ejecutar scripts. Para evitar este inconveniente, PostgreSQL ofrece una herramienta denominada **`pgpass`**, que permite almacenar las credenciales de acceso de forma segura y automática, eliminando la necesidad de ingresar la contraseña en cada conexión. En este post aprenderás a crear y utilizar el archivo **`pgpass`** de manera efectiva.

## __¿Qué es el Archivo Pgpass?__

El archivo **`pgpass`** es un archivo de texto que almacena credenciales de autenticación para servidores PostgreSQL. Su función principal es permitir conexiones automáticas sin que el usuario tenga que ingresar manualmente la contraseña en cada sesión.

Este archivo es especialmente útil en los siguientes casos:
- **Automatización de tareas**: Si usas scripts o **cron jobs** (tareas programadas) que requieren conectarse a PostgreSQL, **`pgpass`** evita que tengas que escribir la contraseña en cada ejecución.
- **Conexión desde aplicaciones**: Herramientas como **`psql`**, **`pg_dump`** o **`pg_restore`** pueden usar **`pgpass`** para conectarse sin pedir credenciales.
- **Mejor seguridad**: Evita almacenar contraseñas en scripts o en variables de entorno, reduciendo riesgos de exposición.

## __Ubicación del Archivo Pgpass__

El archivo **`pgpass`** debe guardarse en una ubicación específica dependiendo del sistema operativo.

{% tabs ubicacion_pgpass %}
{% tab ubicacion_pgpass Linux/macOS %}
La ubicación del archivo en **Linux/macOS** normalmente se encuentra en el directorio de inicio de tu usuario (`~/.pgpass`) Ejemplo:
```terminal
/Users/<user>/.pgpass
```
{% endtab %}
{% tab ubicacion_pgpass Windows %}
En **Windows** se debe buscar el destino de instalación, generalmente es `%APPDATA%\postgresql\pgpass.conf`. Ejemplo:
```terminal
C:\Users\<usuario>\AppData\Roaming\postgresql\pgpass.conf
````
{% endtab %}
{% endtabs %}


## __Crear Archivo Pgpass__

Como ya sabemos el archivo **`pgpass`** debe guardarse en una ubicación específica dependiendo del sistema operativo. Para ello realiza los siguientes pasos:

1. Abre una terminal o símbolo del sistema.
2. Crea el archivo `pgpass` en la ubicación que corresponda según tu sistema operativo.

{% tabs crear_archivo_pgpass %}
{% tab crear_archivo_pgpass Linux/macOS %}
En **Linux/macOS** creamos el archivo con el comando `touch`:
```terminal
touch ~/.pgpass
```
{% endtab %}
{% tab crear_archivo_pgpass Windows %}
En **Windows** debes buscar el destino de instalación, puede ser algo como `%APPDATA%\postgresql\pgpass.conf`. Una vez encontrado, ejecuta el siguiente comando:
```terminal
echo '' > pgpass.conf
````
{% endtab %}
{% endtabs %}

### __Formato del archivo pgpass__

El archivo `pgpass` tiene un formato muy sencillo, donde cada línea describe las credenciales para una conexión específica. La estructura es la siguiente:

```
hostname:port:database:username:password
```
{: .nolineno file="pgpass" }

- **`hostname`**: El nombre del host del servidor de la base de datos. Si la base de datos está en tu máquina local, usamos `localhost`.
- **`port`**: El puerto en el que PostgreSQL está escuchando. El puerto predeterminado es `5432`, aunque puede ser otro si lo has configurado de manera diferente.
- **`database`**: El nombre de la base de datos a la que deseas conectarte.
- **`username`**: El nombre de usuario con el que te conectarás a la base de datos.
- **`password`**: La contraseña asociada a ese usuario.

#### **Añadir las credenciales**

Escribe las credenciales necesarias en el archivo `pgpass` siguiendo el formato indicado anteriormente. Puedes agregar tantas entradas como necesites, una por línea.

**Ejemplo:**

```
localhost:5432:postgres:admin:secreta123
```
{: file="pgpass" }

#### **Conectarse a PostgreSQL sin ingresar la contraseña**

Con el archivo `pgpass` configurado correctamente, ahora puedes conectarte a PostgreSQL de la siguiente manera:

```terminal
psql -h localhost -U admin -d postgres
```
{: .nolineno }

PostgreSQL leerá la contraseña desde el archivo `pgpass` y se conectará automáticamente.