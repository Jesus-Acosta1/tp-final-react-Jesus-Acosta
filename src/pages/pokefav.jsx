import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Cards from "../components/cards";
import Consultapoke from "../api/pokeapi";

function PokeFav() {
  return (
    <div className="home">
      <h2>Mis Pokémon Favoritos</h2>
      <p>
        Estos son tus compañeros de batalla favoritos. Puedes quitarlos o
        revisar sus detalles en cualquier momento.
      </p>
    </div>
  );
}

export default PokeFav;
