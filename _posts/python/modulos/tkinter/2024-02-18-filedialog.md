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
  <button class="btn btn-secondary" id="openFileBtn">
    Subir archivo
  </button>
  <div id="fileName"></div>
   <script>
      // Crear un input type="file" de forma programática (sin mostrarlo)
      const inputFile = document.createElement('input');
      inputFile.type = 'file';
      inputFile.style.display = 'none'; // Ocultar el input

      // Agregar un evento para cuando se seleccione un archivo
      inputFile.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
              document.getElementById('fileName').textContent = `Archivo seleccionado: ${file.name}`;
          } else {
              document.getElementById('fileName').textContent = 'No se seleccionó ningún archivo.';
          }
      });
       // Agregar un evento para cuando se seleccione un archivo
        inputFile.addEventListener('change', function(event) {
            const file = event.target.files[0]; // Obtener el primer archivo seleccionado
            if (file) {
                // Si se selecciona un archivo, mostramos su nombre
                document.getElementById('fileName').textContent = `Seleccionaste el archivo: ${file.name}`;
            } else {
                // Si no se selecciona nada, mostramos este mensaje
                document.getElementById('fileName').textContent = 'No se seleccionó ningún archivo.';
            }
        });
      // Abrir el explorador de archivos al hacer clic en el botón
      document.getElementById('openFileBtn').addEventListener('click', function() {
          const file = inputFile.click();  // Simula el clic en el input type="file"
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
