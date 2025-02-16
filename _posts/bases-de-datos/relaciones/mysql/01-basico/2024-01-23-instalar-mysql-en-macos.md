---
title: "MySQL 🐬 : Instalar en macOS "
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - 01. Básico"]
tags: [Bases de Datos]
image:
    path: posters/mysql-instalacion-mac.webp
    lqip: data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACwAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJZwAAWxVRq/jfBzIAAAD+6o2TPtwDHmMtMLGqNV28JUaeMpSE+dN9rSlkweKo/zoYLWo5CQjX6hpuT9oodfcQKIAAAA==
    alt: "Cómo instalar MySQL en MacOS"
---

En este post, cubriremos la instalación de MySQL en macOS, cómo configurarlo para que funcione y cómo verificar que la instalación se haya completado correctamente.

### **Paso 1: Descargar MySQL**

Para descargar la imagen de la **versión comunitaria**, sigue estas instrucciones:

1. Dirígete a la página oficial de MySQL: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/){: target='_blank' }.
2. En la sección **MySQL Community Server**, selecciona la opción para descargar la versión de MySQL adecuada para macOS.
3. **Descarga el archivo .dmg** de la versión más reciente de la base de datos, seleccionando la versión correspondiente según tu procesador:
   - **Si tienes un procesador Intel**, selecciona la versión para **macOS 1X.XX (x86, 64-bit)**.
   - **Si tienes un procesador Apple M1 (ARM)**, selecciona la versión para **macOS 1X.XX (ARM, 64-bit)**.

![página de descargas](mysql/mysql-pagina-de-descargas-macos.webp)

### **Paso 2: Instalación del Paquete**

![instalador](mysql/mysql-installer-mac-light.webp){: .right .w-50 .light }
![instalador](mysql/mysql-installer-mac-dark.webp){: .right .w-50 .dark }
- Una vez descargado el archivo `.dmg`, haz doble clic en el archivo para montar la imagen del disco.
- Dentro de la imagen monstada, verás un instalador. Haz doble clic en el instalador para iniciar el proceso de instalación.
- Se abrirá una ventana emergente con el mensaje de "Este paquete ejecutará un programa para determinar si el software se puede instalar", presiona en **permitir** para iniciar el asistente. 

### **Paso 3: Asistente de Instalación**

El asistente de instalación, te guiará para instalar y configurar MySQL, sigue estas instrucciones:

**Aceptar la licencia**
![tipo de instalación](mysql/mysql-mac-asistente-licencia.webp)

**Seleccionar el tipo de instalación** (al instalar, te solicitará confirmar como administrador)
![tipo de instalación](mysql/mysql-mac-asistente-tipo-instalacion.webp)

**Definir la contraseña del usuario root** (al finalizar, te solicitará confirmar como administrador)
![definir password](mysql/mysql-mac-asistente-definir-password-root.webp)

> Deja el checkbox activado para que el servidor de MySQL se inicie automáticamente, sin necesidad de hacerlo manualmente después.
{: .prompt-tip }

**Finalizar el instalador**
![finalizar instalador](mysql/mysql-mac-asistente-finalizar.webp)


## **Añadir MySQL al PATH**

Para que podamos conectarnos al servidor usando el programa `mysql` desde la terminal, necesitamos agregar el directorio que contiene los binarios de MySQL a la variable `PATH`.


**1. Tenemos que abrir el archivo de configuración** `~/.bashrc` o `~/.bash_profile`:

```terminal
nano ~/.bash_profile
```

> Si tienes zsh, en vez de `~/.bashrc` remplazalo por `~/.zshrc`.
{: .prompt-info }

**2. Añadir la siguiente línea al final del archivo**:

```terminal
export PATH=$PATH:/usr/local/mysql/bin
```
{: .nolineno file='.bashrc' }

> Cambia `/usr/local/mysql/bin` y remplazalo según el destino de instalación que seleccionaste.
{: .prompt-info }
