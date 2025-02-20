---
title: "Tutorial: Acelerar sitios Web con Optimización de Imágenes"
categories: ["Tutoriales", "Web"]
image:
    path: posters/tutorial-optimizacion-de-imagenes.webp
    alt: Optimización de Imágenes Para la Web
    lqip: data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJaQAASoAhmdH0egAA/uv+PzBy+/q1hjFXpgUNEQ3rpKi6nLu3PWw1NRyLeXrgj8nxLKAAAAA=
pin: true
---

La optimización de imágenes es fundamental para mejorar la velocidad de carga de un sitio web. Las imágenes de gran tamaño, si no se gestionan adecuadamente, pueden ralentizar el rendimiento del sitio y afectar la experiencia del usuario. Afortunadamente, existen diversas **técnicas** y **herramientas** que permiten reducir el tamaño de las imágenes sin perder calidad. Además, el uso de *placeholders* puede mejorar la percepción de la carga de la página, brindando una experiencia de usuario más fluida y agradable. A continuación, exploraremos algunas de las mejores prácticas y herramientas para optimizar imágenes y mejorar el rendimiento de tu sitio web.

## **Calidad Visual y Experiencia del Usuario**

La **calidad visual** de un sitio web juega un papel esencial en la **experiencia del usuario**. Imágenes de baja resolución pueden dar una impresión negativa, haciendo que el sitio se vea poco profesional o desactualizado. Por otro lado, imágenes de alta resolución pueden hacer que el sitio se vea nítido y atractivo, pero si no se optimizan correctamente, pueden afectar el rendimiento y la velocidad de carga.

La resolución ideal de las imágenes en un sitio web depende del equilibrio entre calidad y rendimiento. Aquí tienes algunas recomendaciones según el uso:  

### 📏 **Tamaño y resolución según el uso**  
- **Imágenes de fondo o banners grandes** → 1920x1080 px o más (pero comprimidas).  
- **Imágenes de contenido (ej: productos, ilustraciones)** → 1200x800 px suele ser suficiente.  
- **Miniaturas o imágenes pequeñas (thumbnails)** → 300x300 px o similar.  

> **Las imágenes son los recursos que más peso pueden tener en un sitio web**, y si estás no están optimizadas correctamente harán que tu página parezca lenta y arruinará la experiencia de navegación de tus usuarios.
{: .prompt-info }

