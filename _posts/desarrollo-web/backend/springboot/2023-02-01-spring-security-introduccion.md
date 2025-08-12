---
title: "Spring Security"
---

Primero, es bueno definir la clase `ApiConfig`. La clase contiene toda aquella información relacionada con la raíz de las rutas de la API.

```java
package com.hey.fincas.common.infrastructure.config;

public class ApiConfig {
    private static final String COMMON_PATH = "/api";
    private static final String API_VERSION = "/v1";
    public  static final String API_BASE_PATH = COMMON_PATH + API_VERSION;

    private ApiConfig() {
        throw new UnsupportedOperationException("This class should never be instantiated");
    }
}
```
{: file="ApiConfig.java"}

En este caso, la API se versiona con `/v1`. Si desea cambiar la versión anterior mientras se actualiza a la nueva versión. Puede ser tan fácil como tener dos versiones de la API en producción. Llegado el momento, se puede desactivar la versión anterior.

Si no se hace este punto en etapas tempranas del desarrollo, puede ser un dolor de cabeza en el futuro.