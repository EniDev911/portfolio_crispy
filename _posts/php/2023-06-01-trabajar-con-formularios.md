---
title: "PHP : Trabajar con Formularios"
author: enidev911
categories: [Desarrollo Web, PHP]
tags: [desarrollo web, php]
---

Los formularios son una parte esencial de cualquier aplicación web que permite a los usuarios interactuar y enviar información al servidor. PHP es un lenguaje de programación ampliamente utilizado para procesar formularios en aplicaciones web. En este post, veremos cómo trabajar con formularios en PHP, incluyendo la diferencia entre método `GET` y `POST`, los diferentes elementos de entrada de datos, y cómo recuperar información y enviar archivos.

## Métodos para enviar Formularios GET y POST

En PHP, los formularios pueden enviar datos al servidor utilizando métodos principales: `GET` y `POST`. Ambos métodos son utilizados para transmitir información desde el navegador del cliente al servidor, pero tienen diferencias importante:

### GET

1. Los datos se envían a través de la URL y son visibles en la barra de direcciones del navegador.
2. Se utiliza principalmente para solicitudes que no modifican datos en el servidor, como búsquedas o filtros.
3. La información se recupera en PHP utilizando la **superglobal** `$_GET`.

### POST

1. Los datos se envían de manera más discreta y no son visibles en la URL.
2. Se utiliza para enviar datos sensibles o para realizar cambios en el servidor, como enviar un formulario de registro.
3. La información se recupera en PHP utilizando la **superglobal** `$_POST`.

### Crear el formulario HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
</head>
<body>
    <h1>Formulario de Contacto</h1>
    <form action="procesar.php" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```
{: file="index.html" }

### Procesar el Formulario

Una vez el formulario es enviado, necesitamos manejar los datos en el archivo PHP `procesar.php` se encarga de procesar los datos.

Aquí está cómo hacerlo:

```php
<?php
// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos enviados a través del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Validar que los datos no estén vacíos (opcional)
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "y Todos los campos son obligatorios.";
    } else {
        // Mostrar los datos recibidos (como ejemplo)
        echo "<h2>Datos recibidos:</h2>";
        echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
        echo "Correo Electrónico: " . htmlspecialchars($email) . "<br>";
        echo "Mensaje: " . nl2br(htmlspecialchars($mensaje)) . "<br>";
    }
}
?>
```

- `$_POST['campo']`: PHP recoge los datos enviados desde el formulario usando la variable `$_POST`.
- `htmlspecialchars()`: Es importante usar esta función para evitar ataques de inyección de código (XSS), transformando caracteres especiales en entidades HTML seguras.

### Redirección Después de Procesar el Formulario

Si una vez enviado los datos del formulario y los datos se han mostrado o guardado, podemos redirigir al usuario a otra página, por ejemplo, una página de "Gracias". En PHP podemos hacerlo de la siguiente manera:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Validar campos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "Todos los campos son obligatorios.";
    } else {
        // Redirigir a una página de agradecimiento
        header("Location: gracias.php");
        exit();
    }
}
?>
```
{: .nolineno }