import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import PokeList from "../pages/pokelist";
import PokeDetails from "../pages/pokedetails";

function NavBar() {
  return (
    <ul className="nav nav-underline bg-danger ">
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
  );
}
export default NavBar;
