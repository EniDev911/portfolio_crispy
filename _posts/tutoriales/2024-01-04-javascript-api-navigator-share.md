---
title: "JavaScript: Como usar el Web Share API"
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

```javascript
const shareBtn = document.getElementById('btn-share');

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
	}
});
```
{: .nolineno }

El resultado lo podemos probar usando el siguiente botón:

<button id="btn-share" class="btn btn-secondary">Compartir este enlace</button>

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

### **Compartir Documentos**

Ahora veamos un ejemplo para compartir un documento con la **Web Share API**. Para ello primero, debes asegurarte que el archivo esté en una carpeta que pueda ser servida públicamente por un servidor web. En la mayoría de las aplicaciones web, la carpeta

**Ejemplo para compartir un documento**

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



<button id="btn-share-2" class="btn btn-secondary">Compartir este documento</button>

<script>
const shareBtn_ = document.getElementById('btn-share-2');
shareButton_.onclick = async () => {
  const response = await fetch("https://example.com/files/hello.pdf");
  const buffer = await response.arrayBuffer();

  const pdf = new File([buffer], "hello.pdf", { type: "application/pdf" });
  const files = [pdf];

  // Si el navegador tiene soporte para recursos compartidos
  if (navigator.canShare({ files })) await navigator.share({ files });
};
</script>