---
title: Crear ventanas secundarias con Toplevel
author: enidev911
categories: [Python, Tkinter]
---


En Tkinter, puedes crear nuevas ventanas adicionales a la ventana principal utilizando la clase `Toplevel`. La clase `Toplevel` permite crear ventanas secundarias que pueden ser independientes de la ventana principal y pueden contener sus propios widgets.

## Crear una Ventana Secundaria con Toplevel

En Tkinter, puedes crear nuevas ventanas adicionales a la ventana principal utilizando la clase `Toplevel`. La clase `Toplevel` permite crear ventanas secundarias que pueden ser independientes de la ventana principal y pueden contener sus propios widgets.

### Crear una Ventana Secundaria con `Toplevel`

Para crear y mostrar una ventana secundaria en Tkinter debemos realizar los siguientes pasos:

#### 1. Importar Tkinter

Importamos el módulo Tkinter.

```python
import tkinter as tk
```

#### 2. Crear la Ventana Principal

Inicializar la ventana principal con la clase `Tk`.

```python
root = tk.Tk()
root.title("Ventana Principal")
root.geometry("300x200")
```
{: .nolineno }

#### 3. Definir la Función para Abrir una Ventana Secundaria

Crea una función que será llamada para abrir la nueva ventana secundaria. En esta función, instanciarás la clase `Toplevel`.

```python
def open_new_window():
    new_window = tk.Toplevel(root)
    new_window.title("Ventana Secundaria")
    new_window.geometry("200x150")
    
    # Añadir contenido a la ventana secundaria
    label = tk.Label(new_window, text="¡Esta es una nueva ventana!")
    label.pack(pady=20)
    
    button = tk.Button(new_window, text="Cerrar", command=new_window.destroy)
    button.pack(pady=10)
```
{: .nolineno }


#### 4. Crear un Botón en la Ventana Principal para Abrir la Ventana Secundaria

Añadimos un botón en la ventana principal que llame a la función `open_new_window` cuando se haga clic.

```python
open_button = tk.Button(root, text="Abrir Ventana Secundaria", command=open_new_window)
open_button.pack(pady=50)
```
{: .nolineno }

#### 5. Ejecutar el Bucle Principal

Finalmente, inicia el bucle de eventos para mostrar la ventana principal y manejar los eventos de las ventanas.

```python
root.mainloop()
```
{: .nolineno }

### Código Completo

Aquí el código completo que crea una ventana principal con un botón para abrir una ventana secundaria.

```python
import tkinter as tk

def open_new_window():
    new_window = tk.Toplevel(root)
    new_window.title("Ventana Secundaria")
    new_window.geometry("200x150")
    
    # Añadir contenido a la ventana secundaria
    label = tk.Label(new_window, text="¡Esta es una nueva ventana!")
    label.pack(pady=20)
    
    button = tk.Button(new_window, text="Cerrar", command=new_window.destroy)
    button.pack(pady=10)

# Crear la ventana principal
root = tk.Tk()
root.title("Ventana Principal")
root.geometry("300x200")

# Crear un botón para abrir la ventana secundaria
open_button = tk.Button(root, text="Abrir Ventana Secundaria", command=open_new_window)
open_button.pack(pady=50)

# Ejecutar el bucle principal
root.mainloop()
```
{: .nolineno }

### Consideraciones Adicionales

1. **Interacción entre Ventanas**: Las ventanas secundarias creadas con `Toplevel` son independientes de la ventana principal. Puedes interactuar entre ventanas usando referencias a objetos y métodos compartidos.

2. **Manejo de Cierre**: El botón en la ventana secundaria usa `new_window.destroy` para cerrarla. Puedes manejar el evento de cierre también mediante el método `protocol()` si necesitas realizar alguna acción especial al cerrar la ventana.

3. **Estilos y Diseño**: Puedes aplicar estilos y diseño similares a los que usarías en la ventana principal, agregando widgets y configuraciones adicionales a las ventanas secundarias.

Con estos conceptos, puedes crear y gestionar múltiples ventanas en tus aplicaciones Tkinter, permitiendo una experiencia de usuario más rica y flexible.
