---
title: 🌙 Implementando un Theme Provider en React
author: enidev911
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
image: posters/react-theme-provider.png
pin: true
---

En React, uno de los patrones más comunes es el uso de un **Theme Provider** para gestionar el tema visual de la aplicación. Con esto podemos cambiar el aspecto de la interfaz de usuario según el tema (oscuro o claro) y permite que el usuario elija su preferencia de forma persistente.

En este post veremos cómo implementar un Theme Provider en **React** con **TypeScript** usando el contexto de React (`context API`) y algunos estilos globales.

### Crear la Aplicación de React

Para crear una aplicación de React configurada con TypeScript utilizando [Vite](https://vite.dev/){: target='_blank'}, puedes usar el siguiente comando:

```terminal
npm create vite@latest react-theme-provider -- --template react-ts
```

Una vez creado el proyecto, navegamos a la carpeta generada y ejecutamos el comando para instalar las dependencias:

```terminal
cd react-theme-provider
npm install
```

Luego de forma opcional, inicia el servidor de desarrollo para ver la aplicación que nos crea vite:

```terminal
npm run dev
```

### Estructura de Archivos

A pesar de que vite nos crea la estructura y la configuración, recomiendo organizar los archivos de la carpeta `src` de la siguiente manera:

```bash
src/
├── assets/
│   └── styles.css          # Estilos globales para los temas
├── components/
│   └── ToggleTheme.tsx     # Componente que cambia el tema
├── context/
│   └── ThemeContext.tsx    # Contexto para gestionar el tema
├── App.tsx                 # Componente principal de la aplicación
├── index.tsx               # Punto de entrada de la aplicación
└── index.css               # Estilos globales para la aplicación
```
{: .noheader .nolineno .p-0 }

---

### Creación del Contexto del Tema

Primero, vamos a crear el archivo `ThemeContext.tsx` dentro de la carpeta `context`. Este archivo se encargará de definir el contexto para el tema y la función para alternar entre temas.


{% raw %}
```tsx
import { createContext, useState, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

// Definir el tipo de contexto
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Crear el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Componente proveedor del tema
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hooks personalizado para usar el contexto del tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme solo puede usarse dentro de ThemeProvider");
  }
  return context;
};
```
{: .nolineno file="ThemeContext.tsx"}
{% endraw %}

Resumiendo el código anterior, tenemos lo siguiente:

- `ThemeContext`: Este contexto gestiona el estado del tema (`light` o `dark`)
- `toggleTheme`: Esta función cambia el tema actual.
- `useTheme`: Este hook personalizado nos permite acceder al contexto desde cualquier componente.

---

### Crear el Componente de Cambio de Tema

Ahora vamos abrir o crear (si aún no lo haces) el componente `ThemeToggle` que permitirá al usuario alternar entre el tema claro y el tema oscuro:

{% raw %}
```tsx
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar el tema a {theme === "light" ? "Oscuro" : "Claro"}
    </button>
  );
};

export default ThemeToggle;
```
{: .nolineno file="ThemeToggle" }
{% endraw %}

---

### Definir los estilos

Ahora vamos a aplicar los estilos de los temas usando [**variables CSS**](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties){: target='_blank' }. En lugar de definir los colores en un objeto de JavaScript, utilizaremos las variables de CSS para cada tema. Luego, cambiamos las clases `light` y `dark` en el `body` de la aplicación:

```css
/* Variables para el tema claro */
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --button-bg: #007bff;
}

/* Variables para el tema oscuro */
body.dark {
  --background-color: #333333;
  --text-color: #ffffff;
  --button-bg: #0056b3;
}

body {
  margin: 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  font-family: sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

button {
  background-color: var(--button-bg);
  color: var(--text-color);
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
```
{: .nolineno file="styles.css" }

---

### Uso del Contexto en los Componentes

Dentro de nuestro componente `App.tsx`, vamos a usar el contexto para aplicar el tema y permitir que el usuario lo cambie con un botón:

{% raw %}
```tsx
import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle"
import { useTheme } from "./context/ThemeContext"

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <ThemeToggle />
      <h1>Ejemplo de Theme Provider</h1>
    </div>
  );
};

export default App;
```
{: .nolineno file="App.tsx" }
{% endraw %}

---

### Renderizar la Aplicación en main.tsx

Finalmente, en `main.tsx`, renderizamosla aplicación asegurándonos de que el `ThemeProvider` esté envolviendo el componente `App`.

{% raw %}
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```
{: .nolineno file="main.tsx" }
{% endraw %}

---

### Persistir las Preferencia del usuario

Vamos a modificar el contexto del tema para usar [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage){: target='_blank' }, y se recupere cuando el componente se monte.

Abrimos el archivo `ThemeContext.tsx` y añadimos lo siguiente:

{% raw %}
```tsx
import { createContext, useState, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

// Definir el tipo de contexto
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Crear el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Componente proveedor del tema
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Obtener el tema guardado del localstorage, o por defecto 'light'
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme || "light");

  // Función para cambiar el tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hooks personalizado para usar el contexto del tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme solo puede usarse dentro de ThemeProvider");
  }
  return context;
};
```
{: .nolineno file="ThemeContext.tsx" }
{% endraw %}
{: .nolineno }

Y si observamos bien, solo hemos agregado 2 líneas:

- `const storedTheme = localStorage.getItem('theme') as Theme | null;`
- `localStorage.setItem("theme", newTheme);`

El resto se mantiene y ya tenemos guardada la preferencia del usuario en `localStorage`.

### Ejemplo en CodeSandbox

Puedes ver el ejemplo funcionando en el siguiente CodeSandBox:

<iframe src="https://codesandbox.io/embed/m3v69n?view=preview&module=%2Fsrc%2Fcontext%2FThemeContext.tsx&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="theme-provider"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
