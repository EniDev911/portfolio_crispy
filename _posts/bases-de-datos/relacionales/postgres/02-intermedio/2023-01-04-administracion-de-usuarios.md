---
title: "Administración de Usuarios y Roles"
icon: "🐘"
categories: [Bases de Datos Relacionales, Postgres, "Intermedio"]
permalink: /postgres/administracion-de-usuarios
image:
  path: posters/administrar-usuarios-postgres.webp
  lqip: data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAACQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJZwC/OBEDEqd4OwMAAP7NlqGD6PSb3698ElWFMiTth2jkpsNXEinI/O14jatgs9mrUGUtfQAAAA==
---

## ¿Qué es un rol en PostgreSQL?

PostgreSQL usa un sistema basado en __roles__ para manejar la autenticación y autorización. Un __rol__ puede representar:

- Un __usuario__ (si tiene el atributo `LOGIN`).
- Un __grupo__ de permisos (sin `LOGIN`).
- Una combinación de ambos.

En otras palabras, todo el control de acceso en PostgreSQL (lectura, escritura, conexión, etc) está mediado por __roles__. En la siguiente imagen se puede apreciar como se representa:

![roles en postgres](postgres/postgres_roles.webp)
_modelo de control de acceso basado en roles en PostgreSQL_

Esta imagen representa el modelo de control de acceso basado en **roles** en PostgreSQL, mostrando cómo un rol puede acceder a una base de datos, sus esquemas y los objetos dentro de esos esquemas.

__Elementos de la imagen__:

1. **PG\_ROLE (rol de PostgreSQL)**:

   * Representa un **rol** o **usuario** que se conecta al sistema de base de datos.
   * Este rol necesita tener los permisos adecuados para acceder y operar dentro de la base de datos.

2. **Base de Datos** (capa externa):

   * El primer nivel de acceso. El rol necesita el privilegio de **conexión** (`CONNECT`) a la base de datos para entrar.

3. **Esquema** (capa intermedia):

   * Dentro de una base de datos hay **esquemas**, que actúan como contenedores para organizar objetos como tablas, vistas, funciones, etc.
   * El rol necesita permiso de **uso** (`USAGE`) sobre el esquema para poder ver y utilizar los objetos dentro de él.

4. **Objetos del Esquema** (capa interna):

   * Incluyen tablas, vistas, funciones, secuencias, etc.
   * El rol necesita permisos específicos sobre cada objeto, como:

     * `SELECT` para consultar una tabla
     * `INSERT`, `UPDATE`, `DELETE` para modificarla
     * `EXECUTE` para ejecutar funciones

Para que un rol en PostgreSQL pueda acceder a un objeto como una tabla, necesita tener permisos en **tres niveles**:

1. Permiso para entrar a la **base de datos**.
2. Permiso para acceder al **esquema**.
3. Permiso para interactuar con los **objetos del esquema**.

> En PostgreSQL __todo es un rol__, y los que pueden iniciar sesión son tratados como "usuarios".
{: .prompt-info .mt-3 }

## Roles predefenidos

Como se mencionó anteriormente, en PostgreSQL no existen los usuarios y los grupos como entidades separadas. En su lugar, se utilizan __roles__, que pueden actuar tanto como usuarios individuales o como grupos, dependiendo de cómo se configuren. 

Para ver los roles existentes:  

```sql
SELECT rolname from pg_roles;
```
{: .nolineno }


```
          rolname
---------------------------
 postgres
 pg_database_owner
 pg_read_all_data
 pg_write_all_data
 pg_monitor
 pg_read_all_settings
 pg_read_all_stats
 pg_stat_scan_tables
 pg_read_server_files
 pg_write_server_files
 pg_execute_server_program
 pg_signal_backend
 pg_checkpoint
```
{: .noheader  }

> Para ejecutar la consulta anterior, debes tener permisos de superusuario.
{: .prompt-info .fit-content }

La mayoría de los roles que se muestran son roles __predefinidos__ que ya vienen incluidos en PostgreSQL. Estos roles pueden ser asignados a otros roles o usuarios para otorgar permisos específicos sin necesidad de conceder privilegios de superusuario. A continuación, se explica la función de cada uno:

__`postgres`__
: Es el rol de superusuario por defecto que se crea durante la instalación. Tiene **todos los privilegios**

__`pg_database_owner`__
: Da permisos sobre todas las bases de datos que el rol haya creado. Similar a ser dueño de todas tus bases de datos.

__`pg_read_all_data`__
: Permite leer **todas las tablas** y **vistas** de todas las bases de datos (acceso global de solo lectura).

__`pg_monitor`__
: Acceso de solo lectura a funciones y vistas de monitoreo (ideal para herramientas de observabilidad o DevOps).

__`pg_read_all_settings`__
: Permite leer la configuración del servidor (`SHOW ALL`, por ejemplo). No puede cambiarla.

__`pg_stat_scan_tables`__
: Permite hacer escaneos de tablas para ver estadísticas, sin acceder a los datos.

__`pg_read_server_files`__
: Permite leer archivos del sistema de archivos del servidor (como logs o archivos CSV para importar). ⚠Riesgoso si se mal utiliza.

__`pg_write_server_files`__
: Permite escribir archivos en el servidor. Igual de sensible.

__`pg_execute_server_program`__
: Permite ejecutar programas del sistema operativo desde el servidor PostgreSQL (`COPY`, comandos externos, etc.). Muy delicado.

