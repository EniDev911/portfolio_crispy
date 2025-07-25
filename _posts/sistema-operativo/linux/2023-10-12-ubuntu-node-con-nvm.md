---
title: "Ubuntu : Administrar versiones de Node.js con NVM"
icon: "fab fa-ubuntu"
icon_color: "#E95420"
categories: [Sistemas Operativos, Linux]
tags: [Sistemas Operativos, Ubuntu, Nodejs]
---

¿Alguna vez te pasó que un proyecto necesitaba Node.js 18 y otro todavía funcionaba con la 16? <i class="fa-solid fa-face-tired fa-shake fa-lg" style="--fa-animation-duration: 5s;"></i> No estás solo. Instalar varias versiones de Node puede ser una pesadilla... a menos que uses **NVM**.
 
Aquí te muestro cómo **instalar y usar NVM en Ubuntu** para olvidarte de ese dolor de cabeza.

##  __¿Qué es NVM?__

NVM (Node Version Manager) es una herramienta de línea de comandos que te permite **instalar, cambiar y administrar múltiples versiones de Node.js** sin complicarte la vida.


## __PASO 1: Instalar NVM en Ubuntu__

Abre una terminal <kbd>Ctrl</kbd>+<kbd>T</kbd> y ejecuta:

```terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
````

Luego, **cierra y vuelve a abrir la terminal**, o ejecuta:

```terminal
source ~/.bashrc  # O ~/.zshrc si usas Zsh
```

Verifica que NVM esté funcionando:

```terminal
nvm --version
```

## __PASO 2: Instalar una versión específica de Node.js__

Por ejemplo, para instalar Node.js 18:

```terminal
nvm install 18
```

O si necesitas la última versión LTS:

```terminal
nvm install --lts
```

## __PASO 3: Cambiar de versión cuando quieras__

Lista las versiones que tienes instaladas:

```terminal
nvm ls
```

Y para usar una versión específica:

```terminal
nvm use 18
```

¿Quieres que una versión sea la predeterminada?

```bash
nvm alias default 18
```

## __Archivo `.nvmrc` para proyectos__

Puedes crear un archivo `.nvmrc` en la raíz de tu proyecto con el número de versión deseado:

```
18
```

Luego, al entrar a ese proyecto, simplemente escribe:

```terminal
nvm use
```

¡Y listo! Carga automáticamente la versión correcta. <i class="fa-solid fa-face-laugh-wink fa-bounce fa-lg" style="--fa-animation-duration: 3s;"></i>

{% include circle-line.html %}

Con NVM, ya no necesitas andar reinstalando Node una y otra vez. Puedes trabajar en múltiples proyectos sin miedo a romper nada.

> Si usas un entorno como VSCode, asegúrate de que la terminal integrada también tenga cargado NVM (`~/.bashrc`, `~/.zshrc`, etc.).
{: .prompt-info }