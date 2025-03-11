---
title: "macOS  : Configurar Wordpress en Local (Local WP, MAMP)"
author: enidev911
categories: [Sistemas Operativos, macOS]
tags: [Sistemas Operativos, macOS, docker]
image:
  path: posters/config-wp-local.webp
  lqip: data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBwAAAABF0CQbePPvO3XiIg4B0G2TdGGdv4TRPQ/INgZVlA4IGQAAACQAwCdASoUAAsAPzmGulOvKSWisAgB4CcJaAAAP9E3whlu+sgAAP68SaI0xwsYWRm4hESz9y6vYasaHuCfCLZBvM9mnNfY6Lmqu5OfSoazYp8zp+tgXLj3Jm0haAQn67CKIAAA
---

## __WordPress localmente (LOCAL WP)__

[**Local WP**](https://localwp.com/){: target='_blank' } es una herramienta de desarrollo de WordPress que permite establecer fácilmente un servidor local en Mac.

> También se puede utilizar **Local en Windows y Linux** para usar WordPress con servidor local.
{: .prompt-info }

### __Instalar Local WP__

1. En primer lugar, abre el navegador y **ve al** [**sitio web de local**](https://localwp.com/){: target='_blank' }.
2. Haz clic en el botón **"Download"** para descargar el instalador compatible con tu versión de macOS.

![Descargar desde el sitio web](wp/wp-local-web.webp)

![Descargar desde el sitio web](wp/wp-local-web2.webp)

![Descargar desde el sitio web](wp/wp-local-web3.webp)

> Si tu Mac tiene una arquitectura **Apple Silicon (M1/M2)**, asegúrate de seleccionar la versión adecuada. Si tienes una **Mac con Intel**, selecciona la versión adecuada para Intel.
{: .prompt-info }

{: start="3"}
3. Ejecutar el el archivo.
    
    Una vez descargado el archivo de instalación, haz **doble clic** para ejecutarlo. Luego, simplemente arrastra la aplicación Local a la carpeta "Aplicaciones".

![Mover el ejecutable hacia las aplicaciones](wp/wp-local-move-to-apps.webp)

### __Iniciar Local por primera vez__

Al iniciarlo por primera vez, es posible que se le solicite responder algunas preguntas y crear una cuenta regional gratuita. **Estos pasos son opcionales** y pueden omitirse si lo desea:

![Iniciar u omitir registrarse](wp/wp-local-register.webp)

### __Crear un nuevo sitio WordPress en local__

En la pantalla principal. ahora se puede crear un nuevo sitio solo con un clic en el botón <kbd>+ Create new site</kbd>:

![nuevo sitio](wp/wp-local-new-site1.webp)

Después de hacer clic en <kbd>+ Create new site</kbd>, tendrás la opción de elegir entre dos opciones:

1. `Create a new site`: aquí podrás configurar un sitio desde cero, definiendo su nombre, dominio y demás parámetros básicos.
2. `Create from a Blueprint`: aquí podrás elegir una plantilla preconfigurada con diseños y funcionalidades ya establecidas.

![nuevo sitio desde 0](wp/wp-local-new-site2.webp)

### __Nombre para el proyecto__

Una vez que elijas `Create a new site`, se te pedirá que ingreses un nombre para el proyecto. Este será el nombre que identificará tu sitio dentro de la aplicación:

![nombre del sitio](wp/wp-local-name-project.webp)

### __Elegir el entorno de desarrollo__

Una vez definido el nombre para el proyecto, se debe elegir un entorno; quiere decir la **versión de PHP**, **servidor web** y la **versión de la base de datos (MySQL)**:

![elejir el entorno](wp/wp-local-choose-environment.webp)

### __Configurar WordPress__

Por último, deberá introducir un **nombre de usuario** y una **contraseña** para ingresar a nuestro WordPress Local. A continuación, puede hacer clic en el botón <kbd>Add Site</kbd> "Añadir sitio":

![Configurar WordPress](wp/wp-local-config-wordpress.webp)

### __Abrir el Sitio Web__

En la pantalla principal, ahora ya se puede ver el sitio generado y automáticamente se inicia el entorno y tan solo se debe dar clic en <kbd>Open site</kbd> para ver el sitio web:

![Abrir el sitio en local](wp/wp-local-open-site.webp)

### __Acceder al panel de WordPress__

Para acceder al admin, debemos abrir la el proyecto en la pantalla principal y presionar el botón **WP-ADMIN**:

> De igual forma, puedes iniciar sesión en el **wp-admin** a través de la URL (Inicia sesión en el wp-admin (ejemplo: <http://localhost/tu-sitio/wp-admin>).
{: .prompt-info }

## __WordPress Localmente (MAMP)__

### __Instalar MAMP__

En primer lugar, ve al [sitio de MAMP](https://www.mamp.info/en/mamp/mac/){:target='_blank'} y haz clic en **Download**.

Al descargar el ejecutable, podrás acceder tanto a **MAMP** como a **MAMP PRO**. Sin embargo, puedes eliminar **MAMP PRO** para utilizar sólo la versión gratuita.

<https://wordpress.org/download/>