__`pg_signal_backend`__
: Permite enviar señales (como `pg_cancel_backend` o `pg_terminate_backend`) a otros procesos del servidor.

### Crear nuevos roles

Cada instalación de PostgreSQL incluye una herramienta para crear roles llamada `createuser`, que es un _wrapper_ (envoltorio) que facilita la creación de roles de forma sencillapermite crear un roles de forma sencilla y directa desde la línea de comandos.

Veamos un ejemplo rápido para crear un rol para un nuevo usuario y que pueda conectarse al servidor:

```terminal
createuser --interactive -P -W
```

Para poder crear un nuevo rol (usuario), es necesario contar con privilegios de __superusuario__ o, al menos, con el permiso `CREATEROLE`.

Crear un rol sin permisos de conexión (grupo):

```sql
CREATE ROLE solo_lectura;
```
{: .nolineno }

Crear un usuario (rol con login):

```sql
CREATE ROLE juan WITH LOGIN PASSWORD 'segura123';
```
{: .nolineno }

Crear usuarios con permisos específicos:

```sql
CREATE ROLE maria LOGIN CREATEDB CREATEROLE PASSWORD 'clave321';
```
{: .nolineno }

### ¿Por qué no puedo eliminar un usuario o rol?

**Descripción corta**  

Cuando un usuario o rol en PostgreSQL crea un objeto, como una tabla o un esquema, el usuario o rol es el propietario del objeto creado. Si intenta eliminar un usuario o rol que posee uno o más objetos en cualquier base de datos o tiene privilegios respecto a estos objetos, recibirá un error que indica que hay objetos que dependen de del usuario o rol junto con los permisos concedidos, si los hay.

Para eliminar un usuario o rol que tiene objetos dependientes, debe hacer lo siguiente:

1. Reasignar la propiedad de estos objetos a otro usuario.
2. Revoque todos los permisos que se hayan concedido al usuario o rol.
3. Eliminar al usuario o rol

> Si estos objetos ya no son necesarios, considere la posibilidad de eliminarlos y, a continuación, eliminar el rol. Puede eliminar todos los objetos que son propiedad de un rol en una base de datos mediante el comando [`DROP OWNER`](https://www.postgresql.org/docs/current/sql-drop-owned.html). También puede revocar los privilegios concedidos al rol en los objetos de esa base de datos o los objetos compartidos. Una vez que el comando **DROP OWNED** se ejecute correctamente, puede eliminar la función.
{: .prompt-info }

**Resolución** 

En el siguiente ejemplo, se utilizan tres roles de base de datos diferentes:

- **test_user**: este es el usuario o rol que se debe administrar
- **admin_user**: este es el rol que se usa para eliminar el usuario o rol requeridos. Este usuario es el usuario con más privilegios.
- **another_user**: este es el usuario o rol que se le asigna la propiedad de los objetos que son propiedad de test_user. 

Ejecuta el siguiente comando para ver el rol con el que se inició sesión:  

```sql
SELECT current_user;
```
{: .nolineno }

Ahora intenta eliminar un usuario o rol con objetos dependientes, aparece un error similar al siguiente:  

```sql
DROP ROLE test_user;
ERROR:  role "test_user" cannot be dropped because some objects depend on it
DETAIL:  privileges for database pg_example
owner of table test_table
owner of schema test_schema
owner of sequence test_schema.test_seq
privileges for table test_t2
```
{: .noheader }

En el mensaje de error, se obtiene la siguiente información:  

- El rol **test_user** tiene privilegios concedidos en la base de datos **pg_example** y en la tabla **test_t2**.
- El rol **test_user** es propietario de la tabla **test_table**, el esquema **test_schema** y un objeto de secuencia **test_seq** en **test_schema**.

> **Nota:** 
```txt
pg_another_db=> DROP ROLE test_user;
ERROR:  role "test_user" cannot be dropped because some objects depend on it
DETAIL:  privileges for database pg_example
4 objects in database pg_example
```

Para eliminar el usuario o la función, debemos reasignar la propiedad de los objetos en propiedad a otro usuario o rol y revocar los permisos asociados. Para ello podemos utilizar el comando [`REASSIGN OWNED`](https://www.postgresql.org/docs/current/sql-reassign-owned.html) de PostgreSQL para reasignar la propiedad de estos objetos a otro usuario. Al ejecutar este comando, es posible que aparezca un error similar al siguiente:  

```text
pg_example=> select current_user;
 current_user
--------------
 test_user
pg_example=> REASSIGN OWNED BY test_user TO another_user;
ERROR:  permission denied to reassign objects
```

Para resolver este problema, debe conceder el usuario o rol al usuario que está reasignando la proppiedad. No puede ser `test_user` para hacerlo porque **`test_user`** no es el propietario **`another_user`**. Por lo tanto, es posible que aparezca un error similar al siguiente:  

```text
pg_example=> select current_user;
 current_user
--------------
 test_user
pg_example=> grant another_user to test_user;
ERROR:  must have admin option on role "another_user"
```

Puede realizar  una de las siguientes acciones para conceder al usuario o el rol al usuario que está reasignando la propiedad:  

- Iniciar sesión con el **usuario maestro** y ejecutar el comando `GRANT`

```
pg_demodb=> select current_user;
+--------------+
| current_user |
+--------------+
| admin_user   |
+--------------+
pg_demodb=> GRANT another_user TO test_user;
GRANT ROLE
```

En este caso, se produce un error aunque el comando `REASSIGN` se haya realizado correctamente. Esto se debe a que los privilegios de **test_user** deben revocarse.