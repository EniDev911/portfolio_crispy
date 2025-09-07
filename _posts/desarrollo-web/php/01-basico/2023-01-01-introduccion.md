---
title: "PHP: Introducción"
icon: "fa fa-php"
icon_color: "#515f9c"
categories: [Desarrollo Web, "PHP 01. Básico"]
image:
  path: posters/php-introduccion-al-lenguaje.webp
  lqip: data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD9D/iAgICQjN/8WyBxH9z+QCAFZQOCBsAAAAEAQAnQEqFAALAD85hLlTryilorAIAeAnCWQAnQAd+3hn83L9/5Ic44AAyyZyI5kLn7CkmLma5GQLTAxSZPz7378kjKUL/66YaNtm7TPQ42E9qoiwjKMK1P7KZCnaC0BNOxbQG3ep4P2uAAAA
tags: [php]
permalink: /php-basico/introduccion
---

Antes de adentrarnos en el aprendizaje de PHP, exploraremos qué es este lenguaje, su fascinante historia y evolución, así como sus principales características técnicas y cómo un conjunto de simples scripts terminó convirtiéndose en una herramienta esencial para el desarrollo web moderno. Además , conocerás curiosidades y aspectos técnicos que resaltan su impacto en la comunidad.

## ¿Qué es PHP?

![PHP LOGO](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png){: width="972" height="589" .w-25 .right }
PHP es, ante todo, un **lenguaje de scripting interpretado del lado del servidor**. Es decir, que escribes scripts con extensión `.php` y ese código se procesa en un servidor web en tiempo real para generar respuestas (normalmente HTML) que se envían al navegador del usuario. En sus inicios, PHP significaba literalmente "Personal Home Page" ya que su creador lo usaba para gestionar su página personal y registrar sus visitas. Actualmente se conoce como "Hypertext Preprocessor", un nombre más apropiado, ya que PHP genera la entrada para HTML en el servidor, lo que hace el HTML sea dinámico.

## Evolución de PHP

Según el Manual de PHP, escrita por el Grupo de Documentación de PHP, Lerdorf creó PHP Tools en algún momento entre septiembre y noviembre de 1994. Lerdorf describió cómo empezó todo en un artículo para la revista [Web Techniques](https://web.archive.org/web/19990117005231/http://www.webtechniques.com/features/1998/02/lerdorf/lerdorf.shtml){:target="_blank"}:

{% include note.html 
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rasmus_Lerdorf_August_2014_%28cropped%29.JPG/1024px-Rasmus_Lerdorf_August_2014_%28cropped%29.JPG" 
    author="Rasmus Lerdorf" 
    subtitle="Creador de PHP" 
    tag="PHP" 
    text="PHP comenzó como un simple contenedor CGI escrito en Perl que usaba para registrar quién había accedido a mi currículum en línea. Luego, lo reescribí en C para acelerarlo y consumir menos recursos. Al mismo tiempo, necesitaba una forma de integrar mi página de inicio con una base de datos, así que diseñé el Intérprete de Formularios (IF), una herramienta para integrar consultas SQL en páginas web y gestionar la entrada de formularios." 
    date="c. 1994–1995" 
%}

#### De scripts personales a una herramienta poderosa

__1994 - El Comienzo Humilde__
: PHP nació cuando [Rasmus Lerdorf](https://es.wikipedia.org/wiki/Rasmus_Lerdorf){: target='_blank' } desarrolló un conjunto de scripts [CGI](https://es.wikipedia.org/wiki/Interfaz_de_entrada_com%C3%BAn){:target="_blank"} para gestionar y rastrear las visitas en su página web personal. Originalmente conocido como *Personal Home Page Tools*, esta iniciativa fue la semilla de lo que más tarde se transformaría en PHP.

![CV Rasmus Lerdorf](php/rasmus-lerdorf-cv.webp)
_Página de inicio de Lerdorf_

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

## Características técnicas destacadas

Al ser un lenguaje del lado del servidor, PHP procesa el código antes de enviar el resultado al cliente. Esto permite trabajar de manera segura con datos sensibles, lo que añade una capa de seguridad al desarrollo web.

### Integridad sencilla con HTML

PHP se integra de manera nativa en HTML, lo que facilita la creación de páginas dinámicas sin tener que abandonar el formato familiar del lenguaje de marcado. 

```php
<!DOCTYPE html>
<html>
<body>
  <h1><?php
			$hora = date('H');
			if ($hora < 12) {
				echo "¡Buenos días!";
			} else if ($hora < 18) {
				echo "¡Buenas tardes!";
			} else {
				echo "¡Buenas noches!";
			}
    ?></h1>
    <p>La fecha y hora actual es: <?php echo date('d-m-Y H:i:s'); ?></p>
</body>
</html>
```
{: .nolineno file="index.php" }

El bloque `<?php ... ?>` se ejecuta en el servidor y se inserta directamente dentro del HTML enviado al navegador lo siguiente.

```html
<!DOCTYPE html>
<html>
<body>
    <h1>¡Buenas noches!</h1>
    <p>La fecha y hora actual es: 12-08-2025 19:09:51</p>
</body>
</html>
```
{: .nolineno .noheader .fit-content }

### Conectividad y gestión de bases de datos

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

### Soporte para POO

PHP permite programación orientada a objetos, puedes organizar el código en clases y objetos, facilitando el mantenimiento y la escalabilidad de las aplicaciones. Este enfoque modular es especialmente útil en proyectos grandes y complejos. Un ejemplo de esto en código a continuación:

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
		return "Nombre: {$this->nombre}, Email: {$this->email}";
  }
}

