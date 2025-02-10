---
title: "MySQL 🐬 : Instalación en Ubuntu"
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - 01. Básico"]
tags: [Bases de Datos]
image:
  path: posters/mysql-en-ubuntu.webp
  lqip: data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAAEwAACQAAQUxQSCcAAAABL2AgbRv/lrf9sRERgQDDEBQ1KWQQyyKcv0zfA4jo/wR0rZeBywgAVlA4IFYAAACwAwCdASoUAAoAPzmEuVOvKKWisAgB4CcJZAAAWp+zrp5N706UoAD+0yzGH55omUGTA1lboMfXjsGi2Ix/W5CFQKGoOFGcb4v9/EHv/E2nEamNObwAAA==
pin: true
---

En este post, cubriremos cómo instalar MySQL en una máquina Ubuntu, cómo configurarlo para que funcione de manera segura y cómo verificar que la instalación se haya completado correctamente.

## **Requisitos Previos**

Antes de comenzar, asegurate de tener lo siguiente:

- Una instalación de **Ubuntu** (esta guía es aplicable a versiones **Ubuntu 20.04.4 LTS** y versiones más recientes como **Ubuntu 22.04.1 LTS**, **Ubuntu 24.04.1 LTS**, etc).
- Acceso a una cuenta con privilegios **sudo**.

## **Comenzar Instalación**

### **1. Actualizar el Sistema**

Siempre es importante que el sistema esté actualizado antes de instalar cualquier software. Para asegurarte que tienes los últimos paquetes y actualizaciones de seguridad, sigue estos pasos:

- Abre una nueva terminal y actualizar el índice de paquetes apt con el siguiente comando:
  ```terminal
  sudo apt update
  ```

- Luego, actualizamos todos los paquetes instalados con el siguiente comando:
  ```terminal
  sudo apt upgrade -y
  ```

### **2. Instalar MySQL**

Ubuntu ofrece una versión estable y reciente de MySQL directamente desde sus repositorios predeterminados.

- Para instalar el paquete de **MySQL Server** ejecutamos el siguiente comando:
  ```terminal
  sudo apt install mysql-server
  ```

![Paso 1](mysql/mysql-ubuntu-install-step-1.png)

- Concluida la instalación, el demonio de MySQL se iniciará automáticamente. Para verificar si esta ejecutandose el servidor usamos el siguiente comando:

  ```terminal
  sudo systemctl status mysql
  ```

- Con el siguiente comando podemos ver en que puerto está corriendo MySQL:

  ```terminal
  cat /etc/services | grep mysql
  ```

### **3. Instalación Segura**

En Debian y derivados, el paquete mysql-server incluye el script Perl **mysql\_secure\_installation**, el cual permite mejorar la seguridad de la instalación por defecto. Es recomendable correr este script en todas las instalaciones de servidores MySQL para sistemas en producción. En resumen nos permite:

* Cambiar la contraseña del usuario "root".
* Deshabilitar el acceso remoto para el usuario "root".
* Eliminar cuentas de usuario anónimas que pueden ingresar sin necesidad de una contraseña.
* Eliminar la base de datos "test" (si existe), y todo privilegio que permita a cualquier usuario el acceso a bases de datos cuyos nombres comienzan con "test\_".

Utilizar el script para una configuración segura:

```terminal
sudo mysql_secure_installation
```

La primera pregunta nos solicitará si queremos validar password para conectarnos al servidor sea seguro, si lo deseamos al momento de crear un nuevo usuario en el sistema MySQL nos validará si el password cumple con las condiciones mínimas de seguridad. Si no queremos esto solamente ingresamos **`N`**

![script de seguridad](mysql/mysql-ubuntu-secure-installation-1.png)

