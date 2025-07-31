---
title: React Router 
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---

[React Router](https://reactrouter.com/){:target='_blank'} es una librería estándar para el enrutamiento en React. Permite la navegación entre vistas de varios componentes en una aplicación React, permite cambiar la URL del navegador y mantiene la la interfaz de usuario sincronizada con la URL.

Con React Router, puedes crear una aplicación de página única SPA (_Single Page Application_) con múltiples páginas que se renderizan dinámicamente sin necesidad de recargar la página completa. Permite gestionar la navegación, gestionar rutas anidadas, pasar parámetros y gestionar el historial del navegador.

## ¿Cómo funciona?

Cuando el usuario hace clic en un enlace o escribe directamente la URL en la barra de direcciones del navegador, React Router actualiza la interfaz sin recargar toda la página, esto se logra manipulando el historial de navegación y utilizando componentes para cambiar el contenido dinámicamente, todo del lado del cliente. Veamos la siguiente ilustración:

![Web root](react/rr-web-root.webp)

![Web about](react/rr-web-about.webp)


## Setup para usar React Router

Doy por hecho qie ya cuentas con las siguientes herramientas instaladas en tu sistema:

- [Node.js](https://nodejs.org/en/){:target='_blank'} Necesitarás __Node.js 14.18.0__ o superior para este tutorial. __Vite__ que es la herramienta que usaremos para configurar el proyecto requiere al menos esta versión.
- [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} (o [yarn](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager){:target='_blank'} si prefieres usarlo como gestor de paquetes): Herramienta para instalar y gestionar dependencias.

__Recomendado:__

- [Git](https://git-scm.com/){:target='_blank'}: Para manejar el control de versiones y poder subirlo a Github o para clonar el repositorio de ejemplo.

### 1. Inicializar un proyecto

Para crear una aplicación de React utilizando [Vite](https://vite.dev/){:target='_blank'}, ejecuta el siguiente comando:

```terminal
npm create vite@latest react-router-demo -- --template react
```

> Cambia el `<react-router-demo>` por el nombre de tu preferencia.
{: .prompt-info .fit-content }

Una vez generado el proyecto, navegamos a la carpeta y ejecutamos el comando para instalar las dependencias:

```terminal
cd reat-router-demo
npm install
```

### 2. Instalar React Router

React Router está disponible como un paquete independiente:

```terminal
npm install react-router-dom
```

> Si usas TypeScript:
> `npm install --save-dev @types/react-router-dom`
{: .prompt-info .fit-content }

## Estructrura del proyecto

Tu carpeta `src` la puedes estructurar de la siguiente manera:

```
src/
│
├── main.jsx
├── App.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
└── components/
    └── Navbar.jsx
```
{: .noheader .fit-content }

## Componentes de React Router

React Router se puede dividir en 3 categorías principales: __Enrutadores__ (Routers), __Comparadores de ruta__ (Route Matchers) y __Navegadores__ (Navigators).

### Enrutadores

Son los encargados de gestionar la navegación de la aplicación. Sirven como contenedores principales que determinan el cómo y el cuándo se muestran diferentes rutas:

- `<BrowserRouter>` o `createBrowserRouter`: Usa rutas URL normales (`*.com/dashboard`), se requiere que el servidor esté configurado correctamente. Utiliza la API del historial del navegador para mantener la interfaz del usuario sincronizada con la URL.

- `<HashRouter>` o `createHashRouter`: Almacena la ubicación en la parte de la URL con un hash `#` (`*.com/#/dashboard`), de esta forma no se necesita ninguna configuración especial del lado del servidor (no es recomendable utilizar la URL en formato hash).

### Comparadores de ruta

- `<Routes>`: Este componente se va a encargar de buscar a través de sus hijos `<Route>` la URL que sea igual o parecida para mostrar su contenido, en caso de que encuentre una coincidencia ignorará el resto de `<Route>`; en caso de que no encuentre nada devolverá `null`.

- `<Route>`: Define una ruta específica y el componente que se debe de renderizar cuando esa ruta coincide con la URL actual.

- `<Outlet>`: Componente donde se renderizan los componentes de rutas definidas como hijos en la configuración del enrutador.

> __Recomendación__ poner primero las rutas más específicas a las menos específicas, ya que se corre el riesgo que haga mal el enrutamiento.
{: .prompt-info }

### Navegadores

- `<Link>`: Componente para crear enlaces dentro de la aplicación. Reemplaza a las etiquetas `<a>` de HTML para evitar recargar la página.
- `<NavLink>`: Es un componente especial, que nos sirve para poder cambiar el estilo del enlace (siempre y cuando coincida).
- `<Navigate>` o `useNavigate`: Cuando se quiere forzar la navegación a una URL específica.

Ya teniendo un resumen de los conceptos básicos, podemos seguir avanzando.

## Configurar enrutamiento

El __enrutador__ o _router_ es un componente de nivel superior que permite que todos los demás componentes de navegación y hooks de React Router funcionen correctamente. Ya sabemos que existen distintos tipos de enrutadores, como `<BrowserRouter>`, `<HashRouter>`, `<StaticRouter>` y `<MemoryRouter>`. Para aplicaciones web del tipo SPA (_Single Page Application_), el más utilizado es `<BrowserRouter>`.

Una aplicación debe estar envuelta por un enrutador como `<BrowserRouter>`, que a su vez contiene uno o más bloques `<Routes>`. El componente `<Routes>` evalúa todos sus hijos `<Route>`.

Como el enrutador será el proveedor del contexto de rutas, lo podemos usar en el punto más de la aplicación. Abre el archivo `main.jsx` y envolvemos la aplicación con el enrutador:

```jsx
import { StricMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importamos el enrutador
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Envolvemos la app con el enrutador */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
{: file="main.jsx"}

Al envolver `<App />` dentro de `<BrowserRouter>`, le damos acceso a todas las funcionalidades de React Router. Esto permite que dentro de cualquier parte de tu componente `<App />` o sus hijos puedas:

- Usar `<Routes>` y `<Route>`.
- Usar `<Link>` para nevagación sin recargar la página.
- Usar los hooks de navegación y parámetros.

## Crear rutas en App.jsx

A partir de React Router v6, las rutas se pueden defenir de forma más declarativa con `<Routes>` y `<Route>`. A continuación, tienes el componente `App.jsx` y en las otras tabs el contenido de las páginas (componentes a renderizar) que importamos en `App.jsx`:

{% tabs demo-rr-1 %}
{% tab demo-rr-1 App %}
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home/>}>
			<Route path="/about" element={<About/>}>
			<Route path="*" element={<NotFound/>}>
			<Route>
		</Routes>
	)
}
```
{:file="App.jsx"}
{% endtab %}
{% tab demo-rr-1 Home %}
{% raw %}
```jsx
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bienvenido a Mi Aplicación</h1>
      <p>Esta es la página de inicio.</p>
      <p>
        ¿Quieres conocernos mejor?{' '}
        <Link to="/about">Haz clic aquí para ir a Acerca de</Link>.
      </p>
    </main>
  );
}
```
{: file="pages/Home.jsx" }
{% endraw %}
{% endtab %}
{% tab demo-rr-1 About %}
{% raw %}
```jsx
export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Acerca de Nosotros</h1>
      <p>
        Somos un equipo apasionado por construir aplicaciones web modernas con React.
        Nuestro objetivo es enseñar y aprender en comunidad.
      </p>
      <ul>
        <li>React moderno</li>
        <li>Navegación con React Router</li>
        <li>Componentes reutilizables</li>
      </ul>
    </main>
  );
}
```
{:file="pages/About.jsx"}
{% endraw %}
{% endtab %}
{% tab demo-rr-1 NotFound %}
{% raw %}
```jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}
```
{: file="pages/NotFound.jsx" }
{% endraw %}
{% endtab %}
{% endtabs %}

> React Router usa el wildcard `*` para definir rutas no encontradas.
{: .prompt-info .fit-content }

__Veamos la siguiente demostración__:

{% include embed/video.html src="react-router-demo1.webm" %}

## Agregar componentes reutilizable

Como observamos en el ejemplo anterior, si querías ver una página diferente, tenías que escribir la ruta directamente en la barra de direcciones del navegador (por ejemplo: `/about`). Esto __no es práctico para el usuario final__.

### Agregar barra de navegación

Para solucionar esto, vamos a __crear una barra de navegación__ utilizando el componente `<Link>` de `react-router-dom`. Así, podremos cambiar de página de forma dinámica y sin recargar el navegador.

Dentro de la carpeta `src/components/` (debes crearla si no la tienes), crea un archivo `Navbar.jsx` para agregar lo siguiente:

{% raw %}
```jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav style={{ padding: '1rem', background: '#282c34' }}>
			<Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>
					Inicio
			</Link>
			<Link to="/about" style={{ color: '#fff' }}>
					Acerca de
			</Link>
		</nav>
  )
}
```
{: file="components/Navbar.jsx" }
{% endraw %}

> __Recordar__ siempre usar el componente `<Link>` en lugar de `<a href="...">`, lo cual permite que React Router controle el cambio de rutas __sin recargar la página__.
{: .prompt-info }

Ahora para integrar la barra de navegación en la aplicación se debe usar __antes de donde definimos las rutas__. Entonces, editamos `App.jsx` para añadir el componente __Navbar__:

```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' // Importamos el componente
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar /> {/* 👈 aquí lo usamos */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
```
{: file="App.jsx"}

### Agregar pie de página

De la misma forma que vimos anteriormente, dentro de la carpeta `src/components`, crea un nuevo componente `Footer.jsx`:

```jsx
export default function Footer() {

	const styles = {
		footer: {
			marginTop: '2rem',
			padding: '1rem',
			background: '#20232a',
			textAlign: 'center',
		},
		text: {
			color: '#fff',
			fontSize: '0.9rem',
		},
	}

	return (
		<footer style={styles.footer}>
			<p style={styles.text}>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
		</footer>
	)
}
```
{:file="components/Footer.jsx"}

Ahora vamos a usar el componente justo después de las rutas para que se muestre en todas las páginas:

```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer' // Importamos el componente
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> {/* 👈 aquí lo usamos */}
    </>
  );
}
```
{: file="App.jsx"}

__A continuación, tenemos el resultado__:

{% include embed/video.html src="react-router-demo2.webm" %}

Pasa por el siguiente repostorio para revisar el código generado hasta ahora.

{% include github-repo.html owner="mc-herrera-90" repo="react-router-demo/tree/1-uso-de-enrutador-y-rutas" %}

## Navegación Programática

En las aplicaciones SPA, a veces no solo queremos navegar a otra página a través de un enlace `<Link>`, sino que queremos hacerlo de manera programada, es decir, desde una función de JavaScript.

Esto resulta útil, por ejemplo:

- Cuando un formulario se envía correctamente y queremos redirigir al usuario.
- Cuando después de iniciar sesión llevamos al usuario a su panel.
- Cuando ocurre un error y redirigimos a una página de error personalizada.

Aquí React Router nos ofrece el hook `useNavigate` que nos devuelve una función que podemos usar para cambiar de ruta programáticamente, por ejemplo:

```jsx
const navigate = useNavigate();
navigate('/ruta-a-la-que-quieres-ir');
```
{: .nolineno }

### Agregar la sección de Contacto

Vamos a trabajar en una nueva página en `pages/Contact.jsx` y creamos un formulario de contacto que al enviarse correctamente redirige a una página de agradecimiento:

```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular validación simple
    if (form.nombre && form.email && form.mensaje) {
      console.log('Formulario enviado:', form);

      // Redirigir al usuario a la página de agradecimiento
      navigate('/gracias');
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <section>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
```
{: file="pages/Contact.jsx"}

Y ahora nos falta crear esa página que se renderizará cuando la URL cambie a `/gracias`. Usaremos un componente funcional de React en `pages/Thanks.jsx` con el siguiente contenido para mostrar al usuario:

{% raw %}
```jsx
export default function Thanks() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>¡Gracias por contactarnos!</h2>
      <p>Tu mensaje ha sido enviado exitosamente. Te responderemos pronto.</p>
    </div>
  );
};
```
{: file="pages/Thanks.jsx"}
{% endraw %}


## Usar useParams

Este es un hook que devuelve un __objeto__ de pares clave/valor con los parámetros dinámicos de la URL actual que coincidieron con `<Route path>`. las rutas secundarias heredan todos los parámetros de las rutas principales.


{% tabs demo-useparams %}
{% tab demo-useparams ProfilePage %}
```jsx
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
    let { userId } = useParams();
    return <p>El parámetro en la URL actual es: {userId}</p>
}
```
{: .nolineno }
{% endtab %}
{% tab demo-useparams App %}
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="users">
                <Route path=":userId" element={<ProfilePage/>}>
            </Route>
        </Routes>
    )
};
```
{: .nolineno file="App.jsx" }
{% endtab %}
{% endtabs %}


<iframe 
  src="https://stackblitz.com/edit/vitejs-vite-ngj556f4?ctl=1&embed=1&file=src%2Fpages%2FProfilePage.jsx" 
  style="width:100%; max-width: 1200px; height:80vh; border:none; border-radius:12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); overflow:hidden;"
  allowfullscreen
></iframe>
