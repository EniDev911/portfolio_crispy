---
title: "MySQL 🐬 : Administrar Usuarios"
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - 02 Intermedio"]
tags: [Bases de Datos]
pin: true
image:
    path: posters/mysql-administrar-usuarios.png
    alt: "Administrar Usuarios y Permisos en MySQL"
---

La administración de usuarios es una de las tareas más importantes cuando se trabaja con MySQL, especialmente cuando necesitas controlar quién puede acceder a las bases de datos y qué operaciones pueden realizar. Esto es crucial para mantener la seguridad y la integridad de los datos en un entorno de producción.

## **Comandos para Administrar Usuarios**

### **Crear Usuarios**

Por medio del comando `CREATE USER` podemos crear y configurar un usuario (siempre y cuando tengamos los privilegios correspondientes), para que el nuevo usuario pueda iniciar sesión y se le puede asignar una contraseña por medio de la cláusula `IDENTIFIED BY`.

Una vez conectado al servidor estamos en condiciones para crear usuarios, la sintaxis para ello es muy sencila:

```sql
CREATE USER '<user-name>`'@'<host>' IDENTIFIED BY '<password-user>'
```
{: .nolineno }

- `<user-name>`: El nombre de usuario que crearemos.
- `<host>`: El host desde cual el usuario puede conectarse (se puede usar `IP` o `%` para cualquier host).
- `<password-user>`: La contraseña del usuario.

**Ejemplo:**

```sql
CREATE USER 'juan'@'localhost' IDENTIFIED BY 'miContraseña123';
````
{: .nolineno }


#### Crear un Usuario con Contraseña Caducada

En el siguiente ejemplo, se crea una cuenta de usuario utilizando el complemento de autenticación predeterminado. Además, la contraseña proporcionada se marca como caducada, lo que obliga al usuario a eligir una nueva cuando se conecte por primera vez al servidor:

```sql
CREATE USER 'lucas'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE;
```
{: .nolineno }

> El comando `ALTER USER` se introdujo en versiones de **MariaDB 10.4** en adelante y **MySQL 5.7** en adelante, por lo que si usas versiones anteriores, se debe usar [`SET PASSWORD`](https://dev.mysql.com/doc/refman/8.4/en/set-password.html)
{: .prompt-info }

Si en el caso de que la versión de MySQL o MariaDB son más antiguas, para cambiar la contraseña, lo haríamos de la siguiente manera:

```sql
SET PASSWORD FOR current_user() = PASSWORD('lucas123');
```
{: .nolineno }

## **Administrar Privilegios**

En MySQL, los privilegios determinan qué operaciones puede realizar un usuario en una base de datos. Administrar correctamente los privilegios es esencial para la seguridad y el control de acceso a los datos.

**DCL** (*Data Control Language*) son comandos SQL que permiten a un usuario administrador controlar el acceso y acciones sobre las bases de datos a otros usuarios. Estos comandos son principalmente dos:

- `GRANT`: Usado para otorgar permisos de acceso al usuario para realizar tareas determinadas en las bases de datos permitidas.
- `REVOKE`: Elimina permisos que han sido previamente concendido con `GRANT`.

Algunas tareas sobre las que se pueden conceder o denegar permisos son las siguientes: `CONNECT`, `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `USAGE`, etc.


### **Asignar Privilegios a Usuarios**

Una vez que un usuario es creado, puedes asignarle privilegios sobre una o varias bases de datos. El comando `GRANT` se usa para otorgar estos privilegios.

Para ver una lista más detallada de todos los permisos que pueden ser asignados a una cuenta de usuario, nos conectamos al servidor y ejecutamos el siguiente comando:

```sql
SHOW PRIVILEGES;
```
{: .nolineno }


Para otorgar todos los permisos a un usuario sobre todo el servidor, sería de la siguiente manera:

```sql
GRANT ALL PRIVILEGES ON *.* TO '<user-name>'@`<host>`;
```
{: .nolineno }

> Los asteriscos indican que los permisos serán asignados a todas las bases de datos y a todas las tablas.
{: .prompt-info }
