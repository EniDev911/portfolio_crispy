---
title: "PostgreSQL 🐘 : Copias de Seguridad y Restauración"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
tags: [Bases de Datos]
---

La gestión adecuada de copias de seguridad y restauración es esencial para garantizar la integridad y disponibilidad de tus datos en PostgreSQL.

## Métodos de Copias de Seguridad

PostgreSQL ofrece varios métodos para realizar copias de seguridad:

1. **Copias de Seguridad Lógicas:**
   Utilizan comandos como `pg_dump` y `pg_dumpall` para exportar los datos en un formato que se puede restaurar fácilmente.

2. **Copias de Seguridad Físicas:**
   Implican copiar los archivos del sistema de archivos donde PostgreSQL almacena los datos. Esto generalmente se hace mediante herramientas de nivel de sistema, como `rsync`.

### Realizando Copias de Seguridad Lógicas

#### Usando pg_dump

El programa [`pg_dump`](https://www.postgresql.org/docs/current/app-pgdump.html){:target='_blank'} viene incluido en el paquete de instalación de **PostgreSQL** y por ende lo podemos utilizar directamente por línea de comando desde la terminal. En una nueva terminal hacemos una copia de seguridad de una base de datos existente en el servidor:

```terminal
pg_dump -U usuario -d dbname -f backup.sql
```

- **-U:** Especifica el usuario.
- **-d:** Indica la base de datos que se va a respaldar.
- **-f:** Define el archivo donde se guardará la copia.

En el siguiente ejemplo realizamos una copia de seguridad de una base de datos que tengo de mascotas:

![listar roles](/assets/img/postgres/pgdump-db-mascotas-dark.png){: .dark }
![listar roles](/assets/img/postgres/pgdump-db-mascotas-light.png){: .light }


#### Usando pg_dumpall

Si necesitas respaldar todas las bases de datos en una instancia de PostgreSQL, usa [`pg_dumpall`](https://www.postgresql.org/docs/current/app-pg-dumpall.html){:target='_blank'}:

```terminal
pg_dumpall -U usuario -f all_backup.sql
```

Este comando generará un archivo SQL que contiene la definición y los datos de todas las bases de datos.

### Restauración de Copias de Seguridad


Para restaurar una copia de seguridad realizada con `pg_dump`, podemos utilizar el cliente de terminal `psql` de la siguiente manera:

```terminal
psql -U usuario -d dbname -f backup.sql
```

Si has hecho una copia de seguridad con `pg_dumpall`, podemos restaurar usando el cliente de terminal `psql` de la siguiente menera:

```terminal
psql -U usuario -f all_backup.sql
```



