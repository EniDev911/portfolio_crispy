---
title: Manejo de excepciones
author: enidev911
categories: [Python, Avanzado]
tags: [excepciones]
mermaid: true
---

## Manejo de Errores en Python con try y except

En el desarrollo de software, es fundamental que tu código pueda manejar situaciones inesperadas o errores de manera elegante y controlada. Python proporciona un mecanismo robusto para manejar errores y excepciones a través de las estructuras `try` y `except`. En este artículo, exploraremos en detalle cómo funcionan estas estructuras y cómo puedes usarlas para mejorar la robustez y la confiabilidad de tus programas.

### ¿Qué son las Excepciones?

Las excepciones en Python son eventos que ocurren durante la ejecución de un programa y que interrumpen el flujo normal de ejecución. Los errores pueden surgir por diversas razones, como:
- Dividir por cero (`ZeroDivisionError`).
- Intentar acceder a un índice fuera de rango en una lista (`IndexError`).
- Intentar abrir un archivo que no existe (`FileNotFoundError`).

Cuando se produce una excepción, Python detiene la ejecución del código y busca un bloque `except` adecuado para manejar el error.

### Estructura básica de try y except

La estructura básica para manejar excepciones en Python es la siguiente:

```python
try:
    # Código que puede generar una excepción
    resultado = 10 / 0
except ZeroDivisionError:
    # Código que se ejecuta si se produce una excepción
    print("No se puede dividir por cero.")
```

En este ejemplo:
- **`try`**: Contiene el código que puede causar una excepción.
- **`except`**: Contiene el código que maneja la excepción si ocurre.

### Capturar Excepciones Específicas

Es una buena práctica capturar excepciones específicas en lugar de usar una captura genérica. Esto te permite manejar diferentes tipos de errores de manera adecuada.

```python
try:
    archivo = open('archivo_inexistente.txt', 'r')
except FileNotFoundError:
    print("El archivo no se encontró.")
except PermissionError:
    print("No tienes permiso para abrir el archivo.")
```

En este ejemplo:
- **`FileNotFoundError`**: Maneja el caso en que el archivo no se encuentra.
- **`PermissionError`**: Maneja el caso en que no tienes permisos para abrir el archivo.

### Capturar Excepciones Genéricas

Si no estás seguro de qué tipo de excepción puede ocurrir, puedes capturar cualquier excepción utilizando una captura genérica. Sin embargo, se debe usar con precaución, ya que puede ocultar errores inesperados.

```python
try:
    resultado = 10 / 0
except Exception as e:
    print(f"Ocurrió un error: {e}")
```

En este ejemplo:
- **`Exception`**: Captura cualquier tipo de excepción.
- **`as e`**: Almacena la excepción en la variable `e` para su posterior uso.

### Bloques else y finally

Puedes usar los bloques `else` y `finally` junto con `try` y `except` para manejar casos adicionales:

- **`else`**: Se ejecuta si no ocurre ninguna excepción en el bloque `try`.
- **`finally`**: Se ejecuta siempre, ya sea que ocurra una excepción o no. Es útil para realizar tareas de limpieza.

```python
try:
    resultado = 10 / 2
except ZeroDivisionError:
    print("No se puede dividir por cero.")
else:
    print(f"El resultado es {resultado}")
finally:
    print("Ejecución finalizada.")
```

En este ejemplo:
- **`else`**: Se ejecuta si el bloque `try` no genera una excepción.
- **`finally`**: Se ejecuta siempre, independientemente de si ocurrió una excepción o no.

### Re-lanzar Excepciones

En algunos casos, es posible que quieras capturar una excepción, realizar algunas acciones y luego volver a lanzar la excepción. Esto se puede hacer con `raise`:

```python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero.")
    raise  # Vuelve a lanzar la excepción
```

En este ejemplo:
- **`raise`**: Re-lanza la excepción para que pueda ser manejada en un nivel superior o para interrumpir la ejecución del programa.

### Manejo de Excepciones en Funciones

Puedes usar `try` y `except` dentro de funciones para manejar excepciones que ocurren en esas funciones.

```python
def dividir(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("No se puede dividir por cero.")
        return None

resultado = dividir(10, 0)
print(resultado)
```

En este ejemplo:
- **`dividir(a, b)`**: Función que maneja la excepción `ZeroDivisionError` internamente.

### Conclusión

El manejo adecuado de excepciones es crucial para escribir programas robustos y confiables en Python. Las estructuras `try` y `except` te permiten capturar y manejar errores de manera controlada, evitando que tu programa se detenga inesperadamente y proporcionando una forma clara de gestionar problemas que puedan surgir durante la ejecución.

En este artículo, hemos cubierto cómo usar `try` y `except` para manejar excepciones específicas y genéricas, así como el uso de bloques `else` y `finally` para gestionar casos adicionales. Con estos conceptos, estarás mejor equipado para crear programas que puedan manejar errores de manera eficiente y mantener una experiencia de usuario fluida.

¡Experimenta con estas técnicas en tus proyectos y mejora la calidad y robustez de tu código Python!

---

Espero que este artículo te haya proporcionado una comprensión clara y detallada sobre el manejo de excepciones en Python. ¡Utiliza estos conceptos para escribir código más sólido y confiable!
