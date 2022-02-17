import { Ablity } from "../types/ability";
import { PokemonApi } from "../types/pokemon";

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

export const getPokemonFilters = (pokemons: PokemonApi): Array<Ablity> => {
  const pokemonFilters: Array<Ablity> = [];

  pokemons?.forEach((pokemon) => {
    pokemon.pokemon_v2_pokemonabilities.forEach((ability) => {
      pokemonFilters.push({
        name: ability.pokemon_v2_ability.name,
        id: ability.pokemon_v2_ability.id,
      });
    });
  });
  const ids = pokemonFilters.map((o) => o.id);
  return pokemonFilters.filter(({ id }, index) => !ids.includes(id, index + 1));
};
