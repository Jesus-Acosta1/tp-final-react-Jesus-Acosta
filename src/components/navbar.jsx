import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import PokeList from "../pages/pokelist";
import PokeDetails from "../pages/pokedetails";

function NavBar() {
  const onclick = () => {
    window.location.href = `/`;
  };
  return (
    <nav className="barra">
      <h1>POKEDEX</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link " to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pokelist">
            Pokemons
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
