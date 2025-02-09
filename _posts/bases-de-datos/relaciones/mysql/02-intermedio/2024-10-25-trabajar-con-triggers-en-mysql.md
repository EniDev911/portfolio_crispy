---
title: "MySQL 🐬 : Trabajar con Trigger"
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - 02 Intermedio"]
tags: [Bases de Datos]
image:
    path: posters/mysql-triggers.png
    alt: "Trabajar con Triggers en MySQL"
---

Los **triggers** (disparadores) en MySQL son una poderosa herramienta que nos permite ejecutar automáticamente ciertas acciones en respuesta a eventos específicos en la base de datos. En otras palabras, un trigger se asocia a una tabla y se ejecuta automáticamente cuando ocurre un evento de modificación de datos (`INSERT`, `UPDATE`, `DELETE`) en esa tabla.

Vamos a ver varios ejemplos prácticos de como usar triggers en **MySQL 5.7** y versiones superiores.

### **Sintaxis Básica para crear un Trigger**

La sintaxis básica para crear un trigger en MySQL es la siguiente:

```sql
DELIMITER ::

CREATE TRIGGER nombre_trigger
    [BEFORE | AFTER] [INSERT | UPDATE | DELETE]
    ON nombre_tabla
    FOR EACH ROW
    BEGIN
     -- Sentencias SQL a Ejecutar
    END::

DELIMITER ;
```
{: .nolineno }

**Explicación de sintaxis:**

- `DELIMITER`: cambia el carácter que MySQL usa para identificar el final de una instrucción SQL.
- `nombre_trigger`: El nombre que le damos al trigger.
- `BEFORE | AFTER`: Especifica si el trigger se ejecutará **antes** o **después** del evento.
- `INSERT | UPDATE | DELETE`: El tipo de evento que activará el trigger.
- `nombre_tabla`: La tabla sobre la que se activa el trigger.
- `FOR EACH ROW`: Significa que el trigger se ejecuta una vez por cada fila afectada por la consulta.
- Bloque `BEGIN ... END;`: Contiene las sentencias SQL que se ejecutarán cuando el trigger sea activado.

En MySQL, cuando se define un trigger, especialmente cuando se incluye una estructura como `BEGIN ... END`, necesitas asegurarte de utilizar el delimitador adecuado para que el código del trigger se ejecute correctamente.

Por defecto, MySQL usa `;` como delimitador, pero esto puede causar problemas si el trigger incluye múltiples instrucciones SQL dentro de `BEGIN ... END`. Debes cambiar temporalmente el delimitador para evitar que MySQL interprete el `;` interno del trigger.


## **Trigger para Auditar Cambios en una Tabla**

Supongamos que tenemos una tabla llamada **`productos`** y queremos llevar un registro de todos los cambios realizados (insertar, actualizar o eliminar) en una tabla de auditoría **`productos_auditoria`**.

### **Paso 1: Crear la Base de Datos y Seleccionarla**

Para ello vamos a crear una base de datos llamada **`bd_tienda`** para trabajar y la seleccionamos:

```sql
CREATE DATABASE `bd_tienda`;
USE bd_tienda;
```
{: .nolineno }

### **Paso 2: Crear las Tablas**

Una vez seleccionada la base de datos, creamos la tabla `productos` y la tabla `productos_auditoria`:

```sql
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio INT,
    stock INT
);

CREATE TABLE productos_auditoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    accion VARCHAR(10),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    datos_anterior JSON
);
```
{: .nolineno }

### **Paso 3: Crear un Trigger para Insertar en la Auditoría**

Queremos que cada vez que se inserte un nuevo producto, se registre en `productos_auditoria`. El trigger se ejecutará **después de la inserción** de un nuevo producto:

```sql
DELIMITER ::

CREATE TRIGGER after_insert_producto
AFTER INSERT ON productos
FOR EACH ROW
BEGIN
    INSERT INTO productos_auditoria (producto_id, accion, datos_anterior)
    VALUES (NEW.id, 'INSERT', JSON_OBJECT('nombre', NEW.nombre, 'precio', NEW.precio,'stock', NEW.stock));
END::

DELIMITER ;
```
{: .nolineno }

