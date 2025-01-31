---
title: "Guía: Cómo generar PDFs con ReportLab"
pin: true
categories: ["Python", "Guía de Librerías de Python"]
tags: ["guías", python]
---

Generar PDFs desde Python puede ser muy útil cuando necesitas crear reportes, facturas, recibos o cualquier tipo de documento automático. [**ReportLab**](https://www.reportlab.com/){: target='_blank' } es una poderosa librería que nos permite crear documentos PDF de manera sencilla y flexible.

En este tutorial, vamos a explorar cómo usar ReportLab para crear un archivos PDF de manera sencilla y personalizarlo con texto, imágenes y gráficos.

### **Instalación de ReportLab**

Primero, necesitamos instalar la librería. Podemos hacerlo fácilmente usando el gestor de paquetes `pip`:

```terminal
pip install reportlab
```

### **Crear un PDF básico**

Una vez instalada la librería, el siguiente paso es crear un archivo PDF sencillo. Vamos a empezar con un ejemplo básico donde simplemente añadimos un texto en el PDF.

```py
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# Crear un objeto Canvas para generar el PDF
c = canvas.Canvas("primer_pdf.pdf", pagesize=letter)

# Escribir texto en el PDF
c.drawString(100, 750, "¡Hola, este es un PDF generado con ReportLab!")

# Guardar el archivo PDF
c.save()
```
{: file="ejemplo_basico_reportlab.py"}

Este script, contiene el código para crear un archivo llamado `primer_pdf.pdf` y escribe `¡Hola, este es un PDF generado con ReportLab!` en la posición (100, 750) de la página.

#### **Desglosando el código**


La línea de código:

```python
c = canvas.Canvas("primer_pdf.pdf", pagesize=letter)
```
{: .nolineno }

- **`canvas`**: Este es un módulo de **ReportLab** que permite crear y manipular documentos PDF. Dentro de este módulo, la clase **`Canvas`** es la herramienta principal para dibujar en un PDF.
- **`Canvas`**: Es la clase que crea un lienzo o "canvas" en blanco sobre el cual puedes empezar a dibujar. Se puede pensar en un **Canvas** como una hoja de papel en blanco en la que puedes agregar texto, imágenes, líneas, gráficos, etc.

La clase `Canvas` proporciona métodos para agregar contenido al PDF, como `drawString()` (para texto), `drawImage()` (para imágenes), y muchos otros métodos para personalizar el contenido.

- **`"primer_pdf.pdf"`**: Este es el **nombre del archivo de salida**. Cuando se crea el objeto `Canvas`, se le debe indicar el nombre del archivo PDF que se va a generar. 
    - En este caso, el archivo se llamará `primer_pdf.pdf` y se guardará en el directorio desde donde se ejecuta el script de Python.
    - Si el archivo ya existe, se sobrescribirá; si no existe, ReportLab lo creará automáticamente.

- **`pagesize=letter`**: Es un argumento que define el tamaño de la página en el documento PDF.
    - **`letter`** es una constante que proviene de **`reportlab.lib.pagesizes`** y representa el tamaño estándar de papel en EE. UU. (8.5 x 11 pulgadas).
  
Esto significa que el PDF generado tendrá páginas del tamaño **Letter**, que es el tamaño más común para documentos. Sin embargo, **ReportLab** también soporta otros tamaños de página, como **A4** (típico en muchos países), y puedes personalizar el tamaño si lo necesitas.

Por ejemplo, si quisieras usar **A4**, deberías importar el tamaño desde `pagesizes` y cambiar el argumento:

```python
from reportlab.lib.pagesizes import A4
c = canvas.Canvas("primer_pdf.pdf", pagesize=A4)
```
{: .nolineno }

**Ejemplo básico de flujo:**

1. Se crea el objeto `Canvas` (`c`).
2. Se añaden elementos al PDF (texto, imágenes, etc.) usando métodos del objeto `c`.
3. Se guarda el archivo con el método `save()`, lo cual genera el PDF.

```python
c = canvas.Canvas("primer_pdf.pdf", pagesize=letter)
c.drawString(100, 750, "¡Hola, este es un PDF generado con ReportLab!")
c.save()
```
{: .nolineno }


La línea de código:

```python
c.drawString(100, 750, "¡Hola, este es un PDF generado con ReportLab!")
```
{: .nolineno }

1. **`x` (100)**: Es la **coordenada horizontal** (en píxeles) donde se colocará el texto. En este caso, el texto comenzará a escribirse 100 píxeles a la derecha del borde izquierdo de la página. 
   
2. **`y` (750)**: Es la **coordenada vertical** (en píxeles) donde se ubicará el texto. En la mayoría de las páginas de PDF, la coordenada `y = 0` está en la parte inferior de la página, y a medida que aumentas el valor de `y`, el texto se mueve hacia arriba. En este caso, `y = 750` significa que el texto se posiciona relativamente alto en la página, cerca de la parte superior.

3. **`text` ("¡Hola, este es un PDF generado con ReportLab!")**: Es el texto que deseas escribir en esas coordenadas. En este caso, es simplemente un mensaje que aparecerá en el documento PDF.

#### **Sistema de coordenadas en un PDF**

- **El sistema de coordenadas** en un PDF con ReportLab tiene el origen (0, 0) en la **parte inferior izquierda** de la página. Es decir:
  - La **coordenada `x`** crece hacia la derecha.
  - La **coordenada `y`** crece hacia arriba.

Esto significa que si defines un valor de `x` bajo, el texto aparecerá más a la izquierda; si defines un valor de `x` alto, el texto estará más a la derecha. Similarmente, si pones un valor bajo para `y`, el texto estará más abajo en la página, y si el valor de `y` es alto, el texto estará más arriba.

Si abrimos el archivo, podemos observar claramente que el texto se posiciona en las coordenadas que indicamos:

![ejemplo reportlab](python/reportlab-ejemplo-basico.webp)

### **Añadir imágenes al PDF**

Con ReportLab también es posible añadir imágenes. Para hacerlo, usamos el método `drawImage()`:

```py
from reportlab.pdfgen import canvas

# Crear el Canvas
c = canvas.Canvas("pdf_con_imagen.pdf", pagesize=letter)

# Añadir una imagen (debe ser una ruta válida)
c.drawImage("logo.png", 100, 600, width=200, height=100)

# Escribir texto debajo de la imagen
c.setFont("Helvetica", 12)
c.drawString(100, 590, "Aquí hay un logo en el PDF.")

# Guardar el archivo PDF
c.save()
```
{: .nolineno }