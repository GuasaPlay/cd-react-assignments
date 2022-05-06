export const PokemonList = ({ pokemons }) => {
  return (
    <ul className="mt-4 list-inside list-disc">
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          <a href={pokemon.url} target="__blank">
            {pokemon.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
