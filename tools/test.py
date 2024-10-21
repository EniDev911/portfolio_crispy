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
