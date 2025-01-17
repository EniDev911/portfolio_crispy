---
title: Option Menu Widget
author: enidev911
categories: [Python, Tkinter]
---

# Menu de opciones en Python Tkinter

## Consideraciones

- __OptionMenu__ se utiliza para crear un menú desplegable en la aplicación.
- Consume menos espacio y muestra múltiples opciones al usuario. Los usuarios pueden seleccionar solo un elemento de la lista de elementos.
- El único incoveniente de OptionMenu es que no puede manejar datos de gran tamaño. Como otros widgets de menú desplegable está limitado al tamaño de la pantalla. Entonces, en el caso de datos grandes, se utiliza widgets más adecuados como los **ListBox**, ya que proporciona una función de desplazamiento.

## Ejemplo

{% tabs optionmenu %}

{% tab optionmenu main.py %}
```py
import tkinter as tk

root = tk.Tk()
root.geometry("300x500")

optionList = [
  "Aries",
  "Taurus",
  "Geminis",
  "Cancer"
]
variable = tk.StringVar(root)
variable.set("Selecciona tu signo")

opt = tk.OptionMenu(root, variable, *optionList)
opt.pack()

def print_selected():
    print("Seleccionaste: {}".format(variable.get()))

submit_button = tk.Button(root, text='Imprimir selección', command=print_selected) 
submit_button.pack() 
root.mainloop()
```
{% endtab %}

{% tab optionmenu resultado %}
![option menu](optionmenu1.png)
{% endtab %}
{% endtabs %}
