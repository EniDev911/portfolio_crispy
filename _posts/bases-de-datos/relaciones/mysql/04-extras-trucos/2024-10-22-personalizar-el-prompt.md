---
title: "MySQL 🐬 : Personalizar el prompt"
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - Extras/Trucos"]
tags: [MySQL]
---

## **¿Qué es el Prompt?**

El **prompt** visualmente es el conjunto de caracteres que se muestra en la línea de comandos para indicar que está en la espera de órdenes. En todos los intérpretes de comandos esto suele variar y a su vez se puede configurar para dar información de interés.

### **El Prompt del Cliente MYSQL**

El **prompt del programa cliente** de terminal llamado **mysql** se suele personalizar para ofrecer cierta información a simple vista. Lo podemos personalizar mediante la variable de entorno `MYSQL_PS1` o con el **comando** `prompt` dentro de la sesión interactiva.

### Secuencias de Escape para el Prompt de MySQL

Una **secuencia de escape** es una combinación de caracteres que tiene un significado especial. En el contexto de MySQL, las secuencias de escape en el prompt del cliente mysql permite personalizar cómo se muestra la información en la línea de comandos. Algunas opciones de secuencia de escape que proporcionan información serían las siguientes:

- `\U`: Nombre del usuario conectado y host.
- `\u`: Nombre del usuario conectado.
- `\h`: Nombre del host.
- `\d`: Nombre de la base de datos en uso.
- `\D`: Fecha y hora actual.

### Personalizar Prompt desde Variable MYSQL_PS1:

Para cambiar el prompt mediante la variable `MYSQL_PS1` tenemos que ejecutar el comando para modificar variables según el sistema operativo:

En **Windows-CMD**:

```console
set MYSQL_PS1=[(\u@\h)][(\d)]^> 
```

Esto hace que la próxima vex que nos conectemos desde el cliente mysql el prompt de MySQL se vea algo como lo siguiente:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="CMD"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">&gt; set MYSQL_PS1=[(\u@\h)][(\d)]^&gt; </span>
&gt; mysql -u root -p
&gt; Enter password: ****
<span class="hl">[(root@localhost)][((none))]&gt; </span>
Database changed
<span class="hl">[(root@localhost)][(mysql)]&gt; </span>
</pre></code>
</div>
</div>

En **Linux-bash**:

```console
MYSQL_PS1='[(\u@\h)][(\d)]> '
```

### Personalizar el prompt desde la sesión interactiva

Cuando iniciamos una nueva sesión interactiva podemos cambiar el prompt a través del `prompt` o el método abreviado `\R`:

**Algunos ejemplos de uso**

```console
prompt [✨\u |💾 \d]>
```

```console
prompt (🐬 mysql \v)\n🔌->(\d)>
```

```console
prompt [\'consultas realizadas\'(\c)]> 
```


