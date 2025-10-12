import { useState, useEffect } from "react";
import Cards from "../components/cards";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [cargar, setCargar] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${cargar}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => {
        console.error("Error al cargar:", error);
      });
  }, [cargar]);

  const CargarMas = () => {
    setCargar((prev) => prev + 20);
  };
  const CargarMenos = () => {
    setCargar((prev) => prev - 20);
  };

  return (
    <div className="lista">
      <h1>Listado de Pokemons</h1>
      <div className="poke-list">
        {pokemons.map((pokemon, index) => (
          <Cards key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      <span className="btn-cargar">
        <button className="sig-ant" onClick={CargarMenos}>
          Atras
        </button>
        <button className="sig-ant" onClick={CargarMas}>
          Adelante
        </button>
      </span>
    </div>
  );
}

export default PokeList;
