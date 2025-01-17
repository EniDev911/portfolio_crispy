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
  <script>
    function showFileName(event) {
      const fileNameDisplay = document.getElementById('fileName');
       const file = event.target.files[0];
        if (file) {
          fileNameDisplay.textContent = `Seleccionaste el archivo: ${file.name}`;
        } else {
          fileNameDisplay.textContent = 'No seleccionaste ningún archivo.';
        }
      }
  </script>
  <label id="fileLabel" for="fileInput" class="btn btn-secondary">Subir archivo</label>
  <input type="file" id="fileInput" onchange="{showFileName(event)}">
  <div id="fileName"></div>
{% endcapture %}

{% include window-wrapper.html content_html=open_file %}

---

### Guardar un archivo: asksavefilename

Para guardar un archivo, existe una función llamada `asksaveasfilename()`. Esta función acepta tres argumentos, que son `title`, `defaultextension` y `filetypes`.

```py
import tkinter as tk
from tkinter import filedialog

def save_file():
  file_path = filedialog.asksaveasfilename(
      title="Guardar como",
      defaultextension=".txt",
      filetypes=[("Text files", ".txt"), ("All files", "*.*")]
  )

  if file_path:
    try:
      with open(file_path, 'w') as file:
        file.write("¡Hola Mundo!")
      print("Archivo guardado exitosamente en :", file_path)
    except Exception as e:
      print("Error guardando el archivo: ", e)

root = tk.Tk()
save_button = tk.Button(root, text="Guardar Archivo", command=save_file)
save_button.pack(pady=20)
root.mainloop()
```
{: .nolineno }

{% capture save_file %}
  <script>
    function downloadFile(event) {
        const fileContent = "¡Hola Mundo!!";
        // Crear un Blob (objeto que representa los datos del archivo)
        const blob = new Blob([fileContent], { type: 'text/plain' });
        // Crear un enlace (a) para descargar el archivo
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'mi_archivo.txt'; // Nombre del archivo a descargar
        // Simular un clic en el enlace para iniciar la descarga
        link.click();
      }
  </script>
  <button class="btn btn-secondary" onclick="{downloadFile(event)}">Guardar Archivo</button>
{% endcapture %}
{% include window-wrapper.html content_html=save_file %}

---

### Seleccionar un directorio: askopendirectory

La función `askopendirectory()` abre un cuadro de diálogo que permite seleccionar un directorio, y devuelve la ruta del directorio elegido:


```py
import tkinter as tk
from tkinter import filedialog

def upload_folder():
  directory = filedialog.askopenfilename(title="Selecciona directorio")
  if directory:
    print("Directorio seleccionado:", directory)

root = tk.Tk()
open_bottom = tk.Button(root, text="Subir directorio", command=upload_folder)
open_bottom.pack(pady=20)
root.mainloop()
```
{: .nolineno }

{% capture open_folder %}
<style>
      #fInput {
        display: none; /* Ocultamos el input original */
    }
</style>
  <script>
    function showFolderName(event) {
      const output = document.getElementById('output');
       const folder = event.target.files[0];
        if (folder) {
            const firstFilePath = folder.webkitRelativePath;
            const folderName = firstFilePath.split('/')[0];
          output.textContent = `Directorio seleccionado: ${folderName}`;
        } else {
          output.textContent = 'No seleccionaste directorio.';
        }
      }
  </script>
  <label for="fInput" class="btn btn-secondary">Subir directorio</label>
  <input type="file" id="fInput" webkitdirectory directory onchange="{showFolderName(event)}">
  <div id="output"></div>
{% endcapture %}

{% include window-wrapper.html content_html=open_folder %}
