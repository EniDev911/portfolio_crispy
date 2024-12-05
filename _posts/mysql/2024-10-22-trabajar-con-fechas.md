---
title: "MySQL 🐬 : Trabajar con fechas"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
---

MySQL cuando almacena una fecha lo hace de acuerdo a la norma ISO_8601 lo que quiere decir en el formato `YYYY-mm-dd`.


La siguiente tabla contiene algunas de las funciones de fecha y hora que soporta MySQL:

|Nombre|Descripción|
|:-----|:----------|
|[`ADDDATE()`](#adddate)|Agrega valores de tiempo (intervalos) a un valor de fecha.|
|[`ADDTIME()`](#addtime)|Agrega tiempo.|
|[`DATE()`](#date)|Extrae la parte de la fecha de una expresión de fecha o fecha y hora.|
|[`DATE_FORMAT()`](#date_format)|Formatear a una fecha de acuerdo a un formato especificado.|



### ADDDATE

La función `ADDDATE()` es similar a `DATE_ADD()`, y se utiliza para agregar un intervalo de tiempo a una fecha. En términos de funcionalidad, ambas hacen lo mismo, pero la sintaxis es ligeramente diferente-

**Sintaxis de `ADDDATE()`**

```sql
ADDDATE(fecha, INTERVAL valor unidad)
```
{: .nolineno }

- **fecha**: La fecha a la que le vamos agregar el intervalo
- **valor**: La cantidad de unidades que deseamos agregar. 
- **unidad**: El tipo de unidad, como `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`, entre otros.

**Ejemplo de uso**

1. Agregar días a una fecha:

```sql
SELECT ADDDATE('2020-01-02', INTERVAL 31 DAY);
```
{: .nolineno }

- Resultado: `2020-02-02`
- Acción: suma 31 días a la fecha `2020-12-01`

{: start="2" }
2. Agregar meses a una fecha:

```sql
SELECT ADDDATE('2020-12-01', INTERVAL 3 MONTH);
```
{: .nolineno }

- Resultado: `2021-03-01`
- Acción: suma 3 meses a la fecha `2020-12-01`

> La función `ADDDATE()` es útil para cálculos de fechas futuras o pasadas a partir de una fecha base.
{: .prompt-info }


### CURDATE

Devuelve el valor actual de la fecha en el formato `YYYY-MM-DD` o `YYYYMMDD` dependiendo si la función se usa en el contexto de cadena o numérico.

```sql
SELECT CURDATE();
```
{: .nolineno }

**Ejemplo de uso**

1. Insertar en una Tabla usando la función `CURDATE()`

```sql
/* Considerando tener la siguiente tabla */
CREATE TABLE `users`(
  `user_id` INT(11) NOT NULL,
  `username` VARCHAR(10) NOT NULL,
  `up` DATE,
  `status` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* Usamos la función CURDATE() en el campo up: */
INSERT INTO `users` (`user_id`, `username`, `up`, `status`)
VALUES (1010010101, 'Jhon Doe', CURDATE(), 1);
```
{: .nolineno }

Al hacer un `select` a la tabla `users`, obtenemos el registro guardado anteriormente y en el campo `up` muestra la fecha actual de ese momento en que se grabo en la base de datos el registro:

```
+------------+----------+------------+--------+
| user_id    | username | up         | status |
+------------+----------+------------+--------+
| 1010010101 | Jhon Doe | 2023-12-05 |      1 |
+------------+----------+------------+--------+
```
{: .noheader .nolineno }  


### DATE_FORMAT

> `DATE_FORMAT()` solo cambia la forma en que se muestra la fecha, no altera el valor subyacente a la fecha en la base de datos.
{: .prompt-info }

**Ejemplos de uso**

1. Formatear una fecha en formato `DD/MM/YYYY`:

```sql
SELECT DATE_FORMAT('2024-11-07', '%d/%m/%Y');
```
{: .nolineno }

{: start="2" }
2. Obtener el nombre del mes y del día:

```sql
SELECT DATE_FORMAT('2024-11-07', '%W, %M %d, %Y');
```
{: .nolineno }


---

## Ejercicios Prácticos

### Buscar registros entre dos fechas

Supongamos que tenemos una tabla `eventos` con una columna `fecha_evento` de tipo `DATE` y queremos obtener todos los eventos que ocurren entre dos fechas específicas. Podemos usar la cláusula `BETWEEN` para realizar la consulta:

```sql
SELECT * FROM eventos
WHERE fecha_evento BETWEEN '2022-01-01' AND '2022-12-31';
```
{: .nolineno }

Esta sentencia devolverá todos los eventos donde la columna `fecha_evento` esté dentro del rango **1 de enero del 2022** al **31 de diciembre de 2024**.

> La cláusula `BETWEEN` es inclusiva, lo que significa que las fechas inicial y final también se incluyen en el resultado.
{: .prompt-info }

### Buscar registros anteriores a una fecha específica

De manera similar al ejercicio anterior, podemos buscar los eventos que ocurren antes de una fecha específica usando el operador de menor que (`<`):

```sql
SELECT * FROM eventos
WHERE fecha_evento < '2023-06-01';
```
{: .nolineno }
