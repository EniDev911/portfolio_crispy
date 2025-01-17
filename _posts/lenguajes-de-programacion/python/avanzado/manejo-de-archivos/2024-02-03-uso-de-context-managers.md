---
title: Uso de context managers (with statement) para manejar archivos
author: enidev911
categories: [Python, Manejo de Archivos en Python]
tags: [trabajar con archivos]
---

El uso de context managers en Python, con la declaración `with`, es una práctica recomendada para manejar archivos y otros recursos que necesitan ser limpiados o liberados después de su uso. Los context managers aseguran que los recursos se gestionen de manera adecuada, evitando problemas como fugas de memoria o archivos que queden abiertos inadvertidamente.


## ¿Qué es un Context Managers?

Un context manager es un objeto que define los métodos especiales `__enter__` y `__exit__`. Estos métodos permiten a Python manejar la configuración y la limpieza de recursos automáticamente. Cuando se utiliza la declaración `with`, el contexto se establece cuando se entra en el bloque de código y se limpia cuando se sale de él, ya sea de manera normal o por excepción.

## Usando with para Manejar Archivos

La forma más básica de cómo usar un context manager para manejar archivos en Python:

```bash
>>> with open('file.txt') as archivo:
...    contenido = archivo.read()
...    print(contenido)
```
{: .nolineno .noheader }

### ¿Qué está pasando aquí?

- **Flujo**
  + [x] 1. **Abrir el archivo**: La función `open()` abre el archivo y devuelve un objeto manejador de archivo que implementa el contexto de gestión.
  + [x] 2. `with open(...) as archivo`: Aquí, `open(...)` es el context manager. El archivo se abre y se asigna al identificador `archivo`.
  + [x] 3. **Lectura del contenido**: Dentro del bloque `with`, podemos trabajar con el archivo como desiemos. En este caso, estamos leyendo el contenido completo del archivo y luego imprimiéndolo.
  + [x] 4. **Cierre automático**: Al salir del bloque `with`, el archivo se cierra automáticamente, incluso si ocurre una excepción dentro del bloque. 

### Ventajas del uso de with

1. **Gestión Automática de Recursos**: El archivo se cierra automáticamente al finalizar el bloque, evitando la necesidad de llamar explícitamente a `archivo.close()`.
2. **Manejo de Excepciones**: Si ocurre una excepción dentro del bloque `with`, el contexto de manejo garantiza que el recurso se limpie adecuadamente.
3. **Código Más Limpio**: El uso de `with` reduce la necesidad de código adicional para manejar la apertura y cierre de archivos, lo que hace que el código sea más legible y menos propenso a errores.

### Context Managers Personalizados

Podemos crear nuestros propios context managers para gestionar recursos personalizados. Veamos el siguiente ejemplo de un context manager que mide el tiempo de ejecución de un bloque de código:

```py
import time

class Temporizador:
  def __enter__(self):
    self.inicio = time.time()
    return self

  def __exit__(self, exc_type, exc_value, traceback):
    self.fin = time.time()
    print(f"Tiempo de ejecución: {self.fin - self.inicio:.4f} segundos")

## Uso de context manager personalizado
with Temporizador() as t:
  # Código cuyo tiempo de ejecución queremos medir
  time.sleep(2)
```
