---
title: "Tkinter: Manejo de Archivos con Filedialog"
author: enidev911
image: posters/python-tkinter-filedialog.png
categories: [Python, Tkinter]
---

En la mayoría de las aplicaciones gráficas, a menudo necesitamos que el usuario seleccionen o guarden archivos desde o hacia su sistema de archivos. Esto se puede hacer fácilmente en Tkinter utilizando el módulo `filedialog`. Este módulo proporciona una forma sencilla de mostrar cuadros de diálogo para abrir, guardar o seleccionar archivos y directorios.

## Funciones Principales del Módulo Filedialog

### Abrir un archivo: askopenfilename

La función `askopenfilename()`  abre un cuadro de diálogo para seleccionar un archivo y devuelve la ruta del archivo, aceptará dos parámetros `title` y `filetypes`:

```py
import tkinter as tk
from tkinter import filedialog

def upload_file():
  file_path = filedialog.askopenfilename(
    title="Selecciona un archivo", 
    filetypes=[("Text File", "*.txt"), ("All files", "*.*")])
  print("Seleccionaste el archivo:", file_path)

root = tk.Tk()
open_bottom = tk.Button(root, text="Subir archivo", command=upload_file)
open_bottom.pack(pady=20)
root.mainloop()
```
{: .nolineno }

{% capture open_file %}
<style>
      #fileInput {
        display: none; /* Ocultamos el input original */
    }
</style>
  <label id="fileLabel" for="fileInput" class="btn btn-secondary">Subir archivo</label>
  <input type="file" id="fileInput">
  <div id="fileName"></div>
  <script>
          // Obtener los elementos HTML
      const fileInput = document.getElementById('fileInput');
      const fileNameDisplay = document.getElementById('fileName');
 
      // Cuando el usuario selecciona un archivo
      fileInput.addEventListener('change', function(event) {
          const file = event.target.files[0]; // Obtener el archivo seleccionado
          if (file) {
              // Mostrar el nombre del archivo seleccionado
              fileNameDisplay.textContent = `Seleccionaste el archivo: ${file.name}`;
          } else {
              // Si no se seleccionó ningún archivo
              fileNameDisplay.textContent = 'No seleccionaste ningún archivo.';
          }
      });
  </script>
{% endcapture %}

{% include window-wrapper.html content_html=open_file %}

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
