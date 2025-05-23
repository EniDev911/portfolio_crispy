---
title: "Java ♨️ : Como funciona Java"
author: enidev911
categories: [Java, "01. Nivel Básico"]
---

Java es conocido por su lema __"Write Once, Run Anywhere"__, pero detrás de esa promesa se encuentra la pieza clave: la __Máquina Virtual de Java__ (JVM). En este artículo vamos a ver cómo funciona realmente la JVM y el rol fundamental del __compilador Just-In-Time__ (JIT) en el rendimiento de las aplicaciones Java.

## __¿Qué es la JVM?__

La __JVM__ (Java Virtual Machine) es un entorno de ejecución que permite correr programas Java (y otros lenguajes que compilan a bytecode, como Kotlin o Scala) en cualquier sistema operativo, __sin recompilar el código fuente__.

### __Responsabilidades principales de la JVM__

- Cargar clases
- Verificar bytecode
- Ejecutar bytecode
- Administrar memoria (garbage collection)

La JVM no ejecuta directamente el código fuente Java (`.java`), sino un formato intermedio llamado __bytecode__ (`.class`), que es más compacto y portátil.

## __¿Qué es el Bytecode?__

### __La JVM: el corazón del sistema__

La Java Vitual Machine (JVM) es el software que corre detrás de escena. Toma ese __bytecode__ y lo convierte en instrucciones que la computadora puede entender y ejecutar.

La JVM es lo que hace que __Java sea multiplataforma__, gracias a su lema:

> __"Write once, run anywhere"__ (Escribe una vez, ejecútalo en cualquier lugar).
{: .prompt-love }


### __¿Es Java un lenguaje lento?__

Durante mucho tiempo se pensó que Java era, porque su código pasa por esta "máquina virtual". Pero hoy en día, __Java es muy optimizado__ gracias a tecnologías como el __JIT__ (Just-In-Time Compiler), que traduce las partes más usadas del programa a lenguaje nativo _mientras se ejecuta_. Es como si tu receta empezara a adaptarse automáticamentea tu cocina para ser más rápida.

### __¿Pero no se supone que Java ya compila su código antes?___

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
