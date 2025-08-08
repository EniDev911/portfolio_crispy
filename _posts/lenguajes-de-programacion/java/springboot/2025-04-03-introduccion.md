---
title: "Spring Boot🍃 : Introducción"
icon: "fa fa-java"
categories: [Java, "Spring Boot"]
image:
    path: posters/spring-boot-introduccion.webp
    lqip: data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQBACdASoUAAsAPpE4l0eloyIhMAgAsBIJZQAdoARCYv89u+Cv7Mi8rwzr4AAA/vkUTWLkafrfnHulpzDXVM0c1BbVctW6U07isALd6u2NC6xuSNt7d8LxfdzYV/LP7iwvS3Jbnyveut7h6aLJTWxN/pBV2f/jDmN5MNq7GAA=
permalink: /springboot/introduccion
---

### ¿Qué es Spring Boot y por qué es tan utilizado?

Spring Boot es una herramienta del ecosistema de Spring que facilita enormemente la creación de aplicaciones Java al eliminar la complejidad de configuración inicial y ofrecer soluciones predefinidas para tareas comunes. Esto permite centrarse directamente en el desarrollo de la lógica de negocio.

Una características útil de Spring Boot es que ofrece dependencias de "inicio" que ayudan a simplificar la configuración de compilación para que pueda crear rápidamente aplicaciones Spring de nivel de producción.

> En resumen, __Spring Boot simplifica la creación de aplicaciones independientes utilizando el framework Spring al crear automáticamente configuraciones repetitivas__ para iniciar una aplicación.
{: .prompt-love }

### ¿Cómo funciona Spring Boot?

Piénsalo como un inicializador de proyectos, si vas a desarrollar aplicaciones Spring, como un backends REST, microservicios para un sitio web, entre otras cosas.

Spring Boot permite crear __aplicaciones ejecutables__ que incluyen un servidor web embebido. Esto significa que no necesitas desplegar tu aplicación en un servidor externo ya que viene integrado.

```java
@SpringBootApplication
public class MiAplicacionApplication {
    public static void main(String[] args) {
        SpringApplication.run(MiAplicacionApplication.class, args);
    }
}
```
{:file="MiAplicacionApplication.java" .nolineno }

### Starter para simplificar dependencias

Los __Spring Boot Starters__ son descriptores de dependencias que agrupan las librerías necesarias para funcionalidades específicas. En lugar de gestionar múltiples dependencias individuales, puedes incluir un starter que se encarga de todo.

__Ejemplo de starter para aplicaciones web__:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
{:file="pom.xml" .nolineno }

Este starter incluye automáticamente Spring MVC, Tomcat embebido y otras dependencias relacionadas con el desarrollo web.


### Requisitos del sistema

Para trabajar con Spring Boot necesitas tener instalado __Java Development Kit (JDK)__ versión 17 o superior, aprovechando las características modernas del lenguaje.

### Herramientas de construcción

Spring Boot es compatible con las principales herramientas de construcción (_builders_) de Java.

__Maven__ es la opción más común y utiliza un archivo `pom.xml` para gestionar dependencias:

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.0</version>
    <relativePath/>
</parent>
```
{: file="pom.xml" .nolineno }

__Gradle__ ofrece una sintaxis más concisa y utiliza archivos `build.gradle`:

```js
plugins {
    id 'org.springframework.boot' version '3.5.0'
    id 'io.spring.dependency-management' version '1.1.0'
    id 'java'
}
```
{: file="build.gradle" }

### Creación de proyectos

Para generar proyectos Spring Boot, puedes usar la herramienta oficial [Spring Boot Initializr](https://start.spring.io/){:target='_blank'}. Se trata de un formulario web fácil de usar que puedes rellenar con información básica sobre tu proyecto. Ejemplo:

![spring initializr](springboot/springboot-initializr-1-light.webp){: .light }
![spring initializr](springboot/springboot-initializr-1-dark.webp){: .dark }

Los __IDEs modernos__ como IntelliJ IDEA, Eclipse o Visual Studio Code incluyen integración directa con Spring Initializr, permitiendo crear proyectos desde el propio entorno de desarrollo.

### Estructura básica de un proyecto Spring Boot

Un proyecto típico de Spring Boot sigue la __estructura estándar de Maven__:

```
src/
├── main/
│   ├── java/
│   │   └── com/ejemplo/aplicacion/
│   │       └── AplicacionApplication.java
│   └── resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
└── test/
    └── java/
