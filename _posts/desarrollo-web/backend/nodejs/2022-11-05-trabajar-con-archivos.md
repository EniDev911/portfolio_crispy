---
title: "Node.js Trabajar con archivos"
---


### fs accessSync

Este módulo comprueba si un archivo es accesible si no lo es, es decir, si no exisrem lanzará una excepción:

```js
function fileExists(path) {
	try {
		if (fs.accessSync(path)) {
			// Si existe
		}
	} catch(err) {
		return console.error(err.message);
	}
}
```
{: .nolineno }

La solución anterior es válida, pero ¿Qué pasaría si hay un directorio y un archivo con el mismo nombre?. Lo que pasaría es que no lanzaría ninguna excepción y si olvidamos esto, nos puede causar un dolor de cabeza.

En esos casos, una solución más viable sería `statSync`, esta función te permite saber si el archivo encontrado es un directorio o un archivo:

```js
function fileExists(path) {
	try {
		return fs.statSync(path).isFile();
	} catch (e) {
		return false;
	}
}
```
{: .nolineno }

