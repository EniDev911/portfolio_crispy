---
title: "Instalar y Configurar PostgreSQL en EC2"
categories: ["Tutoriales", "Devops"]
---


### 1. Instalar PostgreSQL en EC2

Primero, necesitamos instalar PostgreSQL y sus herramientas de cliente en nuestra instancia EC2:

```terminal
sudo apt install
sudo apt install postgresql postgresql-contrib -y
```

### 2. Configurar PostgreSQL

PostgreSQL debería iniciarse automáticamente después de la instalación. Si no es así, debemos iniciarlo manualmente:

```terminal
sudo systemctl start postgresql
```

Luego vereficamos que se encuentre activo:

```terminal
sudo systemctl status postgresql
```

Estos nos mostrará un mensaje como el siguiente:

```
● postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/usr/lib/systemd/system/postgresql.service; enabled; preset: enabled)
     Active: active (exited) since Thu 2024-11-21 14:15:33 UTC; 14min ago
   Main PID: 24313 (code=exited, status=0/SUCCESS)
        CPU: 2ms

Nov 21 14:15:33 ip-<tu-ip> systemd[1]: Starting postgresql.service - PostgreSQL RDBMS...
Nov 21 14:15:33 ip-<tu-ip> systemd[1]: Finished postgresql.service - PostgreSQL RDBMS.
```
{: .noheader .nolineno }

Y para asegurarte de que se inicie automáticamente en cada arranque:

```terminal
sudo systemctl enable postgresql
```

```sql
CREATE DATABASE api_django;
CREATE USER cliente_api WITH PASSWORD 'cliente123';
ALTER ROLE ALL PRIVILEGES ON DATABASE api_django TO cliente_api;
```
{: .nolineno }

Con estos comandos, estamos creando la base de datos y un usuario con privilegios completos sobre esa base de datos.

> Cabe señalar que este usuario se puede conectar desde una aplicación externa, si queremos conectar con este usuario desde el cliente de consola `psql`, debemos cambiar los método de autenticación.
{: .prompt-info }
