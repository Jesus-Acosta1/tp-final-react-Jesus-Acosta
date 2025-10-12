import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PokeDetails from "./pages/pokedetails";
import PokeList from "./pages/pokelist";
import Consultapoke from "./api/pokeapi";
import Footer from "./components/footer";
import MostrarPokemons from "./api/pokeapi";
import "./css/index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
