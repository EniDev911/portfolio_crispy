---
title: "PostgreSQL 🐘 : Cliente de línea de comandos"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
tags: [Bases de Datos]
---


El cliente de línea de comandos **psql** viene incluido en el paquete de instalación de **PostgreSQL** nos permite establecer una conexión a un servidor de Postgres. Además, **psql** proporciona una serie de [metacomandos](https://www.postgresql.org/docs/current/app-psql.html#APP-PSQL-META-COMMANDS){:target='_blank'} y funciones para facilitar una variedad de tareas.


## Conectarse al servidor

Para conectarse al servidor, se necesita saber el **nombre de la base de datos** de destino, el **host**, **puerto** del servidor, **nombre de usuario** y **password** aunque también algunos parámetros son opcionales si establecemos algunas modificaciones en la configuración o definimos algunas variables de entorno. Para que podamos probar una conexión al servidor a través de psql, abrimos una nueva terminal y escribimos la siguiente instrucción. Ejemplo: (**host**, **usuario**, **base de datos**, **puerto**)

```terminal
psql -h localhost -U postgres -d dbname -p 5432
```

> Tenga en cuenta que no puede simplemente conectarse a cualquier base de datos con cualquier nombre de usuario. El usuario que desea conectarse debe tener los permisos previamente creados por el administrador del sistema de base de datos.
{: .prompt-info }

Si no se especifica el nombre de la base de datos de destino, se interpretará como nombre de base de datos de destino el mismo que el nombre de usuario. En la siguiente instrucción:

```terminal
psql -h localhost -U postgres
```

Es equivalente a estar solicitando conectarnose a una base de datos de destino con el nombre de **postgres**. El número de puerto predeterminado se determina en tiempo de compilación. Dado que el servidor de la base de datos utiliza el mismo valor predeterminado **5432**, en la mayoría de los casos no se tendrá que especificar el puerto. 

Cuando los parámetros son correctos y se establece una conexión exitosa el prompt de la terminal nos muestra la versión del servidor y la instrucción para solicitar ayuda:

```terminal
$ psql -h localhost -U postgres
psql (12.10)
Type "help" for help.
```

## Realizar consultas en el servidor

### Listar las bases de datos

Una vez conectados a un servidor podemos realizar consultas. Por ejemplo, para obtener el listado de las bases de datos alojadas usamos el metacomando `\l`:

![listar bases de datos](postgres/psql-list-databases-dark.png){: .dark }
![listar bases de datos](postgres/psql-list-databases-light.png){: .light }

### Listar a los usuarios

El metacomando `\du` se utiliza para mostrar la lista de todos los roles (usuarios y grupos) existentes en el servidor de PostgreSQL:

![listar roles](postgres/psql-list-users-dark.png){: .dark }
![listar roles](postgres/psql-list-users-light.png){: .light }

### Información de la conexión

El metacomando `\conninfo` muestra la información sobre la conexión actual:

```
enidev911=# \conninfo
You are connected to database "enidev911" via socket as user "enidev911" via socket in "/var/run/postgresql" at port "5432".
```
{: .pre-wrap }
