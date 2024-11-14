---
title: "Tkinter: Clase Tk"
author: enidev911
categories: [Python, Tkinter]
image: posters/python-tkinter.png
---

Tkinter es la biblioteca estándar de Python para la creación de interfaces gráficas de usuario (GUI). Proporciona un conjunto de herramientas que permiten a los desarrolladores construir aplicaciones con ventanas, botones, cuadros de texto y otros elementos interactivos. La clase `Tk` es la piedra angular de Tkinter, ya que representa la ventana principal de la aplicación. En este artículo, exploraremos la clase `Tk`, su propósito, sus métodos y cómo utilizarla para crear aplicaciones GUI en Python.

### ¿Qué es la Clase Tk?

La clase `Tk` es la clase principal en Tkinter y se utiliza para crear la ventana principal de la aplicación. Cuando se instancia un objeto de la clase `Tk`, se crea una ventana que puede contener otros widgets (como botones, etiquetas, cuadros de texto, etc.). Esta ventana actúa como el contenedor principal para todos los demás elementos gráficos de la interfaz.

### Creación de una Ventana con Tk

Para crear una ventana con `Tk`, debes seguir estos pasos básicos:

1. **Importar Tkinter**: Primero, necesitas importar el módulo Tkinter.
2. **Instanciar la Clase `Tk`**: Crear una instancia de la clase `Tk` para representar la ventana principal.
3. **Configurar la Ventana**: Puedes establecer propiedades como el título, tamaño y otras características de la ventana.
4. **Agregar Widgets**: Añadir widgets a la ventana, como botones, etiquetas, y cuadros de texto.
5. **Ejecutar el Bucle Principal**: Llamar al método `mainloop()` de la instancia de `Tk` para iniciar el bucle de eventos de la aplicación.

Aquí un ejemplo básico de cómo se usa la clase `Tk`:

```python
import tkinter as tk

# Crear una instancia de la clase Tk
ventana = tk.Tk()

# Configurar la ventana
ventana.title("Mi Aplicación")
ventana.geometry("300x200")

# Ejecutar el bucle principal
ventana.mainloop()
```
{: .nolineno }

Si ejecutamos el script anterior, obtendríamos una ventana gráfica como la siguiente:


{% include window-wrapper.html title="Mi Aplicación" width="300px" %}

### Métodos y Atributos Clave de la Clase Tk

#### Método title

El método `title()` establece el título de la ventana. Este título aparece en la barra de título de la ventana.

```python
ventana.title("Mi Aplicación")
```
{: .nolineno }

Sería lo que vemos a continuación:

{% capture title %}
<div class="text-center">
  <i class="fa-solid fa-arrow-up fs-2"></i>
</div>
{% endcapture %}

{% include window-wrapper.html title="Mi Aplicación" content_html=title width="300px" %}

#### Método geometry

El método `geometry()` define el tamaño de la ventana en formato `ancho`x`alto`" (por ejemplo, "300x200").

```python
ventana.geometry("300x200")
```
{: .nolineno }

Sería lo que vemos a continuación:

{% capture content %}
  <div class="h-100">
    <div class="width text-center">
      <i class="fa-solid fa-arrows-left-right fs-3"></i><br>
      300
    </div>
    <div class="height  d-flex align-items-center">
      <i class="fa-solid fa-arrows-up-down  pe-2 fs-3"></i>
      200
    </div>
  </div>
{% endcapture %}

{% include window-wrapper.html title="Mi Aplicación" width="300px" content_html=content %}

#### Método state

Este método `state()` se utiliza para gestionar el estado de ciertos widgets. Igual sirve para maximizar la ventana si le pasamos el valor `zommed`:

```python
ventana.state("zoomed")
```
{: .nolineno }

Veríamos la ventana maximizada como a continuación:

{% include window-wrapper.html title="Mi Aplicación"  %}

#### Método mainloop

El método `mainloop()` inicia el bucle de eventos de Tkinter. Este método debe ser llamado al final del programa para que la ventana permanezca abierta y responda a las interacciones del usuario.

```python
ventana.mainloop()
```
{: .nolineno }

#### Método quit

El método `quit()` termina el bucle de eventos y cierra la aplicación:

```python
ventana.quit()
```
{: .nolineno }

#### Método destroy

El método `destroy()` cierra la ventana y libera los recursos asociados con ella. Es útil cuando necesitas cerrar la ventana de manera programática.

```python
ventana.destroy()
```
{: .nolineno }

### Personalización y Configuración Adicional

Además de los métodos y atributos básicos, la clase `Tk` permite una amplia personalización. Puedes configurar los estilos de la ventana, agregar menús, gestionar eventos y más. Algunas de las personalizaciones más comunes incluyen:

#### Configuración de Iconos

Puedes establecer un icono personalizado para la ventana utilizando el método `iconbitmap()`.

```python
ventana.iconbitmap("icono.ico")
```

#### Ajustes de Ventana

Configura el tamaño mínimo de la ventana y desactiva el redimensionamiento si es necesario.

```python
ventana.minsize(300, 200)
ventana.resizable(False, False)
```

#### Conclusión

La clase `Tk` en Tkinter es esencial para el desarrollo de aplicaciones GUI en Python. Ofrece un punto de partida sencillo pero poderoso para crear ventanas y agregar widgets, permitiendo a los desarrolladores construir interfaces gráficas interactivas. Conociendo los métodos y atributos básicos de la clase `Tk`, puedes comenzar a desarrollar aplicaciones de escritorio y explorar las amplias capacidades que Tkinter ofrece para personalizar y mejorar la experiencia del usuario.
