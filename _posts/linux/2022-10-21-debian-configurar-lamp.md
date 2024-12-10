---
title: "Debian 🐧 : Configurar un LAMP"
author: enidev911
categories: [Sistemas Operativos, Debian]
tags: [Sistemas Operativos, MySQL, PHP]
---

Configurar un **LAMP** (Linux, Apache, MySQL/MariaDB, PHP) en Debian es una excelente manera de crear un servidor web local para desarrollo y pruebas. En este post, realizaremos el proceso paso a paso para instalar y configurar el stack LAMP.

### 1. Actualizar el Sistema

Como ya sabemos antes de comenzar, es una buena práctica actualizar y asegurarnos de que tenemos los paquetes más recientes.

- Abrimos una nueva terminal, y actualizamos la lista de paquetes disponibles:

```terminal
sudo apt update
```
{: .nolineno }

- Actualizar los paquetes instalados:

```terminal
sudo apt upgrade -y
```

### 2. Instalar Apache

Apache es un servidor web muy popular y, en este caso, lo usaremos para servir nuestras aplicaciones PHP.

1. Instalar Apache con el siguiente comando:

```terminal
sudo apt install apache2 -y
```

{: start="2" }
2. Verificar que apache este corriendo:

```terminal
sudo service apache2 status
```
{: start="3" }
3. Si vemos que Apache no está corriendo, podemos iniciarlo con el siguiente comando:

```terminal
sudo service apache2 start
```

{: start="4" }
4. Verificar que Apache está funcionando, para ello abrimos el navegador en `http://localhost` o `http://<tu_direccion_ip>` (si estás en un servidor remoto). Deberías ver la página predeterminada de Apache:

![default page apache](wsl/debian-lamp-default-page-apache.png)

### 3. Instalar MySQL o MariaDB

MySQL es el sistema de gestión de base de datos más común en **LAMP**, pero **MariaDB** es una alternativa de código abierto y completamente compatible con MySQL.

1. Instalar MariaDB (recomendado)

```terminal
sudo apt install mariadb-server mariadb-client -y
```

{: start="2" }
2. Verificar que MariaDB esté corriendo:

```terminal
sudo service mariadb status
```

- Si no está corriendo, lo iniciamos con el siguiente comando:

```terminal
sudo service mariadb start
```



### 4. Instalar PHP

PHP es el lenguaje de programación que usamos para crear aplicaciones web dinámicas. También es necesario instalar algunos módulos para que funcione correctamente con **Apache** y **MySQL**.

1. Instar PHP y los módulos adicionales:

```terminal
sudo apt install php libapache2-mod-php php-mysql -y
```

Los módulos instalados son:

- `PHP`: Instalar el **PHP**.
- `libapache2-mod-php`: Módulo necesario para que Apache soporte PHP.
- `php-mysql`: Módulo necesario para conectar PHP con bases de datos MySQL.

{: start="2" }
2. Verificar la Instalación de PHP:

```terminal
php -v
```

> La salida del comando debería mostrar la versión de PHP que fue instalada.
{: .prompt-info }

### 5 Configurar Apache para usar PHP

Apache ya debería estar configurado automáticamente para usar PHP, pero para verificarlo realizamos los siguientes pasos:

1. Reiniciar Apache para asegurarte de que todo se haya cargado correctamente:

```terminal
sudo service apache2 restart
```

{: start="2" }
2. Crear un archivo PHP de prueba en el **directorio raíz de Apache**, generalmente ubicado en `/var/www/html`. Vamos a crear un archivo `info.php` para verificar que **PHP** esté funcionando:

```terminal
sudo nano /var/www/html/info.php
```

- Luego, agregamos el siguiente código:

```php
<?php
phpinfo();
?>
```
{: file="php.info" }

{: start="3" }
3. Abrimos el navegador en <http://localhost/info.php>{: target="_blank"}. Deberías ver una página con toda la información de PHP, lo que indica que PHP está funcionando correctamente.

![php info](wsl/debian-lamp-info-php.png)