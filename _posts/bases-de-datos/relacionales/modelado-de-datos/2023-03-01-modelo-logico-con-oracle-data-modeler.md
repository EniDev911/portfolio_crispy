---
title: "Crear un Modelo Lógico con Oracle Data Modeler"
description: "Un __modelo lógico de datos__ es una representación estructurada y detallada de los datos que maneja un sistema. En este artículo, te voy a explicar para qué sirve y cómo puedes crear uno usando una herramienta gratuita llamada __Oracle Data Modeler__."
categories: [Bases de Datos Relacionales, "Modelado de Datos"]
tags: [Bases de Datos, "Modelado de Datos"]
---

Cuando estás empezando a __diseñar una base de datos__, es normal sentirse un poco perdido con palabras como _modelo conceptual_, _modelo lógico_ o _modelo físico_. En este artículo vamos a despejar esas dudas. En especial, quiero que comprendas qué es ese paso clave llamado __modelo lógico__, por qué es tan importante y cómo, con una herramienta muy amigable, puedes crear tu propio modelo lógico sin complicarte.

## __¿Qué es un Modelo Lógico de Datos?__

Un __modelo lógico de datos__ es una representación __estructurada__ y __detallada__ de los datos que manejará una organización o sistema, pero sin entrar en detalles específicos de cómo se almacenan físicamente en una base de datos.

__Diferencias clave__:

| Tipo de Modelo | Qué representa                           | Nivel de detalle                                         |
| -------------- | ---------------------------------------- | -------------------------------------------------------- |
| **Conceptual** | Entidades y relaciones generales         | Alto nivel, sin detalles técnicos                        |
| **Lógico**     | Entidades, atributos, relaciones, reglas | Detallado, independiente del motor BD                    |
| **Físico**     | Estructura de tablas, columnas, índices  | Detallado, específico a un sistema (Oracle, MySQL, etc.) |

## __Paso 1: Instalar Oracle SQL Developer Data Modeler__

- Visita [Oracle SQL Developer Data Modeler](https://www.oracle.com/cl/database/sqldeveloper/technologies/sql-data-modeler/download/){:target='_blank'}
- Descarga la versión compatible con tu sistema operativo.
- Descomprime el kit de Oracle Data Modeler en el directorio de preferencia.

## __Paso 2: Crear un Nuevo Modelo Lógico__

__1\. Iniciar Oracle el Data Modeler__:
- En sistema con __Windows__, haz doble clic en el archivo `datadatamodeler64.exe`.
- En sistemas __Linux__ y __MacOS__, ejecute `sh datamodeler.sh`.

![abrir datamodeler](modelado-de-datos/open-datamodeler.webp){: w="600"}

- Al abrir la interfaz, verás un área de trabajo en blanco lista para que empieces a crear tu modelo. Si no aparece de inmediato, puedes buscar el modelo en el panel del explorador lateral y hacer doble clic para mostrarlo en pantalla:

![mostrar área de trabajo](modelado-de-datos/abrir-modelo-logico.webp)