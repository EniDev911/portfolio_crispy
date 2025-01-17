---
title: "PostgreSQL 🐘 : Instalación de PostgreSQL"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
tags: [Bases de Datos]
image:
    path: posters/postgres-instalacion.png
    alt: "Instalar PostgreSQL"
---

En este post veremos cómo instalar **PostgreSQL** en los diferentes sistemas operativos más comunes: **Linux (Ubuntu, Debian), Windows** y **macOS**. PostgreSQL es una de las bases de datos más robustas y populares, y es crucial tener una instalación correcta para empezar a trabajar con bases de datos relacionales.

## **PostgreSQL en Windows**

### **🛠️ Usando el instalador**

En Windows, la forma más fácil de instalar PostgreSQL es utilizando el **instalador oficial de EnterpriseDB**, que incluye PostgreSQL, pgAdmin (una interfaz gráfica para administrar bases de datos) y otras herramientas.

1. Descarga el archivo ejecutable de instalación de la versión más reciente y compatible con tu sistema operativo desde la [página de descarga](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){:target='_blank'}.
2. Ejecuta el archivo ejecutable descargado y sigue el asistente de instalación.

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/b6bb4e64292b471f8972039297a2bd05" title="postgres-instalacion-windows.pdf" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>


> Por último comprobamos que tanto **PostgreSQL** y **Pgadmin** estén instalados correctamente.
{: .prompt-info }

---

## **PostgreSQL en Linux 🐧**

### **Instalación en Ubuntu**

1. Actualizar el índice de paquete:  

```terminal
sudo apt update
```

{: start="2" }
2. Instalar el paquete de Postgres junto al paquete **postgresql-contrib**, que agrega algunas utilidades y funcionalidades adicionales:

```terminal
sudo apt install postgresql postgresql-contrib
```

Ahora que tenemos el software instalado, podemos comprobar su funcionamiento. Por defecto, PostgreSQL utiliza el concepto de **roles** para gestionar la autenticación y la autorización. Esto significa que PostgreSQL no distingue entre los usuarios y los grupos, y es por ello que prefiere usar el término más flexible como lo es **rol**.

Postgres se configura por defecto para usar la **autenticación ident**. Esto significa que asocia los roles de Postgres con una cuenta de sistema Unix o Linux correspondiente. En el proceso de instalación PostgreSQL creó una cuenta de usuario llamada `postgres`, que se asocia con el rol predeterminado.

Para comenzar a usar PostgreSQL, podemos iniciar sesión con esa cuenta predeterminada, veamos la siguiente demostración:

{% include embed/video.html src="postgres_install_ubuntu.mp4" %}

#### **Cambiar a la cuenta de postgres**

Primero podemos invocar un shell con con inicio de sesión usando simplemente `sudo -i -u` especificando el usuario en este caso tenemos al usuario **postgres** que se crea automáticamente concluida la instalación del paquete (como lo muestra el video anterior):

```terminal
sudo -i -u postgres
```

Ahora, podemos acceder al servidor de Postgres invocando al cliente de línea de comandos **`psql`**: 

```terminal
psql
```

También se puede ejecutar el comando con la cuenta de **Postgres** de forma directa (como lo muestra el video anterior):  

```terminal
sudo -u postgres psql
```

Esto nos permitirá iniciar sesión de forma directa en Postgres sin el shell **bash** intermediario entre ellos.

Para salir de la sesión interactiva de Postgres, ejecutamos el meta comando `\q`. En la siguiente sección vamos a ver como crear nuevos **roles**.

#### **Crear un rol**

En este momento, solo tenemos el rol de **`postgres`** configurado dentro de la base de datos. Podemos crear nuevos roles a partir desde la línea de comandos usando la herramienta de línea de comando incluido en la instalación de postgres como por ejemplo `createuser` y le indicamos la opción `--interactive` para que nos solicite el nombre del nuevo rol y también nos preguntará si debería tener **permisos de superusuario**.

```terminal
sudo -u postgres createuser --interactive
```

Podemos ver más opciones adicionales de esta herramienta **`createuser`**:

```terminal
man createuser
```

#### **Crear nueva base de datos**

Otra susposición que el sistema de autenticación de Postgres realiza por defecto es que para cualquier rol creado para que pueda iniciar sesión deberá existir una base de datos con el mismo nombre del rol.

Esto significa que, si el usuario que desea acceder a Postgres con un rol llamado **boba-fett**, ese rol intentará conectarse con una base de datos, que por defecto, también se debe llamarse **boba-fett**. De lo contrario obtendremos un error por intentar acceder a una base de datos que no existe.

Podemos crear la base de datos apropiada usando la herramienta **`createdb`**.

```terminal
createdb boba-feet
```

Para iniciar sesión con la **autenticación** basada en **ident**, necesitaremos un usuario de Linux con el mismo nombre del rol y su base de datos de Postgres.

