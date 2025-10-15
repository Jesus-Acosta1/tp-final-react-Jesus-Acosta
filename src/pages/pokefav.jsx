import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Cards from "../components/cards";
import Consultapoke from "../api/pokeapi";

function PokeFav() {
  return (
    <div className="home">
      <h1>tus pokémon favoritos en su solo lugar</h1>
      <p>tus Pokémon favoritos.</p>
    </div>
  );
}

export default PokeFav;
