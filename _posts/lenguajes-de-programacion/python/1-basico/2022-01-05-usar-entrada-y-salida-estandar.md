---
title: "Python 🐍 : Entrada y Salida (I/O)"
author: enidev911
categories: [Python, "01. Básico"]
tags: [python]
pin: true
img_path: 'python'
image:
    path: "https://enidev911.github.io/fullstack-python/assets/img/python-input-card.png"
    alt: "input python"
---

## **Entrada de datos en Python (input)**

Los desarrolladores a menudo tenemos la necesidad de interactuar con los usuarios, ya sea para obtener datos o para proporcionar algún tipo de resultado y mostrarlo por la consola. La mayoría de los programas actuales utilizan un cuadro de diálogo como una forma de pedirle al usuario que proporcione algún tipo de entrada. Mientras que Python una función incorporada para leer la entrada estándar desde el teclado.


### **La función input()**

La función `input()` se utiliza para leer los datos ingresados por el usuario desde el teclado. Esta función siempre devuelve los datos como una **cadena de texto** (string), incluso si el usuario ingresa un número. Si necesitas realizar operaciones con esos datos, es importante que los conviertas al tipo adecuado.

**Sintaxis de `input()`**

```py
input([prompt]) # Para Python en su versión 3.x
```
{: .nolineno }

> **prompt**: es un parámetro opcional y recibe como argumento una cadena de texto para mostrar al usuario.
{: .prompt-tip }

**Como funciona internante `input()` en Python**

+ [x] Primero se ejecuta la función `input()`, el flujo del programa se detendrá hasta que el usuario ingrese un valor o no y presione <kbd>Enter</kbd>.
+ [x] El texto o mensaje que se ingreso para el parámetro `prompt` se muestra en la pantalla de salida para pedirle al usuario que ingrese un valor de entrada.
+ [x] Se evalúa la expresión, lo que significa que Python identifica automáticamente si el usuario ingresó una cadena, un número, una lista, etc.Lo que sea que ingrese como entrada, la función `input()` lo convierte en una cadena de texto.
+ [x] Si la entrada proporcionada no es correcta, Python genera un error de sintaxis o una excepción como [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError).


### **Ejemplo básico con input()**

Le pedimos al usuario que ingrese un valor desde el teclado:

```py
val = input("Introduce un valor: ")
print(val)

print(type(val)) # <class 'str'>
```

> **Recuerda** que por defecto cualquier valor ingresado, Python lo almacena como una cadena
{: .prompt-info }

Si lo que queremos es que el usuario ingrese un número y representarlo como tal, tenemos que hacer la conversión de tipos, es decir, decirle a Python explícitamente que la variable que contiene a la función `input()` se convierta a número. Para ello Python nos proporciona algunas funciones integradas:

```py
val = input("Ingresa un número: ")

entero = int(val)
flotante = float(val)

print(type(entero)) # <class 'int'>
print(type(flotante)) # <class 'float'>

print(entero)
print(flotante)
```

> Las funciones `int()`, `float()` lanzan **excepciones** cuando el argumento pasado no puede ser representado como un número.
{: .prompt-danger }

```py
>>> int("diez")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'diez'
```
{: .nolineno .noheader }

## **Enviar datos a la salida estándar en Python (print)**

### **La función print()**

La función como ya te podrás imaginar se utiliza para mostrar texto o variables en la consola. Es una de las funciones más comunes en Python para salida de datos.

**Sintaxis de `print()`**

```py
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```
{: .nolineno }

- **objects**: Los objetos que deseas imprimir. Puedes imprimir uno o más objetos separados por comas.
- **sep**: El separador entre los objetos (por defecto es un espacio).
- **end**: El final de la línea (por defecto es un salto de línea `\n`).
- **file**: Permite especificar el archivo en el que escribir (por defecto es la consola).
- **flush**: Controla si de debe forzar el vaciado del buffer (normalmente no es necesario).

## Tomando múltiples entradas del usuario en Python

En Python se pueden tomar múltiples valores o entradas en una línea mediante dos métodos:

- usando el método `split()` para dividir un *string*
- usando la comprensión de lista (*list comprehension*)

### Usando el método split()

#### Sintaxis

```
str.split(separator, maxplit)
```

