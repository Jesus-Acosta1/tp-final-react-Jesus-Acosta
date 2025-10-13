import React from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/cards";
import Consultapoke from "../api/pokeapi";
import { useState, useEffect } from "react";
import Details from "../components/details";

function PokeDetails() {
  const { id } = useParams();
  const [pokeDetalles, setPokeDetalles] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokeDetalles(data))
      .catch((error) => {
        console.log("Error al cargar detalles:", error);
      });
  }, [id]);

  if (!pokeDetalles) return <p>Cargando detalles...</p>;

  const img =
    pokeDetalles.sprites?.front_default.official_artwork ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="cardStyle details">
      <h1 className="name-poke">{pokeDetalles.name}</h1>
      <img className="img-deta img-act" src={img} alt={pokeDetalles.name} />
      <p>ID: {pokeDetalles.id}</p>
      <p>Tipo: {pokeDetalles.types[0].type.name}</p>
      <p>Peso: {pokeDetalles.weight}</p>
      <p>Altura: {pokeDetalles.height}</p>
      <div className="card-buttons">
        <Link className="btn-det btn-act" to={`/pokelist`}>
          Volver
        </Link>
      </div>
    </div>
  );
}

export default PokeDetails;
