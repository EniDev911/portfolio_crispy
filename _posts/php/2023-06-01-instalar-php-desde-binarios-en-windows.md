---
title: "PHP : Instalción desde Binarios en Windows"
author: enidev911
categories: [Desarrollo Web, PHP]
tags: [desarrollo web, php]
---

Aunque existen herramientas _todo-en-uno_ como [**XAMP**](https://www.apachefriends.org/es/index.html) o [**WAMP**](https://www.wampserver.com/en/) que simplifican el proceso al incluir el **servidor web**, la **base de datos** y **PHP** en un solo paquete, existen varias razones por las que optar por instalar y configurar PHP desde los binarios oficiales es mejor en algunos escenarios.

Si te interesa tener un entorno más limpio y personalizable, o si simplemente prefieres una instalación más flexible, sigue estos pasos para instalar PHP desde los binarios en Windows.

### Pasos para Instalar PHP desde los Binarios en Windows

#### 1. Descargar los binarios de PHP

El primer paso es obtener los binarios de PHP directamente desde el sitio oficial. Asegúrate de elegir la versión adecuada para tu sistema operativo:

1. Visita la página oficial de descargas de PHP para Windows: [https://windows.php.net/download/](https://windows.php.net/download/).
2. Allí, encontrarás varias versiones de PHP. Selecciona la versión que prefieras (por ejemplo, PHP 8.x).
3. Elige la versión **Thread Safe** (seguridad de hilos) si planeas usar PHP con un servidor web como Apache. Si solo deseas usar PHP en la línea de comandos (CLI), puedes optar por la versión **Non-Thread Safe**.
4. Descarga el archivo comprimido `.zip` correspondiente (por ejemplo, `php-8.x.x-Win32-vs16-x64.zip`).

#### 2. Extraer los archivos

Una vez descargado el archivo `.zip`, extráelo en una ubicación fácil de recordar. La ruta recomendada podría ser algo como `C:\php`, ya que es clara y accesible.

#### 3. Configurar las variables de entorno

Para ejecutar PHP desde cualquier directorio en tu sistema, necesitarás agregar la ruta de PHP al **Path** de las variables de entorno. Esto te permitirá invocar PHP desde la línea de comandos sin tener que navegar hasta su carpeta de instalación.

Sigue estos pasos para hacerlo:

1. Haz clic derecho en el icono de **Mi PC** y selecciona **Propiedades**.
2. Haz clic en **Configuración avanzada del sistema** en el menú izquierdo.
3. En la ventana de **Propiedades del sistema**, selecciona **Variables de entorno**.
4. En las **Variables del sistema**, busca y selecciona la variable **Path**. Haz clic en **Editar**.
5. Añade la ruta donde extrajiste PHP (por ejemplo, `C:\php`). Haz clic en **Aceptar** para guardar los cambios.

#### 4. Configuración del archivo `php.ini`

PHP viene con dos archivos de configuración predeterminados: `php.ini-development` y `php.ini-production`. Dependiendo del uso que le des a PHP, puedes optar por uno u otro, pero en la mayoría de los casos, es recomendable empezar con el archivo **`php.ini-development`**.

Para configurarlo:

1. Renombra el archivo `php.ini-development` a `php.ini`.
2. Abre `php.ini` con un editor de texto como el Bloc de notas.
3. Puedes habilitar o deshabilitar extensiones como MySQL, GD, o cURL, modificando las líneas correspondientes. Por ejemplo, para habilitar la extensión de MySQL, descomenta (elimina el punto y coma `;`) de la siguiente línea:

```ini
extension=mysqli
```
{: .nolineno file="php.ini" }

#### 5. Verificar la instalación

Para comprobar que PHP se instaló correctamente y está funcionando, abre la terminal de Windows (CMD o PowerShell) y ejecuta el siguiente comando:

```console
php -v
```

Si todo ha ido bien, verás la versión de PHP instalada y un mensaje de bienvenida, lo que indica que PHP está funcionando correctamente en tu sistema.

Espero que este post haya sido de utilidad para todos. ¡Ahora tienes todo lo necesario para instalar y configurar PHP desde los binarios en Windows!
