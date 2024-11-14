---
title: Tkinter Messagebox
author: enidev911
categories: [Python, Tkinter]
tags: [Widgets]
---

## ¿Qué es messagebox?

El `messagebox` en Tkinter es un módulo que proporciona una serie de funciones para mostrar cuadros de mensaje simples. Estos cuadros de mensaje pueden contener texto, botones y, en algunos casos, iconos para indicar el tipo de mensaje (por ejemplo, información, advertencia o error).

## Importar el Módulo messagebox

Antes de comenzar a usar `messagebox`, necesitas importarlo desde Tkinter. Aquí tienes cómo hacerlo:

```python
from tkinter import Tk, messagebox
```
{: .nolineno }

## Crear una Ventana de Aplicación Básica

Para mostrar un `messagebox`, primero debes crear una ventana principal de Tkinter. Aquí tienes un ejemplo básico:

```python
import tkinter as tk
from tkinter import messagebox

# Crear la ventana principal
root = tk.Tk()
root.title("Ejemplo de Messagebox")
root.geometry("300x200")

# Función para mostrar un mensaje de alerta
def mostrar_alerta():
    messagebox.showinfo("Información", "Este es un mensaje de información.")

# Crear un botón que llamará a la función mostrar_alerta
boton = tk.Button(root, text="Mostrar Alerta", command=mostrar_alerta)
boton.pack(pady=20)

# Ejecutar el bucle principal de eventos
root.mainloop()
```

En este ejemplo:
- Se crea una ventana principal con el título "Ejemplo de Messagebox" y un tamaño de 300x200 píxeles.
- Se define una función `mostrar_alerta` que utiliza `messagebox.showinfo` para mostrar un cuadro de mensaje de información.
- Se crea un botón que llama a esta función cuando se hace clic.

## Tipos de Mensajes con messagebox

Tkinter ofrece varias funciones para mostrar diferentes tipos de cuadros de mensaje. Aquí se presentan los más comunes:

### 1. Mensaje de Información

```python
messagebox.showinfo("Título del Mensaje", "Este es un mensaje de información.")
```

- **Propósito**: Mostrar información general.
- **Botones**: OK

![img](tkinter/messagebox/showinfo.png){:style="height: 160px"}

### 2. Mensaje de Advertencia

```python
messagebox.showwarning("Título de Advertencia", "Este es un mensaje de advertencia.")
```

- **Propósito**: Advertir al usuario sobre una acción o situación que podría ser problemática.
- **Botones**: OK

![img]({{ 'showwarning.png' }}){:style="height: 190px"}

### 3. Mensaje de Error

```python
messagebox.showerror("Título de Error", "Este es un mensaje de error.")
```

- **Propósito**: Informar al usuario sobre un error o problema.
- **Botones**: OK

![img]({{ 'showerror.png' }}){:style="height: 190px"}

### 4. Mensaje de Confirmación

```python
respuesta = messagebox.askyesno("Confirmación", "¿Estás seguro de que deseas continuar?")
if respuesta:
    print("El usuario seleccionó Sí.")
else:
    print("El usuario seleccionó No.")
```

- **Propósito**: Solicitar una respuesta del usuario para confirmar una acción.
- **Botones**: Sí, No
- **Valor de Retorno**: `True` o `False`, según la elección del usuario.

#### **5. Mensaje de Pregunta**


```python
respuesta = messagebox.askquestion("Pregunta", "¿Deseas guardar los cambios?")
if respuesta == 'yes':
    print("El usuario seleccionó Sí.")
else:
    print("El usuario seleccionó No.")
```

- **Propósito**: Hacer una pregunta al usuario y obtener una respuesta.
- **Botones**: Sí, No
- **Valor de Retorno**: `'yes'` o `'no'`

![img]({{ 'askyesno.png' }}){:style="height: 190px"}

### Uso de Iconos en messagebox

Los cuadros de mensaje también pueden incluir iconos para proporcionar contexto visual:

- **Icono de Información**: `messagebox.showinfo()`
- **Icono de Advertencia**: `messagebox.showwarning()`
- **Icono de Error**: `messagebox.showerror()`
- **Icono de Pregunta**: `messagebox.askquestion()`, `messagebox.askyesno()`

Cada uno de estos métodos incluye un icono específico que ayuda a transmitir el tipo de mensaje que se está mostrando.

### Conclusión

El módulo `messagebox` de Tkinter es una herramienta poderosa para mejorar la interacción con los usuarios en las aplicaciones. Ya sea que necesitemos mostrar mensajes de información, advertencias, errores, o solicitar confirmaciones, `messagebox` proporciona una forma fácil y efectiva de hacerlo.
 