Esta función nos puede ayudar a obtener múltiples entradas de los usuarios, rompe la entrada dada por el separador (`separator`). Cualquier espacio en blanco es un separador predeterminado para el parámetro `separator`, los desarrolladores usan el método **split()** para dividir un *string* en Python, pero se puede usar para tomar múltiples entradas.


### Ejemplos usando split()

```py
x, y = input('Ingresa dos valores: ').split()
print('Eje x:', x)
print('Eje y:', y)
# ======== Otra forma
a, b = input('Ingresa dos valores: ').split()
print('Primer número {} y segundo número es {}'.format(a, b))
```


## Usando la comprensión de listas

Las comprensión de lista (*list comprehension*) es una forma elegante de definir y crear listas en Python. Podemos crear listas como enunciado matemáticos en una sola línea. También se utiliza para obtener múltiples entradas de un usuario.

### Sintaxis de list comprehension

```
[expression for variable in collection if condition]
```

A menudo la expresión (es decir, aquello que terminará inserto en la lista resultante) es igual a la variable, la condición es opcional. La colección puede ser una lista o cualquier otro objeto iterable (esto es, cualquier cosa sobre lo que podamos aplicar un bucle `for`).

**Ejemplos**: 

{: .clipboard }
```py
x, y = [int(x) for x in input("Ingresa dos valores: ").split()]
print('Eje x:', x)
print('Eje y:', y)
```

{: .clipboard }
```py
x = [int(x) for x in input("Ingrese múltiples valores separados por coma: ").split(",")]
print("Numeros de la lista: ", x)
```

## Complementando para ocultar la información de entrada

Otro aspecto que es importante son las contraseñas al momento de manejar entradas, debemos buscar la manera segura de ingresar esta información. Python propociona la función **getpass()** del módulo con el mismo nombre. Le solicita al usuario una contraseña sin hacer eco. El módulo **getpass** proporciona una forma segura de manejar las solicitudes de contraseña donde los programas interactúan con los usuarios a través del terminal. Este módulo proporciona dos funciones:


1. **getpass.getpass()**
2. **getpass.getuser()**


La función **getpass()** se utiliza para solicitar a los usuarios que utilicen la solicitud de cadena y lee la entrada del usuario como Contraseña. La lectura de entrada predeterminada es "Password: " se devuelve a la persona que llama como una cadena.

**Sintaxis**: 

```
getpass.getpass(prompt='Password: ', stream=None) 
```

Veamos el siguiente ejemplo para comprender su implementación.

{: .clipboard }
```py
# Ejemplo 1: Sin argumentos en la llamada.
import getpass
 
try:
    p = getpass.getpass()
    
except Exception as error:
    print('ERROR', error)
else:
    print('Contraseña ingresada: ', p)
# Entrada del usuario:
# Password : (No se muestra lo que se escribe.)
# output: Contraseña ingresada: salchipapa123
```

Al no proporcionar una cadena como argumento se imprime el valor **password:** para mostrar al usuario es el valor por defecto que tiene la función. Hay ciertos programas que solicitan preguntas de seguridad en lugar de solicitar contraseñas para mejorar la seguridad. Aquí, la solicitud se puede cambiar a cualquier valor. 


{: .clipboard }
```py
# Ejemplo 2: cambiamos la pregunta
import getpass
 
p = getpass.getpass(prompt='¿Cuál es tu color favorito? ')
 
if p.lower() == 'azul':
    print('Bienvenido..!!!')
else:
    print('La respuesta ingresada es incorrecta..!!!')
# Entrada: ¿Cuál es tu color favorito? Azul
# output: Bienvenido
```

La función **getuser()** muestra el nombre de inicio de sesión del usuario. Esta función verifica las variables de entorno **`LOGNAME`**, **`USER`**, **`LNAME`** y **`USERNAME`**, en orden, y devuelve el valor de la primera cadena no vacía. 

**Sintaxis**: 

```
getpass.getuser()
```

Veamos el siguiente ejemplo para comprender su implementación.

```py
#Ejemplo 3: Mostrando el usuario 
import getpass
 
user = getpass.getuser()
 
while True:
    pwd = getpass.getpass("Usuario : %s " % user)
 
    if pwd == 'abcd123':
        print "Bienvenido!!!"
        break
    else:
        print "La contraseña es incorrecta."
# Entrada : Usuario: Will 
```
