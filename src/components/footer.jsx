import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        Esta Pokédex es un proyecto creado como trabajo práctico para el curso
        de la <strong>Programacion frontend de la UTN </strong> utilizando{" "}
        <strong>React</strong> y consume datos de la{" "}
        <a href="https://pokeapi.co" target="_blank">
          PokéAPI
        </a>
        . La idea es aprender sobre consumo de APIs, manejo de estados globales
        y diseño con componentes reutilizables.
      </p>
      <p>Hecho por Jesus Acosta</p>
      <p>
        Desarrollador en formación GitHub: https://github.com/Jesus-Acostag15
      </p>
      <p>© 2025 Pokedex. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
