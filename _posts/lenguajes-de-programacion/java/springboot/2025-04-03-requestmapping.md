---
title: "Anotación @RequestMapping"
icon: "springboot"
categories: [Java, "Spring Boot"]
---

La anotación `@RequestMapping` en Spring MVC sirve para conectar las peticiones web con los métodos de los controladores. Esto quiere decir que, le dice al framework qué ruta o URL debe ser manejada por un método específico.

Para que se entienda bien cómo implementar `@RequestMapping` en un controlador de Spring, te lo explico de la siguiente manera:

Imagina que tienes __una aplicación que necesita mostrar una lista de productos__. Puedes usar `@RequestMapping` para especificar que, cuando el usuario acceda a la ruta `/productos`, un método será responsable de manejar esa solicitud.

### Ejemplo Básico

```java
@Controller
@RequestMapping("/productos")
public class ProductController {
    @RequestMapping("/lista")
    public String listarProductos(Model modelo) {
        modelo.addAttribute("productos", productoService.obtenerTodos());
        return "listaProductos";
    }
}
```
{: .nolineno }

Como puedes observar, en este ejemplo el método `listarProductos()`