---
title: Leer y Escribir archivos en Node.js
author: enidev911
categories: [Desarrollo Web, nodejs]
tags: [desarrollo web, nodejs]
---

Para leer datos JSON, **Node.js** tiene el módulo **fs**. Hay 2 funciones disponibles en este módulo que podemos usar para leer archivos del sistema **readFile** y **readFileSync**. La función `readFileSync` lee los datos de un archivo de forma **síncrona**, lo que significa que esta función **bloquea la ejecución del resto del código hasta que se leen todos los datos de un archivo**, esta función es particularmente útil cuando se requiere que la aplicación cargue ajustes de configuración antes de poder realizar cualquier otra tarea.

**Ejemplo**

{% tabs ex_readfile_1 %}
{% tab ex_readfile_1 Código %}
```javascript
'use strinct'
const fs = require('fs');

const rawdata = fs.readFileSync('datos.json');
console.log(rawdata);

const datos = JSON.parse(rawdata);
console.log(datos);
```
{: .nolineno }
{% endtab %}
{% tab ex_readfile_1 Datos %}
```json
{
  "comites": [
    {
      "nombre": "Comite Alpha",
      "usuarios": [
        {
          "nombre": "Juan Pérez",
          "email": "juan.perez@example.com"
        },
        {
          "nombre": "Laura Gómez",
          "email": "laura.gomez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Beta",
      "usuarios": [
        {
          "nombre": "Carlos López",
          "email": "carlos.lopez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Gamma",
      "usuarios": [
        {
          "nombre": "Ana Martínez",
          "email": "ana.martinez@example.com"
        },
        {
          "nombre": "Ricardo Ruiz",
          "email": "ricardo.ruiz@example.com"
        },
        {
          "nombre": "Sara López",
          "email": "sara.lopez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Delta",
      "usuarios": [
        {
          "nombre": "Pedro Hernández",
          "email": "pedro.hernandez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Epsilon",
      "usuarios": [
        {
          "nombre": "María Fernández",
          "email": "maria.fernandez@example.com"
        },
        {
          "nombre": "Luis Sánchez",
          "email": "luis.sanchez@example.com"
        }
      ]
    }
  ]
}
```
{: file="datos.json" }
{% endtab %}
{% endtabs %}

Ahora al ejecutar el script, verías un resultado como el siguiente:

```
<Buffer 7b 0a 20 20 22 63 6f 6d 69 74 65 73 ... 1271 more bytes>
{
  comites: [
    { nombre: 'Comite Alpha', usuarios: [Array] },
    { nombre: 'Comite Beta', usuarios: [Array] },
    { nombre: 'Comite Gamma', usuarios: [Array] },
    { nombre: 'Comite Delta', usuarios: [Array] },
    { nombre: 'Comite Epsilon', usuarios: [Array] }
  ]
}
```
{: .nolineno .noheader }

Como vemos, al imprimir el objeto `rawdata` se obtiene datos sin procesar (en un `Buffer`). Sin embargo buscamos leer el archivo en su formato **JSON**, no los datos hexadecimales sin procesar. Aquí es dónde `JSON.parse()` entra en juego, esta función maneja el análisis de los datos sin procesar y los convierte en una estructura de datos que JavaScript puede entender y manipular.

## **readFile**

La función `readFile` en node es parte también del módulo `fs` y se utiliza para leer el contenido de un archivo de manera **asíncrona**.

**La sintaxis es la siguiente**

```js
fs.readFile(path, options, callback);
```
{: .nolineno }

- `path`: La ruta del archivo que deseas leer. Puede ser una cadena de texto con la ruta del archivo o un objeto `Buffer` o `URL` (a partir de Node.js 16).
- `options`: (Opcional) Puedes especificar las opciones como:
    - `encoding`: El formato en el que deseas leer el archivo (por ejemplo, `'utf8'` para texto). Si no se especifica, el resultado será un `Buffer`.
    - `flag`: (Opcional) Especifica el modo en que se abre el archivo. Los valores comunes son `'r'` (lectura), `'w'` (escritura), etc.
