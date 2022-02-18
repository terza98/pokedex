import { BaseLayout } from "../../components/BaseLayout";
import { ALL_POKEMONS } from "../../api/queries";
import apolloClient from "../../api/apollo-client";
import { Pokemon } from "../../types/pokemon";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;

  // couldn't find endpoint info for only one pokemon so I did it like this
  // otherwise I would pass id as a variable

  const { data } = await apolloClient.query({
    query: ALL_POKEMONS,
  });
  const pokemon =
    data.pokemon_v2_pokemon.find((pok) => pok.id === parseInt(id, 10)) || null;

  return {
    props: { pokemon }, // will be passed to the page component as props
  };
}

interface PageProps {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: PageProps) => (
  <BaseLayout>
    <Box p={10}>
      <Heading fontSize="xl">
        Example fetching pokemon data inside getServerSideProps
      </Heading>
      <Image
        width="250px"
        height="250px"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
          "000" + pokemon?.id
        ).substr(-3)}.png`}
      ></Image>
      <Text>#{pokemon?.id}</Text>
      <Heading size="md">{pokemon?.name}</Heading>
    </Box>
  </BaseLayout>
);

export default PokemonPage;
