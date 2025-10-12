import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/cards";
import Consultapoke from "../api/pokeapi";

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a la Pokedex</h1>
      <p>Explora y descubre información sobre tus Pokémon favoritos.</p>
    </div>
  );
}

export default Home;
