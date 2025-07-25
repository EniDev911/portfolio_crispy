---
title: "Linux 🐧 : Variables Reservadas"
author: enidev911
categories: [Sistemas Operativos, Linux]
tags: [Sistemas Operativos, Linux]
---

En Linux, las **variables reservadas** son un conjunto de variables que el sistema utiliza para gestionar diversos aspectos del entorno de ejecucción y administración del sistema. Estas variables tienen un significado especial y, en general, no se deben modificar sin comprender su próposito, ya que podrían afectar el comportamiento del sistema o de los procesos en ejecución.

## __Variable $USER__

La variable `$USER` almacena el __nombre del usuario actual que ha iniciado sesión en el sistema__.:

**Ejemplo**

```terminal
echo $USER
```

Supongamos que estamos haciendo un script de instalación que necesita ejecutar ciertos comandos con permisos elevados, pero que __no se ejecute directamente como root sin saber si el usuario tiene privilegios__ `sudo`.

El siguiente fragmento en Bash permite detectar si el usuario actual tiene permisos de administrador antes de continuar con el resto del script:

```bash
#!/bin/bash

if [ "$(id -u)" -eq 0 ]; then
  echo "Eres el usuario root. Tienes privilegios de administrador."
elif groups $USER | grep -qw "sudo"; then
  echo "$USER pertenece al grupo sudo. Tiene privilegios de administrador."
else
  echo "$USER no tiene privilegios de administrador."
  echo "Este script requiere permisos de administrador para continuar."
  exit 1
fi
```

En la primera expresión `[ "$(id -u)" -eq 0 ]`, estamos haciendo lo siguiente:

- `id -u`: devuelve el __UID__ (User ID) del usuario actual.
- `$(...)`: ejecuta el comando y pone su salida en el lugar donde está.
- `-eq`: compara si el resultado es igual a `0`

> En Linux (y sistemas Unix en general), el __UID__ `0` __siempre representa al usuario__ `root`.
{: .prompt-info }

## __Variable $HOME__

La variable `$HOME` define el directorio home del usuario actual. Es utilizada por el sistema para acceder rápidamente a los archivos y configuraciones del usuario sin necesidad de especificar la ruta completa. Cada usuario tiene su propio directorio home, como `/home/usuario`.

**Ejemplo**

{% tabs ex_home %}
{% tab ex_home comando %}
```terminal
echo $HOME
```
{% endtab %}
{% tab ex_home salida %}
```
/home/marco
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

## __Variable $PATH__

Esta variable `$PATH` especifica una lista de directorios en los que el sistema busca ejecutables cuando se escribe un comando.

**Ejemplo**


{% tabs ex_path %}
{% tab ex_path comando %}
```terminal
echo $PATH
```
{% endtab %}
{% tab ex_path salida %}
```
/home/.nvm/versions/node/v22.13.0/bin:/home/.rbenv/shims:/home/.rbenv/bin
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

**Ejemplo de cómo añadir un directorio al $PATH**

```terminal
export PATH=$PATH:/home/usuario/mis_scripts
```

## __Variable $RANDOM__

Esta variable `$RANDOM` genera un número aleatorio entre 0 y 32767 cada vez que se usa.

**Ejemplo**

{% tabs ex_random %}
{% tab ex_random comando %}
```terminal
echo $RANDOM
```
{% endtab %}
{% tab ex_random salida %}
```
14408
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

### **Variable PWD**

Esta variable contiene la ruta del directorio actual. Es útil para saber en qué carpeta estás trabajando.

**Ejemplo**

{% tabs pwd_ex %}
{% tab pwd_ex comando %}
```terminal
echo $PWD
```
{% endtab %}
{% tab pwd_ex salida %}
```
/home/user
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

## __Otras Variables Importantes__

### __Variable $LINENO__

Esta variable contiene el número de línea en la que se encuentra el script que se está ejecutando. Es útil para hacer depuración.

**Ejemplo de uso en scripts**

{% tabs ex_lineno %}
{% tab ex_lineno script %}
```bash
#!/bin/bash
echo "Estamos en la línea número $LINENO"
echo "Estamos en la línea número $LINENO"
echo "Estamos en la línea número $LINENO"
echo "Estamos en la línea número $LINENO"
echo "Estamos en la línea número $LINENO"
echo "Estamos en la línea número $LINENO"
```
{: file="my_script.sh" }
{% endtab %}
{% tab ex_lineno salida %}
<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">$ bash my_script.sh</span>
Estamos en la línea número 2
Estamos en la línea número 3
Estamos en la línea número 4
Estamos en la línea número 5
Estamos en la línea número 6
Estamos en la línea número 7
</pre></code>
</div>
</div>
{% endtab %}
{% endtabs %}

### **Variable $0**

La variable `$0` contiene el nombre del script o comando que se está ejecutando. En un script, te permite saber cómo fue invocado el propio script.

**Ejemplo**

{% tabs ex_var0 %}
{% tab ex_var0 script %}
```bash
#!/bin/bash
echo "Este script se ejecutó como: $0"
```
{: file="my_script.sh" }
{% endtab %}
{% tab ex_var0 salida %}
<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">$ bash ./my_script.sh</span>
Este script se ejecutó como: ./my_script.sh
</pre></code>
</div>
</div>
{% endtab %}
{% endtabs %}