- `callback`: La función de retorno que se ejecuta después de leer el archivo. Recibe dos parámetros:
    - `err`: Un objeto de error si ocurre algún problema al leer el archivo.
    - `data`: El contenido del archivo leído (puede ser un `Buffer` o una cadena, dependiendo de si especificaste un `encoding`).

**Ejemplo**

{% tabs ex_readfile_2 %}
{% tab ex_readfile_2 Código %}
```javascript
'use strinct'
const fs = require('fs');

fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo');
    console.log(data);
});
```
{: .nolineno }
{% endtab %}
{% tab ex_readfile_2 Datos %}
```json
{
  "comites": [
    {
      "nombre": "Comite Alpha",
      "usuarios": [
        {
          "nombre": "Juan Pérez",
          "email": "juan.perez@example.com"
        },
        {
          "nombre": "Laura Gómez",
          "email": "laura.gomez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Beta",
      "usuarios": [
        {
          "nombre": "Carlos López",
          "email": "carlos.lopez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Gamma",
      "usuarios": [
        {
          "nombre": "Ana Martínez",
          "email": "ana.martinez@example.com"
        },
        {
          "nombre": "Ricardo Ruiz",
          "email": "ricardo.ruiz@example.com"
        },
        {
          "nombre": "Sara López",
          "email": "sara.lopez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Delta",
      "usuarios": [
        {
          "nombre": "Pedro Hernández",
          "email": "pedro.hernandez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Epsilon",
      "usuarios": [
        {
          "nombre": "María Fernández",
          "email": "maria.fernandez@example.com"
        },
        {
          "nombre": "Luis Sánchez",
          "email": "luis.sanchez@example.com"
        }
      ]
    }
  ]
}
```
{: file="datos.json" }
{% endtab %}
{% endtabs %}

Ahora al ejecutar el script, verías un resultado como el siguiente:

```
Contenido: del archivo:
{
  "comites": [
    {
      "nombre": "Comite Alpha",
      "usuarios": [
        {
          "nombre": "Juan Pérez",
          "email": "juan.perez@example.com"
        },
        {
          "nombre": "Laura Gómez",
          "email": "laura.gomez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Beta",
      "usuarios": [
        {
          "nombre": "Carlos López",
          "email": "carlos.lopez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Gamma",
      "usuarios": [
        {
          "nombre": "Ana Martínez",
          "email": "ana.martinez@example.com"
        },
        {
          "nombre": "Ricardo Ruiz",
          "email": "ricardo.ruiz@example.com"
        },
        {
          "nombre": "Sara López",
          "email": "sara.lopez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Delta",
      "usuarios": [
        {
          "nombre": "Pedro Hernández",
          "email": "pedro.hernandez@example.com"
        }
      ]
    },
    {
      "nombre": "Comite Epsilon",
      "usuarios": [
        {
          "nombre": "María Fernández",
          "email": "maria.fernandez@example.com"
        },
        {
          "nombre": "Luis Sánchez",
          "email": "luis.sanchez@example.com"
        }
      ]
    }
  ]
}
```
{: .nolineno .noheader }

Como vemos al imprimir el objeto `data` que pasamos en el callback de `fs.readFile()` nos muestra una cadena de texto, ya que especificamos el `encoding` en `'utf8'`, de lo contrario sería un `Buffer` lo que se mostraría.

Podemos comprobar que la función es **asíncrona**, añadiendo un `console.log()` después de la función:

```javascript
'use strinct'
const fs = require('fs');

fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo');
    console.log(data);
});
console.log("Esto se imprimirá antes que data");
```
{: .nolineno }


### **Leer un JSON usando require**

En **Node.js**, puedes leer y cargar un archivo JSON de una forma muy sencilla utilizando `require()`. Esto es posible porque `require()` no solo se usa para cargar módulos, sino que también puede cargar archivos JSON de manera automática y parsearlos como objetos JavaScript.

**Ejemplo**

