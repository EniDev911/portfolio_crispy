---
title: "MkDocs: Agregar Librerías"
author: enidev911
categories: [Desarrollo Web, "Generadores"]
---

## **Descargar la Librería**

Para integrar archivos de javascripts adicionales, crea el archivo en el directorio `docs`:

```
.
├─ docs/
│  └─ javascripts/
│     └─ extra.js
└─ mkdocs.yml
```
{: .noheader }

Y luego, agregue el `path` en el archivo de configuración `mkdocs.yml`:

```yml
extra_javascript:
  - javascripts/extra.js
```
{: .nolineno file="mkdocs.yml" }

Siguiendo este mismo principio, ahora es cosa de solo agregar las librerías, se puede indicar tanto el `path` (en caso de descarga) o indicar directamente su CDN:

**Ejemplo: con CDN**

```yml
extra_javascript:
  - https://cdn.jsdelivr.net/npm/sweetalert2@11.17.2/dist/sweetalert2.all.min.js
  - javascripts/extra.js
```
{: .nolineno file="mkdocs.yml" }


**Ejemplo: descargando la librería**

{% tabs add_lib_sw %}
{% tab add_lib_sw Configuración %}
```yml
extra_javascript:
  - javascripts/sweetalert2.all.min.js
  - javascripts/extra.js
```
{: .nolineno file="mkdocs.yml" }
{% endtab %}
{% tab add_lib_sw Explorador %}
```
.
├─ docs/
│  └─ javascripts/
│     │─ sweetalert2.all.min.js
│     └─ extra.js
└─ mkdocs.yml
```
{: .noheader }
{% endtab %}
{% endtabs %}

