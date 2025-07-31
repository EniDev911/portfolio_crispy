---
title: React Router 
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---


## ¿Cómo funciona?

Cuando el usuario hace clic en un enlace o escribe directamente la URL en la barra de direcciones del navegador, React Router actualiza la interfaz sin recargar toda la página, esto se logra manipulando el historial de navegación y utilizando componentes para cambiar el contenido dinámicamente, todo del lado del cliente. Veamos la siguiente ilustración:

![Web root](react/rr-web-root.webp)


![Web about](react/rr-web-about.webp)

## Instalación

Lo primero, instalar react router:

```terminal
npm install react-router-dom
```

> Si usas TypeScript:
> `npm install --save-dev @types/react-router-dom`
{: .prompt-info }

## Estructrura del proyecto

```
/src
  /components
    Navbar.jsx
  /pages
    Home.jsx
    About.jsx
    Login.jsx
    Dashboard.jsx
    Profile.jsx
    Settings.jsx
    NotFound.jsx
  App.jsx
  main.jsx
```
{: .noheader .fit-content }


## Configurar rutas

El __enrutador__ o _router_ es un componente de nivel superior que permite que todos los demás componentes de navegación y hooks de React Router funcionen correctamente. React Router ofrece varios tipos de enrutadores, como `<BrowserRouter>`, `<HashRouter>`, `<StaticRouter>` y `<MemoryRouter>`. Para aplicaciones web del tipo SPA (_Single Page Application_), el más utilizado es `<BrowserRouter>`.

Una aplicación debe estar envuelta por un enrutador como `<BrowserRouter>`, que a su vez contiene uno o más bloques `<Routes>`. El componente `<Routes>` evalúa todos sus hijos `<Route>` para encontrar una coincidencia entre la URL actual y el patrón de ruta definido, y renderiza el componente correspondiente para esa parte de la aplicación.

El componente `<Route>` puede definirse como:

- __Objeto de ruta__, con la forma `{ path, element }`, cuando se usa una configuración basada en arrays.
- __Elementos JSX__, con la forma `<Route path="..." element={<Componente />}>`, que es el más común en proyectos con JSX.


## Estructura básica del enrutamiento

A partir de React Router v6, el enrutamiento se define de forma más declarativa con `<Routes>` y `<Route>`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                <Route path="/about" element={<About/>}>
                <Route path="*" element={<NotFound/>}>
                <Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
```
{:file="App.jsx"}

React Router usa el wildcard `*` para definir rutas no encontradas.

## __Navegación Programática__

```jsx
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Dashboard () {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Panel de control</h1>
            <nav>
                <Link to="perfil">
            </nav>
            <Outlet/>
        </div>
    )
}
```
{:file="Dashboard.jsx"}

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Configuracion from './pages/configuracion';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                <Route path="/about" element={<About/>}>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="perfil" element={<Perfil/>}>
                    <Route path="configuracion" element={<Configuracion>}>
                </Route>
                <Route path="*" element={<NotFound/>}>
                <Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
```
{:file="App.jsx"}

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
