import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokeDetails from "../pages/pokedetails";
import Pokeball2 from "../assets/pokeball-2.png";

function Cards({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((e) => {
        console.error("Fetch detail error:", e);
        if (!cancelled) setErr(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  if (loading) return <div className="cardStyle1">Cargando...</div>;
  if (error || !data) return <div className="cardStyle1">Error cargando</div>;

  const img =
    data.sprites?.front_default.official_artwork ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;

  const type = data.types?.[0]?.type?.name ?? "—";

  return (
    <div className="cardStyle card">
      <img className="pokeball" src={Pokeball2} alt="Pokeball" />
      <img className="logo img-act" src={img} alt={name} />
      <h3 className="name-poke">{name}</h3>
      <p className="id-poke">Pokedex # {data.id}</p>
      <p className="tipo">Tipo: {type}</p>
      <div className="card-buttons">
        <Link className="btn-det btn-act" to={`/pokedetails/${data.id}`}>
          Detalles
        </Link>
        <Link className="btn-fav btn-act" to={`/favoritos`}>
          Favoritos
        </Link>
      </div>
    </div>
  );
}
export default Cards;
