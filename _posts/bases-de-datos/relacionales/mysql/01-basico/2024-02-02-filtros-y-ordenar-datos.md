---
title: "MySQL 🐬 : Uso de WHERE y ORDER BY para Filtrar y Ordenar Datos"
author: enidev911
description: "Las cláusulas `WHERE` y `ORDER BY` nos permiten **filtrar y ordenar** la información que obtienes de una consulta."
categories: [Bases de Datos Relacionales, "MySQL", "Básico"]
mermaid: true
image:
  path: posters/mysql-uso-de-where-y-order-by.webp
  lqip: data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD9D/iAgICQjN/8WyBxH9z+QCAFZQOCBeAAAAsAMAnQEqFAALAD85hrxULykmIzAIAeAnCWwAAFtiav5uaCFRuAAA/uqLXyEPWtCZUj4tVmuH1JwDzu+Riq2UIC7ZzsRFykWjB1P5ERlcXou6UeS5K3UkfwbXneAAAA==
tags: [Bases de Datos]
pin: true
---

Cuando trabajamos con bases de datos, a menudo necesitamos extraer información específica y mostrarla de manera ordenada. Para lograr esto, MySQL nos brinda las cláusula `WHERE` para filtrar datos y `ORDER BY` para ordenarlos según nuestros criterios. En este post, profundizaremos en estas cláusulas y veremos cómo combinarlas para crear consultas más efectivas. Pero antes de sumergirnos en el código, vamos a preparar un escenario que contextualice el uso de estas herramientas.

## **Escenario 1: Tienda "ElectroShop"**

Imagina que eres el administrador de **ElectroShop**, una tienda en línea que se especializa en productos electrónicos y accesorios. Tu principal fuente de información de tu inventario se encuentra en la tabla `productos`. Esta tabla cuenta con las siguiente columnas:

- `id`: Identificador único del producto.
- `nombre`: Nombre del producto.
- `categoria`: Categoría a la que pertenece el producto (por ejemplo, "Tecnología", "Accesorios").
- `precio`: Precio del producto.
- `stock`: Cantidad disponible en inventario.

### **Paso 1: Crear la Base de Datos y la Tabla**

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

### **Paso 2: Insertar algunos datos de ejemplo**

Algunos datos de ejemplos, cambia a la pestaña `SQL` para ver el código:

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

**b) Ordenamiento por Múltiples Columnas**

Si deseas ordenar los productos por categoría y, dentro de cada categoría, por precio, podemos hacer lo siguiente:

```sql
SELECT * FROM productos 
ORDER BY categoria ASC, precio ASC;
```
{: .nolineno }

Esto primero agrupa los productos por categoría y luego los ordena por precio dentro de cada grupo.

![mysql order by productos](mysql/mysql-order-by-productos-1-light.png){: .light }
![mysql order by productos](mysql/mysql-order-by-productos-1-dark.png){: .dark }

**C) Reabastecimiento de Accesorios**

Identificar los productos de `'Accesorios'` que tienen menos de 20 unidades en `stock` y ordenarlos alfabéticamente por nombre:

```sql
SELECT * FROM productos 
WHERE categoria = 'Accesorios' 
  AND stock < 20 
ORDER BY nombre ASC;
```
{: .nolineno }

**Análisis del Query:**

- **Filtrado:**
    - `WHERE categoria = 'Accesorios'`: Selecciona los productos de la categoría `'Accesorios'`.
    - `AND stock < 20`: Limita la consulta a productos con un stock reducido, priorizando aquellos que necesitan ser reabastecidos. 
- **Ordenamiento:**
    - `ORDER BY nombre ASC`: Organiza los productos alfabéticamente para facilitar una revisión rápida y comparativa.


## **Consejos y Buenas Prácticas**

**Usar Alias y Comentarios**

En consultas más complejas, asignar alias a las tablas y comentar partes de la consulta puede facilitar la comprensión y el mantenimiento.

```sql
SELECT p.id, p.nombre, p.precio -- Selecciona id, nombre y precio del producto
FROM productos AS p
WHERE p.categoria = 'Tecnología'
ORDER BY p.precio DESC;
```
{: .nolineno }

**Optimiza con Índices**

Para optimizar el rendimiento de las consultas, puedes crear índices en las columnas que se usan con frecuencia en condiciones de filtrado y ordenamiento. Por ejemplo, si ejecutamos consultas como:

```sql
SELECT * FROM productos 
WHERE categoria = 'Tecnología' 
ORDER BY precio ASC;
```
{: .nolineno }

