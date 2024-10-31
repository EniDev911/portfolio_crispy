---
title: "WSL 🐧 : Introducción"
author: enidev911
categories: [Sistemas Operativos, WSL]
tags: [Sistemas Operativos]
---

## Introducción a WSL: Potencia Linux en Windows

### ¿Qué es WSL?

WSL, o Windows Subsystem for Linux, es una característica de Windows que permite ejecutar un entorno Linux directamente en Windows, sin necesidad de una máquina virtual o un arranque dual. Esto significa que puedes utilizar herramientas y aplicaciones de Linux junto con aplicaciones de Windows, todo desde la misma interfaz.

### ¿Por qué Usar WSL?

1. **Desarrollo Simplificado**: Si eres un desarrollador que trabaja en aplicaciones web o software que utiliza herramientas de Linux, WSL te permite acceder a esas herramientas sin salir de Windows.

2. **Sin Virtualización**: A diferencia de las máquinas virtuales, WSL tiene un rendimiento casi nativo, lo que significa que puedes ejecutar aplicaciones de Linux rápidamente y sin las penalizaciones de rendimiento.

3. **Acceso a Herramientas de Línea de Comandos**: WSL te da acceso a potentes herramientas de línea de comandos de Linux, como `bash`, `git`, `ssh` y muchas más, facilitando tareas de desarrollo y administración.

### Instalación de WSL

Instalar WSL es un proceso sencillo. Aquí vamos paso a paso:

#### Activar WSL

Abre PowerShell como administrador y ejecuta el siguiente comando:

```terminal
wsl --install
```

Esto instalará la última versión de WSL y la distribución de Linux predeterminada (normalmente Ubuntu). Si ya se encuentra instalada nos muestra las distribuciones disponibles:

![comando de instalación wsl](/assets/img/wsl/comando-instalacion-wsl-dark.png){: .dark }
![comando de instalación wsl](/assets/img/wsl/comando-instalacion-wsl-light.png){: .light }

#### Elegir una Distribución de Linux

Puedes instalar diferentes distribuciones de Linux. Si quieres elegir una distribución específica, la forma más sencilla es abrir Microsoft Store y buscar "Linux". Allí encontraremos opciones como Ubuntu, Debian y Kali Linux. A continuación un ejemplo para instalar Debian desde la Terminal de Windows:

```terminal
wsl --install -d Debian
```

#### Configurar la Distribución

Cuando se termina de instalar la nueva distribución de WSL, se le pedirá que cree un nombre de usuario y una contraseña para la distribución de Linux:

![comando de instalación wsl](/assets/img/wsl/instalacion-wsl-debian-dark.png){: .dark }
![comando de instalación wsl](/assets/img/wsl/instalacion-wsl-debian-light.png){: .light }

> Recuerda que esta cuenta se considerará el administrador de Linux y tendrá la capacidad de ejecutar comandos administrativos sudo (es decir, de superusuario).
{: .prompt-info }

### Usando WSL

Una vez que hayas instalado y configurado WSL, podemos comenzar a usarlo. Lo primero que podemos hacer es probar los típicos comandos de Linux como `ls`, `cd`, `mkdir`, etc., para navegar y gestionar archivos.

### Instalar Zsh

Cuando abrimos WSL el shell predeterminado incluido en las distribuciones es [Bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29){:target='_blank'}. Sin embargo Zsh (Z Shell) es un potente intérprete de comandos que ofrece una experiencia mejorada en la terminal. Para instalar Zsh debemos realizar los siguientes pasos:

- Antes de instalar Zsh, asegúrate de que el sistema esté actualizado:

```terminal
sudo apt update && sudo apt upgrade -y
```

- Ejecuta el siguiente comando para instalar Zsh:

```terminal
sudo apt install zsh -y
```

- Después de instalar Zsh, puedes cambiar tu shell por defecto a Zsh ejecutando:

```terminal
chsh -s $(which zsh)
```

Cierra y vuelve a abrir tu terminal de Linux en Wsl para que los cambios surtan efecto.

#### Configurar Zsh

