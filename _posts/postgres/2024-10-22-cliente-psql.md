---
title: "PostgreSQL 🐘 : Cliente de línea de comandos"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
mermaid: true
tags: [Bases de Datos]
---


El cliente de línea de comandos **psql** viene incluido en el paquete de instalación de **PostgreSQL** nos permite establecer una conexión a uns servidor de Postgres. Además, **psql** proporciona una serie de [metacomandos](https://www.postgresql.org/docs/current/app-psql.html#APP-PSQL-META-COMMANDS){:target='_blank'} y funciones para facilitar una variedad de tareas.


## Conectarse al servidor

Para conectarse al servidor, se necesita saber el **nombre de la base de datos** de destino, el **host**, **puerto** del servidor, **nombre de usuario** y **password** aunque también algunos parámetros son opcionales si establecemos algunas modificaciones en la configuración o definimos algunas variables de entorno. Para que podamos probar una conexión al servidor a través de psql, abrimos una nueva terminal y escribimos la siguiente instrucción. Ejemplo: (**host**, **usuario**, **base de datos**, **puerto**)

```bash
psql -h localhost -U postgres -d dbname -p 5432
```
{: .nolineno }

> Tenga en cuenta que no puede simplemente conectarse a cualquier base de datos con cualquier nombre de usuario. El usuario que desea conectarse debe tener los permisos previamente creados por el administrador del sistema de base de datos.
{: .prompt-info }

Si no se especifica el nombre de la base de datos de destino, se interpretará como nombre de base de datos de destino el mismo que el nombre de usuario. En la siguiente instrucción:

```bash
psql -h localhost -U postgres
```
{: .nolineno }

Es equivalente a estar solicitando conectarnose a una base de datos de destino con el nombre de **postgres**. El número de puerto predeterminado se determina en tiempo de compilación. Dado que el servidor de la base de datos utiliza el mismo valor predeterminado **5432**, en la mayoría de los casos no se tendrá que especificar el puerto. 

Cuando los parámetros son correctos y se establece una conexión exitosa el prompt de la terminal nos muestra la versión del servidor y la instrucción para solicitar ayuda:

```
=> psql -h localhost -U postgres
psql (12.10)
Type "help" for help.
```

## Realizar consultas sobre la base de datos

### Listar las bases de datos

Una vez conectados a un servidor podemos realizar consultas. Por ejemplo, para obtener el listado de las bases de datos alojadas usamos el meta comando `\l`:

![listar bases de datos](/assets/img/postgres/psql-list-databases.png)


