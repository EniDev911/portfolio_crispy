---
title: "Atributos: Atajos de teclado (accesskey)"
author: enidev911
categories: [Desarrollo Web, HTML]
tags: [desarrollo web, HTML]
---

En __HTML__ es posible añadir el atributo __accesskey__ para indicar un atajo de teclado que puede pulsar el usuario para activar ese elemento.

En el siguiente ejemplo, tenemos 4 elementos: dos campos de texto, un enlace y un botón. Cada uno de ellos tiene su atributo __accesskey__ para cuando el usuario pulse <kbd>ALT</kbd> + <kbd>tecla</kbd>, se active ese elemento:

```html
<form>
  <!-- Campo de texto -->
  <input accesskey="N" placeholder="Campo 1 (ALT+N)" />
  <!-- Campo de texto -->
  <input accesskey="A" placeholder="Campo 2 (ALT+A)" />
  <!-- Enlace HTML -->
  <a accesskey="L" href="#">Enlace (ALT+L)</a>
  <!-- Botón HTML -->
  <button accesskey="B">Botón (ALT+B)</button>
</form>
```
{: .nolineno }

De esta forma, si pulsamos <kbd>ALT</kbd> + <kbd>N</kbd>, se colocará el foco en el primer campo de texto, si pulsas <kbd>ALT</kbd> + <kbd>L</kbd> será como si hubieras pulsado el enlace con el mouse y si pulsas <kbd>ALT</kbd> + <kbd>B</kbd> se pulsará el botón.

Sin embargo, una de las desventajas de este sistema, es que no está demasiado unificado entre navegadores y sistemas. Por ejemplo, si establecemos un atajo con la tecla <kbd>A</kbd>, es decir, con el atributo __accesskey__, tendríamos que pulsar las siguientes combinaciones de teclas:

|Navegador|Plataforma Windows|Plataforma Linux|Plataforma Mac|
|:--------|:-----------------|:---------------|:-------------|
|__Chrome__|<kbd>ALT</kbd> + <kbd>A</kbd>|<kbd>ALT</kbd> + <kbd>A</kbd>|<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>A</kbd>|
|__Firefox__|<kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>A</kbd>|<kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <kbd>A</kbd>|<kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>A</kbd>|
|__Safari__|No aplicable|No aplicable|<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>A</kbd>|
|__Opera__|<kbd>ALT</kbd> + <kbd>A</kbd>|<kbd>ALT</kbd> + <kbd>A</kbd>|<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>A</kbd>|

> Esto hace que la combinación de teclas, para un usuario poco familiarizado con el proceso, sumada a la incertidumbre de no saber qué navegador se va a utilizar, haga que este procedimiento resulte poco práctico.
{: .prompt-warning }