Puedes crear un índice compuesto en las columnas `categoria`y `precio` para mejorar la eficiencia de la consulta. Aquí tienes un ejemplo:

```sql
-- Crear un índice compuesto para las columnas 'categoria' y 'precio'
CREATE INDEX idx_categoria_precio ON productos(categoria, precio);
```
{: .nolineno }

## **Escenario 2: Publicaciones en Blog**

Imagina que eres el administrador de un blog, tienes la responsabilidad de gestionar y analizar el contenido publicado. Con el tiempo, las publicaciones se acumulan y es necesario tener una forma eficiente de acceder a ellas. Ya sea para ver qué publicaciones están activas, saber quién las escribió, etc.

### **Paso 1: Crear la Base de Datos y la Tabla**

Para preparar el escenario, debes tener la base de datos con la tabla adecuada para almacenar los posts. En este caso, la tabla `posts` tendrá la información sobre el título, el autor, el estado de la publicación (si está publicada, borrador, etc), la fecha de publicación y más:

```sql
CREATE DATABASE blog;

USE blog;

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    autor VARCHAR(100),
    fecha_publicacion DATETIME,
    categoria VARCHAR(50),
    estado VARCHAR(20)
);
```
{: .nolineno }

### **Paso 2: Insertar algunos datos de ejemplo**

Algunos datos de ejemplos, pega el código en tu editor o terminal:

```sql
INSERT INTO posts (titulo, contenido, autor, fecha_publicacion, categoria, estado) VALUES
('Inteligencia Artificial', 'AI está revolucionando la tecnología.', 'Juan Pérez', '2025-02-01 08:00:00', 'Tecnología', 'Publicado'),
('Cambio Climático', 'El clima está cambiando rápidamente.', 'Ana Gómez', '2025-02-03 10:00:00', 'Medio Ambiente', 'Publicado'),
('Trabajo Remoto', 'El teletrabajo es la nueva normalidad.', 'Carlos Martínez', '2025-02-05 14:00:00', 'Trabajo', 'Borrador'),
('Programación', 'Aprender a programar es esencial.', 'Laura Sánchez', '2025-02-07 09:30:00', 'Educación', 'Publicado'),
('Diseño Gráfico', 'El diseño está en constante cambio.', 'Pedro López', '2025-01-30 16:00:00', 'Diseño', 'Publicado');
```
{: .nolineno }

¡Entendido! Aquí te dejo un ejemplo siguiendo el formato de tu situación, pero con un caso relacionado con el blog:


### **Situación**

Recientemente, has notado algunas situaciones en tu blog que requieren atención:

**Revisar los Posts de Trabajo**
: Quieres enfocarte en los posts de la categoría **Trabajo** para ver los que están actualmente **publicados** y hacer algunos ajustes. Para lograrlo, necesitas filtrar por **categoría** y **estado**.

**Publicaciones Pendientes de Revisión**
: Además, tienes varios posts que están en estado de **Borrador** y necesitas revisarlos para decidir si deben ser publicados o si requieren cambios. Para esto, necesitas filtrar todos los posts que estén en estado **Borrador** y que hayan sido creados después de una fecha específica, como **el 1 de febrero de 2025**.


#### **1. Filtrar Posts por Categoría y Estado:**

Quiero obtener todos los posts de la categoría **Trabajo** que ya están **publicados**. Para esto, utilizo el comando `WHERE` para filtrar por categoría y estado.


```sql
SELECT * FROM posts WHERE categoria = 'Trabajo' AND estado = 'Publicado';
```
{: .nolineno }

Esta consulta te devolverá solo los posts de la categoría **Trabajo** que estén **publicados**, lo cual te ayudará a enfocarte en el contenido que ya está disponible para los usuarios.

#### **2. Filtrar Posts por Estado 'Borrador' y Fecha de Publicación:**

Ahora, necesito ver todos los posts que están en estado **Borrador** y fueron creados después del **1 de febrero de 2025**, para hacer una revisión y decidir si se publican o no.

```sql
SELECT * FROM posts WHERE estado = 'Borrador' AND fecha_publicacion > '2025-02-01' ORDER BY fecha_publicacion DESC;
```
{: .nolineno }

Esta consulta filtrará todos los posts que están en estado **Borrador** y cuya fecha de publicación es posterior al **1 de febrero de 2025**, ordenándolos por la fecha de publicación más reciente. Esto te permitirá revisar primero los posts más nuevos que todavía están en proceso de edición.
