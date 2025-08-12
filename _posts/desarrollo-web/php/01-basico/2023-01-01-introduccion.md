---
title: "Introducción al Lenguaje"
icon: "fa fa-php"
categories: [Desarrollo Web, "PHP 01. Básico"]
image:
  path: posters/php-introduccion-al-lenguaje.webp
  lqip: data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD9D/iAgICQjN/8WyBxH9z+QCAFZQOCBsAAAAEAQAnQEqFAALAD85hLlTryilorAIAeAnCWQAnQAd+3hn83L9/5Ic44AAyyZyI5kLn7CkmLma5GQLTAxSZPz7378kjKUL/66YaNtm7TPQ42E9qoiwjKMK1P7KZCnaC0BNOxbQG3ep4P2uAAAA
tags: [desarrollo web, php]
permalink: /php-basico/introduccion
---

Antes de adentrarnos en el aprendizaje en el ecosistema de PHP, exploraremos qué es este lenguaje, su fascinante historia y evolución, así como sus principales características técnicas. Descubrirás cómo un conjunto de simples scripts terminó convirtiéndose en una herramienta esencial para el desarrollo web moderno. Además , conocerás curiosidades y aspectos técnicos que resaltan su impacto en la comunidad.

## ¿Qué es PHP?

![PHP LOGO](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png){: width="972" height="589" .w-25 .right }
PHP es, ante todo, un **lenguaje de scripting interpretado del lado del servidor**. Es decir, que escribes scripts con extensión `.php` y ese código se procesa en un servidor web en tiempo real para generar respuestas (normalmente HTML) que se envían al navegador del usuario. En sus inicios, PHP significaba literalmente "Personal Home Page" ya que su creador lo usaba para gestionar su página personal y registrar sus visitas. Actualmente se conoce como "Hypertext Preprocessor", un nombre más apropiado, ya que PHP genera la entrada para HTML en el servidor, lo que hace el HTML sea dinámico.

## Evolución de PHP

#### De scripts personales a una herramienta poderosa

__1994 - El Comienzo Humilde__
: PHP nació cuando [Rasmus Lerdorf](https://es.wikipedia.org/wiki/Rasmus_Lerdorf){: target='_blank' } desarrolló un conjunto de scripts CGI para gestionar y rastrear las visitas en su página web personal. Originalmente conocido como *Personal Home Page Tools*, esta iniciativa fue la semilla de lo que más tarde se transformaría en PHP.

**1995 - PHP/FI (el nacimiento)**
: La primera versión de PHP se centró en interpretar formularios y generar contenido dinámico. Aunque básico, PHP/FI sentó las bases para funcionalidades posteriores, demostrando el potencial de integrar código en HTML para crear páginas web interactivas. El siguiente ejemplo de script refleja su uso en esa época:

```php
<html>
<body>
<?php
echo "Bienvenido a mi página personal";

print "Hoy es: ";
print date("m/d/Y");
?>
</body>
</html>
```
{: .noheader .nolineno .fit-content }

**1997 - PHP 3 (Consolidación)**
: Con un rediseño significativo, PHP 3 introdujo una sintaxis más coherente y una mayor cantidad de funciones, marcando el inicio de la expansión de PHP en la comunidad de desarrollo web.

**2000 - PHP 4 (Expansión)**
: El lanzamiento de PHP 4, que incorporó el motor Zend, mejoró notablemente el rendimiento y la estabilidad del lenguaje, permitiendo la construcción de aplicaciones web más complejas.

**2004 - PHP 5 (El salto a la POO)**
: Esta versión supuso una revolución al incorporar un modelo de programación orientada a objetos (POO) robusto, manejo de excepciones y mejoras en la estructura interna del lenguaje. Con PHP 5, los desarrolladores pudieron escribir código modular, facilitando el mantenimiento y la escalibilidad de aplicaciones complejas.

**2015 - PHP 7 (Innovación)**
: Con mejoras dramáticas en el rendimiento, PHP 7 redujo el consumo de recursos y aceleró el procesamiento, lo que permitió desarrollar sitios web y aplicaciones de alto tráfico de manera más eficiente.

**Continuidad y Futuro**
: Las versiones recientes han seguido incorporando mejoras en seguridad, tipado y optimización, desmotrando que PHP sigue adaptándose a las necesidades de la web moderna.

## Características Técnicas Destacadas

Al ser un lenguaje del lado del servidor, PHP procesa el código antes de enviar el resultado al cliente. Esto permite trabajar de manera segura con datos sensibles, lo que añade una capa de seguridad al desarrollo web.

### **Integridad Sencilla con HTML**

PHP se integra de manera nativa en HTML, lo que facilita la creación de páginas dinámicas sin tener que abandonar el formato familiar del lenguaje de marcado.

### **Conectividad y Gestión de Bases de Datos**

PHP facilita la interacción con múltiples sistemas de bases de datos, siendo MySQL uno de los más comunes. Su soporte para PDO (PHP Data Object) garantiza una conexión segura y eficiente con diversas bases de datos. Por ejemplo:

```php
<?php
try {
    $dsn = 'mysql:host=localhost;dbname=nombre_base';
    $usuario = 'tu_usuario';
    $contraseña = 'tu_contraseña';

    $conexion = new PDO($dsn, $usuario, $contraseña, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    echo "Conexión exitosa.";
} catch (PDOException $ex) {
    echo "Error en la conexión: " . $ex->getMessage();
}
?>
```
{: .nolineno }

**Soporte para Programación Orientada a Objetos (POO)**

PHP permite organizar el código en clases y objetos, facilitando el mantenimiento y la escalabilidad de las aplicaciones. Este enfoque modular es especialmente útil en proyectos grandes y complejos. Un ejemplo de esto en código a continuación:

```php
<?php
class Usuario {
    private $nombre;
    private $email;

    public function __construct($nombre, $email) {
        $this->nombre = $nombre;
        $this->email = $email;
    }

    public function mostrarInfo() {
        return "Nombre: {$this->nombre}, Email: ${$this->email}";
    }
}

// Creación de una instancia de la clase Usuario
$usuario = new Usuario("Marco", "marco@example.com");
echo $usuario->mostrarInfo();
?>
```
{: .nolineno }

## **Ventajas y Casos de Uso**

**Facilidad de Aprendizaje**

La sintaxis de PHP es sencilla y se integra perfectamente con HTML, lo que lo convierte en una excelente opción para quienes inician en la programación web.

**Flexibilidad y Escalabilidad**

PHP se adapta tanto a pequeños proyectos como a aplicaciones empresariales complejas. Su capacidad para manejar grandes volúmenes de datos y tráfico lo hace ideal para desarrollar desde blogs hasta plataformas de comercio electrónico.

**Rendimiento Mejorado**

Con las versiones más recientes, PHP ha experimentado mejoras significativas en rendimientos, optimizando el uso de recursos y reduciendo los tiempos de respuesta.