```javascript
// Carga el archivo JSON usando require
const datos = require('./datos.json');

// Ahora podemos trabajar con el objeto JSON
console.log(datos);

// Ejemplo de acceder a los datos
datos.comites.forEach(comite => {
  console.log(`Comité: ${comite.nombre}`);
  comite.usuarios.forEach(usuario => {
    console.log(`  Usuario: ${usuario.nombre}, Email: ${usuario.email}`);
  });
});
```
{: .nolineno }

Al ejecutar el script, deberías obtener el siguiente resultado:

```
{
  comites: [
    { nombre: 'Comite Alpha', usuarios: [Array] },
    { nombre: 'Comite Beta', usuarios: [Array] },
    { nombre: 'Comite Gamma', usuarios: [Array] },
    { nombre: 'Comite Delta', usuarios: [Array] },
    { nombre: 'Comite Epsilon', usuarios: [Array] }
  ]
}
Comité: Comite Alpha
  Usuario: Juan Pérez, Email: juan.perez@example.com
  Usuario: Laura Gómez, Email: laura.gomez@example.com
Comité: Comite Beta
  Usuario: Carlos López, Email: carlos.lopez@example.com
Comité: Comite Gamma
  Usuario: Ana Martínez, Email: ana.martinez@example.com
  Usuario: Ricardo Ruiz, Email: ricardo.ruiz@example.com
  Usuario: Sara López, Email: sara.lopez@example.com
Comité: Comite Delta
  Usuario: Pedro Hernández, Email: pedro.hernandez@example.com
Comité: Comite Epsilon
  Usuario: María Fernández, Email: maria.fernandez@example.com
  Usuario: Luis Sánchez, Email: luis.sanchez@example.com
```
{: .nolineno .noheader }


---

## **Escribir en archivos JSON**

Crear y escribir archivos en formato JSON es similalar a las funciones `readFile` y `readFileSync`, sabemos que debemos usar el módulo `fs`, pero para escribir archivos utilizaremos las funciones `writeFile` y `writeFileSync` como sugieren los nombres, la función `writeFile` escribe datos de forma **asincrónica** mientras `writeFileSync` lo hace de manera **síncrona**.

**Ejemplo**

```javascript
const fs = require("fs");
// Datos iniciales
const datosIniciales = {
    "comites": []
};

// Creamos el archivo con datos iniciales si no existe
fs.writeFileSync("datos.json", JSON.stringify(datosIniciales, null, 2), (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
    } else {
        console.log('Archivo JSON creado con éxito');
    }
});
```
{: .nolineno }

Tenga en cuenta que aquí tenemos que utilizar la función `JSON.stringify()` antes de guardar los datos. Al igual que necesitabamos analizar los datos en formato **JSON** cuando leemos un archivo **JSON**, necesitamos <<secuenciar>> los datos antes de almacenarlos en formato de cadena en el archivo.

El problema que tenemos en el ejemplo anterior, es que sobreescribimos el archivo **datos.json** cada vez que ejecutemos el script.

### **Agregar nuevos objetos al archivo JSON**

Ahora que tenemos el archivo creado, podemos agregar nuevos objetos (en este caso, un nuevo comité) en la lista `comites`.


**Ejemplo**

```javascript
const fs = require('fs');
filePath = 'datos.json';

// Nuevo comité a agregar
const nuevoDato = {
  nombre: "Comité Gamma",
  usuarios: [
    { nombre: "Carlos López", email: "carlos.lopez@example.com" },
    { nombre: "Ana García", email: "ana.garcia@example.com" }
  ]
};

// Leer el archivo JSON existente
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    // Parsear el contenido del archivo JSON a un objeto JavaScript
    const jsonData = JSON.parse(data);

    // Agregar el nuevo comité a la lista de comités
    jsonData.comites.push(nuevoDato);

    // Escribir el archivo actualizado
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
      } else {
        console.log('Nuevo comité agregado al archivo JSON');
      }
    });
  } catch (parseError) {
    console.error('Error al parsear el JSON:', parseError);
  }
});
```
{: .nolineno }
