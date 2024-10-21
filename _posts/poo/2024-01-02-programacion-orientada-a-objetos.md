---
title: Programación Orientada a Objetos
author: enidev911
categories: [Python, POO]
tags: [programación orientada abjetos]
---

## Clases y objetos

En POO, una clase es un plano o modelo para un objeto. Define los atributos y métodos que un objeto puede tener. Para definir una clase se usa la palabra reservada `class` seguido del nombre de la clase:

```py
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad

  def presentarse(self):
    print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")
```
{: .nolineno }

El método `__init__` es el constructor de la clase que se llama cuando se crea una nueva instancia de la clase. En este caso, toma dos argumentos, **nombre** y **edad**, y establece los valores correspondientes de los atributos.

Para crear una instancia de la clase **Persona**, simplemente llamamos al nombre de la clase con los argumentos necesarios:

{% tabs ej_instancia %}
{% tab ej_instancia código %}
```python
marco = Persona("Marco", 32)
marco.presentarse()
```
{: .nolineno }
{% endtab %}
{% tab ej_instancia output %}
```
Hola, mi nombre es Marco y tengo 32 años.
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

---

## Herencia

La herencia es una técnica en POO que permite que una clase herede atributos y métodos de una clase padre p superclase. En Python, una clase hereda de otra recibiendo la clase Padre como parámetro:

```python
class Empleado(Persona):
  def __init__(self, nombre, edad, renta):
    super().__init__(nombre, edad)
    self.renta = renta

  def presentarse(self):
    super.presentarse()
    print(f"Soy un empleado y mi renta mensual es {self.renta}")
```
{: .nolineno }

En este ejemplo, creamos una clase **Empleado** que hereda de la clase **Persona** y agrega un nuevo atributo **renta** y un método **presentarse** modificado que incluye información sobre la renta.

La función `super()` se utiliza para llamar al método `__init__` de la clase padre, que establece los atributos heredados. Luego, se establece el nuevo atributo **renta** en la clase hija.

---

## Polimorfismo

El polimorfismo es la capacidad de un objeto de tomar varias formas. En POO, el polimorfismo se logra mediante la sobreescritura de métodos de una superclase en una subclase. En Python, esto se puede hacer fácilmente de la siguiente manera:

```py
class Vehiculo:
    def moverse(self):
        print("El vehículo se está moviendo.")

class Auto(Vehiculo):
    def moverse(self):
        print("El auto se está moviendo")

v = Vehiculo()
v.moverse()  # El vehículo se está moviendo.

a = Auto()
a.moverse()  # El auto se está en movimiento.
```
{: .nolineno }

En este ejemplo, creamos dos clases, **Vehiculo** y **Auto**. La clase padre tiene el método `moverse(self)`, que imprime un mensaje. La clase **Auto** hereda de la clase 

---

## Encapsulamiento

El encapsulamiento es el proceso de ocultar detalles de implementación de un objeto a otros objetos. En Python, **esto se logra a través de la convención** de nombres. Los atributos y métodos que comienzan con dos guiones bajos (`_`) se convierten en atributos y métodos privados, lo que significa que solo se pueden acceder desde dentro de la clase.

```python
class CuentaBancaria:

  def __init__(self, nombre, saldo):
    self.__nombre = nombre
    self.__saldo = salda

  def depositar(self, cantidad):
    self.__saldo += cantidad

  def retirar(self, cantidad):
    if cantidad > self.saldo:
      print("No hay suficiente saldo en la cuenta.")
    else:
      self.__saldo -= cantidad

  def obtener_saldo(self):
    return self.__saldo
```
{: .nolineno }



*[POO]: Programación orientada a objetos
