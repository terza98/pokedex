import { SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PokemonApi } from "../../types/pokemon";
import { Card } from "./Card";

interface CardGridProps {
  pokemons: PokemonApi;
  isFavoritePage?: boolean;
}

export const CardGrid = (props: CardGridProps) => {
  const { pokemons, isFavoritePage = false } = { ...props };
  const [favorites, setFavorites] = useState<Array<number>>();

  const updateFavorites = (id: number): void => {
    const newFavorites = [...favorites, id];
    newFavorites.filter((favorite) => favorite === id);
    setFavorites(newFavorites);
  };

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <Stack spacing={{ base: "5", lg: "6" }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" w="100%">
        {pokemons?.map((pokemon) =>
          isFavoritePage && favorites?.includes(pokemon.id) ? (
            <Card
              key={`${pokemon.id}-${pokemon.name}`}
              id={pokemon.id}
              pokemon_v2_pokemonabilities={pokemon.pokemon_v2_pokemonabilities}
              name={pokemon.name}
              url={`/pokemon/${pokemon.id}`}
              imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                "000" + pokemon.id
              ).substr(-3)}.png`}
              isFavoriteInStorage={
                favorites?.includes(pokemon.id) ? true : false
              }
              updateAllFavorites={updateFavorites}
            />
          ) : (
            !isFavoritePage && (
              <Card
                key={`${pokemon.id}-${pokemon.name}`}
                id={pokemon.id}
                pokemon_v2_pokemonabilities={
                  pokemon.pokemon_v2_pokemonabilities
                }
                name={pokemon.name}
                url={`/pokemon/${pokemon.id}`}
                imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                  "000" + pokemon.id
                ).substr(-3)}.png`}
                isFavoriteInStorage={
                  favorites?.includes(pokemon.id) ? true : false
                }
                updateAllFavorites={updateFavorites}
              />
            )
          )
        )}
      </SimpleGrid>
    </Stack>
  );
};
