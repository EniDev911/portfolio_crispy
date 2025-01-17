---
title: "WSL 🐧 : Instalación de MySQL 🐬 en una distribución Debian"
author: enidev911
categories: [Sistemas Operativos, WSL]
tags: [Sistemas Operativos, Bases de Datos]
---


**1.** Actualizar el sistema

Para instalar MySQl en WSL con una distribución Debian debemos actualizar el índice repositorios. Abre tu terminal WSL y ejecuta el comando:

```terminal
sudo apt update
sudo apt upgrade
```

**2.** Instalar el paquete default-mysql-server

Este paquete es un metapaquete que apunta a la versión predeterminada de MySQL disponible en los repositorios de nuestra distribución de Debian. Dependiendo de la versión de Debian que estés usando, este paquete puede instalar `mysql-server` o `mariadb-server` (una alternativa a MySQL):

```terminal
sudo apt install default-mysql-server
```

**3.** Revisar la versión que acabamos de instalar

```
$ mysql --version
mysql  Ver 15.1 Distrib 10.11.6-MariaDB, for debian-linux-gnu (x86_64) using  EditLine wrapper
```


**4.** Iniciar el servicio de MariaDB

Cuando se revisa la versión instalada, según sea el caso se inicia el servicio de acuerdo al paquete que se instala en la distribución, en este caso debemos iniciar MariaDB:

```terminal
sudo service mariadb start
```

**5.** Configurar MariaDB

Para asegurar tu instalación y establecer una contraseña para el usuario root, ejecuta:

```terminal
sudo mysql_secure_installation
```

Este script nos guiará a través de varios pasos, como configurar la contraseña de root, eliminar usuarios anónimos, y deshabilitar el inicio de sesión de root de forma remota:

![script instalación segura mysql](/assets/img/wsl/script-instalacion-mysql-wsl-dark.png){: .dark }
![script instalación segura mysql](/assets/img/wsl/script-instalacion-mysql-wsl-light.png){: .light }

**7.** Verificar la instalación

Una vez terminamos la configuración segura del servidor, podemos conectarnos al servidor con el cliente `mysql` y ejecutar sentencias:


<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span>&nbsp;&nbsp;&nbsp;</span>
</div>
<div class="highlight p-3">
<code><pre>
<span class="hl">➜  ~ sudo mysql</span>
[sudo] password for marco:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 49
Server version: 10.11.6-MariaDB-0+deb12u1 Debian 12

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

<span class="hl">MariaDB [(none)]> SHOW DATABASES;</span>
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.019 sec)
</pre></code>
</div>
</div>

Esto debería mostrarte una lista de bases de datos, confirmando que tu servidor MariaDB está operativo.
