import { Pokemon, PokemonApi } from "../types/pokemon";

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const setFavoriteToLocalStorage = (id: string): void => {
  let newFavorites = [];
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites) newFavorites = favorites;

  const index = newFavorites.indexOf(id);
  if (index > -1) {
    newFavorites.splice(index, 1);
  } else newFavorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const formatPokemons = (
  pokemons: Array<Pokemon>,
  data: PokemonApi
): Array<Pokemon> => {
  const newPokemons = [...pokemons];

  data?.pokemon_v2_pokemon.forEach((pokemon) => {
    newPokemons.push({
      name: pokemon.name,
      id: pokemon.id,
      experience: pokemon.base_experience,
      types: pokemon.pokemon_v2_pokemonabilities,
      //adding imageUrl like this since I couldn't find API endpoint which has images
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
        "000" + pokemon.id
      ).substr(-3)}.png`,
      url: `/pokemon/${pokemon.id}`,
    });
  });

  return newPokemons;
};
