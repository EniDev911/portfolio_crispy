---
title: "Python 🐍 : Listas y Tuplas"
author: enidev911
description: "Las **listas** y **tuplas** son estructuras de datos en Python que funcionan como cajas para guardar múltiples elementos."
categories: [Python, "01. Básico"]
tags: [python]
mermaid: true
pin: true
image:
    path: "posters/python-listas-y-tuplas.webp"
    lqip: data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwBACdASoUAAoAPzmGuVOvKSWisAgB4CcJZgCdIExC4pjkLfNipFGuOUAA+efmVsPKa5z0AITJYMCEJkiYvF8YNJJCwQHJ6UeZ4PbW/Dx+gSUX8veF6WkPAjQAdujHxAAAAA==
---


En Python, las **listas** y las **tuplas** son dos de los tipos de datos más fundamentales para almacenar colecciones de elementos. Aunque ambos permiten almacenar múltiples elementos en una sola variable, existen diferencias clave entre ellas que determinan cuándo usar una u otra. En este post, abarcaremos en detalle qué son las listas y tuplas, sus diferencias, y cómo utilizarlas de manera eficientes en nuestros programas.

## **¿Qué es una Lista?**

Una **lista** en Python es un tipo de dato que representa una colección ordenada y **mutable** (es decir, que se puede modificar) de elementos. Los elementos de una lista pueden ser de **diferentes tipos**, incluyendo números, cadenas de texto, otras listas, o incluso objetos personalizados.

> El tipo de dato **Lista** (`list`) es usado para almacenar una colección de valores. Si vienes de otros lenguajes de programación podemos decir que las listas son similares a los **Arrays**. Las listas de Python pueden almacenar valores de diferentes tipos.
{: .prompt-info }

### **Características de las Listas**

Una lista de Python tiene las siguientes características:

**Es ordenada**
: esto quiere decir que los elementos dentro de ella están indexados y se accede a ellos a través de una locación indexada.

**Es mutable**
: esto significa que los elementos dentro de una lista pueden editarse, añadirse nuevos o eliminar los que ya tiene.

**Es dinámica**
: las listas pueden contener diferentes tipos de datos y hasta de objetos. Esto significa también que puede soportar paquetes multidimensionales de datos, como un array o muchos objetos.

**No es única**
: esencialmente, esto quiere decir que la lista puede contener elementos duplicados sin que nos arroje un error.


### **Crear listas**

Para crear una lista se deben usar los corchetes `[]` (*brackets*) de apertura y cierre. Cada item o elemento en la lista debe estar separado de otro por comas `,`. 

Veamos el siguiente código donde vamos a almacenar en una variable la lista de Python:

```python
cars = ['Honda', 'Toyota', 'Audi', 'Ford', 'Susuki', 'Mercedez']
```
{: .nolineno }


Como se puede observar, es muy simple crear una lista usando los corchetes y en su interior poner cada elemento. Sin embargo no es la única forma de crear lista, Python nos provee de una función integrada `list()` para conseguir el mismo objetivo.

En el siguiente código vamos hacer el mismo ejemplo anterior pero usando la función `list()`:


```python
cars = list(('Honda', 'Toyota', 'Audi', 'Ford', 'Susuki', 'Mercedez'))
```
{: .nolineno }


### **Operaciones comunes con Listas**

Las operaciones sobre **listas** en Python son variadas al tratarse de estructuras de datos **mutables**, lo que significa que sus elementos pueden ser modificados después de haber sido creados. Debido a su mutabilidad, las listas tienen más métodos disponibles, como `append()`, `remove()`, `sort()`, `reverse()`, entre otros, que permiten agregar, eliminar o cambiar los elementos de manera dinámica:

