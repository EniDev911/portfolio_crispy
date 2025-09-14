---
title: "Contenido multimedia en HTML5"
categories: [Desarrollo Web, HTML]
---

Con el lanzamiento de HTML5, el manejo de contenido multimedia en la web dio un salto enorme. Antes dependíamos de plugins como [Flash](https://es.wikipedia.org/wiki/Adobe_Flash){:target="_blank"}, que eran poco seguros y complicados. Hoy podemos integrar contenido multimedia de forma nativa compatible con casi todos los navegadores.

### Etiqueta HTML para imágenes `<img>`

Para incrustar imágenes en una página web, existe la tradicional etiqueta `<img>`, la cual cuenta con varios atributos que permiten modificar cómo se mostrará la imagen. Sin embargo, los atributos `src` y `alt` son obligatorios. A continuación, se presenta una tabla con la descripción del resto de los atributos:

| Atributo | Descripción                                                                 |
|----------|------------------------------------------------------------------------------|
| **src**  | Indica el nombre de la URL de la imagen a mostrar. (**Obligatorio**)         |
| **alt**  | Establece un texto alternativo que describe la imagen a mostrar. (**Obligatorio**) |
| **width**| Indica el ancho de la imagen en píxeles (sin usar la unidad `px`).           |
| **height**| Indica el alto de la imagen en píxeles (sin usar la unidad `px`).           |

```html
<img 
  src="https://robohash.org/XPX.png?set=set3" 
  alt="Una imagen de robot" 
  width="500" 
  height="450"
/>
```
{: file="index.html" }

__Resultado:__

![Una imagen de robot](https://robohash.org/XPX.png?set=set3)
_Fuente: [Robohash](https://robohash.org/){:target="_blank" rel="noopener noreferrer"}_

### Nuevas etiquetas de imágenes en HTML5

HTML5 introdujo un sistema más flexible para trabajar con imágenes, superando las limitaciones de la tradicional etiqueta `<img>`. Ahora contamos con la etiqueta `<picture>`, que permite a los navegadores elegir automáticamente la versión de una imagen más adecuada según diferentes condiciones, como el tamaño de pantalla, la resolución del dispositivo o el formato de imagen soportado.

Esto resulta ser muy relevante en el diseño web adaptable ([responsive design](https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable){:target="_blank"}), ya que mejora la experiencia de usuario y optimiza el rendimiento del sitio al mostrar imágenes más ligeras en dispositivos móviles y de mayor calidad en pantallas con alta resolución.

La etiqueta `<picture>` se utiliza en conjunto con `<source>` y `<img>`. Mientras que `<source>` define las distintas variantes de la imagen (formato o tamaño), la etiqueta `<img>` actúa como respaldo ([fallback](https://es.wikipedia.org/wiki/Fallback){:target="_blank"}) en caso de que el navegador no soporte las demás opciones.

En la siguiente tabla se describen estos elementos:

| Etiqueta  | Atributos                       | Descripción                                                              |
|-----------|---------------------------------|--------------------------------------------------------------------------|
| `<picture>` |                               | Agrupa una serie de imágenes. (Etiqueta contenedora)                     |
| `<source>`  | srcset, sizes, media, type   | Muestra la imagen que cumpla con una serie de criterios opcionales.      |

Como podemos ver, lo más interesante se encuentra en la etiqueta `<source>`, ya que dispone de varios atributos que permiten controlar cuándo y cómo se mostrará una imagen. A continuación, se detalla la función de cada uno:

| Atributo   | Descripción                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| `srcset` | Define una lista de imágenes, separadas por comas, entre las que el navegador elegirá la más adecuada. (**Obligatorio**) |
| `sizes`  | Indica el tamaño que tendrá la imagen seleccionada en el diseño final.                                                   |
| `media`  | Establece una condición (similar a las media queries en CSS) que debe cumplirse para mostrar la imagen.                  |
| `type`   | Define el tipo o formato de la imagen (ejemplo: `image/webp`). (**Opcional**)                                            |

Una de las principales ventajas que ofrecen estas etiquetas es la posibilidad de usar distintos formatos de imagen según la compatibilidad del navegador. De esta forma, podemos optimizar la carga de recursos y garantizar una mejor experiencia de usuario.

**Ejemplo práctico:**

```html
<picture>
  <source 
    media="(min-width: 650px)" 
    srcset="https://googlechrome.github.io/samples/picture-element/images/kitten-large.png"
  />
  <source 
    media="(min-width: 465px)" 
    srcset="https://googlechrome.github.io/samples/picture-element/images/kitten-medium.png"
  />
  <!-- Etiqueta <img> para navegadores que no soportan <picture> -->
  <img 
    src="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png" 
    alt="Un lindo gatito"
  />
</picture>
```
{: .nolineno }

__Resultado:__

![Imágenes en diferentes dispositivos](html/responsive-images.webp)

__¿Qué representa cada dispositivo?:__

* **Celular (izquierda)**: Pantalla pequeña → menos de 465px → se carga `kitten-small.png`.
* **Tablet (centro izquierda)**: Pantalla entre 465px y 649px → se carga `kitten-medium.png`.
* **Laptop (derecha)**: Pantalla de 650px o más → se carga `kitten-large.png`.

### Etiqueta HTML `<audio>`

En **HTML5** es posible incorporar archivos de audio de manera sencilla, ya sea para reproducir música, podcasts, efectos de sonido o incluso añadir una pista de ambientación sonora a una página web.

En versiones antiguas de los navegadores, especialmente en **Internet Explorer**, existía la etiqueta `<bgsound>`. Esta era **propietaria y no estándar**, por lo que su uso estaba limitado y solo funcionaba en dicho navegador (principalmente entre **IE 3 e IE 9**).

Hoy en día, el estándar recomienda utilizar la etiqueta **`<audio>`**, que ofrece mayor compatibilidad, accesibilidad y control. Además, permite definir diferentes comportamientos y opciones de presentación a través de sus atributos.

En la siguiente tabla se detallan los atributos más importantes y su función:


| Atributo   | Descripción                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`      | Especifica el archivo de audio a reproducir. Obligatorio si no se utiliza la etiqueta `<source>`.                                              |
| `preload`  | Indica cómo se debe realizar la precarga del audio. Puede tomar valores como `auto`, `metadata` o `none`.                                      |
| `controls` | Muestra los controles de usuario en el reproductor de audio, permitiendo reproducir, pausar, ajustar el volumen y ver la duración del archivo. |

Un primer ejemplo muy básico para añadir un archivo de audio a nuestra página web sería el siguiente:

```html
<audio src="serene-piano.mp3" controls></audio>
```
{: .nolineno }

__Resultado:__

<audio src="/assets/audios/serene-piano.mp3" controls></audio>

Veamos un ejemplo un poco más avanzado, el cual combina la carga del archivo en HTML y el control mediante JavaScript:

```html
<!-- Definimos el sonido -->
<audio id="tecla-sound" src="key.ogg" preload="auto"></audio>

<script>
  document.addEventListener("keydown", () => {
    const audio = document.getElementById("tecla-sound");
    audio.currentTime = 0; // reinicia el audio para que suene cada vez
    audio.play();
  });
</script>
```
{: .nolineno }

En este caso, el archivo de sonido se __declara en el HTML__ con la etiqueta `<audio>`, y el control de reproducción se maneja desde JavaScript mediante el evento `keydown`.

Presiona una de las siguientes teclas para escuchar el sonido:

<style scoped>
  .keyboard kbd {
    padding: 8px 12px;
    font-size: large;
  }
  .keyboard kbd.active {
    background-color: currentColor;
    color: var(--color-bg, #fff);
    transform: scale(1.1);
    transition: all 0.15s ease;
    border-radius: 4px;
  }
</style>

<div class="keyboard" align="center">
  <kbd data-key="q">Q</kbd>
  <kbd data-key="w">W</kbd>
  <kbd data-key="e">E</kbd>
  <kbd data-key="r">R</kbd>
  <kbd data-key="t">T</kbd>
  <kbd data-key="y">Y</kbd>
  <kbd data-key="u">U</kbd>
  <kbd data-key="i">I</kbd>
  <kbd data-key="o">O</kbd>
  <kbd data-key="p">P</kbd>
</div>
<script>
  const sonido = new Audio("/assets/audios/key.ogg"); 
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`kbd[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.add("active");
      setTimeout(() => keyElement.classList.remove("active"), 150);
      sonido.currentTime = 0;
      sonido.play();
    }
  });
</script>

### Etiqueta HTML `<video>`

En HTML5 se introduce la interesante posibilidad de **mostrar videos directamente en el navegador**. De hecho, si arrastramos un video a la ventana del navegador, veremos que comienza a reproducirse automáticamente. Para insertar videos en nuestras páginas HTML debemos utilizar la etiqueta `<video>`, que junto con la etiqueta `<source>` nos permite aprovechar estas capacidades multimedia en documentos HTML5.

La etiqueta `<video>` tiene varios atributos importantes, como veremos a continuación:

| Atributo  | Valores                        | Descripción                                                                 |
|-----------|--------------------------------|-----------------------------------------------------------------------------|
| `src`       | URL                            | Video a reproducir. Obligatorio si actúa como etiqueta contenedora.        |
| `poster`    | URL                            | Imagen de presentación que se muestra antes de reproducir el video.        |
| `preload`   | auto \| metadata \| none       | Indica cómo se realiza la precarga del video.                               |
| `muted`     | true \| false                  | Establece el video sin sonido (silenciado).                                 |
| `controls`  | true \| false                  | Muestra los controles de reproducción. Por defecto no se muestran.         |
| `width`     | tamaño en píxeles              | Indica el ancho del video.                                                  |
| `height`    | tamaño en píxeles              | Indica el alto del video.                                                   |

Un primer ejemplo muy básico para colocar un video en nuestra página web sería el siguiente:

```html
<video width="500" height="450" controls>
    <!-- Fuente del video -->
    <source src="https://cdn.pixabay.com/video/2015/08/08/117-135736418_large.mp4" type="video/mp4">
    <!-- Mensaje para navegadores que no soportan video -->
    Tu navegador no soporta el elemento <code>video</code>.
</video>
```
{: .nolineno }

__Resultado:__

{% include embed/video.html src="https://cdn.pixabay.com/video/2015/08/08/117-135736418_large.mp4" %}

Por defecto, las etiquetas `<video>` muestran el primer fotograma del video enlazado o una pantalla negra inicial. Sin embargo, podemos mostrar una **imagen personalizada** como si fuera la carátula o miniatura de un video de YouTube, de manera que el video no se reproduzca hasta que el usuario pulse el botón de play.

Para ello, utilizaremos el atributo `poster`, que funciona de forma similar al atributo `src` de las etiquetas `<img>`. En él podemos incrustar la imagen especificando la **URL de la imagen** que queremos mostrar como portada del video.

```html
<video
  src="darth-maul_vs_obiwan.mp4"
  type="video/mp4"
  poster="https://pbs.twimg.com/media/EhADsOUXYAYOuOp.jpg" 
	controls>
</video>
```
{: .nolineno }


{% include embed/video.html src="darth-maul_vs_obiwan.mp4" poster="https://pbs.twimg.com/media/EhADsOUXYAYOuOp.jpg" %}

### Formatos de video

Antes de adentrarnos en el modo avanzado de etiquetas de video, es importante comprender algunos conceptos básicos sobre los formatos de video.

Un archivo de video está compuesto por dos partes principales:

* **Formato contenedor**: define el tipo de archivo (por ejemplo, `.mp4`, `.webm`, etc.).
* **Componentes codificados**: los contenidos del archivo (video, audio, subtítulos, imágenes, etc.), codificados mediante diferentes *codecs*.

Por lo general, un video básico incluye al menos un componente de video y uno de audio. Conocer estos conceptos es fundamental, ya que __no todos los formatos__ o *codecs* __son adecuados para su uso en la web__.

A continuación, se presentan algunos de los formatos y *codecs* más comunes:

| Formato  | Codec utilizado             | Características                                                                   |
| -------- | --------------------------- | --------------------------------------------------------------------------------- |
| **MP4**  | x264, DivX, H.264           | Alta calidad, compatible con la mayoría de plataformas. El codec x264 es libre.   |
| **WebM** | VP8, VP9                    | Alternativa libre a MP4, desarrollada por Google. Buena opción para la web.       |
| **AV1**  | Basado en VP10, Daala, Thor | Codec de última generación. Compite con HEVC/H.265. Alta compresión y eficiencia. |
| **HEVC** | x265, DivX HEVC             | Evolución del H.264/MP4. Mayor compresión, pero más exigente en procesamiento.    |
| **OGV**  | Theora                      | Alternativa libre a MP4, menos popular.                                           |
| **MKV**  | Matroska                    | Formato potente y flexible, buena compresión, pero con alto consumo de recursos.  |

### La etiqueta `<video>` con múltiples formatos

Cuando utilizamos la etiqueta `<video>` como contenedor, podemos incluir en su interior varias etiquetas `<source>`. Esto permite ofrecer el mismo video en distintos formatos, lo cual mejora la compatibilidad entre navegadores, incluyendo aquellos más antiguos que no admiten completamente HTML5.

Este es un ejemplo de cómo implementarlo:

```html
<video width="600" height="400" controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <source src="video.ogv" type="video/ogg" />
  Tu navegador no soporta la reproducción de video.
</video>
```
{: .nolineno }

**Puntos importantes:**

* Se recomienda incluir el atributo `controls` para que el usuario pueda reproducir, pausar o ajustar el volumen del video.
* El navegador intentará reproducir los formatos en orden. Si no puede con el primero, pasará al siguiente.
* El texto dentro de la etiqueta `<video>` se mostrará solo si el navegador no soporta este elemento (útil como mensaje de respaldo).
