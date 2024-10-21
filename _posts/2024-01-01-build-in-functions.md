---
title: Funciones integradas
author: enidev911
date: 2019-08-09 20:55:00 +0800
categories: [Python, Funciones]
tags: [funciones en python]
pin: true
img_path: '/posts/20180809'
---

Python tiene una gran variedad de funciones que podemos utilizar sin necesidad de importar ningún módulo. En este artículo vamos a seleccionar algunas para revisar y dichas funciones estarán agrupadas en diferentes categorías en función de su utilidad, tal y como se puede ver en la tabla de contenido de este artículo.

---

## Entrada - Salida

### print()

Es sin duda la función más conocida de todas. Lo que hace `print()` es imprimir por la salida estándar la representación en un *string* de cualquier objeto. Además tiene varios parámetros de entrada opcionales que modifican su comportamiento.

#### Sintaxis

```
print(object(s), sep=separator, end=end, file=file, flush=flush)
```

#### Parámetros

- `object(s)` (*Opcional*) : Uno o más objetos, que serán convertidos en *string* para ser imprimidos.
	- Predeterminado `\n` (salto de línea)
- `sep='separator'` (*Opcional*) : Un separador que permite especificar el carácter para separar los objetos, si es que son más de uno.
	- Predeterminado `''` (espacio en blanco)
- `end='end'` (*Opcional*) : Permite especificar como imprimir al final del *string*
	- Predeterminado `\n` (salto de línea)


#### Ejemplos

```python
print("Hola Mundo!") # Hola Mundo!
print([1, 2, 3, 4])  # [1, 2, 3, 4]
print("Bienvenido", "al", "Mundo", "de", "Python", sep="\n")
"""
Bienvenido
al
Mundo
de
Python
"""
print("Python", "te", "saluda", sep="\n", end="\n*-*-*-\n")
"""
Python
te
saluda
*-*-*-
"""
```

### input()

La función integrada `input()` toma datos de entrada por el teclado hasta que pulsamos <kbd>Enter</kbd>. Normalmente a menudo tenemos la necesidad de obtener un dato para proporcionar algún tipo de resultado.

#### Sintaxis

```
input(prompt)
```

#### Parámetros

- `prompt` : Un *string* que se muestra como un mensaje de ayuda para el usuario que interactua con el programa.

#### Ejemplos

```py
val = input("Ingresa un valor: ")
print(val)
```

---

## Funciones matemáticas

### abs()

La función `abs()` retorna el valor absoluto, es decir su valor sin importar su signo. El argumento que puede recibir la función puede ser un número entero, un número de coma flotante. En caso de números complejos retorna el valor de la magnitud.

```py
abs(3)    # 3
abs(-3)   # 3
abs(-3.0) # 3.0
abs(3+4j) # 5.0
```

### round()

La función `round()` redondea un número a su entero más próximo. Pero los números decimales que terminan en 5 son un caso especial. Python sigue la estrategia de "redondear empates a números pares". Esto significa que para redondear un número de coma flotante terminado en 5, se mira el dígito que tiene a su izquierda. Si el dígito es par, el redondeo hacia abajo. Es por eso que en Python tanto 1.5 como 2.5 redondean a 2.

#### Sintaxis

```
round(number, digits)
```

#### Ejemplos

```py
round(1.5)         #2
round(2.5)         #2
round(3.141592, 4) #3.1416
```

---

## Ayuda para programar

### help()

La función `help()` muestra la ayuda integrada de cualquier componente del ecosistema de Python, y como tal está pensada para ser utilizada por el intérprete. Si no se especifica ningún parámetro inicia una sesión interactiva. Por el contrario, si se le pasa un nombre de una clase o un objeto que la represente, mostrará la ayuda de esa clase.

#### Sintaxis

```
help(object)
```

#### Ejemplo

```py
help(list)      # Muestra la ayuda para las listas
help([1, 2, 3]) # Muestra la ayuda para las listas
help(help)      # Muestra la ayuda de la función help
help()          # Abre una sesión de ayuda interactiva
```

### dir()

Con la función `dir()` obtenemos una lista cuyos elementos son los métodos del **objeto** ordenados alfabéticamente. Cabe destacar que podemos pasar tanto el nombre de una clase o un objeto que la represente.

#### Sintaxis

```
dir(object)
```

#### Ejemplos

