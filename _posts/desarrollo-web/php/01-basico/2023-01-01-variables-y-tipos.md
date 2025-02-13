---
title: "PHP : Variables y Tipos"
author: enidev911
categories: [Desarrollo Web, "PHP 01. Básico"]
image:
  path: posters/php-variables-y-tipos.webp
  lqip: data:image/webp;base64,UklGRsoAAABXRUJQVlA4WAoAAAAQAAAAEwAACwAAQUxQSEEAAAABb6CobSQ3qdleeezzqF1ExPhH0wFESw+KIklq6hyAHbRgCQE52eCLhgxy9oWBiP5PAOOQWoVyPug7Un8N5IuGAgBWUDggYgAAABAEAJ0BKhQADAA/OYS5U68opaKwCAHgJwlkAJ0AGZwcmMMXvlkpb4lAAPoHnw1SQy37wi5/ID1WynjY6Kf1+q3av0vkIGFv++Eyvy2LtSSq5HjLQb53GKY7d3SI66AsrgAA
tags: [desarrollo web, php]
---

Antes de adentrarnos en el manejo avanzado de PHP, es fundamental comprender cómo se almacenan y manipulan los datos. En este post exploraremos en profundidad qué son las variables en PHP, cómo se declaran y cuáles son los diferentes tipos de datos que podrás utilizar. Desde simples cadenas de texto hasta estructuras complejas como arrays y objetos (estos últimos temas los veremos más adelante).

## **Variables en PHP**

En PHP y en el mundo de la programación, una variable es un contenedor que almacena datos. Su uso es esencial para manipular información, ya que permite guardar valores, procesarlos y reutilizarlos en distintas partes de la aplicación.

### **Características Clave**

**Tipado Dinámico**
: En PHP no es necesario declarar el tipo de dato; PHP lo determina automáticamente según el valor asignado.

**Sensibilidad a Mayúsculas y Minúsculas**
: Los nombres de variables son sensibles a la capitalización, por lo que una variable `$nombre` y otra `$Nombre` se consideran variables diferentes.

**Sintaxis**
: Todas las variables comienzan con el símbolo de dólar `$`, seguido por el nombre de la variable.

**Ejemplo de Variables**

```php
<?php
$mensaje = "Hola, mundo!";
$numero = 42;
?>
```
{: .nolineno }


## **Tipos de Datos en PHP**

PHP admite varios tipos de datos que permiten representar distintas formas de información. A continuación, se detallan los tipos básicos y algunas características relevantes de cada uno.

### **Tipos Escalares**

**String**

Representa una cadena de caracteres. Se puede definir entre comillas simples o dobles:

```php
<?php
$texto = "Esto es una cadena de texto";
?>
```
{: .nolineno }

**Integer**

Números enteros sin decimales y con ellos puedes realizar operaciones aritméticas básicas:

```php
<?php
$edad = 30;
?>
```
{: .nolineno }

**Float (o Double)**

Números de punto flotante, utilizados para representar decimales:

```php
<?php
$altura = 1.80;
?>
```
{: .nolineno }

**Boolean**

Solo puede tener dos valores: `true` o `false`. Es fundamental en la toma de decisiones y estructuras de control:

```php
<?php
$esValido = true;
?>
```
{: .nolineno }

### **Tipos Compuestos**

**Array (estos temas los veremos más adelante)**

Permite almacenar múltiples valores en una sola variable. Los arrays pueden ser indexados numéricamente o asociativos:

```php
<?php
$frutas = array("Manzana", "Banana", "Cereza");
$usuario = array("nombre" => "Marco", "edad" => 34);
?>
```
{: .nolineno }

**Object (estos temas los veremos más adelante)**

Representa una instancia de una clase. Los objetos permiten encapsular datos y funciones que operan sobre esos datos:

```php
<?php
class Persona {
    public $nombre;
    public $edad;

    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }
}

$persona = new Persona("Carlos", 25);
?>
```
{: .nolineno }

### **Otros Tipos**

**Null**

Representa una variable sin valor asignado. Es útil para inicializar variables:

```php
<?php
$vacio = null;
?>
```
{: .nolineno }

**Resource**

Un tipo especial que hace referencia a recursos externos (por ejemplo, conexiones a bases de datos).

## **Buenas Prácticas en el Manejo de Variables y Tipos de Datos**

- **Nombre Descriptivo**: Usar nombres significativos para las variables para mejorar la legibilidad y mantenimiento del código.
- **Inicialización Adecuada**: Siempre que sea posible, inicializa las variables para evitar comportamientos inesperados.
- **Conversión de Tipos**: PHP permite convertir entre tipos de datos. Asegúrate de entender las implicaciones de las conversiones automáticas para evitar errores lógicos.