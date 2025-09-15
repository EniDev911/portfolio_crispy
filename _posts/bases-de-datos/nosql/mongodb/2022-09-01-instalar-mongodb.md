---
title: "Instalación y configuración de MongoDB"
icon: mongo
categories: ["Bases de datos NOSQL", "MongoDB"]
permalink: mongodb/instalacion
---

MongoDB es una base de datos NoSQL orientada a documentos, muy popular para proyectos modernos gracias a su flexibilidad y escalabilidad.

### Instalación en macOS

Si no tienes [**Homebrew**](https://brew.sh/){: target='_blank' } instalado en tu sistema, debes instalarlo primero. Homebrew es un gestor de paquetes para macOS que facilita la instalación de software.

1. Abrimos una terminal.
2. Ejecutamos el siguiente comando:

```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

{: start="3"}
3. Sigue las instrucciones que aparecen en pantalla para completar la instalación.

Una vez instalado Homebrew, realizamos los siguientes pasos para instalar PostgreSQL.

Primero asegúrate de que Homebrew esté actualizado:

```terminal
brew update
```

Luego, instalamos mongodb con el siguiente comando:

```terminal
brew tap mongodb/brew
brew install mongodb-community@7.0
```

> En Homebrew, un tap es básicamente un repositorio GitHub que contiene recetas (fórmulas) de instalación.
{: .prompt-info }

Luego, inicia MongoDB:

```terminal
brew services start mongodb-community@7.0
```
__Explicación__:

1. Inicia el proceso `mongod` (el servidor de MongoDB).
2. Lo deja corriendo como servicio en **launchd** (administrador de servicios en macOS).
3. MongoDB queda escuchando por defecto en: `mongodb://localhost:27017`


Verificar que está corriendo:**

```terminal
brew services list
```

Busca la línea de `mongodb-community@7.0` → debería salir como `started`.

También puedes probar con:

```terminal
ps aux | grep mongod
```

**Abrir el shell de MongoDB (`mongosh`):**

```terminal
mongosh
```

Si se conecta, verás el prompt de MongoDB:

```terminal
test> 
```

Probar un comando sencillo en la consola:

```terminal
show dbs
```

![conexion mongosh](mongodb/conexion-con-mongosh-dark.webp){: .dark }

###  Manejo del servicio

Detener MongoDB:

```terminal
brew services stop mongodb-community@7.0
```

Reiniciar MongoDB:

```terminal
brew services restart mongodb-community@7.0
```

