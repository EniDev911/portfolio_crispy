---
title: "Tutorial: Archivos .EML Optimizar correos electrónicos"
categories: ["Tutoriales", "Productividad"]
---


## __¿Qué es un archivo .EML?__

Un archivo `.eml` es un archivo de correo electrónico en formato estándar, usado para almacenar mensajes de correo electrónico completos.

Un archivo `.eml` consta de información de los **encabezados** y el **cuerpo** del mensaje.

### __¿Qué son los encabezados de un archivo .EML?__

Los encabezados de un archivo `.eml` son una serie de campos que contienen metadatos del correo electrónico. Estos metadatos incluyen información crucial como:

1. **Remitente y destinatarios**
2. **Fecha y hora del envío**
3. **Asunto del correo**
4. **Prioridad del mensaje** y otros detalles técnicos.

**Ejemplo de encabezado en archivo `.eml`**:

```eml
To: User <user@domain.demo>
Subject: Subject
X-Unset: 1
Content-Type: text/html
```
{: .nolineno file="head.eml"}

> Para asegurar que el cliente de correo electrónico procese el mensaje del archivo `.eml` como un mensaje no enviado, se establece el encabezado `X-Unset: 1`.
{: .prompt-info }

**`To` (Destinatario)**
: Este encabezado muestra el destinatario principal del correo electrónico, es decir, la persona o al grupo al que va dirigido el mensaje:

```eml
To: Ana Martínez <ana.martinez@cliente.com>, Felipe Avello <felipe.avello@mail.com>
```
{: .nolineno }

> Para agregar a más destinatarios, solo debes separarlo por comas. Ej `<contacto@cliente1.com>`, `<contacto@cliente2.com>`.
{: .prompt-info }

**`Subject` (Asunto)**
: Este encabezado define el asunto del correo, que es el título del mensaje. Este campo es importante tanto para la visualización del correo como para los sistemas de búsqueda de correos:

```eml
Subject: Cotización para el Proyecto X
```
{: .nolineno }


**`Content-Type` (Tipo de contenido)**
: Este encabezado describe el tipo de contenido del mensaje, como si es texto plano, HTML, o si incluye archivos adjuntos. Es importante para que el cliente de correo muestre y carge tanto el mensaje, así como los archivos adjuntos:

```eml
Content-Type: text/plain; charset="UTF-8"
```
{: .nolineno }


## __Abrir un archivo .EML__

Abrir un archivo `.eml` es sencillo, solo basta un cliente de correo electrónico que tengas instalado en el sistema. Entre los clientes de correo electrónico que pueden abrir archivos `.eml` están los siguientes:

- [Microsoft Outlook](https://www.microsoft.com/es-cl/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook){:target='_blank'}
- [Thunderbird](https://www.thunderbird.net/es-CL/){:target='_blank'} (mi favorito)
- [Zoho mail](https://www.zoho.com/es-xl/mail/desktop/){:target='_blank'}

## __Adjuntar archivos en el .EML__

Este proceso requiere realizar un par de pasos, como por ejemplo el archivo que se quiere adjuntar debe estar codificado en **base64** y otro paso importante es cambiar el tipo de [**MIME**](https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions){:target='_blank'} en el encabezado. Por ejemplo:

```eml
Content-Type: multipart/mixed; boundary=boundary_text_string
```
{: .nolineno file="head.eml" }

Este encabezado le indica al cliente de correo que el mensaje contiene **varios tipos de contenido**, como texto, imágenes, y archivos adjuntos, y que cada parte del correo está separada por una cadena especial llamada **"boundary"** (frontera o límite).

### __Ejemplo de un correo con "multipart/mixed"__

Imagina que envías un correo con el siguiente contenido:

1. Un mensaje estructurado con HTML.
2. Un archivo adjunto, como un PDF.

**Ejemplo de cómo usar el boundary**:

{% tabs ej_boundary %}
{% tab ej_boundary .EML %}
```eml
To: Marco <contacto@mcherrera.dev>
X-Unsent: 1
Subject: Factura del proyecto X
Content-Type: multipart/mixed; boundary=boundary_text_string

--boundary_text_string
Content-Type: text/html; charset=UTF-8
Content-Disposition: inline

<html>
    <h2 style="color: peru">Estimado cliente,</h2>
    <p>Le adjunto la factura solicitada.</p>

    <div style="font-family: Arial, sans-serif; color: #333; font-size: 12px; text-align: center; padding: 20px; border-top: 2px solid #2a3d6f;">
        <p><strong>Primsoft</strong> | Innovación tecnológica al alcance de tu empresa</p>
        <p>¿Tienes preguntas? Contáctanos en: <a href="mailto:contacto@primsoft.cl" style="color: #2a3d6f;">contacto@primsoft.cl</a></p>
        <p>Visítanos: <a href="https://www.primsoft.cl" style="color: #2a3d6f;">www.primsoft.cl</a></p>
    </div>
</html>
--boundary_text_string
Content-Type: application/pdf; name="factura.pdf"
Content-Disposition: attachment; filename="factura.pdf"
Content-Transfer-Encoding: base64

[Contenido del archivo PDF codificado en base64]

--boundary_text_string--
```
{: .nolineno file="ej_boundary.eml" }
{% endtab %}
{% tab ej_boundary Thunderbird %}
![Resultado en Thunderbird](tutoriales/eml-html-attach-boundary.webp)
{% endtab %}
{% endtabs %}

Explicación detallada:

- **Boundary**: Debe comenzar siempre con `--` y debe ser consistente en todo el mensaje.
- **Separación de partes**: Asegúrate de que cada parte del correo esté correctamente separada por el boundary (con `--boundary_text_string`).
- **Finalización del boundary**: El último delimitador de la sección debe terminar con `--boundary_text_string--` para cerrar la estructura correctamente.

> [Base64.guru](https://base64.guru/converter/encode/pdf){:target='_blank'} es una herramienta para convertir documentos en **base64** de manera sencilla.
{: .prompt-tip }

![convertir doc a base64](tutoriales/eml-convert-base64.webp)