```mermaid
---
title: "Listas en Python"
---
graph LR
    A["Operaciones Comunes"] --> B["Acceder a elementos"]
    A --> C["Agregar elementos"]
    A --> D["Eliminar elementos"]
    A --> E["Modificar elementos"]
    A --> F["Concatenación y repetición"]
    A --> G["Comprobar existencia"]
    A --> H["Longitud de lista"]
    A --> I["Ordenar lista"]
    A --> J["Invertir lista"]

    B -- "Por índice" --> K["mi_lista[index]"]
    B -- "Por rango" --> L["mi_lista[inicio:final]"]

    C -- "Al final" --> M["mi_lista.append(item)"]
    C -- "Por posición" --> N["mi_lista.insert(pos, item)"]

    D -- "Por valor" --> O["mi_lista.remove(valor)"]
    D -- "El último" --> P["mi_lista.pop()"]
    D -- "Por posición" --> P1["mi_lista.pop(pos)<br>del mi_lista[pos]"]

    F -- "Operador <code>+</code>" --> R["lista1 + lista2"]
    F -- "Operador <code>*</code>" --> S["lista1 * 2"]

    G -- "Usar <code>in</code>" --> T["elemento in mi_lista"]

    H -- "Usar <code>len()</code>" --> U["len(mi_tupla)"]

    I -- "Ordena la lista original" --> V["mi_lista.sort()<br>mi_lista.sort(reverse=True)"]
    I -- "Crea una nueva lista ordenada" --> V1["sorted(mi_lista)<br>sorted(mi_lista, reverse=True)"]

    J -- "Invierte la lista original" --> W["mi_lista.reverse()"]

    classDef wStroke fill:#fff,fill-opacity:0,text-align:left,stroke-width:0,background:#19191922,font-family:monospace,padding:3px,font-size:17px;
    class K,L,M,N,O,P,P1,T,U,R,S,V,V1,W wStroke;
```
{: .nolineno }

> Las **listas** son útiles cuando necesitas una colección de datos que pueda cambiar a lo largo del tiempo
{: .prompt-info }

Como ya sabemos las operaciones comunes que podemos realizar sobre las listas, ahora veamos algunos ejemplos.

#### **Agregar elementos**

Para añadir un nuevo elemento al final de la lista tenemos el método `append()`:

```python
cars.append("Hyundai")
```
{: .nolineno }

Por otro lado, si quisieramos añadir un nuevo elemento al principio tenemos el método `insert(index, item)`:

```python
# 0 es el primer elemento en orden indexado sucesivamente en la secuencia
cars.insert(0, "Hummer")
```
{: .nolineno }


#### **Eliminar elementos**

Para eliminar el último elemento de la lista tenemos el método `pop()`:

```python
cars.pop()
```
{: .nolineno }

Si queremos eliminar el elemento según su índice tenemos el mismo método `pop(index)`:

```python
cars.pop(2) # Elimina y retorna el elemento con el índice 1
```
{: .nolineno }

Si por otro lado, queremos eliminar elemento según su valor tenemos el método `remove()`:

```python
cars.remove("Honda")
```
{: .nolineno }

#### **Extraer elementos**

Para extraer elementos de una lista indicando sus índeces, en un intervalo **slicing**:

```python
cars # ['Honda', 'Toyota', 'Audi', 'Ford', 'Susuki', 'Mercedez']
cars[2:4] # ['Audi', 'Ford']
```
{: .nolineno }

Como podemos observar, indicamos `[start:to]` donde el primer argumento `start` es el elemento inicial (incluido) y el segundo argumento `to` es el elemento final (excluido).


### **Funciones útiles para Listas**

Python también nos provee de funciones útiles para trabajar con listas como las siguientes:

