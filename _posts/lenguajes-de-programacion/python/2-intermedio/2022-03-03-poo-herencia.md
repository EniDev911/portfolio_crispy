---
title: "Python 🐍 : POO - Herencia"
author: enidev911
categories: [Python, "02. Intermedio"]
mermaid: true
tags: [python]
image:
    path: "posters/python-poo-herencia.png"
    alt: "Python Poo Herencia"
---

En artículos anteriores mencionaba de una forma breve el concepto de **herencia**. Aquí vamos a ver no solo código sino que también su representación en los **diagramas de clases**. En este tipo de relaciones permiten que una clase (**hija** o **subclase**) **reciba atributos y métodos** de otra clase (**padre** o **superclase**). Estos **atributos** y **métodos** recibidos **se suman** a los que la clase tiene po si misma.

Un ejemplo de esto en un diagrama de clases podría ser la siguiente: **profesor**, **padre**, **estudiante** son **personas**:

```mermaid
---
title: "Ejemplo de herencia"
---
classDiagram
    class `Clase Persona fa:fa-person`{
      +nombre
      +apellido
      +respirar()
    }
    class `Clase Profesor fa:fa-chalkboard-user`{
      +calificar_examen()
    }
    class `Clase Estudiante fa:fa-user-graduate` {
      +rendir_examen()
    }
    class `Clase Padre fa:fa-user-tie`{
      +asistir_estudiante()
    }
    `Clase Persona fa:fa-person` <|-- `Clase Profesor fa:fa-chalkboard-user` : hereda
    `Clase Persona fa:fa-person` <|-- `Clase Estudiante fa:fa-user-graduate` : hereda
    `Clase Persona fa:fa-person` <|-- `Clase Padre fa:fa-user-tie` : hereda
```

En este ejemplo, las tres clases (**Profesor**, **Padre**, **Estudiante**) podrán utilizar el **método respirar**, ya que lo **heredan** de la **clase persona**, pero solamente la clase **Profesor** podrá **calificar exámenes**, la clase **Estudiante** podrá **rendir exámentes** y la clase **Padre** podrá **asistir a reuniones del estudiante**.


Si queremos llevar el ejemplo a código, tendríamos que comenzar definiendo la clase **Persona** y luego el resto:

```py
class Persona:

    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def respirar(self):
      print("respirando")

class Profesor(Persona):
  pass

class Estudiante(Persona):
  pass

class Padre(Persona):
  pass
```
{: .nolineno }

Hasta aquí podemos ver como efectivamente las clases (**Profesor**, **Estudiante**, **Padre**) son subclases de **Persona**:

{% tabs ej_herencia_p %}
{% tab ej_herencia_p código %}
```python
print(Profesor.__bases__)
print(Estudiante.__bases__)
print(Padre.__bases__)
```
{: .nolineno }
{% endtab %}
{% tab ej_herencia_p output %}
```
(<class '__main__.Persona'>,)
(<class '__main__.Persona'>,)
(<class '__main__.Persona'>,)
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

Y de forma análoga podemos ver que clases descienden de una en concreto:

{% tabs subclases_ej %}
{% tab subclases_ej código %}
```
print(Persona.__subclasses__())
```
{: .nolineno }
{% endtab %}
{% tab subclases_ej output %}
```
[<class '__main__.Profesor'>, <class '__main__.Estudiante'>, <class '__main__.Padre'>]
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

Dado que una clase hija o subclase hereda los atributos y métodos de la clase padre, nos resulta útil cuando tengamos clases que se parecen entre sí. En este caso en vez de definir varias clases de diferentes entidades, podemos tomar los elementos comunes y crear una clase superior de la que puedan heredar y de esta forma estamos respetando la filosofía **DRY**.

---

## Uso de la función super()

La función `super()` es una función incorporada (*Built-in Functions*) en Python que se utiliza precisamente para **llamar a un método de la clase padre** desde una **clase hija**.

En otras palabras, `super()` nos permite acceder a los **métodos** y **atributos** de la superclase en la subclase.


Siguiendo con el ejemplo anterior, podemos usar `super()` para llamar al método `__init__` de la clase **padre** que ya acepta como parámetros **nombre** y **apellido**, y sólo asignar un nuevo atributo a través de un nuevo parámetro que sea la **asignatura**:

{% tabs clases_derivadas %}
{% tab clases_derivadas subclases %}
```py
class Profesor(Persona):

  def __init__(self, nombre, apellido, asignatura):
    super().__init__(nombre, apellido)
    self.asignatura = asignatura

class Estudiante(Persona):
  pass

class Padre(Persona):
  pass

o_profesor = Profesor('Marco', 'Contreras', 'historia')
print(o_profesor.respirar()) # respirando
print(o_profesor.nombre) # Marco
print(o_profesor.apellido) # Contretras
print(o_profesor.asignatura) # 33
```
{: .nolineno }
{% endtab %}
{% tab clases_derivadas superclase %}
```python
class Persona:

    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def respirar(self):
      print("respirando")
```
{: .nolineno }
{% endtab %}
{% endtabs %}

---

### Benificios de la Herencia en Python

La herencia ofrece varias ventajas en la programación:

1. **Reutilización de código**: Permite reutilizar métodos y atributos comunes, evitando la duplicación de código.
2. **Organización jerarquica**: Facilita la creación de jerarquías lógicas, lo que ayuda a organizar mejor el código.
3. **Extensibilidad**: Puedes agregar nuevas funcionalidades sin modificar el código existente, simplemente creando nuevas subclases.

*[POO]: Programación orientada a objetos
*[DRY]: Don't Repeat Yourself
