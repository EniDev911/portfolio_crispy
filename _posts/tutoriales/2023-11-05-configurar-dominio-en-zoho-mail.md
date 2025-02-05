---
title: "Migrar Dominio desde Google Workspace a Zoho Mail"
categories: ["Tutoriales", "Productividad"]
---

## **¿Por qué Migrar tu Dominio de Google Workspace a Zoho Mail?**

Cuando se trata de servicios de correo electrónico profesional para tu empresa, **Google Workspace** es una opción popular y robusta, pero, lamentablemente, no es gratuita. Mientras que por otra parte está **Zoho Mail** que ofrece una opción gratuita que te permite ahorrar sin perder funcionalidades esenciales.

### **Ventajas de Zoho Mail**

- **Gratuito para pequeños negocios**: Ofrece un plan gratuito para hasta 5 usuarios, lo que lo convierte en una excelente opción para empresas pequeñas o startups que quieren reducir costos.

- **Sin anuncios**: A diferencia de otros servicios gratuitos, Zoho Mail no inserta anuncios en tu bandeja de entrada, garantizando una experiencia más profesional.

## **Pasos para Migrar el Dominio en Google Workspace a Zoho Mail**

### **1. Crea una cuenta en Zoho Mail**

Lo primero es registrarte en [**Zoho Mail**](https://www.zoho.com/es-xl/signup.html){: target='_blank' }:

![registrarse](tutoriales/zoho-mail-register.png)

El siguiente paso es validar el correo de verificación:

![validar email](tutoriales/zoho-mail-validate-email.png)

Luego elegir el plan gratuito:

![seleccionar plan gratuito](tutoriales/zoho-mail-plan-selected.png)


### **2. Verificar el Dominio**

Accedemos a Zoho Mail y entramos en el [**Admin Console**](https://mailadmin.zoho.com/hosting?plan=free){: target='_blank' } para comenzar la configuración.

Lo primero es añadir el dominio:

![añadir dominio](tutoriales/zoho-mail-add-domain.png)

Una vez lo tengamos añadido, debemos seguir con la verificación del mismo:

![dominio añadido](tutoriales/zoho-mail-domain-added.png)

Para verificar que somos propietario del dominio, Zoho te proporciona un **registro TXT** que tenemos que agregar a la configuración DNS del dominio en tu proveedor de alojamiento (GoDaddy, Namecheap, etc.) aunque Zoho lo detecta y te ofrece instrucciones claras para realizar el proceso:

![instrucciones para verificar dominio](tutoriales/zoho-mail-domain-verified-1.png)

En mi caso, mi proveedor es **namecheap**, y una vez iniciamos sesión en la plataforma, agregamos el registro:

![agregar registro txt en el servicio de DNS](tutoriales/zoho-mail-add-txt-record-verify.png)

Este proceso puede tardar entre 5 a 10 minutos, cuando la comprobación tenga éxito, nos debería permitir crear una cuenta basado en nuestro dominio:

![dominio verificado](tutoriales/zoho-mail-verify-success.png)

### **3. Asignar DNS - Registros MX en Zoho**

Para que los correos electrónicos lleguen a Zoho Mail en lugar de Google Workspace, tenemos que actualizar los registros MX en nuestro dominio. Esto a través del panel panel de control de nuestro proveedor de dominio. Zoho te proporcionará los registros MX específicos que debemos añadir:

![añadir registros MX en el Proveedor de DNS](tutoriales/zoho-mail-assign-dns.png)