---
title: "MySQL 🐬 : Instalar en macOS "
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - 01. Básico"]
tags: [Bases de Datos]
---

Desde la página oficial descargamos la imagen de la versión comunitaria que está disponible [aquí](https://dev.mysql.com/downloads/mysql/){: target='_blank' } que contiene el instalador del paquete MySQL.

## Ejecutar el Asistente

### **Asistente de Instalación: Tipo de Instalación**

![tipo de instalación](mysql/mysql-mac-asistente-tipo-instalacion.png)

### **Asistente de Instalación: Definir Contraseña de root**

![definir password](mysql/mysql-mac-asistente-definir-password.png)

> Dejar el checkbox activado para que el servidor de MySQL se inicie automáticamente sin necesidad de hacerlo manualmente después.
{: .prompt-tip }

### **Asistente de Instalación: Finalizar el instalador**

![finalizar instalador](mysql/mysql-mac-asistente-resumen.png)

---

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
