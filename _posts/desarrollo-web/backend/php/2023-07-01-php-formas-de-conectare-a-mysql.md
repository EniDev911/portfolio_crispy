---
title: "PHP : Formas de Conectarse a MySQL"
author: enidev911
categories: [Desarrollo Web, PHP]
tags: [desarrollo web, php]
---

Conectarse a una base de datos MySQL desde PHP es una de las tareas más comunes cuando desarrollas aplicaciones web que requieren almacenamiento de datos. En este post, exploraremos **tres formas principales** de realizar esta conexión: usando [mysqli](https://www.php.net/manual/es/book.mysqli.php){:target='_blank'} (con orientación a objetos y estilo procedural) y [PDO](https://www.php.net/manual/es/book.pdo.php){: target='_blank' }. Cada uno tiene sus ventajas y usos específicos, y daremos contexto para entenderlo e implementarlos correctamente.

Antes de comenzar vamos a realizar unos pasos previo a los ejemplos de conexión. Primero, crearemos una base de datos llamada `testdb`. Abrimos el cliente **mysql** desde la línea de comandos:

```terminal
mysql -u root -p
```

Y ejecutamos el siguiente comando SQL para crearla:

```sql
CREATE DATABASE testdb;
```
{: .nolineno }

Una vez creada la base de datos, la seleccionamos con el siguiente comando:

```sql
USE testdb;
```
{: .nolineno }

Ahora creamos una tabla de ejemplo llamada `usuarios` con dos columnas: `id`, `nombre`. La columna `id` será de tipo entero `INTEGER` y será la clave primaria, y la columna `nombre` será de tipo `VARCHAR` para almacenar cadenas de textos.

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);
```
{: .nolineno }

## 1. Conectar a MySQL con mysqli

El `mysqli` es una extensión de PHP que proporiciona una interfaz mejorada para interactuar con MySQL. Soporta tanto la programación orientada a objetos como la programación procedural.

### 1.1 Conexión con MySQL usando mysqli (Estilo Procedural)

Este es el estilo más sencillo de usar para quienes vienen de un entorno más procedural:

```php
<?php
$host = 'localhost';
$usuario = 'root';
$contraseña = '';
$base_de_datos = 'testdb';

// Crear conexión
$conexion = mysqli_connect($host, $usuario, $contraseña, $base_de_datos);

// Verificar conexión
if (!$conexion) {
  die("Conexión fallida: " . mysqli_connect_error());
}

echo "Conexión exitosa!";
?>
```
{: file="conexion.php"}

> Con esto, PHP se conecta al servidor de base de datos MySQL, tienes que seleccionar una base de datos a la que el usuario tenga acceso. En el caso anterior `testdb` debe existir y el usuario debe tener privilegios sobre ella.
{: .prompt-info }

### 1.2 Conexión con MySQL usando mysqli (Estilo Orientado a Objetos)

El estilo orientado a objetos es más estructurado y recomendado para proyectos más grandes:

```php
<?php
$host = 'localhost';
$usuario = 'root';
$contraseña = '';
$base_de_datos = 'testdb';

try {
  // Crear una nueva conexión
  $conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

  // Verificar si hay errores
  if ($conexion->connect_error) {
    throw new Exception("Conexión fallida: " . $conexion->connect_error);
  }

  echo "Conexión exitosa!";
} catch (Exception $e) {
  echo $e->getMessage();
}
?>
```
{: file="conexion.php" }

### 1.3 Ejecutar Consultas con mysqli

Una vez establecida la conexión, podemos ejecutar consultas SQL. Ejemplo consultas `SELECT`, en un archivo de ejemplo llamado `query.php`, podemos importar la conexión y usarla para ejecutar la consulta.

> Para mantener la coherencia y evitar errores, debemos usar uno de los dos estilos (procedural o orientado a objetos) en los ejemplos.
{: .prompt-info }


**Ejemplo (Estilo Orientado a Objeto):**

```php
<?php
// Incluir la conexión
require_once 'conexion.php';

// Ahora podemos disponer de la variable $conexion para ejecutar consultas
$sql = "SELECT nombre FROM usuarios";
$resultado = $conexion->query($sql);

// Verificar si hay resultados
if ($resultado->num_rows > 0) {
  while($fila = $resultado->fetch_assoc()) {
    echo "Usuario: " . $fila['nombre'] . "<br>";
  }
} else {
  echo "0 Resultados";
}

$conexion->close();
?>
```
{: file="query.php" }


Ahora que ya tenemos una base de datos y un usuario, vamos a escribir el siguiente código PHP para conectarnos a MySQL:

```php
<?php
// Definimos los parámetros de conexión
$servidor = "localhost";
$usuario = "usuario";
$contraseña = "mi_contraseña";
$base_datos = "mi_base_datos";

// Intentamos establecer si hay un error de conexión
$conexion = new mysqli($servidor, $usuario, $contraseña, $base_datos);

// Verificamos si hay un error de conexión
if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}

echo "¡Conexión exitosa!";
?>
```
{: file="conexion.php" }

**Desglosar el código:**

- `new mysqli(...)`: Este constructor crea una nueva intancia de la clase `mysqli` y establece la conexión con la base de datos MySQL utilizando los parámetros proporcionados.

- `$conexion->connect_error`: Verifica si hubo un error al intentar conectarse. Si es así, el script termina con el mensaje "Conexión fallida" y muestra el error.

### Realizar Operaciones En la Base de Datos

Una vez establecemos una conexión exitosa, podemos realizar operaciones con consultas [DML](https://es.wikipedia.org/wiki/Lenguaje_de_manipulaci%C3%B3n_de_datos){:target='_blank'} como `SELECT`, `INSERT`, `UPDATE` y `DELETE`.

A continuación veremos como realizar una consulta para obtener datos de la tabla de **usuarios**:

```php
<?php
// Realizar la consulta
$sql = "SELECT id, nombre FROM usuarios";
?>
```