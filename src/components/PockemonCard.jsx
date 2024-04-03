import React from "react";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      {/* Affichage de l'image du Pokémon s'il est disponible */}
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </div>
  );
}

const pokemon = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

// Définition des types de prop avec PropTypes
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
