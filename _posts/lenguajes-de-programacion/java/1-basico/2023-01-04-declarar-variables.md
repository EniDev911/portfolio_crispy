---
title: "Java ♨️ : Cómo usar y declarar Variables"
categories: [Java, "01. Nivel Básico"]
---

Java es un lenguaje de programación __fuertemente tipado__, lo que significa que cada variable debe tener un __tipo de dato explícito__ al momento de declararse. En este artículo vamos a cubrir la declaración de variables y asignarle valores para usar en operaciones básicas.


Para declarar una variable en Java, debe especificar el tipo de dato seguido del nombre de la variable. Opcionalmente, también puede inicializar la variable con un valor.

__Sintaxis__

```java
tipo nombre = valor;
```
{: .nolineno }

__Ejemplos de variables__:

```java
int edad = 25;
double estatura = 1.89;
String nombre = "Juan";
boolean activo = true;
```
{: .nolineno }

### __Variables de Instancias__

Las __variables de instancia__ son atributos o propiedades __pertenecientes a un objeto__, no a una función o método. Cada vez que se crea un nuevo objeto de una clase, se crea una nueva copia de estas variables.

> 🌟 Se llaman "de instancia" porque pertenecen a una instancia de la clase (es decir, a un objeto).
{: .prompt-info }

__Ejemplo Básico__:

```java
public class Persona {
    // Variables de instancia
    String nombre;
    int edad;

    void mostrarDatos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
    }
}
```
{: .nolineno }

__Usamos la clase en el archivo principal__:

```java
public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona();
        p1.nombre = "Ana";
        p1.edad = 30;

        Persona p2 = new Persona();
        p2.nombre = "Luis";
        p2.edad = 25;

        p1.mostrarDatos();
        p2.mostrarDatos();
    }
}
```
{: .nolineno }
