---
title: Funciones en Python
author: enidev911
date: 2019-08-09 20:55:00 +0800
categories: [Python, Funciones]
tags: [funciones en python]
image: https://enidev911.github.io/fullstack-python/assets/img/python-funciones-card.png
pin: true
---

## Funciones en Python

Anteriormente hemos visto funciones nativas que vienen con Python como `len()` para calcular la longitud de una lista, pero al igual que en otros lenguajes de programación, también podemos definir **nuestras propias funciones**. Para ello tenemos que usar la palabra reservada `def`.

### Sintaxis de una función

```py
def name_function(param):
	# ...code

	return val
```
{: .nolineno }

Cualquier función tendrá un **nombre**, opcionalmente podrá recibir **parámetros**, el cuerpo que contiene el **código a ejecutar** y opcionalmente, pero que en la mayoría de los casos se hace es que nos retorna un valor. Por ejemplo el siguiente código define una función que recibe un parámetro y retorna el valor pasado como argumento a la función elevado al cuadrado:

```py
def elevar_al_cuadrado(numero):
	return numero ** 2
```x

---

## Parámetros y argumentos

En la definición de una función los valores que se reciben se denominan **parámetros**, pero durante la llamada a cuyas funciones, los valores que se envían se denominan **argumentos**.


### Argumentos por posición

Cuando enviamos argumentos a una función, estos se reciben en orden según los parámetros definidos. En esos casos podemos decir que se trata de argumentos por posición:


```py
def resta(a, b):
	return a - b

print(resta(50, 10))
```

```shell
40
```

### Argumentos por nombre

Sin embargo es posible evadir el orden de los parámetros, si indicamos en la llamada a la función que valor tiene cada parámetro a partir de su nombre:

```py
def resta(a, b):
	return a - b

print(resta(b=50, a=10))
```

```
-40
```
{: .nolineno .noheader }


### Llamada sin argumentos

Al llamar a una función que tiene definidos parámetros, si no le enviamos los argumentos correctamente lanzará un error:

```py
resta()
```
{: .nolineno }

```py
Traceback (most recent call last):
  File "c:/Users/file.py", line 4, in <module>
    resta()
TypeError: resta() missing 2 required positional arguments: 'a' and 'b'
```
{: .nolineno .noheader }


### Parámetros por defecto

Para evitar un error como en el caso anterior, podemos asignar valores por defecto, de esa forma podríamos hacer una comprobación antes de ejecutar el código de la función:

```py
def resta(a=None, b=None):
	if a == None or b == None:
		return "Error, debes enviar dos números a la función para operar"
	return a-b

print(resta())
```

```py
Error, debes enviar dos números a la función para operar
```
{: .nolineno .noheader }
