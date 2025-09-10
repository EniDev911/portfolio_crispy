---
title: "MongoDB: Administrar usuarios"
categories: ["Bases de datos NOSQL", "MongoDB"]
---

## Crear usuarios

Así como en las bases de datos SQL en **MongoDB** también podemos crear usuarios y asignarles acceso mediante **roles**. 

Vamos a comenzar asimilando que somos administradores de las bases de datos y necesitamos generar dos usuarios para una base de datos:  

- EL primer usuario le llamaremos **lector** el cuál solo tendrá acceso de **lectura** a la base de datos.
- El segundo tendrá como nombre **escritor** y tendrá acceso de **lectura** y **escritura** a la base de datos.


El primer paso será crear la base de datos, que es sencillamente ejecutando la siguiente sentencia:  

```terminal
use blog
```

Luego insertamos un par de documentos en la colección ( *collection* ) **posts**:  

```terminal
db.posts.insertOne({ title: "Articulo 1" });
db.posts.insertOne({ title: "Articulo 2" });
```

### Crear usuario de solo lectura

Este usuario solo puede leer **posts**, pero no podrá bajo ningún motivo crear nuevos artículos.

Para lograr esto vamos a usar el método **createUser**. Este método acepta como parámetro un objeto con las siguientes propiedades:  

- **user**: Esta propiedad representa el nombre del usuario.
- **pwd**: Esta propiedad es para asignar la contraseña para el usuario.
- **roles**: Un arreglo de objetos. Cada objeto se le puede definir dos propiedades como **role** y **db**

El código que crea un usuario que solo puede leer una base de datos quedaría de la siguiente manera:

```terminal
db.createUser(
  {
    user: "lector",
    pwd: "12345",
    roles: [
       { role: "read", db: "blog" }
    ]
  }
)
```

Mongo viene con roles predefinidos, uno de ellos es el role de **read** que permite ejecutar métodos de solo lectura.

### Crear usuario de escritura y lectura

Para poder ingresar con el nuevo usuario invocaremos el shell de mongo usando los parámetros **-u** y **-p**. En la terminal escribimos lo siguiente:  

```terminal
mongo -u lector -p 123456
```

O mediante una cadena de conexión:

```terminal
mongo "mongodb://lector:123456@localhost:27017/blog"
```

Si intentamos insertar un nuevo documento obtendremos el siguiente error: 

```text
> db.posts.insertOne({title: "articulo5"});
Error: error: {
        "ok" : 0,
        "errmsg" : "command find requires authentication",
        "code" : 13,
        "codeName" : "Unauthorized"
}
....
```

### Puntos de consideración

Para habilitar el acceso restringido debemos asegurarnos de que nuestro archivo **mongodb.cfg** tenga esto:  

- `security: enabled` (En algunas instalaciones el valor predeterminado es `authorization`, y en otra esta opción está comentada precedida de un **#**)


En **Linux**:  

```bash
sudo nano /etc/mongod.conf
```

En **Windows** abres un **notepad** como administrador y modificas el siguiente archivo

```
C:\\Program Files\\MongoDB\\Server\\version\\bin\\mongod.cfg
```

