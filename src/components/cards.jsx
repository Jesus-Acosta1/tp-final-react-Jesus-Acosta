import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokeDetails from "../pages/pokedetails";
import Pokeball2 from "../assets/pokeball-2.png";
import corazon from "../assets/corazon.png";

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

  if (loading) return <div>Cargando...</div>;
  if (error || !data) return <div>Error cargando</div>;

  const img =
    data.sprites?.front_default.official_artwork ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

  // click de la imagen para ir a detalles//
  const onclick = () => {
    window.location.href = `/pokedetails/${data.id}`;
  };

  // const onclickfav = () => {
  //   window.location.href = `/favoritos`;
  // };

  return (
    <div className="cardStyle card">
      <img className="pokeball" src={Pokeball2} alt="Pokeball" />
      <img
        className="logo img-act"
        src={img}
        alt={data.name}
        onClick={onclick}
      />
      <h3 className="name-poke">{data.name}</h3>
      <p className="id-poke">Pokedex # {data.id}</p>
      {/* <p className="tipo">Tipo:{data.types[0].type.name}</p> */}
      <div className="card-buttons">
        <Link className="btn-det btn-act" to={`/pokedetails/${data.id}`}>
          Detalles
        </Link>
        {/* <img className="img-act" src={corazon} onClick={onclickfav} /> */}

        <Link className="btn-fav btn-act" to={`/pokefav`}>
          Favoritos
        </Link>
      </div>
    </div>
  );
}
export default Cards;
