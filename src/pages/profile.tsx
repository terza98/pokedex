import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { BaseLayout } from "../components/BaseLayout";
import { CardGrid } from "../components/PokemonList/CardGrid";
import { mockApi } from "../components/PokemonList/_data";
import { Pokemon } from "../types/pokemon";

const Index = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>();

  useEffect(() => {
    setPokemons(
      mockApi.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    );
  }, []);

  return (
    <BaseLayout>
      <Box w="100%">
        <Heading m={5}>Your favorite pokemons:</Heading>
        <CardGrid pokemons={pokemons} isFavoritePage />
      </Box>
    </BaseLayout>
  );
};

export default Index;
