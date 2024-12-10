---
title: "PHP : Comenzando y conociendo PHP"
author: enidev911
categories: [Desarrollo Web, PHP]
tags: [desarrollo web, php]
---

PHP (HyperText Preprocessor) es un lenguaje de programación de servidor, lo que significa que se ejecuta en el servidor web en lugar del navegador del usuario. Esto lo convierte en una excelente opción para crear aplicaciones web interactivas

## Escribir un script de PHP

Ahora que ya sabemos qué es PHP y sus características, vamos a escribir un simple script. Antes de comenzar podemos seleccionar un destino para todos nuestros scripts de php. Ejemplo:

```
📂 aprendiendo_php
│─ script-1.php
│─ variables.php
│─ tipos-de-datos.php
└─ otro-script.php
```
{: .noheader }

Luego con un editor de código, deseable [Vs Code](https://code.visualstudio.com/){: target='_blank' } abrimos la carpeta en la que vamos a trabajar y desde el editor podemos abrir el **script-1.php** y escribir lo siguiente:

```php
<?php
  echo "¡Hola, Mundo!";
?>
```
{: file="script-1.php" }

Guardamos el archivo y podemos abrir la terminal desde el editor con la combinación <kbd>ctrl</kbd> + <kbd>j</kbd> y ejecutar el siguiente comando:

```console
php -S localhost:8000
```

Luego abrimos el navegador y visitamos la siguiente URL <http://localhost:8000/script-1.php>{: target='_blank' }

**Explicación del Código:**

- `<?php` y `?>`: Estas son las etiquetas de apertura y cierre para PHP. Todo el código PHP debe ir dentro de estas etiquetas.
- `echo`: Esta es una de las funciones más comunes en PHP. Se utiliza para mostrar el texto en el navegador.

### Variables y Tipos de Datos

PHP permite almacenar valores en variables, y estos valores pueden ser de diferentes **tipos de datos** como **números**, **cadenas de texto**, **arreglos**, etc.

En PHP las variables se representan con un signo de dólar seguido por el nombre de la variable. El nombre de la variable es sensible a minúsculas y mayúsculas.

**Ejemplos de variables**

```php
<?php
  $nombre = 'Marco';
  $apellido = 'Contreras';
  echo "Hola, mi nombre es " . $nombre . " y mi apellido es " . $apellido;
?>
```
{: file="variables.php" }

En este caso, estamos creando las variables: `$nombre` y `$apellido`. Luego usamos `echo` para imprimir el valor de esas variables en el navegador.

#### Cadenas de Texto (Strings)

Las cadenas de texto o string son secuencias de caracteres encerrados entre comillas dobles (`" "`) o simples (`' '`).

**Ejemplo**

```php
$nombre = "Juan";
$saludo = "Hola, ¿Cómo estás?"
```
{: .nolineno }

> Los string pueden contener texto, números y caracteres especiales. Además, PHP tiene varias funciones útiles para manipular cadenas de texto, como `strlen()`, `substr()`,  `str_replace()` entre otras.
{: .prompt-info }

#### Flotantes o Decimales (Float/Double)

Los flotantes son números que tienen una parte decimal. Se utilizan cuando necesitamos más precisión en los cálculos.

**Ejemplo**

```php
$precio = 19.99; // Flotante positivo
$pi = 3.14159; // Flotante para el valor de PI
```
{: .nolineno }

#### Booleanos

El tipo de dato **booleano** solo puede tener uno de dos valores: `TRUE` (verdadero) o `FALSE` (falso). Se usa comúnmente en condiciones y expresiones lógicas.

**Ejemplo**

```php
$esActivo = true; // valor verdadero
$esPremium = false; // valor falso
```
{: .nolineno }

> Los booleanos son esenciales cuando trabajas con condicionales (`if`, `while`, etc) y también con funciones que devuelven resultados lógicos.
{: .prompt-info }

### Tipos Compuestos

Los tipos compuestos permiten almacenar más de un valor. En PHP, tenemos dos tipos compuestos: **arreglos** y **objetos**.

#### Arreglos (Arrays)

Un arreglo es una colección de valores. Los arreglos pueden ser indexados o asociativos.

- **Arreglo indexado**: Los valores se acceden por un índice numérico.
- **Arreglo asociativo**: Los valores que se acceden mediante claves (strings).

**Ejemplo de arreglo indexado:**

```php
$colores = ["rojo", "verde", "azul"];
echo $colores[0]; // imprime rojo
```
{: .nolineno }

**Ejemplo de arreglo asociativo:**

```php
$persona = [
  "nombre" => "Juan",
  "edad" => 34,
  "signo" => "Escorpión"
];

echo $persona["nombre"]; // Imprime: Juan
```
{: .nolineno }

#### Objetos (Objects)

Los objetos en PHP son instancias de clases. PHP es un lenguaje de programación orientado a objetos, lo que significa que podemos crear nuestras propias clases y trabajar con objetos. Un objeto puede contener **propiedades** y **métodos** (funciones que operan sobre las propiedades).

**Ejemplo de clase y objeto:**

```php
class Persona {
  public $nombre;
  public $edad;

  function __construct($nombre, $edad) {
    $this->nombre = $nombre;
    $this->edad = $edad;
  }

  function presentarse() {
    return "Hola, mi nombre es " .$this->nombre . " y tengo " . $this->edad . " años.";
  }
}

$persona1 = new Persona("Marco", 33);
echo $persona1->presentarse();  // Imprime: Hola, mi nombre es Marco y tengo 33 años.
```
{: .nolineno }

### Tipos Especiales

Además de los tipos de datos mencionados anteriormente, PHP tiene algunos tipos especiales:

#### NULL

El tipo `NULL` representa una variable que no tiene valor. Una variable puede ser asignada a `NULL` para indicar que no contiene ningún dato.

**Ejemplo:**

```php
$variable = NULL;
```
{: .nolineno }

### ¿Cómo Saber el Tipo de Dato de una Variable?

En PHP, podemos verificar el tipo de una variable usando la función `gettype()` o `var_dump()` Estas funciones son útiles para la depuración.

**Ejemplo:**

```php
$numero = 123;
echo gettype($numero) . "<br>"; // Imprime: integer

var_dump($numero); // Imprime: int(123)
```
{: .nolineno }

### Variables Predefinidas

En PHP 8 tenemos las siguientes variables:

1. `$GLOBALS`
2. `$_SERVER`
3. `$_REQUEST`
4. `$_FILES`
5. `$_ENV`
6. `$_SESSION`
7. `$_COOKIE`