---
title: "Java ♨️ : Cómo configurar VsCode para Java "
categories: [Java, "01. Nivel Básico"]
---

En este artículo, configuraremos VSCode para un desarrollo Java óptimo. La documentación de VSCode incluye un completo [tutorial de introducción](https://code.visualstudio.com/docs/java/java-tutorial){:target='_blank' } que cubre los conceptos básicos. Te recomiendo que la consultes si eres nuevo con el desarrollo con Java mediante VSCode.

### __Extensiones para Java__

En VSCode, ve a la vista __Extensiones__ con <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> y busca:

__`Java Extension Pack` (by Microsoft)__

Este pack incluye:

- 📦 [Language Support for Java™ (by Red Hat)](https://marketplace.visualstudio.com/items?itemName=redhat.java){:target='_blank'}: Para navegación de código, autocompletado, refactorización y fragmentos de código.
- 📦 [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug){:target='_blank'}: Soporte de depuración.
- 📦 [Java Test Runner](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test){:target='_blank'}: Ejecuta y depura casos de prueba JUnit/TestNG.
- 📦 [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven){:target='_blank'}: Soporte de Maven para el andamiaje del proyecto y la ejecución de tareas/objetivos de Maven.
- 📦 [Project Manager for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency){:target='_blank'}: Habilita una vista de explorador de proyectos, facilitando la creación de paquetes, clases y dependencias de bibliotecas.
- 📦 [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode){:target='_blank'}: Desarrollo asistido.

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
