import { useState, useEffect } from "react";

function MostrarPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemon(data.results);
      });
  }, []);
}
export default MostrarPokemon;
