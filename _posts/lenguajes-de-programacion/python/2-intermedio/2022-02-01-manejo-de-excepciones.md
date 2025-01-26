---
title: "Python 🐍 : Manejo de Errores y Excepciones"
author: enidev911
categories: [Python, "02. Intermedio"]
tags: [python, intermedio]
---

El manejo de errores y excepciones es una parte fundamental en el desarrollo de cualquier software, y Python proporciona una manera eficiente y flexible de gestionar situaciones imprevistas que pueden surgir durante la ejecución de un programa. En este artículo, exploraremos cómo funcionan las excepciones en Python y cómo podemos usarlas para hacer que el código sea más robusto y fácil de depurar.

## **¿Qué es una Excepción?**

En términos sencillos, una excepción es un evento inesperado que interrumpe el flujo normal de ejecución de un programa. En Python, las excepciones se utilizan para manejar errores de forma controlada, permitiendo que el programa no se detenga bruscamente.

Por ejemplo, si intentas dividir por cero, Python lanzará una excepción [`ZeroDivisionError`](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError){: target='_blank' }. En lugar de que el programa se detenga de inmediato, podemos **capturar** y manejar esa excepción para tomar una acción apropiada, como mostrar un mensaje de error o realizar una operación alternativa.


### **Estructura Básica de Manejo de Excepciones**

En Python, el manejo de excepciones se realiza mediante las plabaras claves `try`, `except`, y opcionalmente `else` y `finally`.

**Sintaxis Básica**

```py
try:
    # Bloque de código que puede causar una excepción
    resultado = 10 / 0
except ZeroDivisionError as e:
    # Bloque que maneja la excepción
    print(f"Error: {e}")
```
{: .nolineno }

En este ejemplo:

- El bloque `try` contiene el código que podría generar una excepción.
- Si ocurre una excepción, Python salta al bloque `except` donde puedas manejarla. En este caso, capturamos una excepción de tipo `ZeroDivisionError` y mostramos un mensaje de error.

### **Tipos de Excepciones**

Algunas de las excepciones que podemos encontrar en Python, son las siguientes:

|Tipo de Excepción|Error que produce|
|:----------------|:----------------|
|`AttributeError`|Error en una referencia o asignación a un atributo.|
|`ImportError`|Importar un módulo no encontrado.|
|`IndexError`|Referenciar un índice fuera del rango posible en una secuencia.
|`KeyError`|Referenciar una clave no existente en un diccionario.|
|`MemoryError`|Ejecución que consume toda la memoria disponible.|
|`NameError`|Referenciar a una variable no encontrada.|
|`ZeroDivisionError`|Dividir por cero.|

### **Manejar Múltiples Excepciones**

Podemos manejar diferentes tipos de excepciones con múltiples bloques `except`. Si tenemos varios casos de error posibles, podemos especificarlos de forma individual de la siguiente manera:

```py
try:
    valor = int(input("Introduce un número: "))
    resultado = 10 / valor
except ZeroDivisionError:
    print("No puedes dividir por cero.")
except ValueError:
    print("Eso no es un número válido.")
```
{: .nolineno }