Para una experiencia de Zsh más rica, podemos instalar [Oh My Zsh](https://ohmyz.sh/){: target='_blank'}. En la terminal ejecutamos el siguiente comando:

```terminal
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> Si al ejecutar el comando te sale el mensaje "zsh: command not found: curl", simplemente instalamos curl: `sudo apt install curl`.<br>Y si luego al ejecutar el comando te aparece el mensaje "Error: git is not installed", simplemente instalamos git: `sudo apt install git`. 
{: .prompt-info }

![instalación zsh en wsl](/assets/img/wsl/instalacion-zsh-en-wsl-light.png){: .light }
![instalación zsh en wsl](/assets/img/wsl/instalacion-zsh-en-wsl-dark.png){: .dark }

Este script instalará Oh My Zsh y cambiará tu configuración de Zsh automáticamente. A partir de aquí en adelante podemos personalizar la configuración editando el archivo `~/.zshrc`.


### Comando take en Zsh

El comando `take` es una función muy útil en Zsh que te permite crear un nuevo directorio y entrar en él de manera rápida y sencilla. Es especialmente práctico para organizar tu trabajo en la terminal.

La sintaxis básica del comando es:

```terminal
take nombre_del_directorio
```

Al ejecutar este comando, se creará un nuevo directorio con el nombre especificado y, automáticamente, cambiarás a ese directorio.

#### Ventajas de Usar take

- **Ahorra Tiempo:** Combina la creación de un directorio y el cambio a ese directorio en un solo comando.
- **Organización Rápida:** Ideal para proyectos nuevos, ya que puedes crear y entrar en una carpeta de inmediato.
- **Sencillez:** Evita la necesidad de recordar y escribir dos comandos por separado.

#### Ejemplo de Uso

Supongamos que quieres crear un nuevo directorio llamado `proyecto` y entrar en él. Simplemente ejecuta:

```terminal
take proyecto
```

Esto creará el directorio `proyecto` y cambiará automáticamente a él. 

#### Cómo Configurar take

Si no tienes el comando `take`, puedes definirlo en tu archivo `~/.zshrc` añadiendo la siguiente función:

```bash
take() {
  mkdir -p "$1" && cd "$1"
}
```
{: .nolineno file='.zshrc' }


### Configurar Plugins 🚀


[Oh My Zsh](https://ohmyz.sh/){: target='_blank'} es un framework para gestionar la configuración de Zsh, y su verdadera magia radica en los plugins. Estos complementos amplían las funcionalidades de tu terminal y optimizan tu flujo de trabajo. 

✨ **Algunos plugins populares**:
- **git**: Mejora la experiencia con comandos de Git (viene habilitado).
- **zsh-autosuggestions**: Sugiere comandos mientras escribes.
- **zsh-syntax-highlighting**: Colorea tu terminal para mayor claridad.


#### Instalar y habilitar zsh-autosuggestions

Clonamos el repositorio en el siguiente destino `$ZSH_CUSTOM/plugins` (por defecto en `~/.oh-my-zsh/custom/plugins`):

```terminal
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Añadimos el plugin a la lista para que Oh My Zsh lo cargue (dentro de `~/.zshrc`):

```terminal
sed -i '/^plugins=(/ s/)/ zsh-autosuggestions)/' ~/.zshrc
```

**Explicación del comando:**

- `sed -i`: Edita el archivo en el lugar (in-place).
- `'/^plugins=(/'`: Busca la línea que comienza con plugins=(.
- `s/)/ git)/`: Reemplaza el paréntesis de cierre `)` por `zsh-autosuggestions)` (agrega el plugin a la lista antes de cerrarlo).

![agregar plugin zsh-autosuggestions](/assets/img/wsl/agregar-plugin-zsh-autosuggestions-light.png){: .light }
![agregar plugin zsh-autosuggestions](/assets/img/wsl/agregar-plugin-zsh-autosuggestions-dark.png){: .dark }

Ahora refrescamos las configuraciones para que surtan efecto: `source ~/.zshrc`.

### Desinstalar distribuciones

Para desinstalar una distribución de Linux en Windows, se puede ejecutar el siguiente comando:

```terminal
wsl --unregister <distroName>
```
Donde **<<distroName>>** es el nombre que tiene la distribución existente, que se puede ver en la lista del `comando wsl -l`. 

>En el ejemplo que tenemos al principio instalamos debian, por ende para desinstalarlo debemos ejecutar `wsl --unregister debian`
{: .prompt-info }


### Exportar máquinas WSL

Exportar una distribución de WSL te permite crear una copia de seguridad completa de de tu entorno, incluyendo todas las configuraciones de herramientas, bibliotecas específicas que no queremos perder.



### Recursos Adicionales

Para aprender más sobre WSL y cómo aprovecharlo al máximo, considera los siguientes recursos:

- [Documentación Oficial de WSL](https://docs.microsoft.com/en-us/windows/wsl/)
- [Foros y Comunidades](https://stackoverflow.com/questions/tagged/wsl)

### Conclusión

WSL es una herramienta poderosa que permite a los usuarios de Windows disfrutar de las ventajas de un entorno Linux sin complicaciones. Ya seas un desarrollador, un administrador de sistemas o simplemente un entusiasta de la tecnología, WSL te ofrece un mundo de posibilidades. ¡Empieza a explorar y potencia tu flujo de trabajo!
