---
title: "MySQL 🐬 : Trabajar con Trigger en MySQL"
author: enidev911
categories: [Bases de Datos Relacionales, MySQL]
tags: [Bases de Datos]
---

Los **triggers** (disparadores) en MySQL son una podersoa herramienta que nos permite ejecutar automáticamente ciertas acciones en respuesta a eventos específicos en la base de datos. En otras palabras, un trigger se asocia a una tabla y se ejecuta automáticamente cuando ocurre un evento de modificación de datos (`INSERT`, `UPDATE`, `DELETE`) en esa tabla.

Vamos a ver varios ejemplos prácticos de como usar triggers en **MySQL 5.7** y versiones superiores.

### Sintaxis Básica para crear un Trigger

La sintaxis básica para crear un trigger en MySQL es la siguiente:

```sql
CREATE TRIGGER nombre_trigger
    [BEFORE | AFTER] [INSERT | UPDATE | DELETE]
    ON nombre_tabla
    FOR EACH ROW
    BEGIN
     -- Sentencias SQL a Ejecutar
    END;
```
{: .nolineno }

**Explicación de sintaxis:**

- `nombre_trigger`: El nombre que le damos al trigger.
- `BEFORE | AFTER`: Especifica si el trigger se ejecutará **antes** o **después** del evento.
- `INSERT | UPDATE | DELETE`: El tipo de evento que activará el trigger.
- `nombre_tabla`: La tabla sobre la que se activa el trigger.
- `FOR EACH ROW`: Significa que el trigger se ejecuta una vez por cada fila afectada por la consulta.
- Bloque `BEGIN ... END;`: Contiene las sentencias SQL que se ejecutarán cuando el trigger sea activado.

## Trigger para Auditar Cambios en una Tabla

Supongamos que tenemos una tabla llamada **`productos`** y queremos llevar un registro de todos los cambios realizados (insertar, actualizar o eliminar) en una tabla de auditoría **`productos_auditoria`**.

### Paso 1: Crear las Tablas

Primero, creamos la tabla `productos` y la tabla `productos_auditoria`:

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

### Paso 2: Crear un Trigger para Insertar en la Auditoría

Queremos que cada vez que se inserte un nuevo producto, se registre en `productos_auditoria`. El trigger se ejecutará **después de la inserción** de un nuevo producto:

```sql
CREATE TRIGGER after_insert_producto
AFTER INSERT ON productos
FOR EACH ROW
BEGIN
    INSERT INTO productos_auditoria (producto_id, accion, datos_anterior)
    VALUES (NEW.id, 'INSERT', JSON_OBJECT('nombre', NEW.nombre, 'precio', NEW.precio,'stock', NEW.stock));
END;
```
{: .nolineno }

- `NEW`: En un trigger, `NEW` hace referencia a los valores que se estàn insertando o modificando. En este caso, estamos utilizando los valores recién insertados en la tabla `productos`.
- `JSON_OBJECT`: Esta función crea un objeto JSON con los datos del producto insertado.

### Paso 3: Probar el Trigger

Insertamos un producto y verificamos que se registre en la tabla auditoría:

```sql
INSERT INTO productos (nombre, precio, stock) 
VALUES ('Camiseta', 14990, 100);

SELECT * FROM productos_auditoria;
```
{: .nolineno }

Esto debería registrar una fila en la tabla `productos_auditoria` con la acción `'INSERT'` y los datos del nuevo producto.

### Trigger Para evitar la Eliminación de Productos con Stock

Ahora, supongamos que queremos evitar que los usuarios eliminen productos si su `stock` es mayor que cero. Utilizaremos un trigger **antes de la eliminación** (`BEFORE DELETE`).

```sql
CREATE TRIGGER before_delete_producto
BEFORE DELETE ON productos
FOR EACH ROW
BEGIN
    IF OLD.stock > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No se puede eliminar el producto con stock disponible';
    END IF;
END;
```
{: .nolineno }



### Consideraciones sobre los Trigger

Como hemos visto los triggers en MySQL son una herramienta poderosa para automatizar, auditar, etc. Pero debemos considerar los siguiente:

- **impacto en el rendimiento**: Los triggers pueden afectar el rendimiento, especialmente cuando se ejecutan operaciones complejas o se disparan con mucha frecuencia.
- **recursividad**: Ten cuidado con los trigger recursivos. Si un trigger realiza una operación que activa el mismo trigger nuevamente, puede llevar a una recursión infinita.

