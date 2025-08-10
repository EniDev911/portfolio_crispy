---
title: "¿Qué es Husky y cómo configurarlo en tu proyecto Git?"
categories: [Kit Tools, Git]
tags: [git, husky, hooks, automatización, desarrollo]
image:
  path: posters/configurar-husky.webp
  lqip: data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJZQDImCHpDuy16IWW30sAAP7LPqnAsstWcpS9zdLRXQrEzAio4Sh1dmfbcQkIH5yuGBB+ZYu9c3gA
---

¿Alguna vez te ha pasado que alguien hace un *commit* sin pasar los linters o rompe el código porque no corrió las pruebas?

Aquí es donde entra **Husky**, una herramienta que ayuda a mantener tu proyecto limpio y saludable desde el momento en que alguien hace un commit. Antes de comenzar, activaremos algunos conceptos sobre los _hooks_ de Git.

## ¿Qué es un hook en Git?

Un "Git Hook" es un script peronalizado que puedes ejecutar en respuesta a eventos específicos en el ciclo de vida de Git. Estos eventos pueden ser acciones como:

- Realizar un `commit`
- Empujar cambios a un repositorio remoto con `push`
- Fusionar ramas con `merge`

Existen más pero normalmente esos eventos son los más frecuentes.

Git proporciona una serie de _hooks_ predefinidos, y puedes personalizarlos para satisfacer las necesidades de tu flujo de trabajo. Algunos de los hooks más comunes son:

- `pre-commit`: Se ejecuta antes de confirmar los cambios (`commit`). Puedes usarlo para realizar tareas como ejecutar pruebas automáticas o comprobar la calidad del código.
- `pre-push`: Se ejecuta antes de empujar los cambios al repositorio remoto. Puedes realizar verificaciones adicionales antes de enviar los cambios al servidor.
- `post-commit`: Se ejecuta después de que se ha confirmado un cambio. Puedes usarlo para realizar tareas adicionales después de que se ha realizado un commit.
- `post-receive`: Se ejecuta en el repositorio remoto después de recibir nuevos cambios. Puede ser útil para realizar acciones en el servidor después de que se hayan empujado cambios en el repositorio remoto.

Para aprovechar los _hooks_ en un repositorio Git, debes escribir scripts personalizados y colocarlos en la carpeta `.git/hooks/` del repositorio. Git utiliza estos scripts automáticamente en función de los eventos correspondientes.

![Ejemplo de pre-commit](../gif/pre-commit.gif)

> **Husky** es una herramienta de **JavaScript** que te permite **agregar fácilmente Git hooks** a tu proyecto.
{: .prompt-info }

## ¿Qué es Husky?

__Husky__ es una librería que hace más fácil ejecutar automáticamente comandos o scripts en momentos específicos durante el desarrollo de proyectos.

Algunas características clave de Husky:

1. __Fácil configuración__: Husky simplifica la configuración de hooks de Git mediante la definición en la sección de scripts en un archivo `package.json`. Esto facilita la comprensión y mantenimiento de los hooks en un proyecto.
2. __Integración con comandos npm__: Husky se integra normalmente con los comandos de npm, lo que significa que puedes usar todos los scripts definidos en el archivo `package.json` directamente como acciones para los hooks de Git.
3. __Soporte de varios hooks__: Husky es compatible con una variedad de _hooks_ de Git, como `pre-commit`, `pre-push`, `post-merge`, entre otros. Esto permite ejecutar acciones personalizadas en diferentes etapas del ciclo de vida de Git.
4. __Instalación automática de hooks__: Husky puede configurar automáticamente los _hooks_ de Git durante la instalación, eliminando la necesidad de configuración manual y mejorando la consistencia y coherencia en los equipos de desarrollos.

## Instalación

Antes de comenzar con la instalación y configuración de Husky, asegúrate de tener los siguiente:

- `git` y `Node.js` instalados

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">git --version</span>
2.43.0
mcherrera@dev:~$ <span class="hl">node --version</span>
v22.17.1
</pre></code>
</div>
</div>


### 1. Inicializar un proyecto

En caso de que ya tengas un proyecto con JavaScript, lo más probable es que ya tengas un archivo `package.json`, sino puedes inicializar uno con el siguiente comando:

```terminal
npm init -y
```

### 2. Instalar Husky

Ahora, tenemos que instalar Husky como dependencias de desarrollo:

```terminal
npm install --save-dev husky
```

