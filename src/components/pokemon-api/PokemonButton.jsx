export const PokemonButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-gray-600 py-2 px-6 text-white"
    >
      Fetch Pokemon
    </button>
  );
};
