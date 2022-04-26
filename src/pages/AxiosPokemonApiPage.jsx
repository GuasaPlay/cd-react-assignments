import { PokemonButton } from "components/pokemon-api/PokemonButton";
import { PokemonList } from "components/pokemon-api/PokemonList";
import { PokemonLoading } from "components/pokemon-api/PokemonLoading";
import { PageTitle } from "components/ui/PageTitle";
import { useState } from "react";
import axios from "axios";
export const AxiosPokemonApiPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchPokemon = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=807"
    );
    setPokemons(response.data.results);
    setLoading(false);
  };

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="25. Axios Pokemon API" />
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