Luego de acuerdo a la opción que ingresemos nos solicitará ingresar el password para el usuario root (Ojo: esto no tendrá efecto hasta que cambiemos el método de autenticación al usuario root de **auth\_socket** a otro complemento). Una vez ingresamos nuestro password, nos preguntará si deseamos remover a los usuarios ánonimos que se crean por defecto junto a la instalación de MySQL, lo mejor es removerlos.

![script de seguridad](mysql/mysql-ubuntu-secure-installation-2.png)

Normalmente, a root solo se le debe permitir conectarse desde 'localhost'. Para así asegurar que no puedan adivinar la password de root desde la red. Así que deshabilitamos el logín remoto.

![script de seguridad](mysql/mysql-ubuntu-secure-installation-3.png)

Luego nos preguntá si queremos eliminar la base de datos de prueba, esto es opcional.

![script de seguridad](mysql/mysql-ubuntu-secure-installation-4.png)

Luego nos pregunta si queremos recargar la tabla de privilegios. Pondremos si (Y).

![script de seguridad](mysql/mysql-ubuntu-secure-installation-5.png)


### **4. Ajustes de Autenticación y Privilegios de Usuarios**

En los sistemas Ubuntu con MySQL 5.7 (y versiones posteriores), el usuario **root** de MySQL se configura para la autenticación usando el complemento **auth\_socket** de manera predeterminada en lugar de una contraseña. Esto en muchos casos proporciona mayor seguridad y utilidad, pero también puede generar complicaciones cuando deba permitir que un programa externo (como phpMyAdmin) acceda al usuario.

Para usar un password para conectar a MySQL como **root**, deberemos cambiar el método de autenticación de **auth\_socket** a otro complemento, como **caching\_sha2\_password** o **mysql\_native\_password**. Para hacer esto, abra la consola de MySQL desde su terminal:

```terminal
sudo mysql
```

Para ver el método de autenticación utilizado por las cuentas de usuarios de MySQL ejecutamos la siguiente sentencia dentro de la consola de MySQL:

```sql
SELECT user, authentication_string, plugin, host FROM mysql.user;
```
{: .nolineno }

![query auth user](mysql/mysql-ubuntu-query-auth-user.png)

Para cambiar el método de autenticación de **root** con una password, utilizaremos el comando **ALTER USER** para cambiar el complemento de autenticación. Lo podriamos hacer todo en una sola línea como lo siguiente:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'password';
```
{: .nolineno }

O realizar el cambio en dos pasos:

- **Primero** cambiamos solo el complemento:
  ```sql
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password;
  ```
  {: .nolineno }

- **Segundo** cambiamos el password (La función **`user()`** devuelve al usuario en sessión):
  ```sql
  ALTER USER user() IDENTIFIED BY 'Strong_Password;
  ```
  {: .nolineno }

- Y por último recargamos la tabla de permisos:
  ```sql
  FLUSH PRIVILEGES;
  ```
  {: .nolineno }

### **5. Ajustes de Autenticación y Privilegios de Usuarios**

Otra opción recomendada es crear un nuevo usuario administrativo con todos los privilegios y acceso a todas las bases de datos:

```sql
GRANT ALL PRIVILEGES ON *.* TO 'admin_user'@'localhost'
IDENTIFIED BY 'very_strong_password';
```
{: .nolineno }


## **Desinstalar MySQL**

Para desinstalar MySQL en Ubuntu, puedes seguir estos pasos:

### **1. Detén el servicio de MySQL**

- Primero, debemos detener el servicio de MySQL si está en ejecución:
  ```terminal
  sudo systemctl stop mysql
  ```

### **2. Desinstalar los paquetes de MySQL**

- Ahora, eliminamos los paquetes de MySQL con el siguiente comando para hacerlo:
  ```terminal
  sudo apt-get remove --purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
  ```

### **3. Eliminar dependencias y archivos residuales**

- Luego, eliminamos los paquetes no necesarios que podrían quedar después de la desinstalación:
  ```terminal
  sudo apt-get autoremove
  sudo apt-get autoclean
  ```
