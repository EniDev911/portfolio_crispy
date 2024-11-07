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

```sql
SELECT ADDDATE('2020-01-02', INTERVAL 31 DAY);
```
{: .nolineno }


### CURDATE

Devuelve el valor actual de la fecha en el formato `YYYY-MM-DD` o `YYYYMMDD` dependiendo si la función se usa en el contexto de cadena o numérico.

```sql
SELECT CURDATE();
```
{: .nolineno }

#### Ejemplo Insertar en una Tabla usando la función CURDATE()

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


### DATE_FORMAT

> `DATE_FORMAT()` solo cambia la forma en que se muestra la fecha, no altera el valor subyacente a la fecha en la base de datos.
{: .prompt-info }

#### Ejemplos de uso

**1**. Formatear una fecha en formato `DD/MM/YYYY`:

```sql
SELECT DATE_FORMAT('2024-11-07', '%d/%m/%Y');
```
{: .nolineno }

**2**. Obtener el nombre del mes y del día:

{% include playground.html  %}
```sql
SELECT DATE_FORMAT('2024-11-07', '%W, %M %d, %Y');
```
{: .nolineno }