```py
dir(list)      # Muestra todos los métodos de las listas
dir([1, 2, 3]) # Muestra todos los métodos de las listas
```

---

## Estructuras de datos

### list()

En realidad `list()` más que una función en si, se trata de un constructor de **listas**. Cuando lo utilizamos sin argumentos crea una lista vacía. También le podemos pasar como argumento una secuencia iterable, en cuyo caso la convierte en una lista. Normalmente esa secuencia iterable que le pasamos a `list()` no suele ser una lista ya que estaríamos generando código redundante.

#### Sintaxis

```
list(iterable)
```

#### Ejemplos

```py
list()          # []
list((1, 2, 3)) # [1, 2, 3]
list(range(3))  # [0, 1, 2]
```

### dict()

Asi como `list()`, también tenemos el constructor para la clase de **diccionarios** `dict()`. Usado sin argumento retorna un diccionario vacío. Con `dict()` también podemos crear un diccionario que no sea vació. Para ello tenemos que pasarle argumentos nombrados, donde los nombres de argumentos se corresponden con las claves del diccionario y los valores con el valor para sus respectiva clave.

```py
print(dict())                     # {}
print(dict(uno=1, dos=2, tres=3)) # {'uno': 1, 'dos': 2, 'tres': 3}
```



---

## Generación de secuencias iterables

### range()

La función `range()` genera una secuencia de números enteros que podemos utilizar para iterar en un **bucle**. La secuencia generada comienza en **0** y termina en el entero anterior al argumento dado. Alternativamente, la función puede recibir dos parámetros más que son opcionales.

#### Sintaxis

```
range(start, stop, step)
```

#### Parámetros

- `start` (*Opcional*) : Un número entero que permite especificar el número que comenzará la secuencia.
	- Predeterminado 0
- `stop` (*Requerido*) : Un número entero que permite especificar el termino de la secuencia.
- `step` (*Opcional - 1*) : Un número entero que permite especificar como incrementar la secuencia.
	- Predeterminado 1


#### Ejemplos

Crea una secuencia de 9 números comenzando desde el 4, y muestra cada número de la secuencia:

```py
start = 4
stop = start + 9
for n in range(start, stop):
	print(n)
```

Crea una secuencia de números comenzando desde el 1 hasta el 30, pero que valla incrementando de 3 en 3:

```py
start = 1
stop = 31
step = 3
for n in range(start, stop, step):
	print(n)
```

### Enumerate()

La función `enumerate()` toma una secuencia o un iterador y retorna un objeto de tipo `enumerate`. El dicho objeto es una *tupla* con el valor y sus respectivos índices.

#### Sintaxis

```
enumarate(iterable, start)
```

#### Parámetros

- `iterable` (*Requerido*) : Un objeto iterable.
- `start` (*Opcional*) : Un número entero que permite especificar el número que comenzará la enumeración del objeto iterable.
	- Predeterminado 0

#### Ejemplos

enumerar una lista de instrucciones comenzando la enumeración desde el 1:

```py
instrucciones = [
	'Clic derecho para abrir el menú contextual',
	'Desplazarse hasta la opción nuevo',
	'Seleccionar la opción carpeta',
	'Dar el nombre a la carpeta'
]

for index, item in enumerate(instrucciones, 1):
	print(index, item)
```


### map()

Esta función trabaja de forma similar a la función `filter()` con la diferencia que en lugar de aplicar una condición a un elemento de una secuencia o lista, aplica una función sobre todos los elementos y como resultado nos retorna un iterable de tipo map.


### Ejemplos

Tenemos una función definida por el usuario para elevar números al cuadrado llamada `al_cuadrado` y será la función que le pasaremos como argumento a la función `map()`:

```python
def al_cuadrado(num):
  return num ** 2

numeros = [2, 5, 10, 23, 20]

numeros_al_cuadrado = map(al_cuadrado, numeros)

print(numeros_al_cuadrado) # <map object at 0x0000000002205D48>
print(list(numeros_al_cuadrado)) # [4, 25, 100, 529, 400]
```
{: .nolineno }

Como observamos en el ejemplo de forma fácil podemos transformar el iterable map en una lista. Podemos simplificarlo con una **función lambda** para sustituir la llamada a una función definida por el usuario anterior:

```py
numeros_al_cuadrado = list(map(lambda x: x**2, numeros))
print(numeros_al_cuadrado) # [4, 25, 100, 529, 400]
```
{: .nolineno }

