import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PokeDetails from "./pages/pokedetails";
import PokeList from "./pages/pokelist";
import Consultapoke from "./api/pokeapi";
import Footer from "./components/footer";
import MostrarPokemons from "./api/pokeapi";
import "./css/index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokelist" element={<PokeList />} />
          <Route path="/pokedetails/:id" element={<PokeDetails />} />
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