Para trabajar e interactuar con Husky, debemos ejecutar el siguiente comando en la terminal:

```terminal
npx husky init
```

El comando anterior, creará una carpeta nueva en la raíz de nuestro proyecto llamada `.husky`.


```json
"scripts": {
    "prepare": "husky install"
 }
```
{:file="package.json" .nolineno }

### 3. Validar mensajes de commit

Ahora necesitamos instalar `commitlint` y `commitlint/cli`:

{% tabs install-commitlint %}
{% tab install-commitlint bash,git-bash %}
```terminal
npm install --save-dev @commitlint/{cli,config-conventional}
```
{% endtab %}
{% tab install-commitlint cmd %}
```terminal
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```
{% endtab %}
{% endtabs %}

- `@commitlint/config-conventional`: Esta dependencia proporciona una configuración predefenida para Commitlint badasa en las convenciones convencionales de mensajes para los `commit`.

- `@commitlint/cli`: Esta dependencia es la interfaz de línea de comandos para CommitLint. Proporciona herramientas para ejecutar la validación de mensajes de `commit` de acuerdo con las reglas establecidas en la configuración de Commitlint. Puedes usar este __CLI__ (_Command Line Interface_) para verificar si tus mensajes de `commit` cumplen con las convenciones configuradas.

Hasta aquí, nuestro archivo `package.json` debe lucir parecido a lo siguiente:

```json
{
  "name": "husky",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@commitlint/cli": "^19.8.1",
    "@commitlint/config-conventional": "^19.8.1",
    "husky": "^9.1.7"
  }
}
```
{:file="package.json"}

Las reglas convencionales son las siguientes:

1. `chore`: Cambios en tareas, configuración, y otros aspectos relacionados con el mantenimiento del proyecto.
2. `docs`: Cambios en la documentación.
3. `feat`: Nuevas características.
4. `fix`: Correciones de errores.
5. `style`: Cambios que no afectan el significado del código (espacios en blanco, formato, punto y coma que faltan, etc.).
6. `test`: Añadir o modificar pruebas.

Luego crea un archivo `.commitlintrc.json` para más velocidad ejecuta esto en la terminal:

````terminal
touch .commitlintrc.json
```

Agrega lo siguiente:

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
      "type-enum": [2, "always", ["ci", "chore", "docs", "ticket","feat", "fix", "perf", "refactor", "revert", "style"]]
  }
}
```
{: file=".commitlintrc.json" }

> - `"extends": ["@c.../conf..."]`: Esto indica que estás extendiendo de la configuración basada en el estandar de `commits` [___Conventional Commits___](https://www.conventionalcommits.org/en/v1.0.0/){:target="_blank"}
> - `"rules"`: Esta clave se usa para sobrescribir o personalizar reglas que heredas desde la configuración base de `@commitlint/config-conventional`.
{: .prompt-info }

__Detalle de la regla__:

```json
"type-enum": [2, "always", ["...tipos"]]
```
{:  .nolineno file=".commitlintrc.json" }

- `2` = __nivel de error__ -> Si no se cumple, lanza un error (impide el `commit`).
- `"always"`: La regla __siempre se aplica__
- `["ci", "chore", ...]` = Lista de tipos válidos de `commit`.

Commitlint verifica si sus mensajes de `commit` cumplen con el [formato convencional](https://www.conventionalcommits.org/en/v1.0.0/){:target="_blank"}

Observa la siguiente simulación, donde trataremos de realizar un `commit` que no cumple con las convenciones:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">git status -s </span>
<span style="color: green">A  .gitignore</span>
<span style="color: red">?? .commitlintrc.json</span>
<span style="color: red">?? .husky/</span>
mcherrera@dev:~$ <span class="hl">git commit -m "add gitignore"</span>

⧗   input: add gitignore
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   <span class="hl">found 2 problems</span>, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
</pre></code>
</div>
</div>

Entonces, esto nos obliga a que la primera palabra debe ser uno de los elementos de las reglas que específicamos dentro del archivo `.commitlintrc.json` y el alcance es el __módulo/componente__ en el que está trabajando.

Para el caso anterior, para pasar la validación, debemos respetar la convención:

<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="Terminal"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
mcherrera@dev:~$ <span class="hl">git commit -m "chore: add gitignore"</span>
[main c537a0e] chore: add gitignore
 1 file changed, 1 insertion(+)
 create mode 100644 .gitignore
</pre></code>
</div>
</div>

