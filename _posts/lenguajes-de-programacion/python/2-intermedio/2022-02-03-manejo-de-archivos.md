---
title: "Python 🐍 : Manejo de Archivos"
author: enidev911
categories: [Python, "02. Intermedio"]
tags: [trabajar con archivos]
---

Uno de los aspectos más comunes al programar es el **manejo de archivos**. Python nos facilita la interacción con archivos mediante su módulo incorporado `open()`, el cual permite abrir archivos, leer su contenido, escribir datos e incluso modificar archivos existentes.

En este post, nos vamos a enfocar principalmente en **leer** y **escribir** archivos como los que creamos en un editor de texto. Más adelante veremos cómo trabajar con archivos de bases de datos, que son archivos binarios diseñados específicamente para ser leídos y escritos a través de software para el manejo de bases de datos.

Cuando queremos abrir un archivo (digamos, en el disco duro), primero debemos **abrir el archivo**. Al abrir el archivo nos comunicamos con el sistema operativo, el cual sabe dónde están almacenados los datos de cada archivo. Cuando abres un archivo, le estás pidiendo al sistema operativo que encuentre el archivo por su nombre y se asegure que existe.

## **Abriendo archivos**

> Es importante dominar los conceptos de **ruta relativa** y **ruta absoluta** para trabajar con archivos.
{: .prompt-warning }

Para abrir un archivo, Python nos brinda la función `open()` que recibe como argumento la **ruta del archivo** que queremos manejar como un `string` y como segundo argumento el **modo de apertura** también como un `string`.

{:class='fs-5'}
Ejemplo

```bash
>>> manejador = open('file.txt')
>>> manejador
<_io.TextIOWrapper name='file.txt' mode='r' encoding='cp65001'>
>>> type(manejador)
<class '_io.TextIOWrapper'>
```
{: .nolineno .noheader }

Si el resultado de la función `open()` es exitoso, el sistema operativo nos devuelve una instancia de `TextIOWrapper` que es una clase en el módulo `io` de Python que se utiliza para manejar flujos de entrada/salida de texto, que en este caso lo estamos asignando a una variable llamada `manejador`. El **manejador de archivo** no son los datos contenidos en el archivo, sino un manejador (*handler*) que podemos usar para leer los datos.

---

## Leer un archivo

Para leer un archivo sabemos que lo primero es abrir el respectivo archivo usando la función `open()`, si nos ponemos a pensar en una lista de amigos que tenemos en un archivo de texto llamado `amigos.txt` con el siguiente contenido:

```
Marco
Luis
Gabriel
Alejandro
```
{: file='amigos.txt' }

### read()

Luego de usar la función `open`, abrimos el archivo en modo lectura (si no le pasamos un segundo argumento a la función `open()` por defecto es modo lectura) y usamos el método `read()` del manejador:

```py
>>> manejador = open('amigos.txt')
>>> manejador.read()
'Marco\nLuis\nGabriel\nAlejandro'
```
{: .nolineno .noheader }

Este método `read()` lee todo el contenido del archivo como una sola cadena de texto. Puede ser útil para archivos pequeños.

> Una vez ejecutado el método `read()` del manejador si no se guarda el resultado en una variable, se debe volver a posicionar el puntero al inicio (usando el método `seek(0)` del maneajor).
{: .prompt-warning }

### read(size)

El método `read()` si se le pasa el argumento `size` lee esa cantidad de bytes. Si se omite lee todo el el contenido restante del archivo.

```py
>>> manejador = open('amigos.txt')
>>> manejador.read(10)
'Marco\nLuis'
>>> manejador.read()
'\nGabriel\nAlejandro'
```
{: .nolineno .noheader }


### readline()

El método `readline()` lee una sola línea del archivo. Es útil para leer archivos línea por línea

```py
>>> manejador = "amigos.txt"
>>> manejador.readline()
'Marco\n'
>>> manejador.readline()
'Luis\n'
>>> manejador.readline()
'Gabriel\n'
```
{: .nolineno .noheader }

### readlines()

El método `readlines()` lee todas las líneas del archivo y las devuelve como una lista de cadenas, donde cada línea es un elemento de la lista.

```py
>>> manejador = "amigos.txt"
>>> manejador.readlines()
['Marco\n', 'Luis\n', 'Gabriel\n', 'Alejandro']
```
{: .nolineno .noheader }

---

## Escritura de un archivo

Para escribir texto en un archivo hay que abrir el archivo en **modo escritura**. Para ello utilizamos el *argumento adicional* en la función `open()` que se indica en la siguiente operación:

```python
manejador = open('amigos.txt', 'w')
```
{: .nolineno }

### write()

Luego usaremos el método `write()` del manejador para escribir en el archivo anterior:

```python
manejador = open('amigos.txt', 'w')
manejador.write("Juan")
```
{: .nolineno .noheader }

Si revisamos el archivo `amigos.txt` nos encontraremos con la sorpresa de que se sobreescribio el contenido:

```
Juan
```
{: file='amigos.txt' }

Esto sucede porque el segundo argumento `'w'` se refiere al modo de **solo escritura**, por lo que los datos existentes en el archivo de modifican y sobrescriben y si el archivo aún no existe, se crea uno nuevo. Por otro lado no podemos leer el archivo usando el método `read()` si quisieramos leer el archivo debemos usar `'w+'` para cambiar al modo de **escritura y lectura**.

