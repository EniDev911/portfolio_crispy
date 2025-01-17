---
title: "PostgreSQL 🐘 : Almacenar credenciales de forma segura en archivo pgpass"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
tags: [Bases de Datos]
---

Cuando trabajas con bases de datos PostgreSQL y en general, una de las tareas más comunes es conectarte a la base de datos desde la línea comandos usando el cliente `psql`. Sin embargo, cada vez que te conectas, PostgreSQL te pedirá la contraseña. Esto puede resultar tedioso, especialmente cuando automatizas tareas o trabajas con scripts. Para evitar este inconveniente, PostgreSQL ofrece una herramienta llamada `pgpass`, que permite almacenar las credenciales de acceso de manera segura y automática, evitando la necesidad de ingresar la contraseña cada vez que te conectas. En este post veremos cómo crear y utilizar el archivo `pgpass`.

### **¿Cómo utilizar el archivo pgpass?**


#### **Crear el archivo pgpass**

1. Abrimos una terminal o símbolo del sistema.
2. Crear el archivo `pgpass` en la ubicación que corresponda según tu sistema operativo.

{% tabs crear_pgpass %}
{% tab crear_pgpass Linux/macOS %}
La ubicación del archivo en **Linux/macOS** normalmente se encuentra en el directorio de inicio de tu usuario (Ej: `~/.pgpass`). Para crear el archivo ejecuta el siguiente comando:
```terminal
touch ~/.pgpass
```
{% endtab %}
{% tab crear_pgpass Windows %}
En **Windows** debes buscar el destino de instalación, puede ser algo como `C:\Users\<usuario>\AppData\Roaming\postgresql\pgpass.conf`. Una vez encontrado, ejecuta el siguiente comando:
```terminal
echo '' > pgpass.conf
````
{% endtab %}
{% endtabs %}

#### **Formato del archivo pgpass**

El archivo `pgpass` tiene un formato muy sencillo, donde cada línea describe las credenciales para una conexión específica. La estructura es la siguiente:

```
hostname:port:database:username:password
```
{: .nolineno file="pgpass" }

- **`hostname`**: El nombre del host del servidor de la base de datos. Si la base de datos está en tu máquina local, usamos `localhost`.
- **`port`**: El puerto en el que PostgreSQL está escuchando. El puerto predeterminado es `5432`, aunque puede ser otro si lo has configurado de manera diferente.
- **`database`**: El nombre de la base de datos a la que deseas conectarte.
- **`username`**: El nombre de usuario con el que te conectarás a la base de datos.
- **`password`**: La contraseña asociada a ese usuario.

#### **Añadir las credenciales**

Escribe las credenciales necesarias en el archivo `pgpass` siguiendo el formato indicado anteriormente. Puedes agregar tantas entradas como necesites, una por línea.

**Ejemplo:**

```
localhost:5432:postgres:admin:secreta123
```
{: file="pgpass" }

#### **Conectarse a PostgreSQL sin ingresar la contraseña**

Con el archivo `pgpass` configurado correctamente, ahora puedes conectarte a PostgreSQL de la siguiente manera:

```terminal
psql -h localhost -U admin -d postgres
```
{: .nolineno }

PostgreSQL leerá la contraseña desde el archivo `pgpass` y se conectará automáticamente.