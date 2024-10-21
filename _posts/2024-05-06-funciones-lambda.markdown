---
title: "Funciones lambda"
author: enidev911
categories: [Python, Funciones]
date: 2024-01-01
---

## ¿Qué es una función Lambda?

Las funciones Lambda son similares a las funciones definidas por el usuario pero no llevan nombre. Se le conoce comúnmente como funciones anónimas.

Las funciones Lambda suelen ser útiles en varios contextos, un caso suele ser cuando desea crear una función que solo contengan expresiones simples, es decir, que podemos escribir en una sola línea.

## ¿Cómo se definen las funciones Lambda?

Para definir debemos respetar la siguiente sintaxis:


```python
lambda argumento(s) : expresion
```
{: .nolineno }

- `lambda`: es una palabra reservada en Python para definir la función anónima.

- `argumentos`: es un marcador de posición, es decir, una variable que se utilizará para contener el valor que desea pasar a la expresión de la función. Una función lambda puede tener múltiples variables según necesite.
- `expresion`: es el código que desea ejecutar en la función lambda.


> La función anónima no utiliza explícitamente `return`. Esto se debe a que la función anónima devolverá automáticamente el resultado de la expresión en la función una vez que se ejecute.
{: .prompt-info }


### Creando una función lambda

Veamos un ejemplo de una función definida por el usuario que devuelva un número recibido por parámetro elevado al cuadrado:

```python
def al_cuadrado(num):
  return num ** 2

print(al_cuadrado(10)) # 100
```
{: .nolineno }

Ahora para hacer lo mismo con una función lambda. Lo creamos así:

```python
al_cuadrado = lambda num: num ** 2

print(al_cuadrado(10)) # 100
```
{: .nolineno }


## Casos de uso para funciones lambda


### Filtros

Cuando necesitamos en valores específicos en un iterable, podemos utilizar la función `filter()` de Python. Su sintaxis es la siguiente:


```py
filter(function, iterable)
```
{: .nolineno .noheader }


Como podemos observar, esta función requiere de otra función que contenga la expresión u operaciones que se realizaran sobre el iterable.

Por ejemplo, supongamos que nos dan una lista de números y queremos sólo los números pares, sabemos que para que un número sea par su módulo o resto debe ser 0 cuando se divide por 2. Esa expresión la podemos hacer en una función lambda.

En ese caso podemos hacer lo siguiente:


```python
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares = filter(lambda x: x % 2 == 0, numeros)

print(pares) # filter nos devuelve un objeto iterador: <filter object at 0x0000000002105C08>
print(list(pares)) # creamos una lista con los valores filtrados: [2, 4, 6, 8, 10]
```
{: .nolineno }
