---
title: "Conectar por SSH a Servidores Remotos"
categories: ["Tutoriales", "Devops"]
---

**SSH** (Secure Shell) es un protocolo de red que permite la comunicación segura entre dispositivos, generalmente un cliente (como nuestra computadora) y un servidor remoto. SSH se utiliza comúnmente para acceder a servidores de forma remota y realizar tareas de administración o transferencia de archivos.


### ¿Cómo funciona SSH?

Si queremos usar un usuario diferente en el sistema remoto, lo podemos especificar usando la siguiente sintaxis:

```terminal
ssh <remote_username>@<remote_host>
```



Cuando se haya conectado al servidor, se le puede solicitar que verifique su identidad mediante el ingreso de una contreseña.

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">$ ssh root@50.6.192.78</span>
root@50.6.192.78's password:
Last login: Thu Dec 14 10:00:38 2024 from ::ffff:192.168.65.111
<span class="hl">root@vps.primsoft [~]#</span>
</pre></code>
</div>
</div>

> Cuando establecemos una conexión el prompt de la terminal cambia al que corresponda en el servidor remoto.
{: .prompt-info }

