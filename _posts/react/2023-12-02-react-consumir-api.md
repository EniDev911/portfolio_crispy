---
title: ⚛️ Consumir API en React
author: enidev911
categories: [Desarrollo Web, React]
tags: [desarrollo web, react]
image: posters/react-axios-api.png
---

En este artículo, aprenderemos a consumir una API usando React especificamente la API de Rick and Morty. Esta API es excelente para practicar, ya que es una API púiblica que devuelve datos de personajes, episodios y ubicaciones de la serie animada.

### Crear el Proyecto con Vite

Para crear un nuevo proyecto de React y configurado con TypeScript utilizando [Vite](https://vite.dev/){: target='_blank'}, puedes usar el siguiente comando:

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

### Creación un Hook personalizado para la API

Ahora vamos a crear un **hook personalizado** llamado `useRickAndMortyAPI` que nos permita consumir la API de **Rick and Morty** y gestionar el estado de carga y error.

#### Definir la Estructura de los Datos

Primero, vamos a definir las interfaces para los datos que vamos a recibir de la API. La API de Rick and Morty devuelve una lista de personajes y su información en un formato específico, así que vamos a crear una interfaz para representar esta estructura de datos.

Creamos una nueva carpeta llamada `hooks` dentro de `src/` y dentro de ella, creamos el archivo `useRickAndMortyAPI.ts` y agregamos lo siguiente:

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
- `useEffect`: Se usa para ejecutar la función `fetchCharacters` cuando el componente se monta o cual la URL cambia (en este caso, cuando cambiamos la página de personajes).
- `axios.get`: Se usa para realizar solicitudes HTTP a la API. El tipo de respuesta esperado es `Apiresponse`, que contiene una lista de personajes.

---

### Crear el Componente para Mostrar los Personajes

Ahora vamos a crear un componente llamado `CharacterList` que use el hook `useRickAndMortyAPI` para obtener y mostrar los personajes.

Creamos el archivo  `CharacterList.tsx` dentro de `src/componentes` y aquí está el código para el componente `CharacterList`:

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

---

### Agregar Estilos Básicos

Para mejorar la apariencia de nuestra aplicación, podemos agregar algunos estilos. Vamos a agregar o remplazar los estilos en `src/App.css` con los siguientes estilos:

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

---

### Importar el Componente en App.tsx

Finalmente, integramos todo en el componente `App.tsx` para mostrar la lista de personajes:

{% raw %}
```tsx
import CharacterList from "./components/CharacterList";

function App() {
  return <CharacterList />
}

export default App;
```
{: .nolineno file="App.tsx" }
{% endraw %}