```
{: .noheader .fit-content }

La estructura estándar incluye:

- `src/main/java`: Contiene el código fuente principal del proyecto.
- `src/main/resources`: Archivos de configuración y recursos estáticos.
- `src/test/java`: Pruebas unitarias e integradas.

La clase principal debe estar con una __anotación__ especial:

`@SpringBootApplication`, que combina tres anotaciones esenciales:

- `@Configuration`: Indica que la clase puede contener definiciones de beans
- `@EnableAutoConfiguration`: Habilita la configuración automática de Spring Boot
- `@ComponentScan`: Escanea componentes en el paquete actual y subpaquetes

> Las __anotaciones__ son _metadatos_ que se agregan al código usando el símbolo `@` y sirven para dar instrucciones adicionales al compilador, a las herramientas o al propio framework
{: .prompt-info }

## Configuración y perfiles

Spring Boot busca configuración en varios formatos y ubicaciones. Los __archivos de propiedades__ son la forma más directa de configurar la aplicación.

### Archivos de configuración

Los __archivos de propiedades__, permiten personalizar el comportamiento de la aplicación. Los archivos `application.properties` o `application.yml` permite modificar configuraciones sin cambiar código. Ejemplo:

```bash
server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.show-sql=true
```
{: file="application.properties" }

### Perfiles de configuración

Los __perfiles__ permiten tener diferentes configuraciones para distintos entornos. Puedes crear archivos específicos como `application-dev.properties` o `application-production.properties`.

__Ejemplo para un perfil de desarrollo__:

```bash
spring.datasource.url=jdbc:h2:mem:devdb
spring.jpa.show-sql=true
```
{:file="application-dev.properties"}

__Ejemplo para un perfil de producción__:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/proddb
spring.jpa.show-sql=false
```
{:file="application-production.properties"}

Para activar un perfil específico, se utiliza la propiedad `spring.profiles.active`:

```bash
spring.profiles.active=dev
```
{:file="application.properties"}

## Servidor embebido y despliegue

Spring Boot incluye __servidores web embebidos__ que simplifican enormemente el despliegue. Por defecto utiliza Apache Tomcat, pero puedes cambiarlo por Jetty o Undertow según tus necesidades.

La aplicación se ejecuta como un __JAR ejecutable__ que contiene todas las dependencias necesarias:

```terminal
java -jar mi-aplicacion-1.0.0.jar
```

### Separación por capas

Para mantener un proyecto ordenado es fundamental separarlo en capas:

- __Controller__: Gestiona solicitudes HTTP.
- __Service__: Contiene lógica de negocio.
- __Repository__: Interactúa con la base de datos.
- __Model/Entity__: Representa los datos y estructuras principales.

### Organización modular

Organiza cada capa en subpaquetes claros, por ejemplo:

```
com.ejemplo.app
├── controller 
├── service
├── repository
└── model
```
{: .noheader .fit-content }

### Elecciones de dependencias esenciales

Cuando creas un proyecto con [Spring Initializr](https://start.spring.io/){:target='_blank'}, puedes agregar las dependencias desde el inicio para que se agreguen a nuestro archivo de configuración (`pom.xml` si usas Maven o `build.gradle` si usas Gradle).

Las dependencias mínimas para comenzar con un proyecto Spring Boot. Las esenciales suelen ser:

- __Spring Web__: proporciona las herramientas necesarias para construir aplicaciones web y servicios RESTful en Java.
- __Spring Data JPA__: este módulo simplifica enormemente el acceso a datos, especialmente al trabajar con bases de datos relacionales.
- __Spring Boot DevTools__: mejora la experiencia de desarrollo en Spring Boot, principalmente a través de reinicios automáticos de la aplicación al detectar cambios en el código y la recarga en vivo (LiveReload).

![add dependencies](springboot/springboot-initializr-dependencies-light.webp){:.light}
![add dependencies](springboot/springboot-initializr-dependencies-dark.webp){:.dark}

{% include circle-line.html %}

Si olvidate alguna, la puedes añadir manualmente al `pom.xml`

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```
{:file="pom.xml" .nolineno }

Luego guardas los cambios y Maven las descarga automáticamente. 