Podemos crear un usuario en Linux con el comando `adduser`,  Debe tener privilegios **sudo** para ejecutar el comando: 

```terminal
sudo adduser boba-fett
```

Ahora nos deberá solicitar crear un password para el nuevo usuario, una vez se establece podemos iniciar sesión usando el siguiente comando:

```terminal
su boba-fett
```

Nos pedirá la constraseña que establecimos anteriormente, iniciada la sesión ahora simplemente podemos invocar a **psql**:

```terminal
psql
```

#### **Cambiar el método de autenticación**

PostgreSQL admite múltiples métodos de autenticación de clientes. En ubuntu, `peer` es el método de autenticación por defecto que se usa para conexiones locales (*local*), mientras que `scram-sha-256` (esto solía ser `md5` hasta Ubuntu 21.10) es el predeterminado para las conexiones **host** (conexiones realizadas mediante **TCP/IP**).

Como mencianamos anteriormente de forma predeterminada, solo se permiten conexiones desde el sistema local. Para permitir que todas las demás computadoras se conecten al servidor de PostgreSQL, editamos el archivo `/etc/postgresql/*/main/postgresql.conf`. Localizamos la siguiente línea `#listen_addresses='localhost'` y la cambiamos por `'*'`:

```bash
listen_addresses = '*'
```
{: .nolineno }

> `*` permitirá que todas las interfaces IP disponibles (IPv4 e IPv6) solo escuchen el conjunto IPv4 '0.0.0.0' mientras que `::` permite escuchar todas las direcciones IPv6. Si estos terminos te generan confusión te recomiendo este 👉 [artículo de AWS](https://aws.amazon.com/es/compare/the-difference-between-ipv4-and-ipv6/){: target='_blank' }
{: .prompt-info }

Ahora que podemos conectarnos a nuestro servidor PostgreSQL, el siguiente paso es establecer una contraseña para el **usuario de Postgres**. Ejecute el siguiente comando en la terminal para conectarse a la base de datos predeterminada:

```bash
sudo -u postgres psql template1
```
{: .nolineno }

El comando anterior se conecta a la base de datos `template1` con el usuario `postgres`. Una vez se conecta al servidor PostgreSQL, aparecerá un mensaje en el prompt que nos solicita cambiar el password. Podemos ejecutar el siguiente comando SQL para establecer la contraseña para el usuario `postgres`:

```sql
ALTER USER postgres with encrypted password 'my_password';
```
{: .nolineno }

![img - pg_hba.conf](https://enidev911.github.io/guias/assets/images/postgres/instalacion-ubuntu/pg_hba.png)

---

## **PostgreSQL en macOS 🖥️**

### **Instalador interactivo EDB**

Este **instalador EDB** está diseñado para ser una forma sencilla y rápida de comenzar a utilizar PostgreSQL en macOS.

Para comenzar con la descarga tenemos que ir la [página de descarga del instalador](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){: target='_blank' }

Este instalador incluye los siguientes programas:

- `el servidor PostgreSQL`.
- `pgAdmin`: herramienta gráfica para gestionar y desarrollar bases de datos.
- `StackBuilder`: herramienta gráfica para administrar paquetes que se puede utilizar para descargar e instalar herramientas adicionales.

Este instalador puede ejecutarse en modo gráfico, por la línea de comandos o de instalación silenciosa.

### **Instalar con Homebrew**

Si no tienes [**Homebrew**](https://brew.sh/){: target='_blank' } instalado en tu sistema, debes instalarlo primero. Homebrew es un gestor de paquetes para macOS que facilita la instalación de software.

1. Abrimos una terminal.
2. Ejecutamos el siguiente comando:

```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

{: start="3"}
3. Sigue las instrucciones que aparecen en pantalla para completar la instalación.

Una vez instalado Homebrew, realizamos los siguientes pasos para instalar PostgreSQL.

Primero, asegúrate de que Homebrew esté actualizado:

```terminal
brew update
```

Luego, instalamos PostgreSQL con el siguiente comando:

```terminal
brew install postgresql
```

Homebrew descargará e instalará PostgreSQL en el sistema. Este proceso puede tardar algunos minitos dependiendo de la conexión a Internet.

#### **Iniciar PostgreSQL**

Una vez instalado, podemos iniciar PostgreSQL usando `brew services`:

```terminal
brew services start postgresql
```

Esto iniciará el servidor PostgreSQL y lo hará correr en segundo plano como un servicio del sistema.

#### **Acceder a PostgreSQL con el cliente psql**

Con PostgreSQL en ejecución, podemos interactuar con la base de datos a través del cliente de línea de comandos `psql`. Para conectarte a la base de datos predeterminada `postgres`, usamos el siguiente comando:

```terminal
psql postgres
```