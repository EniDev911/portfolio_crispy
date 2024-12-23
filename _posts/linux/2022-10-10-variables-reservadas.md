---
title: "Linux 🐧 : Variables Reservadas BASH"
author: enidev911
categories: [Sistemas Operativos, Linux]
tags: [Sistemas Operativos, Linux]
---

En Linux, las **variables reservadas** son un conjunto de variables que el sistema utiliza para gestionar diversos aspectos del entorno de ejecucción y administración del sistema. Estas variables tienen un significado especial y, en general, no se deben modificar sin comprender su próposito, ya que podrían afectar el comportamiento del sistema o de los procesos en ejecución.

### Variable $USER

La variable `$USER` contiene el nombre de usuario del usuario que está actualmente logueado.

**Ejemplo**

```terminal
echo $USER
```

### Variable $HOME

La variable `$HOME` define el directorio home del usuario actual

**Ejemplo**

```terminal
echo $HOME
```

### Variable $PATH

Esta variable `$PATH` especifica una lista de directorios en los que el sistema busca ejecutables cuando se escribe un comando.

**Ejemplo**

```terminal
echo $PATH
```

**Ejemplo de cómo añadir un directorio al $PATH**


```terminal
export PATH=$PATH:/home/usuario/mis_scripts
```

### Varaiable $RANDOM

Esta variable `$RANDOM` genera un número aleatorio entre 0 y 32767 cada vez que se usa.

**Ejemplo**

{% tabs ex_random %}
{% tab ex_random comando %}
```terminal
echo $RANDOM
```
{% endtab %}
{% tab ex_random salida %}
```terminal
14408
```
{% endtab %}
{% endtabs %}

### Variable PWD

Esta variable contiene la ruta del directorio actual. Es útil para saber en qué carpeta estás trabajando.

**Ejemplo**


{% tabs pwd_ex %}
{% tab pwd_ex comando %}
```terminal
echo $PWD
```
{% endtab %}
{% tab pwd_ex salida %}
```terminal
/home/user
```
{% endtab %}
{% endtabs %}