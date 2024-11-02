---
title: "WSL 🐧 : Instalación de Nvim y configurar Lazy.nvim"
author: enidev911
categories: [Sistemas Operativos, WSL]
tags: [Sistemas Operativos, Editores]
---

### Instalación de Neovim a través de Homebrew en WSL Debian

Neovim es un editor de texto altamente configurable y potente, ideal para desarrolladores experimentados. Utilizar Homebrew para instalar Neovim es fundamental ya que nos proporciona una forma sencilla de gestionar las versiones y las dependencias. Homebrew es un gestor de paquetes popular en macOS que también está disponible para Linux y por ende también en WSL.

#### 1. Instalar Homebrew

Para instalar Homebrew, abrimos una nueva terminal y ejecutamos el siguiente comando para asegurarnos de tener los paquetes necesarios:

```terminal
sudo apt update
sudo apt install build-essential curl file git
```

Ahora podemos instalar con seguridad Homebrew:

```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Al terminar la instalación la terminal nos muestra los pasos a seguir:

![instalacion homebrew](/assets/img/wsl/install-homebrew-dark.png){: .dark }
![instalacion homebrew](/assets/img/wsl/install-homebrew-light.png){: .light }


#### 2. Configurar Homebrew

Una vez que Homebrew está instalado, tenemos que añadirlo al **PATH**. Puedes ejecutar el siguiente comando para escribir en el archivo `~/.bashrc` o `~/.zshrc`, dependiendo del shell utilizado:

```terminal
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

En este punto ya tenemos Homebrew en el **path**, podemos verificarlo viendo la versión con el siguiente comando:

```terminal
brew -v
```

#### 3. Instalar Neovim

En la terminal ahora con el siguiente comando, procedemos a instalar nvim:

```terminal
brew install neovim
```

#### 4. Instalación de Lazy.nvim

Lazy.nvim es un gestor de plugins que permite instalar y gestionar los complementos de Neovim de manera eficiente y rápida.

Con Git clonamos el repositorio de Lazy.nvim en el directorio adecuado:

```terminal
git clone https://github.com/folke/lazy.nvim.git ~/.config/nvim/lua/lazy
```

### Configurar Neovim para usar Lazy.nvim

EL archivo `init.lua` es ahora nuestro archivo de configuración que utilizará Neovim, que permite personalizar el editor, como ajustes de apariencia, comportamiento, mapeos de teclas, etc.

#### Mapeos de tecla

Los mapeos nos ayudan a recordar combinaciones útiles para funciones importantes más fácilmente.

Ejemplo Básico de Mápeos

```lua
vim.api.nvim_set_keymap('n', '<C-h>', '<C-w>h', { noremap = true, silent = true }) -- Moverse a la ventana de la izquierda
```

#### Configurar Plugins

Para agregar los íconos que a todos nos gustan, abrimos el archivo `init.lua`:

```lua
require('lazy').setup({
  { 'nvim-tree/nvim-web-devicons'}, -- Ejemplo de plugin
})
```
{: .nolineno }
