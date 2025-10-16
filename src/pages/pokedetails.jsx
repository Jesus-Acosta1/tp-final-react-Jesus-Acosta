import React from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/cards";
import Consultapoke from "../api/pokeapi";
import { useState, useEffect } from "react";

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
    <>
      <div className="pages">
        <h1 className="name-poke">{pokeDetalles.name}</h1>
        <h3>ID: {pokeDetalles.id}</h3>
        <div className="header">
          <img className="img-deta img-act" src={img} alt={pokeDetalles.name} />
        </div>

        <div className="poke-details">
          <div className="card tipe">
            <p>Tipo:</p>
            <p>{pokeDetalles.types[0]?.type.name}</p>
            <p>{pokeDetalles.types[1]?.type.name}</p>
          </div>
          {/* ------------------------------ */}
          <div className="card hab">
            <p>Experiencia base: {pokeDetalles.base_experience} </p>
            <p>Habilidades: {pokeDetalles.abilities[0]?.ability.name} </p>
            <p>Habilidades: {pokeDetalles.abilities[1]?.ability.name} </p>
          </div>
          {/* ------------------------------ */}
          <div className="card stats">
            <p>stats</p>
            <p>Hp: {pokeDetalles.stats[0]?.base_stat} </p>
            <p>Ataque: {pokeDetalles.stats[1]?.base_stat} </p>
            <p>Defensa: {pokeDetalles.stats[2]?.base_stat} </p>
            <p>Ataque Especial: {pokeDetalles.stats[3]?.base_stat} </p>
            <p>Defensa Especial: {pokeDetalles.stats[4]?.base_stat} </p>
            <p>Velocidad: {pokeDetalles.stats[5]?.base_stat} </p>
          </div>
          <div className="card moves">
            {/* ---------------------------------- */}
            <p>Movimientos:</p>
            <p>1. {pokeDetalles.moves[0]?.move.name} </p>
            <p>2. {pokeDetalles.moves[1]?.move.name} </p>
            <p>3. {pokeDetalles.moves[2]?.move.name} </p>
            <p>4. {pokeDetalles.moves[3]?.move.name} </p>
            <p>5. {pokeDetalles.moves[4]?.move.name} </p>
          </div>
          {/* ---------------------------------- */}
          <div className="card hw">
            <p>Peso: {pokeDetalles.weight / 10} kg</p>
            <p>Altura: {pokeDetalles.height / 10} metros</p>
          </div>
        </div>
        <div className="card-buttons">
          <Link className="btn-det btn-act" to={`/pokelist`}>
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default PokeDetails;
