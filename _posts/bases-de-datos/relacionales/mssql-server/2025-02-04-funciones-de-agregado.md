---
title: "Funciones de agregado en SQL Server"
categories: [Bases de Datos Relacionales, "SQL Server"]
tags: [Bases de Datos, "Relacionales", "SQL Server"]
permalink: /sqlserver/funciones-de-agregado
---

En SQL Server, las funciones de agregado nos permiten realizar cálculos sobre un conjuto de valores y devuelve un solo valor como resultado. Son muy utilizadas en análisis de datos, reportes, y consultas que requieren resúmenes o estadísticas.

Las funciones de agregado ignoran los valores `NULL` y se suelen usar junto a la cláusula `GROUP BY` dentro de una instrucción `SELECT`.

### 1. `COUNT()`- Contar filas

Devuelve la cantidad de filas que existen en una tabla:

```sql
-- Contar todos los registros de la tabla empleados
SELECT COUNT(*) AS TotalEmpleados
FROM Empleados;
```
{: .nolineno }

|TotalEmpleado|
|:------------|
|83|

### 2. `SUM()` - Sumar valores

Devuelve la suma de los valores de una columna numérica:

```sql
-- Suma de todos los sueldos
SELECT SUM(Salario) AS TotalSueldos
FROM Empleados;
```
{: .nolineno }

### 3. `AVG()` - Promedio

Calcula el valor promedio de una columna numérica:


```sql
-- Promedio de sueldos
SELECT AVG(Salario) AS PromedioSueldos
FROM Empleados;
```
{: .nolineno }

### 4. `MIN()` - Valor mínimo

Devuelve el menor valor de una columna:

```sql
-- Sueldo más bajo registrado
SELECT MIN(Salario) AS SueldoMinimo
FROM Empleados;
```
{: .nolineno }

### 5. `MAX` - Valor máximo

Devuelve el mayor valor de una columna:

```sql
-- Sueldo más alto registrado
SELECT MAX(Salario) AS SueldoMaximo
FROM Empleados;
```
{: .nolineno }

## Uso con `GROUP BY``

Un ejemplo típico es agrupar los datos por departamentos:

```sql
SELECT Departamento,
  COUNT(*) AS TotalEmpleados,
  AVG(Salario) AS PromedioSueldos
FROM Empleados
GROUP BY Departamento;
```
{: .nolineno }

### Consideraciones importantes

- [x] Las funciones de agregado ignoran los valores `NULL`, excepto `COUNT(*)`, que cuenta todas las filas.
- [x] Se pueden combinar varias funciones en la misma consulta.
- [x] Es común usarlas junto con `HAVING`, para filtrar grupos según condiciones:

```sql
-- Departamentos con promedio de sueldo mayor a 1500000
SELECT Departamento, AVG(Salario) AS PromedioSueldos
FROM Empleados
GROUP BY Departamento
HAVING AVG(Salario) > 1500000;
```
{: .nolineno }