Aquí tenemos algunas palabras claves que no se explican en la sintaxis básica pero se utilizan para lo siguiente:

- `NEW`: En un trigger, `NEW` hace referencia a los valores que se estàn insertando o modificando. En este caso, estamos utilizando los valores recién insertados en la tabla `productos`.
- `JSON_OBJECT`: Esta función crea un objeto JSON con los datos del producto insertado.

### **Paso 4: Probar el Trigger**

Insertamos un producto y verificamos que se registre en la tabla auditoría:

```sql
INSERT INTO productos (nombre, precio, stock) 
VALUES ('Camiseta', 14990, 100);

SELECT * FROM productos_auditoria;
```
{: .nolineno }

Esto debería registrar una fila en la tabla `productos_auditoria` con la acción `'INSERT'` y los datos del nuevo producto.

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="MySQL"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; INSERT INTO productos (nombre, precio, stock) VALUES ('Camiseta', 14990, 100);</span>
Query OK, 1 row affected (0.03 sec)
<span class="hl">mysql&gt; SELECT * FROM productos_auditoria;</span>
+----+-------------+--------+---------------------+-------------------------------------------------------+
| id | producto_id | accion | fecha               | datos_anterior                                        |
+----+-------------+--------+---------------------+-------------------------------------------------------+
|  1 |           1 | INSERT | 2024-10-25 18:08:35 | {"stock": 100, "nombre": "Camiseta", "precio": 14990} |
+----+-------------+--------+---------------------+-------------------------------------------------------+
1 row in set (0.00 sec)
</pre></code>
</div>
</div>


### **Trigger Para evitar la Eliminación de Productos con Stock**

Ahora, supongamos que queremos evitar que los usuarios eliminen productos si su `stock` es mayor que cero. Utilizaremos un trigger **antes de la eliminación** (`BEFORE DELETE`).

### **Paso 1: Crear el Trigger**

```sql
DELIMITER ::

CREATE TRIGGER before_delete_producto
BEFORE DELETE ON productos
FOR EACH ROW
BEGIN
    IF OLD.stock > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No se puede eliminar el producto con stock disponible';
    END IF;
END::

DELIMITER ;
```
{: .nolineno }

Aquí tenemos algunas palabras claves que no se explican en la sintaxis básica pero se utilizan para lo siguiente:

- `OLD`: Hace referencia a los valores de la fila antes de la operación (`DELETE`), en este caso, el valor de `stock` antes de eliminar el producto.
- `SIGNAL SQLSTATE`: Genera una señal de error personalizado, interrumpiendo la operación.
- `SQLSTATE '45000'`: Código de error definido por el usuario para lanzar una excepción personalizada.
- `SET MESSAGE_TEXT = '...'`: Define el mensaje de error que se muestra cuando se activa la señal.

### **Paso 2: Probar el Trigger**

Eliminamos un producto existente que tenga `stock > 0` y verificamos que se dispare el trigger:

```sql
DELETE FROM productos WHERE nombre = 'Camiseta';
```
{: .nolineno }

Esto debería desencadenar el evento y disparar el trigger `before_delete_producto` mostrando el mensaje de la excepción:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="MySQL"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mysql&gt; DELETE FROM productos WHERE nombre = 'Camiseta';
<span class="hl">ERROR 1644 (45000): No se puede eliminar el producto con stock disponible</span>
</pre></code>
</div>
</div>

### **Consideraciones sobre los Trigger**

Como hemos visto los triggers en MySQL son una herramienta poderosa para automatizar, auditar, etc. Pero debemos considerar los siguiente:

- **impacto en el rendimiento**: Los triggers pueden afectar el rendimiento, especialmente cuando se ejecutan operaciones complejas o se disparan con mucha frecuencia.
- **recursividad**: Ten cuidado con los trigger recursivos. Si un trigger realiza una operación que activa el mismo trigger nuevamente, puede llevar a una recursión infinita.

