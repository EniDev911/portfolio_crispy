---
title: "PostgreSQL 🐘 : Administración de Usuarios y Roles"
categories: [Bases de Datos Relacionales, Postgres, "Intermedio"]
---

## __¿Qué son los roles en PostgreSQL?__

PostgreSQL usa un sistema basado en __roles__ para manejar la autenticación y autorización. Un __rol__ puede representar lo siguiente:

- Un __usuario__ (si tiene el atributo `LOGIN`).
- Un __grupo__ de permisos (sin `LOGIN`).
- Una combinación de ambos.

En otras palabras, todo el control de acceso en PostgreSQL (lectura, escritura, conexión, etc) está mediado por __roles__.

> PostgreSQL no usa la palabra __"usuario"__ internamente. __Todo es un rol__, y los que pueden iniciar sesión son tratados como usuarios.
{: .prompt-info }


## __Crear Roles__

### __Ejemplos Prácticos__

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
