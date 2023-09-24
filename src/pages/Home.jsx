import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import PokemonDetails from '../components/PokemonDetails';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    var endpoints = [];
    for (var i = 1; i < 251; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };


  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === '') {
      getPokemon();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
                onClick={() => setSelectedPokemon(pokemon.data)} // Define o Pokémon selecionado
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)} // Fecha os detalhes do Pokémon
        />
      )}
    </div>
  );
}