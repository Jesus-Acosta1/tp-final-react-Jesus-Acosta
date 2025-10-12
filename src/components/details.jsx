import React from "react";

const Details = ({ pokemon }) => {
  if (!pokemon) return <div>No hay datos disponibles.</div>;

  const img =
    data.sprites?.front_default.official_artwork ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
  const type = data.types?.[0]?.type?.name ?? "—";
  const languageUrl = `https://pokeapi.co/api/v2/language/7/`;
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <p>
        <strong>Tipo(s):</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
      <h3>Stats</h3>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
