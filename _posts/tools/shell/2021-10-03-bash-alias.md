---
title: "Bash: Potencia la Terminal con Alias en Bash"
description: "Los **alias en Bash** son la clave para trabajar más rápido y sin errores"
categories: [Kit Tools, "Shell"]
---

## __¿Qué es un alias?__

Un alias es simplemente un atajo para un comando más largo o repititivo. En lugar de escribir algo tedioso, lo resumes en una palabra corta y fácil de recordar. Los alias te ahorran tiempos, evitan errores y mejoran tu productividad.

## __Definir Alias__

Para definir un nuevo alias en bash es muy sencillo. Veamos la sitaxis:

```bash
alias nombre_alias="comando_a_ejecutar"
```
{: .nolineno }

### __Alias temporales__

Un **alias temporal** solo dura hasta que cierras la terminal. Prueba cualquier tipo de alias en tu terminal o prueba lo siguiente:

```bash
alias ll='ls -lah'
```
{: .nolineno }

Ahora, cuando escribas `ll`, verás los archivos en formato detallado:

![alias ll en bash](shell/bash-alias-ll.webp){: .light }
![alias ll en bash](shell/bash-alias-ll-dark.webp){: .dark }

### __Alias permanente__

Para definir **alias permanentes** debes editar el archivo `~/.bashrc` o `~/.bash_aliases`:

```terminal
nano ~/.bash_aliases
```

Y agrega lo siguiente:

```bash
alias actualizar='sudo apt update && sudo apt upgrade -y'
```
{: .nolineno file='bash_aliases' }

Guarda y cierra el archivo (<kbd>Ctrl</kbd>, luego <kbd>Y</kbd> y <kbd>Enter</kbd>).

Para aplicar los cambios sin reiniciar la terminal, ejecuta el siguiente comando:

```terminal
source ~/.bash_aliases
```

## __Ejemplos de Alias Útiles__

📌 Atajos para comandos de GIT

```bash
alias gs='git status'  # Ver estado  
alias ga='git add .'  # Agregar todos los cambios  
alias gcmsg='git commit -m'  # Hacer commit con mensaje  
alias gp='git push'  # Subir cambios  
alias gpl='git pull'  # Descargar cambios  
alias gl='git log --oneline --graph --decorate'  # Ver historial bonito  
alias gco='git checkout'  # Cambiar de rama  
alias gb='git branch'  # Listar ramas  
alias gnew='git checkout -b'  # Crear y cambiar a nueva rama  
alias gr='git reset --hard HEAD'  # Resetear cambios (¡cuidado!)  
```
{: .nolineno file='.bash_aliases' }

📌 Atajos para comandos de DOCKER

```bash
alias dps='docker ps'  # Ver contenedores activos  
alias dpa='docker ps -a'  # Ver todos los contenedores  
alias dstop='docker stop $(docker ps -q)'  # Detener todos los contenedores  
alias drm='docker rm $(docker ps -aq)'  # Eliminar todos los contenedores  
alias dimages='docker images'  # Ver imágenes  
alias dbuild='docker build -t'  # Construir una imagen  
alias dup='docker-compose up -d'  # Levantar servicios con Docker Compose  
alias ddown='docker-compose down'  # Apagar servicios de Docker Compose  
```
{: .nolineno file='.bash_aliases' }



