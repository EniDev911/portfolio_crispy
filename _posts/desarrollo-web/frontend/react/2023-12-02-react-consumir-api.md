---
title: ⚛️ Conectar con API en React
author: enidev911
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
image:
  path: posters/react-api-rick-and-morty.webp
  lqip: data:image/webp;base64,UklGRooAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD/D+/4iIIBZMduZvnUFE/9MOAFZQOCBQAAAAsAMAnQEqFAALAD85hrlTryklorAIAeAnCWMAwNwiItTsEeTtYAAA/s1Fu8tXu1wsNWOTzsGuxcjB7aj2mML6iQS2lESOWeawgNjKrRueAAA=
---

En este artículo, aprenderemos a consumir una API usando React específicamente la API de Rick and Morty. Esta API es excelente para practicar, ya que es una API __pública__ y __gratuita__, y devuelve información de personajes, episodios y ubicaciones de la serie animada.

Vamos a construir una pequeña app que liste los personajes y muestre su información. Todo desde cero.

## __Requisitos Previos__

- Tener instalado __Node.js__ y __npm__ o __yarn__.
- Conocimientos básicos con los hooks `useState` y `useEffect`.

## __1. Crear el proyecto con Vite__ (recomendado)

Para crear un nuevo proyecto con una plantilla de React y configurado con TypeScript utilizando [Vite](https://vite.dev/){: target='_blank'}, puedes usar el siguiente comando:

```terminal
npm create vite@latest rick-and-morty-api -- --template react-ts
```

Una vez creado el proyecto, navegamos a la carpeta generada y ejecutamos el comando para instalar las dependencias:

```terminal
cd rick-and-morty-api
npm install
```

Luego de forma opcional, inicia el servidor de desarrollo para ver la aplicación que nos crea vite:

```terminal
npm run dev
```

![React Vite StartApp](desarrollo-web/vite-react-startapp-light.png){: .light }
![React Vite StartApp](desarrollo-web/vite-react-startapp-dark.png){: .dark }

## __2. Estructura de Archivos__

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


## __3. Crear un hook personalizado__

Ahora vamos a crear un **hook personalizado** llamado `useRickAndMortyAPI`, que nos permitirá consumir la API de manera reutilizable, y gestionar el estado de carga como los posibles errores.

Para ello, primero definiremos las interfaces necesarias para describir los datos que devuelve la API. Esta API nos entrega una lista de personajes junto con detalles como su nombre, especie e imagen, además de información sobre la paginación. Por lo tanto, vamos a tipar correctamente esa estructura para aprovechar las ventajas de TypeScript.

Creamos una nueva carpeta llamada `hooks` dentro de `src/` y dentro de ella, cream un archivo `useRickAndMortyAPI.ts` y escribimos lo siguiente:

{% raw %}
```ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

interface ApiResponse {
  results: Character[];
  info: {
    next: string | null;
  };
}

/**
 * Hook personalizado para consumir la API
 * @param url URL de la API
 * @returns characters (array), loading (boolean), error (string|null)
 */
const useRickAndMortyAPI = (url: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(url);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [url]);

  return { characters, loading, error };
};

export default useRickAndMortyAPI;
```
{: .nolineno file="useRickAndMortyAPI.ts"}
{% endraw %}

Resumiendo el código anterior, tenemos lo siguiente:

- **Estados:**
  - `characters`: Almacena los personajes obtenidos de la API.
  - `loading`: Indica si la petición aún esta en curso.
  - `error`: Almacena cualquier mensaje de error si la solicitud falla.
- `useEffect`: Se usa para ejecutar la función `fetchCharacters` cuando el componente se monta o cuando la URL cambia (en este caso, cuando cambiamos la página de personajes).
- `axios.get`: Se usa para realizar solicitudes HTTP a la API. El tipo de respuesta esperado es `Apiresponse`, que contiene una lista de personajes.

## __4. Usar el hook en un componente__

A continuación, vamos a crear un componente llamado `CharacterList`, el cual utilizará el hook `useRickAndMortyAPI` para obtener y mostrar los personajes.

Crea un archivo `CharacterList.tsx` dentro de `src/componentes`, y escribimos el siguiente código para el componente:

{% raw %}
```tsx
import React, { useState } from 'react';
import useRickAndMortyAPI from '../hooks/useRickAndMortyAPI';

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { characters, loading, error } = useRickAndMortyAPI(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page <= 1}>
          Anterior
        </button>
        <button onClick={handleNextPage}>
          Siguiente
        </button>
      </div>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
```
{: .nolineno file="CharacterList.tsx" }
{% endraw %}

Resumiendo el código anterior, tenemos lo siguiente:

**URL Dependiente del Estado page**

- La URL que pasamos al hook `useRickAndMortyAPI` ahora incluye la variable `page`, lo que hace que la URL cambie cada vez que el valor de `page` cambie.
- Como `page` está controlado con `useState` y el `useEffect` en el hook depende de la URL, el hook se ejecutará cada vez que el estado `page` cambie.

**Actualización de la Páginación**:

- Cuando haces clic en el botón <kbd>Anterior</kbd> o <kbd>Siguiente</kbd>, decrementamos o incrementamos el valor de `page`, lo que también cambia la URl y hace que el hook se ejecute de nuevo.

## __5. Agregar estilos básicos__

Para mejorar la apariencia de nuestra aplicación, podemos añadir algunos estilos simples. Vamos a editar o remplazar los estilos en `src/App.css` con los siguientes estilos:

```css
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.character-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 150px;
  text-align: center;
}

.character-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.character-card h3 {
  font-size: 16px;
  margin: 10px 0;
}

.character-card p {
  font-size: 14px;
  color: gray;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
}

.pagination button:disabled {
  background-color: #ccc;
}
```
{: .nolineno file="App.css" }

## __6. Importar el componente en App.tsx__

Finalmente, integramos todo en el componente `App.tsx` para mostrar la lista de personajes en pantalla.

Abre el archivo `src/App.tsx` y reemplaza su contenido con el siguiente:

{% raw %}
```tsx
import CharacterList from "./components/CharacterList";
import './App.css';

function App() {
  return <CharacterList />
}

export default App;
```
{: .nolineno file="App.tsx" }
{% endraw %}

## __7. Repositorio__

Pasa por el repositorio, ahí encontrarás el código completo por si quieres revisar la solución o clonarlo para experimentar por tu cuenta.

{% include github-repo.html owner="mc-herrera-90" repo="rick-and-morty-api" %}

Si te interesa seguir mejorando esta app, podrías:

* Agregar una barra de **búsqueda por nombre**.
* Implementar **filtros por especie o estado**.
* Usar **React Router** para ver el detalle de cada personaje.

¡El universo de Rick and Morty y el de React tienen mucho por explorar! 🚀

{% include circle-line.html %}

En este artículo construimos paso a paso una pequeña aplicación en **React** para consumir la API pública de **Rick and Morty**. Aprendimos a:

* Crear un **hook personalizado** para centralizar la lógica de consumo de datos.
* Usamos axios para hacer las peticiones HTTP de forma sencilla y elegante.
* Manejar estados de **carga** y **error** de forma eficiente.
* Utilizar **paginación** para navegar entre diferentes páginas de resultados.

Además, lo hicimos aprovechando el tipado de **TypeScript** y buenas prácticas.

Este tipo de ejercicios no solo nos ayuda a mejorar nuestras habilidades con React, sino también a escribir código limpio y reutilizable.
