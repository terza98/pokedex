import { SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Favorites } from "../../types/favorites";
import { PokemonApi } from "../../types/pokemon";
import { isFavorite } from "../../utils/helpers";
import { NotificationWithSeparator } from "../Notifications/NotificationWithSeparator";
import { Card } from "./Card";

interface CardGridProps {
  pokemons: PokemonApi;
  isFavoritePage?: boolean;
}

export const CardGrid = (props: CardGridProps) => {
  const { pokemons, isFavoritePage = false } = { ...props };
  const [favorites, setFavorites] = useState<Favorites>([]);
  const [notification, setNotification] = useState<boolean>(false);

  const updateFavorites = (): void => {
    // TODO: check update on favorite page
    // setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);

    //show success notification
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  };

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  return (
    <Stack spacing={{ base: "5", lg: "6" }}>
      <NotificationWithSeparator
        title="Success!"
        description="Successfuly changed favorite pokemon."
        color="green"
        isOpen={notification}
        onClose={() => setNotification(false)}
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" w="100%">
        {pokemons?.map((pokemon) =>
          isFavoritePage && isFavorite(favorites, pokemon.id) ? (
            <Card
              key={`${pokemon.id}-${pokemon.name}`}
              id={pokemon.id}
              pokemon_v2_pokemonabilities={pokemon.pokemon_v2_pokemonabilities}
              name={pokemon.name}
              url={`/pokemon/${pokemon.id}`}
              //used this link since I couldn't find imgs from their APIs
              imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                "000" + pokemon.id
              ).substr(-3)}.png`}
              isFavoriteInStorage={isFavorite(favorites, pokemon.id)}
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
                isFavoriteInStorage={isFavorite(favorites, pokemon.id)}
                updateAllFavorites={updateFavorites}
              />
            )
          )
        )}
      </SimpleGrid>
    </Stack>
  );
};
