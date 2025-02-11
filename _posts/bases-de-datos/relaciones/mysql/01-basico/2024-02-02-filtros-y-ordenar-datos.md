---
title: "MySQL 🐬 : Filtrar y Ordenar Datos"
author: enidev911
description: "Las cláusulas `WHERE` y `ORDER BY` nos permiten **filtrar y ordenar** la información que obtienes de una consulta."
categories: [Bases de Datos Relacionales, "MySQL - 01. Básico"]
mermaid: true
image:
  path: posters/mysql-filtrar-y-ordenar.webp
  lqip: data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSEAAAAABd6CobSOJP9h537umEREh+QNBFlTTthW995p+QwhhksgniwyuTAQhpHO/Eojo/wScS18QmhOrf0VWNoA5xhgLVlA4ID4AAABQAgCdASoUAAsALvmczmclLy8vDwD4SgAA86AA/u+V7Q4feNf9fpqEH9TZbLCzXOJxN7iQurXOmD+cC0AAAA==
tags: [Bases de Datos]
---

Cuando trabajamos con bases de datos, a menudo necesitamos extraer información específica y mostrarla de manera ordenada. Para lograr esto, MySQL nos brinda las cláusula `WHERE` para filtrar datos y `ORDER BY` para ordenarlos según nuestros criterios. En este post, profundizaremos en estas cláusulas y veremos cómo combinarlas para crear consultas más efectivas. Pero antes de sumergirnos en el código, vamos a preparar un escenario que contextualice el uso de estas herramientas.

## **Escenario: Tienda "ElectroShop"**

Imagina que eres el administrador de **ElectroShop**, una tienda en línea que se especializa en productos electrónicos y accesorios. Tu principal fuente de información de tu inventario se encuentra en la tabla `productos`. Esta tabla cuenta con las siguiente columnas:

- `id`: Identificador único del producto.
- `nombre`: Nombre del producto.
- `categoria`: Categoría a la que pertenece el producto (por ejemplo, "Tecnología", "Accesorios").
- `precio`: Precio del producto.
- `stock`: Cantidad disponible en inventario.

### **Crear la Base de Datos y la Tabla**

Para empezar a trabajar, lo primero es crear la base de datos:

```sql
CREATE DATABASE tienda_electroshop;
```
{: .nolineno }

**Selecciona la Base de Datos**

```sql
USE tienda_electroshop;
```
{: .nolineno }

**Crear la Tabla Productos**

```sql
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    categoria VARCHAR(255),
    precio INT,
    stock INT
);
```
{: .nolineno }

**Los datos que tenemos en la tabla `productos`**

{% tabs data_porductos %}
{% tab data_porductos datos %}
|id|nombre|categoria|precio|stock|
|:-|:-|:-|:-|
|1|Laptop|Tecnología|499990|15|
|2|Smartphone|Tecnología|290990|40|
|3|Auriculares|Accesorios|29900|100|
|4|Teclado|Accesorios|39900|80|
|5|Monitor|Tecnología|194900|7|
|5|Mouse|Accesorios|15990|9|
{% endtab %}
{% tab data_porductos sql %}
```sql
INSERT INTO productos (id, nombre, categoria, precio, stock) VALUES
    (1, 'Laptop', 'Tecnología', 499990, 15),
    (2, 'Smartphone', 'Tecnología', 290990, 40),
    (3, 'Auriculares', 'Accesorios', 29900, 100),
    (4, 'Teclado', 'Accesorios', 39900, 80),
    (5, 'Monitor', 'Tecnología', 194900, 7),
    (6, 'Mouse', 'Accesorios', 15990, 9);
```
{: .nolineno }
{% endtab %}
{% endtabs %}


## **La Cláusula WHERE: Filtrar Datos**

La cláusula `WHERE` te permite definir condiciones para seleccionar únicamente los registros que cumplan ciertos criterios.

### **La Situación**

Recientemente, has notado algunas situaciones en tu tienda que requieren atención:

**Promociones en Tecnología**
: Quieres lanzar una promoción exclusiva para los productos de la categoría `'Tecnología'` que tengan un precio superior a `300000`.

Para lograr esto, tenemos que filtrar de dos formas: por categoría, por precio.

**a) Filtrar por Categoría**

Para obtener todos los productos que pertenecen a la categoría `'Tecnología'`:

```sql
SELECT * FROM productos 
WHERE categoria = 'Tecnología';
```
{: .nolineno }

**b) Filtrar por Precios**

