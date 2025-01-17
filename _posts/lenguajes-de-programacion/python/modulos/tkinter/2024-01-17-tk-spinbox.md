---
title: El Widget Spinbox
author: enidev911
categories: [Python, Tkinter]
---

Este widget es una variante del widget [Entry](#) estándar, y se puede utilizar para seleccionar un número fijo de valores

```py
w = Spinbox(master, options, ...)
```
{: .nolineno }

### Spinbox con texto y opciones predefinidas


Puedes también crear un Spinbox que permita elegir entre un conjunto de valores específicos. Por ejemplo, una lista de opciones:

```python
import tkinter as tk

root = tk.Tk()

spinbox = tk.Spinbox(root, values=("Rojo", "Verde", "Azul"))
spinbox.pack()

root.mainloop()
```
{: .nolineno }

### Obtener el valor seleccionado

Puedes obtener el valor que el usuario ha seleccionado en el Spinbox con el método `.get()`:

```py
import tkinter as tk

def mostrar_valor():
    valor = spinbox.get()
    print(f"Valor seleccionado: {valor}")

root = tk.Tk()

# Crear un Spinbox
spinbox = tk.Spinbox(root, from_=0, to=100, increment=1)
spinbox.pack()

# Botón para obtener el valor
btn = tk.Button(root, text="Mostrar valor", command=mostrar_valor)
btn.pack()

root.mainloop()
```
{: .nolineno }

