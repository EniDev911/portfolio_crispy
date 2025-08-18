---
title: "Cómo funciona el entorno de Java"
author: enidev911
icon: "fa fa-java"
categories: [Java, "01. Nivel Básico"]
---

Java es conocido por su lema __"Write Once, Run Anywhere"__, pero detrás de esa promesa se encuentra la pieza clave: la __Máquina Virtual de Java__ o JVM (_Java Virtual Machine_). En este artículo vamos a ver cómo funciona realmente la JVM y el rol fundamental del __compilador Just-In-Time__ (JIT) en el rendimiento de las aplicaciones Java.

## ¿Qué es la JVM?

La __JVM__ (Java Virtual Machine) es un entorno de ejecución que permite correr programas Java (y otros lenguajes que compilan a bytecode, como Kotlin o Scala) en cualquier sistema operativo, __sin recompilar el código fuente__, es una máquina de computación abstracta que forma parte integral del __Entorno de Ejecución de Java__ ([JRE](https://es.wikipedia.org/wiki/Java_Runtime_Environment){:target='_blank'}). A diferencia de una máquina física, que ejecuta directamente el código máquina, la JVM __interpreta y ejecuta el bytecode__ de Java. Este diseño permite que las aplicaciones Java se ejecuten en cualquier dispositivo o sistema operativo que tenga una implementación de JVM.

### Responsabilidades principales de la JVM

- Cargar clases
- Verificar bytecode
- Ejecutar bytecode
- Administrar memoria (garbage collection)

La JVM no ejecuta directamente el código fuente Java (`.java`), sino un formato intermedio llamado __bytecode__ (`.class`), que es más compacto y portátil.

## ¿Qué es el Bytecode?

El __bytecode__ de Java es el resultado del proceso de compilación del código fuente de Java. Al escribir un programa Java y compilarlo, el compilador de Java (`javac`) no convierte el código directamente en código máquina. En su lugar, lo traduce a una forma intermedia conocido como bytecode. Este bytecode es un conjunto de instrucciones que no son legibles por humanos como el código Java, pero son mucho menos complejas que el código máquina.

### __Bytecode y la pila de Java__

El bytecode opera en una arquitectura basada en pilas. Esto significa que la mayoría de las operaciones de código de bytes implican insertar o extraer elementos de una pila.

Por ejemplo, veamos cómo se traduce el siguiente código de Java en Bytecode:

```java
int a = 5; 
int b = 10; 
int suma = a + b;
```
{: .nolineno }

Al compilarse, estas líneas de código Java se convierten en una serie de instrucciones en bytecode, que podrían verse de la siguiente manera al utilizar una herramienta como [`javap`](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/javap.html){:target='_blank'}:

```plaintext
0 : iconst_5 
1 : istore_1 
2 : bipush 10 
4 : istore_2 
5 : iload_1 
6 : iload_2 
7 : iadd 
8 : istore_3
```
{: .nolineno .noheader }

Esto es lo que sucede en cada caso:

1. `iconst_5` - Empuja el valor entero `5` a la pila.
2. `istore_1` - Almacena el entero superior (`5`) de la pila en la primera variable local (`a`).
3. `bipush 10` - Empuja el valor del del byte 10 a la pila.
4. `istore_2` - Almacena el entero superior (`10`) de la pila en la segunda variable local (`b`). 
5. `iload_1` y `iload_2` - Carga los enteros `a` y `b` en la pila.
6. `iadd` - Extrae los dos números enteros superiores de la pila, los suma y vuelve a colocar el resultado (`suma`) en la pila.
7. `istore_3` - Almacena el resultado de la pila en la tercera variable local (`suma`).

> __La JVM ( el corazón del sistema )__ es el software que corre detrás de escena, es lo que hace que __Java sea multiplataforma__, gracias a su lema:  __"Write once, run anywhere"__ (Escribe una vez, ejecútalo en cualquier lugar).
{: .prompt-love .mt-2 }

## __¿Qué es el compilador JIT?__

El compilador __JIT__ (Just-In-Time) es una tecnología de compilación utilizada en muchos lenguajes de programación como Java y otros más modernos como C#, y algunos entornos de ejecución de JavaScript (por ejemplo, el motor V8 de Google). Su objetivo principal es mejorar el rendimiento del código que se ejecuta en tiempo de ejecución, combinando ventajas tanto de la compilación treadicional como de la interpretación.

### __Funcionamiento de JIT__

En lugar de compilar todo el código fuente a código máquina antes de ejecutarlo (como lo haría un compilador tradicional), o interpretar línea por línea en tiempo real  (como hace un intérprete puro), el JIT hace algo intermedio:

1. __Carga del código fuente o bytecode__ (como el `.class` en Java o el IL en .NET)
2. __Interpretación inicial__: para iniciar rápidamente, algunas partes del código pueden comenzar a interpretarse.
3. __Monitoreo en tiempo de ejecución__: el JIT identifica las partes del código que se usan con más frecuencia (hot spots).
4. __Compilación Justo a Tiempo__: esas secciones críticas se compilan a código máquina nativo en el momento que se necesitan.
5. __Optimización dinámica__: puede aplicar optimizaciones basadas en el contexto real de ejecución (por ejemplo, tipos de datos usados, rutas comunes, etc.).

### __¿Es Java un lenguaje lento?__

Durante mucho tiempo se pensó que Java era, porque su código pasa por esta "máquina virtual". Pero hoy en día, __Java es muy optimizado__ gracias a tecnologías como el __JIT__ (Just-In-Time Compiler), que traduce las partes más usadas del programa a lenguaje nativo _mientras se ejecuta_. Es como si tu receta empezara a adaptarse automáticamentea tu cocina para ser más rápida.

### __¿Pero no se supone que Java ya compila su código antes?__

Sí, pero no a código nativo directamente. Repasemos el flujo principal:

- [x] Escribes código Java (`.java`)
- [x] El compilador `javac` lo convierte en __bytecode__ (`.class`)
- [x] El bytecode es __interpretado__ por la JVM.
- [x] __Aquí entre el JIT, que detecta qué partes del código se usan con más frecuencia__, y __las recopila en tiempo real__ a código nativo (el que entiende directamente tu CPU).

Como vemos, el JIT instrumenta y perfila el código durante la ejecución. Algunos factores que analiza:

- Cuáles métodos se llaman más veces
- Qué rutas de ejecución son más comunes
- Qué condiciones se repiten
- Cómo se comportan los objetos en memoria

Con eso puede hacer cosas como:

- __Inlining__: insertar un método dentro de otro para evitar llamadas innecesarias.
- __Loop unrolling__: descomponer bucles para ejecutarlos más eficientemente.
- __Eliminación de código muerto__: descartar partes que nunca se ejecutan.
