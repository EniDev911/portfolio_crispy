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

### Estructura de Archivos

Para mantener una buena organización, vamos a estructurar nuestros archivos de la siguiente manera:

```bash
src/
├── assets/
│   └── styles.css          # Estilos globales para los temas
├── components/
│   └── App.tsx             # Componente principal de la aplicación
├── context/
│   ├── ThemeContext.tsx    # Contexto para gestionar el tema
├── AppWithThemeProvider.tsx # Componente que envuelve la aplicación con ThemeProvider
├── index.tsx               # Punto de entrada de la aplicación
└── index.css               # Estilos globales para la aplicación
```
{: .noheader .nolineno }

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
const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme solo puede usarse dentro de ThemeProvider");
  }
  return context;
};
```
{: .nolineno file="ThemeContext.tsx"}
{% endraw %}

---

### Uso del Contexto en los Componentes

Dentro de nuestro componente `App.tsx`, vamos a usar el contexto para aplicar el tema y permitir que el usuario lo cambie con un botón:

{% raw %}
```tsx
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // cambiar la clase del body según el tema
    document.body.className = theme;
  }, [theme])
}
```
{: .nolineno file="App.tsx" }
{% endraw %}

---

### Ejemplo en CodeSandbox

<iframe src="https://codesandbox.io/embed/m3v69n?view=preview&module=%2Fsrc%2Fcontext%2FThemeContext.tsx&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="theme-provider"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
