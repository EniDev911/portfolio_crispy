---
title: "MySQL 🐬 :Funciones de Agregado"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
mermaid: true
tags: [Bases de Datos]
---

En MySQL, las funciones de agregado se utilizan para realizar cálculos en un conjunto de registros y devolver un único valor basado en esos datos. Son herramientas poderosas cuando se necesita resumir, contar o analizar grandes volúmenes de datos. Este tipo de funciones se utilizan principalmente en consultas con las cláusulas `SELECT`, `GROUP BY`, `HAVING`.

## **Funciones de Agregado**

Primero que todo, debemos contar con una tabla y registros, para los siguientes ejemplos para explorar las funciones de agregado, vamos a tener una tabla de empleados y algunos registros:

```sql
-- Crear la tabla de empleados:
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario INT NOT NULL
);

-- Insertar datos de ejemplo en la tabla:
INSERT INTO empleados (nombre, apellidos, cargo, salario) VALUES
('Juan', 'Pérez', 'Gerente', 1350000),
('María', 'Gómez', 'Asistente', 800000),
('Carlos', 'Rodríguez', 'Analista', 680000),
('Laura', 'Martínez', 'Coordinadora', 660000),
('Camilo', 'Hurtado', 'Técnico', 500000),
('Fernando', 'Peña', 'Técnico', 500000),
('Pedro', 'Sánchez', 'Técnico', 500000);
```
{: .nolineno }

### **COUNT**

La función `COUNT()` se utiliza para contar la cantidad de filas que cumplen con una condición específica o para contar todas las filas en una tabla o columna.

**Sintaxis Básica**

```sql
SELECT COUNT(column_name) FROM table_name;
```
{: .nolineno }

- `column_name`: El nombre de la columna cuyo valor deseas contar. Si se pasa un (`*`), cuenta todas las filas, sin importar si tienen valores nulos o no.

#### **Ejemplo:** Contar todos los empleados

```sql
SELECT COUNT(*) FROM empleados;
```
{: .nolineno }

#### **Ejemplo:** Contar la cantidad de cargos en la empresa (sin duplicados)

```sql
SELECT COUNT(DISTINCT cargo) AS "Cantidad de cargos"
FROM empleados;
```
{: .nolineno }

#### **Ejemplo:** Contar cantidad de empleados por cargos en la empresa

```sql
SELECT cargo, COUNT(*) total
FROM empleados
GROUP BY cargo;
```
{: .nolineno }


### **SUM**

La función `SUM()` calcula la suma de los valores de una columna númerica en un conjunto de registros que cumplen con una condición específica (si se proporciona una). Es especialmente útil cuando se desea conocer el total acumulado de una columna.

Para ver los siguientes ejemplos, vamos a contar con una tabla **ventas** y registros:

```sql
-- Crear la tabla de VENTAS:
CREATE TABLE ventas (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(50),
    monto INT,
    fecha_venta DATE
);

-- Insertar datos de ejemplo en la tabla:
INSERT INTO ventas (producto, monto, fecha_venta)
VALUES 
    ('Producto A', 20050, '2024-01-05'),
    ('Producto B', 35075, '2024-02-10'),
    ('Producto A', 15025, '2024-03-15'),
    ('Producto C', 50000, '2024-01-20'),
    ('Producto B', 20000, '2024-02-25'),
    ('Producto A', 40000, '2024-03-10'),
    ('Producto C', 250100, '2024-04-01');
```
{: .nolineno }

#### **Ejemplo:** Sumar el total de las ventas:

```sql
SELECT SUM(monto) as "total ventas"
FROM ventas;
```
{: .nolineno }

#### **Ejemplo:** Sumar ventas por productos

```sql
SELECT producto, SUM(monto) AS "total ventas productos"
FROM ventas
GROUP BY producto;
```
{: .nolineno }

#### **Ejemplo:** Sumar ventas por un rango de fechas:

```sql
SELECT fecha_venta, SUM(monto) AS "Total ventas por rango de fechas"
FROM ventas
WHERE fecha_venta BETWEEN '2024-01-01' AND '2024-03-31'
GROUP BY fecha_venta;
```
{: .nolineno }

### **AVG**

La función `AVG()` es otra función de agregado muy útil, especialmente cuando necesitas obtener el promedio de los valores de una columna numérica. Es ideal para cálculos como el promedio de ventas, calificaciones, salarios, etc.

#### **Ejemplo:** Calcular el promedio total de ventas


```sql
SELECT AVG(monto) AS "Promedio Ventas"
FROM ventas;
```
{: .nolineno }

> **Redondeo**: Si deseas redondear el resultado a un número específico de decimales, puedes utilizarla función `ROUND()`. Por ejemplo, para redondear el promedio a dos decimales`ROUND(AVG(monto), 2)`.
{: .prompt-info }

#### **Ejemplo:** Calcular el promedio de ventas para un producto específico

```sql
SELECT producto, AVG(monto) AS "Promedio Ventas"
FROM ventas
WHERE producto = "Producto A";
```
{: .nolineno }