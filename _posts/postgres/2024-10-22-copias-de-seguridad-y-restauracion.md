---
title: "PostgreSQL 🐘 : Copias de Seguridad y Restauración"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
image: posters/postgres-backup.png
tags: [Bases de Datos]
pin: true
---

Las copias de seguridad (backup) son un aspecto esencial en la administración de bases de datos, especialmente cuando se trata de bases de datos críticas como PostgreSQL. La gestión adecuada de copias de seguridad y restauración es esencial para garantizar la integridad y disponibilidad de tus datos en caso de pérdida o corrupción de la base de datos.

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

![listar roles](postgres/pgdump-db-mascotas-dark.png){: .dark }
![listar roles](postgres/pgdump-db-mascotas-light.png){: .light }


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

Otra opción es restaurar bases de datos usando el programa `pg_restore` a través de la línea de comandos:

```terminal
pg_restore -U <user> -d <dbname> -v "backup.dump"
```

---

## Mejores Prácticas

Aquí podemos proponer una variedad de recomendaciones, considerando como importantes las siguientes:

- **Automatización**: Programar las copias de seguridad para que se realicen de manera automática, usando herramientas como `cron` (en linux) o tareas programadas (en Windows).

- **Almacenamiento Remoto**: Guardar las copias de seguridad en un lugar seguro y remoto (por ejemplo, en un servicio de almacenamiento en la nube) para protegerlas de desastres locales.

- **Pruebas de Restauración**: Realizar pruebas periódicas de restauración para garantizar que las copias de seguridad sean válidas y puedas recuperar los datos en caso de emergencia.

### Crear un Script de Copia de Seguridad

Primero, necesitamos crear un script que ejecute la copia de seguridad de la base de datos PostgreSQL. Podemos usar `pg_dump` dentro del script para realizar una copia de seguridad lógica de la base de datos.

Puedes usar el siguiente ejemplo de código, sólo cambia los valores que correspondan por los de tu configuración:

```bash
#!/bin/bash

# Fecha actual para nombrar el archivo de backup de manera única
FECHA=$(date +\%Y\%m\%d\%H\%M\%S)

# Directorio donde se guardará el backup
BACKUP_DIR="/ruta/a/tu/backups"

# Nombre de la base de datos
DB_NAME="nombre_basedatos"

# Usuario de PostgreSQL
DB_USER="usuario"

# Archivo de backup
BACKUP_FILE="$BACKUP_DIR/backup_$DB_NAME_$FECHA.dump"

# Comando pg_dump para realizar la copia de seguridad
pg_dump -U $DB_USER -F c -b -v -f $BACKUP_FILE $DB_NAME

# Verificar si el comando pg_dump fue exitoso
if [ $? -eq 0 ]; then
  echo "Backup exitoso: $BACKUP_FILE"
else
  echo "Error al realizar el backup de la base de datos."
fi
```
{:  file="backup_postgres.sh" }
