---
title: "Spring Security"
---

Dada la importancia de la seguridad y la popularidad de Spring Security, muchos desarrolladores Java están aprendiendo este útil framework, pero no es tan fácil. Proteger una aplicación con __OAuth__, __OICD__ y __JWT__ puede parecer una tarea abrumadora.

Necesitas dedicar mucho tiempo a comprender la seguridad y cómo implementarla con el framework.

Aprendí Spring Security por mi cuenta y me llevó más tiempo del que esperaba.

## Onion Architecture

La arquitectura _onion architecture_. Permite separar responsabilidades entres grandes capas:

|Capa|Descripció|
|:---|:---------|
|__Domain__|Entidades, interfaces de los servicios y excepciones de dominio.|
|__Application__|Implementación de servicios de la aplicación, mappers y DTOs.|
|__Infrastructure__|Controladores, filtros, configuración de la aplicación, interfaz del repositorio JPA e implementación del repositorio.|

A continuación, puedes observar la estructura:


```
auth
├── application
│   ├── AuthCookieConstants.java
│   ├── mappers
│   │   └── AuthMapper.java
│   └── services
│       ├── AuthServiceImpl.java
│       └── TokenServiceImpl.java
├── domain
│   ├── AuthException.java
│   ├── Role.java
│   ├── services
│   │   ├── AuthService.java
│   │   └── TokenService.java
│   ├── User.java
│   └── UserRepository.java
└── infrastructure
    ├── config
    │   ├── EncoderConfig.java
    │   └── SecurityConfig.java
    ├── controllers
    │   └── AuthController.java
    ├── dtos
    │   ├── CreateUserDto.java
    │   ├── LoginRequestDTO.java
    │   └── UserResponseDTO.java
    ├── filters
    │   ├── JwtAuthenticationFilter.java
    └── persistance
        └── PostgresUserRepository.java
```
{: .noheader .fit-content }

El tipo de inyección de dependencias que he usado es mediante constructor. Es la mejor forma de inyectar dependencias en Spring y la forma recomendada en la documentación oficial.

> Si sueles usar inyección de dependencias mediante campos, te recomiendo que lo cambies a inyección de dependencias mediante constructor.
{: .prompt-info }

### Lombok

Para reducir el código repetitivo, podemos usar la biblioteca Lombok que nos permite reducir el código visible mediante anotaciones. En este caso, las anotaciones más comunes son: `@Getter`, `@Setter`, `@NoArgsConstructor`, `@AllArgsConstructor` y `@Builder`.


### Entidades de dominio anotadas con JPA

Las entidades de dominio son clases que representan cosas del problema que resolvemos. En este caso una entidad sería `User`.

Estas clases llevan las anotaciones `@Entity` y `@Table` para indicar que son también entidades JPA.

Anotar entidades de dominio con anotaciones de un framework puede ser considerado mala práctica. EL término se llama __contaminación de dominio__. He decidido hacerlo para simplificar el código y no tener que crear _mappers_ innecesariamente que añaden complejidad.


La clase `WebSecurityConfig` es la __configuración principal de Spring Security__. Se encarga de configurar la seguridad de la aplicación y de definir qué rutas son públicas y cuáles no.

### ¿Por qué UserDetails?

`UserDetails` es una interfaz que representa a un usuario en Spring Security y es usada por un servicio llamado `UserDetailsService`.

Esto es necesario para que Spring Security pueda autenticar a un usuario sin implementar código adicional.

### DTOs

Los DTOs (_Data Transfer Objects_) son objetos que se usan para transferir datos entre capas. En este caso, se usan para transferir datos entre la capa de insfraestructura y la capa de aplicación.


### AuthMapper

El `AuthMapper` es una clase que transforma DTOs a entidades de dominio o al revés. Es una buena práctica tener un mapper para únicamente transformar datos entre capas.

```java
package com.auth.application.mappers;

public class AuthMapper {
	private AuthMapper() {
		throw new UnsupportedOperationException("This class should never be instantiated");
	}

	public static User fromDto(final CreateUserDto createUserDto) {
		return User.builder()
			.email(createUserDto.email())
			.firstName(createUserDto.firstName())
			.build();
	}

	public static Authentication fromDto(final LoginRequestDTO LoginRequestDTO) {
		return new UsernamePasswordAuthenticationToken(loginRequestDTO.email(), loginRequestDTO.password());
	}

	public static UserResponseDTO toDto(final User user) {
		return new UserResponseDTO(user.getId(), user.getFirstName(), user.getEmail(), user.getRole());
    }
}
```
{: file="AuthMapper.java" }