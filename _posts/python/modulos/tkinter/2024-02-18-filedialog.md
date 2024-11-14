---
title: Manejo de Filedialog en Tkinter
author: enidev911
categories: [Python, Tkinter]
---

## Abrir archivos en Tkinter

Para abrir el archivo en Tkinter, un método que se llama `askopenfilename` y aceptará dos parámetros `title` y `filetypes`

## Ejemplo

```py
import tkinter as tk
from tkinter import filedialog

def upload_file():
  file_path = filedialog.askopenfilename(
    title="Selecciona un archivo", 
    filetypes=[("Text File", "*.txt"), ("All files", "*.*")])
  print("Seleccionaster el archivo:", file_path)

root = tk.Tk()
open_bottom = tk.Button(root, text="Subir archivo", command=upload_file)
open_bottom.pack(pady=20)
root.mainloop()
```
{: .nolineno }

---

## Guardar archivos con Tkinter

Para guardar el archivo existe una función llamada `asksaveasfilename` en Python. Esta función acepta tres argumentos, que son `title`, `defaultextension` y `filetypes`.

```py
import tkinter as tk
from tkinter import filedialog

def save_file():
  file_path = filedialog.asksaveasfilename(
      title="Guardar como",
      defaultextension=".txt",
      filetypes=[("Text files", ".txt"), ("All files", "*.*")])

  if file_path:
    content = "¡Hola Mundo!"

    try:
      with open(file_path, 'w') as file:
        file.write(content)
      print("Archivo guardado exitosamente en :", file_path)
    except Exception as e:
      print("Error guardando el archivo: ", e)

root = tk.Tk()

save_button = tk.Button(root, text="Guardar Archivo", command=save_file)
save_button.pack(pady=20)

root.mainloop()
```
{: .nolineno }
