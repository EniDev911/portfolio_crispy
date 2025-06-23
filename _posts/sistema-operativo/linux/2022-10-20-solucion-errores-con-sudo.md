---
title: "Debian 🐧 : Cómo solucionar errores con sudo en Debian"
author: enidev911
categories: [Sistemas Operativos, Linux]
tags: [Sistemas Operativos]
---

Cuando instalamos Debian, especialmente si optamos por una instalación mínima, puede suceder que nuestro usuario no tenga permisos para usar `sudo`.

Debian, por razones de seguridad, no agrega automáticamente al primer usuario al grupo `sudo` como sí lo hacen otras distros como Ubuntu. Por eso, no tenemos privilegios de superusuario a través de `sudo`.

## __Ingresar un Usuario al Grupo Sudo__

Si configuraste una contraseña para `root`, puedes acceder a la sesión de superusuario ejecutando:

```terminal
su -
```

Después de ingresar la contraseña de root correctamente, añade tu usuario al grupo sudo con el siguiente comando:

```terminal
usermod -aG sudo TU_USUARIO
```

Reemplaza `TU_USUARIO` por el nombre de tu cuenta (por ejemplo, marco).

__Cierra sesión y vuelve a entrar__

Esto es necesario para que el sistema actualice los grupos de usuario.

__Comprobar que funcionó__

Una vez vuelvas a iniciar sesión, ejecuta:

```terminal
groups
```

Deberías ver `sudo` dentro del listado. Y puedes probar si `sudo` ya funciona con:

```terminal
sudo whoami
```

Si todo va bien, la salida será: `root`.

{% include circle-line.html %}

## __Tip Extra__

Si necesitas editar el archivo `/etc/sudoers`, __no uses Nano o Vim directamente__. Siempre usa:

```terminal
sudo visudo
```

Esto valida la sintaxis antes de guardar, evitando que bloquees el sistema.