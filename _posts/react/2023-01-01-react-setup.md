---
title: 💻 Set up para React
author: enidev911
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---

Cuando inicias en React, tienes que configurar previamente un entorno de desarrollo y con ello poner en marcha tu primer proyecto. Siguiendo unos sencillos paso podemos comenzar a crear aplicaciones modernas y dinámicas en poco tiempo.


## 🔧 Requisitos Previos

Antes de comenzar, debemos tener instaladas las siguierntes herramientas en nuestra máquina:

- [Node.js](https://nodejs.org/en/){:target='_blank'}: Necesitarás **Node.js 14.18.0** o superior para este y otros turoriales que publicaré. [Vite](https://vite.dev/){: target='_blank' } requiere al menos esta versión.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://yarnpkg.com/){:target='_blank'}): Son administradores de paquetes que te permiten gestionar las dependencias de un proyecto. **npm** viene preinstalado con **Node.js**, pero puedes optar por otra alternativa.

## 📝 Pasos para Crear un Proyecto React

Existen varias maneras de crear y configurar un proyecto de React, sin embargo la forma más tradicional y en su momento era la forma más sencilla es usando el paquete oficial `create-react-app`, que configura todo automáticamente.

### Usando create-react-app

1. Para ello abrimos una terminal y ejecutamos el siguiente comando:

```terminal
npx create-react-app <nombre-proyecto>
```

Este comando creará una carpeta con el nombre del proyecto `<nombre-proyecto>` y descargará todas las dependencias necesarias para empezar.

{: start="2" }
2. Una vez de haya completado la instalación, navegamos a la carpeta del proyecto generado:

```terminal
cd nombre-proyecto
```

{: start="3" }
3. Para ver el proyecto en acción, ejecutamos el siguiente comando:

```terminal
npm start
```

Esto iniciará el servidor de desarrollo y abrirá automáticamente la aplicación en el navegador en <http://localhost:3000>.

> Ahora podrás ver los cambios en tiempo real al modificar archivos del proyecto.
{: .prompt-info }


