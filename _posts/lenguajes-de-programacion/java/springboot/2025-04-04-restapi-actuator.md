---
title: "Spring Boot 🍃 : Actuator REST API"
categories: [Java, "Spring Boot"]
---

En esencia, Actuator aporta funciones listas para producción a nuestra aplicación. Monitorea nuestra aplicación, recopila métricas, permite conocer el estado de nuestra base de datos, entre otras cosas.

El principal beneficio de esta librería es que podemos obtener herramientas a nivel de producción sin tener que implementar estas funciones nosotros mismos.

El __actuator__ expone principalmente __información operativa sobre la aplicación en ejecución__ (estado, métricas, información, etc). Utiliza _endpoints_ HTTP para permitirnos interactuar con él.

Una vez que esta dependencia se habilita a través de nuestra configuración, disponemos de varios endpoint listos para usar. Como la mayoría de los módulos de Spring, podemos configurarla o ampliarla fácilmente de diversas maneras.

## Primeros pasos

### 1. Agregar la dependencias

Necesitamos agregar la dependencia `spring-boot-actuator` a nuestro administrador de paquetes para habilitar Spring Boot Actuator.

En Maven:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```
{:file="pom.xml" .nolineno }

> Tenga en cuenta que esto sigue siendo válido independientemente de la versión de Spring Boot, ya que las versiones se especifican en la lista de materiales (BOM) de Spring Boot.
{:.prompt-info}

### 2. Habilitar endpoint de Actuator

De forma predeterminada, solo de habilitan algunos endpoints. Puedes habilitar enpoints adicionales en el archivo de configuración:

```yml
management:
  endpoints:
    web:
      exposure:
        include: "*" # esto habilita todos los endpoints
  endpoint:
    health:
      show-details: always # muestra la información del estado
```
{:file="application.yml"}


### 3. Explorar endpoints de Actuator

__Endpoint health__
: proporciona información sobre el estado de la aplicación:  
  `GET http://localhost:8080/actuator/health`

```json
{
   "status":"UP",
   "components":{
      "diskSpace":{
         "status":"UP",
         "details":{
            "total":226106015744,
            "free":221147168768,
            "threshold":10485760,
            "path":"/home/mcherrera/workspace/springboot/demo-actuator/.",
            "exists":true
         }
      },
      "ping":{
         "status":"UP"
      },
      "ssl":{
         "status":"UP",
         "details":{
            "validChains":[
               
            ],
            "invalidChains":[
               
            ]
         }
      }
   }
}
```
{: .nolineno .noheader }

__Enpoint de métricas__
: Proporciona varias métricas relacionadas con la aplicación:  
  `GET: http://localhost:8080/actuator/metrics`

```json
{
  "names": [
    "jvm.memory.used",
    "jvm.gc.pause",
    "system.cpu.usage",
    "system.memory.usage",
    "http.server.requests"
  ]
}
```
{: .nolineno .noheader }

__Para obtener detalles de una métrica específica__:
: `GET http://localhost:8080/actuator/metrics/jvm.memory.used`

```json
{
  "name": "jvm.memory.used",
  "description": "The amount of used memory",
  "baseUnit": "bytes",
  "measurements": [
    {
      "statistic": "VALUE",
      "value": 5.1234567E7
    }
  ],
  "availableTags": [
    {
      "tag": "area",
      "values": [
        "heap",
        "nonheap"
      ]
    },
    {
      "tag": "id",
      "values": [
        "PS Eden Space",
        "PS Survivor Space",
        "PS Old Gen",
        "Metaspace",
        "Compressed Class Space"
      ]
    }
  ]
}
```
{: .noheader .nolineno }

__Endpoint del entorno__
: proporciona información sobre las propiedades del entorno:  
  `GET http://localhost:8080/actuator/env`

```json
{
  "activeProfiles": [],
  "propertySources": [
    {
      "name": "systemProperties",
      "properties": {
        "java.runtime.name": {
          "value": "Java(TM) SE Runtime Environment"
        },
        "java.vm.version": {
          "value": "25.181-b13"
        }
      }
    },
    {
      "name": "systemEnvironment",
      "properties": {
        "PATH": {
          "value": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
        },
        "HOME": {
          "value": "/root"
        }
      }
    }
  ]
}
```
{: .nolineno .noheader }

__Enpoint de info__
: Proporciona información sonbre la aplicación:  
  `GET http://localhost:8080/actuator/info`  
  Para personalizar la información, agrega propiedades en el archivo de configuración:  

```yml
management:
  info:
    env:
      enabled: true
info:
  app:
    name: "Mi Aplicación de Spring Boot"
    description: "Esto es un ejemplo demostrativo de Spring Boot con Actuator"
    version: 1.0.0
```
{: .nolineno file="application.yml" }

## Protección de endpoints

De forma predeterminada, todos los endpoints del Actuator son accesible sin autenticación. Para proteger estos endpoints, podemos configurar a nuestro amigo [Spring Security](https://spring.io/projects/spring-security){:target='_blank'}.

### Agregar la dependencia

Al igual que como lo hicimos con Actuator, añade la dependencia de Spring Security al `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
{: .nolineno file="pom.xml"}

### Restringir el acceso

Ahora, actualiza el archivo de configuración:

```yml
management:
  endpoints:
    web:
      exposure:
        include: "*"
  endpoint:
    health:
      show-details: always

spring:
  security:
    user:
      name: admin  # por defecto
      password: admin  # por defecto

management:
  endpoints:
    web:
      exposure:
        include: "*"
  endpoint:
    health:
      show-details: always
  security:
    enabled: true
    roles: ACTUATOR
```
{: .nolineno file="application.yml"}

Por último, crea una clase de configuración para configurar la seguridad del endpoint:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/actuator/**").hasRole("ACTUATOR")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}
```
{: file="config/SecurityConfig.java" }

Con esta configuración, solo los usuarios autenticados con el rol `ACTUATOR` pueden acceder a los endpoints.

### Definir el rol Actuator

