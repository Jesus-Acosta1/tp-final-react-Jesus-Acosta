import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/cards";
import Consultapoke from "../api/pokeapi";

function Home() {
  const id = 1; // ID del Pokémon que deseas mostrar (puedes cambiarlo)
  const pokemon = Consultapoke(id);
  return (
    <div className="home">
      <h1>Detalles de {id}</h1>
      <p>Explora y descubre información sobre tus Pokémon favoritos.</p>
      <Details pokemon={pokemon} />
    </div>
  );
}

export default Home;
