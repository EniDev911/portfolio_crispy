---
title: "PostgreSQL 🐘 : Cambiar métodos de autenticación en Debian y derivados"
author: enidev911
categories: [Bases de Datos Relacionales, Postgres]
tags: [Bases de Datos]
---


### Localizar el archivo de configuración pg_hba.conf:

Por lo general, el archivo `pg_hba.conf` se encuentra en el directorio de datos de PostgreSQL. La ubicación más común es: `/etc/postgresql/<version>/main/pg_hba.conf`{: .filepath}.

También podemos conectarnos a Postgres y ejecutar el comando `SHOW hba_file` para obtener la ruta del archivo de configuración:


<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-3">
<code><pre>
<span class="hl">$ sudo -u postgres psql</span>
psql (15.8 (Debian 15.8-0+deb12u1))
Type "help" for help.
<span class="hl">postgres=# SHOW hba_file;</span>
              hba_file
-------------------------------------
 /etc/postgresql/15/main/pg_hba.conf
(1 row)
</pre></code>
</div>
</div>

### Métodos de Autenticación Comunes

Antes de editar algún archivo, veamos que métodos de autenticación tenemos disponibles en Postgres:


- `trust`: permite la conexión sin requerir contraseña. Todos los usuarios pueden conectarse sin autenticación. No es un método recomendado, al menos si se trata de entornos de desarrollo o para redes segura que no requieren autenticación. Ejemplo:

```
host    all             all             127.0.0.1/32            trust
```
{: file='pg_hba.conf'}

- `password`: requiere que los usuarios proporcionen una contraseña en texto plano. No se recomienda al ser menos seguro, ya que la contraseña se envía sin encriptar. Ejemplo:

```
host    all             all             127.0.0.1/32            password
```
{: file='pg_hba.conf'}

- `md5`: requiere una contraseña encriptada. Este es uno de los métodos más comunes ya que proporciona una combinación de seguridad y facilidad de uso. Ejemplo:

```
host    all             all             127.0.0.1/32            md5
```
{: file='pg_hba.conf'}

- `scram-sha-256`: es un método de autenticación más moderno y seguro que md5 que utiliza el algoritmo de hashing SCRAM. Proporciona una serie de mejoras en términos de seguridad y es ampliamente recomendado para entornos que requieren una mayor protección de contraseñas. Ejemplo:

```
host    all             all             127.0.0.1/32            scram-sha-256
```
{: file='pg_hba.conf'}

- `peer`: es el método de autenticación basada en el sistema operativo. EL nombre de usuario de Postgre debe coincidir con el nombre del usuario del sistema (útil en entornos controlados donde se confía en la autenticación del sistema). Ejemplo:

```
host    all             all             127.0.0.1/32            peer
```
{: file='pg_hba.conf'}

### Formato del Archivo

Cada línea del archivo `pg_hba.conf` tiene el siguiente formato:

```
# Tipo de conexión  | Base de datos  | Usuario  | Dirección  | Método de autenticación
```
{: .noheader .p-0 }

### Secciones Comunes

En el archivo `pg_hba.conf` vamos a encontrar las siguientes secciones para modificar:

#### Local Connections

Se aplican a conexiones a través de Unix sockets. Ejemplo:

```
local    all             all             127.0.0.1/32            scram-sha-256
```
{: file='pg_hba.conf'}

- **Base de datos**: `all` significa que se aplica a todas las bases de datos.
- **Usuario**: `all` significa que se aplica a todos los usuarios.
- **Método de autenticación**: En este ejemplo, se utiliza `scram-sha-256`, que es un método seguro.


#### Database Administrative Login by Unix

Permite el acceso administrativo al usuario `postgres` a través de sockets Unix. Ejemplo:

```
local   all             postgres                                peer
```
{: file='pg_hba.conf'}

#### IPv4 Local Connections

Se aplica a conexiones desde direcciones IPv4. Ejemplo:

```
host    all             all             127.0.0.1/32            md5
```
{: file='pg_hba.conf'}

- **Base de datos**: `all` significa que se aplica a todas las bases de datos.
- **Usuario**: `all` significa que se aplica a todos los usuarios.
- **Dirección**: `127.0.0.1/32` permite conexiones desde el localhost.
- **Método de autenticación**: En este ejemplo, se utiliza `md5`, que requiere una contraseña encriptada.

### Cambiar el Método de Autenticación

Abrimos el archivo `pg_hba.conf` con el editor de preferencia:

```terminal
sudo nano /etc/postgresql/15/main/pg_hba.conf
```

Aquí, modificamos las líneas que especifican el método de autenticación. Por ejemplo, cambiar de `peer` en la sección de usuario administrativo con algunos de los valores que mencionamos:

![ejemplo de pg_hba.conf](/assets/img/postgres/pg_hba-method-sample-light.png){: .light }
![ejemplo de pg_hba.conf](/assets/img/postgres/pg_hba-method-sample-dark.png){: .dark }

Luego guardamos los cambios, y reiniciamos el servicio:

```terminal
sudo service postgresql restart
```




