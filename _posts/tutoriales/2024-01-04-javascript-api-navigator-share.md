---
title: "Tutorial: Como usar el Web Share API"
pin: true
categories: ["Tutoriales", "Web"]
---

Cuando interactuamos con aplicaciones móviles y usamos los botones para compartir, enviar enlaces, imágenes o textos a través de aplicaciones como WhatsApp, Facebook, o correo electrónico, es probable que ya hayas visto en acción la **Web Share API** de javaScript. Esta poderosa herramienta permite que las aplicaciones web compartan contenido de manera sencilla utilizando las funcionalidades nativas de los dispositivos.

### ¿Qué es la Web Share API?

La **Web Share API** es una interfaz que permite que las aplicaciones web acceder al sistema de compartir contenido que normalmente se encuentra disponible en aplicaciones nátivas de dispositivos móviles. Básicamente, permite a los usuarios compartir contenido (textos, enlaces, imágenes, etc.) con otras aplicaciones instaladas en su dispositivo sin tener que copiar y pegar el contenido.

### ¿Cómo funciona la Web Share API?

Cuando se utiliza `navigator.share()`, el navegador muestra una interfaz nativa que permite al usuario elegir con qué aplicación desea compartir el contenido. Esta es la forma en que los usuarios normalmente comparten enlaces en aplicaciones móviles como WhatsAPP, Telegram, Twitter, etc.

**Flujo básico de uso**:

+ [x] El usuario interactúa con un botón o enlace en tu página web. Ejemplo <kbd>Botón Compartir</kbd>.
+ [x] La función `navigation.share()` se invoca y pasa los datos a compartir (texto, enlaces, imagen, etc.).
+ [x] El navegador muestra la interfaz de compartir nativa, permitiendo al usuario elegir con qué aplicación compartir el contenido.
+ [x] El contenido se comparte a través de la aplicación seleccionada.

### ¿Cómo usar la Web Share API?

Implementar la Web Share API en nuestras páginas web es bastante sencillo. Aquí tenemos un ejemplo de cómo hacerlo:

**Crear un `index.html`**

Definimos una estructura básica de documento **HTML5** y vinculamos el archivo JavaScript `index.js`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo Web Share API</title>
</head>
<body>
	<div class="container">
		<p id="tip" style="display: none">El navegador no soporta Web Share API!</p>
		<button id="share">Compartir este artículo</button>
	</div>
	<script src="index.js"></script>
</body>
</html>
```
{: file="index.html" }

**Crear un `index.js`**

```javascript
const shareBtn = document.getElementById('share');
const tip = document.getElementById('tip');

shareBtn.addEventListener('click', (event) => {

	if ("share" in navigator) {
		navigator
			.share({
				// título para la ventana compartir
				title: "Comparte este recurso en tus plataformas",
				// Si queremos compartir el recurso actual
				url: window.location.href
			})
			.then(() => {
				console.log("Recurso compartido");
			})
			.catch(console.error)
	} else {
		alert("Lo sentimos, este navegador no tiene soporte para recursos compartidos");
		tip.style.display = "block";
	}
});
```
{: file="index.js" }

El resultado lo podemos probar usando el siguiente botón:

<button id="btn-share" class="btn btn-secondary">Compartir este artículo</button>

<script>
const shareBtn = document.getElementById('btn-share');
shareBtn.addEventListener('click', (event) => {
	if ("share" in navigator) {
		navigator
			.share({
				title: "Comparte este recurso en tus plataformas",
				url: window.location.href
			})
			.then(() => {
				console.log("Recurso compartido");
			})
			.catch(console.error)
	} else {
		alert("Lo sentimos, este navegador no tiene soporte para recursos compartidos");
	}
});
</script>

### **¿Qué se puede compartir con la Web Share API?**

La **Web Share API** permite compartir diferentes tipos de datos:

- **Texto** (`text`): Cualquier cadena de texto que quieras compartir.
- **URL** (`url`): Un enlace a una página web.
- **Título** (`title`): Un título descriptivo del contenido que se está compartiendo.
- **Archivos** (`files`): En dispositivos que lo soportan, puedes compartir archivos (por ejemplo, imágenes, documentos).

### **Compartir Archivos**

La **Web Share API** también permite compartir archivos como parte del objeto de datos, no solo URLs. Para lograr esto, el archivo PDF debe ser accesible como un **objeto Blob** o **File** (es decir, como un archivo binario en lugar de solo una URL).

Ahora veamos un ejemplo para compartir un archivo PDF (este método es compatible para cualquier otro tipo de archivo como imágenes) con la **Web Share API**. Para ello primero, debes asegurarte que el archivo esté en una carpeta que pueda ser servida públicamente por un servidor web.

#### **Pasos**

**1. Cargar el archivo como un `Blob`**

Para ello podemos definir una función que se encargará de realizar la carga del archivo (por ejemplo imágenes PNG):

```javascript
// Función que carga el archivo desde el directorio de assets
function loadFile(archivo) {
	// Ruta relativa al archivo en tu servidor web (debe ser accesible)
	const relativePath = `/assets/${archivo}`;  // Ruta relativa al archivo

	return fetch(window.location.origin + relativePath)
            .then(response => response.blob()) // Convierte el archivo en un Blob
            .then(blob => new File([blob], archivo, { type: 'image/png' })) // Convierte a Blob (Cambia según el tipo Ej: { type: 'application/pdf' })
            .catch(error => console.error('Error al cargar el archivo:', error));
}
```
{: .nolineno }

**2. Usar la Web Share API para compartir**

Para que funcione entonces debemos llamar a la función anterior y especificar el nombre del archivo:

```javascript
document.getElementById('share').addEventListener('click', function() {
// Verifica si la Web Share API está disponible
    if (navigator.share && navigator.canShare) {
		// Cargar el archivo PDF como un File
		loadFile("image.png")
			.then(file => {
				// Compartir el archivo
					navigator.share({
					title: 'Mira este archivo',
					text: 'Te estoy compartiendo un archivo interesante.',
					files: [file]  // El archivo como un array de archivos
			})
			.then(() => {
				console.log('Archivo compartido exitosamente');
			})
			.catch((error) => {
				console.error('Error al compartir el archivo:', error);
			});
		});
    } else {
        alert('La Web Share API no es compatible o no puede compartir archivos en este dispositivo.');
    }
});
```
{: .nolineno }

#### **Ejemplo Completo**

**Crear un `index.html`**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo Web Share API</title>
</head>
<body>
	<div class="container">
		<button id="share">Compartir este archivo</button>
	</div>
	<script src="index.js"></script>
</body>
</html>
```
{: file="index.html" }