Existen diversas herramientas para crear imágenes con resoluciones específicas, y en mi caso, una de las que más me resulta útil es el uso de los **marcos (frames)** de [Excalidraw](https://excalidraw.com/){: target='_blank' }.

![frames excalidraw - resoluciones](tutoriales/excalidraw-frames-con-resoluciones.webp){: .frame }

**Mostrar información de resoluciones en excalidraw**

![frames excalidraw - resoluciones](tutoriales/excalidraw-mostrar-informacion-resoluciones.webp){: .frame }

### 📄 **Formatos recomendados**  
- **WebP** → Mejor opción (gran calidad y menor peso).  
- **JPEG** → Bueno para fotos, pero más pesado que WebP.  
- **PNG** → Solo si necesitas transparencia (pero pesa más).  
- **SVG** → Ideal para iconos y gráficos simples.  

## **¿Qué es LQIP (Low Quality Placeholder)?**

**LQIP** es una de las técnicas más efectivas para mejorar la experiencia del usuario, que consiste en generar una versión de baja resolución de una imagen codificada en base64 y mostrarla temporalmente. Esto permite mostrar una vista previa rápida mientras la imagen de alta resolución se carga en segundo plano, lo que mejora la percepción del tiempo de carga y optimiza la experiencia del usuario.

### **Ventajas del LQIP**

1. **Carga más rápida**: Se muestra una imagen de baja resolución mientras se carga la real, lo que da la impresión de que la página se carga más rápido.
2. **Mejor experiencia de usuario**: El uso de LQIP hace que los sitios web parezcan más rápidos, lo que aumenta la satisfacción del usuario.
3. **Reducción de la percepción de espera**: Aunque la imagen pesada todavía se está cargando, el usuario ya puede ver una versión básica de la misma.

## **¿Qué es WebP y por qué es útil?**

**WebP** es un formato de imagen moderno desarrollado por Google, que frece características de compresión y calidad superiores en comparación con los formatos de imagen tradicionales como **JPEG** y **PNG**. Con WebP, puede reducir significativamente el tamaño de archivo de sus imágenes sin comprometer la calidad, puede reducir los tamaños de archivo de imagen hasta un 30% más que JPEG y PNG, lo que permite imágenes de alta calidad con tamaños de archivo más pequeños. WebP también admite fondos transparentes (como PNG) y animaciones (como GIF), lo que lo hace versatíl para diversas necesidades de imágenes para usar en la web.

Para mostrar un ejemplo de la diferencia entre una imagen en **formato PNG** o **JPEG** y su **versión optimizada en WebP**, a continuación te dejo un escenario dinámico donde puedes subir tu propia imagen y ver los resultados. Verás cómo se carga la imagen en su formato original y luego su versión optimizada en WebP, destacando la diferencia en el tamaño de los archivos entre ambos formatos.

### **Comparar imágenes PNG, JPEG y WebP**

{% include extras/png-to-webp.html %}

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

**1. Conversión básica de una imagen (sin compresión adicional)**

```terminal
cwebp imagen.png -o imagen.webp
```

**2. Controlar la calidad de la imagen convertida (0 a 100)**

```terminal
cwebp -q 80 input-image.png -o output-image.webp
```

- `-q 80`: Establece la calidad de la imagen convertida a 80 (de 0 a 100, donde 100 es la calidad más alta y el tamaño más grande).
- `-o output-image.webp`: Especifica el archivo de salida en formato WebP.

A continuación, se muestra las diferencias de tamaño al cambiar el parámetro `-q`:

![controlando la calidad de las imágenes convertidas](tutoriales/tutorial-webp-quality-90.webp){: .frame }

**3. Usar el modo de compresión "lossless" (sin pérdida)**

```terminal
cwebp -lossless input-image.png -o output-image.webp
```

## **Imágenes de Baja Calidad para Placeholder**

### **Herramientas para LQIP**

Los marcadores de posición *placeholders* de imágenes de baja calidad (LQIP) son fundamentales para mejorar los tiempos de carga percibidos y la experiencia del usuario. Para crear estos marcadores de posición, utiliremos ImageMagick, una potente herramienta de manipulación de imágenes.

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


## **Estructura Final de la Imagen con Placeholder y Carga Diferida**

Ahora que ya tienes el archivo WebP y el LQIP listo, puedes implementar la imagen en tu sitio con **lazy loading** y un **placeholder** para que se cargue progresivamente.

### **HTML para la imagen con carga diferida y placeholder:**

En este caso, utilizaremos el **LQIP** como una imagen de baja calidad temporalmente mientras se carga la imagen original con el formato WebP.

```html
<img
  src="data:image/webp;base64,...."
  data-src="input-image.webp"
  alt="Imagen optimizada"
  class="lazyload"
  loading="lazy"
  width="600" height="400"
  style="width: 100%; height: auto;"
/>
```
{: .nolineno }


- `src`: Contiene la imagen LQIP en formato base64.
- `data-src`: Tiene la URL de la imagen original en formato WebP.
- `class="lazyload"`: Se utiliza para indicar que la imagen debe cargarse de manera diferida.
- `loading="lazy"`: Es un atributo estándar de HTML5 que ayuda a activar la carga diferida de las imágenes.
- `width` y `height`: Controlan el tamaño de la imagen.

### **Script JS para Manejar la Carga Diferida (Lazy Loading)**

El siguiente paso, es añadir el algo de JavaScript que permitirá que las imágenes solo se carguen cuando están cerca de la ventana de visualización. Esto mejora el rendimiento, ya que no todas las imágenes se cargan de inmediato.

```html
<script>
  const lazyImages = document.querySelectorAll('.lazyload');

  const loadImage = (image) => {
    const src = image.getAttribute('data-src');
    if (src) {
      image.src = src;
      image.onload = () => {
        image.style.opacity = 1;
      };
    }
  };

  // rootMargin: Activar cuando la imagen esté a punto de entrar en la vista
  // threshold: Cuando el 10% de la imagen sea visible
  const imageOptions = {
    rootMargin: '0px 0px 100px 0px', 
    threshold: 0.1,                    
  };

  // observer.unobserve(entry.target): Dejar de observar la imagen una vez cargada
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, imageOptions);

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
</script>
```
{: .nolineno }

### **Consejos adicionales para optimizar imágenes**

- **Redimensionar imágenes**: Asegúrate de que las imágenes no sean más grandes de lo necesario. Por ejemplo, no cargues imágenes de 3000px de ancho si se mostrarán a 800px en tu sitio web.
- **Uso de carga diferida (Lazy Loading)**: Implementa el *lazy loading* para que las imágenes se carguen solo cuando estén a punto de entrar en la vista del usuario, reduciendo el tiempo de carga inicial.
- **Compresión sin pérdida**: Si no quieres perder calidad en las imágenes, utiliza herramientas de compresión sin pérdida.