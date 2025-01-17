---
title: "POO : Método Constructor"
author: enidev911
categories: [Python, Programación Orientada a Objetos]
tags: [programación orientada abjetos]
---


## ¿Qué es un método constructor?

Es un método especial **que se ejecuta automáticamente** al momento de crear una **instancia de la clase**, sin necesidad de ser llamado explícitamente.

Su función principal consiste en dar valores iniciales a los atributos de la instancia recién creada. Los valores que se den a los atributos pueden ser por defecto definidos en el constructor o valores que se pueden especificar explícitamente al momento de crear la instancia (recibidos como parámetros en el constructor).

## ¿Cómo definir un constructor?

Para definir un constructor, debemos usar un **método especial** con el nombre `__init__` y debemos tener algunas consideraciones:

- El método tener como primer parámetro la instancia de la clase, por convención se le nombre a este parámetro como `self`.
- No puede tener retorno (`return`).
- Es generalmente, el primer método definido dentro de una clase.

### Ejemplo básico

{% tabs ej1 %}
{% tab ej1 python %}
```py
class Persona:

    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido
        print(f"¡Se ha creado a {self.nombre.lower()}!")

persona1 = Persona("marco", "contreras")
```
{: .nolineno file='ejemplo.py' }
{% endtab %}
{% tab ej1 output %}
```
¡Se ha creado a marco!
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}


*[POO]: Programación orientada a objetos
*[DRY]: Don't Repeat Yourself
