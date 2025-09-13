---
title: "MongoDB: Gestión de usuarios y seguridad"
icon: mongodb
categories: ["Bases de datos NOSQL", "MongoDB"]
---

La seguridad es un pilar fundamental en cualquier base de datos. En MongoDB, la gestión de usuarios y roles permite controlar quién puede acceder y qué acciones puede realizar sobre los datos. MongoDB utiliza un sistema __basado en roles__ que facilita la administración de permisos.

En este artículo veremos cómo funciona la gestión de usuarios en MongoDB, desde la creación de usuario hasta entender los diferentes roles que ofrece.

## Requisitos previos

Para seguir las prácticas de este artículo, necesitará una cuenta en un servidor con [MongoDB](https://www.mongodb.com/){:target="_blank"} y los privilegios adecuados.

Para crear nuevos usuarios, su usuario actual debe tener habilitadas las siguientes acciones de privilegio:

- `createUser`
- `grantRole`

Para cambiar la contraseña o los detalles de la cuenta de un usuario, necesitará los siguientes privilegios:

- `changeOwnPassword`: Para cambiar la contraseña de su propia cuenta
- `changeOwnCustomData`: Para cambiar datos personalizados de su propia cuenta
- `changePassword`: Para cambiar las contraseñas de otros usuarios

## ¿Cómo funciona la autenticación y autorización en MongoDB?

En MongoDB existen dos conceptos clave:

- __Autenticación__: Verifica la identidad del usuario (usuario + contraseña).
- __Autorización__: Determina qué operaciones puede realizar un usuario autenticado.

Antes de comenzar a crear y administrar cuentas, es útil tomarse un tiempo para familiarizarse y entender cómo MongoDB define y almacena esta información.

En MongoDB, las cuentas de usuarios son una combinación del __nombre de usuario__ de la cuenta y __una base de datos de autenticación__ específica. La base de datos de autenticación es simplemente la base de datos donde se define el usuario y no implica ninguna limitación de alcance. Las bases de datos de autenticación son bases de datos comunes que se utilizan para gestionar otros datos y no son bases de datos especiales ni dedicadas.

El nombre de una cuenta de usuario debe ser único en su base de datos de autenticación. Sin embargo, el mismo nombre de usuario puede reutilizarse con una base de datos de autenticación diferente para crear una cuenta de usuario nueva y distinta.

Gracias a este diseño, una cuenta solo puede identificarse con precisión incluyendo el nombre de usuario y la base de datos de autenticación. Para autenticarse, también es necesario proporcionar las credenciales asociadas. Estas suelen ser una contraseña, pero también puede ser un certificado.

## ¿Cómo crear usuarios?

MongoDB proporciona un método interno llamado `db.createUser()`, que se utiliza para crear nuevos usuarios en el sistema. Esto se ve representado en el siguiente diagrama de secuencia:

![creación de usuario en MongoDB](https://www.plantuml.com/plantuml/svg/VPEzhXen48LxFyM8Af4WwIaYVaYH8ZI8z6Oz14lUyMey9ecYF53g-mYys1txOiGASPifu9mvtvpTNIInBBaFHhm4X3MZxVpbXS0XP0BAU8wGKxRi8o31zqW_usPbZEqaCYnTxyadOUiYcy6o-CuFbWGcLGcx4uO0ds73_emy0PjW7JoIu5YzGpvxtT42ghA5EIlsO1F2P5McGrXcGLBt6smLwq-d0ZP2WjcNbWTpS8TF7QCLt2Va3t-ppYaClzmKE0PCKnNy-sYkUhKs0BNkOb1MoQwaTtSjjN9Cqwgje5JN3sH_L4g6v05_ArNH8vScKQk7rKQR30BxQyD_R9CXjOkWxPkDY9e5gOjKhrNb3M9qzrVcoFD62YuFUamrD54rZ9kRmpPAfR-TYcMFmP3mbaxn2lmCS_j8-53JDqh8OddykZtRk8vqzDmthBl7yRI0HbkKhX9BJBOl_xxVmMFOvNyn6oHdp49d-NPU0G00){:.light}

![creación de usuario en MongoDB](https://www.plantuml.com/plantuml/dsvg/VP8_pXCn4CLxdsAK2gHyqAT0-HCA2j94eNVM4sB9ErwDnm64E10rHyZ56E_6ArcGhvbYzxrvltcxwoIM9VV1Y9U0i6EqdR__8N08cO0otYBab2tx24ZmETBNkDyQOpk931lNU_99sBh8Pj1TllE39O75g8JZ5KE0zx1dVqDUW4sm2nv9i5KVaMzUTzI0efp3d1LxjWbXiItJ8Moo8AbxWYtYykXQm1eaUFbGys05xlokOxI2fuJyvcVMkOJXcri2nu1fgO9VRyr3hzOAeDPZ3CegsPNqhcbfAiTKhTec57LzGVONfMH87l2xKXKzScaIjNhOxhN9871wDFp3LXbIlGZglfU6g5gGkaZZjQgS8PgxFp97NbLIS7dGOoP35HL3qvpQ3b56-lbKB7iCXeHpEiK7y3FCm_y9cve-KK8Mo-tlzcpZBjB5SpzXDP_ZQG6LjYZTI2mnsRwyVRs3VyFklulP83cprf7xy1S0){:.dark}





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

