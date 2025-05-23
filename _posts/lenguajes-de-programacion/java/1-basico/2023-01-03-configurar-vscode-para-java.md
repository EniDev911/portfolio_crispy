---
title: "Java ♨️ : Cómo configurar VsCode para Java "
categories: [Java, "01. Nivel Básico"]
---


### __Extensiones para Java__

En VSCode, ve a la vista __Extensiones__ con <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> y busca:

__`Java Extension Pack` (by Microsoft)__

Este pack incluye:

- Language Support for Java™ (by Red Hat)
- Debugger for Java
- Java Test Runner
- Maven for Java
- Visual Studio IntelliCode

![extension pack for java](java/extension-pack-for-java.webp)

__`Spring Boot Extension Pack`__ (by vmware)

Este pack incluye:

- Spring Boot Tools
- Spring Initializr
- Spring Boot Dashboard
- soporte para YAML, propiedades, etc.

![spring boot extension pack](java/springboot-extension-pack.webp)

## __Crea un primer proyecto Spring Boot__

Lo primero es abrir la paleta de comandos <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>:

- Escribe: `Spring Initilizr: Create a Grandle Project`
- Luego selecciona:
    - Lenguaje: `Java`
    - Versión: `17` o superior (el que tengas instalado)
    - Grupo: `com.ejemplo`
    - Artefacto: `mi-proyecto`
    - Dependencias: `Spring Web`, `Spring Boot DevTools`, etc
- VSCode te perdirá la carpeta donde guardar el proyecto.