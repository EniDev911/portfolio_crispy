---
title: "Crear un Modelo Lógico con Oracle Data Modeler"
description: "Un __modelo lógico de datos__ es una representación estructurada y detallada de los datos que maneja un sistema. En este artículo, te voy a explicar para qué sirve y cómo puedes crear uno usando una herramienta gratuita llamada __Oracle Data Modeler__."
categories: [Bases de Datos Relacionales, "Modelado de Datos"]
tags: [Bases de Datos, "Modelado de Datos"]
---


Cuando estás empezando a **diseñar una base de datos**, es normal sentirse un poco perdido con términos como *modelo conceptual*, *modelo lógico* o *modelo físico*. Hoy vamos a despejar esas dudas. En particular, quiero que comprendas qué es ese paso clave llamado **modelo lógico**, por qué resulta tan importante y cómo, con una herramienta muy amigable, puedes crear el tuyo sin complicarte.

En el modelado de datos, el proceso se divide en __tres etapas fundamentales__, cada una con un propósito específico para diseñar y construir un sistema de manera eficiente.


![etapas del modelado de datos](https://www.plantuml.com/plantuml/svg/ZPF1RjD048RlVefLSwwQH2bfgn2rTcA4L2IKvDZBU7TmLrdFMhDh8eegyG8y1DmvzH7y9Zm9wzI6197Guqx-V_x_cyZNpWFxgZ2HMsigWQ4GZD83vGR5vqY8sB92JgonB383SXrcgIM_r0ye1XVXjR0LgSGo8OjXFmoMzw3iHbCkF5SOFUxi1cQxsUvztjZhpqRZcq5uh-wrN1Cw9uPx2QFsjQz_ZA8_DKycsNJo8MY4R4IlMz7qdLLeR4WYYQMlm4pE6jLqSfPDx-YE_kNv-UMxc9FN2XIwLdzOkK03KbjwWVJ6iyugRvqeMPFK9PZVhXC1RgUcwCNnR9x6Hna7yVbysEyOR-kdN4jx3B0rD5rMa9cG-AdvgIe8kXw77Oc1ZxYjNW1hS47FzJV25rWNw0Awt3bJ2tnhcygYbrpCNoMNHs7Jyt4w67UmQVt37OVj34t-sw8qM21vaBf-8e4abc_YMUi-xAk_aj8IcpFPqkj2Fpml-A_nFLk9AXX2fcti0J_FaVVWK-ssy6cQNYQZADhvzq-LtT3fjBlFbLWng4fkmwDss6dQDLT_KqRNIAhvh7y1){:.light}

![etapas del modelado de datos](https://www.plantuml.com/plantuml/dsvg/ZPJ1RXCn48Rl-nIZzi2fQXAbf4LXrUucYv2AX98SUt7i8RNYdLdPNYAAa7W17WBkdFe8UHEU13lTXOr4Gezs_czcld6qryuBw-lI96wjgH9Mb61HUa4hW_0v0SZOAhGv6xQmD4Akmrt1vEVw0Q5_6KuphadbR0aj37hXOdul56yqhS3R6fCldTh2MjxiwZvLFCsooRJ805uq5z88on33KB9YO2Thoo6_kDToJUWS3FOc63QdlNgXP_9NusIyJCSVGWPa3Bq-xKs6evj--euL6WwDIMBbQs76vp6LZi-NwHtTqR-ONrz_m9IyLaAXQ_A7apCqGcgcPqHllDNBshE3ocgIkXBc3tK2mdN6R2sFElQpY-cWrphURXzNMl8nmGQ8ion4U6a7d-9FTKcYdUCmaHln4NUZby9guKBURhyJFWETeGlgCgvfN_YMuyXmcbzEN-PNHsMBYr7H7xMonVQdEoxR0h7_sx8oM29v8VNsaG09vc-oIKCVvhRVI6c9SKrSULtgXwS2_mNVMvQe0X1wSiI3_cg5Ta--q6udNnJ5LJvCaixhdodUq5dQxkSLT1irVurqOOMgPNUWfCctUEXm6EykfLFY6ad5ZyLl){:.dark}

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

![Modelo Lógico](https://raw.githubusercontent.com/juan-bol/Modelado/refs/heads/master/images/ModeloLogico.JPG){:width="230"}

#### Crear una Entidad

Una entidad es un concepto del que se quiere almacenar cierta información. Una entidad está compuesta por un conjunto de atributos de los cuales uno de ellos debe ser el identificador único o llave de la entidad. Una entidad finalmente es mapeada a una tabla del modelo relacional. Para crear una entidad se debe hacer clic en la opción __Nueva Entidad__ desde el menú de herramientas y luego en el área de trabajo o lienzo:

![Crear nueva entidad en datamodeler](modelado-de-datos/datamodeler-crear-entidad.webp)

Esto abrirá la siguiente pantalla:

![Crear nueva entidad en datamodeler](modelado-de-datos/datamodeler-crear-entidad2.webp)

En este menú se ingresa toda la información como el nombre de la entidad, su abreviatura, entre otros campos, por conveniencia los nombres de las entidades se escriben en singular. A la izquierda de este menú se pueden observar las posibles pestañas para la configuración de la entidad, entre estas se encuentran __Atributos__, __Identificadores únicos__, __Relaciones__ y __Comentarios__. Por ejemplo si creamos la entidad `PRODUCTO` como nombre y `PROD` como abreviatura. A continuación, cambiamos a la pestaña de atributos.

#### Crear Atributos

Un atributo (propiedad, campo) es una característica común de una entidad en particular. Estos atributos son mapeados finalmente a una columna de una tabla en el modelo relacional. Para visualizar los atributos de una entidad se debe abrir la pestaña __Atributos__ en las propiedades de la entidad, lo cual muestra una lista con los atributos y los campos de cada una de ellos, como se muestra en la siguiente figura:

![Crear atributo](modelado-de-datos/datamodeler-crear-atributo.webp)

Para agregar un atributo a la entidad, se debe hacer clic en el botón <kbd>+</kbd> y llenar todos los campos requeridos. Cada atributo requiere un nombre, un tipo de dato y posiblemente algunos parámetros dependiendo del tipo de dato seleccionado. Además, datamodeler nos permite seleccionar si un atributo es __UID Primario__ (hace parte de la llave primaria de la entidad) o si es Obligatorio (`not null`).

A continuación, se muestra un ejemplo de cómo se llena un campo del atributo identificador de la entidad `PRODUCTO`, es decir, su llave primaria:

![Crear atributo primarop](modelado-de-datos/datamodeler-crear-atributo-primario.webp)

Como se puede observar, cuando defines el tipo de origen se habilitan nuevos campos dependiendo del tipo origen que selecciones, en este caso al seleccionar `Numeric` se habilitan las opciones __Precisión__ y __Escala__. Este tipo de dato permite almacenar tanto números enteros como fraccionales, la precisión es el número total de dígitos desde el dígito más significativo hasta el menos significativo, mientras que la escala es el número de dígitos desde la coma hacia el dígito menos significativo. Supongamos que se desea almacenar alrededor de mil productos. Entonces la precisión sería `4` y la escala `0`.

Finalmente se selecciona la opción __UID Primario__ para definir a este atributo como el identificador de la entidad.

Para el resto de atributos, debes llenar los campos requeridos aplicando el mismo procedimiento:

- __Nombre__: Es el nombre del atributo, este debe ser lo más claro y completo posible. Como se desea agregar más atributos, como el nombre del producto y la descripción, estos se deben ajustar según el tipo de información que representan.
- __Tipo de Dato__: Permite especificarle al atributo un dominio o un tipo lógico, o si este es distinto, de colección o estructurado. Un dominio describe un conjunto de posibles valores para ciertos atributos añadiendo algunas restricciones, estos pueden ser creado por la herramienta. Por ahora se usarán los tipos lógicos y más adelante se explicaran los dominios.
- __Tipo de Origen__: Es la especificación del tipo de dato lógico del atributo, permite seleccionar una gran variedad de tipos como lo son __Boolean__, __CHAR__, __BLOB__, __Datetime__, __Numeric__, __VARCHAR__, entre otros. El tipo de dato lógico sugerido para un identificador es el númerico, esto debido a que permitirá posteriormente agregarle generadores de claves secuenciales a la base de datos, así como darle un orden de acuerdo a la creación de cada registro.

A continuación, se observa el resto de atributos:

![Resto de atributos](modelado-de-datos/datamodeler-atributos-desc.webp)

Existen atributos que pueden ser únicos pero no necesariamente primarios. Por ejemplo, el SKU (Stock Kepping Unit) es un código único que una empresa asigna a cada producto para identificarlo internamente y gestionar su control de venta y reabastecimiento, y es obligatorio pero no primario ya que hemos definido otro atributo como el identificador de la entidad. Para definir el atributo SKU como único, cambiamos a la pestaña de __Identificadores Únicos__ y agregamos una nueva clave, luego das doble clic sobre la clave y desplaza el atributo SKU a la derecha:

![Definir atrubuto único](modelado-de-datos/datamodeler-atributo-unico.webp)

En este momento el nuevo identificador único ya ha sido creado con el nombre de "Key_2", para cambiarlo dirigete a la pestaña __General__ sobre este mismo submenú. Se sugiere el nombre de SKU_UK:s

![Definir atrubuto único](modelado-de-datos/datamodeler-atributo-unico-renombrar.webp)

La siguiente figura muestra el resultado. En la entidad se puede apreciar que Datamodeler utiliza el símbolo `#` para representar identificadores primarios, la `U` para los atributos únicos, el `*` para los atributos obligatorios y la `o` para los atributos opcionales:

![Entidad producto Oracle Datamodeler](modelado-de-datos/datamodeler-entidad-producto.webp)

Esta entidad en notación de Chen estaría representada por el siguiente diagrama:

![Entidad producto](diagramas/drawio-producto.webp)

Observa que la entidad del modelo lógico de Oracle contiene más información que la brindada por el modelo en notación de Chen, como por ejemplo la obligatoriedad de cada atributo o sus tipos de datos. Esto se debe a que el molode E-R es un modelo conceptual y el modelo lógico de Oracle contiene información de la especificación del esquema de la base pero no es una implementación física, es una representación que tiene en cuenta las reglas del sistema gestor de base de datos.

> El modelo lógico, como el que utiliza Oracle, incluye especificaciones que se acercan más a la implementación real en una base de datos, como: __Tipos de datos__ específicos (`VARCHAR`, `NUMERIC`, `DATE`, etc.), __longitudes máximas__, __restricciones de obligatoriedad__ (`NOT NULL`), __claves primarias__. Por tanto, el modelo lógico actúa como un puente entre el modelo conceptual (abstracto) y el modelo físico (implementado en SQL), incorporando detalles técnicos necesarios para su posterior creación en el gestor de base de datos.
{: .prompt-info }

#### Crear una Relación

Una relación es una asociación que existe entre 2 entidades, una de ellas denominada como entidad origen y la otra como entidad destino, para cada entidad de la relación existe una __cardinalidad__. La cardinalidad define el número de ocurriencia que pueden existir de la entidad destino dada una sola ocurriencia de la entidad origen. La cardinalidad puede tomar valores de `1:1` (uno a uno), de `1:N` (1 a muchos) o de `N:M` (muchos a muchos). Una relación puede ser identificante o no. Las relaciones identificantes finalmente son mapeadas al identificador primario de la entidad destino.

En el contexto de un sistema de inventario, es necesario incorporar una nueva entidad que permite organizar los productos por categoría. La entidad `CATEGORIA` almacena información clave como identificador único y un nombre descriptivo, siendo estos obligatorios. La siguiente figura ilustra el cómo debería verse la entidad `CATEGORIA`:

![Datamodeler entidad producto y categoría](modelado-de-datos/datamodeler-e_prod_e_cat.webp)

Ahora vamos a crear una relación. En el ejemplo, el sistema requiere registrar en su base de datos las categorías a las que pertenece el producto. Como un producto puede pertenecer a una categoría y una categoría puede tener muchos productos, la relación es `1:N`. Para crear una relación `1:N` se debe hacer clic en la opción de Nueva relación 1:N desde el menú de herramientas, luego hacer clic sobre la entidad origen, en este caso categoría y finalmente clic sobre la entidad destino:

![Datamodeler relación categoría producto](modelado-de-datos/datamodeler-relacion-cat-prod.webp)

Ahora se nos abre un menú donde se solicita completar la información sobre la relación. En el ejemplo, la entidad origen es `CATEGORIA` y la entidad destino es `PRODUCTO`, podemos definir el nombre de la relación como `CATEGORIA_PRODUCTO`. Por conveniencia, el nombre de ambas entidades. La siguiente figura ilustra la realización de las anteriores instrucciones.

![Menú relación en Datamodeler](modelado-de-datos/datamodeler-relacion-menu.webp)

Una vez aceptados los cambios, se logra crear la relación entre `PRODUCTO` y `CATEGORIA` como lo muestra la siguiente ilustración:

![Relación símbolos](modelado-de-datos/datamodeler-relacion-simbolos.webp)

> Relación entre `PRODUCTO` y `CATEGORIA`. Esto sugiere que en la implementación física, la tabla PRODUCTO tendrá una clave foránea apuntando a CATEGORIA.
{.prompt-info}

Observa que al acceder a las propiedades de la entidad `PRODUCTO` mediante doble clic sobre esta, en la lista de sus atributos se ha generado uno nuevo cuyas propiedades no se pueden modificar. Este nuevo atributo hace referencia al identificador primario de la entidad `CATEGORIA`. Esto es debido a que este nuevo atributo finalmente es mapeado como una clave foránea de la entidad `CATEGORIA` y un `PRODUCTO` siempre apuntará a algún registro de esta tabla, esto se puede evidenciar en la siguiente figura:

![Datamodeler atributo primario relación](modelado-de-datos/datamodeler-relacion-atributo-primario.webp)

### 4. Exportar a modelo Relacional

Datamodeler permite generar automáticamente un modelo relacional partiendo de un modelo lógico, esto se puede realizar haciendio clic en la opción __Realizar Ingeniería a Modelo Relacional__ desde el menú de herramientas del modelo relacional, esta opción se ilustra a continuación.


Al hacer clic en la opción anterior, se despliega un menú donde se debe seleccionar qué elementos del modelo lógico se desean convertir a un modelo relacional, por defecto todo el modelo lógico se encuentra seleccionado, asegurarse de no seleccionar la opción __Aplicar Traducción de Nombre__ en la pestaña de __Opciones Generales__ ya que esto genera cambios automáticos no deseados sobre ciertos nombres. Esta configuración se debe ver de la siguiente manera:

### 5. Generación automática del DDL

Una vez se hace clic sobre la anterior opción, se despliega un menú en el que se deben seleccionar el motor de la base de datos Oracle a utilizar y el modelo relacional del que se quiere generar el DDL.


{% include circle-line.html %}

