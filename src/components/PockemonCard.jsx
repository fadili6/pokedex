import { React } from "react";

function PokemonCard({pokemon}) {
  // Récupération des données du premier Pokémon du tableau

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
export default PokemonCard;
