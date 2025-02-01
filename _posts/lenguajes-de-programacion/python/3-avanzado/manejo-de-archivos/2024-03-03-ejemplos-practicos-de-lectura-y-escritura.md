---
title: Ejemplos prácticos de lectura y escritura de archivos
author: enidev911
categories: [Python, Manejo de Archivos en Python]
tags: [trabajar con archivos]
---

## 1. Leer el Contenido de un Archivo

```python
# Leer todo el contenido de un archivo
with open('ejemplo.txt', 'r') as archivo:
    contenido = archivo.read()
    print(contenido)
```

**Explicación:**
- `open('ejemplo.txt', 'r')`: Abre el archivo `ejemplo.txt` en modo de lectura (`'r'`).
- `archivo.read()`: Lee todo el contenido del archivo como una sola cadena de texto.
- `print(contenido)`: Imprime el contenido del archivo en la consola.

## 2. Leer Línea por Línea

```python
# Leer un archivo línea por línea
with open('ejemplo.txt', 'r') as archivo:
    for linea in archivo:
        print(linea.strip())  # .strip() para eliminar caracteres de nueva línea
```

**Explicación:**
- Itera sobre el objeto archivo, que lee una línea a la vez.
- `linea.strip()`: Elimina los caracteres de nueva línea y otros espacios en blanco al principio y al final de la línea.

## 3. Escribir en un Archivo (Sobrescribir)

```python
# Escribir en un archivo, sobrescribiendo el contenido existente
with open('ejemplo.txt', 'w') as archivo:
    archivo.write('Este es un nuevo contenido.\n')
    archivo.write('Cada llamada a write() añade una nueva línea.')
```

**Explicación:**
- `open('ejemplo.txt', 'w')`: Abre el archivo en modo de escritura (`'w'`), lo que sobrescribe cualquier contenido existente.
- `archivo.write()`: Escribe texto en el archivo. Cada llamada a `write()` añade el texto al archivo.

## 4. Añadir Texto a un Archivo Existente

```python
# Añadir texto a un archivo sin sobrescribir el contenido existente
with open('ejemplo.txt', 'a') as archivo:
    archivo.write('\nAñadiendo una nueva línea al final del archivo.')
```

**Explicación:**
- `open('ejemplo.txt', 'a')`: Abre el archivo en modo de añadir (`'a'`), lo que agrega contenido al final del archivo sin eliminar el contenido existente.

## 5. Leer Archivos Binarios

```python
# Leer un archivo binario
with open('imagen.png', 'rb') as archivo:
    contenido = archivo.read()
    print(f'El archivo tiene {len(contenido)} bytes.')
```

**Explicación:**
- `open('imagen.png', 'rb')`: Abre el archivo en modo binario (`'rb'`) para leer datos binarios.
- `archivo.read()`: Lee el archivo binario completo en una cadena de bytes.
- `len(contenido)`: Imprime el tamaño del archivo en bytes.

## 6. Escribir Datos Binarios

```python
# Escribir datos binarios en un archivo
data = b'\x00\x01\x02\x03\x04\x05'  # Datos binarios de ejemplo

with open('archivo_binario.bin', 'wb') as archivo:
    archivo.write(data)
```

**Explicación:**
- `open('archivo_binario.bin', 'wb')`: Abre el archivo en modo binario para escritura (`'wb'`).
- `archivo.write(data)`: Escribe datos binarios en el archivo.

## 7. Leer un Archivo en Fragmentos

```python
# Leer un archivo en fragmentos de tamaño fijo
fragmento_tamano = 64  # Tamaño del fragmento en bytes

with open('archivo_grande.txt', 'rb') as archivo:
    while True:
        fragmento = archivo.read(fragmento_tamano)
        if not fragmento:
            break
        print(fragmento.decode('utf-8'))  # Decodifica bytes a texto si es necesario
```

**Explicación:**
- Lee el archivo en fragmentos del tamaño especificado.
- El bucle `while` continúa leyendo fragmentos hasta que no haya más datos.
- `fragmento.decode('utf-8')`: Decodifica bytes a texto si el archivo es de texto.

## 8. Leer y Escribir en un Archivo con Codificación Específica

```python
# Leer y escribir en un archivo con una codificación específica
with open('archivo_utf8.txt', 'w', encoding='utf-8') as archivo:
    archivo.write('Texto en UTF-8\n')
    
with open('archivo_utf8.txt', 'r', encoding='utf-8') as archivo:
    contenido = archivo.read()
    print(contenido)
```

**Explicación:**
- `encoding='utf-8'`: Especifica la codificación al abrir el archivo para asegurar que los caracteres se manejen correctamente.
- `archivo.write()`: Escribe texto en el archivo utilizando la codificación especificada.
- `archivo.read()`: Lee el archivo y maneja la codificación correctamente.

Estos ejemplos cubren una variedad de casos comunes al trabajar con archivos en Python, desde la lectura y escritura básica hasta el manejo de archivos binarios y codificaciones específicas.
