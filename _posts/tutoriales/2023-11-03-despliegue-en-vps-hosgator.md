---
title: "Despliegue de en VPS de Hosgator"
categories: ["Tutoriales", "Devops"]
---

## Guía paso a paso para desplegar un proyecto Vue.js (Frontend) y Django (Backend) en un VPS de HostGator

En este tutorial aprenderás a desplegar una aplicación con Vue.js como frontend y Django como backend en un VPS de HostGator. Para ello, utilizaremos una serie de herramientas como Nginx, Gunicorn, y PM2, además de la configuración de servidor adecuada.

---

### Requisitos previos

1. **Tener un VPS de HostGator** con acceso SSH.
2. **Acceso a una terminal** para trabajar en tu servidor remoto.
3. **Conocimiento básico de Git**, ya que necesitaremos clonar repositorios y manejar el código.

---

### Pasos para desplegar el Frontend de Vue.js

#### Conectar a tu VPS a través de SSH

En tu terminal local, conecta a tu VPS usando SSH:

```terminal
ssh usuario@ip_del_servidor
```

#### Instalar Node.js y npm

Primero, asegúrate de que tienes `Node.js` y `npm` instalados en tu servidor. En CentOs no viene node.js por defecto, por lo que necesitaremos instalarlo usando el repositorio de **NodeSource**:

```bash
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```
Verifica las versiones:

```bash
node -v
npm -v
```

#### Subir el proyecto de Vue.js


Si tienes tu proyecto Vue.js en un repositorio Git, clónalo:

```terminal
git clone https://github.com/usuario/repo_vue.git
cd repo_vue
```

Si no estás utilizando Git, puedes cargar el código de otra forma, por ejemplo, usando `SFTP`.


#### Instalar dependencias

Dentro de la carpeta del proyecto de Vue.js, instala las dependencias:

```terminal
npm install
```

#### Construir el proyecto para producción

Una vez que las dependencias están instaladas, construye el proyecto de Vue.js para producción:

```terminal
npm run build
```

Esto creará una carpeta `dist` con los archivos optimizados para producción.

#### Configurar Nginx para servir el frontend

Vamos a configurar Nginx para servir los archivos de Vue.js. Instala Nginx si no lo tienes:

```bash
sudo yum install nginx
```

Crea un archivo de configuración para tu sitio en `/etc/nginx/sites-available`:

```terminal
sudo nano /etc/nginx/sites-available/vue_app
```

Añade lo siguiente:

```nginx
server {
   listen 80;
   server_name tu_dominio_o_ip;

   location / {
       root /ruta/a/tu/proyecto/vue/dist;
       try_files $uri $uri/ =404;
   }
}
```

Enlaza el archivo de configuración a `sites-enabled`:

```bash
sudo ln -s /etc/nginx/sites-available/vue_app /etc/nginx/sites-enabled/
```

#### Reiniciar Nginx

Reinicia Nginx para aplicar la configuración:

```bash
sudo systemctl restart nginx
```

---

### Pasos para desplegar el Backend de Django

#### Instalar dependencias básicas (Python, pip, etc.)

CentOS no viene con Python 3 por defecto, así que lo instalamos:

```terminal
sudo yum install -y python3 python3-pip python3-devel
```

Instalar y configurar un entorno virtual (opcional, pero recomendado)

Crea un entorno virtual para tu proyecto Django:

```terminal
python3 -m venv venv
source venv/bin/activate
```

#### Clonar tu proyecto Django

Al igual que con el frontend, clona tu proyecto Django desde Git:

```bash
git clone https://github.com/usuario/repo_django.git
cd repo_django
```

#### Instalar dependencias de Django

Dentro del entorno virtual, instala las dependencias de Django con `pip`:

```terminal
pip install -r requirements.txt
```


#### Configurar el archivo `settings.py`

Asegúrate de que tu archivo `settings.py` esté configurado correctamente para producción:

- **Base de datos:** Configura PostgreSQL, MySQL o el motor que estés utilizando.
- **Seguridad:** Cambia `DEBUG` a `False` y añade tu dominio o IP a `ALLOWED_HOSTS`.
- **Archivos estáticos y medios:** Configura las rutas para los archivos estáticos y los medios.


#### Realizar las migraciones y crear el superusuario

Realiza las migraciones de la base de datos:

```terminal
python manage.py migrate
```

Luego, crea un superusuario para acceder al panel de administración:

```terminal
python manage.py createsuperuser
```

#### Instalar y configurar Gunicorn (Servidor WSGI)

Gunicorn es un servidor WSGI que utilizaremos para servir el backend de Django. Instálalo con pip:

```bash
pip install gunicorn
```

Ahora, ejecuta Gunicorn:

```bash
gunicorn --workers 3 nombre_del_proyecto.wsgi:application
```

> **Nota:** Puedes ajustar el número de `workers` según los recursos de tu VPS.
{: .prompt-info }


#### Configurar Nginx para servir Django

Crea un archivo de configuración para Nginx en `/etc/nginx/sites-available` para el backend Django:

```bash
sudo nano /etc/nginx/sites-available/django_backend
```

Añade lo siguiente:

```nginx
server {
   listen 80;
   server_name tu_dominio_o_ip;

   location / {
       proxy_pass http://127.0.0.1:8000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   }
}
```

Crea el enlace simbólico:

```terminal
sudo ln -s /etc/nginx/sites-available/django_backend /etc/nginx/sites-enabled/
```

#### Configurar PM2 para ejecutar Gunicorn en segundo plano

Instala PM2:

```bash
sudo npm install -g pm2
```

Usa PM2 para ejecutar Gunicorn de forma persistente:

```bash
pm2 start gunicorn --name "django" --workers 3 nombre_del_proyecto.wsgi:application
```

Guarda el proceso para que se reinicie al reiniciar el servidor:

```bash
pm2 save
pm2 startup
```

#### Reiniciar Nginx

Para aplicar la configuración del backend, reinicia Nginx:

```terminal
sudo systemctl restart nginx
```

---

### Verificación final

1. **Accede a tu dominio o IP pública** desde un navegador y verifica que tanto el frontend (Vue.js) como el backend (Django) estén funcionando correctamente.

2. **Depuración:**
   - Si algo no funciona, revisa los archivos de log de Nginx y Gunicorn para ver si hay errores:
     - Nginx: `/var/log/nginx/error.log`
     - Gunicorn: `/var/log/syslog` o el log de PM2.

---

Ahora tienes tu aplicación Vue.js y Django corriendo en un servidor VPS de HostGator. Vue.js se sirve como frontend estático con Nginx, mientras que Django maneja el backend con Gunicorn. Ambos están configurados para trabajar de manera eficiente en producción.
