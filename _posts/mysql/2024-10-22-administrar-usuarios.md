---
title: "MySQL 🐬 : Administrar Usuarios"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
image:
    path: /assets/img/posters/mysql-administrar-usuarios.png
    alt: "Administrar Usuarios y Permisos en MySQL"
---


### Crear Usuarios

Por medio del comando `CREATE USER` podemos crear y configurar un usuario (siempre y cuando tengamos los privilegios correspondientes), para que el nuevo usuario pueda iniciar sesión y se le puede asignar una contraseña por medio de la cláusula `IDENTIFIED BY`.

Una vez conectado al servidor estamos en condiciones para crear usuarios, la sintaxis para ello es muy sencila:

```sql
CREATE USER '<user-name>`'@'<host>' IDENTIFIED BY '<password-user>'
```
{: .nolineno }

#### 1. Crear un usuario con contraseña caducada

En este ejemplo, creamos una cuenta de usuario con el complemento de autenticación predeterminado y la contraseña proporcionada la marcamos como caducada, para que el usuario deba eligir una nueva cuando se conecte por primera vez al servidor:

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

### Otorgar Permisos a Usuarios


DCL (*Data Control Language*) son comandos SQL que permiten a un usuario administrador controlar el acceso y acciones sobre las bases de datos a otros usuarios. Estos comandos son principalmente dos:

- `GRANT`: Usado para otorgar permisos de acceso al usuario para realizar tareas determinadas en las bases de datos permitidas.
- `REVOKE`: Elimina permisos que han sido previamente concendido con `GRANT`.

Algunas tareas sobre las que se pueden conceder o denegar permisos son las siguientes: `CONNECT`, `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `USAGE`, etc.

Para ver una lista más detallada de todos los permisos que pueden ser asignados a una cuenta de usuario, nos conectamos al servidor y ejecutamos el siguiente comando:

```sql
SHOW PRIVILEGES;
```
{: .nolineno }


#### Asignar Permisos a un Usuario

Para asignar permisos a una cuenta, debemos utilizar el comando dcl `GRANT`.

Para otorgar todos los permisos a un usuario sobre todo el servidor, sería de la siguiente manera:

```sql
GRANT ALL PRIVILEGES ON *.* TO '<user-name>'@`<host>`;
```
{: .nolineno }

> Los asteriscos indican que los permisos serán asignados a todas las bases de datos y a todas las tablas.
{: .prompt-info }
