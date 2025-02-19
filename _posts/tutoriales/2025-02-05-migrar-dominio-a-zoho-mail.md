---
title: "Tutorial: Acelerar sitios Web con Optimización de Imágenes"
categories: ["Tutoriales", "Web"]
---

### **Comprender los beneficios del LQIP**

LQIP (Low-Quality Image Placeholder) es una técnica, en la que se codifica una versión de baja resolución de una imagen en base64 y se coloca temporalmente. Esto garantiza que se muestre una vista previa rápida mientras se carga la imagen de alta resolución, lo que mejora el tiempo de carga percibido y la experiencia del usuario.

### **Ventajas del LQIP**

1 **Carga más rápida**: Se muestra una imagen de baja resolución mientras se carga la real, lo que da la impresión de que la página se carga más rápido.
2. **Mejor experiencia de usuario**: El uso de LQIP hace los sitios web parezcan más rápidos, lo que aumenta la satisfacción del usuario.
3. **Reducción de la percepción de espera**: Aunque la imagen pesada todavía se está cargando, el usuario ya puede ver una versión básica de la misma.

### **¿Qué es WebP y por qué es útil?**

**WebP** es un formato de imagen moderno desarrollado por Google, que frece características de compresión y calidad superiores en comparación con los formatos de imagen tradicionales como **JPEG** y **PNG**. Con WebP, puede reducir significativamente el tamaño de archivo de sus imágenes sin comprometer la calidad, puede reducir los tamaños de archivo de imagen hasta un 30% más que JPEG y PNG, lo que permite imágenes de alta calidad con tamaños de archivo más pequeños. WebP también admite fondos transparentes (como PNG) y animaciones (como GIF), lo que lo hace versatíl para diversas necesidades de imágenes para usar en la web.

### **Herramientas de WebP**

Las herramientas WebP son utilidades de línea de comandos que permiten convertir imágenes de varios formatos (como PNG, JPEG y TIFF) a WebP. Estas herramientas se utilizan normalmente en la terminal o en el símbolo del sistema y ofrecen opciones para ajustar la configuración de compresión, la calidad y otros parámetros para optimizar las imágenes según sus requisitos específicos. Con las herramientas WebP, puede realizar conversiones por lotes, ajustar la calidad de las imágenes y automatizar las tareas de procesamiento de imágenes mediante secuencias de comandos o procesos de compilación.

#### **Instalar WebP**

{% tabs install_webp %}
{% tab install_webp macos %}
```terminal
brew install webp
```
{% endtab %}
{% tab install_webp linux %}
```terminal
sudo apt-get install webp
```
{% endtab %}
{% tab install_webp windows %}
Para Windows, descargue los binarios de WebP desde [la página del proyecto WebP](https://developers.google.com/speed/webp/download?hl=es-419) y sigue las instrucciones para instalarlos.
{% endtab %}
{% endtabs %}

### **Convertir imagen al formato WebP**

Para convertir la imagen PNG al formato WebP:

```terminal
cwebp imagen.png -o imagen.webp
```

### **Herramientas para LQIP**

Los marcadores de posición de imágenes de baja calidad (LQIP) son fundamentales para mejorar los tiempos de carga percibidos y la experiencia del usuario. Para crear estos marcadores de posición, utiliremos ImageMagick, una potente herramienta de manipulación de imágenes.

### **Uso de ImageMagick para LQIP**

ImageMagick es una herramienta de manipulación de imágenes de código abierto que se puede utilizar para crear una imagen de marcador de posición **codificada en base64** para LQIP.

#### **Instalar LQIP**

{% tabs install_imagemagick %}
{% tab install_imagemagick macos %}
```terminal
brew install imagemagick
```
{% endtab %}
{% tab install_imagemagick linux %}
```terminal
sudo apt-get install imagemagick
```
{% endtab %}
{% tab install_imagemagick windows %}
Para Windows, descargue el instalador de ImageMagick desde la [la página de descarga de ImageMagick](https://imagemagick.org/script/download.php) y siga las instrucciones para instalarlos.
{% endtab %}
{% endtabs %}

#### **Generar el LQIP**

El siguiente comando cambia el tamaño de la imagen a un tamaño pequeño, reduce su calidad, la convierte al formato WebP, la codifica en base64 y luego limpia el archivo temporal generado:

```terminal
magick chirpy-fast-load.webp -resize 20x20 -strip -quality 20 tmp.webp && \
base64 -i tmp.webp && \
rm tmp.webp
```

Esta configuración, logra un equilibrio óptimo entre la longitud de la cadena base64 y la calidad de la imagen, lo que garantiza un marcador de posición eficaz sin pérdida innecesaria de tamaño o calidad. A continuación, se muestra un desglose del comando:

- `-resize 20x20`: Redimensiona la imagen a 20x20 píxeles, proporcionando un buen equilibrio entre detalle y tamaño de archivo.
- `-strip`: Elimina todos los metadatos para reducir el tamaño del archivo.
- `-quality 20`: Establece la calidad de WebP en 20, equilibrando la fidelidad visual y el tamaño del archivo.
- `tmp.webp`: Crea un archivo WebP temporal.
- `base64 tmp.webp`: Convierte el archivo temporal en una cadena base64.
- `rm tmp.webp`: Elimina el archivo temporal después de la codificación.

### **Consejos adicionales para optimizar imágenes**

- **Redimensionar imágenes**: Asegúrate de que las imágenes no sean más grandes de lo necesario. Por ejemplo, no cargues imágenes de 3000px de ancho si se mostrarán a 800px en tu sitio web.
- **Uso de carga diferida (Lazy Loading)**: Implementa el *lazy loading* para que las imágenes se carguen solo cuando estén a punto de entrar en la vista del usuario, reduciendo el tiempo de carga inicial.
- **Compresión sin pérdida**: Si no quieres perder calidad en las imágenes, utiliza herramientas de compresión sin pérdida.
