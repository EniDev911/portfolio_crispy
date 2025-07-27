---
title: "Java : HashMap"
categories: [Java, "01. Nivel Básico"]
---

Un `HashMap` es una implementación de la interfaz `Map` en Java que permite almacenar elementos en pares __clave-valor__. Internamente utiliza una tabla para garantizar una búsqueda y acceso muy eficiente. Internamente utiliza una tabla hash para garantizar una búsqueda y acceso muy eficiente, generalmente en tiempo constante.

Para comenzar, creamos una simple clase `Producto` que usaremos pronto para almacenar objetos dentro de un `HashMap`.

```java
public class Producto {

  private String nombre;
  private String descripcion;
  private List<String> etiquetas;

  public Producto(String nombre, String descripcion, List<String> etiquetas) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.etiquetas = etiquetas;
  }

  public String getNombre() {
    return nombre;
  }

  public String getDescripcion(){
    return descripcion;
  }

  public List<String> getEtiquetas() {
    return etiquetas;
  }

  @Override
  public String toString() {
    return nombre + " - " + descripcion + " [" + String.join(", ", etiquetas) + "]";
  }
}
```
{: file="Producto.java" }

Supongamos que queremos almacenar varios productos, usando su nombre como clave en un `HashMap`:

```java
import java.util.*;

public class Inventario {
  
  public static void main(String[] args) {
    Map<String, Producto> catalogo = new HashMap<>();

    Producto p1 = new Producto("Café Premiun", "Granos seleccionados", Arrays.asList("bebida", "energia", "natural"));

    Producto p2 = new Producto("Notebook", "Laptop ultradelgada 14 pulgadas", Arrays.asList("tecnología", "portátil", "computación"));

    catalogo.put(p1.getNombre(), p1);
    catalogo.put(p2.getNombre(), p2);

    // Buscar producto por clave
    Producto buscado = catalogo.get("Café Premiun");

    // Verificar existencia
    if (catalogo.containsKey("Notebook")) {
      System.out.println("El producto 'Notebook' está en el catalogo");
    }
  }
}
```
{:file="Inventario.java"}
