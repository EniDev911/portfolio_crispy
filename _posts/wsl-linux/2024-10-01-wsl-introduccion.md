---
title: "WSL 🐧 : Introducción"
author: enidev911
categories: [Sistemas Operativos, WSL]
tags: [Sistemas Operativos]
---

## Introducción a WSL: Potencia Linux en Windows

### ¿Qué es WSL?

WSL, o Windows Subsystem for Linux, es una característica de Windows que permite ejecutar un entorno Linux directamente en Windows, sin necesidad de una máquina virtual o un arranque dual. Esto significa que puedes utilizar herramientas y aplicaciones de Linux junto con aplicaciones de Windows, todo desde la misma interfaz.

### ¿Por qué Usar WSL?

1. **Desarrollo Simplificado**: Si eres un desarrollador que trabaja en aplicaciones web o software que utiliza herramientas de Linux, WSL te permite acceder a esas herramientas sin salir de Windows.
  
2. **Sin Virtualización**: A diferencia de las máquinas virtuales, WSL tiene un rendimiento casi nativo, lo que significa que puedes ejecutar aplicaciones de Linux rápidamente y sin las penalizaciones de rendimiento.

3. **Acceso a Herramientas de Línea de Comandos**: WSL te da acceso a potentes herramientas de línea de comandos de Linux, como `bash`, `git`, `ssh` y muchas más, facilitando tareas de desarrollo y administración.

### Instalación de WSL

Instalar WSL es un proceso sencillo. Aquí vamos paso a paso:

#### Activar WSL

Abre PowerShell como administrador y ejecuta el siguiente comando:

```terminal
wsl --install
```

Esto instalará la última versión de WSL y la distribución de Linux predeterminada (normalmente Ubuntu). Si ya se encuentra instalada nos muestra las distribuciones disponibles:

![comando de instalación wsl](/assets/img/wsl/comando-instalacion-wsl-dark.png){: .dark }
![comando de instalación wsl](/assets/img/wsl/comando-instalacion-wsl-light.png){: .light }

#### Elegir una Distribución de Linux

Puedes instalar diferentes distribuciones de Linux. Si quieres elegir una distribución específica, la forma más sencilla es abrir Microsoft Store y buscar "Linux". Allí encontraremos opciones como Ubuntu, Debian y Kali Linux. A continuación un ejemplo para instalar Debian desde la Terminal de Windows:

```terminal
wsl --install -d Debian
```

![comando de instalación wsl](/assets/img/wsl/instalacion-wsl-debian-dark.png){: .dark }


#### Configurar tu Distribución

Una vez instalada, abre la distribución desde el menú de inicio. Se te pedirá que configures un nombre de usuario y una contraseña.

### Usando WSL

Una vez que hayas instalado y configurado WSL, puedes comenzar a usarlo:

- **Abrir el Terminal de Linux**: Simplemente busca la distribución de Linux en el menú de inicio.
- **Comandos Básicos**: Puedes utilizar comandos comunes de Linux, como `ls`, `cd`, `mkdir`, `git`, etc.

### Recursos Adicionales

Para aprender más sobre WSL y cómo aprovecharlo al máximo, considera los siguientes recursos:

- [Documentación Oficial de WSL](https://docs.microsoft.com/en-us/windows/wsl/)
- [Foros y Comunidades](https://stackoverflow.com/questions/tagged/wsl)

### Conclusión

WSL es una herramienta poderosa que permite a los usuarios de Windows disfrutar de las ventajas de un entorno Linux sin complicaciones. Ya seas un desarrollador, un administrador de sistemas o simplemente un entusiasta de la tecnología, WSL te ofrece un mundo de posibilidades. ¡Empieza a explorar y potencia tu flujo de trabajo!
