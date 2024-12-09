---
title: "PHP : Comenzando y conociendo PHP"
author: enidev911
categories: [Desarrollo Web, PHP]
tags: [desarrollo web, php]
---


## Escribir un script de PHP

Podemos seleccionar un destino para todos nuestros scripts de php. Ej:

```
📂 aprendiendo_php
│─ script-1.php
│─ script-2.php
│─ script-3.php
└─ script-4.php
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

### Variables

En PHP las variables se representan con un signo de dólar seguido por el nombre de la variable. El nombre de la variable es sensible a minúsculas y mayúsculas.

**Ejemplos de variables**

```php
<?php
$firstname = 'John';
$lastname = "Doe";
echo "Mi nombre es $firstname";
echo "Mi apellido es $lastname";
?>
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