{% tabs ex_func_listas %}
{% tab ex_func_listas Código %}
```py
lista_marca_autos = ['Audi', 'Ford', 'Honda', 'Mercedez', 'Susuki', 'Toyota']
lista_ordenada = sorted(lista_marca_autos) 
lista_ordenada_descendente = sorted(lista_marca_autos, reverse=True)
maximo = max(lista_marca_autos)
minimo = min(lista_marca_autos)
lista_longitud = len(lista_marca_autos)

print("Lista ordenada:", lista_ordenada)
print("Lista ordenada (descendente):", lista_ordenada_descendente)
print("El Máximo:", maximo)
print("El Mínimo:", minimo)
print("Longitud de la lista:", lista_longitud)
```
{: .nolineno }
{% endtab %}
{% tab ex_func_listas Salida %}
```
Lista ordenada: ['Audi', 'Ford', 'Honda', 'Mercedez', 'Susuki', 'Toyota']
Lista ordenada (descendente): ['Toyota', 'Susuki', 'Mercedez', 'Honda', 'Ford', 'Audi']
El Máximo: Toyota
El Mínimo: Audi
Longitud de la lista: 6
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

---

## **¿Qué es una Tupla?**

Una tupla en Python es similar a una lista, pero con una diferencia clave: es **inmutable**, lo que significa que, una vez creada, no puedes modificar, agregar ni eliminar elementos. Esto las hace ideales para representar datos que no deben cambiar a lo largo de la ejecución del programa.

### **Características de las Tuplas**

**Ordenadas**
: Los elementos en una tupla siguen un orden específico.

**Inmutables**
: Una vez que la tupla es creada, no puedes cambiar su contenido.

**Permiten elementos duplicados**
: Al igual que las listas, las tuplas pueden tener elementos repetidos.

**Pueden contener diferentes tipos de datos**
: Al igual que las listas, las tuplas pueden contener diferentes tipos de elementos.


### **Operaciones Comunes con Tuplas**

Las operaciones sobre **tuplas** en Python son limitadas debido a que las tuplas son **inmutables**, es decir, no pueden modificarse después de ser creadas. Sin embargo, se pueden realizar varias operaciones comunes:

```mermaid
---
title: "Tuplas en Python"
---
graph LR;
    A[Operaciones Comunes] --> B[Acceso a elementos]
    A --> C[Concatenación]
    A --> D[Repetición]
    A --> E[Longitud]
    A --> F[Verificación de pertenencia]
    A --> G[Desempaquetado]
    
    B -- "Por índice" --> B1["mi_tupla[index]"]
    B -- "Por rango" --> B2["mi_tupla[inicio:final]"]
    
    C -- "Operador <code>+</code>" --> C1["tupla1 + tupla2"]
    
    D -- "Operador <code>*</code>" --> D1["tupla1 * 2"]
    
    E -- "Usar <code>len()</code>" --> E1["len(mi_tupla)"]
    
    F -- "Usar <code>in</code>" --> F1["elemento in mi_tupla"]
    
    G -- "En variables" --> G1["a,b,c = mi_tupla"]

    classDef wStroke fill:#fff,fill-opacity:0,text-align:left,stroke-width:0,background:#19191922,font-family:monospace,padding:3px,font-size:17px;
    class B1,B2,C1,D1,E1,F1,G1 wStroke;
```
{: .nolineno }

#### **Acceder a un Elemento:**

Al igual que las listas, se puede acceder a los elementos de una tupla mediante su índice:

```py
mi_tupla = (10, 20, 30, 40)
print(mi_tupla[2])  # Imprime 30
```
{: .nolineno }

#### **Concatenar y Repetir**

Aunque no se puede modificar una tupla directamente, se puede **concatenar** tuplas o **repetir** tuplas para crear nuevas tuplas:

```py
tupla1 = (1, 2, 3)
tupla2 = (4, 5, 6)
tupla3 = tupla1 + tupla2  # Concatenación
tupla4 = tupla1 * 2       # Repetición
```
{: .nolineno }

#### **Comprobar la Existencia de un Elemento**

Podemos verificar si un elemento está presente en una tupla usando el operador `in`:

```py
mi_tupla = (1, 2, 3, 4)
print(3 in mi_tupla)  # Imprime True
```
{: .nolineno }


### **Diferencias entre Listas y Tuplas**

A pesar de que las listas y las tuplas comparten muchas similitudes, hay diferencias clave que debemos tener en cuenta al decidir cúal usar:

|Característica|Listas|Tuplas|
|:-------------|:-----|:-----|
|**Mutabilidad**|Mutable (se pueden modificar)|Inmutable (no se pueden modificar)|
|**Sintaxis**|Corchetes `[]`|Paréntesis `()`|
|**Velocidad**|Más lentas debido a su mutabilidad|Más rápidas debido a su inmutabilidad|
|**Uso**|Ideal cuando los datos necesitan cambiar|Ideal para datos constantes o clave-valor|
|**Métodos**|Muchos métodos disponibles (`append`, `remove`, etc.)|Pocos métodos disponibles (`count`, `index`)|