**Crear un `index.js`**

```javascript
function loadFile(archivo) {
	const relativePath = `/assets/${archivo}`;

	return fetch(window.location.origin + relativePath)
            .then(response => response.blob())
            .then(blob => new File([blob], archivo))
            .catch(error => console.error('Error al cargar el archivo:', error));
}

document.getElementById('share').addEventListener('click', function() {
    if (navigator.share && navigator.canShare) {
		loadFile("image.png")
			.then(file => {
					navigator.share({
					title: 'Mira este archivo',
					text: 'Te estoy compartiendo un archivo interesante.',
					files: [file]  // El archivo como un array de archivos
			})
			.then(() => {
				console.log('Archivo compartido exitosamente');
			})
			.catch((error) => {
				console.error('Error al compartir el archivo:', error);
			});
		});
    } else {
        alert('La Web Share API no es compatible o no puede compartir archivos en este dispositivo.');
    }
});
```
{: file="index.js" }

<button id="btn-share-2" class="btn btn-secondary">Compartir este archivo</button>

<script>
function loadFile(archivo) {
	const relativePath = `/assets/${archivo}`;

	return fetch(window.location.origin + relativePath)
            .then(response => response.blob())
            .then(blob => new File([blob], archivo))
            .catch(error => console.error('Error al cargar el archivo:', error));
}

document.getElementById('btn-share-2').addEventListener('click', function() {
    if (navigator.share && navigator.canShare) {
		loadFile("img/never-stop-learning.png")
			.then(file => {
					navigator.share({
					title: 'Mira este archivo',
					text: 'Te estoy compartiendo un archivo interesante.',
					files: [file]  // El archivo como un array de archivos
			})
			.then(() => {
				console.log('Archivo compartido exitosamente');
			})
			.catch((error) => {
				console.error('Error al compartir el archivo:', error);
			});
		});
    } else {
        alert('La Web Share API no es compatible o no puede compartir archivos en este dispositivo.');
    }
});
</script>


**Otro enfoque**

```javascript
shareButton.onclick = async () => {
  const response = await fetch("https://example.com/files/hello.pdf");
  const buffer = await response.arrayBuffer();

  const pdf = new File([buffer], "hello.pdf", { type: "application/pdf" });
  const files = [pdf];

  // Si el navegador tiene soporte para recursos compartidos
  if (navigator.canShare({ files })) await navigator.share({ files });
};
```
{: .nolineno }

### **Consideraciones**

#### **No funciona con archivos locales**

La **Web Share API** requiere que el archivo esté disponible de forma accesible a través de la web (es decir, debe estar en una URL completa). Los archivos locales dentro del proyecto, como los de una ruta relativa al archivo, no son accesibles por la API, ya que la aplicación necesita que el archivo esté expuesto a través de un servidor web (y no como un recurso local).