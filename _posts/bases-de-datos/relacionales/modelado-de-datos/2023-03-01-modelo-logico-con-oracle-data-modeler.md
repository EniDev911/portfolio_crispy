---
title: "Crear un Modelo Lógico con Oracle Data Modeler"
description: "Un __modelo lógico de datos__ es una representación estructurada y detallada de los datos que maneja un sistema. En este artículo, te voy a explicar para qué sirve y cómo puedes crear uno usando una herramienta gratuita llamada __Oracle Data Modeler__."
categories: [Bases de Datos Relacionales, "Modelado de Datos"]
tags: [Bases de Datos, "Modelado de Datos"]
---


Cuando estás empezando a **diseñar una base de datos**, es normal sentirse un poco perdido con términos como *modelo conceptual*, *modelo lógico* o *modelo físico*. Hoy vamos a despejar esas dudas. En particular, quiero que comprendas qué es ese paso clave llamado **modelo lógico**, por qué resulta tan importante y cómo, con una herramienta muy amigable, puedes crear el tuyo sin complicarte.

En el modelado de datos, el proceso se divide en __tres etapas fundamentales__, cada una con un propósito específico para diseñar y construir un sistema de manera eficiente.


![etapas del modelado de datos](https://www.plantuml.com/plantuml/svg/RP1DRjH048NtFaKfh2EIIIGa5YW_4oEa8A7CBBEfT1UUrhIhhEes4K58N80LGh13i6UL8_Wcd80Zq7RRPB3mhggUtlUvJq94ZMtjYo9i7JUeM8EIYSYL9tXN09oXsLOgBTjpyQBmwEAeN9JB_Y9gISVjmVBuoUbXsfR2SUNk20wFnscUkCfbogImE4YBrGQjt3gk86fBnViT5rILsy5ZthBUEBDb2W4M_r2F_aTDdUbx-B6ztzy-VOMNOibBQcP3JMpHN_Cr__hm0ouuEekMGXwloADnmjDy6jNTj542DEhOk0OzXJt0i5CrWtsPO9VTVUMCJAGrtdWCy1QC-BPc70dd7j_GK5-ZEWoFNujstvdmhr583YPB3UHBwMjdrCyJjUn-XXtgYxhnL1D7DAwxPo26rVEpPJvs7zawGxsKDD7LxYwdylMLYY6RjiHH-apog2hIR56w7bCK3-y0--c-YVlFHaDu2cj5svgXinYNKoWNfD1SiJWXjctj_m00){:.light}

![etapas del modelado de datos](https://www.plantuml.com/plantuml/dsvg/NP1DRjH048NtFaKfh2EOW8HWWV8JZ922X3AppARINNXQqwwoghk924BY0gmGWXs2FQiSmJVX11o1xh7D3BPNLVNqliy-3X4rfjPNOUEuGyKMb4n4RZp1-mhW5CscKKbipyIBmht5a_AMYwWb7RVrUVsuNkHjBHoNxfPWyMYSvedBeKoP58uUvCLoZLPk73SGDL7rOSy5LULcwx7NSb9QLcjdDamXmD5_r8TpQiddplpiFkpWp_VFt-2LMFAIczbG5nFwAxxYtnz_mdEEpgAbC8oNvD4uuMa-YUgkKvG0dJeshaDFuG0mx5NDO5yds4L_rpWZ4sc5rnu3l0CZFhMC8-7CurlQrhUe3iFzDwBz3oRyPnIoWobI8_b2IksC-cMYrlsli4TzsNQUMkA8nlLt3CImV75wFXpxJsoTeI8bNNIjknrIm_MrYY6RjyHHIYPxD0tfO56xWgcgtN-0mtnVnyDdeo4yXPMYJMRRMOtBAJGKvD1SiJecjgdrVm40){:.dark}

## ¿Qué es entonces el modelo lógico?

Un __modelo lógico de datos__ es una representación __estructurada__ y __detallada__ de los datos que manejará una organización o sistema, pero sin entrar en detalles específicos de cómo se almacenan físicamente en una base de datos.

__Diferencias clave__:

| Tipo de Modelo | Qué representa                           | Nivel de detalle                                         |
| -------------- | ---------------------------------------- | -------------------------------------------------------- |
| **Conceptual** | Entidades y relaciones generales         | Alto nivel, sin detalles técnicos                        |
| **Lógico**     | Entidades, atributos, relaciones, reglas | Detallado, independiente del motor BD                    |
| **Físico**     | Estructura de tablas, columnas, índices  | Detallado, específico a un sistema (Oracle, MySQL, etc.) |

## Cómo crear un modelo lógico

Para entrar en materia y crear nuestro primer modelo lógico, vamos a comenzar a preparar el entorno de trabajo. Esto es un proceso sencillo, basta con seguir el paso a paso y recomendaciones de los siguientes puntos en orden númerico.

### 1. Obtener Oracle SQL Developer Data Modeler

Para trabajar con Oracle Data Modeler, primero sigue estos pasos:

- Visita [Oracle SQL Developer Data Modeler](https://www.oracle.com/database/sqldeveloper/technologies/sql-data-modeler/download/){:target='_blank'}
- Descarga la versión compatible con tu sistema operativo. En el caso de Windows, se recomienda descargar la versión que viene con el JDK incluido:
![Descarga de Data Modeler con el JDK incluido](modelado-de-datos/download-datamodeler-with-jdk-include.webp)
- Descomprime el kit de Oracle Data Modeler en el directorio de preferencia.

### 2. Crear un nuevo modelo lógico

Una vez descargado, __inicia Oracle Data Modeler__:
- En sistema con __Windows__, haz doble clic en el archivo `datadatamodeler64.exe`.
- En sistemas __Linux__ y __MacOS__, ejecute `sh datamodeler.sh`.

![abrir datamodeler](modelado-de-datos/open-datamodeler.webp){: w="600"}

- Al abrir la interfaz, verás un área de trabajo en blanco lista para que empieces a crear tu modelo. Si no aparece de inmediato, puedes buscar el modelo en el panel del explorador lateral y hacer doble clic para mostrarlo en pantalla:

![mostrar área de trabajo](modelado-de-datos/abrir-modelo-logico.webp)

Esa ventana que se muestra, es nuestra área de trabajo o lienzo para crear nuestro modelo lógico. El modelo lógico del diseño actual tiene por nombre "Logical(Sin título_1)".


Antes que nada, un modelo lógico en datamodeler es, de acuerdo a la documentación oficial de Oracle, un diagrama Entidad-Relación que proporciona una vista de la información del negocio __independiente de la implementación__. Un modelo lógico está compuesto por un conjunto de Entidades, Relaciones, Herencia, Vistas, Subvistas y Visualizaciones.

![Modelo Lógico](https://raw.githubusercontent.com/juan-bol/Modelado/refs/heads/master/images/ModeloLogico.JPG){:width="100%"}

### Entidad

Una entidad es un concepto del que se quiere almacenar cierts información. Una entidad está compuesta por un conjunto de atributos de los cuales uno de ellos debe ser el identificador único o llave de la entidad. Una entidad finalmente es mapeada a una tabla del modelo relacional. Para crear una entidad se debe hacer clic en la opción __Nueva Entidad__ desde el menú de herramientas.