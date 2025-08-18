---
title: "Rest Controller"
categories: [Java, "Spring Boot"]
icon: "springboot"
---


Un controlador REST es una clase que maneja solicitudes HTTP y produce respuestas en formato __JSON__ u otro formato.

### Analogía equivalente a un controlador REST

Imagina que estás en un restaurante tradicional:

- Tú (el cliente) haces un pedido (una solicitud HTTP).
- El mesero (el `@RestController`) lleva la solicitud a la cocina.
- Cocina (la capa de servicio) prepara el pedido.
- El mesero devuelve el pedido (respuesta JSON).

> A diferencia de un controlador tradicional, no hay vistas (HTML) como respuestas. Es decir todo para llevar rápido y en formato JSON.
{: .prompt-info }


En Spring Boot, `@RestController` es una anotación especializada que combina dos funcionalidades fundamentales:

```
@RestController = @Controller + @ResponseBody
```
{: .noheader }

> - `@Controller` convierte una clase en un componente de Spring que puede manejar peticiones HTTP.
> - `@ResponseBody`le dice a Spring que los datos devueltos por los métodos no deben interpretarse como vistas (HTML o JSP), sino como datos __JSON__ (u otro formato) que deben ser enviados directamente como respuesta.  
>
> Por eso, un `@RestController`es una clase que recibe peticiones HTTP y responde con datos, no con vistas.
{: .prompt-info }

A continuación, puedes observar un ejemplo básico, de una clase con la anotación `@RestController`:

```java
package com.ejemplo.demo.controlador;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class SaludoController {
	
	@GetMapping("/saludo")
	public String saludar() {
		return "¡Hola, mundo!";
  }
}
```
{: file="SaludoController.java"}

### ¿Para qué sirve un Controlador Rest?

Se usa para construir API RESTful, es decir, servicios web que exponen datos y operaciones a través del protocolo HTTP. Estas APIs son consumidas por:

- Aplicaciones front-end (Angular, React, Vue)
- Aplicaciones móviles
- Otras APIs (Microservicios, Integración externas)


### ¿Qué más puede devolver `@RestController`?

Aquí sucede algo interesante. Un controlador REST no solo devuelve datos: __también estructura la respuesta HTTP completa__ (`status`, `headers`y `body`). Veamos los tipos comunes de retorno:

```java
@GetMapping("/mensaje")
public String mensaje() {
    return "Hola desde Spring Boot";
}
```
{: .nolineno }

> Internamente, Spring usa `StringHttpMessageConverte` convierte el `String` en una respuesta de tipo `text/plain`.
{: .prompt-info }

```java
@GetMapping("/usuario")
public Usuario obtenerUsuario() {
    return new Usuario("Marco", "mcherrera@example.com");
}
```
{: .nolineno }

```json
{
  "nombre": "Marco",
  "email": "mcherrera@example.com"
}
```
{: .nolineno .noheader .fit-content }

> Internamente, Spring usa `MappingJackson2HttpMessageConverter` para convertir el objeto en un JSON.
{: .prompt-info }

Devolver una lista de objetos (que serán convertidos):

```java
@GetMapping("/usuarios")
public List<Usuario> listarUsuarios() {
    return List.of(new Usuario("Marco", "mcherrera@example.com"), new Usuario("Luis", "luis@example.com"));
}
```
{: .nolineno }

## Personalizar las respuestas

En el desarrollo de API REST con Spring Boot, es fundamental gestionar adecuadamente las respuestas HTTP que se envían al cliente.

Aquí es donde entra en juego `ResponseEntity` y `ResponseStatusException`, dos herramientas esenciales para controlar el contenido como el estado de las respuestas.

`ResponseEntity` es una clase genérica de Spring Framework que representa una toda la respuesta HTTP, incluyendo el código de estado, las cabeceras y el cuerpo. Al utilizar `ResponseEntity`, el desarrollador tiene un control completo sobre lo que se devuelve al cliente, lo que permite adaptar la respuesta a las necesidades específicas de cada situación.

### Uso de `ResponseEntity.ok(...)`

Por ejemplo, para devolver una respuesta con un código de estado 200:

```java
@GetMapping("/usuarios/{id}")
public ResponseEntity<Usuario> obtenerUsuario(@PathVariable Long id) {
	var usuario = servicioUsuario.buscarPorId(id);
	if (usuario.isPresent()) {
		return ResponseEntity.ok(usuario.get());
  } else {
		return ResponseEntity.notFound().build();
  }
}
```
{: .nolineno }

> En este ejemplo, se utiliza el método estático `ok()` de `ResponseEntity` para construir un respuesta exitosa con estado `200`. Si el usuario no existe, se devuelve una respuesta con el estado `404 Not Found` utilizando `notFound().build()`.
{: .prompt-info }

### Uso de `ResponseEntity.create(...)`

Cuando en una API REST creas un nuevo recurso (por ejemplo, un nuevo, producto o pedido), lo ideal es responder con el código `201 Created` y establecer la ubicación (`Location`) del nuevo recurso en la cabecera.

`ResponseEntity` nos permite agregar cabeceras adicionales a la respuesta:

```java
@PostMapping("/usuarios")
public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario nuevoUsuario) {
	var usuarioCreado = servicioUsuario.guardar(nuevoUsuario);
	return ResponseEntity
		.created(URI.create("/usuarios/" + usuarioCreado.getId()))
		.header("Custom-Header", "CreadoCorrectamente")
		.body(usuarioCreado);
}
```
{: .nolineno }

Aquí, `created()` se utiliza para indicar que se ha creado un nuevo recurso, estableciendo la cabecera __Location__ con la URI del recurso creado. También se añade una cabecera personalizada `"Custon-Header"` para ilustrar cómo se pueden incluir cabeceras adicionales.

### ¿Y si falla alguna operación?

Por otro lado, `ResponseStatusException` es una excepción que permite indicar un código de estado HTTP personalizado. Por ejemplo:

```java
@GetMapping("/{id}")
public Producto obtener(@PathVariable Long id) {
    return productoService.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado"));
}
```
{: .nolineno }