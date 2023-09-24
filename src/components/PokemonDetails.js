import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <div className="pokemon-details-overlay">
      <div className="pokemon-details-card">
        <div className="pokemon-details-header">
          <h2>{pokemon.name}</h2>
          <button className="close-button" onClick={onClose}>
            Fechar
          </button>
        </div>
        <div className="pokemon-details-content">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>ID: {pokemon.id}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Tipos:</p>
          <ul>
            {pokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
