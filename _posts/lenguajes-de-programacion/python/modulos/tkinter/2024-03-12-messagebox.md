---
title: Tkinter Messagebox
author: enidev911
categories: [Python, Tkinter]
image: posters/python-tkinter-messagebox.png
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
    messagebox.showinfo(
      "Información",
      "Este es un mensaje de información."
    )

# Crear un botón que llamará a la función mostrar_alerta
boton = tk.Button(root, text="Mostrar Alerta", command=mostrar_alerta)
boton.pack(pady=20)

# Ejecutar el bucle principal de eventos
root.mainloop()
```
{: .nolineno }

En este ejemplo:
- Se crea una ventana principal con el título "Ejemplo de Messagebox" y un tamaño de 300x200 píxeles.
- Se define una función `mostrar_alerta` que utiliza `messagebox.showinfo` para mostrar un cuadro de mensaje de información.
- Se crea un botón que llama a esta función cuando se hace clic.

Si ejecutamos el script anterior, obtendríamos una ventana gráfica como la siguiente:

{% capture show_message %}
  <button class="btn btn-secondary" data-bs-target="#exampleModal" data-bs-toggle="modal">
    Mostrar Alerta
  </button>
  <div id="exampleModal" class="modal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-secondary p-1 position-relative">
      <div class="modal-header bg-secondary top-0 m-0 px-1 py-0">
        <h2 class="modal-title p-0 m-0">Información</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-light text-secondary pt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="21" fill="#2196f3" />
          <path fill="#fff" d="M22 22h4v11h-4z" />
          <circle cx="24" cy="16.5" r="2.5" fill="#fff" />
        </svg>
        Este es un mensaje de información
        <div class="text-end">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include window-wrapper.html title="Ejemplo de Messagebox" content_html=show_message %}

## Tipos de Mensajes con messagebox

Tkinter ofrece varias funciones para mostrar diferentes tipos de cuadros de mensaje. Aquí se presentan los más comunes:

### Mensaje de Información

```python
messagebox.showinfo("Título del Mensaje", "Este es un mensaje de información.")
```
{: .nolineno }

- **Propósito**: Mostrar información general.
- **Botones**: OK

![img](tkinter/messagebox/showinfo.png){:style="height: 160px"}

### Mensaje de Advertencia

```python
messagebox.showwarning("Título de Advertencia", "Este es un mensaje de advertencia.")
```
{: .nolineno }

- **Propósito**: Advertir al usuario sobre una acción o situación que podría ser problemática.
- **Botones**: OK

![img](tkinter/messagebox/showwarning.png){:style="height: 160px"}

### Mensaje de Error

```python
messagebox.showerror("Título de Error", "Este es un mensaje de error.")
```
{: .nolineno }

- **Propósito**: Informar al usuario sobre un error o problema.
- **Botones**: OK

![img](tkinter/messagebox/showerror.png){:style="height: 160px"}

### Mensaje de Confirmación

```python
respuesta = messagebox.askyesno(
  "Confirmación",
  "¿Estás seguro de que deseas continuar?"
)

if respuesta:
    print("El usuario seleccionó Sí.")
else:
    print("El usuario seleccionó No.")
```
{: .nolineno }

- **Propósito**: Solicitar una respuesta del usuario para confirmar una acción.
- **Botones**: Sí, No
- **Valor de Retorno**: `True` o `False`, según la elección del usuario.

### Mensaje de Pregunta


```python
respuesta = messagebox.askquestion(
  "Pregunta",
  "¿Deseas guardar los cambios?"
)

if respuesta == 'yes':
    print("El usuario seleccionó Sí.")
else:
    print("El usuario seleccionó No.")
```
{: .nolineno }

- **Propósito**: Hacer una pregunta al usuario y obtener una respuesta.
- **Botones**: Sí, No
- **Valor de Retorno**: `'yes'` o `'no'`

![img](tkinter/messagebox/askyesno.png){:style="height: 160px"}

### Uso de Iconos en messagebox

Los cuadros de mensaje también pueden incluir iconos para proporcionar contexto visual:

- **Icono de Información**: `messagebox.showinfo()`
- **Icono de Advertencia**: `messagebox.showwarning()`
- **Icono de Error**: `messagebox.showerror()`
- **Icono de Pregunta**: `messagebox.askquestion()`, `messagebox.askyesno()`

Cada uno de estos métodos incluye un icono específico que ayuda a transmitir el tipo de mensaje que se está mostrando.

### Conclusión

El módulo `messagebox` de Tkinter es una herramienta poderosa para mejorar la interacción con los usuarios en las aplicaciones. Ya sea que necesitemos mostrar mensajes de información, advertencias, errores, o solicitar confirmaciones, `messagebox` proporciona una forma fácil y efectiva de hacerlo.

