import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams(); // tomamos el id de la URL
  const [detalles, setDetalles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error("Error al cargar los detalles");
        const data = await response.json();
        setDetalles(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPokemon();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!detalles) return <div>Cargando detalles...</div>;

  return (
    <div className="pokemon-details">
      <h2>{detalles.name}</h2>
      <p>
        <strong>Tipo(s):</strong>{" "}
        {detalles.types.map((t) => t.type.name).join(", ")}
      </p>
      <h3>Stats</h3>
      <ul>
        {detalles.stats.map((stat) => (
          <li key={stat.stat.name}>
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
