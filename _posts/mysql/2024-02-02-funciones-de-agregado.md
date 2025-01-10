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

#### **Ejemplo:** Contar la cantidad de cargos en la empresa (sin duplicados):

```sql
SELECT COUNT(DISTINCT cargo) AS "Cantidad de cargos"
FROM empleados;
```
{: .nolineno }

#### **Ejemplo:** Contar cantidad de empleados por cargos en la empresa:

```sql
SELECT cargo, COUNT(*) total
FROM empleados
GROUP BY cargo;
```
{: .nolineno }