$usuario = new Usuario("marco", "contacto@mcherrera.dev");
echo $usuario->mostrarInfo();
?>
```
{: .nolineno }

## Ventajas de PHP

### Facilidad de Aprendizaje

La sintaxis de PHP es sencilla y se integra perfectamente con HTML. Gracias a esta característica, es posible construir sitios web dinámicos con interacción básica, como formularios, listas o manejo de datos, sin tener que dominar arquitecturas o frameworks complejos desde el inicio. Por eso, PHP sigue siendo una opción muy popular para quienes dan sus primeros pasos en la programación web y buscan una curva de aprendizaje amigable.


### Flexibilidad y Escalabilidad

PHP se adapta tanto a pequeños proyectos como a aplicaciones empresariales complejas. Su capacidad para manejar grandes volúmenes de datos y tráfico lo hace ideal para desarrollar desde blogs hasta plataformas de comercio electrónico.

Gracias a su madurez, amplia comunidad y la gran cantidad de herramientas, frameworks y extensiones disponibles, PHP puede manejar eficientemente desde sitios personales o blogs sencillos hasta plataformas robustas de comercio electrónico, sistemas de gestión de contenidos y aplicaciones web a gran escala.

### Rendimiento Mejorado

En los últimos años, PHP ha experimentado mejoras significativas en rendimientos. A partir de PHP 7, el motor _Zend Engine_ fue optimizado para consumir menos memoria y ejecutar el código mucho más rápido, llegando a duplicar la velocidad en comparación con versiones anteriores. Estas mejoras se traducen en una ejecución más eficiente de las aplicaciones, permitiendo manejar mayor cantidad de peticiones simultáneas y reducir los tiempos de respuesta del servidor.

Además, PHP sigue evolucionando con nuevas versiones que incorporan optimizaciones internas, soporte para compilación _Just-In-Time_ (JIT) y mejoras en el manejo de tipos, lo que contribuye a un código más rápido y robusto. Estas características hacen que PHP sea una opción competitiva para aplicaciones modernas, donde el rendimiento es crucial, sin sacrificar la facilidad de desarrollo.

{% include circle-line.html %}

En resumen, PHP es un lenguaje versátil y accesible, ideal para aprender fundamentos importantes del desarrollo web. Su integración sencilla con HTML, rendimiento mejorado y amplio soporte lo convierten en una opción perfecta para principiantes y veteranos para uso en proyectos profesionales. Dar los primeros pasos con PHP es abrir la puerta al mundo del desarrollo web y la creación de sitios y aplicaciones dinámicas.

