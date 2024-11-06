---
title: "MySQL 🐬 : Administrar Usuarios"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
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
