---
title: "Java ♨️ : Cómo configurar Java (Setup Paso a Paso)"
author: enidev911
categories: [Java, "01. Nivel Básico"]
---

Para comenzar a programar en Java necesitas tener un __JDK__ (Java Development Kit). El JDK incluye todo lo necesario para compilar y ejecutar programas Java: el compilador `javac`, la Máquina Virtual Java (JVM), y otras herramientas útiles.

Según el sistema operativo, vamos a ir viendo el paso a paso para dejar tu entorno listo.

## __En Windows__

Para windows, necesitas descargar la versión oficial del JDK desde el sitio web de Oracle:

🔗 <https://www.oracle.com/java/technologies/javase-downloads.html>

O, si prefieres una opción __"Open Source"__ de código abierto, puedes usar __OpenJDK__:

🔗 <https://jdk.java.net/>

Selecciona la versión que necesites, por ejemplo Java 17 o Java 21 (ambas LTS).

> Se recomienda instalar una versión __LTS__ (Long-Term Support) de Java para asegurar mayor estabilidad y soporte a largo plazo en tus proyectos.
{: .prompt-tip }

### __Ejecuta el instalador__

Una vez descargado, ejecuta el `.exe` y sigue los pasos.

### __Define una variable de entorno__

Agrega una nueva variable:

- Nombre: `JAVA_HOME`
- Valor: la ruta donde se instaló Java (Ej. `C:\Program Files\Java\jdk-17`)

Edita la variable `Path` y agrega:
- `%JAVA_HOME%\bin`

## __En Linux (Ubuntu/Debian)__

En Linux específicamente en distribuciones basadas en Debian, podemos abrir una nueva terminal con <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> y luego instalar con `apt`:

```terminal
sudo apt update
sudo apt install openjdk-17-jdk
```

Para verificar que todo está correcto, ejecuta los siguientes comandos:

```terminal
java -version
javac -version
```

Como resultado, deberías obtener un mensaje de la versión del JDK y el compilador:

{% capture comprobar_instalacion %}
<span class='hl'>➜ java -version</span>
openjdk version "17.0.15" 2025-04-15
OpenJDK Runtime Environment (build 17.0.15+6-Debian-1deb12u1)
OpenJDK 64-Bit Server VM (build 17.0.15+6-Debian-1deb12u1, mixed mode, sharing)
<span class='hl'>➜ javac -version</span>
javac 17.0.15
{% endcapture %}
{% include terminal-wrapper.html content=comprobar_instalacion %}

## __Compilar y ejecutar un programa Java__

Para realizar algunas pruebas, crea un archivo llamado `HolaMundo.java` y agrega el siguiente contenido:

```java
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("¡Hola Mundo!");
    }
}
```
{: file='HolaMundo.java' }

Luego, procede a compilarlo de la siguiente manera:

```terminal
javac HolaMundo.java
```

Por último, ejecútalo de la siguiente manera:

```terminal
java HolaMundo
```