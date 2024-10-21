---
title: "Formas de importar CSV en colabs"
author: enidev911
date: 2024-01-04
categories: [Python, Análisis de datos]
---


[![Google Colabs](https://colab.research.google.com/assets/colab-badge.svg){: w='150' .shadow }](https://colab.research.google.com/){:target='_blank'}

![Nuevo notebook](/assets/img/nuevo_notebook.png){: w='600'}

## Cargar CSV desde unidad local

Para cargar el archivo desde nuestro disco, debemos anticipar el siguiente código en la primera celda y lo ejecutamos:

```py
from google.colab import files

uploaded = files.upload()
```
{: .nolineno }

Cuando se ejecuta el bloque, se nos habilitará el botón para cargar el archivo.

![cargar archivo](/assets/img/file_upload.png){: w='800' .shadow }


Luego de seleccionar el archivo CSV desde nuestro disco local, en un segundo bloque podemos cargarlo en un marco de datos de panda:

```py
import pandas as pd
import io
 
df = pd.read_csv(io.BytesIO(uploaded['file.csv']))
print(df)
```
{: .nolineno }

---

## Cargar CSV desde Github

Es la forma más fácil de cargar un archivo CSV en **Colab**, vamos a buscar el archivo alojado en un repositorio de Github y luego hacemos clic en ver sin procesar <kbd>raw</kbd>, copiamos la URL y la pasamos directo al método `read_csv()`:

```py
import pandas as pd

url = 'https://raw.githubusercontent.com/EniDev911/assets/main/csv/csv_Banco.csv'
df = pd.read_csv(url)
print(df)
```
{: .nolineno }
