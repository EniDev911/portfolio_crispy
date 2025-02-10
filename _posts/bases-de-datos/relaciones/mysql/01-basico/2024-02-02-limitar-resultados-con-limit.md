---
title: "MySQL 🐬 : Uso de LIMIT y OFFSET para Limitar Resultados"
author: enidev911
description: "El comando `LIMIT` nos permite **controlar la cantidad de resultados** que obtienes de una consulta, ideal para mejorar el rendimiento."
categories: [Bases de Datos Relacionales, "MySQL - 01. Básico"]
image:
  path: posters/mysql-limit-y-offset.webp
  lqip: data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSEAAAAABd6CobSOJP9h537umEREh+QNBFlTTthW995p+QwhhksgniwyuTAQhpHO/Eojo/wScS18QmhOrf0VWNoA5xhgLVlA4IC4AAACwAgCdASoUAAsAPzmGulOvKSWisAgB4CcJZwAAeyAA/u3GcM2Jni56py+qUAAA
pin: true
tags: [Bases de Datos]
---

En MySQL, cuando trabajas con grandes cantidades de datos, puede que no siempre necesites obtener todos los registros de una tabla. Aquí es donde el comando **`LIMIT`** entra en juego. Este comando te permite restringir la cantidad de filas que una consulta puede devolver, lo que resulta muy útil para mejorar el rendimiento de las consultas y facilitar la visualización de datos, especialmente cuando solo necesitas una muestra de los resultados.

Además, **`LIMIT`** es clave para implementar paginación en aplicaciones, permitiéndote dividir los resultados en páginas y mostrar solo una cantidad específica de registros por vez.

En este post, veremos cómo usar **`LIMIT`** para limitar los resultados de las consultas en MySQL, con ejemplos prácticos utilizando una base de datos de tienda y su tabla de productos.

### **¿Cómo funciona LIMIT?**

La sintaxis de `LIMIT` es la siguiente:

```sql
SELECT columna1, columna2, ...
FROM tabla
LIMIT n;
```
{: .nolineno }

- **`n`**: El número de registros que deseas obtener.

#### **Ejemplo básico:**

Supongamos que tenemos una tabla llamada **`productos`** en la base de datos **`tienda`** con los siguientes datos:

{% tabs ex_limit %}
{% tab ex_limit Datos %}
|id|nombre|precio|cantidad|
|:-|:-|:-|:-|
|1|Laptop|499990|25|
|2|Mouse|19990|40|
|3|Teclado|29900|60|
|4|Monitor|120000|15|
|5|Tablet|109000|30|
{% endtab %}
{% tab ex_limit SQL %}
```sql
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    precio INT,
    cantidad INT
);

INSERT INTO productos (nombre, precio, cantidad)
VALUES 
    ('Laptop', 499990, 25),
    ('Mouse', 19990, 40),
    ('Teclado', 29900, 60),
    ('Monitor', 120000, 15),
    ('Tablet', 109000, 30);
```
{: .nolineno }
{% endtab %}
{% endtabs %}

Si quieres obtener solo los primeros 3 productos, puedes utilizar `LIMIT` de la siguiente forma:

```sql
SELECT * FROM productos
LIMIT 3;
```
{: .nolineno }

{% tabs ex_limit_output %}
{% tab ex_limit_output resultado %}
|id|nombre|precio|cantidad|
|:-|:-|:-|:-|
|1|Laptop|499990|25|
|2|Mouse|19990|40|
|3|Teclado|29900|60|
{% endtab %}
{% tab ex_limit_output mysql %}
{% capture code %}
<span class="hl">root@localhost [tienda]&gt; SELECT * FROM productos LIMIT 3;</span>
+----+---------+--------+----------+
| id | nombre  | precio | cantidad |
+----+---------+--------+----------+
|  1 | Laptop  | 499990 |       25 |
|  2 | Mouse   |  19990 |       40 |
|  3 | Teclado |  29900 |       60 |
+----+---------+--------+----------+
3 rows in set (0.01 sec)
{% endcapture %}
{% include terminal-wrapper.html content=code %}
{% endtab %}
{% endtabs %}


### **¿Cómo usar LIMIT con OFFSET?**

Además de limitar el número de resultados, puedes usar **`OFFSET`** para omitir una cierta cantidad de registros antes de devolver los resultados.

La sintaxis con `LIMIT` y `OFFSET` es:

```sql
SELECT columna1, columna2, ...
FROM tabla
LIMIT n OFFSET m;
```
{: .nolineno }

- **n**: El número de registros que deseas obtener.
- **m**: El número de registros a omitir.

#### **Ejemplo con OFFSET:**

Supongamos que deseamos omitir los primeros 2 productos y obtener los siguientes 3:

```sql
SELECT * FROM productos
LIMIT 3 OFFSET 2;
```
{: .nolineno }

**Resultado:**

{% tabs ex_limit_offset %}
{% tab ex_limit_offset resultado %}
|id|nombre|precio|cantidad|
|:-|:-|:-|:-|
|3|Teclado|29900|60|
|4|Monitor|120000|15|
|5|Tablet|109000|30|
{% endtab %}
{% tab ex_limit_offset mysql %}
{% capture code %}
<span class="hl">root@localhost [tienda]&gt; SELECT * FROM productos LIMIT 3 OFFSET 2;</span>
+----+---------+--------+----------+
| id | nombre  | precio | cantidad |
+----+---------+--------+----------+
|  3 | Teclado |  29900 |       60 |
|  4 | Monitor | 120000 |       15 |
|  5 | Tablet  | 109000 |       30 |
+----+---------+--------+----------+
3 rows in set (0.01 sec)
{% endcapture %}
{% include terminal-wrapper.html content=code %}
{% endtab %}
{% endtabs %}

### **Aplicaciones Comunes de LIMIT**

1. **Paginación de Resultados:**
   Si estás mostrando resultados en una aplicación web, como productos en una tienda online, puedes utilizar `LIMIT` junto con `OFFSET` para paginar los resultados. De esta forma, solo se muestran un número limitado de productos por página.

   **Ejemplo**:
   - Página 1 (registros 1 a 10):

   ```sql
   SELECT * FROM productos
   LIMIT 10 OFFSET 0;
   ```
   {: .nolineno }

   - Página 2 (registros 11 a 20):

   ```sql
   SELECT * FROM productos
   LIMIT 10 OFFSET 10;
   ```
   {: .nolineno }

2. **Mejorar el Rendimiento:**
   Cuando trabajas con grandes bases de datos, las consultas sin `LIMIT` pueden tardar mucho. Si solo necesitas una pequeña muestra de resultados, usar `LIMIT` puede acelerar considerablemente la consulta.

3. **Consultas de Muestra:**
   Si necesitas revisar o probar algo rápidamente en la base de datos, puedes usar `LIMIT` para obtener solo un subconjunto de los registros.

