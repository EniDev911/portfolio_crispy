---
title: "Github: Configurar clave SSH"
author: enidev911
categories: [Kit Tools, Github]
image:
  path: posters/github-ssh.webp
  lqip: data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAADwAwCdASoUAAsAPpE6l0eloyIhMAgAsBIJaQDE98ADJBC6S2Eu3hCgAP75F+v3r/812STLvVahP9a+/bhjEy+yCP779iBwh/eYjMwuMJdrXV5iHL/+++G/Klt/hhz996GhSaB29Uf+7t9BBcsRRkqQMPO/9UY0RPTngcj1QvS5Dz0K+NRD0LDEFkAAAA==
tags: [tools, github, ssh]
---

Cuando estamos trabajando con GitHub y deseamos interactuar con los repositorios desde nuestra máquina de forma frecuente, utilizar una clave SSH es una opción segura y conveniente de autenticarte y comunicarte con tus repositorios en GitHub. SSH permite que tu conexión con GitHub sea cifrada y sin necesidad de ingresar tus credenciales.

### 1. Generar una nueva clave SSH

Para generar un par de claves SSH (clave pública y privada), utilizaremos la herramienta de línea de comandos `ssh-keygen`, incluida por defecto en sistemas Linux, macOS y disponible en Windows a través de Git Bash.

Comenzamos abriendo la terminal y pegando el siguiente comando (remplaza `"user@mail.com"` por tu correo electrónico):

```terminal
ssh-keygen -t rsa -b 4096 -C "user@mail.com"
```

> - `-t rsa`: Especifica el tipo de clave (RSA es el más común).
> - `-b 4096`: Especifica que tan compleja es la llave (el tamaño 4096 bits se considera seguro).
> - `-C "user@mail.com`: Agrega un comentario con tu dirección de correo para identificar la clave.
{: .prompt-info }

Luego se nos pedirá donde almacenar la nueva llave, si se presiona <kbd>Enter</kbd> por lo general se almacena en el directorio del usuario en una subcarpeta oculta llamada `.ssh`:


<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">ssh-keygen -t rsa -b 4096 -C "contacto@mail.com"</span>

Generating public/private rsa key pair.
<span class="hl mb-1">Enter file in which to save the key (/home/mcherrera/.ssh/id_rsa):</span> <span style="color: gray">Si deseas cambiar de ubicación, define aquí el PATH de destino</span>
<span class="hl">Enter passphrase (empty for no passphrase):</span> <span style="color: gray">Si la incluyes, cada vez que uses la clave privada para conectarte a un servidor, tendrás que ingresar esta frase de contraseña para descifrar la clave. </span>
Enter same passphrase again: 
Your identification has been saved in /home/mcherrera/.ssh/id_rsa
Your public key has been saved in /home/mcherrera/.ssh/id_rsa.pub
The key fingerprint is:
...
</pre></code>
</div>
</div>

Selecciona la ubicación de tu preferencia o solo presiona <kbd>Enter</kbd>.

{% include embed/video.html src="ssh-keygen-new-ssh-generate.webm" %}

### 2. Agregar la clave privada al servicio de ssh-agent

El comando `ssh-agent` es un programa auxiliar que realiza seguimiento de las claves de identidad del usuario y sus frases de contraseñas. A continuación, sigue las instrucciones para agregar

Verificar si el programa se está ejecutando:

```terminal
eval $(ssh-agent -s)
```

Esto debería mostrar un PID (_Process ID_). Por ejemplo:

```
Agent pid 483833
```
{: .noheader .fit-content }

Ahora agregamos la llave privada al agente ssh. Si creaste la llave con un nombre distinto, asegurate de apuntar hacia donde se encuentre la llave que creaste. Si dejaste los valores predeterminado basta con copiar el siguiente comando:


{% tabs add_ssh %}
{% tab add_ssh GIT BASH o LINUX %}
```terminal
ssh-add ~/.ssh/id_rsa
```
{% endtab %}
{% tab add_ssh POWERSHELL %}
```terminal
ssh-add $env:USERPROFILE\.ssh\id_rsa
```
{% endtab %}
{% tab add_ssh CMD %}
```terminal
ssh-add %USERPROFILE%\.ssh\id_rsa
```
{% endtab %}
{% endtabs %}

El comando anterior nos devolverá el siguiente mensaje:

```
Identity added: /<User>/.ssh/id_rsa (user@mail.com)
```
{: .noheader .nolineno +}

### 3. Registrar la clave pública en Github

Antes de registrar tu clave SSH pública en GitHub, necesitas copiar el contenido de la clave al portapapeles para luego pegarla fácilmente.

En Windows sigue con Git Bash, usa la herramienta `clip` de Windows para copiar la clave pública al portapales, también tienes los comandos equivalente para hacerlo a través de PowerShell o la CMD:

{% tabs copy_clipboard_ssh_pub %}
{% tab copy_clipboard_ssh_pub GIT BASH %}
```terminal
clip < ~/.ssh/id_rsa.pub
```
{% endtab %}
{% tab copy_clipboard_ssh_pub POWERSHELL %}
```terminal
Get-Content "$env:USERPROFILE\.ssh\id_rsa.pub" | clip
```
{% endtab %}
{% tab copy_clipboard_ssh_pub CMD %}
```terminal
type %USERPROFILE%\\.ssh\id_rsa.pub | clip
```
{% endtab %}
{% endtabs %}

En sistemas Linux, puedes usar herramientas como `xclip`. Asegúrate de instalarla:

```terminal
sudo apt install xclip
```

Para copiar la clave, ejecuta el siguiente comando, ajustando la ruta según la ubicación de tu clave pública:

```terminal
cat ~/.ssh/id_rsa.pub | xclip -selection clipboard
```

Una vez que tengamos la clave copiada en el portapapeles, el siguiente paso es registrarla en nuestra cuenta de GitHub. Para ello, sigue estos pasos:

- Vamos a nuestra cuenta en GitHub e iniciamos sesión.
- Dirigite a la [configuración de llaves SSH y GPG](https://github.com/settings/keys){: target='_blank' }
- Damos clic en el botón <a href="https://github.com/settings/ssh/new" target="_blank" class="border-0"><kbd style="background: green; color: white">New SSH key</kbd></a>.
- En el campo `title` agrega una etiqueta descriptiva para la clave nueva.
- En el campo `Key` pega la clave que está contenida en el portapapeles con <kbd>ctrl</kbd> + <kbd>v</kbd>.

{% include embed/video.html src="add-ssh-pub-in-github.mp4" %}

### 4. Probar la Conexión

Para verificar que todo funciona correctamente, comprobamos la conexión con GitHub mediante el siguiente comando:

```terminal
ssh -T git@github.com
```

Si todo está configurado correctamente, deberías recibir un mensaje como el siguiente:

```
Hi <tu-usuario>! You've successfully authenticated, but GitHub does not provide shell access.
```
{: .noheader .nolineno }

{% include circle-line.html %}

Configurar claves SSH en GitHub no solo mejora la seguridad, sino que también incrementa la productividad al evitar el ingreso constante de credenciales, facilitando el trabajo frecuente con repositorios.

Y eso es todo, ¡espero que este artículo haya sido de utilidad!