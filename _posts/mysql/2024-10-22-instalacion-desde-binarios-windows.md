---
title: "MySQL 🐬 : Instalar y Configurar desde los Binarios en Windows"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
---

Instalar MySQL en Windows desde los binarios es una buena opción si deseamos una instalación limpia y controlada de MySQL.


#### 1. Descargar los binarios de MySQL

- Abrimos el navegador y vamos a la página oficial de descargas de MySQL: <a href="https://dev.mysql.com/downloads/" target="_blank">https://dev.mysql.com/downloads/</a>
- En la sección de **MySQL Community Server**, seleccionamos la versión de MySQL s instalar.
- Luego de seleccionar la versión según la arquitectura de nuestro equipo:
  - **Windows (x86, 64bit), ZIP archive**: Este archivo contiene los binarios sin necesidad de un instalador gráfico.
  - **Windows (x86, 32-bit), ZIP archive**: Si estás usando una versión de 32 bits de Windows.
- Clic en **Download** y luego clic en **No thank, just start my download** para evitar registrarse y comenzar la descarga directamente.

![descarga de los binarios](mysql/download-binary-mysql-light.png){: .light }
![descarga de los binarios](mysql/download-binary-mysql-dark.png){: .dark }


El [archivo de opciones](https://dev.mysql.com/doc/refman/8.4/en/option-files.html){: target='_blank'} define la configuración que se utilizará para iniciar el servidor de MySQL. Si es necesario especificarle opciones al servidor durante su inicio, esto también se puede hacerse desde la línea de comandos pero es conveniente colocarlas en un archivo.

Esto es especialmente necesario en las siguientes circuntancias:

- El directorio de instalación o de datos son diferentes de los usados por defecto. Por ejemplo:
  - 📁 C:\Program Files\MySQL\MySQL Server 8.x
  - 📁 C:\Program Files\MySQL\MySQL Server 8.x\data

- Es necesario afinar la configuración del servidor.
