---
title: "Funciones en MSSQL Server"
categories: [Bases de Datos Relacionales, "MSSQL Server"]
tags: [Bases de Datos, "Relacionales"]
---

Cuando trabajamos con SQL Server, nos encontramos con diferentes formas de encapsular lógica y reutilizarla. Entre ellas, están los procedimientos almacenados y las funciones. 

## ¿Qué es una función en SQL Server?

Una función en SQL Server son objetos de base de datos que incluyen un grupo de sentencias SQL para realizar una actividad específica. Una función recibe datos de entrada (parámetros), realiza una operación y __devuelve un resultado__ (siempre debe retornar un valor). 

> Esto es como las funciones como en las matemáticas: le das un valor de entrada, hace un cálculo y te devuelve un resultado.
{: .prompt-tip }

Un ejemplo sencillo de una función incorporada en sql server es `UPPER`:

```sql
SELECT UPPER('hola mundo');
```
{: .nolineno }

Como puedes observar, aquí usamos una función integrada `UPPER`, que convierte un texto a mayúsculas. En SQL Server también podemos crear nuestras propias funciones.

## Tipos de funciones

En SQL Server existen dos tipos de funciones definidas por el usuario:

- __Funciones escalares__: devuelven un solo valor. Ejemplo: calcular la edad de una persona o el IVA de un producto.
- __Funciones con tabla__: Devuelven una tabla completa, como si fuera el resultado de una consulta.

## Sintaxis de una función escalar

En términos generales, las funciones en SQL Server siguen una estructura bastante fija: primero se le asigna un **nombre**, luego se definen los **parámetros de entrada** (si los necesita), se indica el **tipo de dato o tabla que va a devolver**, y finalmente se escribe la **lógica que genera ese resultado**. A continuación, se muestra de forma genérica la sintaxis para definir una función.

__Sintaxis__:

```sql
CREATE FUNCTION nombreFunc(@Param tipo)
RETURNS tipo
AS
BEGIN
   DECLARE @Resultado tipo
   SET @Resultado = @Param * 2
   RETURN @Resultado
END
```
{: .nolineno }

## Sintaxis de una función con tabla

Antes de entrar en la sintaxis de creación, es importante entender que **una función de tabla en SQL Server puede resultar similar a una vista**:

* Al igual que una vista, **devuelve un conjunto de filas** que puede usarse en consultas `SELECT` como si fuera una tabla real.
* Permite **encapsular consultas complejas** para que sean reutilizables, mejorando la organización del código.

**Diferencia clave:** mientras que una vista siempre devuelve el mismo resultado según su definición, **una función de tabla puede recibir parámetros**, lo que permite **modificar dinámicamente los datos que devuelve**.

En otras palabras: **una función de tabla es como una vista “dinámica”**, donde puedes ajustar su comportamiento según los valores que le pases como argumentos.

__Sintaxis__:

```sql
CREATE FUNCTION nombreFunc (@Param tipo)
RETURNS TABLE
AS
RETURN (
    SELECT columna1, columna2
    FROM tabla
    WHERE columna1 = @Param
);
```
{: .nolineno }

{% include circle-line.html %}