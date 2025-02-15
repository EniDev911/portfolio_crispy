---
title: "PHP : Arrays Asociativos"
author: enidev911
categories: [Desarrollo Web, "PHP 01. Básico"]
image:
  path: posters/php-arrays-asociativos.webp
  lqip: data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSDQAAAABT0CYbeTPegD7XTUiIoS+QE0kSdF9Ak7CRcSfFMRQKED5RBiI6P8E3IPPBDOo/+VUbeEGVlA4IFYAAADQAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJYgC06BUD+DBUuYNwuwAA+5DuXvVy5E6LZWGM4SfypfeJ2xcRVcqzBCYVRAf71ZCBhbk1Hw3tIAEtCgAAAA==
tags: [desarrollo web, php]
---


## **¿Qué es un Array Asociativo?**

En PHP, un array asociativo es un tipo de array en el que cada elemento se asocia a una clave (key) en lugar de un índice numérico. Las claves pueden ser cadenas de texto, lo que permite identificar de forma descriptiva cada valor del array.

### **Características Principales**

- **Clave-Valor**: Cada elemento del array se compone de una clave única y su valor asociado.
- **Acceso Descriptivo**: Permite acceder a los datos mediante nombres significativos en lugar de índices numéricos.
- **Flexbilidad**: Es ideal para representar estructuras de datos complejas, como información de un usuario, configuraciones, etc.

## **Declaración y Ejemplos Básicos**

Para declarar un array asociativo en PHP, puedes utilizar la función `array()` o la sintaxis corta `[]`.

```php
<?php
// Usando array()
$persona = array(
    "nombre"    => "Juan",
    "edad"      => 30,
    "profesion" => "Desarrollador"
);

// Usando la sintaxis corta
$producto = [
    "id"         => 101,
    "nombre"     => "Camiseta",
    "precio"     => 19990,
    "disponible" => true
];
?>
```
{: .nolineno }

### **Acceso a Elementos**

Para acceder a los valores de un array asociativo, se utiliza la clave entre corchetes `['key']`:

```php
<?php
echo $persona["nombre"];    // Salida: Juan
echo $producto["precio"];   // Salida: 19990
?>
```
{: .nolineno }


### **Iteración con Foreach**

Recorrer arrays asociativo con `foreach` es la opción preferida por su claridad, eficiencia y facilidad para acceder tanto a la clave como al valor de cada elemento:

```php
<?php
foreach ($persona as $clave => $valor) {
    echo "$clave: $valor<br>";
}
?>
```
{: .nolineno }

## **Operaciones Básicas con Arrays Asociativos**

### **Añadir y Modificar Elementos**

Para agregar nuevos elementos o modificar los existentes simplemente seleccionamos esa clave asignándole un valor (si no existe, se agrega):

```php
<?php
// Añadir un nuevo elemento
$persona["email"] = "juan@example.com";

// Modificar un elemento existente
$persona["edad"] = 31;

print_r($persona);
?>
```
{: .nolineno }

### **Eliminar Elementos**

Para eliminar un elemento, se utiliza la función `unset()`:

```php
<?php
unset($persona["profesion"]);
print_r($persona);
?>
```
{: .nolineno }

### **Validación de Existencia**

Antes de acceder a un elemento, verifica que la clave exista para evitar errores:

```php
<?php
if (isset($persona["email"])) {
    echo $persona["email"];
} else {
    echo "No se ha definido el email.";
}
?>
```
{: .nolineno }

### **Extraer Claves y Valores**

También se puede aprovechar funciones que ofrece PHP como `array_keys()` y `array_values()` que facilitan trabajar con arrays asociativos. En este ejemplo, se muestra cómo obtener todas las claves y valores de un array:

```php
<?php
$configuracion = [
    "sitio"      => "Mi Blog",
    "tema"       => "Oscuro",
    "version"    => "1.0.3",
    "mantenimiento" => false
];

$claves = array_keys($configuracion);
$valores = array_values($configuracion);

echo "Claves: <br>";
foreach ($claves as $clave) {
    echo "$clave<br>";
}

echo "<br>Valores: <br>";
foreach ($valores as $valor) {
    echo "$valor<br>";
}
?>
```
{: .nolineno }


## **Ejemplo: Array Multidimensional**

En este ejemplo, creamos un array asociativo donde cada clave representa un identificador de usuario y su valor es otro array asociativo con información detallada.

```php
<?php
$usuarios = [
    "usuario1" => [
        "nombre"    => "Ana",
        "edad"      => 28,
        "profesion" => "Diseñadora"
    ],
    "usuario2" => [
        "nombre"    => "Luis",
        "edad"      => 34,
        "profesion" => "Programador"
    ],
    "usuario3" => [
        "nombre"    => "María",
        "edad"      => 22,
        "profesion" => "Estudiante"
    ],
];

// Recorrer el array multidimensional con foreach
foreach ($usuarios as $id => $usuario) {
    echo "ID: $id<br>";
    foreach ($usuario as $clave => $valor) {
        echo "$clave: $valor<br>";
    }
    echo "<br>";
}
?>
```
{: .nolineno }