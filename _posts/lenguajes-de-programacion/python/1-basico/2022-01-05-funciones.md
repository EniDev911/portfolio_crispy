---
title: "Python 🐍 : Funciones"
categories: [Python, "01. Básico"]
tags: [python, funciones]
image:
  path: posters/funciones-en-python.webp
  lqip: data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJYwDA3CE7zlJkoJdQqAAA/oOTDiSrfdJ4Zs686zvvP/l7Vx4F0S9/tHIvz5mFf8fXi77vxpAAAA==
---

## __Funciones en Python__

Anteriormente hemos visto funciones nativas que vienen con Python como `len()` para calcular la longitud de una lista, pero al igual que en otros lenguajes de programación, también podemos definir **nuestras propias funciones**. Para ello tenemos que usar la palabra reservada `def`.

## __Sintaxis de una función__

Para explicar mejor, puedes ver a continuación una imagen que explica como está construida una función básica en Python:

![explicación de función](python/explicacion-de-funcion-dark.webp){:.dark}
![explicación de función](python/explicacion-de-funcion-light.webp){:.light}


Cualquier función tendrá un **nombre**, opcionalmente podrá recibir **parámetros**, el cuerpo que contiene el **código a ejecutar** y opcionalmente, pero que en la mayoría de los casos se hace es que nos retorna un valor.

El siguiente ejemplo de código, define una función que recibe un parámetro y retorna el valor pasado como argumento a la función elevado al cuadrado:

```py
def elevar_al_cuadrado(numero):
	return numero ** 2
```
{: .nolineno }

## __Parámetros y Argumentos__

En la definición de una función los valores que se reciben se denominan **parámetros**, pero durante la llamada o invoación a cuyas funciones, los valores que se envían se denominan **argumentos**.


### **Argumentos por posición**

Cuando enviamos argumentos a una función, estos se reciben en orden según los parámetros definidos. En esos casos podemos decir que se trata de argumentos por posición:

```py
def resta(a, b):
	return a - b

print(resta(50, 10))
```
{: .nolineno }

```
40
```
{: .noheader .fit-content }

### **Argumentos por nombre**

Sin embargo es posible evadir el orden de los parámetros, si indicamos en la llamada a la función que valor tiene cada parámetro a partir de su nombre:

```py
def resta(a, b):
	return a - b

print(resta(b=50, a=10))
```
{: .nolineno }

```
-40
```
{: .noheader .fit-content }


### __Llamada sin argumentos__

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


### **Parámetros por defecto**

Para evitar un error como en el caso anterior, podemos asignar valores por defecto, de esa forma podríamos hacer una comprobación antes de ejecutar el código de la función:

```py
def resta(a=None, b=None):
	if a == None or b == None:
		return "Error, debes enviar dos números a la función para operar"
	return a-b

print(resta())
```
{: .nolineno }

```
Error, debes enviar dos números a la función para operar
```
{: .noheader .fit-content }
