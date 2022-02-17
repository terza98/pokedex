import { Ablity } from "../types/ability";
import { Favorites } from "../types/favorites";
import { PokemonApi } from "../types/pokemon";

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const setFavoriteToLocalStorage = (id: number): void => {
  const favorites: Favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
  const username: string = localStorage.getItem("username") || "";

  const newFavorites: typeof favorites = [...favorites];
  console.log(newFavorites.length);
  if (newFavorites.length)
    favorites.forEach((favorite, ind) => {
      let favoritesArray: typeof favorite.favorites = [];

      if (favorite.username === username) {
        favoritesArray = favorite.favorites;
        const index = favoritesArray.indexOf(id);
        if (index > -1) {
          favoritesArray.splice(index, 1);
        } else favoritesArray.push(id);

        //add new object to array
        newFavorites[ind].favorites = favoritesArray;
      } else {
        favoritesArray.push(id);
        newFavorites.push({
          favorites: favoritesArray,
          username: username,
        });
      }
    });
  else
    newFavorites.push({
      favorites: [id],
      username: username,
    });

  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const isFavorite = (favorites: Favorites, id: number): boolean => {
  const username: string = localStorage.getItem("username") || "";

  return favorites.some(
    (it) => username === it.username && it.favorites.includes(id)
  );
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
