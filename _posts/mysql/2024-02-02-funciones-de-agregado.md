---
title: "MySQL 🐬 :Funciones de Agregado"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
mermaid: true
tags: [Bases de Datos]
---

Las principales funciones de agregación de SQL son las siguientes:


En MySQL, las funciones de agregado se utilizan para realizar cálculos en un conjunto de registros y devolver un único valor basado en esos datos. Son herramientas poderosas cuando se necesita resumir, contar o analizar grandes volúmenes de datos. Este tipo de funciones se utilizan principalmente en consultas con las cláusulas `SELECT`, `GROUP BY`, `HAVING`.


La función `COUNT()` se utiliza para contar la cantidad de filas que cumplen con una condición específica o para contar todas las filas en una tabla o columna.

**Sintaxis Básica**

```sql
SELECT COUNT(column_name) FROM table_name;
```
{: .nolineno }

- `column_name`: El nombre de la columna cuyo valor deseas contar. Si se pasa un (`*`), cuenta todas las filas, sin importar si tienen valores nulos o no.

**Ejemplo: Contar todas las filas**

```sql
SELECT COUNT(*) FROM empleados;
```
{: .nolineno }
