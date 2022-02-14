import { SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon";
import { Card } from "./Card";

interface CardGridProps {
  pokemons: Array<Pokemon>;
  isFavoritePage?: boolean;
}

export const CardGrid = (props: CardGridProps) => {
  const { pokemons, isFavoritePage = false } = { ...props };
  const [favorites, setFavorites] = useState<Array<string>>();

  useEffect(() => {
    //check favorites from localstorage
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <Stack spacing={{ base: "5", lg: "6" }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" w="100%">
        {pokemons?.map((pokemon) =>
          isFavoritePage && favorites?.includes(pokemon.id) ? (
            <Card
              key={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
              name={pokemon.name}
              url={pokemon.url}
              imageUrl={pokemon.imageUrl}
              isFavoriteInStorage={
                favorites?.includes(pokemon.id) ? true : false
              }
            />
          ) : (
            !isFavoritePage && (
              <Card
                key={pokemon.name}
                id={pokemon.id}
                types={pokemon.types}
                name={pokemon.name}
                url={pokemon.url}
                imageUrl={pokemon.imageUrl}
                isFavoriteInStorage={
                  favorites?.includes(pokemon.id) ? true : false
                }
              />
            )
          )
        )}
      </SimpleGrid>
    </Stack>
  );
};
