import { PokemonButton } from "components/pokemon-api/PokemonButton";
import { PokemonList } from "components/pokemon-api/PokemonList";
import { PokemonLoading } from "components/pokemon-api/PokemonLoading";
import { PageTitle } from "components/ui/PageTitle";
import { useState } from "react";

export const PokemonApiPage = () => {
  const [pokemons, setPokemons] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearchPokemon = async () => {
    setLoading(true);
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807");
    const data = await response.json();
    setPokemons(data.results);
    setLoading(false);
  };

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="24. Pokemon API" />
      <section className="mt-8 flex w-full justify-center">
        <div>
          <PokemonButton onClick={handleSearchPokemon} />
          <PokemonLoading loading={loading} />
          <PokemonList pokemons={pokemons} />
        </div>
      </section>
    </div>
  );
};