Para obtener todos los productos con un precio superior a `300000`:

```sql
SELECT * FROM productos 
WHERE precio > 300000;
```
{: .nolineno }

**c) Combinar Condiciones**

Para extraer productos de `'Tecnología'` que además tengan un precio mayor a `300000`:


```sql
SELECT * FROM productos 
WHERE categoria = 'Tecnología' 
  AND precio > 300000;
```
{: .nolineno }

![mysql filtros productos](mysql/mysql-where-electroshop-1-light.png){: .light }
![mysql filtros productos](mysql/mysql-where-electroshop-1-dark.png){: .dark }

## **La Cláusula ORDER BY: Ordenar Resultados**

Después de filtrar los datos, es fundamental poder ordenarlos de forma que la información sea fácil de analizar.

### **La Situación**

**Reabastecimiento de Accesorios**
: Algunos productos de la categoría `'Accesorios'` están casi agotados. Para planificar un pedido de reabastecimiento, necesitas identificar cuáles tienen menos de 20 unidades en `stock` y ordenarlos alfabéticamente para una revisión rápida.

Para lograr esto, tenemos que **filtrar** y luego **ordenar**.

**a) Ordenamiento Simple**

Para ordenar los productos de `'Tecnología'` de menor a mayor precio:

```sql
SELECT * FROM productos 
WHERE categoria = 'Tecnología' 
ORDER BY precio ASC;
```
{: .nolineno }

- `ASC`: significa orden ascendente (de menor a mayor).
- `DESC`: (si se usara) indica un orden descendente (de mayor a menor).

**Ordenamiento por Múltiples Columnas**

Si deseas ordenar los productos por categoría y, dentro de cada categoría, por precio, podemos hacer lo siguiente:

```sql
SELECT * FROM productos 
ORDER BY categoria ASC, precio ASC;
```
{: .nolineno }

Esto primero agrupa los productos por categoría y luego los ordena por precio dentro de cada grupo.

![mysql order by productos](mysql/mysql-order-by-productos-1-light.png){: .light }
![mysql order by productos](mysql/mysql-order-by-productos-1-dark.png){: .dark }



```sql
SHOW GRANTS FOR 'mcherrera'@'localhost';
```
{: .nolineno }

Para otorgar privilegios a un usuario, usamos el comando `GRANT`. Por ejemplo, para darle a un usuario acceso completo a la base de datos `tienda`, puedes ejecutar el siguiente comando:

```sql
GRANT ALL PRIVILEGES ON tienda.* TO 'mcherrera'@'localhost';
```
{: .nolineno }

Este comando concede todos los privilegios sobre la base de datos `tienda` al usuario `mcherrera`.

![Otorgar privilegios a un usuario](mysql/mysql-grant-privileges-dark.png){: .dark }
![Otorgar privilegios a un usuario](mysql/mysql-grant-privileges-light.png){: .light }

### **Revocar Permisos de un Usuario**

Para revocar los privilegios de un usuario, se puede utilizar el comando `REVOKE` de la siguiente manera:

```sql
REVOKE ALL PRIVILEGES ON tienda.* FROM 'mcherrera'@'localhost';
```
{: .nolineno }

### **Aplicar Cambios de Privilegios**

Después de otorgar o revocar privilegios, es recomendable ejecutar el siguiente comando para que los cambios surtan efecto:

```sql
FLUSH PRIVILEGES;
```
{: .nolineno }

Este comando recarga los privilegios y asegura que se apliquen correctamente.

Si deseas eliminar al usuario y sus privilegios, usamos el comando `DROP USER`:

```sql
DROP USER 'mcherrera'@'localhost';
```
{: .nolineno }



#### **Resumen de Comandos**

| Acción|Comando SQL|
|:------|:----------|
|Crear usuario|`CREATE USER 'usuario'@'host' IDENTIFIED BY 'pass';`|
|Ver privilegios de un usuario|`SHOW GRANTS FOR 'usuario'@'host';`|
|Otorgar privilegios|`GRANT ALL PRIVILEGES ON base_de_datos.* TO 'usuario'@'host';`|
|Revocar privilegios|`REVOKE SELECT ON base_de_datos.* FROM 'usuario'@'host';`|
|Aplicar cambios|`FLUSH PRIVILEGES;` |
|Eliminar usuario|`DROP USER 'usuario'@'host';`|

---

Administrar los privilegios de usuarios de manera eficiente en MySQL es crucial para mantener la seguridad y el buen funcionamiento de tu base de datos.