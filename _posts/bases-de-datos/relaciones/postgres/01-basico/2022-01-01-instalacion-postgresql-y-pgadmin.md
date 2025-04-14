---
title: "PostgreSQL 🐘: Instalación PostgreSQL y PgAdmin"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres, "Básico"]
tags: [Bases de Datos]
image:
    path: posters/postgres-pgadmin-instalacion.webp
    alt: "Instalar PostgreSQL"
---

En Windows, la forma más fácil de instalar PostgreSQL es utilizando el [**instalador oficial de EnterpriseDB**](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){: target='_blank' }, que incluye **PostgreSQL** y **PgAdmin** (una interfaz gráfica para administrar bases de datos) y otras herramientas.

## __Instalar PostgreSQL y pgAdmin en Windows__

1. Descarga el archivo ejecutable de instalación de la versión más reciente y compatible con tu sistema operativo desde la [página de descarga](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){:target='_blank'}.
2. Ejecuta el archivo ejecutable descargado y sigue el asistente de instalación.

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2218dba173a64f4d9edad55ad098aa0c" title="instalación de postgres y pgadmin" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777" class="my-4"></iframe>

> Por último comprobamos que tanto **PostgreSQL** y **Pgadmin** estén instalados correctamente.
{: .prompt-info }

## __Instalar PostgreSQL y pgAdmin en Linux 🐧__

Ahora, vamos a cubrir la inmstalación de __PostgreSQL__ y __pgAdmin__ en Linux.

### __Paso 1: Actualizar el Sistema__

Primero, actualiza los repositorios del sistema:

```terminal
sudo apt update
```

### __Paso 2: Instalar PostgreSQL__

Segundo, instalar PostgreSQL con algunos paquetes adicionales:

```terminal
sudo apt install postgresql postgresql-contrib
```

Ahora que tenemos el software instalado, podemos comprobar su funcionamiento.

### __Paso 3: Verificar el servicio__

Con el comando `status`, podemos ver en que estado se encuentra el servidor (corriendo o detenido):

```terminal
sudo systemctl statys postgresql
```

Por defecto, PostgreSQL utiliza el concepto de **roles** para gestionar la autenticación y la autorización. Esto significa que PostgreSQL no distingue entre los usuarios y los grupos, y es por ello que prefiere usar el término más flexible como lo es **rol**.


{% include embed/video.html src="postgres_install_ubuntu.mp4" %}