### Escribir al final de un archivo

Tenemos entonces ahora el modo de **solo agregar** (*append*) `'a'` que nos permite abrir el archivo para escritura y de la misma forma que `'w'` si el archivo aún no existe, se crea uno nuevo. La diferencia es que en este modo el cursor del manejador se establece al final del archivo y así los datos recíen escritos se agregarán al final, manteniendo los datos escritos anteriormente:

```python
manejador = open('amigos.txt', 'a')

manejador.write("\nJuan") # '\n' es para generar un salto de línea 
```
{: .nolineno }

Al igual que en el caso anterior, si queremos además leer el archivo debemos cambiar al modificador `'a+'`.

### writelines()

El método `writelines()` nos permite escribir múltiples líneas a la vez. Ejemplo:


```py
>>> lineas = ['Primera línea\n', 'Segunda línea\n', 'Tercera línea\n']
>>> with open('archivo.txt', 'w') as archivo:
...     archivo.writelines(lineas)
```
{: .nolineno .noheader }

---


## Propiedades del objeto file

Además de los diferentes métodos que podemos acceder desde el **objeto File**, también podemos acceder a diferentes propiedades para conocer más sobre el objeto que estamos utilizando.

Se pueden acceder a las siguientes **propiedades**:

- `closed`: retorna **True** si el archivo se ha cerrado, en caso contrario será **False**.
- `mode`: retorna el modo en el que fue abierto el archivo.
- `name`: retorna el nombre del archivo.
- `encoding`: retorna la codificación de caracteres del archivo.


{:class='fs-5'}
Podemos ver un ejemplo

```py
manejador = open("amigos.txt", "a+")
content = manejador.read()
nombre = manejador.name # 'amigos.txt'
modo = manejador.mode # a+
encoding = manejador.encoding # cp1252
manejador.close()
manejador.closed # True
```
{: .nolineno .noheader }


---

## **Utilizando la estructura with**

La **estructura with** es una estructura de control, Python define a la estructura `with` como **un administrador de contexto** (*context manager*).

{:class='fs-5'}
Un ejemplo sería:

```py
with open("ejemplo.txt", "r") as archivo:
  content = archivo.read()
```
{:file='demos/uso_with.py'}

> Utilizar esta estructura es que nos cerrará automáticamente el objeto sin necesidad de tener que llamar explícitamente al método `close()` para cerrarlo manualmente.
{: .prompt-info }

---

## **Manejando excepciones usando with**

> Este apartado requiere haber estudiado sobre **Menejo de excepciones**
{: .prompt-info }

El uso de `with` resuelve problemas y puede lidiar de mejor manera con **objetos** que utilizan **recursos** externos. Es una excelente combinación el uso de `with` con el manejo de excepciones con las cláusulas `try` `except`.

Un ejemplo muy típico es intentar abrir un archivo, pero capturar una posible excepción. 

{:class='fs-5'}
Veamos el ejemplo

```py
# Se intenta abrir un archivo y se captura una posible excepción
try:
  with open('archivo.txt') as file:
    read_data = file.read()
    print(read_data)
except:
  # Se entra aquí si no pudo ser abierto
  print('No se pudo abrir')
```
{: .nolineno }

---

## **Consideraciones adicionales**

### **Manejo de excepciones**

Siempre es buena práctica manejar posibles excepciones cuando se trabaja con archivos. Puedes usar `try` y `except` para capturar errores como `FileNotFoundError` o `IOError`.

### **Codificación de archivos**

Cuando trabajas con archivos de texto, es importante tener en cuenta la codificación de los datos. Python usa por defecto la codificación **UTF-8**, pero si el archivo está en otro formato, como **ISO-8859-1** (que abarca idiomas de Europa occidental) o **ASCII** (que solo abarcaba caracteres del inglés), debemos especificar la codificación al abrir el archivo:

```py
with open("archivo.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
    print(contenido)
```
{: .nolineno }

### **Verificación de la existencia del archivo**

Antes de intentar abrir un archivo, especialmente si estás trabajando con archivos que podrían no existir, es recomendable verificar si el archivo existe primero. Esto evita posibles excepciones, como un `FileNotFoundError`:

```py
import os

archivo = "archivo.txt"

if os.path.exists(archivo): # Verificación con os.path:
    with open(archivo, "r") as f:
        contenido = f.read()
        print(contenido)
else:
    print("El archivo no existe.")
```
{: .nolineno }

> Esto también puede ser útil cuando estás realizando operaciones de escritura y no deseas sobrescribir un archivo accidentalmente.
{: .prompt-tip }

### **Permisos de Archivos**

En sistemas operativos como **Linux** o **MacOS**, los archivos pueden tener permisos restrictivos. Por eso debemos estar seguros si ese archivo tiene los permisos adecuados para leer o escribir en él:

```py
import os

archivo = "archivo.txt"

if os.access(archivo, os.R_OK):  # Verifica si se puede leer
    with open(archivo, "r") as f:
        contenido = f.read()
        print(contenido)
else:
    print("No tienes permiso para leer este archivo.")
```
{: .nolineno }