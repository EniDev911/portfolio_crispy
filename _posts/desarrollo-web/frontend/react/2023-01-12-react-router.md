---
title: 💻 React Router 
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
---

## __Instalación__

Lo primero, instalar react router:

```terminal
npm install react-router-dom
```

> Si usas TypeScript:
> `npm install --save-dev @types/react-router-dom`
{: .prompt-info }

## __Estructrura del proyecto__

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

## __Estructura básica del enrutamiento__

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

## __Usar `useRoutes`__

En lugar de `<Routes>`, también podemos usar el hook `useRoutes` para lograr lo mismo.

Las rutas anidadas que definimos `src/App.jsx` se pueden reescribir con `useRoutes`.

