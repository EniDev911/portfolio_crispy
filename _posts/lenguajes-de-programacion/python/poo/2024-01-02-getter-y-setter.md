---
title: "POO : Accesadores y mutadores"
author: enidev911
categories: [Python, Programación Orientada a Objetos]
tags: [programación orientada abjetos]
---

## Accesadores (getters)

Los *getters* son métodos que permiten acceder al valor de un atributo en una instancia. Permiten acceder a información de los atributos expresada de forma diferente.

### El decorador @property

Permite definir un método accesador. Al utilizarlo se está "definiendo una propiedad de la clase", donde una vez definido el accesador mediante el decorador `@property`, también es posible definir el método mutador asociado, usando un nuevo decorador a partir del nombre del accesador.

> En la instancia creada, para hacer uso de un accesador basta con usar la sintaxis de punto `.`, y el nombre de la propiedad (sin paréntesis al final, tal como si fuera un atributo). En el caso del mutador, este es invocado al hacer uso del signo igual `=`.
{: .prompt-info }

### Definir accesador en Python

Se debe definir un **método de instancia** a continuación del decorador `@property`.

#### Ejemplo

Crear un accesador para obtener el nombre y apellido de una persona:

```py
class Persona():

  def __init__(self, nombre: str, apellido: str):
    self.nombre = nombre
    self.apellido = apellido

  @property
  def nombre_completo(self):
    return self.nombre + " " + self.apellido

p = Persona("marco", "contreras")
print(p.nombre_completo)
```
{: .nolineno }


## Mutadores (setters)

Son métodos que permiten modificar el valor de un atributo en una instancia. Permiten aplicar reglas al momento de asignar un valor a un atributo.

### Definir un mutador en Python

Se debe haber definido primero el accesador, ya que si no se desea aplicar ninguna lógica en el accesador, simplemente se retorna el valor del atributo. Luego, se debe usar como decorador el nombre del método definido por el accesador y añadir `.setter`.

#### Ejemplo

Se define el método, el cual debe ser de instancia y debe tener el mismo nombre del accesador:

```py
class Persona():

    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.__edad = edad

    @property
    def edad(self):
      return self.__edad
    
    @edad.setter
    def edad(self, edad):
      self.__edad = edad

p = Persona("marco", "contreras", 33)
print(p.edad)
p.edad = 34
print(p.edad)
```
{: .nolineno }
