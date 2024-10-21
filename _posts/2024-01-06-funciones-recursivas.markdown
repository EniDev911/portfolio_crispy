---
title: "Funciones Recursivas"
author: enidev911
date: 2024-01-06
categories: [Python, Funciones]
---


El concepto de recursividad es la forma de **autorreferencialidad**, quiere decir, se trata de funciones que se llaman a sí mismas durante su propia ejecución. Funcionan de una forma similar a las iteraciones, pero debemos encargarnos de planificar una estrategia para que dejen de llamarse a sí mismas, de lo contrario tendremos una función recursiva infinita.

```py
def cuenta_regresiva(num):
	num -= 1
	if num > 0:
		print(num)
		cuenta_regresiva(num)
	else:
		print("Boooom!")
```

```
4
3
2
1
Boooom!
```
{: .nolineno .noheader }

### Ejemplo con retorno

El factorial de un número corresponde al producto de todos los números desde el 1 hasta el propio número. Es el ejemplo más común para mostrar la utilidad de este tipo de funciones:

- 3! = 1x2x3 = 6
- 5! = 1x2x3x4x5 = 120 


```py
def factorial(num):
	print("Valor inicial:", num)
	if num > 1:
		num = num * factorial(num - 1)
	print("Valor final:", num)
	return num

print(factorial(5))
```

```py
Valor inicial: 5
Valor inicial: 4
Valor inicial: 3
Valor inicial: 2
Valor inicial: 1
valor final: 1
valor final: 2
valor final: 6
valor final: 24
valor final: 120
```
{: .nolineno .noheader }
