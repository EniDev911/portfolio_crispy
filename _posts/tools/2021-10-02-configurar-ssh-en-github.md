---
title: "Github: Configurar clave SSH"
author: enidev911
categories: [Kit Tools, Github]
image: 'posters/github-ssh.png'
tags: [tools]
---

Cuando estamos trabajando con GitHub y deseamos interactuar con los repositorios de manera más segura y eficiente, utilizar una clave SSH es una excelente opción. SSH permite que tu conexión con GitHub sea cifrada y sin necesidad de ingresar tus credenciales.

### Crear una Nueva Clave SSH

Comenzamos creando una nueva clave, usando el correo electrónico como etiqueta en la terminal:

```terminal
ssh-keygen -t rsa -b 4096 -C "user@mail.com"
```

- `-t rsa`: Especifica el tipo de clave (RSA es el más común).
- `-b 4096`: Especifica que tan compleja es la llave (eL tamaño 4096 bits se considera seguro).
- `-C "user@mail.com`: Agrega un comentario con tu dirección de correo para identificar la clave.

Luego se nos pedirá donde almacenar la nueva llave, si se presiona <kbd>Enter</kbd> por lo general se almacena en el directorio del usuario en una subcarpeta oculta llamada `.ssh`:

```
Enter file in which to save the key (~/<user>/.ssh/id_rsa):
```
{: .noheader .nolineno }


Selecciona la ubicación de tu preferencia o solo presiona <kbd>Enter</kbd>.

### Agregar la Llave al Servicio de Ssh-Agent

El comando `ssh-agent` es un programa auxiliar que realiza seguimiento de las claves de identidad del usuario y sus frases de contraseñas.

Verificar si el programa se está ejecutando:

```terminal
eval $(ssh-agent -s)
```

Ahora agregamos la llave privada al agente ssh. Si creaste la llave con un nombre distinto, asegurate de apuntar hacia donde se encuentre la llave que creaste. Si dejaste los valores predeterminado basta con copiar el siguiente comando:

```terminal
ssh-add ~/.ssh/id_rsa
``` 

El comando anterior nos devolverá el siguiente mensaje:

```
Identity added: /<User>/.ssh/id_rsa (user@mail.com)
```
{: .noheader .nolineno +}


### Registrar la LLave Pública a Github

En Git Bash podemos usar la herramienta `clip` de Windows para copiar la clave de una manera sencilla y rápida:

```terminal
clip < ~/.ssh/id_rsa.pub
```

- Vamos a nuestra cuenta en GitHub e iniciamos sesión.
- Dirigite a la [configuración de llaves SSH y GPG](https://github.com/settings/keys){: target='_blank' }
- Damos clic en el botón <a href="https://github.com/settings/ssh/new" target="_blank" class="border-0"><kbd style="background: green; color: white">New SSH key</kbd></a>.
- En el campo `title` agrega una etiqueta descriptiva para la clave nueva.
- En el campo `Key` pega la clave que está contenida en el portapapeles con <kbd>ctrl</kbd> + <kbd>v</kbd>.


### Probar la Conexión

Par asegurarnos de que todo está funcionando correctamente, probamos la conexión con GitHub usando el siguiente comando:

```terminal
ssh -T git@github.com
```

Si todo está configurado correctamente, deberías recibir un mensaje como el siguiente:

```
Hi mc-herrera-90! You've successfully authenticated, but GitHub does not provide shell access.
```
{: .noheader .nolineno }
